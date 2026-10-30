// Page: About Us View — Joli Enterprises Wholesale Merchandise
// Comprehensive Long-Form Brand, Commercial Pillars, Infrastructure & Retailer Partner Showcase

export function renderAboutView() {
  const baseUrl = import.meta.env.BASE_URL;

  return `
    <!-- 1. About Header & Breadcrumbs -->
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

    <!-- 2. Main About Showcase (Exact Match to User Reference Image 1) -->
    <section class="about-ref-section-v2">
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
                src="${baseUrl}images/about-product-box.jpg" 
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
              <a href="#/about" class="btn-about-v2-learn-more" id="aboutLearnMoreBtn" onclick="const el = document.getElementById('about-story'); if (el) { el.scrollIntoView({ behavior: 'smooth' }); return false; }">Learn More</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 4. Our Story: Resolving the Broken Wholesale Supply Chain -->
    <section id="about-story" class="section bg-soft-grey">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            The Origin Story
          </span>
          <h2 class="section-title">Solving the Broken Wholesale Supply Chain</h2>
          <p class="section-subtitle">
            Traditional B2B wholesale in India was never built to serve small shopkeepers. We changed that from the ground up.
          </p>
        </div>

        <div class="about-story-grid">
          <!-- Card 1: Traditional Wholesale Pain Points -->
          <div class="about-story-card traditional fade-up">
            <div class="about-story-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              <span>The Traditional Wholesale Problem</span>
            </div>
            <h3 class="about-story-card-title">High Capital Locks & Hidden Middlemen Commissions</h3>
            <ul class="about-story-points">
              <li class="about-story-point">
                <span class="about-story-point-icon" style="color: #EF4444;">✕</span>
                <span><strong>Heavy MOQ Barriers:</strong> Demands minimum purchases of 100+ units or ₹50,000+ per category, trapping small shopkeeper working capital.</span>
              </li>
              <li class="about-story-point">
                <span class="about-story-point-icon" style="color: #EF4444;">✕</span>
                <span><strong>Multi-Layer Broker Markups:</strong> Goods pass through 3–4 intermediaries, eating away up to 40% of the retailer's potential profit margin.</span>
              </li>
              <li class="about-story-point">
                <span class="about-story-point-icon" style="color: #EF4444;">✕</span>
                <span><strong>Frequent Piece Shortages:</strong> Cartons arrive unverified with missing pieces, broken blister packs, and zero shortage compensation.</span>
              </li>
              <li class="about-story-point">
                <span class="about-story-point-icon" style="color: #EF4444;">✕</span>
                <span><strong>Raw Unbarcoded Stock:</strong> Arrives as loose items requiring manual sorting, barcode labeling, and price tagging before display.</span>
              </li>
            </ul>
          </div>

          <!-- Card 2: The Joli Enterprises Standard -->
          <div class="about-story-card joli-way fade-up">
            <div class="about-story-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>The Joli Enterprises Solution</span>
            </div>
            <h3 class="about-story-card-title">Direct Factory Sourcing & Accessible Micro-MOQs</h3>
            <ul class="about-story-points">
              <li class="about-story-point">
                <span class="about-story-point-icon" style="color: #10B981;">✓</span>
                <span><strong>Accessible MOQs from 12 Units:</strong> Test new trending novelties and fast-moving stationery with minimal initial cash investment.</span>
              </li>
              <li class="about-story-point">
                <span class="about-story-point-icon" style="color: #10B981;">✓</span>
                <span><strong>Direct Factory Prices:</strong> Single-tier direct supply from certified manufacturing partners ensuring guaranteed 35% to 65% retail margins.</span>
              </li>
              <li class="about-story-point">
                <span class="about-story-point-icon" style="color: #10B981;">✓</span>
                <span><strong>100% Certified Piece Count:</strong> Every package is dual-audited by hand and weight before carton sealing with a zero-shortage guarantee.</span>
              </li>
              <li class="about-story-point">
                <span class="about-story-point-icon" style="color: #10B981;">✓</span>
                <span><strong>Pre-Barcoded & Shrink-Wrapped:</strong> Retail-ready multipacks with scannable EAN/UPC barcodes for instant shelf placement upon arrival.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Wholesale Strengths & 6 Commercial Pillars -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Why Retailers Choose Us
          </span>
          <h2 class="section-title">The 6 Pillars of the Joli Wholesale Advantage</h2>
          <p class="section-subtitle">
            Purpose-built purchasing benefits engineered to protect retailer cash flow, eliminate stock risk, and accelerate inventory turnover.
          </p>
        </div>

        <div class="about-values-grid">
          <!-- Pillar 1 -->
          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 46px; height: 46px; border-radius: 12px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="value-card-title">Tiered Volume Pricing</h3>
            <p class="value-card-desc">
              Automatic tier discounts on carton and master-carton lots. Start with small pack sizes and unlock deeper margins as sales velocity scales.
            </p>
          </div>

          <!-- Pillar 2 -->
          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 46px; height: 46px; border-radius: 12px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line></svg>
            </div>
            <h3 class="value-card-title">Ready-to-Resell Combos</h3>
            <p class="value-card-desc">
              Pre-assembled stationery combos and birthday return gift packs, shrink-wrapped and barcoded with clear MRP for zero retail handling time.
            </p>
          </div>

          <!-- Pillar 3 -->
          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 46px; height: 46px; border-radius: 12px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="value-card-title">100% Verified Piece Counts</h3>
            <p class="value-card-desc">
              Zero shortage guarantee. Every inner pack and master carton is audited before sealing. If any unit is missing, we credit or replace immediately.
            </p>
          </div>

          <!-- Pillar 4 -->
          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 46px; height: 46px; border-radius: 12px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <h3 class="value-card-title">GST ITC & Formal Invoicing</h3>
            <p class="value-card-desc">
              100% compliant B2B tax invoices with itemized HSN codes and GST breakup, allowing registered businesses to claim complete Input Tax Credit.
            </p>
          </div>

          <!-- Pillar 5 -->
          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 46px; height: 46px; border-radius: 12px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="value-card-title">Micro-MOQs from 12 Units</h3>
            <p class="value-card-desc">
              Low capital threshold allowing independent merchants to sample trending novelties without the risk of overstocking or tying up monthly liquidity.
            </p>
          </div>

          <!-- Pillar 6 -->
          <div class="value-card fade-up">
            <div class="value-card-icon-wrap" style="width: 46px; height: 46px; border-radius: 12px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 class="value-card-title">Pan-India Insured Cargo</h3>
            <p class="value-card-desc">
              Partnered with premier express logistics carriers (BlueDart, Delhivery, V-Trans) offering transit insurance and end-to-end consignment tracking.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Quality & Fulfillment Journey: 4-Step Process -->
    <section class="section bg-soft-grey">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Operational Excellence
          </span>
          <h2 class="section-title">From Factory Floor to Your Shelves: The 4-Step Journey</h2>
          <p class="section-subtitle">
            Every shipment follows a rigorous quality protocol before leaving our warehouse doors.
          </p>
        </div>

        <div class="about-workflow-steps">
          <!-- Step 1 -->
          <div class="about-workflow-card fade-up">
            <span class="about-step-num">01</span>
            <h3 class="about-step-title">Factory Sampling & Material Safety</h3>
            <p class="about-step-desc">
              Direct factory batch testing for non-toxic materials, ink flow stability, tip durability, and child-safe plastics before bulk production acceptance.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="about-workflow-card fade-up">
            <span class="about-step-num">02</span>
            <h3 class="about-step-title">Piece-by-Piece Verification</h3>
            <p class="about-step-desc">
              Every inner carton is weight-calibrated and physically piece-audited. Zero-shortage seal is affixed only after a verified head-count audit.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="about-workflow-card fade-up">
            <span class="about-step-num">03</span>
            <h3 class="about-step-title">Moisture-Proof Master Pack</h3>
            <p class="about-step-desc">
              Bundles are shrink-wrapped in protective polyethylene and boxed inside heavy 5-ply corrugated shipper cartons designed to resist transport shocks.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="about-workflow-card fade-up">
            <span class="about-step-num">04</span>
            <h3 class="about-step-title">Insured Express Dispatch</h3>
            <p class="about-step-desc">
              Dispatched within 24 hours of confirmation. Live transport bilty number and delivery status are delivered directly to your WhatsApp and email.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Channels We Supply: Expanded Merchant Breakdown -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Merchant Ecosystem
          </span>
          <h2 class="section-title">Who We Supply Across India</h2>
          <p class="section-subtitle">
            Curated product portfolios customized for distinct retail shop formats and resale velocity.
          </p>
        </div>

        <div class="about-channels-grid">
          <!-- Channel 1 -->
          <div class="about-channel-card fade-up">
            <div class="about-channel-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <h3 class="about-channel-title">Stationery & Book Stores</h3>
            <p class="about-channel-desc">
              Core academic essentials, fancy pastel gel pens, automatic mechanical pencils, geometry boxes, and student exam supplies with high repeat sales.
            </p>
            <div class="about-channel-tags">
              <span class="about-channel-tag">Gel Pens</span>
              <span class="about-channel-tag">Geometry Sets</span>
              <span class="about-channel-tag">Exam Kits</span>
            </div>
          </div>

          <!-- Channel 2 -->
          <div class="about-channel-card fade-up">
            <div class="about-channel-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line></svg>
            </div>
            <h3 class="about-channel-title">Gift & Novelty Boutiques</h3>
            <p class="about-channel-desc">
              Pre-packaged birthday return gift packs, cute animal water bottles, LED keychains, kawaii pencil cases, and themed kids' accessories.
            </p>
            <div class="about-channel-tags">
              <span class="about-channel-tag">Return Gifts</span>
              <span class="about-channel-tag">Kawaii Items</span>
              <span class="about-channel-tag">Novelty Toys</span>
            </div>
          </div>

          <!-- Channel 3 -->
          <div class="about-channel-card fade-up">
            <div class="about-channel-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <h3 class="about-channel-title">Mobile & Tech Kiosks</h3>
            <p class="about-channel-desc">
              Fast-turning impulse gadgets including braided multi-cables, earphone cases, cable winders, mobile stands, and mini LED desk lamps.
            </p>
            <div class="about-channel-tags">
              <span class="about-channel-tag">Fast Cables</span>
              <span class="about-channel-tag">Phone Stands</span>
              <span class="about-channel-tag">Organizers</span>
            </div>
          </div>

          <!-- Channel 4 -->
          <div class="about-channel-card fade-up">
            <div class="about-channel-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path></svg>
            </div>
            <h3 class="about-channel-title">Online & Quick-Commerce Resellers</h3>
            <p class="about-channel-desc">
              Shrink-wrapped multipacks optimized for Amazon, Meesho, and Flipkart FBA compliance with ready EAN barcodes and zero packaging hassle.
            </p>
            <div class="about-channel-tags">
              <span class="about-channel-tag">FBA Ready</span>
              <span class="about-channel-tag">Multipacks</span>
              <span class="about-channel-tag">E-com Barcoded</span>
            </div>
          </div>

          <!-- Channel 5 -->
          <div class="about-channel-card fade-up">
            <div class="about-channel-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </div>
            <h3 class="about-channel-title">Retail Departmental Stores</h3>
            <p class="about-channel-desc">
              High-visibility counter display items, hanging clip-strip novelties, and seasonal stationery bundles designed for quick impulse purchase.
            </p>
            <div class="about-channel-tags">
              <span class="about-channel-tag">Counter Displays</span>
              <span class="about-channel-tag">Clip Strips</span>
              <span class="about-channel-tag">Fast Turn</span>
            </div>
          </div>

          <!-- Channel 6 -->
          <div class="about-channel-card fade-up">
            <div class="about-channel-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            </div>
            <h3 class="about-channel-title">Schools & Educational Trusts</h3>
            <p class="about-channel-desc">
              Customized student admission kits, annual sports day gift combos, and board examination packages assembled to institutional piece specs.
            </p>
            <div class="about-channel-tags">
              <span class="about-channel-tag">Custom Kits</span>
              <span class="about-channel-tag">School Packs</span>
              <span class="about-channel-tag">Bulk Logo Print</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Warehousing & Logistics Infrastructure Showcase -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="about-warehouse-showcase fade-up">
          <div class="about-warehouse-content">
            <span class="about-warehouse-tag">Logistics & Infrastructure</span>
            <h2 class="about-warehouse-title">Built for Continuous Bulk Fulfillment</h2>
            <p class="about-warehouse-desc">
              Our central warehouse facility operates modern pallet racking, barcoded bin locations, and dedicated kit assembly lines to ensure accurate, zero-delay dispatch for retailers nationwide.
            </p>
            <div class="about-warehouse-stats-row">
              <div>
                <div class="about-wh-stat-num">10,000+</div>
                <div class="about-wh-stat-lbl">Sq. Ft. Storage Hub</div>
              </div>
              <div>
                <div class="about-wh-stat-num">50,000+</div>
                <div class="about-wh-stat-lbl">Units Monthly Turnover</div>
              </div>
              <div>
                <div class="about-wh-stat-num">28+</div>
                <div class="about-wh-stat-lbl">States Served</div>
              </div>
            </div>
          </div>
          <div class="about-warehouse-media">
            <img 
              src="${baseUrl}images/hero-warehouse-bg.jpg" 
              alt="Joli Enterprises Modern B2B Wholesale Distribution Center" 
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Partner Testimonials: Voices from the Retail Counter -->
    <section class="section bg-soft-grey">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Merchant Trust
          </span>
          <h2 class="section-title">What Indian Retailers Say About Joli Enterprises</h2>
          <p class="section-subtitle">
            Trusted by independent shopkeepers who depend on our guaranteed piece counts and reliable profit margins.
          </p>
        </div>

        <div class="about-testimonials-grid">
          <!-- Testimonial 1 -->
          <div class="about-testimonial-card fade-up">
            <div class="about-test-stars">★★★★★</div>
            <p class="about-test-quote">
              "Before Joli Enterprises, we had to travel to wholesale markets in Sowcarpet and carry heavy stock. With Joli, cartons arrive directly at my shop in Madurai with exact piece counts and transparent bills. Our profit margin is consistently 45%."
            </p>
            <div class="about-test-author">
              <div class="about-test-avatar">RS</div>
              <div class="about-test-meta">
                <span class="about-test-name">R. Sundararajan</span>
                <span class="about-test-shop">Sundar Book & Stationery, Madurai</span>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="about-testimonial-card fade-up">
            <div class="about-test-stars">★★★★★</div>
            <p class="about-test-quote">
              "The birthday return gift combos are our best seller. They come pre-packed and shrink-wrapped with clean MRP stickers. Parents love the quality, and we don't have to spend hours assembling kits manually."
            </p>
            <div class="about-test-author">
              <div class="about-test-avatar">PK</div>
              <div class="about-test-meta">
                <span class="about-test-name">Pooja Khandelwal</span>
                <span class="about-test-shop">Kiran Gifts & Toys, Bangalore</span>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="about-testimonial-card fade-up">
            <div class="about-test-stars">★★★★★</div>
            <p class="about-test-quote">
              "Low MOQs of 12 units allowed us to test 10 new product lines without locking up big capital. Whatever sold fast, we ordered full master cartons. Delivery is always within 48 hours with full GST ITC invoice."
            </p>
            <div class="about-test-author">
              <div class="about-test-avatar">MA</div>
              <div class="about-test-meta">
                <span class="about-test-name">Mohammed Ashfaq</span>
                <span class="about-test-shop">City Novelty Hub, Chennai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. Frequently Asked Questions (FAQ) -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Clarifications & Policies
          </span>
          <h2 class="section-title">Frequently Asked Wholesale Questions</h2>
          <p class="section-subtitle">
            Everything you need to know about purchasing, piece audits, delivery schedules, and invoicing.
          </p>
        </div>

        <div class="about-faq-grid">
          <div class="about-faq-item fade-up">
            <div class="about-faq-q">
              <span class="about-faq-q-badge">Q.</span>
              <span>What is the minimum order quantity (MOQ)?</span>
            </div>
            <p class="about-faq-a">
              Our standard MOQ starts from just 12 units per product variant, allowing merchants to test multiple SKUs with modest initial working capital. Carton master deals start from 72 to 144 units with automated tiered rate reductions.
            </p>
          </div>

          <div class="about-faq-item fade-up">
            <div class="about-faq-q">
              <span class="about-faq-q-badge">Q.</span>
              <span>How does GST Input Tax Credit (ITC) work?</span>
            </div>
            <p class="about-faq-a">
              Every shipment is accompanied by a formal B2B GST tax invoice containing your business GSTIN and exact itemized HSN codes. You can claim 100% of the GST paid as input tax credit on your monthly GSTR-3B filings.
            </p>
          </div>

          <div class="about-faq-item fade-up">
            <div class="about-faq-q">
              <span class="about-faq-q-badge">Q.</span>
              <span>How long does delivery take across India?</span>
            </div>
            <p class="about-faq-a">
              Orders are packed and dispatched within 24 hours of confirmation. South India deliveries typically arrive within 24 to 48 hours, while North, West, and East India consignments take 3 to 5 business days via insured express cargo.
            </p>
          </div>

          <div class="about-faq-item fade-up">
            <div class="about-faq-q">
              <span class="about-faq-q-badge">Q.</span>
              <span>Can I customize kits for schools or institutional orders?</span>
            </div>
            <p class="about-faq-a">
              Yes! Through our Custom Combo Assembly service, we assemble, shrink-wrap, and pack personalized student exam kits, school welcome packs, or birthday gift bundles tailored to your specific item list and branded labels.
            </p>
          </div>

          <div class="about-faq-item fade-up">
            <div class="about-faq-q">
              <span class="about-faq-q-badge">Q.</span>
              <span>What happens if goods are damaged in transit?</span>
            </div>
            <p class="about-faq-a">
              All our consignments are 100% insured. In the rare event of transit damage, simply share an unboxing photo/video within 48 hours of receipt. We issue an instant credit note or ship replacement units immediately.
            </p>
          </div>

          <div class="about-faq-item fade-up">
            <div class="about-faq-q">
              <span class="about-faq-q-badge">Q.</span>
              <span>What payment methods are supported?</span>
            </div>
            <p class="about-faq-a">
              We accept direct NEFT/RTGS bank transfers, UPI payments, and all major credit/debit cards. Regular retail partners with verified purchase history can also apply for credit billing terms through our trade finance desk.
            </p>
          </div>
        </div>

        <!-- Founder Spotlight Preview Strip -->
        <div class="about-founder-strip fade-up">
          <div class="about-founder-strip-info">
            <span class="about-founder-strip-tag">Leadership & Vision</span>
            <h3 class="about-founder-strip-title">Meet the Visionary Behind Joli Enterprises</h3>
            <p class="about-founder-strip-desc">
              Discover the founding story, commercial values, and customer-first commitment that transformed Joli Enterprises into a trusted wholesale partner for 500+ Indian retail merchants.
            </p>
          </div>
          <a href="#/founder" class="btn btn-outline" style="border-color: #B88E4B; color: #0E1A29; font-weight: 700; white-space: nowrap;">
            <span>Read Founder Story &rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 11. Wholesale Call to Action Banner -->
    <section class="section-sm bg-soft-grey">
      <div class="container">
        <div class="cta-banner fade-up">
          <div class="cta-banner-content">
            <h2 class="cta-banner-title">Stock Your Retail Shelves with Confidence</h2>
            <p class="cta-banner-desc">
              Explore our 5 primary wholesale categories, order pre-packaged combo bundles, or connect with our trade desk for customized carton volume quotations.
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
