// Page: Contact Us View — Exact Match to User Image 1 (Wholesale Desk & Interactive Commercial Form)
import { escapeHtml } from '../components/productCard.js';

export function renderContactView(queryParams = {}) {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return `
    <div class="contact-v1-page">
      <div class="container contact-v1-main-container">
        
        <!-- MAIN SHOWCASE HERO (Left: Wholesale Desk, Center: Warehouse & Pallet Visual, Right: Floating Form) -->
        <section class="contact-v1-hero">
          
          <!-- Background Warehouse Racks Backdrop from center to right -->
          <div class="contact-v1-backdrop-img" style="background-image: url('${baseUrl}images/contact-warehouse-backdrop.jpg');" aria-hidden="true"></div>
          
          <!-- Smooth Curved Convex White Overlay separating Left Column -->
          <div class="contact-v1-curve-overlay" aria-hidden="true"></div>

          <div class="contact-v1-hero-content">
            
            <!-- LEFT COLUMN: Wholesale Desk & 4 Contact Information Rows -->
            <div class="contact-v1-left-col">
              <div class="contact-v1-eyebrow">
                <span class="eyebrow-blue-dash">—</span> JOLI ENTERPRISES
              </div>
              
              <h1 class="contact-v1-title">Wholesale <span class="highlight-blue">Desk</span></h1>
              
              <p class="contact-v1-desc">
                We supply small, everyday retail merchandise to retail shops, stationery dealers, gift boutiques, and resellers across India.
              </p>

              <div class="contact-v1-info-list">
                <!-- 1. Wholesale Warehouse & Dispatch -->
                <div class="contact-v1-info-item">
                  <div class="contact-v1-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div class="contact-v1-info-text">
                    <div class="contact-v1-info-title">Wholesale Warehouse &amp; Dispatch</div>
                    <div class="contact-v1-info-sub">
                      Wholesale Commercial Hub, Industrial Estate,<br>
                      Chennai, Tamil Nadu, India<br>
                      <span class="text-muted-hint">(Demo Representation)</span>
                    </div>
                  </div>
                </div>

                <!-- 2. Direct Wholesale Helpline -->
                <div class="contact-v1-info-item">
                  <div class="contact-v1-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div class="contact-v1-info-text">
                    <div class="contact-v1-info-label">Direct Wholesale Helpline</div>
                    <div class="contact-v1-info-strong">+91 98765 43210 (Demo Contact)</div>
                    <div class="contact-v1-info-sub">Mon – Sat: 9:30 AM – 7:00 PM IST</div>
                  </div>
                </div>

                <!-- 3. Official Wholesale Email -->
                <div class="contact-v1-info-item">
                  <div class="contact-v1-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div class="contact-v1-info-text">
                    <div class="contact-v1-info-label">Official Wholesale Email</div>
                    <div class="contact-v1-info-strong">wholesale@jolienterprises.sample</div>
                    <div class="contact-v1-info-sub">Proforma invoices &amp; bulk order confirmations</div>
                  </div>
                </div>

                <!-- 4. Bulk Orders & Custom Combos -->
                <div class="contact-v1-info-item">
                  <div class="contact-v1-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div class="contact-v1-info-text">
                    <div class="contact-v1-info-title">Bulk Orders &amp; Custom Combos</div>
                    <div class="contact-v1-info-sub">
                      For institutional school orders (500+ kits) or<br>
                      custom packaging, please visit our<br>
                      <a href="#/bulk-enquiry" class="contact-v1-link-arrow">Bulk Enquiry Form &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CENTER VISUAL: Stacked Pallet of Cartons + Glowing Pan-India Dispatch Badge + Curved Arrow -->
            <div class="contact-v1-center-visual">
              
              <!-- Curved Blue Directional Arrow -->
              <svg class="contact-v1-curved-arrow" width="60" height="85" viewBox="0 0 60 85" fill="none" aria-hidden="true">
                <path d="M 12 8 C 4 35, 4 60, 24 74" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
                <polyline points="14 70 25 76 23 62" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <!-- Glowing Pan-India Dispatch Circular Badge -->
              <div class="contact-v1-dispatch-badge">
                <div class="dispatch-badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div class="dispatch-badge-title">Pan-India<br>Dispatch</div>
                <div class="dispatch-badge-sub">Reliable Supply<br>On-Time Delivery</div>
              </div>

              <!-- Wooden Pallet with Stacked Corrugated Barcode Cartons -->
              <div class="contact-v1-pallet-wrap">
                <img 
                  src="${baseUrl}images/pallet-cartons-isolated.png" 
                  alt="Stacked wholesale carton lots on wooden pallet" 
                  class="contact-v1-pallet-img" 
                />
              </div>
            </div>

            <!-- RIGHT COLUMN: Floating Elevated White Wholesale Enquiry Card -->
            <div class="contact-v1-form-card">
              <div class="contact-v1-form-eyebrow">
                <span class="eyebrow-blue-dash">—</span> SEND A WHOLESALE ENQUIRY
              </div>
              
              <h2 class="contact-v1-form-title">Let's Discuss Your <span class="highlight-blue">Requirements</span></h2>
              
              <p class="contact-v1-form-desc">
                Send your questions to our B2B commercial desk.<br>
                We respond during business hours.
              </p>

              <div id="contact-alert-container"></div>

              <form id="page-contact-form" novalidate>
                <div class="contact-v1-form-row">
                  <div class="form-group-v1">
                    <label for="contact-name" class="label-v1">Full Name *</label>
                    <div class="input-wrap-v1">
                      <span class="input-icon-v1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      <input type="text" id="contact-name" class="input-control-v1" placeholder="e.g. Anand Murthy" required />
                    </div>
                    <span class="form-error-msg" id="err-contact-name"></span>
                  </div>

                  <div class="form-group-v1">
                    <label for="contact-business" class="label-v1">Shop / Enterprise Name</label>
                    <div class="input-wrap-v1">
                      <span class="input-icon-v1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </span>
                      <input type="text" id="contact-business" class="input-control-v1" placeholder="e.g. Murthy Book Depot" />
                    </div>
                  </div>
                </div>

                <div class="contact-v1-form-row">
                  <div class="form-group-v1">
                    <label for="contact-phone" class="label-v1">Phone / WhatsApp *</label>
                    <div class="input-wrap-v1">
                      <span class="input-icon-v1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </span>
                      <input type="tel" id="contact-phone" class="input-control-v1" placeholder="+91 98765 43210" required />
                    </div>
                    <span class="form-error-msg" id="err-contact-phone"></span>
                  </div>

                  <div class="form-group-v1">
                    <label for="contact-email" class="label-v1">Email Address (Optional)</label>
                    <div class="input-wrap-v1">
                      <span class="input-icon-v1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </span>
                      <input type="email" id="contact-email" class="input-control-v1" placeholder="anand@bookdepot.com" />
                    </div>
                    <span class="form-error-msg" id="err-contact-email"></span>
                  </div>
                </div>

                <div class="form-group-v1">
                  <label for="contact-subject" class="label-v1">Enquiry Subject</label>
                  <div class="input-wrap-v1 select-wrap-v1">
                    <span class="input-icon-v1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                      </svg>
                    </span>
                    <select id="contact-subject" class="input-control-v1 select-control-v1">
                      <option value="Product Stock & Wholesale Pricing" selected>Product Stock &amp; Wholesale Pricing</option>
                      <option value="Minimum Order Quantities">Minimum Order Quantity (MOQ) Clarification</option>
                      <option value="Transport & Logistics">Transport Logistics &amp; Delivery Timeline</option>
                      <option value="School Stationery Combos">School Stationery Combo Procurement</option>
                      <option value="Proforma & GST Invoice">Proforma &amp; GST Tax Invoicing</option>
                      <option value="General Question">General Wholesale Question</option>
                    </select>
                    <span class="select-arrow-v1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </div>
                </div>

                <div class="form-group-v1">
                  <label for="contact-message" class="label-v1">Your Message *</label>
                  <div class="input-wrap-v1 textarea-wrap-v1">
                    <span class="input-icon-v1 textarea-icon-v1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </span>
                    <textarea id="contact-message" class="input-control-v1 textarea-control-v1" rows="4" placeholder="Detail your required products, target quantity, or delivery city..." required></textarea>
                  </div>
                  <span class="form-error-msg" id="err-contact-message"></span>
                </div>

                <div class="contact-v1-action-row">
                  <button type="submit" class="btn-submit-v1" id="btn-contact-submit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    <span>Submit Wholesale Enquiry</span>
                    <span class="btn-arrow-circle">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                  </button>

                  <div class="contact-v1-response-pill">
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

        <!-- BOTTOM SECTION: Wide Card matching Image 1 -->
        <section class="contact-v1-bottom-bar">
          <!-- Left: Warehouse Building Illustration + Title + Address + Accent Line -->
          <div class="bottom-bar-left">
            <div class="bottom-hub-thumb">
              <img src="${baseUrl}images/contact-warehouse-hub-exact.png" alt="Joli Enterprises Wholesale Warehouse Hub" class="bottom-hub-img" />
            </div>
            <div class="bottom-hub-info">
              <h3 class="bottom-hub-title">Joli Enterprises Wholesale Warehouse Hub</h3>
              <div class="bottom-hub-sub">Industrial Estate, Chennai &bull; Logistics Dispatches Pan-India</div>
              <div class="bottom-hub-line"></div>
            </div>
          </div>

          <!-- Right: 3 Feature Badges in Row -->
          <div class="bottom-bar-features">
            <!-- 1. Pan-India Delivery -->
            <div class="bottom-feature-item">
              <div class="bottom-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div class="bottom-feature-name">Pan-India<br>Delivery</div>
            </div>

            <!-- 2. Bulk Orders Supported -->
            <div class="bottom-feature-item">
              <div class="bottom-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div class="bottom-feature-name">Bulk Orders<br>Supported</div>
            </div>

            <!-- 3. Reliable Supply Chain -->
            <div class="bottom-feature-item">
              <div class="bottom-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div class="bottom-feature-name">Reliable<br>Supply Chain</div>
            </div>
          </div>
        </section>

      </div>
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
    form.querySelectorAll('.input-control-v1, .form-control').forEach(inp => inp.classList.remove('error'));
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
