// Page: Categories View — Overview of All 5 Product Categories
import { getCategories, getProducts } from '../../data/products.js';
import { escapeHtml } from '../components/productCard.js';

export function renderCategoriesView() {
  const categories = getCategories();
  const allProducts = getProducts();

  // Curated category highlights for fast wholesale scanning
  const categoryHighlights = {
    'stationery': {
      punchline: 'High-turnover school kits, notebooks, and writing essentials engineered for rapid repeat sales.',
      margin: '40%–55% Margin',
      dispatch: '24h Dispatch'
    },
    'household': {
      punchline: 'Everyday utility hooks, storage clips, and cleaning essentials with high impulse counter turnover.',
      margin: '35%–50% Margin',
      dispatch: 'Ready Master Cartons'
    },
    'fashion-accessories': {
      punchline: 'Trending pastel claw clips, satin scrunchies, and hair accessories designed for high volume resale.',
      margin: '45%–65% Margin',
      dispatch: 'Assorted Color Lots'
    },
    'mobile-accessories': {
      punchline: 'Fast-moving charging cables, desktop stands, and wire protectors with universal phone compatibility.',
      margin: '40%–60% Margin',
      dispatch: 'Retail Blister Packs'
    },
    'gift-general': {
      punchline: 'Silicone 3D keychains, novelty stationery gifts, and washi tapes ideal for seasonal and gift sales.',
      margin: '45%–65% Margin',
      dispatch: 'Return Gift Ready'
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
        <h1 class="section-title" style="margin-bottom: 0.5rem;">5 Primary Sourcing Lines</h1>
        <p class="section-subtitle">
          Direct factory wholesale merchandise curated for independent retail stores, stationery dealers, and gift boutiques.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${categories.map((cat, idx) => {
            const catProducts = allProducts.filter(p => p.category === (cat.slug || cat.id));
            const isReversed = idx % 2 === 1;
            const meta = categoryHighlights[cat.slug || cat.id] || {
              punchline: cat.description,
              margin: '35%–55% Margin',
              dispatch: 'Wholesale Ready'
            };

            return `
              <div class="fade-up" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.25rem; align-items: center; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: var(--radius-md); padding: 2.25rem; box-shadow: 0 4px 16px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease;">
                <div style="order: ${isReversed ? '2' : '1'};">
                  <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(201, 162, 94, 0.12); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 800; color: #9A7432; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem;">
                    Category 0${idx + 1}
                  </div>
                  
                  <h2 style="font-size: 1.65rem; font-weight: 800; color: var(--color-navy); margin-bottom: 0.65rem; line-height: 1.2;">
                    ${escapeHtml(cat.name)}
                  </h2>
                  
                  <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.25rem;">
                    ${escapeHtml(meta.punchline)}
                  </p>

                  <!-- Neat Key Tags -->
                  <div style="display: flex; gap: 0.65rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.65rem;">
                    <span style="background: var(--color-soft-grey); border: 1px solid #E2E8F0; padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: var(--color-navy);">
                      ${catProducts.length || 7} Wholesale SKUs
                    </span>
                    <span style="background: rgba(14, 26, 41, 0.06); padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: var(--color-navy);">
                      ${meta.margin}
                    </span>
                    <span style="background: rgba(201, 162, 94, 0.15); padding: 0.35rem 0.75rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700; color: #9A7432;">
                      ${meta.dispatch}
                    </span>
                  </div>

                  <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
                    <a href="#/category?slug=${encodeURIComponent(cat.slug || cat.id)}" class="btn btn-primary btn-sm">
                      <span>Browse Products</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="#/bulk-enquiry?category=${encodeURIComponent(cat.slug || cat.id)}" class="btn btn-outline btn-sm">
                      <span>Request Carton Quote</span>
                    </a>
                  </div>
                </div>

                <div style="order: ${isReversed ? '1' : '2'}; height: 240px; border-radius: var(--radius-sm); overflow: hidden; background: var(--color-soft-grey);">
                  <img 
                    src="${escapeHtml(cat.image)}" 
                    alt="${escapeHtml(cat.name)}" 
                    style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;"
                    onmouseover="this.style.transform='scale(1.05)'"
                    onmouseout="this.style.transform='scale(1)'"
                    loading="lazy"
                  >
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}
