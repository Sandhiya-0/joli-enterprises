// Client-side Hash Router for Joli Enterprises Wholesale E-Commerce
// Multi-page routing architecture: each navigation bar item maps to its own separate full page

import { renderHomeView, initHomeViewEvents } from './views/homeView.js';
import { renderAboutView } from './views/aboutView.js';
import { renderFounderView, initFounderViewEvents } from './views/founderView.js';
import { renderCategoriesView } from './views/categoriesView.js';
import { renderProductsView, initProductsViewEvents } from './views/productsView.js';
import { renderShopView, initShopViewEvents } from './views/shopView.js';
import { renderBulkDealsView, initBulkDealsViewEvents } from './views/bulkDealsView.js';
import { renderCombosView, initCombosViewEvents } from './views/combosView.js';
import { renderContactView, initContactViewEvents } from './views/contactView.js';
import { renderOwnProductsView, initOwnProductsViewEvents } from './views/ownProductsView.js';
import { renderReviewsView, initReviewsViewEvents } from './views/reviewsView.js';
import { renderFaqView, initFaqViewEvents } from './views/faqView.js';
import { renderCategoryView } from './views/categoryView.js';
import { renderProductDetailView, initProductDetailViewEvents } from './views/productDetailView.js';
import { renderCartView, initCartViewEvents } from './views/cartView.js';
import { renderCheckoutView, initCheckoutViewEvents } from './views/checkoutView.js';
import { renderBulkEnquiryView, initBulkEnquiryViewEvents } from './views/bulkEnquiryView.js';

import { addToCart, updateCartBadge } from './utils/cart.js';
import { getProductById } from '../data/products.js';

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', () => {
    updateCartBadge();
    handleRoute();
  });

  // Global event delegation for interactive elements
  document.addEventListener('click', (e) => {
    // 1. Navigation items (HOME, ABOUT, FOUNDER, CATEGORIES, PRODUCTS, BULK DEALS, COMBOS, CONTACT, ENQUIRY)
    const navLink = e.target.closest('.nav-link, .mobile-drawer-link, #brand-logo-link, .btn-header-enquire');
    if (navLink) {
      closeMobileDrawer();
      closeAllHeaderModals();
      const route = navLink.getAttribute('data-route') || (navLink.getAttribute('href') || '').replace('#/', '');
      if (route === 'founder') {
        setTimeout(() => {
          initFounderViewEvents();
        }, 50);
      }
      return;
    }

    // 2. Landing page hero scroll cue
    const scrollCue = e.target.closest('.hero-scroll-cue');
    if (scrollCue) {
      e.preventDefault();
      const comboSec = document.getElementById('combos');
      if (comboSec) {
        comboSec.scrollIntoView({ behavior: 'smooth' });
      } else {
        const aboutSec = document.getElementById('about');
        if (aboutSec) {
          aboutSec.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = '#/combos';
        }
      }
      return;
    }

    // 3. Global "+ Cart" quick-add buttons
    const addCartBtn = e.target.closest('.btn-card-add-cart');
    if (addCartBtn) {
      e.preventDefault();
      e.stopPropagation();
      const prodId = addCartBtn.getAttribute('data-product-id');
      const product = getProductById(prodId);
      if (product) {
        addToCart(product.id);
        showCartToastFeedback(`Added MOQ of ${product.moq} units (${product.name}) to wholesale cart!`);
      }
    }
  });

  // Initial badge update
  updateCartBadge();
}

function parseHash() {
  const rawHash = window.location.hash.slice(1) || '/';
  const [pathPart, queryPart] = rawHash.split('?');

  const path = pathPart.startsWith('/') ? pathPart : '/' + pathPart;
  const queryParams = {};

  if (queryPart) {
    const searchParams = new URLSearchParams(queryPart);
    for (const [key, val] of searchParams.entries()) {
      queryParams[key] = val;
    }
  }

  return { path, queryParams };
}

function handleRoute() {
  const { path, queryParams } = parseHash();
  const appContent = document.getElementById('app-content');
  if (!appContent) return;

  // Close mobile navigation drawer if open
  closeMobileDrawer();

  // Close search and account modals if open
  closeAllHeaderModals();

  // Clean path string (e.g. '/about' -> 'about', '/home' -> 'home')
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const isLanding = (cleanPath === '' || cleanPath === 'home');
  document.body.classList.toggle('is-landing-page', isLanding);
  window.dispatchEvent(new CustomEvent('routechange', { detail: { isLanding, cleanPath } }));

  // Route to the appropriate distinct page view
  switch (cleanPath) {
    case '':
    case 'home':
      // 1. HOME: Full Landing Page
      appContent.innerHTML = renderHomeView();
      initHomeViewEvents();
      setActiveNav('home');
      break;

    case 'about':
      // 2. ABOUT: Dedicated About Us Page
      appContent.innerHTML = renderAboutView();
      setActiveNav('about');
      break;

    case 'founder':
      // 3. FOUNDER: Dedicated Founder & Leadership Page
      appContent.innerHTML = renderFounderView();
      initFounderViewEvents();
      setActiveNav('founder');
      break;

    case 'categories':
      // 4. CATEGORIES: Dedicated Categories Overview Page
      appContent.innerHTML = renderCategoriesView();
      setActiveNav('categories');
      break;

    case 'products':
    case 'shop':
      // Product page removed per user request — redirect to categories
      window.location.hash = '#/categories';
      break;

    case 'shop':
      // Standalone Shop view
      appContent.innerHTML = renderShopView(queryParams);
      initShopViewEvents();
      setActiveNav('products');
      break;

    case 'bulk-deals':
      // 6. BULK DEALS: Dedicated Bulk Deals Page
      appContent.innerHTML = renderBulkDealsView();
      initBulkDealsViewEvents();
      setActiveNav('bulk-deals');
      break;

    case 'combos':
      // 7. COMBOS: Dedicated Combos & Kits Page
      appContent.innerHTML = renderCombosView();
      initCombosViewEvents();
      setActiveNav('combos');
      break;

    case 'contact':
      // 8. CONTACT: Dedicated Contact Us Page
      appContent.innerHTML = renderContactView(queryParams);
      initContactViewEvents();
      setActiveNav('contact');
      break;

    case 'own-products':
      // 9. OWN PRODUCTS: Nivox In-House Manufactured & Branded Merchandise
      appContent.innerHTML = renderOwnProductsView();
      initOwnProductsViewEvents();
      setActiveNav('own-products');
      break;

    case 'reviews':
      // 10. REVIEWS: Verified Wholesale Retailer Experiences
      appContent.innerHTML = renderReviewsView();
      initReviewsViewEvents();
      setActiveNav('reviews');
      break;

    case 'faq':
      // 11. FAQ: Wholesale Trade Desk Frequently Asked Questions
      appContent.innerHTML = renderFaqView();
      initFaqViewEvents();
      setActiveNav('faq');
      break;

    case 'category':
      // Category drilldown page
      appContent.innerHTML = renderCategoryView(queryParams);
      setActiveNav('categories');
      break;

    case 'product':
      // Individual product detail page
      appContent.innerHTML = renderProductDetailView(queryParams);
      initProductDetailViewEvents();
      setActiveNav('products');
      break;

    case 'cart':
      // Wholesale shopping cart
      appContent.innerHTML = renderCartView();
      initCartViewEvents();
      setActiveNav('cart');
      break;

    case 'checkout':
      // Checkout process
      appContent.innerHTML = renderCheckoutView();
      initCheckoutViewEvents();
      setActiveNav('cart');
      break;

    case 'bulk-enquiry':
      // Dedicated bulk quotation form
      appContent.innerHTML = renderBulkEnquiryView(queryParams);
      initBulkEnquiryViewEvents();
      setActiveNav('contact');
      break;

    default:
      // Fallback: render Home Page
      appContent.innerHTML = renderHomeView();
      initHomeViewEvents();
      setActiveNav('home');
      break;
  }

  // Scroll to top on every page change for an authentic multi-page experience
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update cart badge across all navigation
  updateCartBadge();

  // Trigger animations for in-view elements
  setupScrollAnimations();
}

function setActiveNav(routeKey) {
  // Desktop navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-route') === routeKey) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mobile navigation drawer links
  document.querySelectorAll('.mobile-drawer-link').forEach(link => {
    if (link.getAttribute('data-route') === routeKey) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function closeAllHeaderModals() {
  const searchModal = document.getElementById('search-overlay-modal');
  const accountModal = document.getElementById('account-info-modal');
  if (searchModal) searchModal.classList.remove('open');
  if (accountModal) accountModal.classList.remove('open');
}

function showCartToastFeedback(message) {
  const toast = document.getElementById('cart-toast');
  const msgEl = document.getElementById('toast-message');
  if (toast && msgEl) {
    msgEl.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

function setupScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  document.querySelectorAll('.fade-up:not(.in-view)').forEach(el => {
    observer.observe(el);
  });
}
