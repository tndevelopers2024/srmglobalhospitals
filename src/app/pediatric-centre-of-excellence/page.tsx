import "@/styles/coe.css";

import type { Route } from "next";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Pediatric Hospital in Chengalpattu | Child Care & Emergency | SRM Global Hospitals",
  absoluteTitle: true,
  description:
    "Pediatric hospital in Chengalpattu at SRM Global Hospitals. Care for infants and children under one roof, from vaccinations and newborn care to pediatric surgery and 24/7 emergency support.",
  path: "/pediatric-centre-of-excellence",
});

export default function PediatricCentreOfExcellencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Clinical Excellence", path: "/clinical-excellence" },
            {
              name: "Pediatric Centre of Excellence",
              path: "/pediatric-centre-of-excellence",
            },
          ]),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hospital",
            name: "SRM Global Hospitals",
            medicalSpecialty: "Pediatric",
            telephone: "+91 96444 96444",
            email: "info@srmglobalhospitals.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur",
              addressRegion: "Tamil Nadu",
              postalCode: "603203",
              addressCountry: "IN",
            },
          }),
        }}
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
