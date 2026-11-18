import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function AboutHero() {
  return (
    <section className="about-hero-section" aria-label="About SRM Global Hospitals Hero">
      <div className="about-hero-wrap">
        <div className="about-hero-card">
          <div className="about-hero-content">
            <div className="about-hero-eyebrow">About SRM Global Hospitals</div>
            <h1 className="about-hero-title">
              Where Compassion Meets{" "}
              <span className="about-hero-title-accent">Excellence</span> in Healthcare
            </h1>
            <p className="about-hero-desc">
              For over three decades, SRM Global Hospitals has been a beacon of world-class medical
              care in the heart of Chengalpattu, Chennai.
            </p>
            <div className="about-hero-actions">
              <Link href="/services" className="about-hero-btn-primary">
                Our Services
              </Link>
              <a href={`mailto:${siteConfig.contact.email}`} className="about-hero-btn-secondary">
                Contact Us
              </a>
            </div>
          </div>

          <div className="about-hero-image-layer">
            <div className="about-hero-image-wrapper">
              <Image
                src="/images/about-us/hero/about-hero.jpeg"
                alt="Doctor consulting with patient at SRM Global Hospitals"
                className="about-hero-img"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                preload
              />
            </div>
            <div className="about-hero-badge">
              <div className="about-hero-badge-num">100+</div>
              <div>
                <div className="about-hero-badge-title">Doctors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
