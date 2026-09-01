import "@/styles/coe.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Cardiology Hospital in Chengalpattu | Heart Care & Emergency | SRM Global Hospitals",
  description: "Cardiology hospital in Chengalpattu for coronary artery disease, heart failure, and cardiac emergencies at SRM Global Hospitals. Call +91 96444 96444.",
  path: "/centres-of-excellence/cardiac-sciences",
});

export default function CardiacSciencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#coe" },
            { name: "Institute of Cardiac Sciences", path: "/centres-of-excellence/cardiac-sciences" },
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
