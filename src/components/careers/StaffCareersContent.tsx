"use client";

import React, { useState } from "react";
import CareersApplicationModal from "./CareersApplicationModal";
import CareerJobCard from "./CareerJobCard";
import { ALL_JOBS, JobItem } from "./CareersFilterAndJobs";

export default function StaffCareersContent() {
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"apply" | "details">("apply");
  const [expandedJobIds, setExpandedJobIds] = useState<Set<string>>(new Set());

  // Non-physician / hospital staff jobs from ALL_JOBS
  const staffJobs = ALL_JOBS.filter((job) => job.category !== "medical");

  const toggleJob = (id: string) => {
    setExpandedJobIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleApplyStaff = (job?: JobItem) => {
    if (job) {
      setSelectedJob(job);
    } else {
      setSelectedJob({
        id: "staff-general-application",
        title: "Hospital Staff / Allied Health Position",
        department: "Nursing, Allied Health, Diagnostics & Operations",
        category: "nursing",
        jobType: "Full Time • In Person / Rotational Shifts",
        type: "Full Time • In Person",
        jobLocation: "Kattankulathur, Chennai",
        location: "Kattankulathur, Chennai",
        locationFilter: "kattankulathur",
        experience: "Freshers to Experienced Professionals",
        experienceLevel: "all",
        qualification: "GNM / B.Sc Nursing / Diploma / B.Sc Allied Health / Graduate",
        jobSummary:
          "General application for Nursing, Allied Health Technicians, Diagnostic Staff, Pharmacy, Administration, and Operations.",
        overview:
          "General application for Nursing, Allied Health Technicians, Diagnostic Staff, Pharmacy, Administration, and Operations.",
        responsibilities: [
          "Deliver compassionate, patient-centered clinical care or operational support",
          "Adhere strictly to NABH hospital protocols, safety, and hygiene standards",
          "Coordinate effectively with medical doctors, nurses, and patient care teams",
          "Ensure meticulous documentation and patient records management",
        ],
        eligibilityCriteria: [
          "Relevant professional diploma or degree from a recognized institution",
          "Active registration with respective regulatory councils where applicable",
          "Strong communication, empathy, and patient-first dedication",
        ],
        qualificationsList: [
          "Relevant professional diploma or degree from a recognized institution",
          "Active registration with respective regulatory councils where applicable",
        ],
        preferredCandidate: [
          "Prior experience in multi-specialty or NABH accredited hospitals",
          "Willingness to work in rotational shifts where applicable",
        ],
        keySkills: [
          "Patient Empathy & Care",
          "Hospital Safety & Infection Control",
          "Diagnostic / Technical Precision",
          "Teamwork & Effective Communication",
        ],
      });
    }
    setModalMode("apply");
    setIsModalOpen(true);
  };

  const handleViewDetails = (job: JobItem) => {
    setSelectedJob(job);
    setModalMode("details");
    setIsModalOpen(true);
  };

  const staffCategories = [
    {
      title: "1. Nursing & Patient Care",
      icon: "👩‍⚕️",
      roles: "Staff Nurses (Ward, ICU, CCU, OT, Emergency), Nursing Supervisors, Nursing Assistants.",
      desc: "Provide round-the-clock bedside nursing care, medication administration, surgical assisting, and empathetic patient monitoring.",
      reqs: "GNM / B.Sc Nursing with valid Tamil Nadu Nurses & Midwives Council registration.",
    },
    {
      title: "2. Diagnostic & Laboratory Sciences",
      icon: "🔬",
      roles: "Medical Lab Technologists (Biochemistry, Pathology, Microbiology), Blood Bank Technicians, Phlebotomists.",
      desc: "Perform accurate clinical sample analysis, automated blood investigations, and diagnostic testing maintaining NABL standards.",
      reqs: "Diploma or B.Sc in Medical Laboratory Technology (DMLT / BMLT).",
    },
    {
      title: "3. Radiology & Cardiac Technology",
      icon: "🩻",
      roles: "Radiographers (X-Ray, CT, MRI), Echo Technicians, Cath Lab Technicians, Perfusionists.",
      desc: "Operate advanced non-invasive and interventional imaging machinery, assist during cardiac catheterizations, and manage life support systems.",
      reqs: "B.Sc in Medical Imaging / Cardiac Care / Perfusion Technology or relevant Diploma.",
    },
    {
      title: "4. Pharmacy & Medication Management",
      icon: "💊",
      roles: "Hospital Pharmacists, Inpatient & Outpatient Dispensing Pharmacists, Pharmacy Assistants.",
      desc: "Ensure accurate prescription dispensing, medication inventory control, cold-chain maintenance, and patient drug counseling.",
      reqs: "D.Pharm / B.Pharm with State Pharmacy Council registration.",
    },
    {
      title: "5. Rehabilitation & Physical Therapy",
      icon: "🏃",
      roles: "Physiotherapists, Occupational Therapists, Neuro & Ortho Rehabilitation Specialists.",
      desc: "Design and implement post-surgical recovery, mobility restoration, and cardiopulmonary rehabilitation regimens.",
      reqs: "Bachelor of Physiotherapy (BPT) from a recognized university.",
    },
    {
      title: "6. Hospital Administration & Patient Services",
      icon: "📋",
      roles: "Patient Care Coordinators, Receptionists, Billing & Insurance Executives (TPA Desk), Operations Staff.",
      desc: "Facilitate smooth patient admissions, cashless insurance approvals, empathetic front-desk assistance, and hospital administrative operations.",
      reqs: "Any Degree / B.Com / MBA Healthcare / Hospital Administration or relevant qualification.",
    },
    {
      title: "7. Environmental Hygiene & Facility Care",
      icon: "✨",
      roles: "Housekeeping Supervisors, Facility Attendants, Bio-Medical Waste Segregation Coordinators.",
      desc: "Maintain highest NABH cleanliness standards, environmental sanitization, and sterile hygiene across clinical areas.",
      reqs: "Diploma / Degree in Hotel/Facility Management or graduate with hospital housekeeping experience.",
    },
    {
      title: "8. Corporate Governance, Audit & Outreach",
      icon: "💼",
      roles: "Internal Audit Executives, Field Marketing Executives, Branding & Public Relations Specialists.",
      desc: "Uphold institutional compliance, financial audit integrity, healthcare branding, and doctor referral community outreach.",
      reqs: "CA Inter / M.Com / MBA in Finance or Marketing / Mass Communications.",
    },
  ];

  return (
    <div className="staff-careers-content">
      {/* 1. Hero Section matching Departments & Reference Style */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "380px" }}>
        <img
          src="/images/careers/staff-career-hero.jpg"
          alt="Hospital staff, nurses, and technicians at SRM Global Hospitals"
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
            Hospital Staff Careers & Healthcare Support
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
            Empower compassionate patient care through excellence in nursing, allied health, diagnostic technology, and hospital operations at SRM Global Hospitals, Chennai.
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
              href="#staff-opportunities"
              style={{
                background: "#2294D3",
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
                boxShadow: "0 4px 16px rgba(34, 148, 211, 0.35)",
                transition: "all 0.2s ease",
              }}
            >
              View Staff Openings
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
                1,000+
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Healthcare Staff
              </div>
            </div>
            <div>
              <div style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>
                24/7
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Nursing & Emergency
              </div>
            </div>
            <div>
              <div style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>
                Full-Scope
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Allied Health & Tech
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
          </div>
        </div>
      </section>

      {/* 2. Introduction to Hospital Staff Opportunities */}
      <section style={{ padding: "70px 24px", background: "#f8fafd" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
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
              The Heart of Patient Care
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
              Powering Healing Through Teamwork and Empathy
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
              Every positive patient recovery at SRM Global Hospitals is made possible by our dedicated nursing, allied health,
              diagnostic, and administrative personnel. From the emergency triage to surgical recovery and discharge, our
              multidisciplinary hospital staff uphold clinical safety, dignity, and compassionate care every hour of every day.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>🩺</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" }}>
                Patient-Centric Care Culture
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4a5568", margin: 0 }}>
                We foster a respectful, supportive clinical environment where patient empathy and mutual professional dignity guide every interaction across our hospital wards and outpatient centers.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>⚙️</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" }}>
                High-End Medical Technology Training
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4a5568", margin: 0 }}>
                Technicians and nurses gain hands-on training on world-class diagnostic modalities, including Siemens & GE echocardiography, multislice CT, advanced cath labs, and CPB life support systems.
              </p>
            </div>

            <div
              style={{
                background: "#ffffff",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>🛡️</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" }}>
                Structured Growth & Quality Compliance
              </h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#4a5568", margin: 0 }}>
                Continuous training in NABH quality standards, infection control, bio-medical waste segregation, patient safety protocols, and periodic performance-linked advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Job Categories and Role Descriptions */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 50px" }}>
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
              Staff Departments
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
              Job Categories & Role Profiles
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "#4a5568", margin: 0 }}>
              SRM Global Hospitals employs across clinical nursing, diagnostic technologies, pharmacy, patient administration, and facility operations.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {staffCategories.map((cat) => (
              <div
                key={cat.title}
                style={{
                  background: "#fcfbff",
                  padding: "28px",
                  borderRadius: "16px",
                  border: "1px solid #e9ecef",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <span style={{ fontSize: "28px" }}>{cat.icon}</span>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: 0 }}>
                    {cat.title}
                  </h3>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#6B4A98", marginBottom: "8px" }}>
                  {cat.roles}
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4a5568", margin: "0 0 14px", flexGrow: 1 }}>
                  {cat.desc}
                </p>
                <div
                  style={{
                    background: "#ffffff",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid #edf2f7",
                    fontSize: "12px",
                    color: "#64748b",
                    lineHeight: 1.5,
                  }}
                >
                  <strong>Qualification Requirement:</strong> {cat.reqs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Active Hospital Staff Openings */}
      <section id="staff-opportunities" style={{ padding: "80px 24px", background: "#f8fafd" }}>
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
              Current Staff Openings
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
              Active Hospital Staff & Administrative Vacancies
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "#4a5568", margin: 0 }}>
              Explore verified positions currently accepting applications across technical, clinical support, and administrative divisions.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
            {staffJobs.map((job) => (
              <CareerJobCard
                key={job.id}
                job={job}
                isOpen={expandedJobIds.has(job.id)}
                onToggle={() => toggleJob(job.id)}
                onApply={handleApplyStaff}
                accentColor="#2294D3"
              />
            ))}
          </div>

          {/* General Nursing & Allied Health Application Box */}
          <div
            style={{
              background: "linear-gradient(135deg, #edf5fc 0%, #f4edf9 100%)",
              borderRadius: "16px",
              padding: "36px",
              border: "1px solid #cce4f7",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "22px", color: "#1a1a2e", fontWeight: 700, margin: "0 0 8px" }}>
                Staff Nurse, Pharmacy & General Hospital Staff Application
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#4a5568", margin: 0, maxWidth: "750px" }}>
                Looking for opportunities in Staff Nursing (GNM/B.Sc), Laboratory Diagnostics, Clinical Pharmacy, or Front-Office Patient Coordination?
                Submit your profile and resume to our recruitment team.
              </p>
            </div>
            <button
              onClick={() => handleApplyStaff()}
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
                boxShadow: "0 4px 14px rgba(34, 148, 211, 0.25)",
              }}
            >
              Submit Staff Profile
            </button>
          </div>
        </div>
      </section>

      {/* 5. Employee Development Opportunities */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 50px" }}>
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
              Empowering Our Team
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
              Employee Development & Career Progression
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "#4a5568", margin: 0 }}>
              We invest in our staff with continuous learning, certification assistance, and clearly defined career pathways.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            <div style={{ background: "#f8fafd", padding: "28px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>🏆</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>NABH & Quality Training</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Continuous training modules in hospital safety, infection control, bio-medical waste segregation, and patient rights.
              </p>
            </div>

            <div style={{ background: "#f8fafd", padding: "28px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>⚡</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>BLS & ACLS Certification</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Hands-on simulation training and institutional support for resuscitation, code response, and acute trauma triage.
              </p>
            </div>

            <div style={{ background: "#f8fafd", padding: "28px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>📈</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>Internal Promotion Tracks</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Structured performance reviews enabling advancement from junior staff to shift leads, supervisors, and department managers.
              </p>
            </div>

            <div style={{ background: "#f8fafd", padding: "28px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>🖥️</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>Healthcare IT & Systems</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Proficiency training on Hospital Information Systems (HIS), electronic medical records (EMR), PACS, and digital billing portals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Workplace Benefits (Verified) */}
      <section style={{ padding: "80px 24px", background: "#fcfbff" }}>
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
              Workplace Experience
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
              Verified Workplace Environment & Benefits
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "#4a5568", margin: 0 }}>
              Working at SRM Global Hospitals means joining a respectful, supportive institution connected with the landmark SRM campus ecosystem.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            <div style={{ background: "#ffffff", padding: "28px", borderRadius: "14px", border: "1px solid #edf2f7" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>🚆</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>Prime Transit Access</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Located directly off the GST Road highway, right adjacent to the Kattankulathur suburban railway station with frequent local train and bus connections.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "28px", borderRadius: "14px", border: "1px solid #edf2f7" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>🏥</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>Staff Medical Coverage</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Subsidized hospital healthcare services, emergency medical access, and employee healthcare assistance.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "28px", borderRadius: "14px", border: "1px solid #edf2f7" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>🍲</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>Subsidized Dining</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                Access to clean, hygienic hospital dining cafeterias serving nutritious meals and refreshments during shifts.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "28px", borderRadius: "14px", border: "1px solid #edf2f7" }}>
              <div style={{ fontSize: "28px", marginBottom: "12px" }}>🤝</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a2e", margin: "0 0 8px" }}>Culture of Respect</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                A collegiate workplace where every nurse, technician, coordinator, and administrator is valued as an essential pillar of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Clear Apply for Hospital Staff Positions Call-To-Action */}
      <section className="careers-cta-section" aria-label="Apply for Hospital Staff Positions at SRM Global Hospitals">
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
                <span>Staff Recruitment Desk</span>
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
                Apply for Hospital Staff Positions at SRM Global Hospitals
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
                Submit your resume or contact our human resources team today to discover rewarding opportunities in nursing, healthcare technology, and hospital operations.
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
                onClick={() => handleApplyStaff()}
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
                <span>Apply for Hospital Staff Positions</span>
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
                SRM Nagar, Potheri, Kattankulathur, Chennai, Tamil Nadu 603 203
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
