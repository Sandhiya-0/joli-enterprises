// Page: Product Details View — Wholesale Product Specs & Tiered Buying Box
import { getProductById, getProducts, calculateTieredPrice } from '../../data/products.js';
import { renderProductCard, escapeHtml } from '../components/productCard.js';
import { addToCart, formatINR } from '../utils/cart.js';

let currentSelectedQty = 1;
let currentProduct = null;

export function renderProductDetailView(queryParams = {}) {
  const allProducts = getProducts();
  const productId = queryParams.id || (allProducts[0] ? allProducts[0].id : null);
  currentProduct = getProductById(productId) || allProducts[0];

  if (!currentProduct) {
    return `
      <div class="container section">
        <div class="empty-state">
          <h2 class="empty-state-title">Product Not Found</h2>
          <p class="empty-state-desc">The requested wholesale product could not be located in our catalogue.</p>
          <a href="#/shop" class="btn btn-primary">Return to Shop</a>
        </div>
      </div>
    `;
  }

  // Set initial quantity to MOQ
  currentSelectedQty = currentProduct.moq || 1;
  const currentUnitPrice = calculateTieredPrice(currentProduct, currentSelectedQty);
  const currentLineTotal = currentUnitPrice * currentSelectedQty;

  // Related products from same category
  const relatedProducts = allProducts
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4);

  return `
    <header class="about-hero" style="padding-top: 2.5rem; padding-bottom: 2.5rem;">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <a href="#/shop">Shop</a>
          <span class="separator">/</span>
          <a href="#/category?slug=${encodeURIComponent(currentProduct.category)}">${escapeHtml(currentProduct.categoryName)}</a>
          <span class="separator">/</span>
          <span class="current">${escapeHtml(currentProduct.name)}</span>
        </nav>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <!-- Main Product Layout Grid -->
        <div class="product-detail-grid">
          <!-- Left: Image Gallery -->
          <div class="gallery-wrap">
            <div class="gallery-main">
              <img 
                id="gallery-main-image" 
                src="${escapeHtml(currentProduct.images[0])}" 
                alt="${escapeHtml(currentProduct.name)}"
              >
            </div>

            <!-- Thumbnail Selector -->
            ${currentProduct.images.length > 1 ? `
              <div class="gallery-thumbnails" id="gallery-thumbs">
                ${currentProduct.images.map((imgUrl, idx) => `
                  <button 
                    type="button" 
                    class="gallery-thumb ${idx === 0 ? 'active' : ''}" 
                    data-img-src="${escapeHtml(imgUrl)}"
                    aria-label="View Angle ${idx + 1}"
                  >
                    <img src="${escapeHtml(imgUrl)}" alt="Thumbnail ${idx + 1}">
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <!-- Right: Product Information & Wholesale Buying Box -->
          <div class="detail-info">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="badge">${escapeHtml(currentProduct.categoryName)}</span>
              ${currentProduct.badge ? `<span class="badge badge-navy">${escapeHtml(currentProduct.badge)}</span>` : ''}
              <span style="font-size: 0.8rem; color: var(--color-success); font-weight: 700;">In Stock (${currentProduct.stockCount || 1000}+ available)</span>
            </div>

            <h1 class="detail-title">${escapeHtml(currentProduct.name)}</h1>
            
            <div class="detail-sku-row">
              <span>SKU: <strong>${escapeHtml(currentProduct.sku || 'N/A')}</strong></span>
              <span>•</span>
              <span>Pack Size: <strong>${currentProduct.packQuantity || 1} units</strong></span>
              ${currentProduct.cartonQuantity ? `<span>•</span><span>Carton: <strong>${currentProduct.cartonQuantity} units</strong></span>` : ''}
            </div>

            <p style="font-size: 0.95rem; color: var(--color-text); line-height: 1.6; margin-bottom: 1.5rem;">
              ${escapeHtml(currentProduct.shortDescription)}
            </p>

            <!-- Tiered Wholesale Pricing Table -->
            <div class="tier-table-wrap">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span class="tier-table-title">Wholesale Volume Pricing Tiers</span>
                <span style="font-size: 0.75rem; color: var(--color-text-muted);">Prices in INR (excl. 18% GST)</span>
              </div>
              <table class="tier-table">
                <thead>
                  <tr>
                    <th>Order Quantity Range</th>
                    <th>Price per Unit</th>
                    <th>Savings</th>
                  </tr>
                </thead>
                <tbody id="tier-table-body">
                  ${renderTierTableRows(currentProduct, currentSelectedQty)}
                </tbody>
              </table>
            </div>

            <!-- Wholesale Buy Box -->
            <div class="purchase-box">
              <div class="moq-notice-banner">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span>Minimum Order Quantity: <strong>${currentProduct.moq} units</strong> (Increments of ${currentProduct.increment || currentProduct.moq})</span>
              </div>

              <div class="qty-control-row">
                <div>
                  <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-navy); display: block; margin-bottom: 0.35rem;">
                    Select Units:
                  </span>
                  <div class="qty-stepper">
                    <button type="button" class="qty-step-btn" id="btn-qty-minus" aria-label="Decrease quantity">−</button>
                    <input type="number" id="detail-qty-input" class="qty-input" value="${currentSelectedQty}" min="${currentProduct.moq}" step="${currentProduct.increment || 1}">
                    <button type="button" class="qty-step-btn" id="btn-qty-plus" aria-label="Increase quantity">+</button>
                  </div>
                </div>

                <div>
                  <span style="font-size: 0.8rem; color: var(--color-text-muted); display: block;">Effective Unit Rate:</span>
                  <div style="font-size: 1.15rem; font-weight: 800; color: var(--color-navy);" id="detail-active-unit-price">
                    ${formatINR(currentUnitPrice)} / unit
                  </div>
                </div>

                <div>
                  <span style="font-size: 0.8rem; color: var(--color-text-muted); display: block;">Line Estimate:</span>
                  <div class="line-preview-total" id="detail-line-total">
                    ${formatINR(currentLineTotal)}
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="detail-cta-row">
                <button type="button" class="btn btn-primary btn-lg" id="btn-detail-add-cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  <span>Add to Wholesale Cart</span>
                </button>

                <button type="button" class="btn btn-navy btn-lg" id="btn-detail-buy-now">
                  <span>Buy Now</span>
                </button>

                <a href="#/bulk-enquiry?product=${encodeURIComponent(currentProduct.name)}" class="btn btn-outline btn-lg">
                  <span>Request Custom Bulk Quote</span>
                </a>
              </div>
            </div>

            <!-- Combo Items List if Bundle -->
            ${currentProduct.isCombo && currentProduct.comboItems ? `
              <div class="combo-items-box">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--color-navy); text-transform: uppercase; letter-spacing: 0.05em;">
                  Verified Bundle Contents (${currentProduct.comboItems.length} Product Categories)
                </h4>
                <ul>
                  ${currentProduct.comboItems.map(item => `
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>${escapeHtml(item)}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Specifications Table -->
            <div style="margin-top: 2rem;">
              <h3 style="font-size: 1.2rem; color: var(--color-navy); margin-bottom: 0.75rem;">Wholesale Product Specifications</h3>
              <table class="specs-table">
                <tbody>
                  ${currentProduct.specifications.map(s => `
                    <tr>
                      <th>${escapeHtml(s.label)}</th>
                      <td>${escapeHtml(s.value)}</td>
                    </tr>
                  `).join('')}
                  <tr>
                    <th>Minimum Order (MOQ)</th>
                    <td>${currentProduct.moq} units</td>
                  </tr>
                  <tr>
                    <th>Order Increment</th>
                    <td>${currentProduct.increment || currentProduct.moq} units</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="margin-top: 2rem;">
              <h3 style="font-size: 1.2rem; color: var(--color-navy); margin-bottom: 0.5rem;">Detailed Commercial Description</h3>
              <p style="color: var(--color-text); line-height: 1.7; font-size: 0.95rem;">
                ${escapeHtml(currentProduct.fullDescription)}
              </p>
            </div>
          </div>
        </div>

        <!-- Related Wholesale Items -->
        ${relatedProducts.length > 0 ? `
          <div style="margin-top: 5rem; padding-top: 3rem;">
            <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
              <div>
                <h2 class="section-title" style="font-size: 1.85rem;">Related Wholesale Products</h2>
                <p class="section-subtitle">Complementary items from ${escapeHtml(currentProduct.categoryName)}</p>
              </div>
              <a href="#/category?slug=${encodeURIComponent(currentProduct.category)}" class="btn btn-outline btn-sm">
                <span>View Full Category</span>
              </a>
            </div>

            <div class="products-grid">
              ${relatedProducts.map(p => renderProductCard(p)).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

function renderTierTableRows(product, selectedQty) {
  if (!product.priceTiers || product.priceTiers.length === 0) {
    return `<tr><td>Standard MOQ: ${product.moq}+</td><td>${formatINR(product.unitPrice)}</td><td>Base Rate</td></tr>`;
  }

  const basePrice = product.priceTiers[0].price;

  return product.priceTiers.map((tier, idx) => {
    const nextTier = product.priceTiers[idx + 1];
    const rangeLabel = nextTier 
      ? `${tier.minQty} – ${nextTier.minQty - 1} units`
      : `${tier.minQty}+ units (Master Carton)`;

    // Check if this tier is active
    let isActive = false;
    if (nextTier) {
      isActive = selectedQty >= tier.minQty && selectedQty < nextTier.minQty;
    } else {
      isActive = selectedQty >= tier.minQty;
    }

    const savingsPercent = basePrice > tier.price 
      ? Math.round(((basePrice - tier.price) / basePrice) * 100) + '% OFF' 
      : 'Standard';

    return `
      <tr class="${isActive ? 'active-tier' : ''}">
        <td>${rangeLabel} ${isActive ? '◀ Selected' : ''}</td>
        <td><strong>${formatINR(tier.price)}</strong> / unit</td>
        <td style="color: var(--color-success); font-weight: 700;">${savingsPercent}</td>
      </tr>
    `;
  }).join('');
}

export function initProductDetailViewEvents() {
  if (!currentProduct) return;

  // Gallery Thumbnail switcher
  const thumbsContainer = document.getElementById('gallery-thumbs');
  const mainImage = document.getElementById('gallery-main-image');

  if (thumbsContainer && mainImage) {
    thumbsContainer.addEventListener('click', (e) => {
      const thumbBtn = e.target.closest('.gallery-thumb');
      if (!thumbBtn) return;

      const newSrc = thumbBtn.getAttribute('data-img-src');
      if (newSrc) {
        mainImage.style.opacity = '0.3';
        setTimeout(() => {
          mainImage.src = newSrc;
          mainImage.style.opacity = '1';
        }, 120);

        thumbsContainer.querySelectorAll('.gallery-thumb').forEach(el => el.classList.remove('active'));
        thumbBtn.classList.add('active');
      }
    });
  }

  // Quantity Stepper controls
  const minusBtn = document.getElementById('btn-qty-minus');
  const plusBtn = document.getElementById('btn-qty-plus');
  const qtyInput = document.getElementById('detail-qty-input');
  const unitPriceDisplay = document.getElementById('detail-active-unit-price');
  const lineTotalDisplay = document.getElementById('detail-line-total');
  const tierTableBody = document.getElementById('tier-table-body');

  const minQty = currentProduct.moq || 1;
  const step = currentProduct.increment || minQty;

  function updatePriceCalculations() {
    let qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < minQty) {
      qty = minQty;
      qtyInput.value = qty;
    }
    currentSelectedQty = qty;

    const unitPrice = calculateTieredPrice(currentProduct, qty);
    const lineTotal = unitPrice * qty;

    if (unitPriceDisplay) unitPriceDisplay.textContent = `${formatINR(unitPrice)} / unit`;
    if (lineTotalDisplay) lineTotalDisplay.textContent = formatINR(lineTotal);
    if (tierTableBody) tierTableBody.innerHTML = renderTierTableRows(currentProduct, qty);
  }

  minusBtn?.addEventListener('click', () => {
    let currentVal = parseInt(qtyInput.value, 10) || minQty;
    if (currentVal - step >= minQty) {
      qtyInput.value = currentVal - step;
    } else {
      qtyInput.value = minQty;
    }
    updatePriceCalculations();
  });

  plusBtn?.addEventListener('click', () => {
    let currentVal = parseInt(qtyInput.value, 10) || minQty;
    qtyInput.value = currentVal + step;
    updatePriceCalculations();
  });

  qtyInput?.addEventListener('change', updatePriceCalculations);

  // Add to Cart Action
  const addToCartBtn = document.getElementById('btn-detail-add-cart');
  addToCartBtn?.addEventListener('click', () => {
    const qty = parseInt(qtyInput.value, 10) || minQty;
    addToCart(currentProduct.id, qty);
    showCartToast(`Added ${qty} units of ${currentProduct.name} to cart!`);
  });

  // Buy Now Action
  const buyNowBtn = document.getElementById('btn-detail-buy-now');
  buyNowBtn?.addEventListener('click', () => {
    const qty = parseInt(qtyInput.value, 10) || minQty;
    addToCart(currentProduct.id, qty);
    window.location.hash = '#/checkout';
  });
}

function showCartToast(message) {
  const toast = document.getElementById('cart-toast');
  const msgEl = document.getElementById('toast-message');
  if (toast && msgEl) {
    msgEl.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}
