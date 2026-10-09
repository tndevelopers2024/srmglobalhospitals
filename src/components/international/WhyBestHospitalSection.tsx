export default function WhyBestHospitalSection() {
  return (
    <section className="intl-section intl-section-alt" id="why-best-hospital" aria-label="Why We Are the Best Hospital in Chennai for International Patients">
      <div className="intl-container">
        <div className="intl-split-grid reverse">
          <div>
            <div className="intl-media-frame">
              <img
                src="/images/international/best-hospital.jpg"
                alt="SRM Global Hospitals compassionate care for international patients"
              />
            </div>
          </div>

          <div>
            <div className="intl-section-header">
              <span className="intl-eyebrow">GLOBAL PATIENT DESTINATION</span>
              <h2 className="intl-h2">Why We Are the Best Hospital in Chennai for International Patients</h2>
            </div>

            <p className="intl-lead-p">
              When international patients look for the best hospital in Chennai, they search for certain qualities: trust, comfort, affordability, and continuity. We meet these requirements because we combine advanced procedures like robotic surgery with consistent patient care. We also simplify access through ambulance services, emergency numbers, and clear communication.
            </p>

            <p className="intl-p">
              As one of the leading hospitals in Chennai, SRM Global Hospitals reflects what people expect from a renowned multi specialty hospital: strong departments, reliable services, modern infrastructure, and the reassurance of compassionate care.
            </p>

            <div className="intl-pillars-grid">
              <div className="intl-pillar-card">
                <div className="intl-pillar-icon" style={{ background: '#eff6ff', color: '#137cef' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="intl-pillar-title">Trust &amp; Clinical Continuity</div>
                <p className="intl-pillar-desc">Comprehensive treatment plans with seamless pre-admission consultations and overseas follow-up care.</p>
              </div>

              <div className="intl-pillar-card">
                <div className="intl-pillar-icon" style={{ background: '#fdf4ff', color: '#6b4a98' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className="intl-pillar-title">Affordable World-Class Care</div>
                <p className="intl-pillar-desc">Advanced robotic surgery and medical excellence delivered with complete cost transparency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
