// Component: BounceCards — Physics-based spring bouncing cards
// Inspired by @react-bits/BounceCards-JS-CSS adapted for high-performance Vanilla JS

const PATTERN = [1, 0.5, -0.3, -1, 0.2, 0.75, -0.6, 0.35, -0.85, 0.1];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const step = (value, velocity, target, stiffness, damping, dt) => {
  const next = velocity + ((target - value) * stiffness - velocity * damping) * dt;
  return [value + next * dt, next];
};

export function initBounceCards(containerEl, userOptions = {}) {
  if (!containerEl) return null;

  const defaultOptions = {
    items: [],
    containerWidth: 980,
    containerHeight: 430,
    cardSize: 265,
    spread: 115,
    rotation: 10,
    arc: 0,
    pushDistance: 190,
    hoverScale: 1.06,
    bounciness: 0.6,
    animationDelay: 0.3,
    animationStagger: 0.06,
    borderWidth: 6,
    borderColor: '#ffffff',
    radius: 28,
    shadow: true,
    enableHover: true,
    onCardClick: null
  };

  const options = { ...defaultOptions, ...userOptions };
  const items = options.items;
  const count = items.length;
  if (count === 0) return null;

  const middle = (count - 1) / 2;
  const reach = Math.max(1, middle);

  const slots = items.map((_, i) => {
    const offset = i - middle;
    return {
      x: offset * options.spread,
      y: options.arc * (offset / reach) ** 2,
      rotate: options.rotation * PATTERN[i % PATTERN.length]
    };
  });

  const settings = {
    slots,
    cardSize: Math.max(10, options.cardSize),
    delay: Math.max(0, options.animationDelay),
    stagger: Math.max(0, options.animationStagger),
    bounciness: clamp(options.bounciness, 0, 1),
    enableHover: options.enableHover,
    pushDistance: options.pushDistance,
    hoverScale: clamp(options.hoverScale, 0.5, 2),
    clickable: typeof options.onCardClick === 'function'
  };

  // Build DOM
  const root = document.createElement('div');
  root.className = 'bounce-cards';
  root.style.width = typeof options.containerWidth === 'number' ? `${options.containerWidth}px` : options.containerWidth;
  root.style.height = typeof options.containerHeight === 'number' ? `${options.containerHeight}px` : options.containerHeight;
  root.style.setProperty('--bounce-cards-size', `${settings.cardSize}px`);
  root.style.setProperty('--bounce-cards-border', `${Math.max(0, options.borderWidth)}px`);
  root.style.setProperty('--bounce-cards-border-color', options.borderColor);
  root.style.setProperty('--bounce-cards-radius', `${Math.max(0, options.radius)}px`);
  root.style.setProperty(
    '--bounce-cards-shadow',
    options.shadow ? '0 4px 12px rgba(0, 0, 0, 0.12), 0 16px 36px -6px rgba(14, 26, 41, 0.28)' : 'none'
  );
  root.style.setProperty(
    '--bounce-cards-shadow-active',
    options.shadow ? '0 8px 24px rgba(0, 0, 0, 0.18), 0 24px 50px -8px rgba(0, 163, 224, 0.35)' : 'none'
  );

  containerEl.innerHTML = '';
  containerEl.appendChild(root);

  const cardEls = [];
  items.forEach((item, i) => {
    const cardEl = document.createElement('div');
    cardEl.className = `bounce-cards__card${settings.clickable ? ' bounce-cards__card--clickable' : ''}`;
    cardEl.style.zIndex = String(i + 1);
    if (settings.clickable) {
      cardEl.setAttribute('role', 'button');
      cardEl.setAttribute('tabindex', '0');
      cardEl.setAttribute('aria-label', item.name || item.alt || `Category ${i + 1}`);
    }

    const img = document.createElement('img');
    img.src = item.src || item.image || '';
    img.alt = item.alt || item.name || '';
    img.draggable = false;
    cardEl.appendChild(img);

    // Overlay with Title & CTA
    const overlay = document.createElement('div');
    overlay.className = 'bounce-cards__overlay';
    overlay.innerHTML = `
      <div class="bounce-cards__title">${item.name || ''}</div>
      <div class="bounce-cards__cta">
        <span>Browse Category</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>
    `;
    cardEl.appendChild(overlay);

    root.appendChild(cardEl);
    cardEls.push(cardEl);
  });

  // State & Physics Simulation
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const bodies = [];
  const state = { hovered: -1, time: 0, layer: -1 };
  let raf = 0;
  let last = performance.now();
  let alive = true;

  const body = i => {
    if (!bodies[i]) {
      const slot = settings.slots[i] ?? { x: 0, y: 0, rotate: 0 };
      bodies[i] = {
        x: slot.x,
        y: slot.y,
        rotate: slot.rotate,
        scale: reduce ? 1 : 0,
        vx: 0,
        vy: 0,
        vr: 0,
        vs: 0,
        born: state.time
      };
    }
    return bodies[i];
  };

  const frame = now => {
    raf = 0;
    if (!alive) return;
    const s = settings;
    const dt = Math.min(1 / 30, Math.max(1 / 240, (now - last) / 1000));
    last = now;
    state.time += dt;

    const hovered = s.enableHover ? state.hovered : -1;
    const popStiffness = 170;
    const popDamping = 2 * (1 - 0.85 * s.bounciness) * Math.sqrt(popStiffness);
    const moveStiffness = 210;
    const moveDamping = 2 * (reduce ? 1 : 0.72) * Math.sqrt(moveStiffness);
    const substeps = Math.ceil(dt / (1 / 240));
    const h = dt / substeps;
    let moving = 0;

    for (let i = 0; i < s.slots.length; i++) {
      const el = cardEls[i];
      if (!el) continue;
      const card = body(i);
      const slot = s.slots[i];
      const appeared = reduce || state.time - card.born >= s.delay + i * s.stagger;
      let targetX = slot.x;
      let targetY = slot.y;
      let targetRotate = slot.rotate;
      let targetScale = appeared ? 1 : 0;
      if (hovered >= 0 && appeared) {
        if (i === hovered) {
          targetY = slot.y - s.cardSize * 0.04;
          targetRotate = 0;
          targetScale = s.hoverScale;
        } else {
          targetX = slot.x + Math.sign(i - hovered) * s.pushDistance;
        }
      }
      for (let k = 0; k < substeps; k++) {
        [card.x, card.vx] = step(card.x, card.vx, targetX, moveStiffness, moveDamping, h);
        [card.y, card.vy] = step(card.y, card.vy, targetY, moveStiffness, moveDamping, h);
        [card.rotate, card.vr] = step(card.rotate, card.vr, targetRotate, moveStiffness, moveDamping, h);
        if (reduce) {
          card.scale = targetScale;
          card.vs = 0;
        } else {
          [card.scale, card.vs] = step(card.scale, card.vs, targetScale, popStiffness, popDamping, h);
        }
      }
      moving +=
        Math.abs(card.vx) +
        Math.abs(card.vy) +
        Math.abs(card.vr) +
        Math.abs(card.vs) * 100 +
        Math.abs(targetX - card.x) +
        Math.abs(targetY - card.y) +
        Math.abs(targetRotate - card.rotate) +
        Math.abs(targetScale - card.scale) * 100 +
        (appeared ? 0 : 1);
      el.style.transform = `translate(-50%, -50%) translate3d(${card.x.toFixed(2)}px, ${card.y.toFixed(2)}px, 0) rotate(${card.rotate.toFixed(3)}deg) scale(${Math.max(0, card.scale).toFixed(4)})`;
    }

    if (state.layer !== hovered) {
      state.layer = hovered;
      cardEls.forEach((el, i) => {
        if (!el) return;
        el.style.zIndex = i === hovered ? String(s.slots.length + 1) : String(i + 1);
        el.toggleAttribute('data-active', i === hovered);
      });
    }

    if (moving > 0.02) raf = requestAnimationFrame(frame);
  };

  const wake = () => {
    if (raf || !alive) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  const pick = event => {
    const s = settings;
    const rect = root.getBoundingClientRect();
    const px = event.clientX - rect.left - rect.width / 2;
    const py = event.clientY - rect.top - rect.height / 2;
    let best = -1;
    let distance = Infinity;
    s.slots.forEach((slot, i) => {
      const gap = Math.abs(px - slot.x);
      if (gap < distance) {
        distance = gap;
        best = i;
      }
    });
    if (best < 0) return -1;
    const slot = s.slots[best];
    const half = s.cardSize / 2;
    if (Math.abs(py - slot.y) > half + 24 || distance > half + 24) return -1;
    if (state.hovered >= 0 && state.hovered !== best) {
      const current = s.slots[state.hovered];
      if (current && Math.abs(px - current.x) - distance < 6) return state.hovered;
    }
    return best;
  };

  const onMove = event => {
    const next = pick(event);
    if (next !== state.hovered) {
      state.hovered = next;
      wake();
    }
  };
  const onLeave = () => {
    if (state.hovered !== -1) {
      state.hovered = -1;
      wake();
    }
  };
  const onClick = event => {
    const index = pick(event);
    if (index < 0) return;
    const card = bodies[index];
    if (card && !reduce) card.vs -= 2.2;
    wake();
    if (options.onCardClick) {
      options.onCardClick(index, items[index]);
    }
  };
  const onFocus = event => {
    const index = cardEls.indexOf(event.target);
    if (index >= 0) {
      state.hovered = index;
      wake();
    }
  };
  const onKey = event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const index = cardEls.indexOf(event.target);
    if (index < 0 || !settings.clickable) return;
    event.preventDefault();
    if (bodies[index] && !reduce) bodies[index].vs -= 2.2;
    wake();
    if (options.onCardClick) {
      options.onCardClick(index, items[index]);
    }
  };

  root.addEventListener('pointermove', onMove);
  root.addEventListener('pointerdown', onMove);
  root.addEventListener('pointerleave', onLeave);
  root.addEventListener('click', onClick);
  root.addEventListener('focusin', onFocus);
  root.addEventListener('focusout', onLeave);
  root.addEventListener('keydown', onKey);
  wake();

  return {
    destroy() {
      alive = false;
      cancelAnimationFrame(raf);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerdown', onMove);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('click', onClick);
      root.removeEventListener('focusin', onFocus);
      root.removeEventListener('focusout', onLeave);
      root.removeEventListener('keydown', onKey);
    }
  };
}
