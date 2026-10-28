// Page: Category View — Dedicated Category Page
import { getCategories, getProducts } from '../../data/products.js';
import { renderProductCard, escapeHtml } from '../components/productCard.js';

export function renderCategoryView(queryParams = {}) {
  const categories = getCategories();
  const slug = queryParams.slug || 'stationery';
  const category = categories.find(c => c.slug === slug || c.id === slug) || categories[0];

  const allProducts = getProducts();
  const categoryProducts = allProducts.filter(p => p.category === category.id || p.category === category.slug);

  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <a href="#/shop">Shop</a>
          <span class="separator">/</span>
          <span class="current">${escapeHtml(category.name)}</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">${escapeHtml(category.name)}</h1>
        <p class="section-subtitle">
          ${escapeHtml(category.description)}
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <!-- Category Navigation Bar -->
        <div style="display: flex; gap: 0.75rem; overflow-x: auto; padding-bottom: 1rem; margin-bottom: 2.5rem;">
          ${categories.map(cat => `
            <a 
              href="#/category?slug=${encodeURIComponent(cat.slug || cat.id)}"
              class="btn ${cat.id === category.id ? 'btn-navy' : 'btn-outline'} btn-sm"
              style="white-space: nowrap;"
            >
              ${escapeHtml(cat.name)}
            </a>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <div style="font-size: 0.95rem; color: var(--color-text-muted);">
            Showing <strong>${categoryProducts.length}</strong> items in ${escapeHtml(category.name)}
          </div>
          <a href="#/bulk-enquiry?category=${encodeURIComponent(category.name)}" class="btn btn-outline btn-sm">
            Request Category Bulk Quote
          </a>
        </div>

        <div class="products-grid">
          ${categoryProducts.map(p => renderProductCard(p)).join('')}
        </div>
      </div>
    </section>
  `;
}
