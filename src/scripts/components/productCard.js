// Reusable Wholesale Product Card Component
import { formatINR } from '../utils/cart.js';

export function renderProductCard(product) {
  const badgeHtml = product.badge
    ? `<span class="badge product-card-badge">${escapeHtml(product.badge)}</span>`
    : (product.isCombo ? `<span class="badge product-card-badge" style="background-color: #04ADFE; color: #070E1A; font-weight: 800;">Combo Pack</span>` : '');

  // Lowest tier price vs starting tier price
  const lowestPrice = product.priceTiers && product.priceTiers.length > 0
    ? product.priceTiers[product.priceTiers.length - 1].price
    : product.unitPrice;

  if (product.isCombo) {
    return `
      <article class="product-card product-card-combo holo-card fade-up" 
        data-id="${escapeHtml(product.id)}"
        data-holo-preset="${escapeHtml(product.holoPreset || 'bursts')}"
        data-holo-foil="${escapeHtml(product.holoFoilColor || '#e2e6ec')}"
        data-holo-image="${escapeHtml(product.images[0])}"
        style="cursor: pointer;"
        onclick="window.location.hash='#/product?id=${encodeURIComponent(product.id)}'">
        <div class="holo-card__rotor">
          <div class="product-card-img-wrap holo-card__face holo-card__face--front">
            ${badgeHtml}
            <a href="#/product?id=${encodeURIComponent(product.id)}" aria-label="${escapeHtml(product.name)}">
              <img 
                src="${escapeHtml(product.images[0])}" 
                alt="${escapeHtml(product.name)}" 
                loading="lazy"
                draggable="false"
                onerror="this.src='https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80'"
              >
            </a>
          </div>
          <div class="product-card-body" style="padding: 1.1rem 1rem 1.25rem;">
            <h3 class="product-card-title" style="margin: 0; font-size: 1.05rem; line-height: 1.35;">
              <a href="#/product?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a>
            </h3>
          </div>
        </div>
      </article>
    `;
  }

  return `
    <article class="product-card fade-up" data-id="${escapeHtml(product.id)}" style="cursor: pointer;" onclick="window.location.hash='#/product?id=${encodeURIComponent(product.id)}'">
      <div class="product-card-img-wrap">
        ${badgeHtml}
        <a href="#/product?id=${encodeURIComponent(product.id)}" aria-label="${escapeHtml(product.name)}">
          <img 
            src="${escapeHtml(product.images[0])}" 
            alt="${escapeHtml(product.name)}" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80'"
          >
        </a>
      </div>
      <div class="product-card-body" style="padding: 1.1rem 1rem 1.25rem;">
        <h3 class="product-card-title" style="margin: 0; font-size: 1.05rem; line-height: 1.35;">
          <a href="#/product?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a>
        </h3>
      </div>
    </article>
  `;
}

export function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
