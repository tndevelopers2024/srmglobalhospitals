import "@/styles/coe.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Nephrology Hospital in Chengalpattu | Kidney Care & Dialysis | SRM Global Hospitals",
  description: "Nephrology hospital in Chengalpattu for chronic kidney disease, dialysis, and kidney transplant evaluation at SRM Global Hospitals. Call +91 96444 96444.",
  path: "/centres-of-excellence/renal-sciences",
});

export default function RenalSciencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#coe" },
            { name: "Institute of Renal Sciences", path: "/centres-of-excellence/renal-sciences" },
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
