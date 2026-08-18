import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="about-hero-section" aria-label="About SRM Global Hospitals Hero">
      <div className="about-hero-grid">
        <div>
          <div className="about-hero-eyebrow">About SRM Global Hospitals</div>
          <h1 className="about-hero-title">
            Where Compassion Meets{" "}
            <span className="about-hero-title-accent">Excellence</span> in Healthcare
          </h1>
          <p className="about-hero-desc">
            For over three decades, SRM Global Hospitals has been a beacon of world-class medical
            care in the heart of Kattankulathur, Chennai.
          </p>
          <div className="about-hero-actions">
            <Link href="/#specialties" className="about-hero-btn-primary">
              Our Services
            </Link>
            <Link href="/#contact" className="about-hero-btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="about-hero-image-wrap">
          <img
            src="/images/about-us/hero/hero.avif"
            alt="Doctor consulting with patient at SRM Global Hospitals"
            className="about-hero-img"
          />
          <div className="about-hero-badge">
            <div className="about-hero-badge-num">30+</div>
            <div>
              <div className="about-hero-badge-title">Years of</div>
              <div className="about-hero-badge-sub">Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
