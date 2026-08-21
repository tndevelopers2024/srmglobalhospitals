import "@/styles/best-doctor.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Emergency Medicine & Critical Care Unit | SRM Global Hospitals",
  description:
    "Round-the-clock emergency and critical care, backed by a ten-member team ready to respond the moment every second counts at SRM Global Hospitals Chennai.",
  path: "/best-doctor/emergency-medicine-critical-care",
});

export default function EmergencyMedicineDepartmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            {
              name: "Emergency Medicine & Critical Care Unit",
              path: "/best-doctor/emergency-medicine-critical-care",
            },
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
