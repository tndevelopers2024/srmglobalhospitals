"use client";

import CareersHero from "./CareersHero";
import CareersPathwayCards from "./CareersPathwayCards";
import CareersWhyJoinUs from "./CareersWhyJoinUs";
import CareersRecruitmentCTA from "./CareersRecruitmentCTA";

export interface CareersPageContentProps {
  initialDept?: string;
}

export default function CareersPageContent({ initialDept: _initialDept }: CareersPageContentProps = {}) {
  const handleScrollToOpenings = () => {
    const el = document.getElementById("career-pathways");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <CareersHero
        onExploreClick={handleScrollToOpenings}
        onApplyModalClick={handleScrollToOpenings}
      />

      {/* 2. Distinct Career Pathway Cards for Doctors & Hospital Staff */}
      <CareersPathwayCards />

      {/* 3. Why Join Us (5 Core Themes Transformed into Visual Cards) */}
      <CareersWhyJoinUs />

      {/* 5. Recruitment Call-To-Action ("Build Your Future with SRM Global Hospitals") */}
      <CareersRecruitmentCTA
        onExploreClick={handleScrollToOpenings}
        onApplyModalClick={handleScrollToOpenings}
      />

    </>
  );
}
