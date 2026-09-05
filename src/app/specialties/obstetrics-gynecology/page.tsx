import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Obstetrics and Gynecology Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best obstetrics and gynecology hospital in Chengalpattu, our gynecologists and obstetricians provide expert pregnancy care, from normal delivery and C-section to laparoscopic gynaecology surgery, infertility treatment, and high-risk pregnancy management at our dedicated maternity hospital.",
  path: "/specialties/obstetrics-gynecology",
});

export default function ObstetricsGynecologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Obstetrics & Gynecology", path: "/specialties/obstetrics-gynecology" },
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
