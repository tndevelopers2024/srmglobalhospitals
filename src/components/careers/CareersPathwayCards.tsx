"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CareersPathwayCards() {
  return (
    <section id="career-pathways" className="careers-pathways-section" aria-label="Career Pathways at SRM Global Hospitals">
      <div className="careers-container">
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 48px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(107, 74, 152, 0.08)",
              border: "1px solid rgba(107, 74, 152, 0.2)",
              borderRadius: "100px",
              padding: "6px 18px",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#6B4A98",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Explore Career Pathways
          </div>
          <h2
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 38px)",
              color: "#1a1a2e",
              fontWeight: 700,
              lineHeight: 1.25,
              margin: "0 0 16px",
            }}
          >
            Find Your Role at SRM Global Hospitals
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4a5568",
              margin: 0,
            }}
          >
            Whether you are a physician committed to clinical breakthrough or a dedicated healthcare
            professional powering patient care, discover your professional journey with us.
          </p>
        </div>

        {/* 2 Distinguished Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            marginBottom: "60px",
          }}
        >
          {/* Card 1: Careers for Doctors */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 30px rgba(107, 74, 152, 0.07)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
              <Image
                src="/images/careers/doctors-card.jpg"
                alt="Doctor examining clinical scans at SRM Global Hospitals"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(20, 9, 43, 0.75) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "24px",
                  right: "24px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(107, 74, 152, 0.9)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "6px",
                  }}
                >
                  Medical & Clinical Specialists
                </span>
              </div>
            </div>

            <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <h3
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: "26px",
                  color: "#1a1a2e",
                  fontWeight: 700,
                  margin: "0 0 12px",
                }}
              >
                Careers for Doctors
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#4a5568",
                  margin: "0 0 20px",
                  flexGrow: 1,
                }}
              >
                Join an esteemed multidisciplinary faculty across 40+ medical specialties. Practice in
                state-of-the-art modular operating theatres, biplane cath labs, and intensive care suites
                with robust clinical and academic growth.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "28px",
                }}
              >
                {[
                  "Consultant Specialists",
                  "Duty Medical Officers (DMO)",
                  "40+ Clinical Departments",
                  "CME & Academic Linkage",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#f4edf9",
                      color: "#6B4A98",
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "5px 12px",
                      borderRadius: "100px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/careers/doctors"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #6B4A98 0%, #4a2f73 100%)",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "14px 24px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(107, 74, 152, 0.3)",
                  transition: "all 0.2s ease",
                }}
              >
                <span>Explore Doctor Opportunities</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2: Careers for Hospital Staff */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 30px rgba(34, 148, 211, 0.07)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
              <Image
                src="/images/careers/staff-card.jpg"
                alt="Nursing and hospital staff at SRM Global Hospitals"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(13, 27, 58, 0.75) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "24px",
                  right: "24px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(34, 148, 211, 0.9)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: "6px",
                  }}
                >
                  Nursing, Allied Health & Admin
                </span>
              </div>
            </div>

            <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <h3
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: "26px",
                  color: "#1a1a2e",
                  fontWeight: 700,
                  margin: "0 0 12px",
                }}
              >
                Careers for Hospital Staff
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#4a5568",
                  margin: "0 0 20px",
                  flexGrow: 1,
                }}
              >
                Be the backbone of patient recovery. Discover opportunities across registered nursing,
                diagnostic imaging, echocardiography, catheterization lab, pharmacy, billing/TPA desk,
                marketing, and facility operations.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "28px",
                }}
              >
                {[
                  "Staff Nurses & Inpatient Care",
                  "Echo, Cath Lab & Imaging Techs",
                  "Pharmacy & Laboratory",
                  "Operations, Billing & Admin",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#eaf5fc",
                      color: "#1a73a7",
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "5px 12px",
                      borderRadius: "100px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/careers/hospital-staff"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #2294D3 0%, #156da2 100%)",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "14px 24px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(34, 148, 211, 0.3)",
                  transition: "all 0.2s ease",
                }}
              >
                <span>Explore Staff Opportunities</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
