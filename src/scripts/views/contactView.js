// Page: Contact Us View — Joli Enterprises Wholesale
import { getProducts } from '../../data/products.js';
import { escapeHtml } from '../components/productCard.js';

export function renderContactView(queryParams = {}) {
  const products = getProducts();
  const prefilledProduct = queryParams.enquire || '';

  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Contact Us</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Direct Wholesale Order Desk</h1>
        <p class="section-subtitle">
          Fast assistance with carton volume pricing, sample requests, and 24h warehouse dispatch across India.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Contact Details Card -->
          <div class="contact-info-card fade-up">
            <h3>Joli Enterprises Wholesale Desk</h3>
            <p>
              We supply small, everyday retail merchandise to retail shops, stationery dealers, gift boutiques, and resellers across India.
            </p>

            <div class="contact-channel-list">
              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Wholesale Warehouse & Dispatch</div>
                  <div class="contact-channel-value">
                    Wholesale Commercial Hub, Industrial Estate<br>
                    Chennai, Tamil Nadu, India (Demo Representation)
                  </div>
                  <div class="contact-channel-hint">Sample wholesale warehouse demonstration address</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Direct Wholesale Helpline</div>
                  <div class="contact-channel-value">+91 98765 43210 (Demo Contact)</div>
                  <div class="contact-channel-hint">Mon – Sat: 9:30 AM – 7:00 PM IST</div>
                </div>
              </div>

              <div class="contact-channel">
                <div class="contact-channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div class="contact-channel-title">Official Wholesale Email</div>
                  <div class="contact-channel-value">wholesale@jolienterprises.sample</div>
                  <div class="contact-channel-hint">Proforma invoices & bulk order confirmations</div>
                </div>
              </div>
            </div>

            <div style="padding-top: 1.5rem; margin-top: 1.5rem; font-size: 0.85rem; color: #94A3B8;">
              <strong style="color: var(--color-gold);">Bulk Orders & Custom Combos:</strong> For institutional school orders (500+ kits) or custom packaging, please visit our <a href="#/bulk-enquiry" style="color: #fff; text-decoration: underline;">Bulk Enquiry Form</a>.
            </div>
          </div>

          <!-- Right: Interactive Contact Form -->
          <div class="form-card fade-up">
            <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-navy);">Send a Wholesale Enquiry</h2>
            <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">
              Submit your store details or product requirements. Our trade desk responds within 2 business hours.
            </p>

            <div id="contact-alert-container"></div>

            <form id="page-contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name" class="form-label">Full Name <span class="required">*</span></label>
                  <input type="text" id="contact-name" class="form-control" placeholder="e.g. Anand Murthy" required>
                  <span class="form-error-msg" id="err-contact-name"></span>
                </div>
                <div class="form-group">
                  <label for="contact-business" class="form-label">Shop / Enterprise Name</label>
                  <input type="text" id="contact-business" class="form-control" placeholder="e.g. Murthy Book Depot">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="contact-phone" class="form-label">Phone / WhatsApp <span class="required">*</span></label>
                  <input type="tel" id="contact-phone" class="form-control" placeholder="+91 98765 43210" required>
                  <span class="form-error-msg" id="err-contact-phone"></span>
                </div>
                <div class="form-group">
                  <label for="contact-email" class="form-label">Email Address (Optional)</label>
                  <input type="email" id="contact-email" class="form-control" placeholder="anand@bookdepot.com">
                  <span class="form-error-msg" id="err-contact-email"></span>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-subject" class="form-label">Enquiry Subject</label>
                <select id="contact-subject" class="form-control">
                  <option value="Product Stock & Pricing">Product Stock & Wholesale Pricing</option>
                  <option value="Minimum Order Quantities">Minimum Order Quantity (MOQ) Clarification</option>
                  <option value="Transport & Logistics">Transport Logistics & Delivery Timeline</option>
                  <option value="School Stationery Combos">School Stationery Combo Procurement</option>
                  <option value="Proforma & GST Invoice">Proforma & GST Tax Invoicing</option>
                  <option value="General Question">General Wholesale Question</option>
                </select>
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">Your Message <span class="required">*</span></label>
                <textarea id="contact-message" class="form-control" rows="4" placeholder="Detail your required products, target quantity, or delivery city..." required></textarea>
                <span class="form-error-msg" id="err-contact-message"></span>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" id="btn-contact-submit">
                <span>Submit Wholesale Enquiry</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>

        <!-- Demonstration Notice Box -->
        <div class="location-card fade-up" style="margin-top: 2rem;">
          <div class="location-map-mock">
            <div class="location-pin-wrap">
              <div style="font-family: var(--font-heading); font-weight: 700; color: var(--color-white); font-size: 1.05rem;">
                Joli Enterprises Wholesale Warehouse Hub
              </div>
              <div style="font-size: 0.85rem; color: #CBD5E1; margin-top: 0.25rem;">
                Industrial Estate, Chennai • Logistics Dispatches Pan-India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContactViewEvents() {
  const form = document.getElementById('page-contact-form');
  const alertContainer = document.getElementById('contact-alert-container');
  const submitBtn = document.getElementById('btn-contact-submit');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors
    const errorIds = ['err-contact-name', 'err-contact-phone', 'err-contact-email', 'err-contact-message'];
    errorIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    form.querySelectorAll('.form-control').forEach(inp => inp.classList.remove('error'));
    if (alertContainer) alertContainer.innerHTML = '';

    const nameInput = document.getElementById('contact-name');
    const phoneInput = document.getElementById('contact-phone');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const subjectSelect = document.getElementById('contact-subject');

    let hasError = false;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.classList.add('error');
      document.getElementById('err-contact-name').textContent = 'Please enter your name.';
      hasError = true;
    }

    // Validate Phone
    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 10) {
      phoneInput.classList.add('error');
      document.getElementById('err-contact-phone').textContent = 'Please enter a valid 10-digit phone number.';
      hasError = true;
    }

    // Validate Email if entered
    if (emailInput.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        document.getElementById('err-contact-email').textContent = 'Please enter a valid email format.';
        hasError = true;
      }
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.classList.add('error');
      document.getElementById('err-contact-message').textContent = 'Please enter your message or question.';
      hasError = true;
    }

    if (hasError) return;

    // Simulated Submission State
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
      <span>Submitting Wholesale Enquiry...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      if (alertContainer) {
        alertContainer.innerHTML = `
          <div class="alert-box alert-success">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div>
              <strong>Enquiry Received!</strong><br>
              Thank you, <strong>${escapeHtml(nameInput.value.trim())}</strong>. Your enquiry regarding <em>"${escapeHtml(subjectSelect.value)}"</em> has been received in this demonstration environment. Our wholesale sales team will contact you at <strong>${escapeHtml(phoneInput.value.trim())}</strong> shortly.
            </div>
          </div>
        `;
      }

      form.reset();
    }, 1000);
  });
}
