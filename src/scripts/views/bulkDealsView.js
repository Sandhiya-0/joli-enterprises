// Page: Bulk Deals View — Exact Match to Reference Design (Master Carton Volume Specials)
import { getProducts } from '../../data/products.js';
import { renderBulkFlipCard, initFlipCards } from '../components/flipCard.js';

let activeCategoryFilter = 'all';
let currentSearchQuery = '';

export function initBulkDealsViewEvents() {
  initFlipCards();

  const container = document.getElementById('bulk-products-container');
  const tabs = document.querySelectorAll('.bulk-tab-btn');
  const searchInput = document.getElementById('bulk-search-input');

  const updateGrid = () => {
    if (!container) return;
    const allProducts = getProducts();
    const volumeDeals = allProducts.filter(p => p.cartonQuantity && p.cartonQuantity >= 200 && !p.isCombo);

    let filtered = volumeDeals;

    if (activeCategoryFilter !== 'all') {
      filtered = filtered.filter(p => {
        if (activeCategoryFilter === 'stationery') return p.category === 'stationery';
        if (activeCategoryFilter === 'household') return p.category === 'household';
        if (activeCategoryFilter === 'mobile-accessories') return p.category === 'mobile-accessories';
        if (activeCategoryFilter === 'daily-essentials') return p.category === 'household' || p.category === 'stationery';
        return true;
      });
    }

    if (currentSearchQuery.trim()) {
      const q = currentSearchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) ||
        (p.categoryName && p.categoryName.toLowerCase().includes(q)) ||
        (p.sku && p.sku.toLowerCase().includes(q))
      );
    }

    // Default to top 4 products if 'all' and no search to match Image 1
    const displayList = (!currentSearchQuery.trim() && activeCategoryFilter === 'all')
      ? filtered.slice(0, 4)
      : filtered;

    if (displayList.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: #64748b;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; display: block; opacity: 0.5;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <h3 style="font-size: 1.25rem; color: #0f172a; margin-bottom: 0.5rem;">No volume deals found</h3>
          <p>Try searching for a different product or select 'All Products'.</p>
        </div>
      `;
    } else {
      container.innerHTML = displayList.map(p => renderBulkFlipCard(p)).join('');
      initFlipCards();
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategoryFilter = tab.getAttribute('data-filter') || 'all';
      updateGrid();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      updateGrid();
    });
  }
}

export function renderBulkDealsView() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const allProducts = getProducts();
  const volumeDeals = allProducts.filter(p => p.cartonQuantity && p.cartonQuantity >= 200 && !p.isCombo);
  const featuredVolumeDeals = volumeDeals.slice(0, 4);

  return `
    <div class="bulk-page-wrapper">
      <!-- Master Carton Hero Header matching Image 1 -->
      <section class="bulk-hero-header">
        <div class="container bulk-hero-container">
          <div class="bulk-hero-content">
            <div class="bulk-eyebrow">
              <span class="bulk-eyebrow-dash">—</span> MASTER CARTON
            </div>
            <h1 class="bulk-hero-title">Volume <span class="highlight-blue">Specials</span></h1>
          </div>

          <div class="bulk-hero-visual">
            <div class="bulk-hero-art-box">
              <img src="${baseUrl}images/carton-header-scene.jpg" alt="Master carton warehouse stock" class="bulk-hero-art-img" />
              
              <!-- Floating Glassmorphic Pill Badge: Buy in Bulk / Save More -->
              <a href="#/bulk-enquiry" class="bulk-hero-float-pill" aria-label="Buy in Bulk Save More">
                <div class="float-pill-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div class="float-pill-text">
                  <span class="float-pill-line1">Buy in Bulk</span>
                  <span class="float-pill-line2">Save More</span>
                </div>
                <div class="float-pill-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Master Carton Catalogue Section -->
      <section class="bulk-content-section">
        <div class="container">
          <!-- Category Tabs & Search Bar Row matching Image 1 -->
          <div class="bulk-toolbar-row">
            <div class="bulk-category-tabs">
              <button type="button" class="bulk-tab-btn active" data-filter="all">
                <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                  <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                  <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                  <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                </svg>
                <span>All Products</span>
              </button>

              <button type="button" class="bulk-tab-btn" data-filter="stationery">
                <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
                <span>Stationery</span>
              </button>

              <button type="button" class="bulk-tab-btn" data-filter="household">
                <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Household</span>
              </button>

              <button type="button" class="bulk-tab-btn" data-filter="mobile-accessories">
                <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                <span>Mobile Accessories</span>
              </button>

              <button type="button" class="bulk-tab-btn" data-filter="daily-essentials">
                <svg class="tab-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span>Daily Essentials</span>
              </button>
            </div>

            <div class="bulk-toolbar-actions">
              <div class="bulk-search-field">
                <svg class="search-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" id="bulk-search-input" class="bulk-search-control" placeholder="Search products, categories..." />
              </div>

              <a href="#/bulk-enquiry" class="btn-quote-container">
                <span>Request Container Quote</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <!-- Product Cards Grid: 4 Cards matching Image 1 with 3D FlipCard effect -->
          <div class="products-grid flip-cards-grid bulk-cards-layout" id="bulk-products-container">
            ${featuredVolumeDeals.map(p => renderBulkFlipCard(p)).join('')}
          </div>

          <!-- Dual Bottom Banners matching Image 1 -->
          <div class="bulk-dual-bottom-row">
            <!-- Left Card: Quantity-Based Wholesale Price Tiers with Carton Art -->
            <div class="tiers-summary-card">
              <div class="tiers-card-text">
                <h3 class="tiers-card-heading">Quantity-Based <span class="highlight-cyan">Wholesale Price Tiers</span></h3>
                <p class="tiers-card-description">
                  Save up to 35% on master carton lots with guaranteed piece counts, formal GST tax invoices, and insured 24h express dispatch.
                </p>
                <a href="#/bulk-enquiry" class="btn-price-list-request">
                  <span>Request Volume Price List</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

              <div class="tiers-card-visual">
                <img src="${baseUrl}images/carton-pallet-isolated.jpg" alt="Master carton pallet lots" class="tiers-pallet-graphic" />
              </div>
            </div>

            <!-- Right Card: Why Buy in Master Cartons? (2x2 Grid) -->
            <div class="why-master-card">
              <h3 class="why-master-title">Why Buy in Master Cartons?</h3>
              <div class="why-master-grid">
                <!-- 1 -->
                <div class="why-feature-cell">
                  <div class="feature-icon-circle circle-blue">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                      <line x1="7" y1="7" x2="7.01" y2="7"></line>
                    </svg>
                  </div>
                  <div class="feature-info">
                    <div class="feature-name">Lower Unit Price</div>
                    <div class="feature-sub">Save up to 35%</div>
                  </div>
                </div>

                <!-- 2 -->
                <div class="why-feature-cell">
                  <div class="feature-icon-circle circle-purple">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div class="feature-info">
                    <div class="feature-name">Guaranteed Quantity</div>
                    <div class="feature-sub">Factory packed lots</div>
                  </div>
                </div>

                <!-- 3 -->
                <div class="why-feature-cell">
                  <div class="feature-icon-circle circle-cyan">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div class="feature-info">
                    <div class="feature-name">GST Invoices</div>
                    <div class="feature-sub">For business purchases</div>
                  </div>
                </div>

                <!-- 4 -->
                <div class="why-feature-cell">
                  <div class="feature-icon-circle circle-brightblue">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                  </div>
                  <div class="feature-info">
                    <div class="feature-name">Fast Dispatch</div>
                    <div class="feature-sub">Pan India delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
