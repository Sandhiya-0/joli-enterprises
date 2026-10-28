// Page: Shop View — Wholesale Product Discovery
import { getCategories, getProducts } from '../../data/products.js';
import { renderProductCard, escapeHtml } from '../components/productCard.js';

let selectedCategories = [];
let searchQuery = '';
let selectedSort = 'featured';
let comboOnly = false;
let inStockOnly = false;

export function renderShopView(queryParams = {}) {
  const categories = getCategories();
  
  if (queryParams.search) {
    searchQuery = queryParams.search.trim().toLowerCase();
  } else if (!queryParams.keepSearch) {
    searchQuery = '';
  }

  if (queryParams.category) {
    selectedCategories = [queryParams.category];
  } else {
    selectedCategories = [];
  }

  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Shop Wholesale</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Wholesale Product Catalogue</h1>
        <p class="section-subtitle">
          Browse our complete range of everyday merchandise, stationery, household goods, accessories, and combo packs.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="shop-layout">
          <!-- Filter Sidebar -->
          <aside class="filter-sidebar">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
              <h3 style="font-size: 1.1rem; color: var(--color-navy);">Filters</h3>
              <button type="button" id="btn-clear-filters" style="background: none; border: none; font-size: 0.8rem; color: var(--color-gold-hover); font-weight: 700; cursor: pointer;">
                Reset All
              </button>
            </div>

            <!-- Categories Filter -->
            <div class="filter-group">
              <h4 class="filter-group-title">Categories</h4>
              <div id="filter-categories-list">
                ${categories.map(cat => `
                  <label class="filter-checkbox-label">
                    <input 
                      type="checkbox" 
                      class="category-filter-checkbox" 
                      value="${escapeHtml(cat.id)}"
                      ${selectedCategories.includes(cat.id) ? 'checked' : ''}
                    >
                    <span>${escapeHtml(cat.name)}</span>
                  </label>
                `).join('')}
              </div>
            </div>

            <!-- Special Product Types -->
            <div class="filter-group">
              <h4 class="filter-group-title">Product Types</h4>
              <label class="filter-checkbox-label">
                <input type="checkbox" id="filter-combo-checkbox" ${comboOnly ? 'checked' : ''}>
                <span>Wholesale Combo Kits Only</span>
              </label>
              <label class="filter-checkbox-label">
                <input type="checkbox" id="filter-instock-checkbox" ${inStockOnly ? 'checked' : ''}>
                <span>In Stock Ready to Dispatch</span>
              </label>
            </div>
          </aside>

          <!-- Main Shop Content Area -->
          <div>
            <!-- Toolbar -->
            <div class="shop-toolbar">
              <div style="font-size: 0.925rem; color: var(--color-text-muted);" id="shop-results-count">
                Showing wholesale products
              </div>

              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <label for="shop-sort-select" style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 600;">Sort By:</label>
                <select id="shop-sort-select" class="sort-select">
                  <option value="featured" ${selectedSort === 'featured' ? 'selected' : ''}>Featured Products</option>
                  <option value="price-asc" ${selectedSort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
                  <option value="price-desc" ${selectedSort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
                  <option value="name-asc" ${selectedSort === 'name-asc' ? 'selected' : ''}>Name: A to Z</option>
                  <option value="moq-asc" ${selectedSort === 'moq-asc' ? 'selected' : ''}>MOQ: Low to High</option>
                </select>
              </div>
            </div>

            <!-- Live Products Grid Container -->
            <div id="shop-grid-container">
              <!-- Populated by updateShopGrid() -->
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initShopViewEvents() {
  const categoryCheckboxes = document.querySelectorAll('.category-filter-checkbox');
  const comboCheckbox = document.getElementById('filter-combo-checkbox');
  const inStockCheckbox = document.getElementById('filter-instock-checkbox');
  const sortSelect = document.getElementById('shop-sort-select');
  const clearBtn = document.getElementById('btn-clear-filters');

  categoryCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      selectedCategories = Array.from(document.querySelectorAll('.category-filter-checkbox:checked')).map(el => el.value);
      updateShopGrid();
    });
  });

  comboCheckbox?.addEventListener('change', (e) => {
    comboOnly = e.target.checked;
    updateShopGrid();
  });

  inStockCheckbox?.addEventListener('change', (e) => {
    inStockOnly = e.target.checked;
    updateShopGrid();
  });

  sortSelect?.addEventListener('change', (e) => {
    selectedSort = e.target.value;
    updateShopGrid();
  });

  clearBtn?.addEventListener('click', () => {
    selectedCategories = [];
    searchQuery = '';
    comboOnly = false;
    inStockOnly = false;
    selectedSort = 'featured';

    categoryCheckboxes.forEach(cb => cb.checked = false);
    if (comboCheckbox) comboCheckbox.checked = false;
    if (inStockCheckbox) inStockCheckbox.checked = false;
    if (sortSelect) sortSelect.value = 'featured';

    updateShopGrid();
  });

  updateShopGrid();
}

export function setShopSearchQuery(query) {
  searchQuery = (query || '').trim().toLowerCase();
  updateShopGrid();
}

function updateShopGrid() {
  const gridContainer = document.getElementById('shop-grid-container');
  const countText = document.getElementById('shop-results-count');
  if (!gridContainer) return;

  const allProducts = getProducts();

  let filtered = allProducts.filter(product => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }

    // Combo filter
    if (comboOnly && !product.isCombo) {
      return false;
    }

    // In stock filter
    if (inStockOnly && !product.inStock) {
      return false;
    }

    // Search query
    if (searchQuery) {
      const q = searchQuery;
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.shortDescription.toLowerCase().includes(q);
      const matchCat = product.categoryName.toLowerCase().includes(q);
      const matchSku = (product.sku || '').toLowerCase().includes(q);
      const matchSub = (product.subcategory || '').toLowerCase().includes(q);

      if (!matchName && !matchDesc && !matchCat && !matchSku && !matchSub) {
        return false;
      }
    }

    return true;
  });

  // Sorting
  if (selectedSort === 'price-asc') {
    filtered.sort((a, b) => a.unitPrice - b.unitPrice);
  } else if (selectedSort === 'price-desc') {
    filtered.sort((a, b) => b.unitPrice - a.unitPrice);
  } else if (selectedSort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === 'moq-asc') {
    filtered.sort((a, b) => (a.moq || 0) - (b.moq || 0));
  } else {
    // Featured first
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  if (countText) {
    countText.innerHTML = `Showing <strong>${filtered.length}</strong> of ${allProducts.length} wholesale products`;
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
        <h3 class="empty-state-title">No Matching Products Found</h3>
        <p class="empty-state-desc">
          We couldn't find any wholesale items matching your current filters. Try unchecking some categories or reset your search.
        </p>
        <button type="button" class="btn btn-primary" id="btn-empty-reset">
          <span>Reset All Filters</span>
        </button>
      </div>
    `;

    document.getElementById('btn-empty-reset')?.addEventListener('click', () => {
      document.getElementById('btn-clear-filters')?.click();
    });
    return;
  }

  gridContainer.innerHTML = `
    <div class="products-grid">
      ${filtered.map(p => renderProductCard(p)).join('')}
    </div>
  `;
}
