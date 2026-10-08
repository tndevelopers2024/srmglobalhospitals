export default function ContactEmergencyStrip() {
  return (
    <div className="contact-emergency-strip">
      <div className="contact-emergency-strip-left">
        <div className="contact-emergency-strip-icon" aria-hidden="true">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.32 1.58.59 2.33" />
          </svg>
        </div>
        <div className="contact-emergency-strip-text">
          <h3>24x7 Emergency, Trauma &amp; Ambulance Support</h3>
          <p>
            For urgent medical emergencies, ambulance dispatch, and trauma care, our dedicated emergency hotline is staffed 24 hours a day, 7 days a week.
          </p>
        </div>
      </div>

      <div className="contact-emergency-strip-right">
        <a
          href="tel:+919644496444"
          className="contact-emergency-strip-btn"
          aria-label="Call Emergency Hotline: +91 96444 96444"
        >
          <span className="emergency-pulse-dot" style={{ background: "#ffffff" }} aria-hidden="true" />
          <span>Call +91 96444 96444</span>
        </a>

        <a
          href="#book-appointment"
          className="contact-emergency-strip-btn-secondary"
        >
          <span>Book an Appointment</span>
        </a>
      </div>
    </div>
  );
}
