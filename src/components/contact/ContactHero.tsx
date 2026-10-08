import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-wrap">
        <div className="contact-hero-card">
          <div className="contact-hero-content">
            {/* Breadcrumb Navigation */}
            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="contact-breadcrumb-sep">/</span>
              <span className="contact-breadcrumb-current">Contact Us</span>
            </nav>

            {/* Verbatim Eyebrow */}
            <div className="contact-hero-eyebrow">
              <span className="contact-hero-eyebrow-dot" aria-hidden="true" />
              <span>GET IN TOUCH</span>
            </div>

            {/* Verbatim Headline */}
            <h1 className="contact-hero-title">
              Contact Us For Further Information !
            </h1>

            {/* Verbatim Description */}
            <p className="contact-hero-desc">
              Your complete cure and care are in our hands and we at SRM Global
              Hospitals Pvt Ltd strive our best to give you world class treatment
              and a healthier future ahead.
            </p>

            {/* Quick Contact & Emergency Action Row */}
            <div className="contact-hero-quick-row">
             
              <a
                href="#book-appointment"
                className="contact-hero-badge-pill"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#137CEF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book an Appointment</span>
              </a>

              <a
                href="#hospital-location"
                className="contact-hero-badge-pill"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6B4A98"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>View Hospital Location</span>
              </a>
            </div>
          </div>

          {/* Hospital Visual Side with gradient mask matching Careers Hero */}
          <div className="contact-hero-image-layer">
            <div className="contact-hero-image-wrapper">
              <img
                src="/images/home/hero-building.jpg"
                alt="SRM Global Hospitals Healthcare Facility"
                className="contact-hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
