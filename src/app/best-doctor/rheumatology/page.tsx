import "@/styles/best-doctor.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Rheumatology | SRM Global Hospitals",
  description:
    "Specialised care for autoimmune and inflammatory conditions affecting the joints, muscles, and connective tissues, from diagnosis through long-term management.",
  path: "/best-doctor/rheumatology",
});

export default function RheumatologyDepartmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Rheumatology", path: "/best-doctor/rheumatology" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="specialties" />
      <main className="dept-page" id="main-content">
        <ArtBody />
      </main>
      <SiteFooter />
    </>
  );
}
