"use client";

import React, { useState } from "react";
import CareersHero from "./CareersHero";
import CareersPathwayCards from "./CareersPathwayCards";
import { JobItem } from "./CareersFilterAndJobs";
import CareersWhyJoinUs from "./CareersWhyJoinUs";
import CareersCultureTeam from "./CareersCultureTeam";
import CareersRecruitmentCTA from "./CareersRecruitmentCTA";
import CareersApplicationModal from "./CareersApplicationModal";

export interface CareersPageContentProps {
  initialDept?: string;
}

export default function CareersPageContent({ initialDept: _initialDept }: CareersPageContentProps = {}) {
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"apply" | "details">("apply");

  const handleGeneralApply = () => {
    setSelectedJob(null);
    setModalMode("apply");
    setIsModalOpen(true);
  };

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
        onApplyModalClick={handleGeneralApply}
      />

      {/* 2. Distinct Career Pathway Cards for Doctors & Hospital Staff */}
      <CareersPathwayCards />

      {/* 3. Why Join Us (5 Core Themes Transformed into Visual Cards) */}
      <CareersWhyJoinUs />

      {/* 4. Human-Centered Culture & Team Collaboration Section */}
      <CareersCultureTeam />

      {/* 5. Recruitment Call-To-Action ("Build Your Future with SRM Global Hospitals") */}
      <CareersRecruitmentCTA
        onExploreClick={handleScrollToOpenings}
        onApplyModalClick={handleGeneralApply}
      />

      {/* Interactive Application / Details Modal */}
      <CareersApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedJob={selectedJob}
        mode={modalMode}
      />
    </>
  );
}
