import "@/styles/careers.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import { StaffCareersContent } from "@/components/careers";

export const metadata = createMetadata({
  title: "Hospital Staff Careers & Healthcare Support",
  description:
    "Explore career opportunities for nurses, lab technicians, radiographers, pharmacists, administrative executives, and healthcare support personnel at SRM Global Hospitals in Chennai.",
  path: "/careers/hospital-staff",
});

export default function HospitalStaffCareerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: "Hospital Staff", path: "/careers/hospital-staff" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="careers" />
      <main className="careers-page" id="main-content">
        <StaffCareersContent />
      </main>
      <SiteFooter />
    </>
  );
}
