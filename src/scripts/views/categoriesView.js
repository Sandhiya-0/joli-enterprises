// Page: Categories View — Comprehensive 5 Sourcing Lines Wholesale Hub
import { getCategories, getProducts } from '../../data/products.js';
import { escapeHtml } from '../components/productCard.js';

export function renderCategoriesView() {
  const categories = getCategories();
  const allProducts = getProducts();

  // Curated category commercial intelligence
  const categoryDetails = {
    'stationery': {
      tagline: 'High-Turnover Academic & Office Essentials',
      punchline: 'From smooth-flowing gel pens and mechanical pencils to geometry boxes and student exam combos, these products guarantee continuous repeat footfall throughout the academic year.',
      margin: '40%–55% Margin',
      dispatch: '24h Dispatch SLA',
      turnover: '10–14 Days Velocity',
      packType: 'Inner Cartons & Blister Packs',
      bestFor: 'Stationery stores, school book depots, college campus xerox centers, and general merchants.',
      counterTip: 'Place retractable gel pens and pastel highlighters in acrylic counter pen-holders right beside your cash billing register for immediate impulse pick-ups.',
      badgeColor: '#0284C7',
      badgeBg: '#E0F2FE'
    },
    'household': {
      tagline: 'High-Utility Daily Home Essentials',
      punchline: 'Heavy-duty adhesive wall hooks, silicone cable winders, airtight sealing clips, and micro-cleaning tools with immediate impulse purchase appeal at checkout counters.',
      margin: '35%–50% Margin',
      dispatch: 'Ready Master Cartons',
      turnover: '12–16 Days Velocity',
      packType: 'Display Cards & Polybags',
      bestFor: 'Supermarkets, departmental stores, hardware counters, and neighbourhood convenience shops.',
      counterTip: 'Hang adhesive wall hooks and silicone organizers on vertical clip-strips along store aisle columns or near household cleaning displays.',
      badgeColor: '#10B981',
      badgeBg: '#ECFDF5'
    },
    'fashion-accessories': {
      tagline: 'High-Margin Hair Styling & Fashion Novelties',
      punchline: 'Pastel matte claw clips, satin scrunchies, pearl hairpins, and durable elastic hair ties designed to capture maximum margin on small counter display racks.',
      margin: '45%–65% Margin',
      dispatch: 'Assorted Color Lots',
      turnover: '7–10 Days Velocity',
      packType: 'Carded Packs & Tub Sets',
      bestFor: 'Gift shops, beauty counters, fancy stores, college street kiosks, and online fashion resellers.',
      counterTip: 'Display claw clips in clear cylindrical acrylic fishbowls or tiered spinning counter racks. Customers love physically picking colors.',
      badgeColor: '#9333EA',
      badgeBg: '#F3E8FF'
    },
    'mobile-accessories': {
      tagline: 'Universal Fast-Moving Tech Utilities',
      punchline: 'Durable braided multi-pin charging cables, adjustable desktop phone stands, spiral wire protectors, and earphone cases compatible with all major smartphone models.',
      margin: '40%–60% Margin',
      dispatch: 'Retail Blister Packs',
      turnover: '8–12 Days Velocity',
      packType: 'Hanging Retail Blisters',
      bestFor: 'Mobile recharge shops, tech kiosks, train station convenience stalls, and gadget accessories stores.',
      counterTip: 'Fast cables and desk stands should be displayed on pegboard hooks at eye level with transparent blister windows showing cable gauge.',
      badgeColor: '#D97706',
      badgeBg: '#FEF3C7'
    },
    'gift-general': {
      tagline: 'High-Turnover Gifting & Novelty Impulse Items',
      punchline: '3D silicone cartoon keychains, novelty kawaii stationery, decorative washi tapes, and pre-packaged birthday return gift sets engineered for effortless instant resale.',
      margin: '45%–65% Margin',
      dispatch: 'Return Gift Ready',
      turnover: '9–13 Days Velocity',
      packType: 'Pre-Shrink Wrapped Sets',
      bestFor: 'Toy shops, novelty stores, party supply counters, school-gate kiosks, and e-commerce resellers.',
      counterTip: 'Position shrink-wrapped return gift combos in your front display window with a bold ₹49/₹99/₹149 price tag to attract parents looking for birthday party packs.',
      badgeColor: '#E11D48',
      badgeBg: '#FFE4E6'
    }
  };

  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Categories</span>
        </nav>
        <span style="display: inline-block; background: rgba(0, 163, 224, 0.12); color: #0284C7; font-weight: 800; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; padding: 0.35rem 0.85rem; border-radius: 9999px; margin-bottom: 0.85rem;">
          DIRECT FACTORY WHOLESALE
        </span>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">5 Primary Sourcing Lines</h1>
        <p class="section-subtitle">
          Source small, affordable everyday products in retail-ready packaging and bulk carton quantities across our 5 primary categories.
        </p>
      </div>
    </header>

    <!-- 1. Quick Category Navigation Bar -->
    <section class="section" style="padding-bottom: 0; padding-top: 2rem;">
      <div class="container">
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; align-items: center; background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1rem 1.25rem; border-radius: var(--radius-md); box-shadow: 0 4px 16px rgba(14, 26, 41, 0.04);">
          ${categories.map((cat, idx) => `
            <a href="#cat-${escapeHtml(cat.slug || cat.id)}" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.55rem 1rem; border-radius: 9999px; background: #F8FAFC; border: 1px solid #E2E8F0; color: #0E1A29; font-size: 0.86rem; font-weight: 700; text-decoration: none; transition: all 0.2s ease;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #00A3E0;"></span>
              <span>${escapeHtml(cat.name)}</span>
              <span style="background: rgba(14, 26, 41, 0.08); padding: 0.15rem 0.45rem; border-radius: 9999px; font-size: 0.72rem; color: #64748B;">
                ${cat.itemCount || 7} SKUs
              </span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 2. Detailed Category Deep-Dive Showcases -->
    <section class="section">
      <div class="container">
        <div style="display: flex; flex-direction: column; gap: 3.5rem;">
          ${categories.map((cat, idx) => {
            const catId = cat.slug || cat.id;
            const catProducts = allProducts.filter(p => p.category === catId);
            const topSkus = catProducts.slice(0, 4);
            const details = categoryDetails[catId] || {
              tagline: 'High-Turnover Retail Essentials',
              punchline: cat.description,
              margin: '35%–55% Margin',
              dispatch: 'Wholesale Ready',
              turnover: '10–14 Days Velocity',
              packType: 'Master Cartons',
              bestFor: 'Retail shops & independent storekeepers',
              counterTip: 'Place near payment counter for fast impulse add-on sales.',
              badgeColor: '#0E849E',
              badgeBg: '#E0F2FE'
            };

            return `
              <div id="cat-${escapeHtml(catId)}" class="fade-up" style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-md); padding: 2.75rem; box-shadow: 0 8px 24px rgba(14, 26, 41, 0.04); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: ${details.badgeColor};"></div>
                
                <!-- Category Header Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; align-items: center; margin-bottom: 2rem;">
                  <div>
                    <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: ${details.badgeBg}; color: ${details.badgeColor}; padding: 0.35rem 0.95rem; border-radius: 9999px; font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.85rem;">
                      Category 0${idx + 1} &bull; ${escapeHtml(details.tagline)}
                    </div>
                    
                    <h2 style="font-size: 2rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.85rem; line-height: 1.2;">
                      ${escapeHtml(cat.name)}
                    </h2>
                    
                    <p style="font-size: 0.98rem; color: #475569; line-height: 1.65; margin-bottom: 1.35rem;">
                      ${escapeHtml(details.punchline)}
                    </p>

                    <!-- Key Metrics Pill Tags -->
                    <div style="display: flex; gap: 0.65rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.25rem;">
                      <span style="background: #ECFDF5; color: #059669; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">
                        ${escapeHtml(details.margin)}
                      </span>
                      <span style="background: #EFF6FF; color: #1D4ED8; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">
                        ${escapeHtml(details.dispatch)}
                      </span>
                      <span style="background: #F8FAFC; border: 1px solid #E2E8F0; color: #334155; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">
                        ${escapeHtml(details.turnover)}
                      </span>
                      <span style="background: #FDF4FF; color: #A21CAF; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">
                        ${escapeHtml(details.packType)}
                      </span>
                    </div>

                    <!-- Counter Merchandising Tip -->
                    <div style="background: #F8FAFC; border-left: 3.5px solid ${details.badgeColor}; padding: 0.85rem 1rem; border-radius: 4px; margin-bottom: 1.5rem; font-size: 0.85rem; color: #475569; line-height: 1.5;">
                      <strong>Counter Merchandising Tip:</strong> ${escapeHtml(details.counterTip)}
                    </div>

                    <div style="font-size: 0.84rem; color: #64748B; margin-bottom: 1.75rem;">
                      <strong>Best Resale Formats:</strong> ${escapeHtml(details.bestFor)}
                    </div>

                    <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
                      <a href="#/category?slug=${encodeURIComponent(catId)}" class="btn btn-primary" style="background: #00A3E0; border-color: #00A3E0;">
                        <span>Browse All ${catProducts.length || 7} Products &rarr;</span>
                      </a>
                      <a href="#/bulk-enquiry?category=${encodeURIComponent(catId)}" class="btn btn-outline" style="border-color: #CBD5E1; color: #0E1A29;">
                        <span>Request Master Carton Rates</span>
                      </a>
                    </div>
                  </div>

                  <!-- Category Hero Visual Frame -->
                  <div style="height: 280px; border-radius: var(--radius-sm); overflow: hidden; box-shadow: 0 12px 28px rgba(14, 26, 41, 0.08); background: #F1F5F9;">
                    <img 
                      src="${escapeHtml(cat.image)}" 
                      alt="${escapeHtml(cat.name)}" 
                      style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;"
                      onmouseover="this.style.transform='scale(1.04)'"
                      onmouseout="this.style.transform='scale(1)'"
                      loading="lazy"
                    >
                  </div>
                </div>

                <!-- Featured Top SKUs Mini-Grid for this Category -->
                <div style="border-top: 1px solid #F1F5F9; padding-top: 1.75rem;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
                    <span style="font-size: 0.85rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em;">
                      Top Fast-Moving Wholesale SKUs in ${escapeHtml(cat.name)}
                    </span>
                    <a href="#/category?slug=${encodeURIComponent(catId)}" style="font-size: 0.84rem; font-weight: 700; color: #00A3E0; text-decoration: none;">
                      View Entire Sourcing Line &rarr;
                    </a>
                  </div>

                  <div class="cat-featured-skus-grid">
                    ${topSkus.map(prod => `
                      <a href="#/product/${encodeURIComponent(prod.id)}" class="cat-mini-sku-card" style="text-decoration: none;">
                        <img 
                          src="${escapeHtml(prod.images && prod.images[0] ? prod.images[0] : (prod.image || cat.image))}" 
                          alt="${escapeHtml(prod.name)}" 
                          class="cat-mini-sku-img"
                          loading="lazy"
                        >
                        <h4 class="cat-mini-sku-name">${escapeHtml(prod.name)}</h4>
                        <div class="cat-mini-sku-meta">
                          <span class="cat-mini-sku-price">₹${prod.unitPrice ? prod.unitPrice.toFixed(2) : '35.00'}</span>
                          <span class="cat-mini-sku-moq">MOQ: ${prod.moq || 12} pcs</span>
                        </div>
                      </a>
                    `).join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>

    <!-- 3. Real Retailer Profitability & Margin Breakdown Examples -->
    <section class="section bg-soft-grey">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Profitability Mechanics
          </span>
          <h2 class="section-title">How Joli Delivers High Retail Gross Margins</h2>
          <p class="section-subtitle">
            Concrete unit economics demonstrating how neighbourhood shopkeepers make 35% to 65% profit per carton.
          </p>
        </div>

        <div class="margin-calc-grid">
          <!-- Example 1: Stationery -->
          <div class="margin-calc-card fade-up">
            <span class="margin-calc-badge">Stationery Category</span>
            <h3 class="margin-calc-title">Retractable Pastel Gel Pens (Pack of 24)</h3>
            <p style="font-size: 0.85rem; color: #64748B; line-height: 1.5;">
              High-frequency school and college impulse purchase item sold at counter cash points.
            </p>
            <table class="margin-calc-table">
              <tr>
                <td>Wholesale Sourcing Rate (per pen)</td>
                <td>₹8.50</td>
              </tr>
              <tr>
                <td>Inner Pack Cost (24 Pens)</td>
                <td>₹204.00</td>
              </tr>
              <tr>
                <td>Standard Counter MRP (per pen)</td>
                <td>₹20.00</td>
              </tr>
              <tr>
                <td>Total Resale Value (24 Pens)</td>
                <td>₹480.00</td>
              </tr>
            </table>
            <div class="margin-calc-highlight-box">
              <div>
                <span style="font-size: 0.78rem; text-transform: uppercase; opacity: 0.9; display: block;">Retailer Profit / Pack</span>
                <span class="margin-calc-highlight-val">₹276.00</span>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 0.78rem; text-transform: uppercase; opacity: 0.9; display: block;">Gross Margin</span>
                <span style="font-size: 1.4rem; font-weight: 800;">57.5%</span>
              </div>
            </div>
          </div>

          <!-- Example 2: Fashion Hair Accessories -->
          <div class="margin-calc-card fade-up">
            <span class="margin-calc-badge" style="background: #F3E8FF; color: #9333EA;">Fashion Accessories</span>
            <h3 class="margin-calc-title">Pastel Matte Claw Clips (Tub of 36)</h3>
            <p style="font-size: 0.85rem; color: #64748B; line-height: 1.5;">
              High-margin novelty impulse accessory with rapid turnover in fancy boutiques and beauty counters.
            </p>
            <table class="margin-calc-table">
              <tr>
                <td>Wholesale Sourcing Rate (per clip)</td>
                <td>₹12.00</td>
              </tr>
              <tr>
                <td>Assorted Tub Cost (36 Clips)</td>
                <td>₹432.00</td>
              </tr>
              <tr>
                <td>Standard Counter MRP (per clip)</td>
                <td>₹35.00</td>
              </tr>
              <tr>
                <td>Total Resale Value (36 Clips)</td>
                <td>₹1,260.00</td>
              </tr>
            </table>
            <div class="margin-calc-highlight-box" style="background: linear-gradient(135deg, #7C3AED 0%, #9333EA 100%);">
              <div>
                <span style="font-size: 0.78rem; text-transform: uppercase; opacity: 0.9; display: block;">Retailer Profit / Tub</span>
                <span class="margin-calc-highlight-val">₹828.00</span>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 0.78rem; text-transform: uppercase; opacity: 0.9; display: block;">Gross Margin</span>
                <span style="font-size: 1.4rem; font-weight: 800;">65.7%</span>
              </div>
            </div>
          </div>

          <!-- Example 3: Mobile Accessories -->
          <div class="margin-calc-card fade-up">
            <span class="margin-calc-badge" style="background: #FEF3C7; color: #D97706;">Mobile Accessories</span>
            <h3 class="margin-calc-title">Braided 3-in-1 Fast Cable (Pack of 20)</h3>
            <p style="font-size: 0.85rem; color: #64748B; line-height: 1.5;">
              High-demand tech utility in hanging blister packaging designed for instant mobile recharge kiosk sales.
            </p>
            <table class="margin-calc-table">
              <tr>
                <td>Wholesale Sourcing Rate (per cable)</td>
                <td>₹38.00</td>
              </tr>
              <tr>
                <td>Blister Pack Cost (20 Cables)</td>
                <td>₹760.00</td>
              </tr>
              <tr>
                <td>Standard Counter MRP (per cable)</td>
                <td>₹99.00</td>
              </tr>
              <tr>
                <td>Total Resale Value (20 Cables)</td>
                <td>₹1,980.00</td>
              </tr>
            </table>
            <div class="margin-calc-highlight-box" style="background: linear-gradient(135deg, #B45309 0%, #D97706 100%);">
              <div>
                <span style="font-size: 0.78rem; text-transform: uppercase; opacity: 0.9; display: block;">Retailer Profit / Pack</span>
                <span class="margin-calc-highlight-val">₹1,220.00</span>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 0.78rem; text-transform: uppercase; opacity: 0.9; display: block;">Gross Margin</span>
                <span style="font-size: 1.4rem; font-weight: 800;">61.6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Wholesale Profitability & Margin Matrix -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Commercial Comparison
          </span>
          <h2 class="section-title">Wholesale Margin &amp; Turnover Matrix</h2>
          <p class="section-subtitle">
            Compare margins, average pack counts, and restocking cycles across our 5 primary sourcing categories.
          </p>
        </div>

        <div class="category-matrix-wrapper fade-up">
          <table class="category-matrix-table">
            <thead>
              <tr>
                <th>Category Sourcing Line</th>
                <th>Retail Margin</th>
                <th>Pack Format &amp; MOQ</th>
                <th>Turnover Cycle</th>
                <th>Peak Resale Seasons</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Stationery Products</strong>
                  <div style="font-size: 0.78rem; color: #64748B;">Gel pens, math sets, exam kits</div>
                </td>
                <td><span class="category-matrix-badge">40% – 55%</span></td>
                <td>Inner Boxes &bull; MOQ 10–24 pcs</td>
                <td>10 to 14 Days</td>
                <td>June–Aug (Re-opening), Dec–Mar (Exams)</td>
                <td><a href="#/category?slug=stationery" style="color: #00A3E0; font-weight: 700; text-decoration: none;">Browse Line &rarr;</a></td>
              </tr>
              <tr>
                <td>
                  <strong>Household Products</strong>
                  <div style="font-size: 0.78rem; color: #64748B;">Adhesive hooks, clips, organizers</div>
                </td>
                <td><span class="category-matrix-badge">35% – 50%</span></td>
                <td>Hanging Cards &bull; MOQ 12–24 pcs</td>
                <td>12 to 16 Days</td>
                <td>Year-round continuous daily demand</td>
                <td><a href="#/category?slug=household" style="color: #00A3E0; font-weight: 700; text-decoration: none;">Browse Line &rarr;</a></td>
              </tr>
              <tr>
                <td>
                  <strong>Fashion Accessories</strong>
                  <div style="font-size: 0.78rem; color: #64748B;">Claw clips, satin scrunchies, ties</div>
                </td>
                <td><span class="category-matrix-badge">45% – 65%</span></td>
                <td>Tub Assortments &bull; MOQ 12–24 pcs</td>
                <td>7 to 10 Days</td>
                <td>Festivals, wedding season &amp; college reopens</td>
                <td><a href="#/category?slug=fashion-accessories" style="color: #00A3E0; font-weight: 700; text-decoration: none;">Browse Line &rarr;</a></td>
              </tr>
              <tr>
                <td>
                  <strong>Mobile Accessories</strong>
                  <div style="font-size: 0.78rem; color: #64748B;">Braided cables, stands, protectors</div>
                </td>
                <td><span class="category-matrix-badge">40% – 60%</span></td>
                <td>Retail Blisters &bull; MOQ 12–30 pcs</td>
                <td>8 to 12 Days</td>
                <td>Continuous daily impulse replacement</td>
                <td><a href="#/category?slug=mobile-accessories" style="color: #00A3E0; font-weight: 700; text-decoration: none;">Browse Line &rarr;</a></td>
              </tr>
              <tr>
                <td>
                  <strong>Gift &amp; General Items</strong>
                  <div style="font-size: 0.78rem; color: #64748B;">3D keychains, return gifts, novelties</div>
                </td>
                <td><span class="category-matrix-badge">45% – 65%</span></td>
                <td>Pre-Shrunk Sets &bull; MOQ 12–25 pcs</td>
                <td>9 to 13 Days</td>
                <td>Birthday seasons, Diwali &amp; New Year</td>
                <td><a href="#/category?slug=gift-general" style="color: #00A3E0; font-weight: 700; text-decoration: none;">Browse Line &rarr;</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 5. Pre-Packaged Starter Bundles by Category -->
    <section class="section bg-soft-grey">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Ready-to-Resell Assortments
          </span>
          <h2 class="section-title">Pre-Packaged Category Starter Lots</h2>
          <p class="section-subtitle">
            Curated assortment bundles designed for storekeepers launching a new product section without purchasing separate master cartons.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          <!-- Starter Lot 1 -->
          <div class="fade-up" style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-sm); padding: 1.75rem; box-shadow: 0 4px 16px rgba(14, 26, 41, 0.04); display: flex; flex-direction: column;">
            <span style="display: inline-block; background: #E0F2FE; color: #0284C7; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; padding: 0.25rem 0.65rem; border-radius: 9999px; margin-bottom: 0.75rem; align-self: flex-start;">
              Stationery Pack
            </span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              School Counter Starter Lot
            </h3>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55; margin-bottom: 1.25rem;">
              Includes 36 pastel gel pens, 24 mechanical pencils, 12 geometry boxes, and 24 vinyl erasers. Ideal for back-to-school season.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid #F1F5F9; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="font-size: 0.75rem; color: #94A3B8; display: block;">Lot Price</span>
                <span style="font-size: 1.2rem; font-weight: 800; color: #0E849E;">₹2,999</span>
              </div>
              <a href="#/combos" class="btn btn-primary btn-sm" style="background: #00A3E0; border-color: #00A3E0;">
                <span>View Bundle &rarr;</span>
              </a>
            </div>
          </div>

          <!-- Starter Lot 2 -->
          <div class="fade-up" style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-sm); padding: 1.75rem; box-shadow: 0 4px 16px rgba(14, 26, 41, 0.04); display: flex; flex-direction: column;">
            <span style="display: inline-block; background: #F3E8FF; color: #9333EA; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; padding: 0.25rem 0.65rem; border-radius: 9999px; margin-bottom: 0.75rem; align-self: flex-start;">
              Fashion Lot
            </span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Hair Accessory Trend Assortment
            </h3>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55; margin-bottom: 1.25rem;">
              48 assorted matte claw clips, 36 satin scrunchies, and 24 carded hair ties in current season pastel and neutral shades.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid #F1F5F9; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="font-size: 0.75rem; color: #94A3B8; display: block;">Lot Price</span>
                <span style="font-size: 1.2rem; font-weight: 800; color: #0E849E;">₹1,850</span>
              </div>
              <a href="#/combos" class="btn btn-primary btn-sm" style="background: #00A3E0; border-color: #00A3E0;">
                <span>View Bundle &rarr;</span>
              </a>
            </div>
          </div>

          <!-- Starter Lot 3 -->
          <div class="fade-up" style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-sm); padding: 1.75rem; box-shadow: 0 4px 16px rgba(14, 26, 41, 0.04); display: flex; flex-direction: column;">
            <span style="display: inline-block; background: #FEF3C7; color: #D97706; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; padding: 0.25rem 0.65rem; border-radius: 9999px; margin-bottom: 0.75rem; align-self: flex-start;">
              Mobile Lot
            </span>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Counter Fast-Cable Display Pack
            </h3>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55; margin-bottom: 1.25rem;">
              30 braided Type-C &amp; Lightning fast cables, 20 desktop stands, and 50 spiral wire savers in ready hanging display blisters.
            </p>
            <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid #F1F5F9; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="font-size: 0.75rem; color: #94A3B8; display: block;">Lot Price</span>
                <span style="font-size: 1.2rem; font-weight: 800; color: #0E849E;">₹2,400</span>
              </div>
              <a href="#/combos" class="btn btn-primary btn-sm" style="background: #00A3E0; border-color: #00A3E0;">
                <span>View Bundle &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Counter Placement & Merchandising Playbook -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Storeowner Playbook
          </span>
          <h2 class="section-title">Retail Visual Merchandising by Category</h2>
          <p class="section-subtitle">
            Proven counter placement techniques to maximize stock turnover and customer basket size in small shops.
          </p>
        </div>

        <div class="merchandising-guide-grid">
          <div class="merchandising-card fade-up">
            <span class="merchandising-step-num">Strategy 01</span>
            <h4 class="merchandising-title">Eye-Level Pen Fishbowls</h4>
            <p class="merchandising-desc">
              Stationery gel pens and mechanical pencils sell 3x faster when placed directly at eye-level on counter corners in clear acrylic cups where customers can test write.
            </p>
          </div>

          <div class="merchandising-card fade-up">
            <span class="merchandising-step-num">Strategy 02</span>
            <h4 class="merchandising-title">Hanging Clip-Strips on Pillars</h4>
            <p class="merchandising-desc">
              Adhesive hooks and kitchen utility clips perform best when hung vertically on store entry pillars or beside billing desks where customers browse while queuing.
            </p>
          </div>

          <div class="merchandising-card fade-up">
            <span class="merchandising-step-num">Strategy 03</span>
            <h4 class="merchandising-title">Tiered Hair Accessory Carousels</h4>
            <p class="merchandising-desc">
              Display matte claw clips by color family (pastels, neutrals, blacks) on spinning counter racks. Color coordination triggers multiple-piece purchases.
            </p>
          </div>

          <div class="merchandising-card fade-up">
            <span class="merchandising-step-num">Strategy 04</span>
            <h4 class="merchandising-title">Front-Window Return Gift Displays</h4>
            <p class="merchandising-desc">
              Stack shrink-wrapped birthday combo kits visibly in your front display glass. Parents looking for birthday return gifts prefer pre-packed solution packs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Category Procurement Assurances -->
    <section class="section bg-soft-grey">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Quality Protocol
          </span>
          <h2 class="section-title">The Joli Sourcing Advantage Across All 5 Lines</h2>
          <p class="section-subtitle">
            Every category benefits from our factory-direct contracting, standardized packaging, and zero-shortage audits.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          <div class="fade-up" style="background: #FFFFFF; padding: 1.75rem; border-radius: var(--radius-sm); border-top: 3px solid #00A3E0; box-shadow: 0 4px 16px rgba(14, 26, 41, 0.04);">
            <h4 style="font-size: 1.05rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Retail-Ready EAN Barcoding
            </h4>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55;">
              Every SKU is labeled with official EAN barcodes and clearly printed MRPs, enabling instant integration into modern POS scanners or Kirana billing machines.
            </p>
          </div>

          <div class="fade-up" style="background: #FFFFFF; padding: 1.75rem; border-radius: var(--radius-sm); border-top: 3px solid #10B981; box-shadow: 0 4px 16px rgba(14, 26, 41, 0.04);">
            <h4 style="font-size: 1.05rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Mixed Carton Shipping
            </h4>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55;">
              You do not have to buy separate full cartons for each category. Combine items from Stationery, Hair Accessories, and Household into a single master shipper box to reduce freight costs.
            </p>
          </div>

          <div class="fade-up" style="background: #FFFFFF; padding: 1.75rem; border-radius: var(--radius-sm); border-top: 3px solid #F59E0B; box-shadow: 0 4px 16px rgba(14, 26, 41, 0.04);">
            <h4 style="font-size: 1.05rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Transit-Proof Heavy Corrugation
            </h4>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55;">
              All items are encased in shrink-wrapped inner packs and packed into heavy 5-ply cartons to eliminate moisture damage and transport shocks during pan-India transit.
            </p>
          </div>

          <div class="fade-up" style="background: #FFFFFF; padding: 1.75rem; border-radius: var(--radius-sm); border-top: 3px solid #8B5CF6; box-shadow: 0 4px 16px rgba(14, 26, 41, 0.04);">
            <h4 style="font-size: 1.05rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Full GST ITC Eligibility
            </h4>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55;">
              Every invoice is 100% tax-compliant with correct HSN classifications (e.g. 9608 for pens, 3924 for household plasticware), allowing you to claim your complete monthly input tax credit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Category Procurement FAQ -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span style="font-size: 0.8rem; font-weight: 800; color: #B88E4B; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.5rem; display: block;">
            Procurement FAQ
          </span>
          <h2 class="section-title">Frequently Asked Category Sourcing Questions</h2>
          <p class="section-subtitle">
            Everything you need to know about mixing categories, sampling MOQs, and customized carton packaging.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          <div class="fade-up" style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-sm); padding: 1.75rem; box-shadow: 0 4px 14px rgba(14, 26, 41, 0.03);">
            <div style="font-size: 0.95rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Q. Can I mix items from different categories in a single order?
            </div>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.6;">
              Yes! One of the biggest advantages of Joli Enterprises is mixed-carton shipping. You can order 1 pack of gel pens, 1 tub of claw clips, and 1 pack of fast cables in a single dispatch box.
            </p>
          </div>

          <div class="fade-up" style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-sm); padding: 1.75rem; box-shadow: 0 4px 14px rgba(14, 26, 41, 0.03);">
            <div style="font-size: 0.95rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Q. What are the minimum order quantities per category line?
            </div>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.6;">
              Our MOQ starts from just 10 to 24 pieces per product SKU. There is no minimum cart value requirement, allowing small shops to restock weekly without financial strain.
            </p>
          </div>

          <div class="fade-up" style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-sm); padding: 1.75rem; box-shadow: 0 4px 14px rgba(14, 26, 41, 0.03);">
            <div style="font-size: 0.95rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Q. Do you supply display racks or clip-strips for stores?
            </div>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.6;">
              Yes, for starter carton orders over ₹15,000, we include complimentary branded hanging clip strips and acrylic counter display organizers to help you set up your counter immediately.
            </p>
          </div>

          <div class="fade-up" style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: var(--radius-sm); padding: 1.75rem; box-shadow: 0 4px 14px rgba(14, 26, 41, 0.03);">
            <div style="font-size: 0.95rem; font-weight: 800; color: #0E1A29; margin-bottom: 0.5rem;">
              Q. How do I request full master carton container pricing?
            </div>
            <p style="font-size: 0.88rem; color: #64748B; line-height: 1.6;">
              For high-volume carton orders (72+ to 500+ units per SKU), click on "Request Master Carton Rates" or submit a bulk enquiry to receive tiered volume pricing directly from our trade desk.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. Direct Trade Desk Bulk Enquiry CTA -->
    <section class="section-sm bg-soft-grey">
      <div class="container">
        <div class="cta-banner fade-up">
          <div class="cta-banner-content">
            <h2 class="cta-banner-title">Need Custom Master Carton Quantities?</h2>
            <p class="cta-banner-desc">
              Connect directly with our category merchandising team for tiered volume discounts on orders over ₹25,000 or custom school kit configurations.
            </p>
          </div>
          <div class="cta-banner-action" style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#/bulk-enquiry" class="btn btn-primary btn-lg" style="background: #00A3E0; border-color: #00A3E0;">
              <span>Request Master Carton Quote</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#/combos" class="btn btn-outline btn-lg">
              <span>Explore Pre-Packaged Combos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
