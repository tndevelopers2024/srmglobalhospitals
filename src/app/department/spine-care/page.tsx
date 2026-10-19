import "@/styles/best-doctor.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Spine Care | SRM Global Hospitals",
  description:
    "Comprehensive diagnosis and treatment of spinal conditions, combining non-surgical management with advanced surgical techniques to restore mobility and relieve pain.",
  path: "/department/spine-care",
});

export default function SpineCareDepartmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Spine Care", path: "/department/spine-care" },
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
