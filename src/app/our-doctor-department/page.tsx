import "@/styles/our-doctor-department.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import {
  DepartmentsHero,
  DepartmentsStats,
  DepartmentsGrid,
  DepartmentsCTA,
} from "@/components/our-doctor-department";

export const metadata = createMetadata({
  title: "Our Departments | SRM Global Hospitals",
  description:
    "Explore our full range of super speciality departments and centres of clinical excellence at SRM Global Hospitals Chennai.",
  path: "/our-doctor-department",
});

export default function OurDoctorDepartmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Departments", path: "/our-doctor-department" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="specialties" />
      <main className="our-doctor-department-page" id="main-content">
        <DepartmentsHero />
        <DepartmentsStats />
        <DepartmentsGrid />
        <DepartmentsCTA />
      </main>
      <SiteFooter />
    </>
  );
}
