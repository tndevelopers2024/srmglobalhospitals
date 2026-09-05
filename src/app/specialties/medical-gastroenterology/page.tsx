import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Gastroenterology Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best gastroenterology hospital in Chengalpattu, our gastroenterologists and stomach specialists provide advanced digestive disease treatment, from endoscopy and colonoscopy to the ERCP procedure, IBS treatment, acid reflux treatment, and ulcer treatment.",
  path: "/specialties/medical-gastroenterology",
});

export default function MedicalGastroenterologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Medical Gastroenterology", path: "/specialties/medical-gastroenterology" },
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
