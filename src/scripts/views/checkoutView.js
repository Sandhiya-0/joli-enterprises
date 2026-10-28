// Page: Wholesale Checkout View
import { getCart, getCartTotals, formatINR, clearCart } from '../utils/cart.js';
import { escapeHtml } from '../components/productCard.js';

export function renderCheckoutView() {
  const cart = getCart();
  const totals = getCartTotals();

  if (cart.length === 0) {
    return `
      <header class="about-hero">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span class="separator">/</span>
            <span class="current">Checkout</span>
          </nav>
          <h1 class="section-title">Wholesale Checkout</h1>
          <p class="section-subtitle">No items in your cart to checkout.</p>
        </div>
      </header>

      <section class="section">
        <div class="container text-center">
          <div class="empty-state">
            <div class="empty-state-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <h3 class="empty-state-title">Your Wholesale Cart is Empty</h3>
            <p class="empty-state-desc">
              Please add stationery, household items, accessories, or wholesale combo packs to your cart before proceeding to checkout.
            </p>
            <a href="#/shop" class="btn btn-primary btn-lg">
              <span>Explore Wholesale Catalogue</span>
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
          <a href="#/cart">Cart</a>
          <span class="separator">/</span>
          <span class="current">Wholesale Checkout</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Wholesale Order Checkout</h1>
        <p class="section-subtitle">
          Enter your business invoicing details, dispatch destination, and select payment settlement method.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div id="checkout-main-container" class="cart-layout">
          <!-- Left: Checkout Form -->
          <div class="form-card">
            <form id="wholesale-checkout-form" novalidate>
              <!-- Step 1: Business & Contact Info -->
              <div style="margin-bottom: 2rem;">
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; background: var(--color-navy); color: #fff; font-size: 0.85rem; font-weight: 700;">1</span>
                  Buyer & Business Information
                </h2>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
                  Used for GST tax invoice generation and commercial shipping consignment.
                </p>

                <div class="form-row">
                  <div class="form-group">
                    <label for="checkout-name" class="form-label">Full Name / Authorized Contact <span class="required">*</span></label>
                    <input type="text" id="checkout-name" class="form-control" placeholder="e.g. Ramesh Kumar" required>
                    <span class="form-error-msg" id="err-checkout-name"></span>
                  </div>
                  <div class="form-group">
                    <label for="checkout-business" class="form-label">Shop / Business Name</label>
                    <input type="text" id="checkout-business" class="form-control" placeholder="e.g. Sri Balaji Stationery & Fancy">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="checkout-phone" class="form-label">Mobile Number (WhatsApp updates) <span class="required">*</span></label>
                    <input type="tel" id="checkout-phone" class="form-control" placeholder="+91 98765 43210" required>
                    <span class="form-error-msg" id="err-checkout-phone"></span>
                  </div>
                  <div class="form-group">
                    <label for="checkout-email" class="form-label">Email Address (Invoice copy) <span class="required">*</span></label>
                    <input type="email" id="checkout-email" class="form-control" placeholder="buyer@business.com" required>
                    <span class="form-error-msg" id="err-checkout-email"></span>
                  </div>
                </div>

                <div class="form-group">
                  <label for="checkout-gstin" class="form-label">GSTIN (Optional for Input Tax Credit)</label>
                  <input type="text" id="checkout-gstin" class="form-control" placeholder="e.g. 33AAAAA0000A1Z5" style="text-transform: uppercase;">
                  <span style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.25rem; display: block;">If provided, GST tax invoice will be uploaded to GSTN portal for input tax claim.</span>
                </div>
              </div>

              <!-- Step 2: Shipping & Consignment Address -->
              <div style="margin-bottom: 2rem; padding-top: 1.5rem;">
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; background: var(--color-navy); color: #fff; font-size: 0.85rem; font-weight: 700;">2</span>
                  Delivery & Warehouse Consignment Address
                </h2>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
                  Where cartons and parcels should be delivered by our logistics partners.
                </p>

                <div class="form-group">
                  <label for="checkout-address" class="form-label">Premises Address / Shop Address <span class="required">*</span></label>
                  <textarea id="checkout-address" class="form-control" rows="2" placeholder="Building no., Street name, Landmark, Industrial area..." required></textarea>
                  <span class="form-error-msg" id="err-checkout-address"></span>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="checkout-city" class="form-label">City / Town <span class="required">*</span></label>
                    <input type="text" id="checkout-city" class="form-control" placeholder="e.g. Coimbatore" required>
                    <span class="form-error-msg" id="err-checkout-city"></span>
                  </div>
                  <div class="form-group">
                    <label for="checkout-state" class="form-label">State <span class="required">*</span></label>
                    <select id="checkout-state" class="form-control" required>
                      <option value="Tamil Nadu" selected>Tamil Nadu</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Other State">Other Pan-India State</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="checkout-pincode" class="form-label">Pincode <span class="required">*</span></label>
                    <input type="text" id="checkout-pincode" class="form-control" placeholder="e.g. 641001" required maxlength="6">
                    <span class="form-error-msg" id="err-checkout-pincode"></span>
                  </div>
                </div>
              </div>

              <!-- Step 3: Payment Settlement Method -->
              <div style="margin-bottom: 2rem; padding-top: 1.5rem;">
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-navy); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; background: var(--color-navy); color: #fff; font-size: 0.85rem; font-weight: 700;">3</span>
                  Wholesale Payment Method
                </h2>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
                  Choose your settlement preference. (Demonstration mode: simulated checkout).
                </p>

                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                  <label class="filter-checkbox-label" style="padding: 1rem; background: var(--color-bg-alt); cursor: pointer; display: flex; gap: 0.75rem; align-items: flex-start;">
                    <input type="radio" name="payment-method" value="neft" checked style="margin-top: 0.25rem;">
                    <div>
                      <strong style="color: var(--color-navy); font-size: 0.95rem;">Direct Bank Transfer (NEFT / RTGS / IMPS)</strong>
                      <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.2rem;">
                        Recommended for high-volume orders. Official Proforma Invoice and bank account coordinates provided upon order confirmation.
                      </div>
                    </div>
                  </label>

                  <label class="filter-checkbox-label" style="padding: 1rem; background: var(--color-bg-alt); cursor: pointer; display: flex; gap: 0.75rem; align-items: flex-start;">
                    <input type="radio" name="payment-method" value="upi" style="margin-top: 0.25rem;">
                    <div>
                      <strong style="color: var(--color-navy); font-size: 0.95rem;">Instant UPI / Corporate Net Banking</strong>
                      <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.2rem;">
                        Scan QR code or use VPA handle for instant digital clearance and priority next-morning dispatch.
                      </div>
                    </div>
                  </label>

                  <label class="filter-checkbox-label" style="padding: 1rem; background: var(--color-bg-alt); cursor: pointer; display: flex; gap: 0.75rem; align-items: flex-start;">
                    <input type="radio" name="payment-method" value="cod-advance" style="margin-top: 0.25rem;">
                    <div>
                      <strong style="color: var(--color-navy); font-size: 0.95rem;">Wholesale COD (20% Advance Token Freight)</strong>
                      <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.2rem;">
                        Pay 20% freight advance for transport booking; settle remaining 80% with transport courier on carton handover.
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Order Dispatch Notes -->
              <div class="form-group">
                <label for="checkout-notes" class="form-label">Special Packing or Dispatch Instructions (Optional)</label>
                <textarea id="checkout-notes" class="form-control" rows="2" placeholder="e.g. Preferred transport service (VRL, Kranti, Professional Couriers), gate timing, labeling instructions..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-submit-order" style="margin-top: 1.5rem;">
                <span>Confirm Wholesale Order (${formatINR(totals.grandTotal)})</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </button>

              <div style="margin-top: 1rem; text-align: center; font-size: 0.8rem; color: var(--color-text-muted);">
                Demonstration checkout environment. No real funds are charged. Simulated order confirmation receipt will be generated.
              </div>
            </form>
          </div>

          <!-- Right: Order Summary Sidebar -->
          <aside class="cart-summary-card">
            <h3 class="summary-title">Order Summary</h3>

            <div style="max-height: 280px; overflow-y: auto; margin-bottom: 1.5rem; padding-right: 0.25rem;">
              ${cart.map(item => `
                <div style="display: flex; gap: 0.75rem; align-items: center; padding: 0.6rem 0;">
                  <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" style="width: 44px; height: 44px; object-fit: cover; background: var(--color-bg-alt); flex-shrink: 0;">
                  <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 0.85rem; font-weight: 600; color: var(--color-navy); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                      ${escapeHtml(item.name)}
                    </div>
                    <div style="font-size: 0.75rem; color: var(--color-text-muted);">
                      Qty: ${item.quantity} pcs &times; ${formatINR(item.unitPrice)}
                    </div>
                  </div>
                  <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-navy); flex-shrink: 0;">
                    ${formatINR(item.lineTotal)}
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="summary-row">
              <span style="color: var(--color-text-muted);">Total Pieces:</span>
              <strong>${totals.itemsCount} pcs</strong>
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
              <span style="color: var(--color-text-muted);">Logistics & Freight:</span>
              <strong>${totals.shipping === 0 ? '<span style="color: var(--color-success);">FREE</span>' : formatINR(totals.shipping)}</strong>
            </div>

            <div class="summary-row summary-total">
              <span>Grand Total:</span>
              <span>${formatINR(totals.grandTotal)}</span>
            </div>

            <div style="margin-top: 1.5rem; padding: 0.75rem; background: var(--color-bg-alt); font-size: 0.75rem; color: var(--color-text-muted); line-height: 1.5;">
              <strong style="color: var(--color-navy);">B2B Guarantee:</strong> All goods verified against quality standards prior to packing. GST input tax credit invoice included with shipment docket.
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

export function initCheckoutViewEvents() {
  const form = document.getElementById('wholesale-checkout-form');
  const mainContainer = document.getElementById('checkout-main-container');
  if (!form || !mainContainer) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    const errorIds = ['err-checkout-name', 'err-checkout-phone', 'err-checkout-email', 'err-checkout-address', 'err-checkout-city', 'err-checkout-pincode'];
    errorIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    form.querySelectorAll('.form-control').forEach(inp => inp.classList.remove('error'));

    const name = document.getElementById('checkout-name')?.value.trim();
    const business = document.getElementById('checkout-business')?.value.trim();
    const phone = document.getElementById('checkout-phone')?.value.trim();
    const email = document.getElementById('checkout-email')?.value.trim();
    const gstin = document.getElementById('checkout-gstin')?.value.trim();
    const address = document.getElementById('checkout-address')?.value.trim();
    const city = document.getElementById('checkout-city')?.value.trim();
    const state = document.getElementById('checkout-state')?.value;
    const pincode = document.getElementById('checkout-pincode')?.value.trim();
    const paymentMethod = form.querySelector('input[name="payment-method"]:checked')?.value || 'neft';
    const notes = document.getElementById('checkout-notes')?.value.trim();

    let hasError = false;

    if (!name) {
      document.getElementById('checkout-name')?.classList.add('error');
      document.getElementById('err-checkout-name').textContent = 'Please enter authorized contact name.';
      hasError = true;
    }

    if (!phone || phone.length < 10) {
      document.getElementById('checkout-phone')?.classList.add('error');
      document.getElementById('err-checkout-phone').textContent = 'Please enter a valid 10-digit mobile number.';
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      document.getElementById('checkout-email')?.classList.add('error');
      document.getElementById('err-checkout-email').textContent = 'Please enter a valid email address.';
      hasError = true;
    }

    if (!address) {
      document.getElementById('checkout-address')?.classList.add('error');
      document.getElementById('err-checkout-address').textContent = 'Please enter delivery address.';
      hasError = true;
    }

    if (!city) {
      document.getElementById('checkout-city')?.classList.add('error');
      document.getElementById('err-checkout-city').textContent = 'Please enter city.';
      hasError = true;
    }

    if (!pincode || pincode.length < 6) {
      document.getElementById('checkout-pincode')?.classList.add('error');
      document.getElementById('err-checkout-pincode').textContent = 'Please enter valid 6-digit postal PIN code.';
      hasError = true;
    }

    if (hasError) return;

    // Simulate order placement
    const submitBtn = document.getElementById('btn-submit-order');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
      <span>Processing Wholesale Consignment...</span>
    `;

    const cartSnapshot = getCart();
    const totalsSnapshot = getCartTotals();
    const orderId = 'JLI-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    setTimeout(() => {
      // Clear Cart
      clearCart();

      // Render Confirmation Receipt
      mainContainer.innerHTML = `
        <div style="grid-column: 1 / -1;" class="fade-up">
          <div class="alert-box alert-success" style="margin-bottom: 2rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <div>
              <strong style="font-size: 1.15rem;">Wholesale Order Received Successfully!</strong>
              <div style="margin-top: 0.25rem; font-size: 0.95rem;">
                Order Reference: <strong style="color: var(--color-navy); font-size: 1.05rem;"><code>${orderId}</code></strong> • Placed on ${dateStr}
              </div>
            </div>
          </div>

          <div style="background: var(--color-white); border: 1px solid var(--color-border); padding: 2rem; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: gap: 1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem;">
              <div>
                <div style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--color-navy);">JOLI ENTERPRISES</div>
                <div style="font-size: 0.85rem; color: var(--color-text-muted);">B2B Wholesale Merchandise Consignment Note</div>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-navy);">Status: Confirmed (Simulated Demonstration)</div>
                <div style="font-size: 0.8rem; color: var(--color-text-muted);">Est. Dispatch: 24-48 Hours</div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; font-size: 0.875rem;">
              <div>
                <strong style="color: var(--color-navy); display: block; margin-bottom: 0.35rem;">Consignee Details:</strong>
                <div>${escapeHtml(name)}</div>
                ${business ? `<div>${escapeHtml(business)}</div>` : ''}
                <div>Phone: ${escapeHtml(phone)}</div>
                <div>Email: ${escapeHtml(email)}</div>
                ${gstin ? `<div style="margin-top: 0.25rem;"><span style="color: var(--color-gold); font-weight: 600;">GSTIN:</span> ${escapeHtml(gstin)}</div>` : ''}
              </div>

              <div>
                <strong style="color: var(--color-navy); display: block; margin-bottom: 0.35rem;">Delivery Destination:</strong>
                <div>${escapeHtml(address)}</div>
                <div>${escapeHtml(city)}, ${escapeHtml(state)} — ${escapeHtml(pincode)}</div>
              </div>

              <div>
                <strong style="color: var(--color-navy); display: block; margin-bottom: 0.35rem;">Payment Settlement:</strong>
                <div style="text-transform: capitalize; font-weight: 600;">${paymentMethod.replace('-', ' ')}</div>
                <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.25rem;">
                  Proforma reference sent to ${escapeHtml(email)}.
                </div>
              </div>
            </div>

            <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-navy); margin-bottom: 1rem;">Consignment Manifest (${totalsSnapshot.itemsCount} pieces total)</h4>
            <div style="overflow-x: auto; margin-bottom: 1.5rem;">
              <table class="cart-table" style="width: 100%;">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                    <th>Applied Tier Rate</th>
                    <th style="text-align: right;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${cartSnapshot.map(item => `
                    <tr>
                      <td style="font-weight: 600; color: var(--color-navy);">${escapeHtml(item.name)}</td>
                      <td style="font-size: 0.8rem; color: var(--color-text-muted);"><code>${escapeHtml(item.sku)}</code></td>
                      <td>${item.quantity} pieces</td>
                      <td>${formatINR(item.unitPrice)}</td>
                      <td style="text-align: right; font-weight: 700;">${formatINR(item.lineTotal)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div style="display: flex; justify-content: flex-end;">
              <div style="width: 100%; max-width: 320px;">
                <div class="summary-row">
                  <span style="color: var(--color-text-muted);">Subtotal:</span>
                  <strong>${formatINR(totalsSnapshot.subtotal)}</strong>
                </div>
                <div class="summary-row">
                  <span style="color: var(--color-text-muted);">GST (18%):</span>
                  <strong>${formatINR(totalsSnapshot.gst)}</strong>
                </div>
                <div class="summary-row">
                  <span style="color: var(--color-text-muted);">Logistics:</span>
                  <strong>${totalsSnapshot.shipping === 0 ? 'FREE' : formatINR(totalsSnapshot.shipping)}</strong>
                </div>
                <div class="summary-row summary-total">
                  <span>Grand Total:</span>
                  <span>${formatINR(totalsSnapshot.grandTotal)}</span>
                </div>
              </div>
            </div>

            ${notes ? `
              <div style="margin-top: 1.5rem; padding: 1rem; background: var(--color-bg-alt); font-size: 0.85rem;">
                <strong style="color: var(--color-navy);">Dispatch Instructions:</strong>
                <div>${escapeHtml(notes)}</div>
              </div>
            ` : ''}
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
            <button type="button" class="btn btn-outline btn-lg" onclick="window.print()">
              <span>Print Proforma Order Copy</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            </button>

            <a href="#/shop" class="btn btn-primary btn-lg">
              <span>Continue Wholesale Shopping</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      `;

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  });
}
