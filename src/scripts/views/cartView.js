// Page: Shopping Cart View — Wholesale Itemized Cart & Totals
import { getCart, updateCartQuantity, removeFromCart, clearCart, getCartTotals, formatINR } from '../utils/cart.js';
import { escapeHtml } from '../components/productCard.js';

export function renderCartView() {
  const cart = getCart();
  const totals = getCartTotals();

  if (cart.length === 0) {
    return `
      <header class="about-hero">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <span class="current">Shopping Cart</span>
          </nav>
          <h1 class="section-title">Your Wholesale Cart is Empty</h1>
          <p class="section-subtitle">You have not added any wholesale items or combo packs to your order yet.</p>
        </div>
      </header>

      <section class="section">
        <div class="container text-center">
          <div class="empty-state">
            <div class="empty-state-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <h3 class="empty-state-title">No Products in Cart</h3>
            <p class="empty-state-desc">
              Explore our catalogue of stationery, household goods, fashion accessories, mobile items, and gift combos.
            </p>
            <a href="#/shop" class="btn btn-primary btn-lg">
              <span>Start Wholesale Shopping</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Shopping Cart (${totals.itemsCount} Units)</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Wholesale Order Review</h1>
        <p class="section-subtitle">
          Verify your wholesale quantities, applicable tiered rates, and minimum order requirements.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="cart-layout">
          <!-- Cart Items Table -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span style="font-weight: 700; color: var(--color-navy);">${cart.length} Wholesale Product Line(s)</span>
              <button type="button" id="btn-clear-cart" style="background: none; border: none; font-size: 0.825rem; color: var(--color-error); font-weight: 700; cursor: pointer;">
                Clear All Items
              </button>
            </div>

            <table class="cart-table">
              <thead>
                <tr>
                  <th>Product Details</th>
                  <th>Tier Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${cart.map(item => `
                  <tr data-product-id="${escapeHtml(item.productId)}">
                    <td>
                      <div class="cart-product-cell">
                        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" class="cart-thumb">
                        <div>
                          <a href="#/product?id=${encodeURIComponent(item.productId)}" style="font-weight: 700; color: var(--color-navy); font-size: 0.95rem;">
                            ${escapeHtml(item.name)}
                          </a>
                          <div style="font-size: 0.775rem; color: var(--color-text-muted); margin-top: 0.2rem;">
                            SKU: ${escapeHtml(item.sku || 'N/A')} • MOQ: ${item.moq} pcs
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <strong>${formatINR(item.unitPrice)}</strong>
                      <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">/ unit</span>
                    </td>

                    <td>
                      <div class="qty-stepper" style="width: 120px;">
                        <button type="button" class="qty-step-btn cart-qty-minus" data-id="${escapeHtml(item.productId)}">−</button>
                        <input 
                          type="number" 
                          class="qty-input cart-qty-input" 
                          data-id="${escapeHtml(item.productId)}" 
                          value="${item.quantity}" 
                          min="${item.moq}" 
                          step="${item.increment || 1}"
                        >
                        <button type="button" class="qty-step-btn cart-qty-plus" data-id="${escapeHtml(item.productId)}">+</button>
                      </div>
                    </td>

                    <td>
                      <strong style="color: var(--color-navy); font-size: 1.05rem;">
                        ${formatINR(item.lineTotal)}
                      </strong>
                    </td>

                    <td style="text-align: right;">
                      <button 
                        type="button" 
                        class="btn-cart-remove" 
                        data-id="${escapeHtml(item.productId)}" 
                        aria-label="Remove item" 
                        style="background: none; border: none; color: var(--color-text-muted); cursor: pointer; padding: 0.5rem;"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7l-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <div style="margin-top: 2rem;">
              <a href="#/shop" class="btn btn-outline">
                <span>&larr; Continue Wholesale Shopping</span>
              </a>
            </div>
          </div>

          <!-- Order Summary Card -->
          <aside class="cart-summary-card">
            <h3 class="summary-title">Wholesale Order Summary</h3>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Total Units:</span>
              <strong>${totals.itemsCount} pieces</strong>
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Wholesale Subtotal:</span>
              <strong>${formatINR(totals.subtotal)}</strong>
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">GST (18% B2B Tax):</span>
              <strong>${formatINR(totals.gst)}</strong>
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Bulk Logistics & Freight:</span>
              <strong>${totals.shipping === 0 ? '<span style="color: var(--color-success);">FREE Delivery (₹5,000+)</span>' : formatINR(totals.shipping)}</strong>
            </div>

            <div class="summary-row summary-total">
              <span>Estimated Total:</span>
              <span>${formatINR(totals.grandTotal)}</span>
            </div>

            <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <a href="#/checkout" class="btn btn-primary btn-block btn-lg">
                <span>Proceed to Checkout</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>

              <a href="#/bulk-enquiry" class="btn btn-outline btn-block">
                <span>Request Custom Bulk Quotation</span>
              </a>
            </div>

            <div style="margin-top: 1.5rem; font-size: 0.785rem; color: var(--color-text-muted); line-height: 1.5;">
              Formal GST Tax Invoice generated on order placement. Proforma available for school and corporate institutional procurement.
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

export function initCartViewEvents() {
  const cartTable = document.querySelector('.cart-table');
  const clearBtn = document.getElementById('btn-clear-cart');

  clearBtn?.addEventListener('click', () => {
    if (confirm('Are you sure you want to remove all items from your wholesale cart?')) {
      clearCart();
      window.location.reload();
    }
  });

  if (cartTable) {
    cartTable.addEventListener('click', (e) => {
      // Remove button
      const removeBtn = e.target.closest('.btn-cart-remove');
      if (removeBtn) {
        const prodId = removeBtn.getAttribute('data-id');
        removeFromCart(prodId);
        window.location.reload();
        return;
      }

      // Plus button
      const plusBtn = e.target.closest('.cart-qty-plus');
      if (plusBtn) {
        const prodId = plusBtn.getAttribute('data-id');
        const input = cartTable.querySelector(`.cart-qty-input[data-id="${prodId}"]`);
        if (input) {
          const currentVal = parseInt(input.value, 10) || 1;
          const step = parseInt(input.step, 10) || 1;
          updateCartQuantity(prodId, currentVal + step);
          window.location.reload();
        }
        return;
      }

      // Minus button
      const minusBtn = e.target.closest('.cart-qty-minus');
      if (minusBtn) {
        const prodId = minusBtn.getAttribute('data-id');
        const input = cartTable.querySelector(`.cart-qty-input[data-id="${prodId}"]`);
        if (input) {
          const currentVal = parseInt(input.value, 10) || 1;
          const min = parseInt(input.min, 10) || 1;
          const step = parseInt(input.step, 10) || 1;
          if (currentVal - step >= min) {
            updateCartQuantity(prodId, currentVal - step);
          } else {
            updateCartQuantity(prodId, min);
          }
          window.location.reload();
        }
        return;
      }
    });

    cartTable.addEventListener('change', (e) => {
      if (e.target.classList.contains('cart-qty-input')) {
        const prodId = e.target.getAttribute('data-id');
        const newQty = parseInt(e.target.value, 10);
        updateCartQuantity(prodId, newQty);
        window.location.reload();
      }
    });
  }
}
