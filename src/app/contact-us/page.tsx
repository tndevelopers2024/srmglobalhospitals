import "@/styles/contact.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import {
  ContactHero,
  ContactInfoCards,
  ContactAppointmentForm,
  ContactMapSection,
  ContactEmergencyStrip,
} from "@/components/contact";

export const metadata = createMetadata({
  title: "Contact Us - SRM Global Hospitals",
  description:
    "Contact SRM Global Hospitals in Kattankulathur, Chennai. 24x7 emergency helpline +91 96444 96444, appointment booking, specialist doctors consultation, and location details.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact-us" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="contact" />
      <main className="contact-page" id="main-content">
        {/* Hero Section with Verbatim Text & Imagery */}
        <ContactHero />

        {/* 4 Cards: Location, Working Hours, Make an Appointment, Online Schedule */}
        <ContactInfoCards />

        {/* Main Split Section: Book an Appointment Form & Interactive Hospital Map */}
        <section className="contact-main-grid-section">
          <div className="contact-container">
            <div className="contact-split-grid">
              <ContactAppointmentForm />
              <ContactMapSection />
            </div>

            {/* Prominent Emergency Hotline Strip */}
            <ContactEmergencyStrip />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
