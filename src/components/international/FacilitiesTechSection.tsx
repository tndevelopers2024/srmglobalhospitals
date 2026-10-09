export default function FacilitiesTechSection() {
  return (
    <section className="intl-section" id="facilities" aria-label="Facilities and Technology We Provide">
      <div className="intl-container">
        <div className="intl-split-grid reverse">
          <div>
            <div className="intl-media-frame">
              <img
                src="/images/international/advanced-technology.jpg"
                alt="SRM Global Hospitals advanced robotic surgery and medical technology suite"
              />
            </div>
          </div>

          <div>
            <div className="intl-section-header">
              <span className="intl-eyebrow">WORLD CLASS INFRASTRUCTURE</span>
              <h2 className="intl-h2">Facilities and Technology We Provide</h2>
            </div>

            <p className="intl-lead-p">
              We believe that strong care must be supported by reliable facilities and world class treatments. At SRM Global Hospitals, our modern infrastructure includes intensive care units, surgical theaters, diagnostic departments, and services that meet international patients’ expectations.
            </p>

            <p className="intl-p">
              We use safe methods for complex surgeries, including robotic surgery, where precision matters. For cancer treatment, programs such as stereotactic radiotherapy offer targeted therapy. Our laboratories work with strict standards, including testing and calibration laboratories and calibration laboratories, to ensure accuracy in every test and report.
            </p>

            <p className="intl-p">
              We are also prepared for critical care, with round-the-clock support for emergencies. Ambulance services are available for sudden situations, and emergency services are coordinated to bring patients safely to the nearest hospital when required.
            </p>
          </div>
        </div>

        {/* Highlighted Technology Cards */}
        <div className="intl-tech-grid">
          <div className="intl-tech-card">
            <div className="intl-tech-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="intl-tech-card-title">Robotic Surgery</h3>
            <p className="intl-tech-card-desc">Safe methods and millimeter precision for complex surgical procedures with faster recovery times.</p>
          </div>

          <div className="intl-tech-card">
            <div className="intl-tech-icon" style={{ background: '#fdf4ff', color: '#6b4a98' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <h3 className="intl-tech-card-title">Stereotactic Radiotherapy</h3>
            <p className="intl-tech-card-desc">Highly targeted radiation programs delivering pinpoint accuracy for complex cancer therapies.</p>
          </div>

          <div className="intl-tech-card">
            <div className="intl-tech-icon" style={{ background: '#fef2f2', color: '#dc2626' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="intl-tech-card-title">24/7 Critical Care &amp; Ambulance</h3>
            <p className="intl-tech-card-desc">Round-the-clock emergency support, advanced ICU infrastructure, and rapid ambulance response.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
