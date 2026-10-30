// Page: Own Products View — Nivox In-House Manufactured & Branded Merchandise
import { getProducts } from '../../data/products.js';
import { renderProductCard, escapeHtml } from '../components/productCard.js';

export function renderOwnProductsView() {
  const allProducts = getProducts();
  // Highlight products that are in-house manufactured / branded / high-volume combos
  const ownProducts = allProducts.filter(p => p.isCombo || p.featured || (p.cartonQuantity && p.cartonQuantity >= 50));

  return `
    <div class="own-products-page">
      <!-- Top Hero Header -->
      <header class="about-hero" style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 60%, #0f172a 100%); color: #ffffff; padding: 3.5rem 0 3rem;">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Breadcrumb" style="margin-bottom: 1rem;">
            <a href="#/" style="color: rgba(255,255,255,0.75);">Home</a>
            <span class="separator" style="color: rgba(255,255,255,0.4);">/</span>
            <span class="current" style="color: #38bdf8; font-weight: 700;">Own Products</span>
          </nav>

          <div style="max-width: 820px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.12); padding: 5px 14px; border-radius: 9999px; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem; border: 1px solid rgba(255,255,255,0.2);">
              <span style="color: #38bdf8;">★</span> NIVOX IN-HOUSE MANUFACTURED &amp; OEM
            </div>
            <h1 class="section-title" style="color: #ffffff; font-size: clamp(2rem, 3.8vw, 3rem); line-height: 1.15; margin-bottom: 0.85rem;">
              Our In-House Manufactured &amp; Branded Line
            </h1>
            <p class="section-subtitle" style="color: rgba(255,255,255,0.85); font-size: 1.05rem; line-height: 1.6; max-width: 720px;">
              Direct from our Chennai wholesale factory. Highest retailer margins, zero middlemen, strict QA lab testing, and custom branding support for volume buyers across India.
            </p>
          </div>
        </div>
      </header>

      <!-- Key Value Pillars -->
      <section class="section" style="padding: 2.5rem 0 1.5rem; background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">
            
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(15,23,42,0.03);">
              <div style="width: 44px; height: 44px; border-radius: 10px; background: #e0f2fe; color: #0284c7; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"></path><path d="M5 20V8l7-5 7 5v12"></path><path d="M9 12h6"></path><path d="M9 16h6"></path></svg>
              </div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin-bottom: 0.35rem;">Factory Direct Pricing</h4>
              <p style="font-size: 0.84rem; color: #64748b; line-height: 1.5; margin: 0;">
                Save 30–40% compared to third-party brand distributors. Maximize retail margins on high-turnover counters.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(15,23,42,0.03);">
              <div style="width: 44px; height: 44px; border-radius: 10px; background: #e0f2fe; color: #0284c7; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              </div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin-bottom: 0.35rem;">Private Label &amp; OEM</h4>
              <p style="font-size: 0.84rem; color: #64748b; line-height: 1.5; margin: 0;">
                Custom logo printing, barcode labeling, and shrink-wrapped combo kits available for institutional school orders.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(15,23,42,0.03);">
              <div style="width: 44px; height: 44px; border-radius: 10px; background: #e0f2fe; color: #0284c7; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              </div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin-bottom: 0.35rem;">Lab Tested Quality</h4>
              <p style="font-size: 0.84rem; color: #64748b; line-height: 1.5; margin: 0;">
                Manufactured with child-safe non-toxic materials, high-density polymer housings, and durable packaging.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.5rem; box-shadow: 0 4px 12px rgba(15,23,42,0.03);">
              <div style="width: 44px; height: 44px; border-radius: 10px; background: #e0f2fe; color: #0284c7; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h4 style="font-size: 1.05rem; font-weight: 800; color: #0f172a; margin-bottom: 0.35rem;">Master Carton Ready</h4>
              <p style="font-size: 0.84rem; color: #64748b; line-height: 1.5; margin: 0;">
                Standardized master cartons with batch codes and tamper seals. Dispatched across India within 24–48 hours.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- Products Grid Section -->
      <section class="section" style="padding: 3rem 0;">
        <div class="container">
          
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
            <div>
              <div style="font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #0284c7; margin-bottom: 0.25rem;">
                EXCLUSIVE INVENTORY
              </div>
              <h2 style="font-family: var(--font-heading); font-size: 1.85rem; font-weight: 800; color: #0f172a; margin: 0;">
                Nivox Proprietary Product Catalogue
              </h2>
            </div>
            
            <div class="own-filter-buttons" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <button type="button" class="btn-filter-tag active" data-filter="all">All Products (${ownProducts.length})</button>
              <button type="button" class="btn-filter-tag" data-filter="combos">Combos &amp; Kits</button>
              <button type="button" class="btn-filter-tag" data-filter="stationery">Stationery</button>
              <button type="button" class="btn-filter-tag" data-filter="household">Household</button>
              <button type="button" class="btn-filter-tag" data-filter="mobile">Mobile Utilities</button>
            </div>
          </div>

          <!-- Product Cards Grid (Clean format: Image & Title, click to view details) -->
          <div class="combos-grid" id="own-products-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.75rem;">
            ${ownProducts.map(p => renderProductCard(p)).join('')}
          </div>

        </div>
      </section>

      <!-- Private Label / Custom Combo Manufacturing Callout -->
      <section class="section" style="padding: 2.5rem 0 4rem;">
        <div class="container">
          <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 20px; padding: 2.75rem 2.5rem; color: #ffffff; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem; box-shadow: 0 10px 30px rgba(15,23,42,0.15);">
            <div style="max-width: 650px;">
              <span style="color: #38bdf8; font-weight: 800; font-size: 0.82rem; letter-spacing: 0.08em; text-transform: uppercase;">
                CUSTOM MANUFACTURING &amp; PRIVATE LABEL
              </span>
              <h3 style="font-size: 1.75rem; font-weight: 800; margin: 0.5rem 0 0.75rem; color: #ffffff;">
                Want Your Brand Name or School Logo Printed on Our Products?
              </h3>
              <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.5; margin: 0;">
                We manufacture bespoke stationery combos, custom exam writing pads, and branded corporate accessories for institutional orders of 500+ pieces.
              </p>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="#/bulk-enquiry" class="btn btn-primary btn-lg" style="background: #0284c7; color: #ffffff; border: none; font-weight: 700; border-radius: 10px; padding: 12px 24px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                <span>Request Custom Quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#/contact" class="btn btn-outline btn-lg" style="border: 1.5px solid rgba(255,255,255,0.3); color: #ffffff; font-weight: 700; border-radius: 10px; padding: 12px 24px; text-decoration: none;">
                Contact Factory Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initOwnProductsViewEvents() {
  const filterBtns = document.querySelectorAll('.own-filter-buttons .btn-filter-tag');
  const allProducts = getProducts();
  const ownProducts = allProducts.filter(p => p.isCombo || p.featured || (p.cartonQuantity && p.cartonQuantity >= 50));
  const grid = document.getElementById('own-products-grid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let filtered = ownProducts;

      if (filter === 'combos') {
        filtered = ownProducts.filter(p => p.isCombo);
      } else if (filter === 'stationery') {
        filtered = ownProducts.filter(p => p.category === 'stationery');
      } else if (filter === 'household') {
        filtered = ownProducts.filter(p => p.category === 'household');
      } else if (filter === 'mobile') {
        filtered = ownProducts.filter(p => p.category === 'mobile-accessories');
      }

      if (grid) {
        grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
      }
    });
  });
}
