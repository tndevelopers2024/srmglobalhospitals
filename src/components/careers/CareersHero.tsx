"use client";

import React from "react";

interface CareersHeroProps {
  onExploreClick?: () => void;
  onApplyModalClick?: () => void;
}

export default function CareersHero({ onExploreClick }: CareersHeroProps) {
  return (
    <section className="careers-hero-section" aria-label="SRM Global Hospitals Careers Hero">
      <div className="careers-hero-wrap">
        <div className="careers-hero-card">
          {/* Left Column: Content */}
          <div className="careers-hero-content">
            <div className="careers-hero-eyebrow">Careers at SRM Global Hospitals</div>

            <h1 className="careers-hero-title">
              Advance Your Career in a{" "}
              <span className="careers-hero-title-accent">World-Class</span> Healthcare Environment
            </h1>

            <p className="careers-hero-desc">
              Your work with SRM Global Hospitals is driven by a commitment to superior patient
              outcomes and a culture that values Quality and Respect. We continuously strive for
              perfection in patient care and operational efficiency. Join our team dedicated to
              cutting-edge medical equipment and technology, ensuring high-quality patient care and
              professional growth.
            </p>

            <div className="careers-hero-actions">
              <a
                href="#career-pathways"
                onClick={(e) => {
                  if (onExploreClick) {
                    e.preventDefault();
                    onExploreClick();
                  }
                }}
                className="careers-hero-btn-primary"
              >
                <span>Career Opportunities</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#why-join-us" className="careers-hero-btn-secondary">
                <span>Why Join Us</span>
              </a>
            </div>

            {/* Hospital Stats Strip */}
            <div className="careers-hero-stats">
              <div className="careers-hero-stat-item">
                <span className="careers-hero-stat-num">200+</span>
                <span className="careers-hero-stat-label">Super Speciality Beds</span>
              </div>
              <div className="careers-hero-stat-item">
                <span className="careers-hero-stat-num">40+</span>
                <span className="careers-hero-stat-label">Clinical Specialties</span>
              </div>
              <div className="careers-hero-stat-item">
                <span className="careers-hero-stat-num">1,000+</span>
                <span className="careers-hero-stat-label">Healthcare Professionals</span>
              </div>
              <div className="careers-hero-stat-item">
                <span className="careers-hero-stat-num">NABH</span>
                <span className="careers-hero-stat-label">Quality Accredited</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image with gradient mask like AboutHero */}
          <div className="careers-hero-image-layer">
            <div className="careers-hero-image-wrapper">
              <img
                src="/images/careers/careers-team.avif"
                alt="Medical team and clinicians at SRM Global Hospitals"
                className="careers-hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
