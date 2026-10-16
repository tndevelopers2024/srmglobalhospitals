import "@/styles/coe.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Emergency Hospital in Chengalpattu | 24/7 Trauma & Critical Care | SRM Global Hospitals",
  description:
    "24/7 emergency hospital in Chengalpattu. Trauma care, cardiac emergencies, stroke management, and critical care at SRM Global Hospitals. Call +91 96444 96444 for immediate help.",
  path: "/institute-of-emergency-and-critical-care-unit",
});

export default function EmergencyCriticalCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Clinical Excellence", path: "/clinical-excellence" },
            { name: "Emergency & Critical Care", path: "/institute-of-emergency-and-critical-care-unit" },
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
