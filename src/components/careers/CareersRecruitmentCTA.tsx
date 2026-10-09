"use client";

import React from "react";

interface CareersRecruitmentCTAProps {
  onExploreClick: () => void;
  onApplyModalClick: () => void;
}

export default function CareersRecruitmentCTA({
  onExploreClick,
  onApplyModalClick,
}: CareersRecruitmentCTAProps) {
  return (
    <section className="careers-cta-section" aria-label="Build Your Future with SRM Global Hospitals">
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
              <span>Talent Acquisition Cell</span>
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
              Build Your Future with SRM Global Hospitals
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
              Whether you are an accomplished specialist physician, an enthusiastic junior medical
              officer, an empathetic nurse, an allied health expert, or a skilled healthcare administrator,
              we welcome your passion for healing.
            </p>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="mailto:careers@srmglobalhospitals.com"
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
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>careers@srmglobalhospitals.com</span>
              </a>

              <a
                href="tel:+918925856353"
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
                <span>HR Desk: +91 8925856353</span>
              </a>
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
              onClick={onApplyModalClick}
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
              <span>Apply Now</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={onExploreClick}
              style={{
                background: "transparent",
                color: "#ffffff",
                fontFamily: "Poppins, sans-serif",
                fontSize: "14.5px",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "100px",
                border: "1.5px solid rgba(255, 255, 255, 0.35)",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.2s ease",
              }}
            >
              <span>Explore Open Positions</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
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
  );
}
