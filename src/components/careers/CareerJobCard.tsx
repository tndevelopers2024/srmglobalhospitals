"use client";

import React from "react";
import { JobItem } from "./CareersFilterAndJobs";

export interface CareerJobCardProps {
  job: JobItem;
  isOpen: boolean;
  onToggle: () => void;
  onApply: (job: JobItem) => void;
  accentColor?: string;
}

export default function CareerJobCard({
  job,
  isOpen,
  onToggle,
  onApply,
  accentColor = "#6B4A98",
}: CareerJobCardProps) {
  const contactHR = job.contactNumber || "+91 9994255121 / 8754010369";

  return (
    <div className="careers-featured-card" style={{ marginBottom: 0 }}>
      {/* Featured Header */}
      <div
        className="careers-featured-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        style={{
          cursor: "pointer",
          userSelect: "none",
          padding: "24px 30px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "18px",
          transition: "background 0.15s ease",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Top Badges Row */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              marginBottom: "10px",
              flexWrap: "wrap",
            }}
          >
            <span className="careers-badge-dept">{job.department}</span>
            <span className="careers-badge-type">{job.jobType}</span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "#0369a1",
                background: "#f0f9ff",
                padding: "3px 10px",
                borderRadius: "6px",
                border: "1px solid #bae6fd",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{job.jobLocation.length > 45 ? `${job.jobLocation.substring(0, 42)}...` : job.jobLocation}</span>
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "#475569",
                background: "#f1f5f9",
                padding: "3px 10px",
                borderRadius: "6px",
              }}
            >
              Exp: {job.experience}
            </span>
          </div>

          {/* Job Title */}
          <h3
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "22px",
              fontWeight: 600,
              color: "#1a1f5c",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {job.title}
          </h3>

          {/* Collapsed Snippet */}
          {!isOpen && (
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                lineHeight: 1.6,
                color: "#64748b",
                margin: "10px 0 0",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                maxWidth: "880px",
              }}
            >
              {job.jobSummary}
            </p>
          )}
        </div>

        {/* Action Buttons: Apply Now & View Details Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0, flexWrap: "wrap", paddingTop: "2px" }}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onApply(job);
            }}
            className="careers-btn-apply-sm"
            style={{ padding: "8px 22px" }}
          >
            <span>Apply Now</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="careers-btn-details-sm"
            style={{
              padding: "7px 18px",
              borderRadius: "100px",
              background: isOpen ? "#f3edf9" : "#ffffff",
              borderColor: isOpen ? accentColor : "#cbd5e1",
              color: isOpen ? accentColor : "#1a1f5c",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              transition: "all 0.2s ease",
            }}
          >
            <span>{isOpen ? "Hide Details" : "View Details"}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.25s ease",
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      {/* Featured Body: Job Details Matching Image 1 Reference Exactly */}
      {isOpen && (
        <div className="careers-featured-body" style={{ paddingTop: "24px" }}>
          {/* 1. Job Summary */}
          <div style={{ marginBottom: "22px" }}>
            <h4
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "14.5px",
                fontWeight: 600,
                color: "#1a1f5c",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ width: "4px", height: "16px", background: accentColor, borderRadius: "2px" }} />
              Job Summary
            </h4>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14.5px",
                lineHeight: 1.7,
                color: "#475569",
                margin: 0,
              }}
            >
              {job.jobSummary}
            </p>
          </div>

          {/* Job Metadata Bar: Job Type, Job Location & Contact HR Cell */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              background: "#f8fafc",
              padding: "16px 20px",
              borderRadius: "14px",
              border: "1px solid #e2e8f0",
              marginBottom: "24px",
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11.5px",
                  color: "#64748b",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "3px",
                }}
              >
                Job Type
              </span>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", color: "#1a1f5c", fontWeight: 600 }}>
                {job.jobType}
              </span>
            </div>

            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11.5px",
                  color: "#64748b",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "3px",
                }}
              >
                Job Location
              </span>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", color: "#1a1f5c", fontWeight: 600 }}>
                {job.jobLocation}
              </span>
            </div>

            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11.5px",
                  color: "#64748b",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "3px",
                }}
              >
                Contact HR Cell
              </span>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", color: accentColor, fontWeight: 600 }}>
                {contactHR}
              </span>
            </div>
          </div>

          {/* 2 & 3: Key Responsibilities & Eligibility / Preferred Candidate side by side */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "24px",
            }}
          >
            {/* Key Responsibilities */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "22px 24px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
              }}
            >
              <h4
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#1a1f5c",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ width: "4px", height: "16px", background: "#2294D3", borderRadius: "2px" }} />
                Key Responsibilities
              </h4>
              <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {job.responsibilities.map((r, rIdx) => (
                  <li key={rIdx} style={{ fontFamily: "Inter, sans-serif", fontSize: "13.5px", lineHeight: 1.6, color: "#475569" }}>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Criteria & Preferred Candidate */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "22px 24px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
              }}
            >
              <h4
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#1a1f5c",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ width: "4px", height: "16px", background: accentColor, borderRadius: "2px" }} />
                Eligibility Criteria
              </h4>
              <ul style={{ margin: "0 0 16px", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {job.eligibilityCriteria.map((c, cIdx) => (
                  <li key={cIdx} style={{ fontFamily: "Inter, sans-serif", fontSize: "13.5px", lineHeight: 1.6, color: "#475569" }}>
                    {c}
                  </li>
                ))}
              </ul>

              {job.preferredCandidate && job.preferredCandidate.length > 0 && (
                <>
                  <h5
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "13.5px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      margin: "14px 0 10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ width: "4px", height: "14px", background: "#0284c7", borderRadius: "2px" }} />
                    Preferred Candidate
                  </h5>
                  <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {job.preferredCandidate.map((p, pIdx) => (
                      <li key={pIdx} style={{ fontFamily: "Inter, sans-serif", fontSize: "13.5px", lineHeight: 1.6, color: "#475569" }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* 4. Key Skills */}
          {job.keySkills && job.keySkills.length > 0 && (
            <div style={{ marginBottom: "22px" }}>
              <h4
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#1a1f5c",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ width: "4px", height: "16px", background: accentColor, borderRadius: "2px" }} />
                Key Skills
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {job.keySkills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12.5px",
                      fontWeight: 500,
                      color: "#1a1f5c",
                      background: "#f1f5f9",
                      padding: "6px 14px",
                      borderRadius: "100px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Benefits (if applicable) */}
          {job.benefits && job.benefits.length > 0 && (
            <div style={{ marginBottom: "22px" }}>
              <h4
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1a1f5c",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ width: "4px", height: "14px", background: "#16a34a", borderRadius: "2px" }} />
                Role Benefits
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {job.benefits.map((b, bIdx) => (
                  <span
                    key={bIdx}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12.5px",
                      fontWeight: 500,
                      color: "#15803d",
                      background: "#f0fdf4",
                      padding: "5px 12px",
                      borderRadius: "100px",
                      border: "1px solid #bbf7d0",
                    }}
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Card Footer Action */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "20px",
              borderTop: "1px solid #f1f5f9",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#64748b" }}>
              SRM Global Hospitals • Kattankulathur, Chennai
              {contactHR ? ` • Inquiry: ${contactHR}` : ""}
            </div>
            <div>
              <button
                type="button"
                onClick={() => onApply(job)}
                className="careers-btn-apply-sm"
              >
                <span>Apply for this Position</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
