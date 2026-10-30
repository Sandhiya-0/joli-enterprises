// Page: Combos View — Ready-Made Wholesale Bundles & School Kits
import { getProducts } from '../../data/products.js';
import { renderProductCard } from '../components/productCard.js';
import { initHoloCards } from '../components/holoCard.js';
import { openOffersModal } from '../components/offersModal.js';

export function initCombosViewEvents() {
  initHoloCards();
  // Automatically pop up the offer modal at center of page when entering combos
  setTimeout(() => {
    openOffersModal();
  }, 250);
}

export function renderCombosView() {
  const baseUrl = import.meta.env.BASE_URL;
  const allProducts = getProducts();
  const comboPacks = allProducts.filter(p => p.isCombo);

  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Combos & Kits</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Pre-Packaged Wholesale Combos</h1>
        <p class="section-subtitle">
          Ready-to-sell stationery kits, exam bundles, and gift multipacks with guaranteed piece-count accuracy.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Verified Retail & School Bundles</h2>
          <p class="section-subtitle">
            Individually packaged and barcoded for instant shelf placement with up to 60% retailer resale margin.
          </p>
        </div>

        <div class="products-grid" style="margin-bottom: 3.5rem;">
          ${comboPacks.map(p => renderProductCard(p)).join('')}
        </div>

        <!-- Custom Combo Assembly Widescreen Banner (Image 2 Redesign) -->
        <div class="custom-combo-card-banner fade-up">
          <!-- Left: 3D Custom Combo Box Art -->
          <div class="combo-banner-art">
            <img src="${baseUrl}images/custom-combo-box.png" alt="Custom Combo Kit Assembly" class="combo-banner-art-img" />
          </div>

          <!-- Center: Headline, Description & Glowing Button -->
          <div class="combo-banner-center">
            <div class="combo-banner-header-wrap">
              <span class="combo-confetti-left" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12 L9 10 M5 6 L8 9 M11 4 L10 9" stroke="#FF5396" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </span>
              <h2 class="combo-banner-title">
                Need a <span class="combo-highlight-cyan">Custom Combo</span> Assembled<br>
                for Your School or Brand?
              </h2>
              <span class="combo-confetti-right" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M20 12 L15 10 M19 6 L16 9 M13 4 L14 9" stroke="#04ADFE" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </span>
            </div>
            <a href="#/bulk-enquiry?category=combos&product=Custom+Kit+Assembly" class="combo-banner-cta-btn">
              <span>Request Custom Combo Assembly</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>

          <!-- Right: 3 Feature Items with Glowing Circular Badges -->
          <div class="combo-banner-features">
            <div class="combo-banner-feature-item">
              <div class="combo-feature-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div class="combo-feature-text">
                <div class="combo-feature-title">Custom Item Selection</div>
                <div class="combo-feature-sub">Choose any products & quantities</div>
              </div>
            </div>

            <div class="combo-feature-divider"></div>

            <div class="combo-banner-feature-item">
              <div class="combo-feature-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 3"></path>
                  <path d="M12 3v1.5"></path>
                  <path d="M21 12h-1.5"></path>
                  <path d="M12 21v-1.5"></path>
                  <path d="M3 12h1.5"></path>
                </svg>
              </div>
              <div class="combo-feature-text">
                <div class="combo-feature-title">Branding & Packaging</div>
                <div class="combo-feature-sub">Add your logo and custom labels</div>
              </div>
            </div>

            <div class="combo-feature-divider"></div>

            <div class="combo-banner-feature-item">
              <div class="combo-feature-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 3h15v13H1z"></path>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div class="combo-feature-text">
                <div class="combo-feature-title">Bulk Pricing</div>
                <div class="combo-feature-sub">Best rates for schools and businesses</div>
              </div>
            </div>

            <div class="combo-banner-star" aria-hidden="true">✦</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
