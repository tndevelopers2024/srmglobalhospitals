import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import Hero from "@/components/home/Hero";
import Triage from "@/components/home/Triage";
import CentresOfExcellence from "@/components/home/CentresOfExcellence";
import CampusPhotoBand from "@/components/home/CampusPhotoBand";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SpecialtyDirectory from "@/components/home/SpecialtyDirectory";
import PatientStory from "@/components/home/PatientStory";
import NumbersBand from "@/components/home/NumbersBand";
import TechSection from "@/components/home/TechSection";
import SurgicalPhotoBand from "@/components/home/SurgicalPhotoBand";
import Doctors from "@/components/home/Doctors";
import InternationalPatients from "@/components/home/InternationalPatients";
import HealthInsights from "@/components/home/HealthInsights";
import Quality from "@/components/home/Quality";
import CtaTiles from "@/components/home/CtaTiles";
import Insurance from "@/components/home/Insurance";
import StickyBar from "@/components/home/StickyBar";
import FloatingCta from "@/components/home/FloatingCta";
import HomeInteractions from "@/components/home/HomeInteractions";

export const metadata = createMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeaderTop />
      <SiteHeader />
      <Hero />
      <Triage />
      <CentresOfExcellence />
      <CampusPhotoBand />
      <WhyChooseUs />
      <SpecialtyDirectory />
      <PatientStory />
      <NumbersBand />
      <TechSection />
      <SurgicalPhotoBand />
      <Doctors />
      <InternationalPatients />
      <HealthInsights />
      <Quality />
      <CtaTiles />
      <Insurance />
      <SiteFooter />
      <StickyBar />
      <FloatingCta />
      <HomeInteractions />
    </>
  );
}
