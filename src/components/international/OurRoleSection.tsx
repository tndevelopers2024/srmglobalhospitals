export default function OurRoleSection() {
  return (
    <section className="intl-section" id="our-role" aria-label="Our Role as the Best Hospital in Chennai">
      <div className="intl-container">
        <div className="intl-split-grid reverse">
          <div>
            <div className="intl-media-frame">
              <img
                src="/images/international/hero-consultation.jpg"
                alt="SRM Global Hospitals senior doctors and clinical specialists"
              />
            </div>
          </div>

          <div>
            <div className="intl-section-header">
              <span className="intl-eyebrow">CLINICAL EXCELLENCE &bull; ACCREDITATION</span>
              <h2 className="intl-h2">Our Role as the Best Hospital in Chennai</h2>
            </div>

            <p className="intl-lead-p">
              SRM Global Hospitals is widely known as one of the best hospitals for both local residents and international patients. Our facilities are designed to meet the requirements of a renowned multi specialty hospital, with treatments ranging from liver transplant to advanced cancer therapies, cardiac surgery, and programs for women’s health.
            </p>

            <p className="intl-p">
              Families often travel across borders because they trust our medical professionals and senior consultants. We employ highly skilled doctors who focus on accurate diagnosis, careful treatment planning, and continuous follow-up. We have also earned recognition from the National Accreditation Board, which adds strength to our hospital’s reputation.
            </p>

            <div className="intl-pillars-grid">
              <div className="intl-pillar-card">
                <div className="intl-pillar-icon" style={{ background: '#fdf4ff', color: '#6b4a98' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <div className="intl-pillar-title">National Accreditation Board</div>
                <p className="intl-pillar-desc">Strict compliance with nationally and internationally benchmarked patient safety standards.</p>
              </div>

              <div className="intl-pillar-card">
                <div className="intl-pillar-icon" style={{ background: '#eff6ff', color: '#137cef' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="intl-pillar-title">Senior Consultants</div>
                <p className="intl-pillar-desc">Expert multidisciplinary teams delivering precise diagnoses and compassionate care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
