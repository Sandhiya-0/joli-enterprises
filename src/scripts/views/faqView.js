// Page: FAQ View — Frequently Asked Wholesale Questions & Knowledge Base
import { escapeHtml } from '../components/productCard.js';

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

export function renderFaqView() {
  return `
    <div class="faq-page">
      <!-- Top Hero Header -->
      <header class="about-hero" style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0f172a 100%); color: #ffffff; padding: 3.5rem 0 3rem;">
        <div class="container">
          <nav class="breadcrumbs" aria-label="Breadcrumb" style="margin-bottom: 1rem;">
            <a href="#/" style="color: rgba(255,255,255,0.75);">Home</a>
            <span class="separator" style="color: rgba(255,255,255,0.4);">/</span>
            <span class="current" style="color: #38bdf8; font-weight: 700;">FAQ</span>
          </nav>

          <div style="max-width: 820px;">
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.12); padding: 5px 14px; border-radius: 9999px; font-size: 0.78rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem; border: 1px solid rgba(255,255,255,0.2);">
              <span>❓</span> WHOLESALE TRADE DESK KNOWLEDGE BASE
            </div>
            <h1 class="section-title" style="color: #ffffff; font-size: clamp(2rem, 3.8vw, 3rem); line-height: 1.15; margin-bottom: 0.85rem;">
              Frequently Asked Questions (FAQ)
            </h1>
            <p class="section-subtitle" style="color: rgba(255,255,255,0.85); font-size: 1.05rem; line-height: 1.6; max-width: 720px;">
              Everything retail shop owners, school distributors, and dealers need to know regarding MOQ rules, transport timelines, GST tax invoices, and custom combo packaging.
            </p>
          </div>
        </div>
      </header>

      <!-- Instant Search & Category Filters -->
      <section class="section" style="padding: 2.5rem 0 1.5rem; background: #ffffff; border-bottom: 1px solid #e2e8f0;">
        <div class="container">
          
          <!-- Search Bar -->
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
          <div class="faq-filter-buttons" style="display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" class="btn-filter-tag active" data-filter="all">All Topics (${wholesaleFaqs.length})</button>
            <button type="button" class="btn-filter-tag" data-filter="orders">Orders &amp; MOQ</button>
            <button type="button" class="btn-filter-tag" data-filter="shipping">Shipping &amp; Freight</button>
            <button type="button" class="btn-filter-tag" data-filter="gst">GST &amp; Invoicing</button>
            <button type="button" class="btn-filter-tag" data-filter="custom">Custom &amp; OEM</button>
            <button type="button" class="btn-filter-tag" data-filter="support">Damages &amp; Support</button>
          </div>

        </div>
      </section>

      <!-- Accordion Section -->
      <section class="section" style="padding: 3rem 0 4rem; background: #f8fafc;">
        <div class="container" style="max-width: 900px;">
          
          <div id="faq-accordion-container" style="display: flex; flex-direction: column; gap: 1rem;">
            ${wholesaleFaqs.map(faq => renderFaqItem(faq)).join('')}
          </div>

          <!-- Help Callout Box -->
          <div style="margin-top: 3.5rem; background: #ffffff; border: 1.5px solid #e0f2fe; border-radius: 18px; padding: 2.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; box-shadow: 0 4px 20px rgba(2,132,199,0.06);">
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
  const container = document.getElementById('faq-accordion-container');
  const searchInput = document.getElementById('faq-search-input');
  const filterBtns = document.querySelectorAll('.faq-filter-buttons .btn-filter-tag');

  // Toggle Accordion Click
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

    let visibleCount = 0;
    container.querySelectorAll('.faq-item').forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const text = item.textContent.toLowerCase();

      const matchesCat = (category === 'all' || itemCategory === category);
      const matchesQuery = (query === '' || text.includes(query));

      if (matchesCat && matchesQuery) {
        item.style.display = 'block';
        visibleCount++;
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
