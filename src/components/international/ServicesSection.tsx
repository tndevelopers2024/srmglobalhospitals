export default function ServicesSection() {
  const services = [
    {
      text: "Airport pickup and transfers to the hospital.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
        </svg>
      ),
    },
    {
      text: "Admission assistance and translation help where needed.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
      ),
    },
    {
      text: "Preparation of medical records for easy sharing.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      text: "Guidance with health insurance and cashless treatment approvals.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
    },
    {
      text: "Assistance for families during their stay in Chennai.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
  ];

  return (
    <section className="intl-section intl-section-alt" id="services" aria-label="Services for International Patients">
      <div className="intl-container">
        <div className="intl-split-grid">
          <div>
            <div className="intl-section-header">
              <span className="intl-eyebrow">DEDICATED SUPPORT DESK</span>
              <h2 className="intl-h2">Services for International Patients</h2>
            </div>

            <div className="intl-services-list">
              {services.map((svc, idx) => (
                <div className="intl-service-item" key={idx}>
                  <div className="intl-service-icon-wrap">
                    {svc.icon}
                  </div>
                  <p className="intl-service-text">{svc.text}</p>
                </div>
              ))}
            </div>

            <a href="#international-desk-inquiry" className="intl-cta-btn-element" style={{ marginTop: '24px' }}>
              <span>Book an Appointment with Our International Patient Desk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div>
            <div className="intl-media-frame">
              <img
                src="/images/international/international-desk-coordinator.jpg"
                alt="SRM Global Hospitals international patient coordinator assisting patient family"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
