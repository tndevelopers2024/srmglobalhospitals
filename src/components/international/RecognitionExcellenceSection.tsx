export default function RecognitionExcellenceSection() {
  return (
    <section className="intl-section" id="recognition" aria-label="Recognition and Excellence">
      <div className="intl-container">
        <div className="intl-section-header text-center">
          <span className="intl-eyebrow">QUALITY &bull; SAFETY &bull; ACCREDITATION</span>
          <h2 className="intl-h2">Recognition and Excellence</h2>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto 40px', textAlign: 'center' }}>
          <p className="intl-lead-p">
            SRM Global Hospitals continues to strengthen its position among the best hospitals in Chennai. Recognition from the National Accreditation Board underlines our commitment to medical excellence. By following consistent safety standards, maintaining equipment through testing and calibration laboratories, and involving senior consultants in decision-making, we make sure that outcomes meet expectations.
          </p>

          <p className="intl-p">
            Our role is not limited to treatment. We also support research and development programs that benefit both local and international patients. By focusing on education and training, we ensure future generations of medical professionals are prepared to carry our values forward.
          </p>
        </div>

        <div className="intl-recognition-grid">
          <div className="intl-recognition-card">
            <div className="intl-recognition-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <h3 className="intl-recognition-title">Accreditation &amp; Safety Standards</h3>
            <p className="intl-recognition-desc">National Accreditation Board standards ensuring institutional rigor, patient safety, and clinical audit processes.</p>
          </div>

          <div className="intl-recognition-card">
            <div className="intl-recognition-icon" style={{ background: '#eff6ff', color: '#137cef' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 2v7.31M14 2v7.31" />
                <path d="M8.5 2h7" />
                <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                <path d="M5.52 16h12.96" />
              </svg>
            </div>
            <h3 className="intl-recognition-title">Testing &amp; Calibration Laboratories</h3>
            <p className="intl-recognition-desc">Standardized diagnostic systems and calibration protocols to guarantee 100% test precision.</p>
          </div>

          <div className="intl-recognition-card">
            <div className="intl-recognition-icon" style={{ background: '#fdf4ff', color: '#6b4a98' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3 className="intl-recognition-title">Research, Education &amp; Training</h3>
            <p className="intl-recognition-desc">Fostering next-generation clinical expertise and advanced research initiatives that elevate medical care globally.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
