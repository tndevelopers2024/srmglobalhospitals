import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Fetal Medicine Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best fetal medicine hospital in Chengalpattu, our fetal medicine specialists provide expert prenatal diagnosis, fetal ultrasound, and fetal...",
  path: "/specialties/fetal-medicine",
});

export default function FetalMedicinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Fetal Medicine", path: "/specialties/fetal-medicine" },
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
