// Page 1: Home View — Complete Wholesale Storefront
// Sequence:
// 1. HOME (#home) -> 2. COMBOS (#combos) -> 3. ABOUT (#about) -> 4. FOUNDER (#founder) -> 5. CATEGORIES (#categories)
// -> 6. BULK DEALS (#bulk-deals) -> 7. CONTACT (#contact)

import { getCategories, getProducts } from '../../data/products.js';
import { renderProductCard, escapeHtml } from '../components/productCard.js';
import { renderContactView, initContactViewEvents } from './contactView.js';
import { wholesaleReviews } from './reviewsView.js';
import { wholesaleFaqs } from './faqView.js';
import { initHoloCards } from '../components/holoCard.js';
import { initBounceCards } from '../components/bounceCards.js';
import { renderBulkFlipCard, initFlipCards } from '../components/flipCard.js';
import { observeCombosSectionForPopup } from '../components/offersModal.js';

export function renderHomeView() {
  const baseUrl = import.meta.env.BASE_URL;
  const categories = getCategories();
  const allProducts = getProducts();
  const featuredProducts = allProducts.filter(p => p.featured || (!p.isCombo && p.cartonQuantity && p.cartonQuantity >= 100)).slice(0, 8);
  const volumeDeals = allProducts.filter(p => !p.isCombo && p.cartonQuantity && p.cartonQuantity >= 200).slice(0, 4);
  const comboPacks = allProducts.filter(p => p.isCombo).slice(0, 4);
  const ownProductsList = allProducts.filter(p => p.isCombo || p.featured || (p.cartonQuantity && p.cartonQuantity >= 50)).slice(0, 4);
  const topReviews = wholesaleReviews.slice(0, 3);
  const topFaqs = wholesaleFaqs.slice(0, 5);

  return `
    <!-- Section 1 — HOME (Full Background Video) -->
        <!-- Section 1 — HERO SHOWCASE (Centered Orbital Design Matching Image 2) -->
    <section id="home" class="hero-section hero-centered-theme">
      <!-- High-res Warehouse Logistics Background -->
      <div class="hero-bg-media-wrap" aria-hidden="true">
        <video 
          id="hero-bg-video" 
          src="${import.meta.env.BASE_URL}videos/promo-video.mp4" 
          autoplay 
          muted 
          loop 
          playsinline 
          preload="auto"
          poster="${import.meta.env.BASE_URL}images/hero-warehouse-bg.jpg"
          class="hero-bg-video"
        ></video>
        <div class="hero-cinematic-scrim"></div>
      </div>

      <!-- Golden Orbital Elliptical Curves Overlay -->
      <svg class="hero-orbital-svg" viewBox="0 0 1440 680" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Outer Glowing Golden Ellipse -->
        <ellipse cx="720" cy="340" rx="620" ry="240" stroke="url(#heroOrbitGrad1)" stroke-width="1.6" stroke-dasharray="8 6" opacity="0.65"/>
        <!-- Inner Subtle Golden Ellipse -->
        <ellipse cx="720" cy="340" rx="560" ry="210" stroke="url(#heroOrbitGrad2)" stroke-width="1.2" opacity="0.45"/>
        <defs>
          <linearGradient id="heroOrbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#04ADFE" stop-opacity="0.85"/>
            <stop offset="25%" stop-color="#80D8FF" stop-opacity="1"/>
            <stop offset="75%" stop-color="#2454BA" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#04ADFE" stop-opacity="0.3"/>
          </linearGradient>
          <linearGradient id="heroOrbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#80D8FF" stop-opacity="0.25"/>
            <stop offset="50%" stop-color="#04ADFE" stop-opacity="0.75"/>
            <stop offset="100%" stop-color="#2454BA" stop-opacity="0.15"/>
          </linearGradient>
        </defs>
      </svg>

      <!-- Floating Orbital Icon Badges (Positioned symmetrically around center) -->
      <div class="hero-orbital-badges-wrap" aria-hidden="true">
        <!-- 1. Top-Left: Shopping Cart -->
        <div class="hero-orbit-badge badge-top-left">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>

        <!-- 2. Bottom-Left: Package Box -->
        <div class="hero-orbit-badge badge-bottom-left">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>

        <!-- 3. Top-Right: Growth / Bar Chart -->
        <div class="hero-orbit-badge badge-top-right">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
            <polyline points="3 8 9 2 15 6 21 1"></polyline>
          </svg>
        </div>

        <!-- 4. Bottom-Right: Delivery Truck -->
        <div class="hero-orbit-badge badge-bottom-right">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        </div>
      </div>

      <!-- Foreground Centered Content -->
      <div class="container hero-container-centered">
        <div class="hero-centered-content">
          <!-- Top Trust Pill Badge -->
          <div class="hero-partner-badge fade-up">
            <span class="partner-badge-icon">&#x1F451;</span>
            <span class="partner-badge-text">TRUSTED B2B WHOLESALE PARTNER</span>
            <span class="partner-badge-arrow">&rsaquo;</span>
          </div>

          <!-- Centered Hero Title -->
          <h1 class="hero-title-centered fade-up">
            <span class="hero-title-line-1">Small Products.</span>
            <span class="hero-title-line-2"><span class="gold-gradient-word">Bigger</span> Wholesale Opportunities.</span>
          </h1>


          <!-- Centered Translucent Glass Metrics Pill -->
          <div class="hero-metrics-glass-pill fade-up" id="hero-metrics-pill">
            <div class="metric-pill-item">
              <div class="metric-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div class="metric-text-group">
                <span class="metric-val" data-counter="50000" data-suffix="+" data-comma="true">50,000+</span>
                <span class="metric-lbl">DAILY UNITS CAPACITY</span>
              </div>
            </div>

            <div class="metric-pill-item">
              <div class="metric-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div class="metric-text-group">
                <span class="metric-val" data-counter="500" data-suffix="+">500+</span>
                <span class="metric-lbl">ACTIVE RETAIL PARTNERS</span>
              </div>
            </div>

            <div class="metric-pill-item">
              <div class="metric-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div class="metric-text-group">
                <span class="metric-val" data-counter="100" data-suffix="%">100%</span>
                <span class="metric-lbl">GST TAX INVOICED</span>
              </div>
            </div>

            <div class="metric-pill-item">
              <div class="metric-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div class="metric-text-group">
                <span class="metric-val" data-counter="24" data-suffix="h">24h</span>
                <span class="metric-lbl">ORDER DISPATCH WINDOW</span>
              </div>
            </div>
          </div>

          <!-- Centered Explore Products CTA -->
          <div class="hero-cta-centered-group fade-up">
            <a href="#/categories" class="btn-hero-explore-gold">
              <span>Explore Products</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2 — COMBOS (Positioned directly below Landing Page Hero) -->
    <section id="combos" class="section bg-soft-grey">
      <div class="container">
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <h2 class="section-title">Ready-Made Wholesale Combo Packs</h2>
          </div>
          <a href="#/bulk-enquiry?category=stationery&product=Custom+Combo+Kit" class="btn btn-outline">
            <span>Custom Combo Assembly</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        <div class="products-grid" style="margin-bottom: 3.5rem;">
          ${comboPacks.map(product => renderProductCard(product)).join('')}
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

    <!-- Section 3 — ABOUT (Exact Match to User Reference Image 1) -->
    <section id="about" class="about-ref-section-v2">
      <div class="about-v2-container">
        <!-- Main Two-Column Showcase -->
        <div class="about-v2-main-grid">
          <!-- Left Column: Tilted Frame + Floating Badges + Organic Blobs -->
          <div class="about-v2-visual-col fade-up">
            <div class="about-v2-blob-bg" aria-hidden="true"></div>
            <div class="about-v2-blob-accent" aria-hidden="true"></div>

            <div class="about-v2-frame-card">
              <!-- Top-Right Floating Badge: 500+ Retail Partners -->
              <div class="about-v2-badge-top">
                <div class="about-v2-badge-icon-blue">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <div>
                  <div class="about-v2-badge-val">500+</div>
                  <div class="about-v2-badge-sub">Retail Partners</div>
                </div>
              </div>

              <!-- Main Joli Cardboard Box & Warehouse Photo -->
              <img 
                src="${import.meta.env.BASE_URL}images/about-product-box.jpg" 
                alt="Joli Enterprises Wholesale Warehouse and Open Product Box" 
                class="about-v2-frame-img"
                loading="lazy"
              >

              <!-- Bottom-Left Floating Badge: Wide Range of Products -->
              <div class="about-v2-badge-bottom">
                <div class="about-v2-badge-icon-gold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                  </svg>
                </div>
                <div>
                  <div class="about-v2-badge-val" style="font-size: 0.95rem;">Wide Range</div>
                  <div class="about-v2-badge-sub">of Products</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Eyebrow, Title, Underline, Copy, 2-Col Channel Cards, Action Buttons -->
          <div class="about-v2-content-col fade-up">
            <div class="about-v2-eyebrow">
              <span class="about-v2-eyebrow-pill">— ABOUT JOLI ENTERPRISES</span>
            </div>

            <h2 class="about-v2-title">
              Wholesale Merchandise for<br>
              <span class="about-v2-title-highlight">Everyday Retail</span>
            </h2>

            <div class="about-v2-title-bar" aria-hidden="true"></div>

            <div class="about-v2-copy">
              <p class="about-v2-p">
                <strong class="about-v2-brand-highlight">Joli Enterprises</strong> delivers high-turnover everyday retail merchandise directly to 500+ independent shopkeepers, stationery stores, and gift boutiques across India.
              </p>
              <p class="about-v2-p">
                Every batch comes with guaranteed piece counts, accessible MOQs from 12 units, and honest wholesale margins of 35% to 65% on standard resale.
              </p>
            </div>

            <!-- 2-Column Channel Cards matching Image 1 -->
            <div class="about-v2-channels-grid">
              <!-- Item 1: Retail Shops -->
              <a href="#/categories" class="about-v2-channel-card">
                <div class="about-v2-channel-left">
                  <div class="about-v2-ch-icon-wrap" style="background: #E0F2FE; color: #0284C7;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </div>
                  <span class="about-v2-ch-name">Retail Shops</span>
                </div>
                <span class="about-v2-ch-arrow">&gt;</span>
              </a>

              <!-- Item 4: Mobile Accessory Kiosks -->
              <a href="#/categories" class="about-v2-channel-card">
                <div class="about-v2-channel-left">
                  <div class="about-v2-ch-icon-wrap" style="background: #FEF3C7; color: #D97706;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <span class="about-v2-ch-name">Mobile Accessory Kiosks</span>
                </div>
                <span class="about-v2-ch-arrow">&gt;</span>
              </a>

              <!-- Item 2: Stationery Stores -->
              <a href="#/categories" class="about-v2-channel-card">
                <div class="about-v2-channel-left">
                  <div class="about-v2-ch-icon-wrap" style="background: #ECFDF5; color: #10B981;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <span class="about-v2-ch-name">Stationery Stores</span>
                </div>
                <span class="about-v2-ch-arrow">&gt;</span>
              </a>

              <!-- Item 5: Online Resellers -->
              <a href="#/categories" class="about-v2-channel-card">
                <div class="about-v2-channel-left">
                  <div class="about-v2-ch-icon-wrap" style="background: #E0F2FE; color: #0284C7;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    </svg>
                  </div>
                  <span class="about-v2-ch-name">Online Resellers</span>
                </div>
                <span class="about-v2-ch-arrow">&gt;</span>
              </a>

              <!-- Item 3: Gift Boutiques -->
              <a href="#/categories" class="about-v2-channel-card">
                <div class="about-v2-channel-left">
                  <div class="about-v2-ch-icon-wrap" style="background: #F3E8FF; color: #9333EA;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <polyline points="20 12 20 22 4 22 4 12"></polyline>
                      <rect x="2" y="7" width="20" height="5"></rect>
                      <line x1="12" y1="22" x2="12" y2="7"></line>
                    </svg>
                  </div>
                  <span class="about-v2-ch-name">Gift Boutiques</span>
                </div>
                <span class="about-v2-ch-arrow">&gt;</span>
              </a>
            </div>

            <!-- Action Tab: Learn More (Exact Match to User Reference Image 2) -->
            <div class="about-v2-actions">
              <a href="#/about" class="btn-about-v2-learn-more">Learn More</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Section 3 — FOUNDER (Expanded Length & Taller Dimensions) -->
    <!-- Section 3 — FOUNDER (Pixel-Perfect Match with User Uploaded Image & Tall Section) -->
    <section id="founder" class="founder-exact-section">
      <div class="container">
        <div class="founder-exact-grid">
          <!-- Left Column: Content, Metrics & Actions -->
          <div class="founder-content-col fade-up">
            <div class="founder-eyebrow">
              <span class="founder-eyebrow-dash"></span>
              <span>FOUNDER'S VISION &amp; LEADERSHIP</span>
            </div>

            <h2 class="founder-headline">
              Built for the <br />
              <span class="highlight-blue">Grassroots</span> Retailer
            </h2>

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

          <!-- Right Column: Exact Circular Founder Portrait -->
          <div class="founder-portrait-col">
            <div class="founder-circle-wrap" id="home-founder-circle-portrait">
              <img 
                src="${baseUrl}images/founder-circle-clean.png" 
                alt="Joli Enterprises Founder and Leadership Operations"
                class="founder-circle-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 — CATEGORIES (Interactive Spring BounceCards) -->
    <section id="categories" class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Shop by Product Category</h2>
          <p class="section-subtitle">
            Source small, affordable everyday products in retail-ready packaging and bulk carton quantities across our 5 primary categories.
          </p>
        </div>

        <!-- Interactive Spring BounceCards Container -->
        <div class="category-bounce-cards-wrapper">
          <div id="category-bounce-cards-container"></div>
        </div>

        <!-- Quick Category Pill Selectors Below -->
        <div class="category-quick-pills">
          ${categories.map(cat => `
            <a href="#/category?slug=${encodeURIComponent(cat.slug || cat.id)}" class="category-quick-pill">
              <span class="pill-dot"></span>
              <span>${escapeHtml(cat.name)}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Section 6 — BULK DEALS (Master Carton Volume Specials matching Image 1) -->
    <section id="bulk-deals" class="section bulk-home-section">
      <div class="container">
        <!-- Master Carton Header Row -->
        <div class="bulk-hero-header" style="margin-bottom: 2rem;">
          <div class="bulk-hero-container" style="padding: 0;">
            <div class="bulk-hero-content">
              <div class="bulk-eyebrow">
                <span class="bulk-eyebrow-dash">—</span> MASTER CARTON
              </div>
              <h2 class="bulk-hero-title">Volume <span class="highlight-blue">Specials</span></h2>
            </div>

            <div class="bulk-hero-visual">
              <div class="bulk-hero-art-box">
                <img src="${baseUrl}images/carton-header-scene.jpg" alt="Master carton warehouse stock" class="bulk-hero-art-img" />
                
                <!-- Floating Glassmorphic Pill Badge: Buy in Bulk / Save More -->
                <a href="#/bulk-enquiry" class="bulk-hero-float-pill" aria-label="Buy in Bulk Save More">
                  <div class="float-pill-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div class="float-pill-text">
                    <span class="float-pill-line1">Buy in Bulk</span>
                    <span class="float-pill-line2">Save More</span>
                  </div>
                  <div class="float-pill-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Toolbar Row -->
        <div class="bulk-toolbar-row">
          <div class="bulk-category-tabs">
            <a href="#/bulk-deals" class="bulk-tab-btn active">
              <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
              </svg>
              <span>All Products</span>
            </a>
            <a href="#/bulk-deals" class="bulk-tab-btn">
              <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
              <span>Stationery</span>
            </a>
            <a href="#/bulk-deals" class="bulk-tab-btn">
              <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Household</span>
            </a>
            <a href="#/bulk-deals" class="bulk-tab-btn">
              <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>Mobile Accessories</span>
            </a>
            <a href="#/bulk-deals" class="bulk-tab-btn">
              <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Daily Essentials</span>
            </a>
          </div>

          <div class="bulk-toolbar-actions">
            <div class="bulk-search-field">
              <svg class="search-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" class="bulk-search-control" placeholder="Search products, categories..." />
            </div>

            <a href="#/bulk-enquiry" class="btn-quote-container">
              <span>Request Container Quote</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <!-- 4 Cards Grid with 3D FlipCard Effect -->
        <div class="products-grid flip-cards-grid bulk-cards-layout">
          ${volumeDeals.map(p => renderBulkFlipCard(p)).join('')}
        </div>

        <!-- Dual Bottom Banners matching Image 1 -->
        <div class="bulk-dual-bottom-row">
          <!-- Left: Wholesale Price Tiers with Pallet Art -->
          <div class="tiers-summary-card">
            <div class="tiers-card-text">
              <h3 class="tiers-card-heading">Quantity-Based <span class="highlight-cyan">Wholesale Price Tiers</span></h3>
              <p class="tiers-card-description">
                Save up to 35% on master carton lots with guaranteed piece counts, formal GST tax invoices, and insured 24h express dispatch.
              </p>
              <a href="#/bulk-enquiry" class="btn-price-list-request">
                <span>Request Volume Price List</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            <div class="tiers-card-visual">
              <img src="${baseUrl}images/carton-pallet-isolated.jpg" alt="Master carton pallet lots" class="tiers-pallet-graphic" />
            </div>
          </div>

          <!-- Right: Why Buy in Master Cartons? -->
          <div class="why-master-card">
            <h3 class="why-master-title">Why Buy in Master Cartons?</h3>
            <div class="why-master-grid">
              <div class="why-feature-cell">
                <div class="feature-icon-circle circle-blue">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <div class="feature-info">
                  <div class="feature-name">Lower Unit Price</div>
                  <div class="feature-sub">Save up to 35%</div>
                </div>
              </div>

              <div class="why-feature-cell">
                <div class="feature-icon-circle circle-purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div class="feature-info">
                  <div class="feature-name">Guaranteed Quantity</div>
                  <div class="feature-sub">Factory packed lots</div>
                </div>
              </div>

              <div class="why-feature-cell">
                <div class="feature-icon-circle circle-cyan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div class="feature-info">
                  <div class="feature-name">GST Invoices</div>
                  <div class="feature-sub">For business purchases</div>
                </div>
              </div>

              <div class="why-feature-cell">
                <div class="feature-icon-circle circle-brightblue">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div class="feature-info">
                  <div class="feature-name">Fast Dispatch</div>
                  <div class="feature-sub">Pan India delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7 — OWN PRODUCTS -->
    <section id="own-products" class="section bg-soft-grey" style="padding: 4rem 0 3.5rem;">
      <div class="container">
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2.25rem;">
          <div>
            <div style="font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #0284c7; margin-bottom: 0.35rem;">
              ★ IN-HOUSE MANUFACTURED &amp; PRIVATE LABEL
            </div>
            <h2 class="section-title" style="margin: 0;">Our In-House Manufactured &amp; Branded Line</h2>
            <p class="section-subtitle" style="margin-top: 0.35rem; max-width: 650px;">
              Direct from our Chennai factory floor. Highest retailer margins, zero middlemen, strict QA lab testing, and custom branding support.
            </p>
          </div>
          <a href="#/own-products" class="btn btn-outline" style="white-space: nowrap;">
            <span>Explore All Own Products</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        <!-- 4 Value Pillars -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2.5rem;">
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; box-shadow: 0 2px 8px rgba(15,23,42,0.02);">
            <div style="font-weight: 800; color: #0284c7; font-size: 0.95rem; margin-bottom: 0.2rem;">🏭 Factory Direct Pricing</div>
            <div style="font-size: 0.8rem; color: #64748b; line-height: 1.4;">Save 30–40% vs distributors to maximize your shop's counter profit.</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; box-shadow: 0 2px 8px rgba(15,23,42,0.02);">
            <div style="font-weight: 800; color: #0284c7; font-size: 0.95rem; margin-bottom: 0.2rem;">🏷️ Private Label &amp; OEM</div>
            <div style="font-size: 0.8rem; color: #64748b; line-height: 1.4;">Custom school &amp; store logo printing available for 500+ unit bulk lots.</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; box-shadow: 0 2px 8px rgba(15,23,42,0.02);">
            <div style="font-weight: 800; color: #0284c7; font-size: 0.95rem; margin-bottom: 0.2rem;">🛡️ Lab Tested Quality</div>
            <div style="font-size: 0.8rem; color: #64748b; line-height: 1.4;">Non-toxic child-safe inks, durable polymers, and tamper-sealed packs.</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; box-shadow: 0 2px 8px rgba(15,23,42,0.02);">
            <div style="font-weight: 800; color: #0284c7; font-size: 0.95rem; margin-bottom: 0.2rem;">📦 Master Carton Ready</div>
            <div style="font-size: 0.8rem; color: #64748b; line-height: 1.4;">Pre-strapped master cartons with barcode labels for instant dispatch.</div>
          </div>
        </div>

        <!-- 4 In-House Products Cards -->
        <div class="products-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
          ${ownProductsList.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </section>

    <!-- Section 8 — REVIEWS -->
    <section id="reviews" class="section" style="padding: 4rem 0 3.5rem; background: #ffffff;">
      <div class="container">
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2.25rem;">
          <div>
            <div style="font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #0284c7; margin-bottom: 0.35rem;">
              ★★★★★ VERIFIED B2B MERCHANT RATINGS
            </div>
            <h2 class="section-title" style="margin: 0;">Trusted by 2,840+ Retail Stores Across India</h2>
            <p class="section-subtitle" style="margin-top: 0.35rem; max-width: 650px;">
              Read authentic feedback from retail shop owners, school stationery suppliers, and general merchants.
            </p>
          </div>
          <a href="#/reviews" class="btn btn-outline" style="white-space: nowrap;">
            <span>Read All 1,480+ Reviews</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        <!-- Scorecard Banner -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; gap: 1.25rem;">
            <div style="font-size: 2.75rem; font-weight: 900; color: #0f172a; line-height: 1; font-family: var(--font-heading);">
              4.9<span style="font-size: 1.2rem; color: #64748b; font-weight: 600;">/5</span>
            </div>
            <div>
              <div style="color: #f59e0b; font-size: 1.15rem; letter-spacing: 1px;">★★★★★</div>
              <div style="font-size: 0.82rem; font-weight: 700; color: #0f172a;">1,480+ Verified Dispatches</div>
            </div>
          </div>
          <div style="display: flex; gap: 1.75rem; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.84rem; font-weight: 700; color: #166534;">
              <span style="font-size: 1.1rem;">✓</span> 99.4% On-Time Delivery
            </div>
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.84rem; font-weight: 700; color: #166534;">
              <span style="font-size: 1.1rem;">✓</span> Zero Damage Guarantee
            </div>
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.84rem; font-weight: 700; color: #166534;">
              <span style="font-size: 1.1rem;">✓</span> 100% GST ITC Invoicing
            </div>
          </div>
        </div>

        <!-- 3 Top Review Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          ${topReviews.map(r => `
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.5rem; box-shadow: 0 4px 14px rgba(15,23,42,0.03); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
                  <div style="color: #f59e0b; font-size: 0.95rem; letter-spacing: 1px;">
                    ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
                  </div>
                  <span style="font-size: 0.74rem; color: #94a3b8;">${r.date}</span>
                </div>
                <h4 style="font-size: 0.98rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem; line-height: 1.35;">
                  ${escapeHtml(r.title)}
                </h4>
                <p style="font-size: 0.84rem; color: #475569; line-height: 1.5; margin-bottom: 0.85rem;">
                  "${escapeHtml(r.comment)}"
                </p>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 5px 8px; font-size: 0.74rem; color: #64748b; margin-bottom: 1rem;">
                  <span style="font-weight: 700; color: #0284c7;">Ordered:</span> ${escapeHtml(r.orderItem)}
                </div>
              </div>
              <div style="border-top: 1px solid #f1f5f9; padding-top: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-weight: 800; font-size: 0.86rem; color: #0f172a;">${escapeHtml(r.name)}</div>
                  <div style="font-size: 0.75rem; color: #64748b;">${escapeHtml(r.shopName)} • ${escapeHtml(r.city)}</div>
                </div>
                <div style="background: #e0f2fe; color: #0369a1; border-radius: 6px; padding: 2px 6px; font-size: 0.68rem; font-weight: 700;">
                  ✓ GST Verified
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Section 9 — FAQ -->
    <section id="faq" class="section bg-soft-grey" style="padding: 4rem 0 3.5rem;">
      <div class="container" style="max-width: 920px;">
        <div class="section-header text-center" style="margin-bottom: 2.25rem;">
          <div style="font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #0284c7; margin-bottom: 0.35rem;">
            WHOLESALE TRADE DESK FAQ
          </div>
          <h2 class="section-title" style="margin: 0;">Frequently Asked Questions</h2>
          <p class="section-subtitle" style="margin-top: 0.35rem;">
            Quick answers regarding Minimum Order Quantities (MOQ), Pan-India dispatch timelines, GST invoices, and sample orders.
          </p>
        </div>

        <!-- 5 Accordion Items -->
        <div id="home-faq-accordion" style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem;">
          ${topFaqs.map(faq => `
            <div class="faq-item" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 6px rgba(15,23,42,0.02); transition: border-color 0.2s;">
              <button 
                type="button" 
                class="faq-header" 
                style="width: 100%; padding: 1.15rem 1.4rem; display: flex; justify-content: space-between; align-items: center; background: none; border: none; text-align: left; cursor: pointer; gap: 1rem;"
              >
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="background: #e0f2fe; color: #0284c7; font-size: 0.7rem; font-weight: 800; padding: 2px 7px; border-radius: 5px; text-transform: uppercase;">
                    ${escapeHtml(faq.categoryLabel)}
                  </span>
                  <span style="font-size: 1rem; font-weight: 700; color: #0f172a; line-height: 1.35;">
                    ${escapeHtml(faq.question)}
                  </span>
                </div>
                <span class="faq-chevron" style="color: #64748b; font-size: 1.1rem; transition: transform 0.25s ease; flex-shrink: 0;">
                  ▼
                </span>
              </button>
              <div class="faq-body" style="display: none; padding: 0 1.4rem 1.15rem; font-size: 0.9rem; color: #475569; line-height: 1.55; border-top: 1px solid #f8fafc;">
                ${escapeHtml(faq.answer)}
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center;">
          <a href="#/faq" class="btn btn-outline" style="padding: 10px 22px; font-weight: 700;">
            <span>Browse Full FAQ Knowledge Base (10+ Questions)</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Section 10 — CONTACT (Exact Match to Image 1) -->
    <section id="contact" class="home-contact-section" style="padding: 2.5rem 0 1rem;">
      ${renderContactView()}
    </section>
  `;
}

export function initHomeViewEvents() {
  initContactViewEvents();
  const video = document.getElementById('hero-bg-video');
  if (video) {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }

  // Animate metrics counter simultaneously from 0 to end (matching reference video)
  initHeroCounters();

  // Initialize interactive WebGL2 3D HoloCard effect on wholesale combo cards
  initHoloCards();

  // Initialize interactive 3D physics FlipCard effect on master carton bulk deals
  initFlipCards();

  // Initialize interactive FAQ Accordion on Home Page
  initHomeFaqEvents();
}

function initHomeFaqEvents() {
  const container = document.getElementById('home-faq-accordion');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const header = e.target.closest('.faq-header');
    if (!header) return;

    const item = header.closest('.faq-item');
    const body = item.querySelector('.faq-body');
    const chevron = item.querySelector('.faq-chevron');

    const isOpen = body.style.display === 'block';

    // Close all other items in this accordion
    container.querySelectorAll('.faq-body').forEach(b => b.style.display = 'none');
    container.querySelectorAll('.faq-chevron').forEach(c => c.style.transform = 'rotate(0deg)');
    container.querySelectorAll('.faq-item').forEach(i => i.style.borderColor = '#e2e8f0');

    if (!isOpen) {
      body.style.display = 'block';
      chevron.style.transform = 'rotate(180deg)';
      item.style.borderColor = '#0284c7';
    }
  });
}

/**
 * Animates the hero metrics pill numbers simultaneously from 0 up to their target values
 * using a smooth cubic deceleration curve and exact number formatting.
 */
export function initHeroCounters() {
  const container = document.getElementById('hero-metrics-pill') || document.querySelector('.hero-metrics-glass-pill');
  if (!container) return;

  const counterEls = container.querySelectorAll('.metric-val');
  if (!counterEls.length) return;

  const defaultConfigs = [
    { target: 50000, suffix: '+', useComma: true },
    { target: 500, suffix: '+', useComma: false },
    { target: 100, suffix: '%', useComma: false },
    { target: 24, suffix: 'h', useComma: false }
  ];

  const items = Array.from(counterEls).map((el, idx) => {
    const fallback = defaultConfigs[idx] || { target: 100, suffix: '+', useComma: false };
    const rawTarget = el.getAttribute('data-counter');
    const target = rawTarget ? parseInt(rawTarget, 10) : fallback.target;
    const suffix = el.getAttribute('data-suffix') || fallback.suffix;
    const useComma = el.getAttribute('data-comma') === 'true' || target >= 1000;
    return { el, target, suffix, useComma };
  });

  let animFrameId = null;

  function runCounterAnimation() {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
    }

    const duration = 2000; // 2 seconds simultaneous count-up
    const startTime = performance.now();

    // Reset all simultaneously to 0
    items.forEach(item => {
      item.el.textContent = '0' + item.suffix;
    });

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic: fast initial climb, graceful deceleration into final target
      const ease = 1 - Math.pow(1 - progress, 3);

      items.forEach(item => {
        const current = Math.round(item.target * ease);
        const formatted = item.useComma ? current.toLocaleString('en-US') : current.toString();
        item.el.textContent = formatted + item.suffix;
      });

      if (progress < 1) {
        animFrameId = requestAnimationFrame(update);
      } else {
        // Guarantee exact final targets
        items.forEach(item => {
          const formatted = item.useComma ? item.target.toLocaleString('en-US') : item.target.toString();
          item.el.textContent = formatted + item.suffix;
        });
        animFrameId = null;
      }
    }

    animFrameId = requestAnimationFrame(update);
  }

  // Hook into background video play
  const video = document.getElementById('hero-bg-video');
  if (video) {
    video.addEventListener('play', () => {
      runCounterAnimation();
    }, { once: true });
  }

  // Trigger when entering viewport (or immediately on load)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounterAnimation();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(container);
  } else {
    runCounterAnimation();
  }

  // Founder portrait entrance from outside right whenever scrolled into view
  const founderSec = document.getElementById('founder');
  const founderPortrait = document.getElementById('home-founder-circle-portrait');
  if (founderSec && founderPortrait) {
    if ('IntersectionObserver' in window) {
      const founderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            founderPortrait.classList.remove('is-animating');
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                founderPortrait.classList.add('is-animating');
              });
            });
          } else {
            // Reset when leaving view so it comes in from outside again next time
            founderPortrait.classList.remove('is-animating');
          }
        });
      }, { threshold: 0.15 });
      founderObserver.observe(founderSec);
    } else {
      founderPortrait.classList.add('is-animating');
    }
  }

  // Initialize Interactive Spring BounceCards for Categories
  const bounceCardsContainer = document.getElementById('category-bounce-cards-container');
  if (bounceCardsContainer) {
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

    const containerWidth = isMobile
      ? Math.min(window.innerWidth - 24, 400)
      : (isTablet ? Math.min(window.innerWidth - 32, 740) : 980);
    const containerHeight = isMobile ? 330 : (isTablet ? 380 : 430);
    const cardSize = isMobile ? 175 : (isTablet ? 225 : 265);
    const spread = isMobile ? 62 : (isTablet ? 90 : 115);
    const pushDist = isMobile ? 95 : (isTablet ? 145 : 190);

    const categories = getCategories();

    initBounceCards(bounceCardsContainer, {
      items: categories.map(cat => ({
        name: cat.name,
        src: cat.image,
        alt: cat.name,
        slug: cat.slug || cat.id
      })),
      containerWidth,
      containerHeight,
      cardSize,
      spread,
      rotation: 10,
      arc: 0,
      pushDistance: pushDist,
      hoverScale: 1.06,
      bounciness: 0.6,
      animationDelay: 0.4,
      animationStagger: 0.06,
      borderWidth: 6,
      borderColor: '#ffffff',
      radius: 28,
      shadow: true,
      enableHover: true,
      onCardClick: (index, item) => {
        window.location.hash = `#/category?slug=${encodeURIComponent(item.slug)}`;
      }
    });
  }

  // When scrolling past landing page hero into combos section, trigger center offer popup
  const combosSec = document.getElementById('combos');
  if (combosSec) {
    observeCombosSectionForPopup(combosSec);
  }
}
