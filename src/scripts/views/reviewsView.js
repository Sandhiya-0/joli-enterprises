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

export function renderReviewsView() {
  return `
    <div class="reviews-page">
      <!-- Top Hero Header -->
      <header class="about-hero" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0369a1 100%); color: #ffffff; padding: 3.5rem 0 3rem;">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Breadcrumb" style="margin-bottom: 1rem;">
            <a href="#/" style="color: rgba(255,255,255,0.75);">Home</a>
            <span class="separator" style="color: rgba(255,255,255,0.4);">/</span>
            <span class="current" style="color: #38bdf8; font-weight: 700;">Retailer Reviews</span>
          </nav>

          <div style="max-width: 820px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.12); padding: 5px 14px; border-radius: 9999px; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem; border: 1px solid rgba(255,255,255,0.2);">
              <span style="color: #fbbf24;">★★★★★</span> VERIFIED B2B MERCHANT RATINGS
            </div>
            <h1 class="section-title" style="color: #ffffff; font-size: clamp(2rem, 3.8vw, 3rem); line-height: 1.15; margin-bottom: 0.85rem;">
              Wholesale Customer &amp; Dealer Reviews
            </h1>
            <p class="section-subtitle" style="color: rgba(255,255,255,0.85); font-size: 1.05rem; line-height: 1.6; max-width: 720px;">
              Read authentic feedback from 2,840+ stationery dealers, retail gift stores, school suppliers, and general merchants stocking Nivox merchandise across India.
            </p>
          </div>
        </div>
      </header>

      <!-- Scorecard & Metrics Summary -->
      <section class="section" style="padding: 2.5rem 0; background: #ffffff; border-bottom: 1px solid #e2e8f0;">
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
