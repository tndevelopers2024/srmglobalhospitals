export default function WhyChooseUsSection() {
  return (
    <section className="intl-section intl-section-alt" id="why-choose-us" aria-label="Why International Patients Choose Us">
      <div className="intl-container">
        <div className="intl-split-grid">
          <div>
            <div className="intl-section-header">
              <span className="intl-eyebrow">TRUST &bull; COMFORT &bull; CLARITY</span>
              <h2 className="intl-h2">Why International Patients Choose Us</h2>
            </div>
            
            <p className="intl-lead-p">
              We know that choosing a Chennai hospital is not only about medical expertise but also about trust, comfort, and clarity. When international patients look for treatment in Tamil Nadu, they want a hospital that understands different cultures, respects family values, and provides transparent communication. We have built our reputation on these principles.
            </p>
            
            <p className="intl-p">
              Our focus is to provide comprehensive care to people who arrive from abroad. From the first call or online consultation, we explain the options clearly with our healthcare providers. We also share estimated cost details, possible length of stay, and follow-up requirements. We believe that patient care begins before arrival and continues after discharge.
            </p>

            <div className="intl-pillars-grid">
              <div className="intl-pillar-card">
                <div className="intl-pillar-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="intl-pillar-title">Cultural &amp; Family Respect</div>
                <p className="intl-pillar-desc">Deep understanding of diverse cultural needs and personal family values.</p>
              </div>

              <div className="intl-pillar-card">
                <div className="intl-pillar-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="intl-pillar-title">Transparent Estimates</div>
                <p className="intl-pillar-desc">Clear cost breakdowns, stay timelines, and follow-up guidance before arrival.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="intl-media-frame">
              <img
                src="/images/international/services-for-international-patients-1.jpg"
                alt="SRM Global Hospitals International Patient Care"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
