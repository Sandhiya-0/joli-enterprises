// Page 1: Home View — Complete Wholesale Storefront
// Sequence strictly matches the Navbar:
// 1. HOME (#home) -> 2. ABOUT (#about) -> 3. FOUNDER (#founder) -> 4. CATEGORIES (#categories)
// -> 5. PRODUCTS (#products) -> 6. BULK DEALS (#bulk-deals) -> 7. COMBOS (#combos) -> 8. CONTACT (#contact)

import { getCategories, getProducts } from '../../data/products.js';
import { renderProductCard, escapeHtml } from '../components/productCard.js';
import { initContactViewEvents } from './contactView.js';

export function renderHomeView() {
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
          src="/videos/promo-video.mp4" 
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
          <div class="hero-metrics-glass-pill fade-up">
            <div class="metric-pill-item">
              <div class="metric-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div class="metric-text-group">
                <span class="metric-val">50,000+</span>
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
                <span class="metric-val">500+</span>
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
                <span class="metric-val">100%</span>
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
                <span class="metric-val">24h</span>
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

            <!-- Section 2 — ABOUT -->
    <section id="about" class="about-ref-section">
      <!-- Decorative Background Curves -->
      <svg class="about-bg-curves" viewBox="0 0 1440 760" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M 640 -30 C 730 140 700 290 820 380 C 900 440 1020 470 1200 480" stroke="url(#aboutGoldGrad1)" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M 1260 620 C 1320 660 1380 680 1460 690" stroke="url(#aboutGoldGrad2)" stroke-width="1.5" stroke-linecap="round"/>
        <defs>
          <linearGradient id="aboutGoldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#80D8FF" stop-opacity="0.2"/>
            <stop offset="50%" stop-color="#04ADFE" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#2454BA" stop-opacity="0.25"/>
          </linearGradient>
          <linearGradient id="aboutGoldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#04ADFE" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#2454BA" stop-opacity="0.15"/>
          </linearGradient>
        </defs>
      </svg>

      <div class="container about-ref-container">
        <!-- Two-Column Main Editorial Showcase -->
        <div class="about-ref-main-grid">
          <!-- Left Column (52%): Text & Actions -->
          <div class="about-ref-left-col fade-up">
            <div class="about-ref-eyebrow">
              <span class="about-eyebrow-line"></span>
              <span class="about-eyebrow-text">ABOUT JOLI ENTERPRISES</span>
            </div>

            <h2 class="about-ref-title">
              Wholesale Merchandise for<br>Everyday Retail
            </h2>

            <div class="about-ref-copy">
              <p class="about-ref-p">
                <strong>Joli Enterprises</strong> delivers high-turnover everyday retail merchandise directly to 500+ independent shopkeepers, stationery stores, and gift boutiques across India.
              </p>
              <p class="about-ref-p">
                Every batch comes with guaranteed piece counts, accessible MOQs from 12 units, and honest wholesale margins of 35% to 65% on standard resale.
              </p>
            </div>

            <div class="about-ref-cta-group">
              <a href="#/categories" class="btn-about-gold">
                <span>Browse Wholesale Products</span>
                <span class="btn-arrow">&rarr;</span>
              </a>
              <a href="#/categories" class="btn-about-white">
                <span>Explore 5 Categories</span>
              </a>
            </div>
          </div>

          <!-- Right Column (48%): Floating Category Badges + Joli Enterprises Box Showcase -->
          <div class="about-ref-right-col fade-up">
            <!-- Floating Category Labels Stack (Aligned vertically beside the box) -->
            <div class="about-category-pills-stack" aria-label="Retail Store Channels We Supply">
              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Retail Shops Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Retail Shops</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Stationery Stores Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span class="cat-pill-text">Stationery Stores</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Gift Boutiques Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Gift Boutiques</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Mobile Accessory Kiosks Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <span class="cat-pill-text">Mobile Accessory Kiosks</span>
              </div>

              <div class="about-cat-pill">
                <div class="cat-pill-icon-circle">
                  <!-- Online Resellers Icon -->
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <span class="cat-pill-text">Online Resellers</span>
              </div>
            </div>

            <!-- Joli Enterprises Open Cardboard Product Box Visual -->
            <div class="about-box-visual-wrap">
              <div class="about-box-image-card">
                <img 
                  src="/images/about-product-box.jpg" 
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

    <!-- Section 3 — FOUNDER -->
    <section id="founder" class="section bg-soft-grey">
      <div class="container">
        <div class="about-intro-grid" style="align-items: center; margin-bottom: 3.5rem;">
          <div class="fade-up">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem;">
              Founder's Vision &amp; Leadership
            </div>
            <h2 class="section-title">Built for the Grassroots Retailer</h2>
            <p style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 1.25rem;">
              <strong>Joli Enterprises</strong> was founded to empower independent shopkeepers with direct factory pricing, realistic pack sizes, and zero middleman markups.
            </p>
            <p style="font-size: 0.95rem; line-height: 1.65; color: var(--color-text-muted); margin-bottom: 1.75rem;">
              We eliminate the burden of container-scale orders, giving local merchants the flexibility to test trending goods safely with low MOQs and healthy 35%–65% margins.
            </p>

            <!-- Key Metric Highlights -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
              <div style="background: #FFFFFF; padding: 1rem; border-left: 3px solid var(--color-gold); border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">500+</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Retail Partners</div>
              </div>
              <div style="background: #FFFFFF; padding: 1rem; border-left: 3px solid var(--color-gold); border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">35%–65%</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Resale Margins</div>
              </div>
              <div style="background: #FFFFFF; padding: 1rem; border-left: 3px solid var(--color-gold); border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">24h</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Dispatch SLA</div>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="#/categories" class="btn btn-primary">
                <span>Explore Sourcing Lines</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#/contact" class="btn btn-outline">
                <span>Connect with Leadership</span>
              </a>
            </div>
          </div>

          <div class="about-img-frame fade-up">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80" 
              alt="Joli Enterprises Founder and Leadership Operations"
            >
          </div>
        </div>

        <div class="section-header text-center" style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--color-navy); margin-bottom: 0.5rem;">The Four Founding Commitments</h3>
          <p class="section-subtitle">
            Core operating tenets established by our leadership to govern every product, carton, and client interaction.
          </p>
        </div>

        <div class="about-values-grid">
          <div class="value-card fade-up">
            <h4 class="value-card-title">1. Fair Retailer Margins</h4>
            <p class="value-card-desc">
              Every item in our catalogue is priced to ensure that retail shopkeepers and resellers enjoy healthy, sustainable profit margins ranging from 35% to 65% upon resale.
            </p>
          </div>

          <div class="value-card fade-up">
            <h4 class="value-card-title">2. Exact Piece-Count Integrity</h4>
            <p class="value-card-desc">
              No shortages, no approximations. Whether it is our 100-item Mega Back-to-School kit or a 200-piece carton of adhesive hooks, every lot is piece-verified prior to dispatch.
            </p>
          </div>

          <div class="value-card fade-up">
            <h4 class="value-card-title">3. Realistic Minimum Order Quantities</h4>
            <p class="value-card-desc">
              We maintain accessible MOQs starting from just 12 to 24 units, allowing shop owners to test trending items without locking up their operating funds in excess inventory.
            </p>
          </div>

          <div class="value-card fade-up">
            <h4 class="value-card-title">4. Formal GST &amp; Pan-India Transport</h4>
            <p class="value-card-desc">
              Full transparency with formal GST invoices, appropriate HSN codes for input tax credit claims, and insured freight dispatches across all Indian pin codes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4 — CATEGORIES -->
    <section id="categories" class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Shop by Product Category</h2>
          <p class="section-subtitle">
            Source small, affordable everyday products in retail-ready packaging and bulk carton quantities across our 5 primary categories.
          </p>
        </div>

        <div class="categories-grid">
          ${categories.map(cat => `
            <a href="#/category?slug=${encodeURIComponent(cat.slug || cat.id)}" class="category-card fade-up">
              <img src="${escapeHtml(cat.image)}" alt="${escapeHtml(cat.name)}" class="category-card-bg" loading="lazy">
              <div class="category-card-content">
                <h3 class="category-card-title">${escapeHtml(cat.name)}</h3>
                <span class="category-card-cta">
                  <span>Browse Category</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </div>
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

    <!-- Section 7 — COMBOS -->
    <section id="combos" class="section bg-soft-grey">
      <div class="container">
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <h2 class="section-title">Ready-Made Wholesale Combo Packs</h2>
            <p class="section-subtitle">
              Pre-assembled retail bundles and school kits configured with verified item counts for instant resale.
            </p>
          </div>
          <a href="#/bulk-enquiry?category=stationery&product=Custom+Combo+Kit" class="btn btn-outline">
            <span>Custom Combo Assembly</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        <div class="products-grid" style="margin-bottom: 3.5rem;">
          ${comboPacks.map(product => renderProductCard(product)).join('')}
        </div>

        <!-- Custom Combo Banner -->
        <div style="background: var(--color-navy); color: var(--color-white); padding: 3rem 2.5rem; text-align: center; max-width: 960px; margin: 0 auto; border-radius: var(--radius-sm);" class="fade-up">
          <h3 style="font-size: 1.75rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.75rem;">
            Need a Custom Combo Assembled for Your School or Brand?
          </h3>
          <p style="font-size: 0.95rem; color: #CBD5E1; max-width: 680px; margin: 0 auto 1.75rem; line-height: 1.6;">
            We assemble, shrink-wrap, and pack customized stationery kits, birthday return gift bundles, and school exam supply packs with your choice of items and quantities.
          </p>
          <a href="#/bulk-enquiry?category=stationery&product=Custom+Combo+Kit" class="btn btn-primary btn-lg">
            <span>Request Custom Combo Assembly</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Section 8 — CONTACT -->
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
}
