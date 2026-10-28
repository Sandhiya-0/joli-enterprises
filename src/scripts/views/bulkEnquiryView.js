// Page: Bulk Order Quotation Enquiry View
import { getProducts, getCategories } from '../../data/products.js';
import { escapeHtml } from '../components/productCard.js';

export function renderBulkEnquiryView(queryParams = {}) {
  const products = getProducts();
  const categories = getCategories();
  const prefilledProduct = queryParams.product || '';
  const prefilledCategory = queryParams.category || '';

  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Bulk Order Enquiry</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Request a Wholesale Bulk Quotation</h1>
        <p class="section-subtitle">
          For full carton orders, custom combo kit curation, institutional school supplies, or customized retailer merchandise.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Left Column: Wholesale Desk Info -->
          <div class="contact-info-card fade-up">
            <h3>Joli Enterprises Wholesale Desk</h3>
            <p>
              We partner directly with retail shop owners, school stationery suppliers, gift boutique curators, and corporate resellers across India.
            </p>

            <div class="contact-channel-list">
              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Carton & Container Volumes</div>
                  <div class="contact-channel-value">Volume discounts beyond Tier 3</div>
                  <div class="contact-channel-hint">Special rates for orders exceeding 500+ units or 10+ cartons</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Custom Combo Assembling</div>
                  <div class="contact-channel-value">Exam Kits, Birthday Return Gifts</div>
                  <div class="contact-channel-hint">We assemble and shrink-wrap customized combos with your SKU codes</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Wholesale Desk Hotline</div>
                  <div class="contact-channel-value">+91 98765 43210 (Demo Contact)</div>
                  <div class="contact-channel-hint">Mon – Sat: 9:30 AM – 7:00 PM IST</div>
                </div>
              </div>
            </div>

            <div style="padding-top: 1.5rem; font-size: 0.825rem; color: #94A3B8; line-height: 1.5;">
              <strong style="color: var(--color-gold);">Demonstration Notice:</strong> Submitted enquiries demonstrate client-side validation and immediate proposal confirmation feedback for wholesale buyers.
            </div>
          </div>

          <!-- Right Column: Interactive Bulk Quotation Form -->
          <div class="form-card fade-up">
            <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-navy);">Wholesale Quote Request Form</h2>
            <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1.75rem;">
              Fill in your bulk quantity specifications. Our B2B commercial team prepares written proforma proposals within 24 business hours.
            </p>

            <div id="bulk-alert-container"></div>

            <form id="bulk-enquiry-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="bulk-name" class="form-label">Buyer / Contact Name <span class="required">*</span></label>
                  <input type="text" id="bulk-name" class="form-control" placeholder="e.g. Suresh Chandran" required>
                  <span class="form-error-msg" id="err-bulk-name"></span>
                </div>
                <div class="form-group">
                  <label for="bulk-business" class="form-label">Shop / Enterprise Name (Optional)</label>
                  <input type="text" id="bulk-business" class="form-control" placeholder="e.g. Venus Novelties & Gifts">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="bulk-phone" class="form-label">WhatsApp / Phone Number <span class="required">*</span></label>
                  <input type="tel" id="bulk-phone" class="form-control" placeholder="+91 98765 43210" required>
                  <span class="form-error-msg" id="err-bulk-phone"></span>
                </div>
                <div class="form-group">
                  <label for="bulk-email" class="form-label">Email Address (Optional)</label>
                  <input type="email" id="bulk-email" class="form-control" placeholder="contact@shopdomain.com">
                  <span class="form-error-msg" id="err-bulk-email"></span>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="bulk-category" class="form-label">Product Category <span class="required">*</span></label>
                  <select id="bulk-category" class="form-control" required>
                    <option value="">-- Select Category --</option>
                    ${categories.map(cat => `
                      <option value="${cat.slug}" ${prefilledCategory === cat.slug ? 'selected' : ''}>
                        ${escapeHtml(cat.name)}
                      </option>
                    `).join('')}
                    <option value="mixed-catalogue">Mixed Categories / Multi-Product Container</option>
                  </select>
                  <span class="form-error-msg" id="err-bulk-category"></span>
                </div>

                <div class="form-group">
                  <label for="bulk-product" class="form-label">Specific Product (Optional)</label>
                  <select id="bulk-product" class="form-control">
                    <option value="All Items in Category">Any / Multiple Products in Selected Category</option>
                    ${products.map(p => `
                      <option value="${escapeHtml(p.name)}" ${prefilledProduct === p.name || prefilledProduct === p.id ? 'selected' : ''}>
                        ${escapeHtml(p.name)} (${p.sku})
                      </option>
                    `).join('')}
                    <option value="Custom Combo Kit">Custom Tailored Combo / Back to School Kit</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="bulk-qty" class="form-label">Estimated Required Quantity <span class="required">*</span></label>
                  <input type="text" id="bulk-qty" class="form-control" placeholder="e.g. 500 pcs, 20 cartons, 1000 sets" required>
                  <span class="form-error-msg" id="err-bulk-qty"></span>
                </div>

                <div class="form-group">
                  <label for="bulk-timeline" class="form-label">Required Delivery Timeline</label>
                  <select id="bulk-timeline" class="form-control">
                    <option value="Immediate (1-3 Days)">Immediate Dispatch (Stock on hand)</option>
                    <option value="Within 1-2 Weeks">Within 1-2 Weeks</option>
                    <option value="Next Month (School Reopening / Festival)">Next Month (School Season / Festival Prep)</option>
                    <option value="Regular Recurring Monthly Contract">Regular Recurring Monthly Supply</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="bulk-notes" class="form-label">Specific Specifications & Packaging Preferences <span class="required">*</span></label>
                <textarea id="bulk-notes" class="form-control" rows="3" placeholder="Provide any details regarding preferred packaging (individual polybag, display box, master cartons), target purchase budget, or custom branding requirements..." required></textarea>
                <span class="form-error-msg" id="err-bulk-notes"></span>
              </div>

              <div class="form-group">
                <label class="filter-checkbox-label" style="display: flex; gap: 0.5rem; align-items: flex-start; cursor: pointer;">
                  <input type="checkbox" id="bulk-consent" checked style="margin-top: 0.25rem;">
                  <span style="font-size: 0.8rem; color: var(--color-text-muted);">
                    I consent to Joli Enterprises contacting me via WhatsApp or telephone regarding wholesale rate quotations and commercial terms.
                  </span>
                </label>
              </div>

              <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-bulk-submit">
                <span>Submit Wholesale Bulk Enquiry</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initBulkEnquiryViewEvents() {
  const form = document.getElementById('bulk-enquiry-form');
  const alertContainer = document.getElementById('bulk-alert-container');
  const submitBtn = document.getElementById('btn-bulk-submit');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    const errorIds = ['err-bulk-name', 'err-bulk-phone', 'err-bulk-email', 'err-bulk-category', 'err-bulk-qty', 'err-bulk-notes'];
    errorIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    form.querySelectorAll('.form-control').forEach(inp => inp.classList.remove('error'));
    if (alertContainer) alertContainer.innerHTML = '';

    const name = document.getElementById('bulk-name')?.value.trim();
    const business = document.getElementById('bulk-business')?.value.trim();
    const phone = document.getElementById('bulk-phone')?.value.trim();
    const email = document.getElementById('bulk-email')?.value.trim();
    const category = document.getElementById('bulk-category')?.value;
    const product = document.getElementById('bulk-product')?.value;
    const qty = document.getElementById('bulk-qty')?.value.trim();
    const timeline = document.getElementById('bulk-timeline')?.value;
    const notes = document.getElementById('bulk-notes')?.value.trim();

    let hasError = false;

    if (!name) {
      document.getElementById('bulk-name')?.classList.add('error');
      document.getElementById('err-bulk-name').textContent = 'Please enter your name.';
      hasError = true;
    }

    if (!phone || phone.length < 10) {
      document.getElementById('bulk-phone')?.classList.add('error');
      document.getElementById('err-bulk-phone').textContent = 'Please enter a valid 10-digit mobile number.';
      hasError = true;
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById('bulk-email')?.classList.add('error');
        document.getElementById('err-bulk-email').textContent = 'Please enter a valid email format.';
        hasError = true;
      }
    }

    if (!category) {
      document.getElementById('bulk-category')?.classList.add('error');
      document.getElementById('err-bulk-category').textContent = 'Please select a product category.';
      hasError = true;
    }

    if (!qty) {
      document.getElementById('bulk-qty')?.classList.add('error');
      document.getElementById('err-bulk-qty').textContent = 'Please specify estimated quantity.';
      hasError = true;
    }

    if (!notes) {
      document.getElementById('bulk-notes')?.classList.add('error');
      document.getElementById('err-bulk-notes').textContent = 'Please describe your packaging or product requirements.';
      hasError = true;
    }

    if (hasError) return;

    // Simulated submission state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
      <span>Transmitting Wholesale Quotation Request...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      const refNum = 'QTE-' + Math.floor(10000 + Math.random() * 90000);

      if (alertContainer) {
        alertContainer.innerHTML = `
          <div class="alert-box alert-success" style="margin-bottom: 1.5rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <div>
              <strong style="font-size: 1.05rem;">Quotation Request Registered! (Ref #${refNum})</strong>
              <div style="margin-top: 0.25rem; font-size: 0.9rem;">
                Thank you, <strong>${escapeHtml(name)}</strong> ${business ? `(${escapeHtml(business)})` : ''}. Your request for <strong>${escapeHtml(qty)}</strong> of <em>"${escapeHtml(product)}"</em> has been recorded. Our wholesale sales representative will contact <strong>${escapeHtml(phone)}</strong> within 24 business hours.
              </div>
            </div>
          </div>
        `;
      }

      form.reset();
      window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
    }, 1100);
  });
}
