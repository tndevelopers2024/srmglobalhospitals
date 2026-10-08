import React from "react";

export default function AppointmentSidebar() {
  return (
    <aside className="appointment-sidebar" id="hospital-contact" aria-label="Hospital Contact & Support Details">
      {/* Hospital Information Details */}
      <div className="appointment-info-card">
        <h3 className="appointment-info-heading">Hospital &amp; Contact Details</h3>
        <ul className="appointment-info-list">
          {/* Location */}
          <li className="appointment-info-item">
            <div className="appointment-info-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="appointment-info-body">
              <div className="appointment-info-label">Hospital Location</div>
              <p className="appointment-info-text">
                Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603 203
              </p>
            </div>
          </li>

          {/* Appointment Desk Phone */}
          <li className="appointment-info-item">
            <div className="appointment-info-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.32 1.58.59 2.33" />
              </svg>
            </div>
            <div className="appointment-info-body">
              <div className="appointment-info-label">Appointment Desk</div>
              <p className="appointment-info-text">
                <a href="tel:+918925856353" className="appointment-info-link">
                  +91 8925856353
                </a>
              </p>
            </div>
          </li>

          {/* Email */}
          <li className="appointment-info-item">
            <div className="appointment-info-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="appointment-info-body">
              <div className="appointment-info-label">Email Support</div>
              <p className="appointment-info-text">
                <a href="mailto:info@srmglobalhospitals.com" className="appointment-info-link">
                  info@srmglobalhospitals.com
                </a>
              </p>
            </div>
          </li>

          {/* Working Hours */}
          <li className="appointment-info-item">
            <div className="appointment-info-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="appointment-info-body">
              <div className="appointment-info-label">Working Hours</div>
              <p className="appointment-info-text">
                <strong>24x7</strong> Emergency &amp; Trauma Care
              </p>
            </div>
          </li>

          {/* Online Schedule */}
          <li className="appointment-info-item">
            <div className="appointment-info-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="appointment-info-body">
              <div className="appointment-info-label">Online Schedule</div>
              <p className="appointment-info-text">
                Schedule outpatient consultations with specialist doctors across 40+ clinical departments online.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
