export default function InternationalHero() {
  return (
    <section className="intl-hero-section" aria-label="International Hospital Introduction">
      <div className="intl-hero-wrap">
        <div className="intl-hero-card">
          <div className="intl-hero-content">
            {/* Eyebrow badge */}
            <div className="intl-hero-eyebrow">
              <span className="intl-hero-eyebrow-dot" aria-hidden="true" />
              <span>SRM GLOBAL HOSPITALS &bull; INTERNATIONAL PATIENTS</span>
            </div>

            {/* Preserved Verbatim H1 */}
            <h1 className="intl-hero-title">
              International Hospital
            </h1>

            {/* Preserved Verbatim Headline */}
            <h2 className="intl-hero-subtitle">
              International Patients – Best Hospital in Chennai | SRM Global Hospitals
            </h2>

            {/* Preserved Verbatim Lead Description */}
            <p className="intl-hero-desc">
              At SRM Global Hospitals, we welcome people from across the world who seek care at the best hospital in Chennai. For many, traveling for medical reasons can feel overwhelming. We understand this, and our role is to simplify the process.
            </p>

            {/* Trust and Clinical Highlights */}
            <div className="intl-hero-stats">
              <div className="intl-hero-stat-item">
                <span className="intl-hero-stat-num">200+ Beds</span>
                <span className="intl-hero-stat-lbl">Super-Speciality Facility</span>
              </div>
              <div className="intl-hero-stat-item">
                <span className="intl-hero-stat-num">NABH</span>
                <span className="intl-hero-stat-lbl">National Accreditation</span>
              </div>
              <div className="intl-hero-stat-item">
                <span className="intl-hero-stat-num">Dedicated Desk</span>
                <span className="intl-hero-stat-lbl">Multilingual Assistance</span>
              </div>
            </div>
          </div>

          {/* Authentic Photorealistic Healthcare Image Layer with gradient blend */}
          <div className="intl-hero-image-layer">
            <div className="intl-hero-image-wrapper">
              <img
                src="/images/international/hero-consultation.jpg"
                alt="Senior Indian doctor consulting with an international patient and family at SRM Global Hospitals"
                className="intl-hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
