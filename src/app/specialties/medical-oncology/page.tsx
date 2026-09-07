import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Oncology Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best oncology hospital in Chengalpattu, our oncologists and cancer specialists provide advanced cancer treatment, from chemotherapy, targeted therapy, and immunotherapy to cancer screening, tumor board review, and palliative oncology.",
  path: "/specialties/medical-oncology",
});

export default function MedicalOncologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Medical Oncology", path: "/specialties/medical-oncology" },
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
