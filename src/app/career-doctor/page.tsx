import "@/styles/careers.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import { CareersPageContent } from "@/components/careers";

export const metadata = createMetadata({
  title: "Doctor Careers & Medical Opportunities",
  description:
    "Explore clinical, consultant, and specialist doctor vacancies at SRM Global Hospitals. Join our team of leading medical specialists in Chennai.",
  path: "/career-doctor",
});

export default function CareerDoctorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: "Career-Doctor", path: "/career-doctor" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="careers" />
      <main className="careers-page" id="main-content">
        <CareersPageContent initialDept="medical" />
      </main>
      <SiteFooter />
    </>
  );
}
