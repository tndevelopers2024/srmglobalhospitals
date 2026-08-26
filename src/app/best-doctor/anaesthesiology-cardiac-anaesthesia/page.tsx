import "@/styles/best-doctor.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Anaesthesiology & Cardiac Anaesthesia | SRM Global Hospitals",
  description:
    "Specialised perioperative anaesthesia and critical care for cardiac and cardiothoracic surgery, delivered in close coordination with the Institute of Cardiac Sciences.",
  path: "/best-doctor/anaesthesiology-cardiac-anaesthesia",
});

export default function AnaesthesiologyCardiacAnaesthesiaDepartmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Anaesthesiology & Cardiac Anaesthesia", path: "/best-doctor/anaesthesiology-cardiac-anaesthesia" },
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
