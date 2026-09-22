import "@/styles/coe.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Gastroenterology Hospital in Chengalpattu | SRM Global Hospitals",
  description:
    "Gastroenterology hospital in Chengalpattu. Expert medical & surgical gastroenterologists, 24/7 GI bleed emergency, endoscopy, and liver care at SRM Global Hospitals.",
  path: "/clinical-excellence/gastro-and-liver-sciences",
});

export default function GastroLiverSciencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Clinical Excellence", path: "/clinical-excellence" },
            { name: "Institute of Gastro and Liver Sciences", path: "/clinical-excellence/gastro-and-liver-sciences" },
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
