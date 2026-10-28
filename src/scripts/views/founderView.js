// Page: Founder View — Founder's Vision & Leadership
import { escapeHtml } from '../components/productCard.js';

export function renderFounderView() {
  return `
    <header class="about-hero">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="#/">Home</a>
          <span class="separator">/</span>
          <span class="current">Founder & Leadership</span>
        </nav>
        <h1 class="section-title" style="margin-bottom: 0.5rem;">Founder's Vision & Mission</h1>
        <p class="section-subtitle">
          Empowering India's independent retailers with fair margins, honest piece counts, and zero middleman markups.
        </p>
      </div>
    </header>

    <!-- Founder Introduction & Vision -->
    <section class="section">
      <div class="container">
        <div class="about-intro-grid" style="align-items: center;">
          <div class="fade-up">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">
              Leadership Profile
            </span>
            <h2 class="section-title">Built for the Grassroots Retailer</h2>
            
            <p style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 1.25rem;">
              <strong>Joli Enterprises</strong> was founded on a straightforward principle: independent shopkeepers deserve access to high-demand everyday merchandise at genuine wholesale rates, with accessible pack sizes and guaranteed piece counts.
            </p>

            <p style="font-size: 0.95rem; line-height: 1.65; color: var(--color-text-muted); margin-bottom: 1.75rem;">
              By bypassing inflated middleman layers and inflexible container-scale demands, we help neighbourhood stationery shops, gift boutiques, and retail merchants preserve working capital while maximizing resale profits.
            </p>

            <!-- Key Metric Highlights -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
              <div style="background: var(--color-soft-grey); padding: 1rem; border-left: 3px solid var(--color-gold);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">500+</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Retail Partners</div>
              </div>
              <div style="background: var(--color-soft-grey); padding: 1rem; border-left: 3px solid var(--color-gold);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">35%–65%</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Resale Margins</div>
              </div>
              <div style="background: var(--color-soft-grey); padding: 1rem; border-left: 3px solid var(--color-gold);">
                <div style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--color-navy); line-height: 1.1;">24h</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); margin-top: 0.25rem; text-transform: uppercase;">Dispatch SLA</div>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="#/categories" class="btn btn-primary">
                <span>Explore Sourcing Lines</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#/contact" class="btn btn-outline">
                <span>Speak with Trade Desk</span>
              </a>
            </div>
          </div>

          <div class="about-img-frame fade-up">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80" 
              alt="Joli Enterprises Founder and Leadership Operations"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Founder's Core Principles Grid -->
    <section class="section bg-soft-grey">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">The Four Founding Commitments</h2>
          <p class="section-subtitle">
            Core operating tenets established by our leadership to govern every product, carton, and merchant partnership.
          </p>
        </div>

        <div class="about-values-grid">
          <div class="value-card fade-up">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 class="value-card-title">1. Fair Retailer Margins</h3>
            <p class="value-card-desc">
              Every catalog item is structured to deliver sustainable 35% to 65% profit margins when sold at standard retail price points.
            </p>
          </div>

          <div class="value-card fade-up">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="value-card-title">2. Exact Piece-Count Guarantee</h3>
            <p class="value-card-desc">
              Zero shortage tolerance. Whether it's a 100-item school combo or a 200-piece utility carton, every order is piece-verified.
            </p>
          </div>

          <div class="value-card fade-up">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <h3 class="value-card-title">3. Realistic Low MOQs</h3>
            <p class="value-card-desc">
              Accessible minimum orders starting from 12–24 units allow merchants to test new trending stock without tying up capital.
            </p>
          </div>

          <div class="value-card fade-up">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(201, 162, 94, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-gold); margin-bottom: 1rem;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <h3 class="value-card-title">4. Pan-India GST Delivery</h3>
            <p class="value-card-desc">
              Formal GST invoices with valid HSN codes for instant input tax credit claims, backed by insured express dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Quote Banner -->
    <section class="section">
      <div class="container">
        <div style="background: var(--color-navy); color: var(--color-white); padding: 3rem 2.5rem; text-align: center; max-width: 880px; margin: 0 auto; border-radius: var(--radius-md); box-shadow: 0 16px 40px rgba(14, 26, 41, 0.25);" class="fade-up">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2" style="margin-bottom: 1.25rem;"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
          <blockquote style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 600; line-height: 1.6; color: #FFFFFF; margin-bottom: 1.25rem;">
            &ldquo;When neighbourhood retail shops thrive, local communities prosper. Our mission is to be the most dependable wholesale backbone for every retailer who partners with us.&rdquo;
          </blockquote>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-gold);">
            Founder & Managing Director
          </div>
          <div style="font-size: 0.8rem; color: #94A3B8; margin-top: 0.2rem; letter-spacing: 0.05em; text-transform: uppercase;">
            Joli Enterprises Wholesale Merchandise
          </div>
        </div>
      </div>
    </section>

    <!-- Wholesale Call to Action -->
    <section class="section-sm bg-soft-grey">
      <div class="container">
        <div class="cta-banner fade-up">
          <div class="cta-banner-content">
            <h2 class="cta-banner-title">Build Your Inventory with Joli Enterprises</h2>
            <p class="cta-banner-desc">
              Explore our verified wholesale catalogue or request customized carton quotations tailored to your retail shop.
            </p>
          </div>
          <div class="cta-banner-action" style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="#/categories" class="btn btn-primary btn-lg">
              <span>Browse Categories</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#/bulk-enquiry" class="btn btn-outline btn-lg">
              <span>Request Wholesale Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
