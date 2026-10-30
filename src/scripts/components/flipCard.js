// Component: FlipCard — Interactive 3D Physics Flip Card
// Ported and optimized for Vanilla JS / Vite from @react-bits/FlipCard-JS-CSS
// Features: 3D perspective tilt, spring-based smooth flipping, cursor-tracking glare,
// horizontal drag rotation with velocity fling, dynamic shadow, and keyboard accessibility.

import { formatINR } from '../utils/cart.js';
import { escapeHtml } from './productCard.js';

const SLOP = { fine: 4, coarse: 8 };
const FLING = 0.16;
const HISTORY_MS = 90;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const snap = deg => Math.round(deg / 180) * 180;
const isBack = deg => Math.abs(Math.round(deg / 180)) % 2 === 1;

/**
 * Initializes interactive 3D physics on a single .flip-card DOM element
 */
export function createFlipCard(cardEl, userOptions = {}) {
  if (!cardEl || cardEl._flipActive) return null;
  cardEl._flipActive = true;

  const defaultOptions = {
    axis: 'y',
    flipOnClick: true,
    draggable: true,
    dragDistance: 0,
    tilt: true,
    tiltMax: 12,
    glare: true,
    glareOpacity: 0.28,
    hoverScale: 1.03,
    perspective: 1100,
    stiffness: 170,
    damping: 20
  };

  const options = { ...defaultOptions, ...userOptions };
  const rotor = cardEl.querySelector('.flip-card__rotor');
  const shadow = cardEl.querySelector('.flip-card__shadow');
  const frontFace = cardEl.querySelector('.flip-card__face--front');
  const backFace = cardEl.querySelector('.flip-card__face--back');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let turn = 0;
  let targetTurn = 0;
  let tiltX = 0;
  let targetTiltX = 0;
  let tiltY = 0;
  let targetTiltY = 0;
  let lift = 1;
  let targetLift = 1;
  let sheen = 0;
  let targetSheen = 0;
  let gx = 50;
  let gy = 50;

  let grip = null;
  let rafId = null;
  let isHovered = false;

  // Render loop using spring smoothing
  const render = () => {
    if (rotor && !reduceMotion) {
      rotor.style.transform = `perspective(${options.perspective}px) scale(${lift.toFixed(4)}) rotateX(${tiltX.toFixed(2)}deg) rotateY(${(turn + tiltY).toFixed(2)}deg)`;
      cardEl.style.setProperty('--fc-gx', `${gx.toFixed(1)}%`);
      cardEl.style.setProperty('--fc-gy', `${gy.toFixed(1)}%`);
      cardEl.style.setProperty('--fc-sheen', sheen.toFixed(3));
    }

    if (shadow) {
      const facing = Math.abs(Math.cos((turn * Math.PI) / 180));
      const spread = 0.08 + 0.92 * facing;
      const shade = 0.1 + 0.9 * (facing * facing);
      shadow.style.transform = `scaleX(${spread.toFixed(3)})`;
      shadow.style.opacity = shade.toFixed(3);
    }
  };

  const updateFaceAria = () => {
    const flipped = isBack(snap(targetTurn));
    cardEl.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    if (frontFace) {
      frontFace.setAttribute('aria-hidden', flipped ? 'true' : 'false');
      if (flipped) frontFace.setAttribute('inert', '');
      else frontFace.removeAttribute('inert');
    }
    if (backFace) {
      backFace.setAttribute('aria-hidden', !flipped ? 'true' : 'false');
      if (!flipped) backFace.setAttribute('inert', '');
      else backFace.removeAttribute('inert');
    }
  };

  const tick = () => {
    const factor = 0.16;
    turn += (targetTurn - turn) * factor;
    tiltX += (targetTiltX - tiltX) * 0.2;
    tiltY += (targetTiltY - tiltY) * 0.2;
    lift += (targetLift - lift) * 0.2;
    sheen += (targetSheen - sheen) * 0.2;

    render();

    const delta = Math.abs(targetTurn - turn) + Math.abs(targetTiltX - tiltX) + Math.abs(targetTiltY - tiltY) + Math.abs(targetLift - lift);

    if (delta > 0.05 || grip) {
      rafId = requestAnimationFrame(tick);
    } else {
      turn = targetTurn;
      tiltX = targetTiltX;
      tiltY = targetTiltY;
      lift = targetLift;
      sheen = targetSheen;
      render();
      updateFaceAria();
      rafId = null;
    }
  };

  const startLoop = () => {
    if (!rafId) {
      rafId = requestAnimationFrame(tick);
    }
  };

  const flip = (instant = false) => {
    const base = snap(turn);
    const to = isBack(base) ? base - 180 : base + 180;
    targetTurn = to;
    if (instant || reduceMotion) {
      turn = to;
      render();
      updateFaceAria();
    } else {
      startLoop();
    }
  };

  const rest = () => {
    targetTiltX = 0;
    targetTiltY = 0;
    targetSheen = 0;
    targetLift = 1;
    startLoop();
  };

  // Pointer interaction
  const onPointerDown = (e) => {
    // If user clicked on a interactive button or regular link (not a flip trigger), do not capture
    if (e.button !== 0 || e.target.closest('button:not(.btn-flip-trigger), a:not(.btn-flip-trigger), input, select')) {
      return;
    }

    try {
      cardEl.setPointerCapture(e.pointerId);
    } catch {}

    grip = {
      id: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      baseTurn: turn,
      moved: false,
      slop: e.pointerType === 'touch' ? SLOP.coarse : SLOP.fine,
      hist: [{ t: performance.now(), v: turn }]
    };

    if (!reduceMotion) {
      targetLift = options.hoverScale;
    }
    startLoop();
  };

  const onPointerMove = (e) => {
    if (grip && grip.id === e.pointerId) {
      const dx = e.clientX - grip.startX;
      if (!grip.moved) {
        if (Math.abs(dx) < grip.slop || !options.draggable || reduceMotion) return;
        grip.moved = true;
        cardEl.setAttribute('data-dragging', '');
        targetTiltX = 0;
        targetTiltY = 0;
        targetSheen = 0;
      }

      const span = options.dragDistance > 0 ? options.dragDistance : (cardEl.offsetWidth || 300);
      const deg = grip.baseTurn + (dx / span) * 180;
      turn = deg;
      targetTurn = deg;

      const now = performance.now();
      grip.hist.push({ t: now, v: deg });
      while (grip.hist.length > 2 && now - grip.hist[0].t > HISTORY_MS) {
        grip.hist.shift();
      }

      render();
      return;
    }

    // Hover tilt calculation
    if (!options.tilt || reduceMotion || e.pointerType === 'touch') return;
    const r = cardEl.getBoundingClientRect();
    const px = clamp((e.clientX - r.left) / r.width, 0, 1);
    const py = clamp((e.clientY - r.top) / r.height, 0, 1);

    targetTiltX = (0.5 - py) * 2 * options.tiltMax;
    targetTiltY = (px - 0.5) * 2 * options.tiltMax;
    gx = px * 100;
    gy = py * 100;
    targetSheen = 1;
    startLoop();
  };

  const release = (e, cancelled) => {
    if (!grip || grip.id !== e.pointerId) return;

    try {
      if (cardEl.hasPointerCapture(e.pointerId)) {
        cardEl.releasePointerCapture(e.pointerId);
      }
    } catch {}

    cardEl.removeAttribute('data-dragging');
    const wasMoved = grip.moved;
    const g = grip;
    grip = null;

    if (!isHovered) {
      rest();
    }

    if (!wasMoved) {
      // Tap or Click
      if (!cancelled && options.flipOnClick) {
        flip(false);
      } else {
        targetTurn = snap(turn);
        startLoop();
      }
      return;
    }

    // Released after dragging: compute fling momentum
    let velocity = 0;
    const a = g.hist[0];
    const b = g.hist[g.hist.length - 1];
    if (!cancelled && a && b && b.t > a.t && performance.now() - b.t < 60) {
      velocity = ((b.v - a.v) / (b.t - a.t)) * 1000;
    }

    const here = turn;
    const to = cancelled ? snap(g.baseTurn) : clamp(snap(here + velocity * FLING), snap(here) - 180, snap(here) + 180);
    targetTurn = to;
    startLoop();
  };

  const onPointerEnter = (e) => {
    isHovered = true;
    if (!reduceMotion && e.pointerType !== 'touch') {
      targetLift = options.hoverScale;
      startLoop();
    }
  };

  const onPointerLeave = () => {
    isHovered = false;
    if (!grip) {
      rest();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.target.closest('button, a, input')) return;
      e.preventDefault();
      flip(false);
    }
  };

  // Dedicated flip button click triggers
  const onClick = (e) => {
    const flipTrigger = e.target.closest('.btn-flip-trigger');
    if (flipTrigger) {
      e.preventDefault();
      e.stopPropagation();
      flip(false);
    }
  };

  cardEl.addEventListener('pointerdown', onPointerDown);
  cardEl.addEventListener('pointermove', onPointerMove);
  cardEl.addEventListener('pointerup', e => release(e, false));
  cardEl.addEventListener('pointercancel', e => release(e, true));
  cardEl.addEventListener('lostpointercapture', e => release(e, true));
  cardEl.addEventListener('pointerenter', onPointerEnter);
  cardEl.addEventListener('pointerleave', onPointerLeave);
  cardEl.addEventListener('keydown', onKeyDown);
  cardEl.addEventListener('click', onClick);
  cardEl.addEventListener('dragstart', e => e.preventDefault());

  render();
  updateFaceAria();

  return {
    flip,
    destroy() {
      if (rafId) cancelAnimationFrame(rafId);
      cardEl.removeEventListener('pointerdown', onPointerDown);
      cardEl.removeEventListener('pointermove', onPointerMove);
      cardEl.removeEventListener('pointerenter', onPointerEnter);
      cardEl.removeEventListener('pointerleave', onPointerLeave);
      cardEl.removeEventListener('keydown', onKeyDown);
      cardEl.removeEventListener('click', onClick);
      cardEl._flipActive = false;
    }
  };
}

/**
 * Renders a 3D Flip Card for Master Carton Volume Deals
 * Front: High-res product image, badges, category, product title, pack/carton details & flip prompt
 * Back: Full wholesale price breakdown table, resale margin badge, key specs, dispatch SLA & +Cart button
 */
export function renderBulkFlipCard(product) {
  const badgeHtml = product.badge
    ? `<span class="badge product-card-badge">${escapeHtml(product.badge)}</span>`
    : `<span class="badge product-card-badge" style="background:#04ADFE; color:#070E1A;">Volume Deal</span>`;

  const lowestPrice = product.priceTiers && product.priceTiers.length > 0
    ? product.priceTiers[product.priceTiers.length - 1].price
    : product.unitPrice;

  return `
    <article class="flip-card product-card fade-up"
      role="region"
      tabindex="0"
      aria-label="${escapeHtml(product.name)} Wholesale Volume Card"
      data-id="${escapeHtml(product.id)}"
      data-axis="y"
      data-draggable="true"
    >
      <!-- Floating Ambient Shadow with Dynamic Spread & Fade -->
      <span class="flip-card__shadow" aria-hidden="true"></span>

      <div class="flip-card__rotor">
        <!-- 1. FRONT FACE: Image & Product Highlights -->
        <div class="flip-card__face flip-card__face--front">
          <div class="flip-front-img-wrap">
            ${badgeHtml}

            <!-- Quick Flip Chip (Top Right) -->
            <button type="button" class="flip-chip-btn btn-flip-trigger" aria-label="Flip to see wholesale price tiers">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
              <span>Flip for Tiers</span>
            </button>

            <img 
              src="${escapeHtml(product.images[0])}" 
              alt="${escapeHtml(product.name)}" 
              loading="lazy"
              draggable="false"
              onerror="this.src='https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80'"
            />
          </div>

          <div class="flip-front-body">
            <div class="flip-front-meta">
              <span class="product-card-cat">${escapeHtml(product.categoryName)}</span>
              <span class="flip-moq-pill">MOQ: ${product.moq} pcs</span>
            </div>

            <h3 class="product-card-title flip-card-title">
              <a href="#/product?id=${encodeURIComponent(product.id)}" class="flip-title-link">${escapeHtml(product.name)}</a>
            </h3>

            <div class="flip-front-specs-row">
              <span>${product.packQuantity ? `Pack of ${product.packQuantity} units` : ''}</span>
              ${product.cartonQuantity ? `<span class="specs-dot">•</span> <span>Carton: ${product.cartonQuantity}</span>` : ''}
            </div>

            <div class="flip-front-price-row">
              <div class="price-stack">
                <span class="wholesale-price-label">Wholesale Price</span>
                <div class="product-card-price">${formatINR(product.unitPrice)} <span class="price-unit">/ unit</span></div>
                ${lowestPrice < product.unitPrice ? `<span class="price-bulk-hint">As low as ${formatINR(lowestPrice)} on carton</span>` : ''}
              </div>
            </div>

            <!-- Bottom Flip Prompt Button -->
            <div class="flip-cue-bar btn-flip-trigger">
              <span class="flip-cue-pulse"></span>
              <span class="flip-cue-text">Tap or Drag to view Pricing Tiers &amp; Specs</span>
              <svg class="flip-cue-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
            </div>
          </div>

          <!-- Glare Sheen Reflection -->
          <span class="flip-card__glare" aria-hidden="true"></span>
        </div>

        <!-- 2. BACK FACE: Price Details, Tier Table, Specs & Quick Actions -->
        <div class="flip-card__face flip-card__face--back">
          <div class="flip-back-header">
            <div class="flip-back-eyebrow">
              <span class="flip-back-tag">VOLUME SPECIAL</span>
              <span class="flip-back-cat">${escapeHtml(product.categoryName)}</span>
            </div>
            <button type="button" class="flip-back-close-btn btn-flip-trigger" aria-label="Flip back to front view">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
              <span>Back</span>
            </button>
          </div>

          <h4 class="flip-back-title">${escapeHtml(product.name)}</h4>

          <!-- Price Details & Margin -->
          <div class="flip-pricing-block">
            <div class="flip-price-headline">
              <div>
                <div class="flip-price-sub">Starting Wholesale Rate</div>
                <div class="flip-price-large">${formatINR(product.unitPrice)} <span class="unit">/ unit</span></div>
              </div>
              <div class="flip-margin-badge">
                <span class="margin-lbl">Retail Margin</span>
                <span class="margin-val">35% – 55%</span>
              </div>
            </div>

            <!-- Tiered Wholesale Breakdown Table -->
            <div class="flip-tiers-table">
              <div class="flip-tier-head-row">
                <span>Volume Bracket</span>
                <span>Wholesale Rate</span>
                <span>Savings</span>
              </div>
              ${(product.priceTiers || []).map((tier, idx) => {
                const isCarton = idx === product.priceTiers.length - 1;
                const savingsPct = Math.round(((product.unitPrice - tier.price) / product.unitPrice) * 100);
                return `
                  <div class="flip-tier-data-row ${isCarton ? 'is-best-deal' : ''}">
                    <span class="tier-bracket">
                      ${tier.minQty}+ pcs
                      ${isCarton ? `<span class="carton-tag">Carton</span>` : ''}
                    </span>
                    <span class="tier-rate">${formatINR(tier.price)}</span>
                    <span class="tier-discount">${savingsPct > 0 ? `Save ${savingsPct}%` : 'Base MOQ'}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Key Commercial Specs -->
          <div class="flip-specs-list">
            <div class="flip-spec-item">
              <span class="spec-k">Master Carton:</span>
              <span class="spec-v">${product.cartonQuantity ? `${product.cartonQuantity} pcs` : 'Standard'}</span>
            </div>
            <div class="flip-spec-item">
              <span class="spec-k">Pack Size:</span>
              <span class="spec-v">${product.packQuantity ? `${product.packQuantity} units` : 'Retail Pack'}</span>
            </div>
            <div class="flip-spec-item">
              <span class="spec-k">Dispatch:</span>
              <span class="spec-v highlight-cyan">24h Express Cargo</span>
            </div>
            <div class="flip-spec-item">
              <span class="spec-k">GST Invoice:</span>
              <span class="spec-v highlight-cyan">100% ITC Eligible</span>
            </div>
          </div>

          <!-- Action Footer -->
          <div class="flip-back-actions">
            <button 
              type="button" 
              class="btn btn-primary btn-sm btn-card-add-cart" 
              data-product-id="${escapeHtml(product.id)}"
              aria-label="Add MOQ of ${escapeHtml(product.name)} to Cart"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span>+ Cart (${product.moq})</span>
            </button>

            <a href="#/product?id=${encodeURIComponent(product.id)}" class="btn-flip-view-detail" aria-label="View Full Product Details">
              <span>Full Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>

          <!-- Glare Sheen Reflection on Back -->
          <span class="flip-card__glare" aria-hidden="true"></span>
        </div>
      </div>
    </article>
  `;
}

/**
 * Initializes all .flip-card elements in document
 */
export function initFlipCards() {
  const cards = document.querySelectorAll('.flip-card');
  cards.forEach(card => {
    if (!card._flipActive) {
      createFlipCard(card);
    }
  });
}
