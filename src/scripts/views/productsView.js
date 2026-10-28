// Page 3: Products & Categories View

import { getCategories, getProducts } from '../../data/products.js';
const categories = getCategories();
const products = getProducts();
import { renderProductCard, escapeHtml } from '../components/productCard.js';

let currentCategory = 'all';
let currentSubcategory = 'all';
let searchQuery = '';

export function renderProductsView(queryParams = {}) {
  // Read initial query params
  if (queryParams.category) {
    currentCategory = queryParams.category;
  } else {
    currentCategory = 'all';
  }
  currentSubcategory = 'all';
  searchQuery = queryParams.search || '';

  const activeCategoryObj = categories.find(c => c.id === currentCategory);
  const subcategories = activeCategoryObj ? activeCategoryObj.subcategories : [];

  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Product Catalogue</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Architectural Systems and Hardware Catalogue</h1>
        <p class="section-subtitle">
          Explore our complete range of architectural products, filter by division or search for specific specifications.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <!-- Catalogue Filter & Search Toolbar -->
        <div class="catalogue-toolbar">
          <div class="catalogue-search-row">
            <div class="search-input-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input 
                type="text" 
                id="catalogue-search-input" 
                class="search-input" 
                placeholder="Search products by title, material, or application..."
                value="${escapeHtml(searchQuery)}"
              >
            </div>

            <!-- Category Pills -->
            <div class="category-filter-pills" id="category-pills">
              <button 
                type="button" 
                class="filter-pill ${currentCategory === 'all' ? 'active' : ''}" 
                data-category="all"
              >
                All Divisions
              </button>
              ${categories.map(cat => `
                <button 
                  type="button" 
                  class="filter-pill ${currentCategory === cat.id ? 'active' : ''}" 
                  data-category="${escapeHtml(cat.id)}"
                >
                  ${escapeHtml(cat.name)}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Subcategory Filters -->
          <div class="subcategory-row" id="subcategory-row" style="${subcategories.length ? '' : 'display: none;'}">
            <span class="subcategory-label">Subcategory:</span>
            <div id="subcategory-pills" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              ${renderSubcategoryPillsHtml(subcategories, currentSubcategory)}
            </div>
          </div>
        </div>

        <!-- Catalogue Metadata -->
        <div class="catalogue-meta-row">
          <div id="catalogue-count-text">Showing products</div>
        </div>

        <!-- Dynamic Product Grid Container -->
        <div id="catalogue-grid-container">
          <!-- Populated by updateCatalogueGrid() -->
        </div>
      </div>
    </section>
  `;
}

function renderSubcategoryPillsHtml(subcategories, activeSub) {
  if (!subcategories || subcategories.length === 0) return '';
  return subcategories.map(sub => {
    const isAll = sub.startsWith('All ');
    const subVal = isAll ? 'all' : sub;
    const isActive = activeSub === subVal || (activeSub === 'all' && isAll);
    return `
      <button 
        type="button" 
        class="subfilter-pill ${isActive ? 'active' : ''}" 
        data-subcategory="${escapeHtml(subVal)}"
      >
        ${escapeHtml(sub)}
      </button>
    `;
  }).join('');
}

export function initProductsViewEvents() {
  const searchInput = document.getElementById('catalogue-search-input');
  const categoryPillsContainer = document.getElementById('category-pills');
  const subcategoryPillsContainer = document.getElementById('subcategory-pills');

  // Live Search handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      updateCatalogueGrid();
    });
  }

  // Category Pills handler
  if (categoryPillsContainer) {
    categoryPillsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-category]');
      if (!btn) return;

      currentCategory = btn.getAttribute('data-category');
      currentSubcategory = 'all';

      // Update active styling
      categoryPillsContainer.querySelectorAll('.filter-pill').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');

      // Update subcategories toolbar
      const subRow = document.getElementById('subcategory-row');
      const subContainer = document.getElementById('subcategory-pills');
      const activeCategoryObj = categories.find(c => c.id === currentCategory);

      if (activeCategoryObj && activeCategoryObj.subcategories.length > 0) {
        subRow.style.display = 'flex';
        subContainer.innerHTML = renderSubcategoryPillsHtml(activeCategoryObj.subcategories, 'all');
      } else {
        subRow.style.display = 'none';
        subContainer.innerHTML = '';
      }

      updateCatalogueGrid();
    });
  }

  // Subcategory Pills handler
  const subRow = document.getElementById('subcategory-row');
  if (subRow) {
    subRow.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-subcategory]');
      if (!btn) return;

      currentSubcategory = btn.getAttribute('data-subcategory');
      subRow.querySelectorAll('.subfilter-pill').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');

      updateCatalogueGrid();
    });
  }

  // Initial Grid render
  updateCatalogueGrid();
}

function updateCatalogueGrid() {
  const gridContainer = document.getElementById('catalogue-grid-container');
  const countText = document.getElementById('catalogue-count-text');
  if (!gridContainer) return;

  // Filter products
  const filtered = products.filter(product => {
    if (currentCategory !== 'all' && product.category !== currentCategory) {
      return false;
    }

    if (currentSubcategory !== 'all' && product.subcategory !== currentSubcategory) {
      return false;
    }

    if (searchQuery) {
      const matchName = product.name.toLowerCase().includes(searchQuery);
      const matchDesc = product.shortDescription.toLowerCase().includes(searchQuery) || product.fullDescription.toLowerCase().includes(searchQuery);
      const matchCat = product.categoryName.toLowerCase().includes(searchQuery);
      const matchSub = product.subcategory.toLowerCase().includes(searchQuery);
      const matchSpecs = product.specifications.some(s => 
        s.label.toLowerCase().includes(searchQuery) || s.value.toLowerCase().includes(searchQuery)
      );

      if (!matchName && !matchDesc && !matchCat && !matchSub && !matchSpecs) {
        return false;
      }
    }

    return true;
  });

  // Update count text
  if (countText) {
    countText.innerHTML = `Showing <strong>${filtered.length}</strong> of ${products.length} products`;
  }

  // Handle Empty State
  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
        <h3 class="empty-state-title">No Matching Products Found</h3>
        <p class="empty-state-desc">
          We could not find any architectural items matching your current filters or search term. Try adjusting your query or reset filters.
        </p>
        <button type="button" class="btn btn-primary" id="btn-reset-filters">
          <span>Reset All Filters</span>
        </button>
      </div>
    `;

    // Hook up reset button
    const resetBtn = document.getElementById('btn-reset-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentCategory = 'all';
        currentSubcategory = 'all';
        searchQuery = '';
        const searchInput = document.getElementById('catalogue-search-input');
        if (searchInput) searchInput.value = '';

        const categoryPillsContainer = document.getElementById('category-pills');
        categoryPillsContainer?.querySelectorAll('.filter-pill').forEach(el => {
          if (el.getAttribute('data-category') === 'all') el.classList.add('active');
          else el.classList.remove('active');
        });

        const subRow = document.getElementById('subcategory-row');
        if (subRow) subRow.style.display = 'none';

        updateCatalogueGrid();
      });
    }
    return;
  }

  // Render Grid
  gridContainer.innerHTML = `
    <div class="products-grid">
      ${filtered.map(product => renderProductCard(product)).join('')}
    </div>
  `;
}
