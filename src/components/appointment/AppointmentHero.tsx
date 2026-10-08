import Link from "next/link";

export default function AppointmentHero() {
  return (
    <section className="appointment-hero-section" aria-label="Book an Appointment Introduction">
      <div className="appointment-hero-wrap">
        <div className="appointment-hero-card">
          <div className="appointment-hero-content">
            {/* Breadcrumb Navigation */}
            <nav className="appointment-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="appointment-breadcrumb-sep">/</span>
              <span className="appointment-breadcrumb-current">Book an Appointment</span>
            </nav>

            {/* Verbatim Eyebrow */}
            <div className="appointment-hero-eyebrow">
              <span className="appointment-hero-eyebrow-dot" aria-hidden="true" />
              <span>OUTPATIENT &amp; SPECIALIST CONSULTATION</span>
            </div>

            {/* Verbatim Headline */}
            <h1 className="appointment-hero-title">
              Book an Appointment
            </h1>

            {/* Verbatim Description */}
            <p className="appointment-hero-desc">
              Schedule outpatient consultations with specialist doctors across 40+ clinical departments online. 
              Our clinical desk confirms your preferred consultation schedule promptly for quality patient care.
            </p>
          </div>

          {/* Consultation Visual Side with gradient mask matching Contact Hero */}
          <div className="appointment-hero-image-layer">
            <div className="appointment-hero-image-wrapper">
              <img
                src="/images/appointment/appointment-hero.jpg"
                alt="Doctor consultation at SRM Global Hospitals"
                className="appointment-hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
