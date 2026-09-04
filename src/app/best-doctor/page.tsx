import "@/styles/best-doctor.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import {
  DepartmentsHero,
  DepartmentsStats,
  DepartmentsGrid,
  DepartmentsCTA,
} from "@/components/best-doctor";

export const metadata = createMetadata({
  title: "Our Departments | SRM Global Hospitals",
  description:
    "Explore our full range of super speciality departments and centres of clinical excellence at SRM Global Hospitals Chennai.",
  path: "/best-doctor",
});

export default function OurDoctorDepartmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Departments", path: "/best-doctor" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="doctors" />
      <main className="best-doctor-page" id="main-content">
        <DepartmentsHero />
        <DepartmentsStats />
        <DepartmentsGrid />
        <DepartmentsCTA />
      </main>
      <SiteFooter />
    </>
  );
}
