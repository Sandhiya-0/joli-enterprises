// Main Application Entry Point

import { initRouter } from './scripts/router.js';
import { initEnquiryModal } from './scripts/components/modal.js';
import { getProducts } from './data/products.js';
import { formatINR } from './scripts/utils/cart.js';
import { escapeHtml } from './scripts/components/productCard.js';

function initApp() {
  // Initialize Header Scroll Dynamics (Full-frame Landing Page: hidden at top, pops up on scroll)
  const header = document.getElementById('site-header');

  function updateHeaderState() {
    const scrollY = window.scrollY;
    const isLanding = document.body.classList.contains('is-landing-page');

    if (isLanding) {
      if (scrollY > 60) {
        header?.classList.add('is-visible');
      } else {
        header?.classList.remove('is-visible');
      }
    } else {
      header?.classList.add('is-visible');
    }

    if (scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  window.addEventListener('routechange', updateHeaderState);
  window.addEventListener('hashchange', () => {
    setTimeout(updateHeaderState, 15);
  });
  updateHeaderState();

  // Initialize Mobile Drawer Navigation
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileClose = document.getElementById('mobile-drawer-close');

  function openDrawer() {
    mobileDrawer?.classList.add('open');
    mobileBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('open');
    mobileBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', openDrawer);
  mobileClose?.addEventListener('click', closeDrawer);
  mobileBackdrop?.addEventListener('click', closeDrawer);

  // Close drawer on link click
  mobileDrawer?.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ========================================================
  // Right Corner Search Icon Circle & Overlay Modal
  // ========================================================
  const searchBtn = document.getElementById('btn-header-search');
  const searchOverlay = document.getElementById('search-overlay-modal');
  const searchInput = document.getElementById('overlay-search-input');
  const searchResults = document.getElementById('search-overlay-results');
  const closeSearchBtn = document.getElementById('close-search-overlay');

  function openSearchOverlay() {
    searchOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      searchInput?.focus();
      renderSearchResults(searchInput?.value || '');
    }, 100);
  }

  function closeSearchOverlay() {
    searchOverlay?.classList.remove('open');
    document.body.style.overflow = '';
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
  }

  searchBtn?.addEventListener('click', openSearchOverlay);
  closeSearchBtn?.addEventListener('click', closeSearchOverlay);

  // Close search on backdrop click
  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      closeSearchOverlay();
    }
  });

  function renderSearchResults(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    const products = getProducts();

    if (!q) {
      searchResults.innerHTML = `
        <div style="padding: 1rem 0; font-size: 0.85rem; color: var(--color-text-muted);">
          Suggested searches: <em>pencils</em>, <em>notebooks</em>, <em>claw clips</em>, <em>cables</em>, <em>hooks</em>, <em>combos</em>...
        </div>
      `;
      return;
    }

    const matches = products.filter(p => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchCat = (p.categoryName || '').toLowerCase().includes(q);
      const matchSku = (p.sku || '').toLowerCase().includes(q);
      const matchDesc = (p.shortDescription || '').toLowerCase().includes(q);
      return matchName || matchCat || matchSku || matchDesc;
    }).slice(0, 6);

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div style="padding: 1.5rem 0; text-align: center; color: var(--color-text-muted); font-size: 0.9rem;">
          No matching wholesale products found for "<strong>${escapeHtml(q)}</strong>".
          <div style="margin-top: 0.5rem;">
            <a href="#/shop" style="color: var(--color-gold); font-weight: 700;">Browse All Products &rarr;</a>
          </div>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.map(p => `
      <a href="#/product?id=${encodeURIComponent(p.id)}" class="search-result-item" data-search-item>
        <img src="${escapeHtml(p.images[0])}" alt="${escapeHtml(p.name)}" class="search-result-thumb">
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 700; color: var(--color-navy); font-size: 0.925rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${escapeHtml(p.name)}
          </div>
          <div style="font-size: 0.785rem; color: var(--color-text-muted);">
            ${escapeHtml(p.categoryName)} &bull; MOQ: ${p.moq} pcs &bull; <code>${escapeHtml(p.sku)}</code>
          </div>
        </div>
        <div style="font-weight: 800; color: var(--color-navy); font-size: 0.925rem; flex-shrink: 0;">
          ${formatINR(p.unitPrice)}
        </div>
      </a>
    `).join('') + `
      <div style="margin-top: 1rem; padding-top: 0.75rem; text-align: center;">
        <a href="#/shop?search=${encodeURIComponent(q)}" class="btn btn-primary btn-block btn-sm">
          <span>View All Results in Shop (${matches.length}+) &rarr;</span>
        </a>
      </div>
    `;

    // Click handler to close overlay on result click
    searchResults.querySelectorAll('[data-search-item]').forEach(el => {
      el.addEventListener('click', closeSearchOverlay);
    });
  }

  searchInput?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const q = searchInput.value.trim();
      if (q) {
        window.location.hash = `#/shop?search=${encodeURIComponent(q)}`;
        closeSearchOverlay();
      }
    }
  });

  // ========================================================
  // Right Corner Account Icon Circle & Modal
  // ========================================================
  const accountBtn = document.getElementById('btn-header-account');
  const accountModal = document.getElementById('account-info-modal');
  const closeAccountBtn = document.getElementById('close-account-modal');
  const accountBackdrop = document.getElementById('account-modal-backdrop');
  const accountViewCartBtn = document.getElementById('btn-account-view-cart');
  const accountBulkQuoteBtn = document.getElementById('btn-account-bulk-quote');

  function openAccountModal() {
    accountModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAccountModal() {
    accountModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  accountBtn?.addEventListener('click', openAccountModal);
  closeAccountBtn?.addEventListener('click', closeAccountModal);
  accountBackdrop?.addEventListener('click', closeAccountModal);
  accountViewCartBtn?.addEventListener('click', closeAccountModal);
  accountBulkQuoteBtn?.addEventListener('click', closeAccountModal);

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (searchOverlay?.classList.contains('open')) closeSearchOverlay();
      if (accountModal?.classList.contains('open')) closeAccountModal();
      if (mobileDrawer?.classList.contains('open')) closeDrawer();
    }
  });

  // Initialize Quick Enquiry Modal
  initEnquiryModal();

  // Initialize Client-side Router
  initRouter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
