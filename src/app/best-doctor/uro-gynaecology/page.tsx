import "@/styles/best-doctor.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Uro-Gynaecology | SRM Global Hospitals",
  description:
    "Specialised care for pelvic floor disorders in women, combining urology and gynecology expertise to treat urinary incontinence, prolapse, and bladder dysfunction.",
  path: "/best-doctor/uro-gynaecology",
});

export default function UroGynaecologyDepartmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Uro-Gynaecology", path: "/best-doctor/uro-gynaecology" },
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
