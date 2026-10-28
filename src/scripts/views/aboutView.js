// Page: About Us View — Joli Enterprises Wholesale Merchandise
import { escapeHtml } from '../components/productCard.js';

export function renderAboutView() {
  return `
    <!-- About Header & Breadcrumbs -->
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">About Us</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Small Products. Maximum Retail Margins.</h1>
        <p class="section-subtitle">
          Direct B2B wholesale partner supplying fast-moving everyday goods to 500+ independent retail merchants across India.
        </p>
      </div>
    </header>

    <!-- Main About Showcase (Reference Cream & Gold Theme) -->
    <section class="about-ref-section">
      <!-- Decorative Background Golden Orbital Curves -->
      <div class="about-bg-curves" aria-hidden="true">
        <svg viewBox="0 0 1440 650" fill="none" preserveAspectRatio="none">
          <path d="M-100 280 C 250 80, 750 480, 1540 180" stroke="#C9A25E" stroke-width="1.8" stroke-dasharray="7 9" opacity="0.45" />
          <path d="M-50 420 C 350 200, 850 560, 1500 320" stroke="#C9A25E" stroke-width="1.2" opacity="0.32" />
        </svg>
      </div>

      <div class="container about-ref-container">
        <div class="about-ref-grid">
          <!-- Left Column: Concise & Attractive Story -->
          <div class="about-ref-col-left fade-up">
            <span class="about-ref-badge">About Joli Enterprises</span>
            <h2 class="about-ref-title">
              Wholesale Merchandise for <span class="about-ref-title-gold">Everyday Retail</span>
            </h2>
            
            <p class="about-ref-lead">
              We connect local retail shopkeepers, school supply stores, and gift boutiques directly with high-demand everyday essentials at transparent factory prices.
            </p>

            <p class="about-ref-body">
              Every shipment features verified piece counts, realistic MOQs starting from 12 units, and honest wholesale profit margins of 35% to 65% upon resale.
            </p>

            <div class="about-ref-actions">
              <a href="#/categories" class="btn-about-gold">
                <span>Browse Categories</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#/bulk-deals" class="btn-about-white">
                <span>Carton Volume Deals</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Visual Box Asset & Floating Channel Pills -->
          <div class="about-ref-col-right fade-up">
            <div class="about-category-pills-stack" aria-label="Retail Channels We Supply">
              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Retail Shops</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Stationery Stores</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                  </svg>
                </div>
                <span class="cat-pill-text">Gift Boutiques</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <span class="cat-pill-text">Mobile Kiosks</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Online Resellers</span>
              </div>
            </div>

            <!-- Joli Enterprises Open Cardboard Product Box Visual -->
            <div class="about-box-visual-wrap">
              <div class="about-box-image-card">
                <img 
                  src="${import.meta.env.BASE_URL}images/about-product-box.jpg" 
                  alt="Joli Enterprises Open Wholesale Cardboard Box Filled with Colourful Retail Merchandise" 
                  class="about-box-img"
                  loading="lazy"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wholesale Strengths & Commercial Pillars -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">The Joli Wholesale Advantage</h2>
          <p class="section-subtitle">
            Purpose-built purchasing benefits designed to protect retailer cash flow and accelerate sales velocity.
          </p>
        </div>

        <div class="about-values-grid">
          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="value-card-title">Tiered Volume Rates</h3>
            <p class="value-card-desc">
              Automatic tier discounts on carton lots. Test items with low MOQs and scale to master cartons as velocity grows.
            </p>
          </div>

          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line></svg>
            </div>
            <h3 class="value-card-title">Ready-to-Resell Combos</h3>
            <p class="value-card-desc">
              Pre-assembled school kits and gift combos shrink-wrapped and barcoded for instant shelf placement.
            </p>
          </div>

          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="value-card-title">100% Verified Piece Counts</h3>
            <p class="value-card-desc">
              Zero shortage guarantee. Every carton and multipack is piece-audited before dispatch for complete peace of mind.
            </p>
          </div>

          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <h3 class="value-card-title">GST ITC & 24h Dispatch</h3>
            <p class="value-card-desc">
              Formal GST tax invoices with HSN codes for instant ITC claims. Orders dispatched via insured express freight.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Wholesale Call to Action Banner -->
    <section class="section-sm bg-soft-grey">
      <div class="container">
        <div class="cta-banner fade-up">
          <div class="cta-banner-content">
            <h2 class="cta-banner-title">Stock Your Retail Shelves with Confidence</h2>
            <p class="cta-banner-desc">
              Explore our 5 primary wholesale categories or connect directly with our trade desk for custom carton volume quotations.
            </p>
          </div>
          <div class="cta-banner-action" style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#/categories" class="btn btn-primary btn-lg">
              <span>Explore Categories</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#/bulk-enquiry" class="btn btn-outline btn-lg">
              <span>Request Trade Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
