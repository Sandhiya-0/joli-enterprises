// Page: Contact Us View — Exact Match to Reference Design (Wholesale Desk & Interactive Commercial Form)
import { escapeHtml } from '../components/productCard.js';

export function renderContactView(queryParams = {}) {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return `
    <div class="contact-exact-page-wrapper">
      <!-- Main Contact Section with Warehouse Backdrop matching Image 1 -->
      <section class="contact-exact-hero" style="background-image: linear-gradient(to right, rgba(248, 250, 252, 0.94) 0%, rgba(248, 250, 252, 0.76) 45%, rgba(248, 250, 252, 0.94) 100%), url('${baseUrl}images/contact-warehouse-backdrop.jpg');">
        <div class="container contact-exact-container">
          
          <!-- LEFT COLUMN: Wholesale Desk & 4 White Contact Cards -->
          <div class="contact-left-col">
            <div class="contact-eyebrow">
              <span class="eyebrow-dash">—</span> JOLI ENTERPRISES
            </div>
            
            <h1 class="contact-hero-title">Wholesale <span class="highlight-blue">Desk</span></h1>
            
            <p class="contact-hero-desc">
              We supply small, everyday retail merchandise to retail shops, stationery dealers, gift boutiques, and resellers across India.
            </p>

            <div class="contact-capsule-list">
              <!-- 1. Wholesale Warehouse & Dispatch -->
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="contact-capsule-card" aria-label="Wholesale Warehouse Location">
                <div class="capsule-icon-wrap icon-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="capsule-content">
                  <div class="capsule-title">Wholesale Warehouse &amp; Dispatch</div>
                  <div class="capsule-text">
                    Wholesale Commercial Hub, Industrial Estate,<br>
                    Chennai, Tamil Nadu, India<br>
                    <span class="capsule-sub-hint">(Demo Representation)</span>
                  </div>
                </div>
                <div class="capsule-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
              </a>

              <!-- 2. Direct Wholesale Helpline -->
              <a href="tel:+919876543210" class="contact-capsule-card" aria-label="Direct Wholesale Helpline">
                <div class="capsule-icon-wrap icon-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div class="capsule-content">
                  <div class="capsule-title">Direct Wholesale Helpline</div>
                  <div class="capsule-strong">+91 98765 43210 (Demo Contact)</div>
                  <div class="capsule-hint">Mon – Sat: 9:30 AM – 7:00 PM IST</div>
                </div>
                <div class="capsule-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
              </a>

              <!-- 3. Official Wholesale Email -->
              <a href="mailto:wholesale@jolienterprises.sample" class="contact-capsule-card" aria-label="Official Wholesale Email">
                <div class="capsule-icon-wrap icon-orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div class="capsule-content">
                  <div class="capsule-title">Official Wholesale Email</div>
                  <div class="capsule-strong">wholesale@jolienterprises.sample</div>
                  <div class="capsule-hint">Proforma invoices &amp; bulk order confirmations</div>
                </div>
                <div class="capsule-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
              </a>

              <!-- 4. Bulk Orders & Custom Combos -->
              <a href="#/bulk-enquiry" class="contact-capsule-card" aria-label="Bulk Orders and Custom Combos">
                <div class="capsule-icon-wrap icon-purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div class="capsule-content">
                  <div class="capsule-title">Bulk Orders &amp; Custom Combos</div>
                  <div class="capsule-text">
                    For institutional school orders (500+ kits) or custom packaging, please visit our <span class="capsule-link-underline">Bulk Enquiry Form</span>.
                  </div>
                </div>
                <div class="capsule-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
              </a>
            </div>
          </div>

          <!-- CENTER VISUAL: Pan-India Dispatch Map + Pallet Jack with Cartons -->
          <div class="contact-center-visual">
            <div class="dispatch-callout">
              <span class="dispatch-callout-text">Pan-India<br>Dispatch</span>
              <svg class="dispatch-curved-arrow" width="34" height="48" viewBox="0 0 40 60" fill="none" stroke="#0f172a" stroke-width="2">
                <path d="M 12 4 C 5 20, 2 36, 16 48" stroke-linecap="round"></path>
                <polyline points="10 48 18 50 16 42" stroke-linecap="round" stroke-linejoin="round"></polyline>
              </svg>
            </div>

            <div class="dispatch-map-svg-wrap">
              <svg width="160" height="190" viewBox="0 0 100 120" fill="none">
                <!-- India Silhouette Outline -->
                <path d="M 45 4 C 47 2, 53 2, 55 4 C 58 8, 62 10, 60 16 C 58 20, 52 22, 50 25 C 50 28, 56 30, 60 28 C 65 26, 70 28, 72 32 C 75 35, 70 38, 74 42 C 78 45, 84 42, 88 44 C 92 46, 88 50, 84 52 C 80 54, 76 52, 74 54 C 70 58, 72 62, 70 66 C 68 70, 64 72, 60 76 C 58 80, 54 84, 52 90 C 50 96, 46 102, 44 108 C 42 104, 38 96, 36 90 C 34 84, 32 78, 30 72 C 28 66, 24 64, 20 62 C 16 60, 14 56, 12 52 C 10 48, 14 44, 18 42 C 22 40, 26 42, 30 38 C 34 34, 32 30, 34 26 C 36 22, 40 20, 42 16 C 44 12, 42 6, 45 4 Z" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.2" opacity="0.95"></path>
                <!-- Origin: Chennai Dispatch Hub -->
                <circle cx="48" cy="94" r="3.5" fill="#0284c7"></circle>
                <circle cx="48" cy="94" r="6" stroke="#0284c7" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"></circle>
                <!-- Dotted Routes to Mumbai, Delhi, Kolkata, Bengaluru -->
                <path d="M 48 94 Q 38 75, 26 62" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.8"></path>
                <circle cx="26" cy="62" r="2" fill="#0284c7"></circle>
                <path d="M 48 94 Q 46 55, 46 32" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.8"></path>
                <circle cx="46" cy="32" r="2" fill="#0284c7"></circle>
                <path d="M 48 94 Q 62 70, 72 52" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.8"></path>
                <circle cx="72" cy="52" r="2" fill="#0284c7"></circle>
                <!-- Delivery Truck Icon Badge -->
                <g transform="translate(62, 86)">
                  <rect x="0" y="0" width="22" height="15" rx="3" fill="#ffffff" stroke="#0f172a" stroke-width="1.2"></rect>
                  <path d="M 3 4 H 13 V 11 H 3 Z" fill="#0284c7"></path>
                  <path d="M 13 6 H 18 L 20 9 V 11 H 13 Z" fill="#04adfe"></path>
                  <circle cx="6" cy="12" r="1.5" fill="#0f172a"></circle>
                  <circle cx="16" cy="12" r="1.5" fill="#0f172a"></circle>
                </g>
              </svg>
            </div>

            <div class="dispatch-pallet-jack-wrap">
              <img src="${baseUrl}images/pallet-jack-cartons.jpg" alt="Master carton pallet dispatch" class="dispatch-pallet-jack-img" />
            </div>
          </div>

          <!-- RIGHT COLUMN: Floating White Wholesale Form Card -->
          <div class="contact-form-card">
            <div class="contact-form-eyebrow">
              <span class="eyebrow-dash">—</span> SEND A WHOLESALE ENQUIRY
            </div>
            
            <h2 class="contact-form-title">Let's Discuss Your <span class="highlight-blue">Requirements</span></h2>
            
            <p class="contact-form-subtitle">
              Send your questions to our B2B commercial desk. We respond during business hours.
            </p>

            <div id="contact-alert-container"></div>

            <form id="page-contact-form" novalidate>
              <div class="contact-form-row-2">
                <div class="form-group-custom">
                  <label for="contact-name" class="custom-label">Full Name *</label>
                  <div class="custom-input-wrap">
                    <span class="custom-input-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                    <input type="text" id="contact-name" class="custom-input-control" placeholder="e.g. Anand Murthy" required />
                  </div>
                  <span class="form-error-msg" id="err-contact-name"></span>
                </div>

                <div class="form-group-custom">
                  <label for="contact-business" class="custom-label">Shop / Enterprise Name</label>
                  <div class="custom-input-wrap">
                    <span class="custom-input-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </span>
                    <input type="text" id="contact-business" class="custom-input-control" placeholder="e.g. Murthy Book Depot" />
                  </div>
                </div>
              </div>

              <div class="contact-form-row-2">
                <div class="form-group-custom">
                  <label for="contact-phone" class="custom-label">Phone / WhatsApp *</label>
                  <div class="custom-input-wrap">
                    <span class="custom-input-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </span>
                    <input type="tel" id="contact-phone" class="custom-input-control" placeholder="+91 98765 43210" required />
                  </div>
                  <span class="form-error-msg" id="err-contact-phone"></span>
                </div>

                <div class="form-group-custom">
                  <label for="contact-email" class="custom-label">Email Address (Optional)</label>
                  <div class="custom-input-wrap">
                    <span class="custom-input-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </span>
                    <input type="email" id="contact-email" class="custom-input-control" placeholder="anand@bookdepot.com" />
                  </div>
                  <span class="form-error-msg" id="err-contact-email"></span>
                </div>
              </div>

              <div class="form-group-custom">
                <label for="contact-subject" class="custom-label">Enquiry Subject</label>
                <div class="custom-input-wrap custom-select-wrap">
                  <span class="custom-input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                  </span>
                  <select id="contact-subject" class="custom-input-control custom-select-control">
                    <option value="Product Stock & Wholesale Pricing" selected>Product Stock &amp; Wholesale Pricing</option>
                    <option value="Minimum Order Quantities">Minimum Order Quantity (MOQ) Clarification</option>
                    <option value="Transport & Logistics">Transport Logistics &amp; Delivery Timeline</option>
                    <option value="School Stationery Combos">School Stationery Combo Procurement</option>
                    <option value="Proforma & GST Invoice">Proforma &amp; GST Tax Invoicing</option>
                    <option value="General Question">General Wholesale Question</option>
                  </select>
                  <span class="custom-select-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </div>
              </div>

              <div class="form-group-custom">
                <label for="contact-message" class="custom-label">Your Message *</label>
                <div class="custom-input-wrap custom-textarea-wrap">
                  <span class="custom-input-icon custom-textarea-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </span>
                  <textarea id="contact-message" class="custom-input-control custom-textarea-control" rows="4" placeholder="Detail your required products, target quantity, or delivery city..." required></textarea>
                </div>
                <span class="form-error-msg" id="err-contact-message"></span>
              </div>

              <div class="contact-form-action-row">
                <button type="submit" class="btn-submit-enquiry" id="btn-contact-submit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  <span>Submit Wholesale Enquiry</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>

                <div class="contact-response-pill">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>We usually respond within 1 business day.</span>
                </div>
              </div>
            </form>
          </div>

        </div>
      </section>

      <!-- BOTTOM SECTION: 3-Column Strip matching Image 1 -->
      <section class="contact-bottom-section">
        <div class="container">
          <div class="contact-bottom-grid">
            
            <!-- Card 1 (Left): Joli Enterprises Wholesale Warehouse Hub -->
            <div class="contact-bottom-card card-warehouse-hub">
              <div class="hub-thumb-wrap">
                <img src="${baseUrl}images/contact-warehouse-hub.jpg" alt="Joli Enterprises Warehouse Hub" class="hub-thumb-img" />
              </div>
              <div class="hub-text-wrap">
                <div class="hub-company-name">Joli Enterprises</div>
                <h4 class="hub-title">Wholesale Warehouse Hub</h4>
                <div class="hub-address">Industrial Estate, Chennai</div>
                <div class="hub-dispatches">Logistics Dispatches Pan-India</div>
              </div>
            </div>

            <!-- Card 2 (Middle): Dark Navy 4-Feature Strip -->
            <div class="contact-bottom-card card-navy-features">
              <div class="navy-feature-grid">
                <div class="navy-feature-item">
                  <div class="navy-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                  </div>
                  <span class="navy-feature-label">Pan-India Delivery</span>
                </div>

                <div class="navy-feature-item">
                  <div class="navy-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <span class="navy-feature-label">Bulk Orders Supported</span>
                </div>

                <div class="navy-feature-item">
                  <div class="navy-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <span class="navy-feature-label">Reliable Supply Chain</span>
                </div>

                <div class="navy-feature-item">
                  <div class="navy-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span class="navy-feature-label">GST Invoices for Businesses</span>
                </div>
              </div>
            </div>

            <!-- Card 3 (Right): Container Quote Promotion -->
            <div class="contact-bottom-card card-container-quote" style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.76) 50%, rgba(255, 255, 255, 0.92) 100%), url('${baseUrl}images/container-quote-bg.jpg');">
              <div class="quote-text-wrap">
                <h4 class="quote-card-title">Need a Container Quote?</h4>
                <p class="quote-card-desc">
                  For large volume orders (LCL/FCL), get a custom quotation from our team.
                </p>
                <a href="#/bulk-enquiry" class="btn-request-container-quote">
                  <span>Request Container Quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
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
    form.querySelectorAll('.custom-input-control').forEach(inp => inp.classList.remove('error'));
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
      const errEl = document.getElementById('err-contact-name');
      if (errEl) errEl.textContent = 'Please enter your name.';
      hasError = true;
    }

    // Validate Phone
    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 10) {
      phoneInput.classList.add('error');
      const errEl = document.getElementById('err-contact-phone');
      if (errEl) errEl.textContent = 'Please enter a valid 10-digit phone number.';
      hasError = true;
    }

    // Validate Email if entered
    if (emailInput && emailInput.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        const errEl = document.getElementById('err-contact-email');
        if (errEl) errEl.textContent = 'Please enter a valid email format.';
        hasError = true;
      }
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.classList.add('error');
      const errEl = document.getElementById('err-contact-message');
      if (errEl) errEl.textContent = 'Please enter your message or question.';
      hasError = true;
    }

    if (hasError) return;

    // Simulated Submission State
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
      <span>Submitting Wholesale Enquiry...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;

      if (alertContainer) {
        alertContainer.innerHTML = `
          <div class="alert-box alert-success" style="margin-bottom: 1.25rem; border-radius: 10px; background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 1rem 1.25rem; display: flex; align-items: flex-start; gap: 0.75rem;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <div>
              <strong style="color: #15803d; font-size: 0.95rem;">Enquiry Received!</strong><br>
              Thank you, <strong>${escapeHtml(nameInput.value.trim())}</strong>. Your enquiry regarding <em>"${escapeHtml(subjectSelect.value)}"</em> has been received. Our wholesale trade desk will contact you at <strong>${escapeHtml(phoneInput.value.trim())}</strong> shortly.
            </div>
          </div>
        `;
      }

      form.reset();
    }, 900);
  });
}
