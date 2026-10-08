import "@/styles/careers.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import { CareersPageContent } from "@/components/careers";

export const metadata = createMetadata({
  title: "Careers & Healthcare Opportunities",
  description:
    "Advance your career in a world-class healthcare environment at SRM Global Hospitals. Explore current job vacancies for consultant doctors, nurses, allied health, and healthcare management in Chennai.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="careers" />
      <main className="careers-page" id="main-content">
        <CareersPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
