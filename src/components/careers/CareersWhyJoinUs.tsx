"use client";

import React from "react";

const WHY_JOIN_THEMES = [
  {
    id: "comprehensive-career-growth",
    title: "Comprehensive Career Growth",
    theme: "purple",
    points: [
      "Wide range of opportunities for career advancement, extensive training, and research opportunities.",
      "Active participation in innovative projects contributing to the future of healthcare.",
      "Regular networking events and conferences to stay connected and informed about industry trends.",
      "Valuable connections through an extensive network of healthcare professionals and industry leaders.",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "compassionate-patient-care",
    title: "Compassionate Patient Care",
    theme: "blue",
    points: [
      "Medical staff educated to interact sensitively, empathetically, and compassionately with patients.",
      "Priority on active listening, clear communication, and emotional support throughout patient journeys.",
      "Welcoming spaces thoughtfully designed to provide a comforting and supportive atmosphere.",
      "Empowering patients with clear, accessible information about diagnoses and available treatments.",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: "global-reach-and-impact",
    title: "Global Reach and Impact",
    theme: "purple",
    points: [
      "Wide variety of healthcare collaborations and facilities across several nations.",
      "International presence bringing high-quality medical care to diverse communities worldwide.",
      "Unparalleled opportunities in groundbreaking research, advanced clinical practices, and continuous learning.",
      "Sharing expertise and resources to elevate standards of care and global healthcare systems.",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "commitment-to-clinical-excellence",
    title: "Commitment to Clinical Excellence",
    theme: "blue",
    points: [
      "Clinical practices founded on latest scientific research and evidence-based medicine.",
      "Regular review and adoption of recent scientific breakthroughs and modern medical guidelines.",
      "Meticulous attention to detail and personalized care striving for exceptional clinical results.",
      "Consistent application of best practices that exceed expectations and improve patient health.",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    id: "opportunities-for-professional-growth",
    title: "Opportunities for Professional Growth",
    theme: "purple",
    points: [
      "Cooperative multidisciplinary environment where professionals work side by side.",
      "Daily exposure to cutting-edge medical technologies and state-of-the-art equipment.",
      "Institutional commitment to continuous learning, clinical research, and career advancement.",
      "Supportive workplace culture ensuring a balanced work-life dynamic for sustained success.",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function CareersWhyJoinUs() {
  return (
    <section id="why-join-us" className="careers-why-section" aria-label="Why Join SRM Global Hospitals">
      <div className="careers-container">
        {/* Section Header */}
        <div style={{ textAlign: "center" }}>
          <div className="careers-section-eyebrow">Why Join Us</div>
          <h2 className="careers-section-title">
            Built on Medical Excellence, Driven by Human Empathy
          </h2>
          <p className="careers-section-desc">
            At SRM Global Hospitals, your career is nurtured by advanced healthcare infrastructure,
            evidence-based practice, and an institutional culture that honors patient outcomes and
            professional respect.
          </p>
        </div>

        {/* 5 Pillars Card Grid */}
        <div className="careers-pillars-grid">
          {WHY_JOIN_THEMES.map((theme) => {
            const isBlue = theme.theme === "blue";
            return (
              <div key={theme.id} className="careers-pillar-card">
                <div
                  className={`careers-pillar-icon-box ${
                    isBlue ? "careers-pillar-icon-blue" : "careers-pillar-icon-purple"
                  }`}
                >
                  {theme.icon}
                </div>

                <h3 className="careers-pillar-title">{theme.title}</h3>

                <ul className="careers-pillar-points">
                  {theme.points.map((pt, idx) => (
                    <li key={idx} className="careers-pillar-point-item">
                      <svg
                        className="careers-pillar-point-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle cx="10" cy="10" r="10" fill={isBlue ? "#e0f2fe" : "#f3edf9"} />
                        <path
                          d="M6 10.2l2.8 2.8 5.2-5.5"
                          stroke={isBlue ? "#0284c7" : "#6B4A98"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
