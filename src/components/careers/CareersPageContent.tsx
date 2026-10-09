"use client";

import React, { useState } from "react";
import CareersHero from "./CareersHero";
import CareersFilterAndJobs, { JobItem } from "./CareersFilterAndJobs";
import CareersWhyJoinUs from "./CareersWhyJoinUs";
import CareersCultureTeam from "./CareersCultureTeam";
import CareersRecruitmentCTA from "./CareersRecruitmentCTA";
import CareersApplicationModal from "./CareersApplicationModal";

export interface CareersPageContentProps {
  initialDept?: string;
}

export default function CareersPageContent({ initialDept }: CareersPageContentProps = {}) {
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"apply" | "details">("apply");

  const handleApplyForJob = (job: JobItem) => {
    setSelectedJob(job);
    setModalMode("apply");
    setIsModalOpen(true);
  };

  const handleViewJobDetails = (job: JobItem) => {
    setSelectedJob(job);
    setModalMode("details");
    setIsModalOpen(true);
  };

  const handleGeneralApply = () => {
    setSelectedJob(null);
    setModalMode("apply");
    setIsModalOpen(true);
  };

  const handleScrollToOpenings = () => {
    const el = document.getElementById("openings");
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

      {/* 2. Search, Filter, and Job Listings (All 10 Real Roles) */}
      <CareersFilterAndJobs
        initialDept={initialDept}
        onApplyForJob={handleApplyForJob}
        onViewJobDetails={handleViewJobDetails}
        onGeneralApply={handleGeneralApply}
      />

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
