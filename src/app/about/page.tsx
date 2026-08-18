import "@/styles/about.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import {
  AboutHero,
  AboutStory,
  AboutRealm,
  AboutLeader,
  AboutVisionMission,
  AboutCoreValues,
  AboutExcellenceStats,
  AboutEmergencyCare,
  AboutIcu,
  AboutCentresOfExcellence,
  AboutCta,
} from "@/components/about";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "For over three decades, SRM Global Hospitals has been a beacon of world-class medical care in Kattankulathur, Chennai with 200+ beds, 30+ specialities, and dedicated centres of excellence.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader />
      <main className="about-page" id="main-content">
        <AboutHero />
        <AboutStory />
        <AboutRealm />
        <AboutLeader />
        <AboutVisionMission />
        <AboutCoreValues />
        <AboutExcellenceStats />
        <AboutEmergencyCare />
        <AboutIcu />
        <AboutCentresOfExcellence />
        <AboutCta />
      </main>
      <SiteFooter />
    </>
  );
}
