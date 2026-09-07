import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Infectious Disease Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best infectious disease hospital in Chengalpattu, our infectious disease specialists provide expert infection treatment, tropical disease t...",
  path: "/specialties/infectious-disease",
});

export default function InfectiousDiseasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Infectious Disease", path: "/specialties/infectious-disease" },
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
