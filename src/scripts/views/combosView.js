// Page: Combos View — Ready-Made Wholesale Bundles & School Kits
import { getProducts } from '../../data/products.js';
import { renderProductCard } from '../components/productCard.js';

export function renderCombosView() {
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

        <!-- Custom Combo Assembly Banner -->
        <div style="background: var(--color-navy); color: var(--color-white); padding: 2.75rem 2.25rem; text-align: center; max-width: 860px; margin: 0 auto; border-radius: var(--radius-md); box-shadow: 0 12px 35px rgba(14, 26, 41, 0.25);" class="fade-up">
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(201, 162, 94, 0.2); padding: 0.25rem 0.85rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 800; color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem;">
            Custom Assembly Service
          </div>
          <h2 style="font-size: 1.65rem; font-weight: 800; color: #FFFFFF; margin-bottom: 0.65rem;">
            Need Custom Kits for Your School or Institution?
          </h2>
          <p style="font-size: 0.95rem; color: #CBD5E1; max-width: 600px; margin: 0 auto 1.5rem; line-height: 1.6;">
            We assemble, shrink-wrap, and barcode custom stationery packages, return gift bundles, and exam kits to your exact piece specifications.
          </p>
          <a href="#/bulk-enquiry?category=stationery&product=Custom+Combo+Kit" class="btn btn-primary btn-lg">
            <span>Request Custom Kit Assembly</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}
