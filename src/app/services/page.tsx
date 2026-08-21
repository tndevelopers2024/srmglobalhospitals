import "@/styles/services.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import {
  ServicesHero,
  EmergencyBanner,
  AmbulanceBanner,
  ServiceGrid,
  ServicesCTA,
} from "@/components/services";

export const metadata = createMetadata({
  title: "Hospital Services & Critical Care | SRM Global Hospitals",
  description:
    "Everything that supports your care: from the ambulance that brings you in to the pharmacy that fills your prescription on the way out.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="services" />
      <main className="services-page" id="main-content">
        <ServicesHero />
        <EmergencyBanner />
        <AmbulanceBanner />
        <ServiceGrid />
        <ServicesCTA />
      </main>
      <SiteFooter />
    </>
  );
}
