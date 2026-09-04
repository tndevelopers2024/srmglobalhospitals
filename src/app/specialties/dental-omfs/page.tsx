import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Dental and Oral Surgery Hospital in Chengalpattu | SRM Global Hospitals",
  description:
    "Recognized as the best dental and oral surgery hospital in Chengalpattu, our Dental/OMFS team combines oral and maxillofacial surgery, dental implants, and...",
  path: "/specialties/dental-omfs",
});

export default function DentalOmfsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Dental & Oral and Maxillofacial Surgery", path: "/specialties/dental-omfs" },
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
