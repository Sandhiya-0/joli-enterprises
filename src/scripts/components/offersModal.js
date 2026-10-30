// Component: Special Offers Popup Modal (Reference: Tharun Website screen recording & user offer banner)
// Trigger: Automatically pops up at center of screen when scrolling into the Combos section or entering the Combos page

let offersModalInitialized = false;
let hasTriggeredInCurrentScroll = false;
let combosObserver = null;

export function initOffersModal() {
  if (offersModalInitialized && document.getElementById('offers-popup-modal')) {
    return;
  }

  const baseUrl = import.meta.env.BASE_URL || '/';

  // If modal doesn't exist in DOM, create and append to document.body
  let modalEl = document.getElementById('offers-popup-modal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'offers-popup-modal';
    modalEl.className = 'offers-popup-modal';
    modalEl.setAttribute('role', 'dialog');
    modalEl.setAttribute('aria-modal', 'true');
    modalEl.setAttribute('aria-label', 'Special Wholesale Offers');
    modalEl.innerHTML = `
      <div class="offers-modal-backdrop" id="offers-modal-backdrop"></div>
      <div class="offers-modal-card" id="offers-modal-card">
        <!-- Circular Crimson Red Close Button matching Tharun Website -->
        <button type="button" class="offers-modal-close-btn" id="offers-modal-close-btn" aria-label="Close Special Offers">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="offers-modal-banner-wrap">
          <img 
            src="${baseUrl}images/offers-popup-banner.png" 
            alt="Wholesale Special Offers: Bulk Offer (Up to 35% Off), Combo Offer (Up to 25% Off), Individual Offer (Special Price)" 
            class="offers-modal-banner-img"
          />

          <!-- Interactive Hotspot Click Targets for the 3 Offer Cards -->
          <div class="offers-modal-hotspots" aria-label="Offer Card Quick Links">
            <!-- 1. Bulk Offer -> Bulk Deals / Enquiry -->
            <a href="#/bulk-deals" class="offers-hotspot hotspot-bulk" title="View Bulk Offers" aria-label="View Bulk Offers">
              <span class="hotspot-accessible-text">View Bulk Offers</span>
            </a>

            <!-- 2. Combo Offer -> Combos & Kits -->
            <a href="#/combos" class="offers-hotspot hotspot-combo" title="View Combo Offers" aria-label="View Combo Offers">
              <span class="hotspot-accessible-text">View Combo Offers</span>
            </a>

            <!-- 3. Individual Offer -> Categories / Products -->
            <a href="#/categories" class="offers-hotspot hotspot-individual" title="View Products" aria-label="View Products">
              <span class="hotspot-accessible-text">View Products</span>
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalEl);
  }

  // Wire up event listeners
  const closeBtn = document.getElementById('offers-modal-close-btn');
  const backdrop = document.getElementById('offers-modal-backdrop');
  const hotspots = modalEl.querySelectorAll('.offers-hotspot');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeOffersModal());
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => closeOffersModal());
  }

  const comboHotspot = modalEl.querySelector('.hotspot-combo');
  if (comboHotspot) {
    comboHotspot.addEventListener('click', (e) => {
      const isLanding = document.body.classList.contains('is-landing-page');
      if (isLanding) {
        e.preventDefault();
        closeOffersModal();
        const combosSec = document.getElementById('combos');
        if (combosSec) {
          combosSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  hotspots.forEach(link => {
    link.addEventListener('click', () => {
      closeOffersModal();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOffersModalOpen()) {
      closeOffersModal();
    }
  });

  offersModalInitialized = true;
}

export function isOffersModalOpen() {
  const modalEl = document.getElementById('offers-popup-modal');
  return modalEl ? modalEl.classList.contains('is-open') : false;
}

export function openOffersModal() {
  initOffersModal();
  const modalEl = document.getElementById('offers-popup-modal');
  if (!modalEl) return;

  // Add open class with animation
  modalEl.style.display = 'flex';
  requestAnimationFrame(() => {
    modalEl.classList.add('is-open');
    document.body.classList.add('offers-modal-active');
  });
}

export function closeOffersModal() {
  const modalEl = document.getElementById('offers-popup-modal');
  if (!modalEl) return;

  modalEl.classList.remove('is-open');
  document.body.classList.remove('offers-modal-active');

  setTimeout(() => {
    if (!modalEl.classList.contains('is-open')) {
      modalEl.style.display = 'none';
    }
  }, 320);
}

// Observe scrolling into Combos section on the Landing Page
export function observeCombosSectionForPopup(combosEl) {
  initOffersModal();

  if (!combosEl) return;

  if (combosObserver) {
    combosObserver.disconnect();
    combosObserver = null;
  }

  hasTriggeredInCurrentScroll = false;

  if ('IntersectionObserver' in window) {
    combosObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasTriggeredInCurrentScroll) {
          hasTriggeredInCurrentScroll = true;
          // Trigger popup with smooth natural timing
          setTimeout(() => {
            openOffersModal();
          }, 250);
        } else if (!entry.isIntersecting) {
          // Reset when scrolled past or back above so it can trigger again on next entry
          const rect = entry.boundingClientRect;
          if (rect.top > window.innerHeight || rect.bottom < 0) {
            hasTriggeredInCurrentScroll = false;
          }
        }
      });
    }, {
      root: null,
      threshold: 0.18,
      rootMargin: '0px 0px -50px 0px'
    });

    combosObserver.observe(combosEl);
  }
}
