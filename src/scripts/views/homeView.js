// Page 1: Home View — Complete Wholesale Storefront
// Sequence:
// 1. HOME (#home) -> 2. COMBOS (#combos) -> 3. ABOUT (#about) -> 4. FOUNDER (#founder) -> 5. CATEGORIES (#categories)
// -> 6. BULK DEALS (#bulk-deals) -> 7. CONTACT (#contact)

import { getCategories, getProducts } from '../../data/products.js';
import { renderProductCard, escapeHtml } from '../components/productCard.js';
import { initContactViewEvents } from './contactView.js';
import { initHoloCards } from '../components/holoCard.js';
import { initBounceCards } from '../components/bounceCards.js';

export function renderHomeView() {
  const baseUrl = import.meta.env.BASE_URL;
  const categories = getCategories();
  const allProducts = getProducts();
  const featuredProducts = allProducts.filter(p => p.featured || (!p.isCombo && p.cartonQuantity && p.cartonQuantity >= 100)).slice(0, 8);
  const volumeDeals = allProducts.filter(p => !p.isCombo && p.cartonQuantity && p.cartonQuantity >= 200).slice(0, 4);
  const comboPacks = allProducts.filter(p => p.isCombo).slice(0, 4);

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

    <!-- Section 6 — BULK DEALS -->
    <section id="bulk-deals" class="section">
      <div class="container">
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <h2 class="section-title">Master Carton Volume Specials</h2>
            <p class="section-subtitle">
              High turnover daily household, mobile accessories, and stationery items available in factory master carton lots.
            </p>
          </div>
          <a href="#/bulk-enquiry" class="btn btn-outline">
            <span>Request Container Quote</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        <div class="products-grid" style="margin-bottom: 3.5rem;">
          ${volumeDeals.map(p => renderProductCard(p)).join('')}
        </div>

        <!-- Tiered Wholesale Breakdown Banner -->
        <div class="cta-banner fade-up">
          <div class="cta-banner-content">
            <h3 class="cta-banner-title">Quantity-Based Wholesale Price Tiers</h3>
            <p class="cta-banner-desc">
              Tiered volume pricing. Save up to 35% on master carton lots with guaranteed piece counts, formal GST tax invoices, and insured 24h express dispatch.
            </p>
          </div>
          <div class="cta-banner-action">
            <a href="#/bulk-enquiry" class="btn btn-primary btn-lg">
              <span>Request Volume Price List</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7 — CONTACT -->
    <section id="contact" class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Left: Contact Information -->
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
                  <div class="contact-channel-title">Wholesale Warehouse &amp; Dispatch</div>
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
                  <div class="contact-channel-hint">Proforma invoices &amp; bulk order confirmations</div>
                </div>
              </div>
            </div>

            <div style="padding-top: 1.5rem; margin-top: 1.5rem; font-size: 0.85rem; color: #94A3B8;">
              <strong style="color: var(--color-gold);">Bulk Orders &amp; Custom Combos:</strong> For institutional school orders (500+ kits) or custom packaging, please visit our <a href="#/bulk-enquiry" style="color: #fff; text-decoration: underline;">Bulk Enquiry Form</a>.
            </div>
          </div>

          <!-- Right: Interactive Contact Form -->
          <div class="form-card fade-up">
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-navy);">Send a Wholesale Enquiry</h3>
            <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1.75rem;">
              Send your questions to our B2B commercial desk. We respond during business hours.
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
                  <option value="Product Stock & Pricing">Product Stock &amp; Wholesale Pricing</option>
                  <option value="Minimum Order Quantities">Minimum Order Quantity (MOQ) Clarification</option>
                  <option value="Transport & Logistics">Transport Logistics &amp; Delivery Timeline</option>
                  <option value="School Stationery Combos">School Stationery Combo Procurement</option>
                  <option value="Proforma & GST Invoice">Proforma &amp; GST Tax Invoicing</option>
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
}
