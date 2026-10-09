export default function FinancialGuidanceSection() {
  return (
    <section className="intl-section" id="financial-guidance" aria-label="Insurance, Cost, and Financial Guidance">
      <div className="intl-container">
        <div className="intl-section-header text-center">
          <span className="intl-eyebrow">TRANSPARENT FINANCIAL ASSISTANCE</span>
          <h2 className="intl-h2">Insurance, Cost, and Financial Guidance</h2>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto 40px', textAlign: 'center' }}>
          <p className="intl-lead-p">
            We know that finances are a major concern for international patients. That is why we explain cost clearly before admission. Our billing team provides transparent estimates, explains inclusions, and ensures no hidden charges.
          </p>

          <p className="intl-p">
            Many patients prefer cashless treatment, and we support this by working with insurers. By cooperating with health insurance providers, we reduce the financial stress on families. This allows them to focus on recovery while we manage the paperwork.
          </p>
        </div>

        <div className="intl-finance-grid">
          <div className="intl-finance-card">
            <div className="intl-finance-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v12M15 9.5a3.5 3.5 0 0 0-5 0c0 2 5 2 5 4.5a3.5 3.5 0 0 1-5 0" />
              </svg>
            </div>
            <h3 className="intl-finance-title">Transparent Cost Estimates</h3>
            <p className="intl-finance-desc">Clear pre-admission estimates detailing all procedure costs, inclusions, and room categories with no hidden charges.</p>
          </div>

          <div className="intl-finance-card">
            <div className="intl-finance-icon" style={{ background: '#eff6ff', color: '#137cef' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <h3 className="intl-finance-title">Cashless Treatment Options</h3>
            <p className="intl-finance-desc">Active cooperation with leading international health insurance companies and third-party administrators (TPAs).</p>
          </div>

          <div className="intl-finance-card">
            <div className="intl-finance-icon" style={{ background: '#fdf4ff', color: '#6b4a98' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 className="intl-finance-title">Complete Paperwork Assistance</h3>
            <p className="intl-finance-desc">Our dedicated international desk handles authorization letters, claim forms, and documentation so families focus on healing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
