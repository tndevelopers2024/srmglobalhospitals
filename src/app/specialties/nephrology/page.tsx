import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Nephrology Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best nephrology hospital in Chengalpattu, our nephrologists and kidney specialists provide comprehensive kidney disease treatment, from haemodialysis and peritoneal dialysis to kidney biopsy, chronic kidney disease treatment, and kidney transplant evaluation at our dedicated dialysis centre.",
  path: "/specialties/nephrology",
});

export default function NephrologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Nephrology", path: "/specialties/nephrology" },
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
