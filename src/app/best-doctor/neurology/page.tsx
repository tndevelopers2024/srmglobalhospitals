import "@/styles/best-doctor.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Neurology | SRM Global Hospitals",
  description:
    "Comprehensive diagnosis and management of disorders of the brain, spinal cord, and nervous system, including stroke, epilepsy, and movement disorders.",
  path: "/best-doctor/neurology",
});

export default function NeurologyDepartmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Neurology", path: "/best-doctor/neurology" },
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
