// Page: FAQ View — Frequently Asked Wholesale Questions & Knowledge Base
import { escapeHtml } from '../components/productCard.js';

export const showcaseFaqs = [
  {
    id: 1,
    category: "orders",
    badgeText: "ORDERS & MOQ",
    badgeColor: "#0284c7",
    badgeBg: "#eff6ff",
    iconBg: "#e0f2fe",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    question: "What is the Minimum Order Quantity (MOQ) for ShopNest products?",
    answer: "Every wholesale product has a clearly designated MOQ displayed on its product page (typically between 6 to 24 units for small merchandise, or 1 master carton lot). For ready-made combo kits, MOQ starts at 10 to 24 kits. We do not enforce large pallet minimums, making it easy for small and medium retail shopkeepers to order multiple variety batches."
  },
  {
    id: 2,
    category: "shipping",
    badgeText: "SHIPPING & FREIGHT",
    badgeColor: "#16a34a",
    badgeBg: "#f0fdf4",
    iconBg: "#dcfce7",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
    question: "How fast are wholesale carton orders dispatched, and what are delivery timelines?",
    answer: "All confirmed orders placed before 3:00 PM IST on business days are packed and dispatched from our Chennai Wholesale Commercial Hub within 24 to 48 hours. Consignments are shipped via reputed B2B surface cargo carriers (V-Trans, Safexpress, Spoton, and Speed Post). Delivery typically takes 24–48 hours across South India and 3–5 business days for North, West, and East India."
  },
  {
    id: 3,
    category: "gst",
    badgeText: "GST & INVOICING",
    badgeColor: "#9333ea",
    badgeBg: "#faf5ff",
    iconBg: "#f3e8ff",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    question: "Do you provide official GST invoices for Input Tax Credit (ITC)?",
    answer: "Yes, 100%. All dispatches are accompanied by an official GST tax invoice and valid E-Way bills. During checkout or enquiry quotation, simply enter your 15-digit GSTIN number and business trade name. Input tax credit is automatically filed in your monthly GSTR-2B."
  },
  {
    id: 4,
    category: "shipping",
    badgeText: "SHIPPING & FREIGHT",
    badgeColor: "#ea580c",
    badgeBg: "#fff7ed",
    iconBg: "#ffedd5",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    question: "How are freight and transportation charges calculated for heavy carton lots?",
    answer: "Orders are shipped either on 'To-Pay' freight basis directly through the transport agency of your choice, or prepaid freight based on actual volumetric weight calculated at checkout. For master carton bulk volume deals, subsidized transport rates apply."
  },
  {
    id: 5,
    category: "samples",
    badgeText: "SAMPLES & TRIALS",
    badgeColor: "#db2777",
    badgeBg: "#fdf2f8",
    iconBg: "#fce7f3",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
    question: "Can I request sample pieces before ordering a master carton?",
    answer: "Yes. You can order single MOQ sample packs directly on our storefront to inspect the build quality, retail finish, and packaging before committing to factory master carton lots. Contact our wholesale commercial desk if you need mixed-category sample assortments."
  },
  {
    id: 6,
    category: "custom",
    badgeText: "CUSTOM & OEM",
    badgeColor: "#4f46e5",
    badgeBg: "#eef2ff",
    iconBg: "#e0e7ff",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
    question: "Do you support custom logo printing or private labeling for schools and businesses?",
    answer: "Yes! For orders exceeding 500+ pieces or 10+ master cartons, we provide OEM private labeling. We can imprint your school logo, stationery store branding, or corporate event graphics on stationery pouches, exam boards, and combo boxes. Fill out our Bulk Enquiry Form for a customized digital mockup."
  },
  {
    id: 7,
    category: "orders",
    badgeText: "ORDERS & MOQ",
    badgeColor: "#0284c7",
    badgeBg: "#eff6ff",
    iconBg: "#e0f2fe",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    question: "Can I mix and match different items inside a single wholesale shipment?",
    answer: "Absolutely. You can add the minimum order quantities of as many different products as you want into a single cart. They will be consolidated into a unified parcel or bundled master cartons to reduce total freight costs."
  },
  {
    id: 8,
    category: "support",
    badgeText: "DAMAGES & SUPPORT",
    badgeColor: "#dc2626",
    badgeBg: "#fef2f2",
    iconBg: "#fee2e2",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
    question: "What is your policy if cartons arrive damaged or items are missing?",
    answer: "All cartons are strapped with security tape and tamper-evident seals. If you receive a visibly damaged outer box, please mention 'damaged condition' on the delivery challan and share a brief unboxing video within 48 hours to our WhatsApp trade desk (+91 98765 43210). We immediately issue a credit note or dispatch free replacements."
  },
  {
    id: 9,
    category: "orders",
    badgeText: "PAYMENTS & BILLING",
    badgeColor: "#059669",
    badgeBg: "#ecfdf5",
    iconBg: "#d1fae5",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
    question: "What payment methods are accepted for commercial B2B orders?",
    answer: "We accept NEFT/RTGS bank transfers, UPI commercial payments, Net Banking, and major Business Credit/Debit cards. Proforma invoices with our verified bank account details are generated immediately upon order submission."
  },
  {
    id: 10,
    category: "shipping",
    badgeText: "SHIPPING & FREIGHT",
    badgeColor: "#ea580c",
    badgeBg: "#fff7ed",
    iconBg: "#ffedd5",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    question: "How do I track my wholesale consignment after dispatch?",
    answer: "As soon as your shipment is picked up by the logistics carrier, our trade desk sends an automated WhatsApp message and email containing the LR (Lorry Receipt) / Docket number and tracking link to monitor your delivery status in real time."
  }
];

export const wholesaleFaqs = showcaseFaqs;

/**
 * Renders the exact 2-column showcase layout matching Image 1
 */
export function renderFaqShowcaseSection(options = {}) {
  const {
    idPrefix = 'showcase',
    showButton = true,
    buttonHref = '#/faq',
    buttonText = 'Browse Full FAQ Knowledge Base (10+ Questions)',
    items = showcaseFaqs,
    showFilterPills = false,
    isFullPage = false
  } = options;
  const baseUrl = import.meta.env.BASE_URL;

  return `
    <div class="faq-exact-container ${isFullPage ? 'faq-exact-container-fullpage' : ''}">
      <!-- Left Column: 3D Visual with Cartons, Plant, Pedestal & 4 Floating Bubble Pills -->
      <div class="faq-exact-visual-col ${isFullPage ? 'is-sticky-visual' : ''}">
        <div class="faq-exact-visual-wrapper">
          <img 
            src="${baseUrl}images/faq-3d-visual.png" 
            alt="Frequently Asked Questions - You Ask, We Answer" 
            class="faq-exact-visual-img"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Right Column: Wholesale Trade Desk Header + Category Filter Pills + Elevated Cards + Capsule Button -->
      <div class="faq-exact-content-col">
        <!-- Header -->
        <div class="faq-exact-header">
          <div style="display: flex; justify-content: center; margin-bottom: 0.35rem;">
            <span class="faq-eyebrow-pill">WHOLESALE TRADE DESK</span>
          </div>
          <h2 class="faq-exact-title">
            <span>Frequently Asked <span class="highlight-blue">Questions</span></span>
            <span class="faq-title-sparkles" aria-hidden="true">
              <svg width="26" height="22" viewBox="0 0 26 22" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round">
                <line x1="6" y1="18" x2="2" y2="10"></line>
                <line x1="13" y1="16" x2="13" y2="3"></line>
                <line x1="20" y1="18" x2="24" y2="10"></line>
              </svg>
            </span>
          </h2>
          <p class="faq-exact-subtitle">
            Quick answers regarding Minimum Order Quantities (MOQ), Pan-India dispatch timelines, GST invoices, and sample orders.
          </p>
        </div>

        ${showFilterPills ? `
          <!-- Interactive Category Filter Pills -->
          <div class="faq-showcase-filters" id="${idPrefix}-filters">
            <button type="button" class="faq-filter-pill active" data-filter="all">All Topics (${items.length})</button>
            <button type="button" class="faq-filter-pill" data-filter="orders">Orders &amp; MOQ</button>
            <button type="button" class="faq-filter-pill" data-filter="shipping">Shipping &amp; Timelines</button>
            <button type="button" class="faq-filter-pill" data-filter="gst">GST &amp; Invoices</button>
            <button type="button" class="faq-filter-pill" data-filter="custom">Custom &amp; OEM</button>
            <button type="button" class="faq-filter-pill" data-filter="support">Damages &amp; Support</button>
          </div>
        ` : ''}

        <!-- Elevated Accordion Cards Matching Image 1 -->
        <div class="faq-exact-accordion-list" id="${idPrefix}-accordion-list">
          ${items.map((faq, idx) => {
            const isOpenByDefault = (idx === 0);
            return `
            <div class="faq-exact-card ${isOpenByDefault ? 'is-open' : ''}" data-faq-id="${faq.id}" data-category="${faq.category}">
              <button 
                type="button" 
                class="faq-exact-card-header" 
                aria-expanded="${isOpenByDefault ? 'true' : 'false'}"
                aria-controls="${idPrefix}-body-${faq.id}"
              >
                <div class="faq-card-left">
                  <div class="faq-card-icon-box" style="background-color: ${faq.iconBg};">
                    ${faq.iconSvg}
                  </div>
                  <div class="faq-card-text">
                    <span class="faq-card-category-badge" style="background-color: ${faq.badgeBg}; color: ${faq.badgeColor};">
                      ${faq.badgeText}
                    </span>
                    <h3 class="faq-card-question">${escapeHtml(faq.question)}</h3>
                  </div>
                </div>
                <div class="faq-chevron-circle" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>
              <div 
                id="${idPrefix}-body-${faq.id}" 
                class="faq-exact-card-body" 
                style="${isOpenByDefault ? 'display: block;' : 'display: none;'}"
              >
                <p style="margin: 0;">${escapeHtml(faq.answer)}</p>
              </div>
            </div>
          `;
          }).join('')}
        </div>

        <!-- Bottom Action Pill with Side Blue Rays Doodles -->
        ${showButton ? `
          <div class="faq-exact-btn-wrap">
            <svg class="faq-btn-ray-left" width="26" height="22" viewBox="0 0 26 22" fill="none" stroke="#0084ff" stroke-width="2.6" stroke-linecap="round" aria-hidden="true">
              <line x1="2" y1="11" x2="16" y2="11"></line>
              <line x1="6" y1="3" x2="18" y2="7"></line>
              <line x1="6" y1="19" x2="18" y2="15"></line>
            </svg>

            <a href="${buttonHref}" class="btn-faq-showcase">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>${buttonText}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <svg class="faq-btn-ray-right" width="26" height="22" viewBox="0 0 26 22" fill="none" stroke="#0084ff" stroke-width="2.6" stroke-linecap="round" aria-hidden="true">
              <line x1="24" y1="11" x2="10" y2="11"></line>
              <line x1="20" y1="3" x2="8" y2="7"></line>
              <line x1="20" y1="19" x2="8" y2="15"></line>
            </svg>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

export function initFaqShowcaseEvents(listId = 'showcase-accordion-list') {
  const container = document.getElementById(listId);
  if (!container) return;

  container.addEventListener('click', (e) => {
    const header = e.target.closest('.faq-exact-card-header');
    if (!header) return;

    const card = header.closest('.faq-exact-card');
    if (!card) return;

    const body = card.querySelector('.faq-exact-card-body');
    const wasOpen = card.classList.contains('is-open');

    // Close all cards in this container
    container.querySelectorAll('.faq-exact-card').forEach(c => {
      c.classList.remove('is-open');
      const b = c.querySelector('.faq-exact-card-body');
      if (b) b.style.display = 'none';
      const h = c.querySelector('.faq-exact-card-header');
      if (h) h.setAttribute('aria-expanded', 'false');
    });

    // If wasn't open, open this one
    if (!wasOpen && body) {
      card.classList.add('is-open');
      body.style.display = 'block';
      header.setAttribute('aria-expanded', 'true');
    }
  });
}

/**
 * Dedicated Full-Page FAQ View (Image 1 Exact Layout)
 */
export function renderFaqView() {
  return `
    <div class="faq-page faq-v1-fullpage">
      <div class="faq-page-inner">
        ${renderFaqShowcaseSection({
          idPrefix: 'faq-fullpage',
          showButton: true,
          buttonHref: '#/contact',
          buttonText: 'Have Specific Questions? Contact Trade Desk',
          items: showcaseFaqs,
          showFilterPills: true,
          isFullPage: true
        })}
      </div>
    </div>
  `;
}

export function initFaqFilters(filterWrapId, listId) {
  const filterWrap = document.getElementById(filterWrapId);
  const accordionList = document.getElementById(listId);

  if (filterWrap && accordionList) {
    const pills = filterWrap.querySelectorAll('.faq-filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const category = pill.getAttribute('data-filter');
        const cards = accordionList.querySelectorAll('.faq-exact-card');

        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
}

export function initFaqViewEvents() {
  // 1. Initialize Showcase events on full-page list
  initFaqShowcaseEvents('faq-fullpage-accordion-list');

  // 2. Initialize Category Filter Pills
  initFaqFilters('faq-fullpage-filters', 'faq-fullpage-accordion-list');
}
