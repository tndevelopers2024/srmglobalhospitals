export default function ContactInfoCards() {
  return (
    <section className="contact-info-section" id="contact-details">
      <div className="contact-container">
        <div className="contact-cards-grid">
          {/* Card 1: Location */}
          <div className="contact-info-card card-location">
            <div className="contact-card-icon-wrap" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="contact-card-title">Location</h3>
            <div className="contact-card-content">
              <p style={{ margin: 0, fontSize: "14.5px", lineHeight: "1.6", color: "#475569" }}>
                Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603 203
              </p>
            </div>
          </div>

          {/* Card 2: Working Hours */}
          <div className="contact-info-card card-hours">
            <div className="contact-card-icon-wrap hours-icon" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="contact-card-title">Working Hours</h3>
            <div className="contact-card-content">
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                  color: "#000000",
                  marginBottom: "6px",
                  letterSpacing: "-0.2px",
                }}
              >
                24x7
              </div>
              <p style={{ margin: 0, fontSize: "14px", color: "#64748b", lineHeight: "1.5" }}>
                Emergency, Trauma Care, Inpatient Services &amp; ICU facilities operate round-the-clock 365 days a year.
              </p>
            </div>
          </div>

          {/* Card 3: MAKE AN APPOINTMENT */}
          <div className="contact-info-card card-emergency">
            <div className="contact-card-icon-wrap emergency-icon" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v9h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <h3 className="contact-card-title">Make an Appointment</h3>
            <div className="contact-card-content">
              <ul className="contact-card-phone-list">
                <li className="contact-card-phone-item">
                  <a
                    href="tel:+919644496444"
                    className="contact-card-phone-link"
                    aria-label="Call Emergency and Appointment number: +91 96444 96444"
                  >
                    <span className="contact-card-phone-icon" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.32 1.58.59 2.33" />
                      </svg>
                    </span>
                    <span>+91 96444 96444</span>
                  </a>
                </li>
                <li className="contact-card-phone-item">
                  <a
                    href="tel:+918925856353"
                    className="contact-card-phone-link"
                    aria-label="Call Hospital Appointment desk: +91 8925856353"
                  >
                    <span className="contact-card-phone-icon" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.32 1.58.59 2.33" />
                      </svg>
                    </span>
                    <span>+91 8925856353</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: ONLINE SCHEDULE */}
          <div className="contact-info-card card-schedule">
            <div className="contact-card-icon-wrap schedule-icon" aria-hidden="true">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="contact-card-title">Online Schedule</h3>
            <div className="contact-card-content">
              <p style={{ margin: 0, fontSize: "14.5px", lineHeight: "1.6", color: "#475569" }}>
                Schedule outpatient consultations with specialist doctors across 40+ clinical departments online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
