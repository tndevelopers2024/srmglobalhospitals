import "@/styles/international.css";

import { createMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqPageSchema,
  jsonLdScriptProps,
} from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import {
  InternationalHero,
  WhyChooseUsSection,
  OurRoleSection,
  ServicesSection,
  FacilitiesTechSection,
  SpecialtiesSection,
  FinancialGuidanceSection,
  PatientCareBeyondSection,
  RecognitionExcellenceSection,
  WhyBestHospitalSection,
  FaqSection,
  InternationalDeskInquiry,
} from "@/components/international";
import { internationalFaqs } from "@/lib/international-faqs";

export const metadata = createMetadata({
  title: "International Patients – Best Hospital in Chennai",
  description:
    "At SRM Global Hospitals, we welcome people from across the world who seek care at the best hospital in Chennai. For many, traveling for medical reasons can feel overwhelming. We understand this, and our role is to simplify the process.",
  path: "/international-patients",
});

export default function InternationalPatientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "International Patients", path: "/international-patients" },
          ]),
          faqPageSchema(internationalFaqs),
        ])}
      />
      <HeaderTop />
      <SiteHeader activeNav="intl" />
      <main className="international-page" id="main-content">
        {/* Hero Section */}
        <InternationalHero />

        {/* Why International Patients Choose Us */}
        <WhyChooseUsSection />

        {/* Our Role as the Best Hospital in Chennai */}
        <OurRoleSection />

        {/* Services for International Patients & CTA */}
        <ServicesSection />

        {/* Facilities and Technology We Provide */}
        <FacilitiesTechSection />

        {/* Specialties International Patients Seek & CTA */}
        <SpecialtiesSection />

        {/* Insurance, Cost, and Financial Guidance */}
        <FinancialGuidanceSection />

        {/* Patient Care Beyond Treatment & CTA */}
        <PatientCareBeyondSection />

        {/* Recognition and Excellence */}
        <RecognitionExcellenceSection />

        {/* Why We Are the Best Hospital in Chennai for International Patients */}
        <WhyBestHospitalSection />

        {/* FAQs for International Patients Accordion */}
        <FaqSection />

        {/* International Desk Callback & Direct Inquiries */}
        <InternationalDeskInquiry />
      </main>
      <SiteFooter />
    </>
  );
}
