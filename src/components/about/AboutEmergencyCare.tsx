export default function AboutEmergencyCare() {
  return (
    <section className="about-emergency-section" aria-label="24x7 Emergency Care">
      <div className="about-emergency-container">
        <div className="about-emergency-grid">
          <div>
            <div className="about-emergency-eyebrow">Always Ready</div>
            <h2 className="about-emergency-title-white">Your Trusted 24×7</h2>
            <h2 className="about-emergency-title-blue">Emergency Care Partner</h2>
            <div className="about-emergency-features">
              <div className="about-emergency-item">
                <div className="about-emergency-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#18B0F3" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="about-emergency-feature-title">24×7 Availability</div>
                  <div className="about-emergency-feature-desc">
                    Round-the-clock emergency care services guarantee prompt medical attention
                    whenever you encounter an emergency.
                  </div>
                </div>
              </div>

              <div className="about-emergency-item">
                <div className="about-emergency-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#18B0F3" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <div className="about-emergency-feature-title">Highly Skilled Doctors</div>
                  <div className="about-emergency-feature-desc">
                    Over 100 doctors, extensively trained in diverse specialties, readily available
                    for expert emergency care.
                  </div>
                </div>
              </div>

              <div className="about-emergency-item">
                <div className="about-emergency-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#18B0F3" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <div className="about-emergency-feature-title">Comprehensive Emergency Services</div>
                  <div className="about-emergency-feature-desc">
                    Capable of addressing an extensive spectrum of urgent scenarios, from trauma care
                    to cardiac emergencies.
                  </div>
                </div>
              </div>

              <div className="about-emergency-item">
                <div className="about-emergency-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#18B0F3" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <div className="about-emergency-feature-title">Advanced Facilities</div>
                  <div className="about-emergency-feature-desc">
                    Advanced medical technology and equipment enable accurate diagnoses and
                    effective emergency treatments.
                  </div>
                </div>
              </div>

              <div className="about-emergency-item">
                <div className="about-emergency-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#18B0F3" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <div className="about-emergency-feature-title">Patient-Centered Care</div>
                  <div className="about-emergency-feature-desc">
                    Your well-being and comfort are our top priorities. Compassionate emergency care
                    tailored to your individual needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-emergency-image-wrap">
            <img
              src="/images/about-us/emergency-care/image-1.avif"
              alt="24x7 Emergency Care at SRM Global Hospitals"
              className="about-emergency-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
