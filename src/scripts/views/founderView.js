// Page: Founder View — Pixel-perfect implementation matching user uploaded image
export function renderFounderView() {
  return `
    <section class="founder-exact-section">
      <div class="container">
        <div class="founder-exact-grid">
          <!-- Left Column: Content, Metrics & Actions -->
          <div class="founder-content-col fade-up">
            <div class="founder-eyebrow">
              <span class="founder-eyebrow-dash"></span>
              <span>FOUNDER'S VISION &amp; LEADERSHIP</span>
            </div>

            <h1 class="founder-headline">
              Built for the <br />
              <span class="highlight-blue">Grassroots</span> Retailer
            </h1>

            <p class="founder-para-lead">
              <strong>Joli Enterprises</strong> was founded to empower independent shopkeepers with direct factory pricing, realistic pack sizes, and zero middleman markups.
            </p>

            <p class="founder-para-sub">
              We eliminate the burden of container-scale orders, giving local merchants the flexibility to test trending goods safely with low MOQs and healthy 35%–65% margins.
            </p>

            <!-- 3 Stat Highlight Cards with Exact Icons -->
            <div class="founder-cards-strip">
              <div class="founder-stat-card">
                <div class="founder-stat-icon-wrap">
                  <svg class="founder-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div class="founder-stat-text">
                  <div class="founder-stat-val">500+</div>
                  <div class="founder-stat-lbl">RETAIL PARTNERS</div>
                </div>
              </div>

              <div class="founder-stat-card">
                <div class="founder-stat-icon-wrap">
                  <svg class="founder-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                    <line x1="2" y1="20" x2="22" y2="20"></line>
                  </svg>
                </div>
                <div class="founder-stat-text">
                  <div class="founder-stat-val">35%–65%</div>
                  <div class="founder-stat-lbl">RESALE MARGINS</div>
                </div>
              </div>

              <div class="founder-stat-card">
                <div class="founder-stat-icon-wrap">
                  <svg class="founder-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div class="founder-stat-text">
                  <div class="founder-stat-val">24h</div>
                  <div class="founder-stat-lbl">DISPATCH SLA</div>
                </div>
              </div>
            </div>

            <!-- Action Buttons matching image -->
            <div class="founder-actions-row">
              <a href="#/categories" class="founder-btn-explore">
                <span>Explore Sourcing Lines</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#/contact" class="founder-btn-connect">
                <span>Connect with Leadership</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009BE5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <!-- Right Column: Exact Circular Founder Portrait Matching User Uploaded Image -->
          <div class="founder-portrait-col">
            <div class="founder-circle-wrap" id="founder-circle-portrait">
              <img 
                src="/images/founder-circle-clean.png" 
                alt="Joli Enterprises Founder and Leadership"
                class="founder-circle-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Trigger slide-in from outside right whenever arriving at the page
export function initFounderViewEvents() {
  const portrait = document.getElementById('founder-circle-portrait');
  if (portrait) {
    portrait.classList.remove('is-animating');
    // Double rAF ensures browser paints off-screen 140% state first, then plays smooth entrance
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        portrait.classList.add('is-animating');
      });
    });
    // Fallback safety
    setTimeout(() => {
      if (portrait && !portrait.classList.contains('is-animating')) {
        portrait.classList.add('is-animating');
      }
    }, 120);
  }
}
