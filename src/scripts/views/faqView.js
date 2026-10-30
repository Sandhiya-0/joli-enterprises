// Page: FAQ View — Frequently Asked Wholesale Questions & Knowledge Base
import { escapeHtml } from '../components/productCard.js';

export const showcaseFaqs = [
  {
    id: 1,
    badgeText: "ORDERS & MOQ",
    badgeColor: "#0284c7",
    badgeBg: "#eff6ff",
    iconBg: "#e0f2fe",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    question: "What is the Minimum Order Quantity (MOQ) for Nivox products?",
    answer: "Every wholesale product has a clearly designated MOQ displayed on its product page (typically between 6 to 24 units for small merchandise, or 1 master carton lot). For ready-made combo kits, MOQ starts at 10 to 24 kits. We do not enforce large pallet minimums, making it easy for small and medium retail shopkeepers to order multiple variety batches."
  },
  {
    id: 2,
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
    badgeText: "SAMPLES & TRIALS",
    badgeColor: "#db2777",
    badgeBg: "#fdf2f8",
    iconBg: "#fce7f3",
    iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#db2777" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
    question: "Can I request sample pieces before ordering a master carton?",
    answer: "Yes. You can order single MOQ sample packs directly on our storefront to inspect the build quality, retail finish, and packaging before committing to factory master carton lots. Contact our wholesale commercial desk if you need mixed-category sample assortments."
  }
];

export const wholesaleFaqs = [
  {
    id: 1,
    category: "orders",
    categoryLabel: "Orders & MOQ",
    question: "What is the Minimum Order Quantity (MOQ) for Nivox products?",
    answer: "Every wholesale product has a clearly designated MOQ displayed on its product page (typically between 6 to 24 units for small merchandise, or 1 master carton lot). For ready-made combo kits, MOQ starts at 10 to 24 kits. We do not enforce large pallet minimums, making it easy for small and medium retail shopkeepers to order multiple variety batches."
  },
  {
    id: 2,
    category: "shipping",
    categoryLabel: "Shipping & Freight",
    question: "How fast are wholesale carton orders dispatched, and what are delivery timelines?",
    answer: "All confirmed orders placed before 3:00 PM IST on business days are packed and dispatched from our Chennai Wholesale Commercial Hub within 24 to 48 hours. Consignments are shipped via reputed B2B surface cargo carriers (V-Trans, Safexpress, Spoton, and Speed Post). Delivery typically takes 24–48 hours across South India and 3–5 business days for North, West, and East India."
  },
  {
    id: 3,
    category: "gst",
    categoryLabel: "GST & Invoicing",
    question: "Do you provide official GST invoices for Input Tax Credit (ITC)?",
    answer: "Yes, 100%. All dispatches are accompanied by an official GST tax invoice and valid E-Way bills. During checkout or enquiry quotation, simply enter your 15-digit GSTIN number and business trade name. Input tax credit is automatically filed in your monthly GSTR-2B."
  },
  {
    id: 4,
    category: "shipping",
    categoryLabel: "Shipping & Freight",
    question: "How are freight and transportation charges calculated for heavy carton lots?",
    answer: "Orders are shipped either on 'To-Pay' freight basis directly through the transport agency of your choice, or prepaid freight based on actual volumetric weight calculated at checkout. For master carton bulk volume deals, subsidized transport rates apply."
  },
  {
    id: 5,
    category: "samples",
    categoryLabel: "Samples & Trials",
    question: "Can I request sample pieces before ordering a master carton?",
    answer: "Yes. You can order single MOQ sample packs directly on our storefront to inspect the build quality, retail finish, and packaging before committing to factory master carton lots. Contact our wholesale commercial desk if you need mixed-category sample assortments."
  },
  {
    id: 6,
    category: "custom",
    categoryLabel: "Custom Combos & OEM",
    question: "Do you support custom logo printing or private labeling for schools and businesses?",
    answer: "Yes! For orders exceeding 500+ pieces or 10+ master cartons, we provide OEM private labeling. We can imprint your school logo, stationery store branding, or corporate event graphics on stationery pouches, exam boards, and combo boxes. Fill out our Bulk Enquiry Form for a customized digital mockup."
  },
  {
    id: 7,
    category: "orders",
    categoryLabel: "Orders & MOQ",
    question: "Can I mix and match different items inside a single wholesale shipment?",
    answer: "Absolutely. You can add the minimum order quantities of as many different products as you want into a single cart. They will be consolidated into a unified parcel or bundled master cartons to reduce total freight costs."
  },
  {
    id: 8,
    category: "support",
    categoryLabel: "Damages & Returns",
    question: "What is your policy if cartons arrive damaged or items are missing?",
    answer: "All cartons are strapped with security tape and tamper-evident seals. If you receive a visibly damaged outer box, please mention 'damaged condition' on the delivery challan and share a brief unboxing video within 48 hours to our WhatsApp trade desk (+91 98765 43210). We immediately issue a credit note or dispatch free replacements."
  },
  {
    id: 9,
    category: "orders",
    categoryLabel: "Orders & MOQ",
    question: "What payment methods are accepted for commercial B2B orders?",
    answer: "We accept NEFT/RTGS bank transfers, UPI commercial payments, Net Banking, and major Business Credit/Debit cards. Proforma invoices with our verified bank account details are generated immediately upon order submission."
  },
  {
    id: 10,
    category: "shipping",
    categoryLabel: "Shipping & Freight",
    question: "How do I track my wholesale consignment after dispatch?",
    answer: "As soon as your shipment is picked up by the logistics carrier, our trade desk sends an automated WhatsApp message and email containing the LR (Lorry Receipt) / Docket number and tracking link to monitor your delivery status in real time."
  }
];

/**
 * Renders the exact 2-column showcase layout matching Image 1
 */
export function renderFaqShowcaseSection(options = {}) {
  const {
    idPrefix = 'showcase',
    showButton = true,
    buttonHref = '#/faq',
    buttonText = 'Browse Full FAQ Knowledge Base (10+ Questions)'
  } = options;
  const baseUrl = import.meta.env.BASE_URL;

  return `
    <div class="faq-exact-container">
      <!-- Left Column: 3D Visual with Cartons, Plant, Pedestal & 4 Floating Bubble Pills -->
      <div class="faq-exact-visual-col">
        <div class="faq-exact-visual-wrapper">
          <img 
            src="${baseUrl}images/faq-3d-visual.png" 
            alt="Frequently Asked Questions - You Ask, We Answer" 
            class="faq-exact-visual-img"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Right Column: Wholesale Trade Desk Header + 5 Elevated Cards + Capsule Button -->
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

        <!-- 5 Elevated Accordion Cards Matching Image 1 -->
        <div class="faq-exact-accordion-list" id="${idPrefix}-accordion-list">
          ${showcaseFaqs.map(faq => `
            <div class="faq-exact-card" data-faq-id="${faq.id}">
              <button 
                type="button" 
                class="faq-exact-card-header" 
                aria-expanded="false"
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
                style="display: none;"
              >
                <p style="margin: 0;">${escapeHtml(faq.answer)}</p>
              </div>
            </div>
          `).join('')}
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
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
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

export function renderFaqView() {
  return `
    <div class="faq-page">
      <!-- Breadcrumbs Bar -->
      <div style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 1rem 0;">
        <div class="container" style="max-width: 1220px; padding: 0 1.5rem;">
          <nav class="breadcrumbs" aria-label="Breadcrumb" style="margin: 0;">
            <a href="#/" style="color: #64748b; text-decoration: none;">Home</a>
            <span class="separator" style="color: #cbd5e1; margin: 0 6px;">/</span>
            <span class="current" style="color: #0284c7; font-weight: 800;">FAQ</span>
          </nav>
        </div>
      </div>

      <!-- Prime Hero Showcase Matching Image 1 Exactly -->
      <section class="faq-exact-showcase-section" style="padding: 2.5rem 0 3.5rem;">
        ${renderFaqShowcaseSection({
          idPrefix: 'faq-page-hero',
          showButton: true,
          buttonHref: '#faq-catalog',
          buttonText: 'Explore All 10+ FAQ Topics & Search'
        })}
      </section>

      <!-- Complete Wholesale Knowledge Base Directory (Search & Filter) -->
      <section id="faq-catalog" class="section" style="padding: 3.5rem 0 4.5rem; background: #ffffff; border-top: 1px solid #e2e8f0;">
        <div class="container" style="max-width: 960px; padding: 0 1.5rem;">
          
          <div class="text-center" style="margin-bottom: 2rem;">
            <h2 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem;">
              Full Wholesale Knowledge Base
            </h2>
            <p style="color: #64748b; font-size: 0.95rem; margin: 0 auto; max-width: 600px;">
              Search our complete trade manual or browse questions by category below.
            </p>
          </div>

          <!-- Instant Search Bar -->
          <div style="max-width: 640px; margin: 0 auto 1.75rem; position: relative;">
            <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #64748b; display: flex; align-items: center;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
            <input 
              type="text" 
              id="faq-search-input" 
              placeholder="Search questions (e.g. MOQ, GST invoice, dispatch timeline, sample orders)..." 
              style="width: 100%; padding: 14px 16px 14px 48px; border-radius: 12px; border: 1.5px solid #cbd5e1; font-size: 0.95rem; color: #0f172a; outline: none; transition: border-color 0.2s;"
            />
          </div>

          <!-- Category Filter Tags -->
          <div class="faq-filter-buttons" style="display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <button type="button" class="btn-filter-tag active" data-filter="all">All Topics (${wholesaleFaqs.length})</button>
            <button type="button" class="btn-filter-tag" data-filter="orders">Orders &amp; MOQ</button>
            <button type="button" class="btn-filter-tag" data-filter="shipping">Shipping &amp; Freight</button>
            <button type="button" class="btn-filter-tag" data-filter="gst">GST &amp; Invoicing</button>
            <button type="button" class="btn-filter-tag" data-filter="custom">Custom &amp; OEM</button>
            <button type="button" class="btn-filter-tag" data-filter="support">Damages &amp; Support</button>
          </div>

          <!-- All FAQs Accordion Container -->
          <div id="faq-accordion-container" style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${wholesaleFaqs.map(faq => renderFaqItem(faq)).join('')}
          </div>

          <!-- Help Callout Box -->
          <div style="margin-top: 3.5rem; background: #f8fafc; border: 1.5px solid #e0f2fe; border-radius: 18px; padding: 2.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; box-shadow: 0 4px 20px rgba(2,132,199,0.06);">
            <div style="max-width: 520px;">
              <h3 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: #0f172a; margin-bottom: 0.35rem;">
                Still Have Questions for Our Trade Desk?
              </h3>
              <p style="font-size: 0.88rem; color: #64748b; line-height: 1.5; margin: 0;">
                Our B2B commercial desk is available Mon – Sat, 9:30 AM – 7:00 PM IST to assist with product pricing, logistics planning, or GST proformas.
              </p>
            </div>

            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <a href="#/contact" class="btn btn-primary" style="background: #0284c7; color: #ffffff; border: none; font-weight: 700; border-radius: 8px; padding: 10px 20px; text-decoration: none;">
                Contact Wholesale Desk
              </a>
              <a href="#/bulk-enquiry" class="btn btn-outline" style="border: 1.5px solid #cbd5e1; color: #0f172a; font-weight: 700; border-radius: 8px; padding: 10px 20px; text-decoration: none;">
                Request Quotation
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  `;
}

function renderFaqItem(faq) {
  return `
    <div class="faq-item" data-category="${escapeHtml(faq.category)}" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 8px rgba(15,23,42,0.02); transition: border-color 0.2s;">
      <button 
        type="button" 
        class="faq-header" 
        style="width: 100%; padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; align-items: center; background: none; border: none; text-align: left; cursor: pointer; gap: 1rem;"
      >
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="background: #e0f2fe; color: #0284c7; font-size: 0.72rem; font-weight: 800; padding: 3px 8px; border-radius: 6px; text-transform: uppercase;">
            ${escapeHtml(faq.categoryLabel)}
          </span>
          <span style="font-size: 1.05rem; font-weight: 700; color: #0f172a; line-height: 1.35;">
            ${escapeHtml(faq.question)}
          </span>
        </div>
        <span class="faq-chevron" style="color: #64748b; font-size: 1.2rem; transition: transform 0.25s ease; flex-shrink: 0;">
          ▼
        </span>
      </button>
      <div class="faq-body" style="display: none; padding: 0 1.5rem 1.25rem; font-size: 0.92rem; color: #475569; line-height: 1.6; border-top: 1px solid #f8fafc;">
        ${escapeHtml(faq.answer)}
      </div>
    </div>
  `;
}

export function initFaqViewEvents() {
  // 1. Initialize Showcase events
  initFaqShowcaseEvents('faq-page-hero-accordion-list');

  // 2. Initialize Directory Accordion
  const container = document.getElementById('faq-accordion-container');
  const searchInput = document.getElementById('faq-search-input');
  const filterBtns = document.querySelectorAll('.faq-filter-buttons .btn-filter-tag');

  if (container) {
    container.addEventListener('click', (e) => {
      const header = e.target.closest('.faq-header');
      if (!header) return;

      const item = header.closest('.faq-item');
      const body = item.querySelector('.faq-body');
      const chevron = item.querySelector('.faq-chevron');

      const isOpen = body.style.display === 'block';

      // Close all others
      container.querySelectorAll('.faq-body').forEach(b => b.style.display = 'none');
      container.querySelectorAll('.faq-chevron').forEach(c => c.style.transform = 'rotate(0deg)');
      container.querySelectorAll('.faq-item').forEach(i => i.style.borderColor = '#e2e8f0');

      if (!isOpen) {
        body.style.display = 'block';
        chevron.style.transform = 'rotate(180deg)';
        item.style.borderColor = '#0284c7';
      }
    });
  }

  // Filter Function
  function filterFaqs() {
    const activeBtn = document.querySelector('.faq-filter-buttons .btn-filter-tag.active');
    const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    const query = searchInput?.value.toLowerCase().trim() || '';

    if (!container) return;
    container.querySelectorAll('.faq-item').forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const text = item.textContent.toLowerCase();

      const matchesCat = (category === 'all' || itemCategory === category);
      const matchesQuery = (query === '' || text.includes(query));

      if (matchesCat && matchesQuery) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Live Search
  if (searchInput) {
    searchInput.addEventListener('input', filterFaqs);
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterFaqs();
    });
  });
}
