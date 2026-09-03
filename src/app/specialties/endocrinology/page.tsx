import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Endocrinology Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best endocrinology hospital in Chengalpattu, our endocrinologists and thyroid specialists provide expert hormone disorder treatment, thyroid treatment, and PCOS treatment, along with dedicated care for adrenal and pituitary gland disorders.",
  path: "/specialties/endocrinology",
});

export default function EndocrinologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Endocrinology", path: "/specialties/endocrinology" },
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
