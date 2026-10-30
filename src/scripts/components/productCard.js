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
        data-holo-image="${escapeHtml(product.images[0])}">
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
          <div class="product-card-body">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
              <span class="product-card-cat">${escapeHtml(product.categoryName)}</span>
              <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">MOQ: ${product.moq} pcs</span>
            </div>

            <h3 class="product-card-title">
              <a href="#/product?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a>
            </h3>

            <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0.75rem;">
              ${product.packQuantity ? `Pack of ${product.packQuantity} units` : ''} 
              ${product.cartonQuantity ? `• Carton: ${product.cartonQuantity}` : ''}
            </div>

            <div class="product-card-price-row">
              <div class="price-stack">
                <span class="wholesale-price-label">Wholesale Price</span>
                <div class="product-card-price">${formatINR(product.unitPrice)} <span class="price-unit">/ unit</span></div>
                ${lowestPrice < product.unitPrice ? `<span class="price-bulk-hint">As low as ${formatINR(lowestPrice)}</span>` : ''}
              </div>
            </div>

            <div class="product-card-footer">
              <a href="#/product?id=${encodeURIComponent(product.id)}" class="product-card-link">
                <span>View Details</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <button 
                type="button" 
                class="btn btn-primary btn-sm btn-card-add-cart" 
                data-product-id="${escapeHtml(product.id)}"
                aria-label="Add MOQ of ${escapeHtml(product.name)} to Cart"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span>+ Cart (${product.moq})</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  return `
    <article class="product-card fade-up" data-id="${escapeHtml(product.id)}">
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
      <div class="product-card-body">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
          <span class="product-card-cat">${escapeHtml(product.categoryName)}</span>
          <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">MOQ: ${product.moq} pcs</span>
        </div>

        <h3 class="product-card-title">
          <a href="#/product?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a>
        </h3>

        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0.75rem;">
          ${product.packQuantity ? `Pack of ${product.packQuantity} units` : ''} 
          ${product.cartonQuantity ? `• Carton: ${product.cartonQuantity}` : ''}
        </div>

        <div class="product-card-price-row">
          <div class="price-stack">
            <span class="wholesale-price-label">Wholesale Price</span>
            <div class="product-card-price">${formatINR(product.unitPrice)} <span class="price-unit">/ unit</span></div>
            ${lowestPrice < product.unitPrice ? `<span class="price-bulk-hint">As low as ${formatINR(lowestPrice)}</span>` : ''}
          </div>
        </div>

        <div class="product-card-footer">
          <a href="#/product?id=${encodeURIComponent(product.id)}" class="product-card-link">
            <span>View Details</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <button 
            type="button" 
            class="btn btn-primary btn-sm btn-card-add-cart" 
            data-product-id="${escapeHtml(product.id)}"
            aria-label="Add MOQ of ${escapeHtml(product.name)} to Cart"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>+ Cart (${product.moq})</span>
          </button>
        </div>
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
