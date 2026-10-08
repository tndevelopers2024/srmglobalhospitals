"use client";

import React, { useState } from "react";
import { JobItem, ALL_JOBS } from "./CareersFilterAndJobs";

interface CareersFeaturedRolesProps {
  onApplyForJob: (job: JobItem) => void;
}

export default function CareersFeaturedRoles({ onApplyForJob }: CareersFeaturedRolesProps) {
  // Grab premier clinical roles from ALL_JOBS
  const featuredJobs = ALL_JOBS.filter(
    (j) =>
      j.id === "duty-medical-officer" ||
      j.id === "perfusionist" ||
      j.id === "staff-nurse" ||
      j.id === "cath-lab-technician"
  );

  const [openRoleId, setOpenRoleId] = useState<string>("");

  const toggleRole = (id: string) => {
    setOpenRoleId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="careers-featured-section" aria-label="Featured Clinical Roles">
      <div className="careers-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="careers-section-eyebrow">Spotlight Roles</div>
          <h2 className="careers-section-title">Featured Clinical &amp; Academic Positions</h2>
          <p className="careers-section-desc">
            In-depth details for our most actively recruited specialties across therapy, nursing
            administration, and consultant medical faculty.
          </p>
        </div>

        {/* Accordion / Deep Dive Cards */}
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {featuredJobs.map((role) => {
            const isOpen = openRoleId === role.id;
            return (
              <div key={role.id} className="careers-featured-card">
                <div className="careers-featured-header" onClick={() => toggleRole(role.id)}>
                  <div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px", flexWrap: "wrap" }}>
                      <span className="careers-badge-dept">{role.department}</span>
                      <span className="careers-badge-type">{role.type}</span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#1a1f5c",
                        margin: 0,
                      }}
                    >
                      {role.title}
                    </h3>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13px",
                        color: "#64748b",
                        display: "none",
                      }}
                    >
                      {isOpen ? "Collapse" : "View Full Details"}
                    </span>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: isOpen ? "#f3edf9" : "#f1f5f9",
                        color: isOpen ? "#6B4A98" : "#475569",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="careers-featured-body">
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14.5px",
                        lineHeight: 1.7,
                        color: "#475569",
                        marginBottom: "24px",
                      }}
                    >
                      {role.overview}
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "24px",
                        marginBottom: "24px",
                      }}
                    >
                      {/* Key Responsibilities */}
                      <div
                        style={{
                          background: "#f8fafc",
                          borderRadius: "16px",
                          padding: "20px 22px",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14.5px",
                            fontWeight: 600,
                            color: "#1a1f5c",
                            marginBottom: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span style={{ width: "6px", height: "16px", background: "#6B4A98", borderRadius: "3px" }} />
                          Key Responsibilities
                        </h4>
                        <ul style={{ margin: 0, padding: "0 0 0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                          {role.responsibilities.map((r, rIdx) => (
                            <li
                              key={rIdx}
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "13px",
                                lineHeight: 1.6,
                                color: "#475569",
                              }}
                            >
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Qualifications & Profile */}
                      <div
                        style={{
                          background: "#f8fafc",
                          borderRadius: "16px",
                          padding: "20px 22px",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14.5px",
                            fontWeight: 600,
                            color: "#1a1f5c",
                            marginBottom: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span style={{ width: "6px", height: "16px", background: "#0284c7", borderRadius: "3px" }} />
                          Qualifications &amp; Requirements
                        </h4>
                        <ul style={{ margin: 0, padding: "0 0 0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                          {role.qualificationsList.map((q, qIdx) => (
                            <li
                              key={qIdx}
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "13px",
                                lineHeight: 1.6,
                                color: "#475569",
                              }}
                            >
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "16px",
                        borderTop: "1px solid #f1f5f9",
                        flexWrap: "wrap",
                        gap: "12px",
                      }}
                    >
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#64748b" }}>
                        Experience: <strong>{role.experience}</strong> • Location: <strong>{role.location}</strong>
                      </div>

                      <button
                        type="button"
                        onClick={() => onApplyForJob(role)}
                        className="careers-btn-primary"
                        style={{ padding: "10px 28px", fontSize: "14px" }}
                      >
                        <span>Apply for {role.title}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
