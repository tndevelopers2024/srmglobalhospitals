"use client";

import React from "react";
import Image from "next/image";

const CULTURE_HIGHLIGHTS = [
  {
    title: "Multidisciplinary Collaboration",
    desc: "Clinicians from cardiology, neurology, surgical gastroenterology, and oncology collaborate daily in interdisciplinary tumor boards and critical care rounds.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Supportive Nurse-to-Patient Ratios",
    desc: "Structured work rosters, transparent nurse scheduling, and balanced bed ratios ensure every nursing professional has the breathing room to deliver attentive care.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Continuous Medical Education (CME)",
    desc: "Hospital-funded clinical simulation workshops, ACLS/BLS certifications, and sponsorship for presenting clinical research at national healthcare summits.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "Culture of Quality and Respect",
    desc: "We foster an egalitarian workplace where every nurse, technologist, therapist, and physician is treated with dignity, and patient safety concerns are immediately addressed.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Working at SRM Global Hospitals allows me to practice advanced evidence-based medicine in an environment where patient dignity is genuinely prioritized. The interdisciplinary collaboration between cardiology, critical care, and nursing is seamless.",
    name: "Dr. K. Swaminathan",
    role: "Senior Consultant, Institute of Cardiac Sciences",
    experience: "4 Years at SRM Global",
    tag: "Clinical Excellence",
  },
  {
    quote:
      "As a Nurse Educator, what inspires me most is the hospital's relentless commitment to nursing development. We have modern simulation labs, structured preceptorships, and a culture where every nurse is empowered to speak up for patient safety.",
    name: "Sr. Preethi Thomas",
    role: "Lead Nurse Educator, Nursing Administration",
    experience: "3 Years at SRM Global",
    tag: "Continuous Mentorship",
  },
  {
    quote:
      "The allied health department has access to cutting-edge diagnostic and therapy modalities. Whether it's pediatric dysphagia or post-stroke neuro-rehabilitation, the team spirit and cross-referrals allow our patients to achieve remarkable recoveries.",
    name: "R. Aravind",
    role: "Chief Speech & Swallow Pathologist",
    experience: "2.5 Years at SRM Global",
    tag: "Allied Health",
  },
];

export default function CareersCultureTeam() {
  return (
    <section className="careers-culture-section" aria-label="Culture and Team Collaboration">
      <div className="careers-container">
        {/* Culture Card with Photo */}
        <div className="careers-culture-card">
          {/* Left Column: Image of Indian Doctors, Nurses, and Therapists */}
          <div className="careers-culture-img-wrap">
            <Image
              src="/images/careers/careers-collaboration.jpg"
              alt="Indian doctors, nurses and therapists collaborating in modern consultation workstation at SRM Global Hospitals"
              fill
              sizes="(max-width: 1100px) 100vw, 50vw"
              className="careers-culture-img"
            />
          </div>

          {/* Right Column: Culture Narrative & Pillars */}
          <div className="careers-culture-content">
            <div className="careers-section-eyebrow">Workplace Culture</div>
            <h2
              className="careers-section-title"
              style={{ fontSize: "32px", textAlign: "left", margin: "0 0 14px" }}
            >
              Where Compassionate Clinicians Collaborate
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#475569",
                margin: "0 0 28px",
              }}
            >
              Healthcare is at its best when clinicians, nurses, and allied therapists work together
              without silos. At SRM Global Hospitals, our environment is structured around mutual
              respect, clinical autonomy, and a shared passion for superior patient outcomes.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "18px" }}>
              {CULTURE_HIGHLIGHTS.map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: idx % 2 === 0 ? "#f3edf9" : "#e0f2fe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "15.5px",
                        fontWeight: 600,
                        color: "#1a1f5c",
                        margin: "0 0 4px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "13.5px",
                        lineHeight: 1.6,
                        color: "#555555",
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real Team Testimonials Strip */}
        <div style={{ marginTop: "70px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div className="careers-section-eyebrow">Team Perspectives</div>
            <h3
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "30px",
                color: "#1a1f5c",
                margin: "0 0 10px",
              }}
            >
              Voices from the Frontlines of Care
            </h3>
            <p className="careers-section-desc">
              Read personal reflections from clinicians and nursing leaders on their experience at SRM
              Global Hospitals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 18px rgba(26, 31, 92, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <span className="careers-badge-dept">{t.tag}</span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "#475569",
                      fontStyle: "italic",
                      margin: "0 0 20px",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div style={{ paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                  <div
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#1a1f5c",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12.5px",
                      color: "#6B4A98",
                      fontWeight: 500,
                    }}
                  >
                    {t.role}
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11.5px", color: "#64748b" }}>
                    {t.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
