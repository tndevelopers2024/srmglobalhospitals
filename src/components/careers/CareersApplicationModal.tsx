"use client";

import React, { useState, useEffect } from "react";
import { JobItem, ALL_JOBS } from "./CareersFilterAndJobs";

interface CareersApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJob: JobItem | null;
  mode?: "apply" | "details";
}

export default function CareersApplicationModal({
  isOpen,
  onClose,
  selectedJob,
}: CareersApplicationModalProps) {
  const [position, setPosition] = useState<string>("General Application");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");
  const [experienceYears, setExperienceYears] = useState("0-1");
  const [currentOrg, setCurrentOrg] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (selectedJob) {
      setPosition(selectedJob.title);
    } else {
      setPosition("General Application / Specialty Not Listed");
    }
  }, [selectedJob]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setIsSubmitted(false);
      setErrorMsg("");
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg("Please fill in your name, email address, and mobile number.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `SRM-CAREER-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplicationId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div
      className="careers-modal-overlay"
      onClick={onClose}
    >
      <div
        className="careers-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background: "#f1f5f9",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#475569",
            transition: "all 0.2s ease",
            zIndex: 10,
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSubmitted ? (
          /* Submission Confirmation */
          <div style={{ textAlign: "center", padding: "16px 8px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "#dcfce7",
                color: "#16a34a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h3
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "24px",
                color: "#1a1f5c",
                marginBottom: "6px",
              }}
            >
              Application Submitted
            </h3>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13.5px",
                color: "#475569",
                lineHeight: 1.5,
                maxWidth: "440px",
                margin: "0 auto 14px",
              }}
            >
              Thank you, <strong>{fullName}</strong>. Your profile for <strong>{position}</strong>{" "}
              has been logged in the SRM Global Hospitals recruitment repository.
            </p>

            <div
              style={{
                background: "#f8fafc",
                border: "1px dashed #cbd5e1",
                borderRadius: "12px",
                padding: "12px 20px",
                display: "inline-block",
                marginBottom: "16px",
              }}
            >
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#64748b", textTransform: "uppercase" }}>
                Application Tracking ID
              </div>
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#6B4A98",
                }}
              >
                {applicationId}
              </div>
            </div>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "#64748b",
                marginBottom: "18px",
              }}
            >
              Our talent acquisition cell reviews submissions daily. For urgent inquiries, email{" "}
              <strong>careers@srmglobalhospitals.com</strong>.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="careers-btn-primary"
              style={{ padding: "9px 28px", fontSize: "13px" }}
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            {/* Header info */}
            {selectedJob ? (
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(107, 74, 152, 0.05), rgba(43, 140, 203, 0.05))",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  padding: "9px 12px",
                  marginBottom: "11px",
                  paddingRight: "36px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px", flexWrap: "wrap" }}>
                  <span className="careers-badge-dept" style={{ fontSize: "10.5px", padding: "2px 7px" }}>
                    {selectedJob.department}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11.5px",
                      color: "#64748b",
                      fontWeight: 500,
                    }}
                  >
                    • {selectedJob.location} • {selectedJob.type}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "19px",
                    color: "#1a1f5c",
                    margin: "0 0 2px",
                    lineHeight: 1.25,
                  }}
                >
                  Apply for: {selectedJob.title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11.5px", color: "#64748b", margin: 0 }}>
                  Submit your credentials directly to the Talent Acquisition Cell at SRM Global Hospitals.
                </p>
              </div>
            ) : (
              <div style={{ marginBottom: "11px", paddingRight: "36px" }}>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "21px",
                    color: "#1a1f5c",
                    margin: "0 0 3px",
                  }}
                >
                  Apply for Position
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#64748b", margin: 0 }}>
                  Submit your credentials directly to the Talent Acquisition Cell at SRM Global Hospitals.
                </p>
              </div>
            )}

            {errorMsg && (
              <div
                style={{
                  background: "#fee2e2",
                  color: "#b91c1c",
                  borderRadius: "8px",
                  padding: "7px 12px",
                  fontSize: "12px",
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "10px",
                }}
              >
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Row 1: Selected Position & Experience Level */}
              <div className="careers-modal-row careers-modal-col-pos-exp">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      marginBottom: "4px",
                    }}
                  >
                    Selected Position <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="careers-select"
                    style={{ height: "38px", padding: "6px 12px", fontSize: "13px", background: "#ffffff" }}
                  >
                    {selectedJob && (
                      <option value={selectedJob.title}>
                        {selectedJob.title} ({selectedJob.department})
                      </option>
                    )}
                    {ALL_JOBS.filter((j) => !selectedJob || j.id !== selectedJob.id).map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title} ({job.department})
                      </option>
                    ))}
                    <option value="General Application / Specialty Not Listed">
                      General Application / Other Specialty
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      marginBottom: "4px",
                    }}
                  >
                    Experience Level
                  </label>
                  <select
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    className="careers-select"
                    style={{ height: "38px", padding: "6px 12px", fontSize: "13px", background: "#ffffff" }}
                  >
                    <option value="0-1">Fresher / Under 1 Year</option>
                    <option value="1-3">1 to 3 Years</option>
                    <option value="3-5">3 to 5 Years</option>
                    <option value="5-10">5 to 10 Years</option>
                    <option value="10+">10+ Years (Senior)</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Full Name (Full Width) */}
              <div className="careers-modal-row">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      marginBottom: "4px",
                    }}
                  >
                    Full Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. K. Ramesh / Priya R"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="careers-search-input"
                    style={{ height: "38px", padding: "6px 12px", fontSize: "13px" }}
                  />
                </div>
              </div>

              {/* Row 3: Phone & Email (2 columns) */}
              <div className="careers-modal-row careers-modal-col-2">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      marginBottom: "4px",
                    }}
                  >
                    Mobile Number <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="careers-search-input"
                    style={{ height: "38px", padding: "6px 12px", fontSize: "13px" }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      marginBottom: "4px",
                    }}
                  >
                    Email Address <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="careers-search-input"
                    style={{ height: "38px", padding: "6px 12px", fontSize: "13px" }}
                  />
                </div>
              </div>

              {/* Row 4: Qualification & Organization (2 columns) */}
              <div className="careers-modal-row careers-modal-col-2">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      marginBottom: "4px",
                    }}
                  >
                    Highest Qualification
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. MBBS / M.Sc Nursing / BASLP"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="careers-search-input"
                    style={{ height: "38px", padding: "6px 12px", fontSize: "13px" }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      marginBottom: "4px",
                    }}
                  >
                    Current Hospital / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Current employer or None"
                    value={currentOrg}
                    onChange={(e) => setCurrentOrg(e.target.value)}
                    className="careers-search-input"
                    style={{ height: "38px", padding: "6px 12px", fontSize: "13px" }}
                  />
                </div>
              </div>

              {/* Row 5: Resume Upload (left) & Brief Note (right) */}
              <div className="careers-modal-row careers-modal-col-2" style={{ marginBottom: "16px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      marginBottom: "4px",
                    }}
                  >
                    Upload Resume / CV (PDF, DOC, DOCX)
                  </label>
                  <div
                    style={{
                      border: "1.5px dashed #cbd5e1",
                      borderRadius: "8px",
                      padding: "6px 10px",
                      background: "#f8fafc",
                      position: "relative",
                      cursor: "pointer",
                      height: "56px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      boxSizing: "border-box",
                    }}
                  >
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer", width: "100%", height: "100%" }}
                    />
                    <div style={{ color: "#6B4A98", flexShrink: 0 }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11.5px", color: "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {fileName ? (
                        <span style={{ fontWeight: 600, color: "#6B4A98" }}>{fileName}</span>
                      ) : (
                        <>
                          <span style={{ fontWeight: 600, color: "#1a1f5c", display: "block", lineHeight: 1.2 }}>Upload Resume File</span>
                          <span style={{ fontSize: "10.5px", color: "#94a3b8" }}>PDF, DOC, DOCX (Max 10MB)</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                      marginBottom: "4px",
                    }}
                  >
                    Brief Note / Notice Period
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Council reg details, notice period, or clinical interest..."
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    className="careers-search-input"
                    style={{
                      height: "56px",
                      padding: "8px 10px",
                      fontSize: "12.5px",
                      resize: "none",
                      boxSizing: "border-box",
                      lineHeight: 1.35,
                    }}
                  />
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", paddingTop: "6px" }}>
                <button
                  type="button"
                  onClick={onClose}
                  className="careers-btn-secondary"
                  style={{ padding: "8px 22px", fontSize: "13.5px" }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="careers-btn-primary"
                  style={{ padding: "9px 28px", fontSize: "13.5px" }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
