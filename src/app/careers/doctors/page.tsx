import "@/styles/careers.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import { DoctorCareersContent } from "@/components/careers";

export const metadata = createMetadata({
  title: "Doctor Careers & Medical Specialties",
  description:
    "Explore medical career opportunities, consultant positions, duty medical officer roles, and super-specialty clinical departments at SRM Global Hospitals in Chennai.",
  path: "/careers/doctors",
});

export default function DoctorsCareerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: "Doctors", path: "/careers/doctors" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="careers" />
      <main className="careers-page" id="main-content">
        <DoctorCareersContent />
      </main>
      <SiteFooter />
    </>
  );
}
