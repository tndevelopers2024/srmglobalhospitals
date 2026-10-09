import "@/styles/careers.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import { CareersPageContent } from "@/components/careers";

export const metadata = createMetadata({
  title: "Staff Careers & Hospital Opportunities",
  description:
    "Explore nursing, administrative, technical, and operational staff vacancies at SRM Global Hospitals. Join our dedicated healthcare support teams in Chennai.",
  path: "/career-staff",
});

export default function CareerStaffPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: "Career-Staff", path: "/career-staff" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="careers" />
      <main className="careers-page" id="main-content">
        <CareersPageContent initialDept="staff" />
      </main>
      <SiteFooter />
    </>
  );
}
