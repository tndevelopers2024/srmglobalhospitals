import React from "react";
import Link from "next/link";
import type { Route } from "next";

interface Department {
  name: string;
  icon: React.ReactNode;
  href?: Route;
}

const DEPARTMENTS: Department[] = [
  {
    name: "Anaesthesiology",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    ),
  },
  {
    name: "Arthroscopy & Sports Medicine",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "Cardiac Anaesthesia",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    name: "Dental",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <path d="M12 3c-1.7 0-3.1.6-4.1 1.5C6.9 5.4 6 6.9 6 9c0 2 .6 3.4.9 5 .3 1.6.6 3.5 1.4 5.2.3.6.9 1.1 1.5 1.1.9 0 1-1.4 1.2-2.6.2-1 .4-2.2 1-2.2s.8 1.2 1 2.2c.2 1.2.3 2.6 1.2 2.6.6 0 1.2-.5 1.5-1.1.8-1.7 1.1-3.6 1.4-5.2.3-1.6.9-3 .9-5 0-2.1-.9-3.6-1.9-4.5C15.1 3.6 13.7 3 12 3Z" />
      </svg>
    ),
  },
  {
    name: "Dermatology",
    href: "/best-doctor/dermatology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    name: "Diabetology",
    href: "/best-doctor/diabetology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
  {
    name: "Emergency Medicine & Critical Care",
    href: "/best-doctor/emergency-medicine-critical-care",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M3 12h18" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "ENT",
    href: "/best-doctor/ent",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5 6 9H2v6h4l5 4V5Z" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
  },
  {
    name: "Fetal Medicine",
    href: "/best-doctor/fetal-medicine",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="13" cy="13" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "General Medicine",
    href: "/best-doctor/general-medicine",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1Z" fill="currentColor" stroke="none" />
        <rect x="5" y="5" width="14" height="16" rx="2" />
        <line x1="8" y1="11" x2="16" y2="11" />
        <line x1="8" y1="15" x2="16" y2="15" />
      </svg>
    ),
  },
  {
    name: "General Surgery",
    href: "/best-doctor/general-surgery",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "Hematology",
    href: "/best-doctor/hematology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    name: "Hepatology",
    href: "/best-doctor/hepatology",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <path d="M4 20C4 10 10 4 20 4C20 14 14 20 4 20Z" />
      </svg>
    ),
  },
  {
    name: "Infectious Disease",
    href: "/best-doctor/infectious-disease",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
  {
    name: "Institute of Cardiac Sciences",
    href: "/best-doctor/institute-of-cardiac-sciences",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "Interventional Radiology",
    href: "/best-doctor/interventional-radiology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    name: "Medical Oncology",
    href: "/best-doctor/medical-oncology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Neonatology",
    href: "/best-doctor/neonatology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="5" />
        <path d="M9 10h.01M15 10h.01" />
        <path d="M9.5 12.5a3 3 0 0 0 5 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Nephrology",
    href: "/best-doctor/nephrology",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <path fillRule="evenodd" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
      </svg>
    ),
  },
  {
    name: "Neurology",
    href: "/best-doctor/neurology",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.83V15a3 3 0 0 0 3 3h1v2h6v-2h1a3 3 0 0 0 3-3v-2.17A3 3 0 0 0 18 7a3 3 0 0 0-3-3 3 3 0 0 0-3 1 3 3 0 0 0-3-1Z" />
      </svg>
    ),
  },
  {
    name: "NeuroSurgery",
    href: "/best-doctor/neurosurgery",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.83V15a3 3 0 0 0 3 3h1v2h6v-2h1a3 3 0 0 0 3-3v-2.17A3 3 0 0 0 18 7a3 3 0 0 0-3-3 3 3 0 0 0-3 1 3 3 0 0 0-3-1Z" />
      </svg>
    ),
  },
  {
    name: "Obstetrics & Gynecology",
    href: "/best-doctor/obstetrics-gynecology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v6" />
        <path d="M12 10c-4 0-7 3-8 7" />
        <path d="M12 10c4 0 7 3 8 7" />
        <circle cx="4" cy="18" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="20" cy="18" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Ophthalmology",
    href: "/best-doctor/ophthalmology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "Orthopaedics",
    href: "/best-doctor/orthopaedics",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <g transform="rotate(45 12 12)">
          <rect x="7" y="10" width="10" height="4" rx="2" />
          <circle cx="6" cy="9" r="2.3" />
          <circle cx="6" cy="15" r="2.3" />
          <circle cx="18" cy="9" r="2.3" />
          <circle cx="18" cy="15" r="2.3" />
        </g>
      </svg>
    ),
  },
  {
    name: "Paediatric Critical Care",
    href: "/best-doctor/paediatric-critical-care",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "Paediatric Endocrinology",
    href: "/best-doctor/paediatric-endocrinology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Paediatric Surgery",
    href: "/best-doctor/paediatric-surgery",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "Paediatrics",
    href: "/best-doctor/paediatrics",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="5" />
        <path d="M9 10h.01M15 10h.01" />
        <path d="M9.5 12.5a3 3 0 0 0 5 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Physical Medicine and Rehabilitation",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    name: "Physiotherapy",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    name: "Plastic Surgery",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8Z" />
      </svg>
    ),
  },
  {
    name: "Pulmonology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v7" />
        <path d="M9 10c-2 0-4 2-4 6 0 3 1 5 2 5s2-2 2-4v-7" />
        <path d="M15 10c2 0 4 2 4 6 0 3-1 5-2 5s-2-2-2-4v-7" />
      </svg>
    ),
  },
  {
    name: "Radiology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    name: "Reproductive Medicine",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v6" />
        <path d="M12 10c-4 0-7 3-8 7" />
        <path d="M12 10c4 0 7 3 8 7" />
        <circle cx="4" cy="18" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="20" cy="18" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Rheumatology",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <g transform="rotate(45 12 12)">
          <rect x="7" y="10" width="10" height="4" rx="2" />
          <circle cx="6" cy="9" r="2.3" />
          <circle cx="6" cy="15" r="2.3" />
          <circle cx="18" cy="9" r="2.3" />
          <circle cx="18" cy="15" r="2.3" />
        </g>
      </svg>
    ),
  },
  {
    name: "Spine Care",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <g transform="rotate(45 12 12)">
          <rect x="7" y="10" width="10" height="4" rx="2" />
          <circle cx="6" cy="9" r="2.3" />
          <circle cx="6" cy="15" r="2.3" />
          <circle cx="18" cy="9" r="2.3" />
          <circle cx="18" cy="15" r="2.3" />
        </g>
      </svg>
    ),
  },
  {
    name: "Surgical Gastroenterology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: "Surgical Oncology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Trauma & Acute Care Surgery",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
        <path d="M12 9v4" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    name: "Urology",
    icon: (
      <svg className="dept-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="#8b3dff">
        <path fillRule="evenodd" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
      </svg>
    ),
  },
  {
    name: "Uro-Gynaecology",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v6" />
        <path d="M12 10c-4 0-7 3-8 7" />
        <path d="M12 10c4 0 7 3 8 7" />
        <circle cx="4" cy="18" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="20" cy="18" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Vascular Surgery",
    icon: (
      <svg className="dept-icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8b3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" />
        <path d="M12 8c-3 0-5 2-5 5v9" />
        <path d="M12 8c3 0 5 2 5 5v9" />
        <path d="M7 13h10" />
      </svg>
    ),
  },
];

export default function DepartmentsGrid() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{ width: "40px", height: "3px", background: "#8b3dff", borderRadius: "2px", margin: "0 auto 20px" }}></div>
        <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "36px", color: "#14092b", margin: "0 0 12px", fontWeight: 700 }}>
          All Departments
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#888", margin: 0 }}>
          Explore our full range of medical and surgical specialties.
        </p>
      </div>

      <div className="dept-grid">
        {DEPARTMENTS.map((dept, index) => {
          if (dept.href) {
            return (
              <Link key={index} href={dept.href} className="dept-card">
                <div className="dept-icon" style={{ background: "rgb(243, 235, 255)" }}>
                  {dept.icon}
                </div>
                <div className="dept-name">{dept.name}</div>
              </Link>
            );
          }
          return (
            <div key={index} className="dept-card">
              <div className="dept-icon" style={{ background: "rgb(243, 235, 255)" }}>
                {dept.icon}
              </div>
              <div className="dept-name">{dept.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
