import { siteConfig } from "@/lib/site";

export default function AboutCta() {
  return (
    <section className="about-cta-section" aria-label="Book Appointment Call to Action">
      <h2 className="about-cta-title">Ready to Experience World-Class Healthcare?</h2>
      <p className="about-cta-desc">Book an appointment with our specialists today.</p>
      <div className="about-cta-buttons">
        <a href={`tel:${siteConfig.contact.emergencyPhone}`} className="about-cta-btn-white">
          Book Appointment
        </a>
        <a href={`tel:${siteConfig.contact.emergencyPhone}`} className="about-cta-btn-outline">
          Call: {siteConfig.contact.emergencyPhoneDisplay}
        </a>
      </div>
    </section>
  );
}
