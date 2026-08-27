import "@/styles/coe.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Emergency Hospital in Chengalpattu | 24/7 Trauma & Critical Care | SRM Global Hospitals",
  description:
    "24/7 emergency hospital in Chengalpattu. Trauma care, cardiac emergencies, stroke management, and critical care at SRM Global Hospitals. Call +91 96444 96444 for immediate help.",
  path: "/centres-of-excellence/emergency-and-critical-care",
});

export default function EmergencyCriticalCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#coe" },
            { name: "Emergency & Critical Care", path: "/centres-of-excellence/emergency-and-critical-care" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="coe" />
      <main id="main-content">
        <ArtBody />
      </main>
      <SiteFooter />
    </>
  );
}
