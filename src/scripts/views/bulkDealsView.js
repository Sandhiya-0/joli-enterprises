// Page: Bulk Deals & Combo Packs View
import { getProducts } from '../../data/products.js';
import { renderProductCard } from '../components/productCard.js';
import { renderBulkFlipCard, initFlipCards } from '../components/flipCard.js';
import { initHoloCards } from '../components/holoCard.js';

export function initBulkDealsViewEvents() {
  initHoloCards();
  initFlipCards();
}

export function renderBulkDealsView() {
  const allProducts = getProducts();
  const comboPacks = allProducts.filter(p => p.isCombo);
  const volumeDeals = allProducts.filter(p => p.cartonQuantity && p.cartonQuantity >= 200 && !p.isCombo);

  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Bulk Deals</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Volume Specials & Master Cartons</h1>
        <p class="section-subtitle">
          Direct factory carton discounts and pre-assembled retail bundles structured for maximum merchant profit.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <!-- Ready-Made Combo Kits Section -->
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
          <div>
            <h2 class="section-title" style="margin-bottom: 0.35rem;">Pre-Packaged Retail Combos</h2>
            <p class="section-subtitle" style="margin: 0;">
              Zero assembly required. Shrink-wrapped school kits and novelty gift packs with verified piece counts.
            </p>
          </div>
          <a href="#/combos" class="btn btn-outline btn-sm">
            <span>View All Combos &rarr;</span>
          </a>
        </div>

        <div class="products-grid" style="margin-bottom: 4rem;">
          ${comboPacks.map(p => renderProductCard(p)).join('')}
        </div>

        <!-- High Volume Carton Deals -->
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
          <div>
            <h2 class="section-title" style="margin-bottom: 0;">Master Carton Volume Specials</h2>
          </div>
          <a href="#/bulk-enquiry" class="btn btn-outline btn-sm">
            <span>Request Container Quote &rarr;</span>
          </a>
        </div>

        <div class="products-grid flip-cards-grid">
          ${volumeDeals.map(p => renderBulkFlipCard(p)).join('')}
        </div>
      </div>
    </section>
  `;
}
