// Page: Reviews View — Verified Wholesale Retailer Experiences & Testimonials
import { escapeHtml } from '../components/productCard.js';

export const wholesaleReviews = [
  {
    id: 1,
    name: "R. Sundararaman",
    shopName: "Murthy Book Depot & Stationery",
    city: "Chennai, Tamil Nadu",
    gstVerified: true,
    category: "stationery",
    rating: 5,
    orderItem: "12 Master Cartons • Mega Back-to-School Combo & Pastel Highlighters",
    date: "18 Oct 2026",
    title: "Highest profit margin merchandise in our store this school season",
    comment: "We have been buying school combo kits from Nivox for 8 months. The packaging quality of their transparent exam pouches is superior to local wholesale market goods. Every carton arrived with tamper-proof strapping and complete GST e-way bills. Customers love the pastel stationery items.",
    helpfulCount: 42
  },
  {
    id: 2,
    name: "Anand K. Mehta",
    shopName: "Krishna Novelties & Gift House",
    city: "Bengaluru, Karnataka",
    gstVerified: true,
    category: "gift",
    rating: 5,
    orderItem: "8 Master Cartons • Unicorn Pastel Gift Sets & Washi Tapes",
    date: "12 Oct 2026",
    title: "Fast dispatch and zero transit damage across 800+ pieces",
    comment: "Return gift items are high impulse sales in our Mall shop. Nivox's wholesale carton pricing allowed us to price them competitively while keeping a 45% retailer margin. Surface logistics reached Bangalore within 28 hours. Will definitely reorder for Diwali.",
    helpfulCount: 35
  },
  {
    id: 3,
    name: "Sister Mary Teresa",
    shopName: "St. Joseph Matriculation School Supplies",
    city: "Coimbatore, Tamil Nadu",
    gstVerified: true,
    category: "school",
    rating: 5,
    orderItem: "1,200 Sets • Custom Exam Activity & Writing Combos",
    date: "04 Oct 2026",
    title: "Flawless institutional supply for 1,200 students",
    comment: "We placed an institutional order for our annual exams. Nivox pre-assembled every student kit with our school seal printed on the exam kit bag. Delivered 2 days before our scheduled distribution date without a single missing item.",
    helpfulCount: 29
  },
  {
    id: 4,
    name: "Vikas Agrawal",
    shopName: "Vardhman Stationery & General Mart",
    city: "Mumbai, Maharashtra",
    gstVerified: true,
    category: "general",
    rating: 5,
    orderItem: "15 Master Cartons • Adhesive Wall Hooks & Cleaning Sponges",
    date: "28 Sep 2026",
    title: "Household products sell out within 10 days of restocking",
    comment: "The heavy-duty transparent hooks and microfiber kitchen sponges are daily essentials in Mumbai apartments. Quality is much heavier than cheaper imports. Clear carton barcode labeling makes inventory checking very quick for our stock staff.",
    helpfulCount: 21
  },
  {
    id: 5,
    name: "G. Venkatesh",
    shopName: "Sri Balaji Fancy Store",
    city: "Hyderabad, Telangana",
    gstVerified: true,
    category: "gift",
    rating: 4,
    orderItem: "6 Master Cartons • 3D Character Keychains & Hair Clips",
    date: "22 Sep 2026",
    title: "Great variety and solid counter display appeal",
    comment: "The silicone keychains and pastel hair accessories look very premium on our hanging racks. Retailers get fast turnover with great margins. Delivery took 3 days via surface express. Very professional wholesale desk support.",
    helpfulCount: 18
  },
  {
    id: 6,
    name: "Dinesh Goyal",
    shopName: "Goyal Mobile & Accessories",
    city: "New Delhi, Delhi",
    gstVerified: true,
    category: "mobile",
    rating: 5,
    orderItem: "10 Master Cartons • Braided Fast Charging Cables & Phone Stands",
    date: "15 Sep 2026",
    title: "Durable cables with genuine wholesale warranty support",
    comment: "Customers frequently complain about cheap charging cables stopping after 2 weeks. Nivox cables have heavy nylon braiding and we have had practically zero defect returns across 500 units sold. Excellent wholesale partner.",
    helpfulCount: 27
  }
];

export const featuredReviewCards = [
  {
    id: 1,
    name: "R. Aravind Kumar",
    role: "Retail Store Owner, Chennai",
    quote: "Nivox has been a game-changer for our business. The quality and pricing are outstanding!",
    image: "images/review-photo-1.jpg",
    avatar: "images/review-avatar-1.jpg",
    rating: 5,
    isFeatured: false
  },
  {
    id: 2,
    name: "Priya S",
    role: "Shop Owner, Madurai",
    quote: "Fast delivery, excellent support, and great product range. Highly recommended!",
    image: "images/review-photo-2.jpg",
    avatar: "images/review-avatar-2.jpg",
    rating: 5,
    isFeatured: true
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Distributor, Coimbatore",
    quote: "Bulk orders are now so easy with Nivox. Amazing experience!",
    image: "images/review-photo-3.jpg",
    avatar: "images/review-avatar-3.jpg",
    rating: 5,
    isFeatured: false
  },
  {
    id: 4,
    name: "R. Sundararaman",
    role: "Murthy Book Depot, Chennai",
    quote: "Highest profit margin merchandise in our store this school season. Packaging is top-tier.",
    image: "images/review-photo-1.jpg",
    avatar: "images/review-avatar-1.jpg",
    rating: 5,
    isFeatured: false
  },
  {
    id: 5,
    name: "Anand K. Mehta",
    role: "Krishna Novelties, Bengaluru",
    quote: "Fast dispatch and zero transit damage across 800+ pieces. Will definitely reorder.",
    image: "images/review-photo-2.jpg",
    avatar: "images/review-avatar-2.jpg",
    rating: 5,
    isFeatured: false
  },
  {
    id: 6,
    name: "Sister Mary Teresa",
    role: "St. Joseph Supplies, Coimbatore",
    quote: "Flawless institutional supply for 1,200 students without a single missing item.",
    image: "images/review-photo-3.jpg",
    avatar: "images/review-avatar-3.jpg",
    rating: 5,
    isFeatured: false
  }
];

/**
 * Renders the exact Reviews showcase layout matching Image 2
 */
export function renderReviewsShowcaseSection(options = {}) {
  const {
    idPrefix = 'showcase-rev',
    showButton = true,
    buttonHref = '#/reviews',
    buttonText = 'View All Reviews'
  } = options;
  const baseUrl = import.meta.env.BASE_URL;
  const displayCards = featuredReviewCards.slice(0, 3);

  return `
    <div class="review-exact-ambient-glow" aria-hidden="true"></div>

    <div class="container review-exact-container">
      <!-- Top 3-Column Split Hero (Matching Image 2 Top Half) -->
      <div class="review-exact-top-hero">
        
        <!-- Left: Phone Mockup with Play Video & 4.9/5 Rating Badge -->
        <div class="review-exact-phone-col">
          <div class="review-exact-phone-wrapper">
            <img 
              src="${baseUrl}images/review-hero-phone.png" 
              alt="Customer video review - Nivox wholesale verified retailer" 
              class="review-exact-phone-img" 
              loading="lazy"
            />
          </div>
        </div>

        <!-- Center: Eyebrow + Real Voices. Real Stories. + Subtitle + 3 Value Badges -->
        <div class="review-exact-center-col">
          <!-- Eyebrow Pill -->
          <div class="review-exact-eyebrow-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#0284c7" stroke="none" aria-hidden="true">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
            <span>Trusted by 2,840+ Retail Stores</span>
          </div>

          <!-- Heading with Gradient & Swoosh Underline -->
          <h2 class="review-exact-title">
            <span>Real Voices.</span>
            <span class="review-title-gradient">
              Real Stories.
              <svg class="review-title-swoosh" viewBox="0 0 170 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 12C38 3 132 2 167 12" stroke="url(#purpleSwooshGrad-${idPrefix})" stroke-width="4.5" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="purpleSwooshGrad-${idPrefix}" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#7c3aed"/>
                    <stop offset="100%" stop-color="#4f46e5"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <!-- Subtitle -->
          <p class="review-exact-subtitle">
            Hear from our happy customers who trust Nivox for their wholesale needs.
          </p>

          <!-- 3 Feature Badges -->
          <div class="review-exact-badges-row">
            <div class="review-badge-item">
              <span class="badge-icon">🤝</span>
              <div>
                <div class="badge-title">Trusted</div>
                <div class="badge-sub">Partner</div>
              </div>
            </div>
            <div class="review-badge-item">
              <span class="badge-icon">💎</span>
              <div>
                <div class="badge-title">Premium</div>
                <div class="badge-sub">Quality</div>
              </div>
            </div>
            <div class="review-badge-item">
              <span class="badge-icon">🎧</span>
              <div>
                <div class="badge-title">Dedicated</div>
                <div class="badge-sub">Support</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Floating Testimonial Cards & Sparkle Accents -->
        <div class="review-exact-floating-col">
          <img 
            src="${baseUrl}images/review-floating-cards.png" 
            alt="Retailer feedback ratings" 
            class="review-exact-floating-img" 
            loading="lazy"
          />
        </div>

      </div>

      <!-- Bottom Carousel / Cards Track (Matching Image 2 Bottom Half) -->
      <div class="review-exact-carousel-wrap">
        <!-- Left Arrow -->
        <button type="button" class="review-carousel-arrow prev" id="${idPrefix}-prev-btn" aria-label="Previous review">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <!-- 3 Cards Track -->
        <div class="review-exact-cards-track" id="${idPrefix}-cards-track">
          ${displayCards.map(c => `
            <div class="review-card-item ${c.isFeatured ? 'is-featured' : ''}" data-card-id="${c.id}">
              <div class="review-card-img-wrap">
                <img src="${baseUrl}${c.image}" alt="${escapeHtml(c.name)} shop" class="review-card-img" loading="lazy" />
                <div class="review-quote-badge" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
                  </svg>
                </div>
              </div>
              <div class="review-card-body">
                <p class="review-card-quote">"${escapeHtml(c.quote)}"</p>
                <div class="review-card-footer">
                  <img src="${baseUrl}${c.avatar}" alt="${escapeHtml(c.name)}" class="review-avatar-img" />
                  <div class="review-author-info">
                    <h4 class="review-author-name">${escapeHtml(c.name)}</h4>
                    <div class="review-author-role">${escapeHtml(c.role)}</div>
                    <div class="review-stars-gold" aria-label="5 stars">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Right Arrow -->
        <button type="button" class="review-carousel-arrow next" id="${idPrefix}-next-btn" aria-label="Next review">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <!-- Carousel Dots -->
      <div class="review-carousel-dots" id="${idPrefix}-dots">
        <span class="dot" data-index="0"></span>
        <span class="dot active" data-index="1"></span>
        <span class="dot" data-index="2"></span>
      </div>

      <!-- Bottom Action Pill with Side Purple Rays Doodles -->
      ${showButton ? `
        <div class="review-exact-btn-wrap">
          <svg class="review-btn-ray-left" width="28" height="24" viewBox="0 0 28 24" fill="none" stroke="#6366f1" stroke-width="2.6" stroke-linecap="round" aria-hidden="true">
            <line x1="2" y1="12" x2="16" y2="12"></line>
            <line x1="6" y1="4" x2="18" y2="8"></line>
            <line x1="6" y1="20" x2="18" y2="16"></line>
          </svg>

          <a href="${buttonHref}" class="btn-review-showcase">
            <span class="btn-play-icon" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </span>
            <span>${buttonText}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <svg class="review-btn-ray-right" width="28" height="24" viewBox="0 0 28 24" fill="none" stroke="#6366f1" stroke-width="2.6" stroke-linecap="round" aria-hidden="true">
            <line x1="26" y1="12" x2="12" y2="12"></line>
            <line x1="22" y1="4" x2="10" y2="8"></line>
            <line x1="22" y1="20" x2="10" y2="16"></line>
          </svg>
        </div>
      ` : ''}

      <!-- Bottom-left Film Slate Doodle -->
      <div class="review-slate-decor" aria-hidden="true">
        <img src="${baseUrl}images/review-film-slate.png" alt="" />
      </div>

    </div>
  `;
}

export function initReviewsShowcaseEvents(idPrefix = 'showcase-rev') {
  const prevBtn = document.getElementById(`${idPrefix}-prev-btn`);
  const nextBtn = document.getElementById(`${idPrefix}-next-btn`);
  const track = document.getElementById(`${idPrefix}-cards-track`);
  const dotsContainer = document.getElementById(`${idPrefix}-dots`);
  if (!track) return;

  const baseUrl = import.meta.env.BASE_URL;
  let startIndex = 0;
  const total = featuredReviewCards.length;

  function updateCards() {
    const cardElements = track.querySelectorAll('.review-card-item');
    cardElements.forEach((el, i) => {
      const card = featuredReviewCards[(startIndex + i) % total];
      const isCenter = (i === 1);

      el.classList.toggle('is-featured', isCenter);
      const img = el.querySelector('.review-card-img');
      if (img) img.src = `${baseUrl}${card.image}`;
      const quote = el.querySelector('.review-card-quote');
      if (quote) quote.textContent = `"${card.quote}"`;
      const avatar = el.querySelector('.review-avatar-img');
      if (avatar) avatar.src = `${baseUrl}${card.avatar}`;
      const name = el.querySelector('.review-author-name');
      if (name) name.textContent = card.name;
      const role = el.querySelector('.review-author-role');
      if (role) role.textContent = card.role;
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.dot');
      const activeDotIndex = Math.floor((startIndex + 1) % 3);
      dots.forEach((d, idx) => {
        d.classList.toggle('active', idx === activeDotIndex);
      });
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      startIndex = (startIndex + 1) % total;
      updateCards();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      startIndex = (startIndex - 1 + total) % total;
      updateCards();
    });
  }

  if (dotsContainer) {
    dotsContainer.addEventListener('click', (e) => {
      const dot = e.target.closest('.dot');
      if (!dot) return;
      const idx = parseInt(dot.getAttribute('data-index') || '1', 10);
      startIndex = (idx - 1 + total) % total;
      updateCards();
    });
  }
}

export function renderReviewsView() {
  return `
    <div class="reviews-page">
      <!-- Breadcrumbs Bar -->
      <div style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 1rem 0;">
        <div class="container" style="max-width: 1220px; padding: 0 1.5rem;">
          <nav class="breadcrumbs" aria-label="Breadcrumb" style="margin: 0;">
            <a href="#/" style="color: #64748b; text-decoration: none;">Home</a>
            <span class="separator" style="color: #cbd5e1; margin: 0 6px;">/</span>
            <span class="current" style="color: #7c3aed; font-weight: 800;">Retailer Reviews</span>
          </nav>
        </div>
      </div>

      <!-- Prime Hero Showcase Matching Image 2 Exactly -->
      <section class="review-exact-showcase-section">
        ${renderReviewsShowcaseSection({
          idPrefix: 'reviews-page-hero',
          showButton: true,
          buttonHref: '#reviews-all-feed',
          buttonText: 'Explore All 1,480+ Reviews & Ratings ↓'
        })}
      </section>

      <!-- Scorecard & Metrics Summary -->
      <section id="reviews-all-feed" class="section" style="padding: 2.5rem 0; background: #ffffff; border-bottom: 1px solid #e2e8f0;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: center;">
            
            <!-- Overall Score Box -->
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 2rem; text-align: center;">
              <div style="font-size: 3.5rem; font-weight: 900; color: #0f172a; line-height: 1; font-family: var(--font-heading);">
                4.9<span style="font-size: 1.5rem; color: #64748b; font-weight: 600;">/5</span>
              </div>
              <div style="color: #f59e0b; font-size: 1.35rem; margin: 0.5rem 0 0.35rem; letter-spacing: 2px;">
                ★★★★★
              </div>
              <div style="font-size: 0.88rem; font-weight: 700; color: #0f172a;">Based on 1,480+ Verified Dispatches</div>
              <div style="font-size: 0.76rem; color: #64748b; margin-top: 2px;">GST Merchant Purchase Records</div>
            </div>

            <!-- Breakdown Bars -->
            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
              <div style="display: flex; align-items: center; gap: 10px; font-size: 0.82rem; font-weight: 600; color: #334155;">
                <span style="width: 50px;">5 Stars</span>
                <div style="flex: 1; height: 10px; background: #f1f5f9; border-radius: 5px; overflow: hidden;">
                  <div style="width: 94%; height: 100%; background: #0284c7; border-radius: 5px;"></div>
                </div>
                <span style="width: 38px; text-align: right; color: #64748b;">94%</span>
              </div>

              <div style="display: flex; align-items: center; gap: 10px; font-size: 0.82rem; font-weight: 600; color: #334155;">
                <span style="width: 50px;">4 Stars</span>
                <div style="flex: 1; height: 10px; background: #f1f5f9; border-radius: 5px; overflow: hidden;">
                  <div style="width: 5%; height: 100%; background: #38bdf8; border-radius: 5px;"></div>
                </div>
                <span style="width: 38px; text-align: right; color: #64748b;">5%</span>
              </div>

              <div style="display: flex; align-items: center; gap: 10px; font-size: 0.82rem; font-weight: 600; color: #334155;">
                <span style="width: 50px;">3 Stars</span>
                <div style="flex: 1; height: 10px; background: #f1f5f9; border-radius: 5px; overflow: hidden;">
                  <div style="width: 1%; height: 100%; background: #94a3b8; border-radius: 5px;"></div>
                </div>
                <span style="width: 38px; text-align: right; color: #64748b;">1%</span>
              </div>

              <div style="display: flex; align-items: center; gap: 10px; font-size: 0.82rem; font-weight: 600; color: #334155;">
                <span style="width: 50px;">2 Stars</span>
                <div style="flex: 1; height: 10px; background: #f1f5f9; border-radius: 5px; overflow: hidden;">
                  <div style="width: 0%; height: 100%; background: #cbd5e1; border-radius: 5px;"></div>
                </div>
                <span style="width: 38px; text-align: right; color: #94a3b8;">0%</span>
              </div>

              <div style="display: flex; align-items: center; gap: 10px; font-size: 0.82rem; font-weight: 600; color: #334155;">
                <span style="width: 50px;">1 Star</span>
                <div style="flex: 1; height: 10px; background: #f1f5f9; border-radius: 5px; overflow: hidden;">
                  <div style="width: 0%; height: 100%; background: #cbd5e1; border-radius: 5px;"></div>
                </div>
                <span style="width: 38px; text-align: right; color: #94a3b8;">0%</span>
              </div>
            </div>

            <!-- B2B Service Guarantees -->
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.85rem;">
              <div style="display: flex; align-items: center; gap: 10px; font-size: 0.88rem; font-weight: 700; color: #166534;">
                <span style="font-size: 1.2rem;">✔</span> 99.4% On-Time Pan-India Consignment Delivery
              </div>
              <div style="display: flex; align-items: center; gap: 10px; font-size: 0.88rem; font-weight: 700; color: #166534;">
                <span style="font-size: 1.2rem;">✔</span> Zero Transit Damage Replacement Guarantee
              </div>
              <div style="display: flex; align-items: center; gap: 10px; font-size: 0.88rem; font-weight: 700; color: #166534;">
                <span style="font-size: 1.2rem;">✔</span> 100% Tax Compliant GST Invoicing with ITC Credit
              </div>
              <div style="margin-top: 0.5rem;">
                <button type="button" class="btn btn-primary btn-sm" id="btn-open-review-form" style="background: #16a34a; border: none; font-weight: 700; border-radius: 8px; padding: 8px 16px;">
                  Write a Retailer Review
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Review Submission Modal Form (Hidden by default, opens on click) -->
      <div id="review-modal" style="display: none; position: fixed; inset: 0; background: rgba(15,23,42,0.6); z-index: 1000; align-items: center; justify-content: center; padding: 1rem;">
        <div style="background: #ffffff; border-radius: 18px; max-width: 520px; width: 100%; padding: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.25); position: relative;">
          <button type="button" id="btn-close-review-modal" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #64748b;">&times;</button>
          
          <h3 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: #0f172a; margin-bottom: 0.25rem;">
            Submit Your Wholesale Experience
          </h3>
          <p style="font-size: 0.84rem; color: #64748b; margin-bottom: 1.25rem;">
            Help fellow store owners and stationery buyers learn about Nivox products and delivery service.
          </p>

          <form id="form-submit-review">
            <div style="margin-bottom: 0.85rem;">
              <label style="display: block; font-size: 0.78rem; font-weight: 700; color: #1e293b; margin-bottom: 0.35rem;">Storekeeper / Buyer Name *</label>
              <input type="text" id="rev-name" class="input-control-v1" placeholder="e.g. Anand Murthy" required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px;" />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.85rem;">
              <div>
                <label style="display: block; font-size: 0.78rem; font-weight: 700; color: #1e293b; margin-bottom: 0.35rem;">Shop / Enterprise Name *</label>
                <input type="text" id="rev-shop" class="input-control-v1" placeholder="e.g. Murthy Book Depot" required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px;" />
              </div>
              <div>
                <label style="display: block; font-size: 0.78rem; font-weight: 700; color: #1e293b; margin-bottom: 0.35rem;">City &amp; State *</label>
                <input type="text" id="rev-city" class="input-control-v1" placeholder="e.g. Chennai, TN" required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px;" />
              </div>
            </div>

            <div style="margin-bottom: 0.85rem;">
              <label style="display: block; font-size: 0.78rem; font-weight: 700; color: #1e293b; margin-bottom: 0.35rem;">Rating *</label>
              <select id="rev-rating" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px;">
                <option value="5">★★★★★ 5 Stars - Outstanding Wholesale Service</option>
                <option value="4">★★★★☆ 4 Stars - Very Good Experience</option>
                <option value="3">★★★☆☆ 3 Stars - Average Service</option>
              </select>
            </div>

            <div style="margin-bottom: 0.85rem;">
              <label style="display: block; font-size: 0.78rem; font-weight: 700; color: #1e293b; margin-bottom: 0.35rem;">Product Ordered</label>
              <input type="text" id="rev-item" class="input-control-v1" placeholder="e.g. 10 Cartons Mega Back-to-School Combo" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px;" />
            </div>

            <div style="margin-bottom: 1.25rem;">
              <label style="display: block; font-size: 0.78rem; font-weight: 700; color: #1e293b; margin-bottom: 0.35rem;">Your Feedback *</label>
              <textarea id="rev-comment" rows="3" placeholder="Tell us about the product quality, margins, or delivery timeline..." required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px;"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block" style="background: #0284c7; color: #fff; width: 100%; padding: 10px; border-radius: 8px; border: none; font-weight: 700; cursor: pointer;">
              Post Verified Review
            </button>
          </form>
        </div>
      </div>

      <!-- Reviews Feed Section -->
      <section class="section" style="padding: 3rem 0;">
        <div class="container">
          
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
            <div>
              <div style="font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #0284c7; margin-bottom: 0.25rem;">
                AUTHENTIC DEALER FEEDBACK
              </div>
              <h2 style="font-family: var(--font-heading); font-size: 1.85rem; font-weight: 800; color: #0f172a; margin: 0;">
                Recent Verified Dispatches &amp; Testimonials
              </h2>
            </div>

            <div class="review-filter-buttons" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <button type="button" class="btn-filter-tag active" data-filter="all">All Reviews (${wholesaleReviews.length})</button>
              <button type="button" class="btn-filter-tag" data-filter="stationery">Stationery Shops</button>
              <button type="button" class="btn-filter-tag" data-filter="gift">Gift Boutiques</button>
              <button type="button" class="btn-filter-tag" data-filter="school">School Kits</button>
              <button type="button" class="btn-filter-tag" data-filter="general">General Marts</button>
            </div>
          </div>

          <!-- Reviews Grid -->
          <div id="reviews-cards-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">
            ${wholesaleReviews.map(r => renderReviewCard(r)).join('')}
          </div>

        </div>
      </section>
    </div>
  `;
}

function renderReviewCard(r) {
  return `
    <div class="review-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 1.75rem; box-shadow: 0 4px 16px rgba(15,23,42,0.03); display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <!-- Top header: Star rating + Date -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <div style="color: #f59e0b; font-size: 1rem; letter-spacing: 1px;">
            ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
          </div>
          <span style="font-size: 0.76rem; color: #94a3b8;">${r.date}</span>
        </div>

        <!-- Review Title -->
        <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; line-height: 1.35; margin-bottom: 0.65rem;">
          ${escapeHtml(r.title)}
        </h4>

        <!-- Review Comment -->
        <p style="font-size: 0.88rem; color: #475569; line-height: 1.55; margin-bottom: 1rem;">
          "${escapeHtml(r.comment)}"
        </p>

        <!-- Order Spec Pill -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 6px 10px; font-size: 0.76rem; color: #64748b; margin-bottom: 1.25rem;">
          <span style="font-weight: 700; color: #0284c7;">Ordered:</span> ${escapeHtml(r.orderItem)}
        </div>
      </div>

      <!-- Footer: Reviewer Info & GST Tag -->
      <div style="border-top: 1px solid #f1f5f9; padding-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-weight: 800; font-size: 0.9rem; color: #0f172a;">${escapeHtml(r.name)}</div>
          <div style="font-size: 0.78rem; color: #64748b;">${escapeHtml(r.shopName)} • ${escapeHtml(r.city)}</div>
        </div>
        ${r.gstVerified ? `
          <div style="background: #e0f2fe; color: #0369a1; border-radius: 6px; padding: 3px 8px; font-size: 0.7rem; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
            <span>✓</span> GST Verified
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

export function initReviewsViewEvents() {
  // Initialize top hero showcase carousel events
  initReviewsShowcaseEvents('reviews-page-hero');

  const modal = document.getElementById('review-modal');
  const openBtn = document.getElementById('btn-open-review-form');
  const closeBtn = document.getElementById('btn-close-review-modal');
  const form = document.getElementById('form-submit-review');
  const grid = document.getElementById('reviews-cards-grid');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rev-name')?.value.trim() || 'Retail Partner';
      const shop = document.getElementById('rev-shop')?.value.trim() || 'Retail Mart';
      const city = document.getElementById('rev-city')?.value.trim() || 'India';
      const rating = parseInt(document.getElementById('rev-rating')?.value || '5', 10);
      const item = document.getElementById('rev-item')?.value.trim() || 'Wholesale Merchandise Lot';
      const comment = document.getElementById('rev-comment')?.value.trim() || 'Great wholesale experience!';

      const newReview = {
        id: Date.now(),
        name,
        shopName: shop,
        city,
        gstVerified: true,
        category: 'stationery',
        rating,
        orderItem: item,
        date: 'Today',
        title: 'Verified Merchant Review',
        comment,
        helpfulCount: 1
      };

      wholesaleReviews.unshift(newReview);
      if (grid) {
        grid.innerHTML = wholesaleReviews.map(r => renderReviewCard(r)).join('');
      }

      form.reset();
      if (modal) modal.style.display = 'none';

      // Show toast confirmation
      const toast = document.getElementById('cart-toast');
      const msg = document.getElementById('toast-message');
      if (toast && msg) {
        msg.textContent = 'Thank you! Your verified merchant review has been submitted.';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
      }
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.review-filter-buttons .btn-filter-tag');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let filtered = wholesaleReviews;

      if (filter !== 'all') {
        filtered = wholesaleReviews.filter(r => r.category === filter);
      }

      if (grid) {
        grid.innerHTML = filtered.map(r => renderReviewCard(r)).join('');
      }
    });
  });
}
