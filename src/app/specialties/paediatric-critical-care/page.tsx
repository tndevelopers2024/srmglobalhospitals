import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Paediatric ICU Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best paediatric ICU hospital in Chengalpattu, our pediatric intensivists and pediatric critical care specialists provide round-the-clock intensive care for critically ill children.",
  path: "/specialties/paediatric-critical-care",
});

export default function PaediatricCriticalCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Paediatric Critical Care", path: "/specialties/paediatric-critical-care" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="specialties" />
      <main className="specialty-page" id="main-content">
        <ArtBody />
      </main>
      <SiteFooter />
    </>
  );
}
