"use client";

import { useState } from "react";
import CareersApplicationModal from "./CareersApplicationModal";
import CareerJobFilters from "./CareerJobFilters";
import { ALL_JOBS, JobItem } from "./CareersFilterAndJobs";

export default function DoctorCareersContent() {
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"apply" | "details">("apply");

  // Filter medical / doctor roles from ALL_JOBS
  const doctorJobs = ALL_JOBS.filter((job) => job.category === "medical");

  const handleApplyDoctor = (job?: JobItem) => {
    if (job) {
      setSelectedJob(job);
    } else {
      setSelectedJob({
        id: "doctor-general-application",
        title: "Medical Consultant / Specialist Doctor Position",
        department: "Clinical Specialties & Super-Specialty Medicine",
        category: "medical",
        jobType: "Full Time / Visiting Consultant",
        type: "Full Time / Visiting Consultant",
        jobLocation: "Chengalpattu, Chennai",
        location: "Chengalpattu, Chennai",
        locationFilter: "Chengalpattu",
        experience: "Freshers to Senior Consultants",
        experienceLevel: "all",
        qualification: "MBBS / MD / MS / DNB / DM / M.Ch with Valid TNMC Registration",
        jobSummary:
          "Expression of interest for Specialist, Consultant, and Fellow doctors across clinical departments.",
        overview:
          "Expression of interest for Specialist, Consultant, and Fellow doctors across clinical departments.",
        responsibilities: [
          "Provide specialized clinical consultations and inpatient / outpatient care",
          "Perform clinical interventions, diagnostic procedures, or surgeries",
          "Collaborate with multidisciplinary teams and clinical audit boards",
          "Ensure adherence to NABH quality protocols and clinical guidelines",
        ],
        eligibilityCriteria: [
          "Recognized medical degree (MBBS, MD, MS, DNB, DM, M.Ch)",
          "Active Tamil Nadu Medical Council (TNMC) registration",
          "Patient-first approach and high ethical clinical standards",
        ],
        qualificationsList: [
          "Recognized medical degree (MBBS, MD, MS, DNB, DM, M.Ch)",
          "Active Tamil Nadu Medical Council (TNMC) registration",
        ],
        preferredCandidate: [
          "Experience in tertiary care or teaching hospitals",
          "Demonstrated expertise in super-specialty procedures",
        ],
        keySkills: [
          "Clinical Diagnosis & Patient Care",
          "Surgical / Interventional Precision",
          "Multidisciplinary Team Collaboration",
          "Medical Ethics & Communication",
        ],
      });
    }
    setModalMode("apply");
    setIsModalOpen(true);
  };

  return (
    <div className="doctors-careers-content">
      {/* 1. Hero Section matching Departments & Reference Style */}
      <section className="page-hero-frame" style={{ position: "relative", overflow: "hidden", minHeight: "380px" }}>
        <img
          src="/images/careers/doctors-career-hero.jpg"
          alt="Doctors and surgeons at SRM Global Hospitals"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 25%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(20, 9, 43, 0.86) 0%, rgba(35, 19, 74, 0.80) 55%, rgba(13, 27, 58, 0.86) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "85px 32px 65px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.15,
              color: "#fff",
              margin: "0 0 16px",
              fontWeight: 700,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.35)",
            }}
          >
            Doctors Careers & Medical Excellence
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.88)",
              margin: "0 auto 28px",
              maxWidth: "680px",
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Practice high-precision medicine alongside distinguished clinicians and surgical leaders.
            Access world-class surgical theaters, biplane catheterization labs, and academic medical infrastructure at SRM Global Hospitals, Chennai.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#doctor-opportunities"
              style={{
                background: "#6B4A98",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                padding: "14px 28px",
                borderRadius: "10px",
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                boxShadow: "0 4px 16px rgba(107, 74, 152, 0.35)",
                transition: "all 0.2s ease",
              }}
            >
              View Clinical Openings
            </a>
          </div>

          {/* Key Metrics Banner */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "20px",
              marginTop: "44px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <div>
              <div style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>
                200+
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Super Speciality Beds
              </div>
            </div>
            <div>
              <div style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>
                40+
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Clinical Specialties
              </div>
            </div>
            <div>
              <div style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>
                NABH
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Quality Accredited
              </div>
            </div>
            <div>
              <div style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>
                24/7
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Emergency & Critical Care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction to Medical Career Opportunities */}
      <section
        id="doctor-application"
        className="careers-application-section"
        aria-label="Doctor career opportunities and application form"
      >
        <div className="careers-container careers-application-layout">
          <div className="careers-application-intro">
            <span
              style={{
                color: "#6B4A98",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Clinical Practice At SRM Global Hospitals
            </span>
            <h2
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 36px)",
                color: "#1a1a2e",
                fontWeight: 700,
                margin: "0 0 16px",
              }}
            >
              Where Compassionate Medicine Meets Surgical Innovation
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#4a5568",
                margin: 0,
              }}
            >
              At SRM Global Hospitals, our physicians are empowered to deliver uncompromising patient-centric care.
              With institutional support, an academic synergy with SRM Institute of Science and Technology, and seamless
              access to state-of-the-art diagnostic and surgical equipment, our clinicians lead treatment paradigms across tertiary and quaternary healthcare.
            </p>
          </div>
          <div className="careers-application-form">
          <CareersApplicationModal
            inline
            isOpen
            onClose={() => {}}
            selectedJob={null}
          />
          </div>
        </div>
      </section>

      {/* 4. Opportunities for Consultants & Specialist Doctors */}
      <section id="doctor-opportunities" style={{ padding: "80px 24px", background: "#f8fafd" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px" }}>
            <span
              style={{
                color: "#2294D3",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Current Medical Openings
            </span>
            <h2
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 36px)",
                color: "#1a1a2e",
                fontWeight: 700,
                margin: "0 0 16px",
              }}
            >
              Physician & Clinical Specialist Opportunities
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "#4a5568", margin: 0 }}>
              Review verified openings currently hiring at our Chengalpattu facility, or express interest for senior consultant appointments.
            </p>
          </div>

          {/* Active Job Cards */}
          <CareerJobFilters jobs={doctorJobs} onApply={handleApplyDoctor} accentColor="#6B4A98" />

          {/* Consultant Expression of Interest Box */}
          <div
            style={{
              background: "linear-gradient(135deg, #f4edf9 0%, #edf5fc 100%)",
              borderRadius: "16px",
              padding: "36px",
              border: "1px solid #d8cde6",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "22px", color: "#1a1a2e", fontWeight: 700, margin: "0 0 8px" }}>
                Consultant, Senior Specialist & Visiting Faculty Opportunities
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#4a5568", margin: 0, maxWidth: "750px" }}>
                Are you a distinguished Medical Consultant (MD/MS/DNB/DM/M.Ch) looking to establish or expand your clinical practice?
                We welcome Expressions of Interest from visionary medical specialists across all clinical and surgical disciplines.
              </p>
            </div>
            <button
              onClick={() => handleApplyDoctor()}
              style={{
                background: "#6B4A98",
                color: "#ffffff",
                border: "none",
                padding: "14px 24px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(107, 74, 152, 0.25)",
              }}
            >
              Submit Consultant CV
            </button>
          </div>
        </div>
      </section>

      {/* 5. Eligibility & Qualification Requirements */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 50px" }}>
            <span
              style={{
                color: "#6B4A98",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Standards of Practice
            </span>
            <h2
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 36px)",
                color: "#1a1a2e",
                fontWeight: 700,
                margin: "0 0 16px",
              }}
            >
              Eligibility & Medical Qualifications
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "#4a5568", margin: 0 }}>
              To maintain our stringent NABH quality benchmarks, all clinical appointments adhere to recognized national and international accreditation standards.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            <div
              style={{
                background: "#fcfbff",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #e9ecef",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 16px" }}>
                1. Recognized Qualifications
              </h3>
              <ul style={{ paddingLeft: "20px", color: "#4a5568", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
                <li><strong>Duty Medical Officers:</strong> MBBS graduate from an NMC recognized institution.</li>
                <li><strong>Specialist Doctors:</strong> MD / MS / DNB in relevant clinical or surgical specialty.</li>
                <li><strong>Super-Specialists:</strong> DM / M.Ch / DNB Super-Specialty or post-doctoral fellowships.</li>
              </ul>
            </div>

            <div
              style={{
                background: "#fcfbff",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #e9ecef",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 16px" }}>
                2. Mandatory Registration
              </h3>
              <ul style={{ paddingLeft: "20px", color: "#4a5568", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
                <li>Valid registration with the <strong>Tamil Nadu Medical Council (TNMC)</strong> is mandatory.</li>
                <li>Applicants registered with other State Medical Councils must have applied for reciprocal TNMC transfer.</li>
                <li>Clear background verification and good standing certificate.</li>
              </ul>
            </div>

            <div
              style={{
                background: "#fcfbff",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #e9ecef",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 16px" }}>
                3. Clinical Competencies
              </h3>
              <ul style={{ paddingLeft: "20px", color: "#4a5568", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
                <li>Dedication to ethical, evidence-based, patient-first care and clear clinical communication.</li>
                <li>Proficiency in electronic medical record (EMR/HIS) documentation and clinical audit compliance.</li>
                <li>Willingness to participate in 24/7 code resuscitations and emergency on-call rotas when required.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Clear Apply for Doctor Positions Call-To-Action */}
      <section className="careers-cta-section" aria-label="Apply for Doctor Positions at SRM Global Hospitals">
        <div className="careers-container">
          <div className="careers-cta-card">
            {/* Left Text */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(255, 255, 255, 0.12)",
                  padding: "5px 14px",
                  borderRadius: "100px",
                  fontSize: "11.5px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#e0f2fe",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                }}
              >
                <span>Physician Recruitment Desk</span>
              </div>

              <h2
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "38px",
                  lineHeight: 1.2,
                  color: "#ffffff",
                  margin: "0 0 16px",
                }}
              >
                Apply for Doctor Positions at SRM Global Hospitals
              </h2>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15.5px",
                  lineHeight: 1.7,
                  color: "rgba(255, 255, 255, 0.85)",
                  margin: "0 0 28px",
                  maxWidth: "540px",
                }}
              >
                Submit your clinical CV or contact our medical administration directly. We look forward to exploring how your medical expertise aligns with our clinical vision.
              </p>

              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href="tel:+919994255121"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#e2e8f0",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13.5px",
                    textDecoration: "none",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.32 1.58.59 2.33" />
                  </svg>
                  <span>HR Hotline: +91 9994255121 / 8754010369</span>
                </a>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#e2e8f0",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13.5px",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>SRM Global Hospitals, Kattankulathur, Chennai</span>
                </span>
              </div>
            </div>

            {/* Right Action Block */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                alignItems: "stretch",
                background: "rgba(255, 255, 255, 0.06)",
                padding: "36px 32px",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <button
                type="button"
                onClick={() => handleApplyDoctor()}
                style={{
                  background: "#ffffff",
                  color: "#1a1f5c",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "15px 32px",
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                }}
              >
                <span>Apply for Doctor Positions</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "rgba(255, 255, 255, 0.6)",
                  textAlign: "center",
                  margin: "4px 0 0",
                }}
              >
                SRM Nagar, Potheri, Chengalpattu, Chennai, Tamil Nadu 603 203
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Interactive Application / Details Modal */}
      <CareersApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedJob={selectedJob}
        mode={modalMode}
      />
    </div>
  );
}
