"use client";

import React from "react";
import Link from "next/link";
import type { Route } from "next";

interface SpecialtyItem {
  label: string;
  href: string;
}

const SPECIALTIES_COLUMNS: SpecialtyItem[][] = [
  // Column 1
  [
    { label: "Anaesthesiology", href: "/specialties/anaesthesiology" },
    { label: "Arthroscopy & Sports Medicine", href: "/specialties/arthroscopy-sports-medicine" },
    { label: "Dental/OMFS", href: "/specialties/dental-omfs" },
    { label: "Dermatology", href: "/specialties/dermatology" },
    { label: "Diabetology", href: "/specialties/diabetology" },
    { label: "Emergency Medicine & Critical Care Unit", href: "/specialties/emergency-medicine" },
    { label: "Endocrinology", href: "/specialties/endocrinology" },
    { label: "ENT", href: "/specialties/ent" },
    { label: "Fetal Medicine", href: "/specialties/fetal-medicine" },
    { label: "General Medicine", href: "/specialties/general-medicine" },
    { label: "General Surgery", href: "/specialties/general-surgery" },
  ],
  // Column 2
  [
    { label: "Geriatrics", href: "/specialties/geriatrics" },
    { label: "Hematology", href: "/specialties/hematology" },
    { label: "Hepatology", href: "/specialties/hepatology" },
    { label: "Infectious Disease", href: "/specialties/infectious-disease" },
    { label: "Institute of Cardiac Sciences", href: "/specialties/institute-of-cardiac-sciences" },
    { label: "Interventional Radiology", href: "/specialties/interventional-radiology" },
    { label: "Joint Replacement", href: "/specialties/joint-replacement" },
    { label: "Lactation & Pre-Natal Yoga", href: "/specialties/lactation-pre-natal-yoga" },
    { label: "Medical Gastroenterology", href: "/specialties/medical-gastroenterology" },
    { label: "Medical oncology", href: "/specialties/medical-oncology" },
    { label: "Nephrology", href: "/specialties/nephrology" },
  ],
  // Column 3
  [
    { label: "Neurology", href: "/specialties/neurology" },
    { label: "NeuroSurgery", href: "/specialties/neurosurgery" },
    { label: "Obstetrics & Gynecology", href: "/specialties/obstetrics-gynecology" },
    { label: "Ophthalmology", href: "/specialties/ophthalmology" },
    { label: "Orthopedics", href: "/specialties/orthopedics" },
    { label: "Paediatrics", href: "/specialties/paediatrics" },
    { label: "Paediatric Critical Care", href: "/specialties/paediatric-critical-care" },
    { label: "Paediatric Surgery", href: "/specialties/paediatric-surgery" },
    { label: "Physical Medicine Rehabilitation", href: "/specialties/physical-medicine-rehabilitation" },
    { label: "Plastic Surgery", href: "/specialties/plastic-surgery" },
    { label: "Psychiatry", href: "/specialties/psychiatry" },
  ],
  // Column 4
  [
    { label: "Pulmonology", href: "/specialties/pulmonology" },
    { label: "Radiology", href: "/specialties/radiology" },
    { label: "Reproductive Medicine", href: "/specialties/reproductive-medicine" },
    { label: "Rheumatology", href: "/specialties/rheumatology" },
    { label: "Spine Care", href: "/specialties/spine-care" },
    { label: "Surgical Gastroenterology", href: "/specialties/surgical-gastroenterology" },
    { label: "Surgical Oncology", href: "/specialties/surgical-oncology" },
    { label: "Trauma & Acute Care Surgery", href: "/specialties/trauma-acute-care-surgery" },
    { label: "Urology", href: "/specialties/urology" },
    { label: "Uro-Gynaecology", href: "/specialties/uro-gynaecology" },
    { label: "Vascular Surgery", href: "/specialties/vascular-surgery" },
  ],
];

interface SpecialtiesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecialtiesMegaMenu({ isOpen, onClose }: SpecialtiesMegaMenuProps) {
  return (
    <div
      className={`specialties-mega-menu ${isOpen ? "is-open" : ""}`}
      role="region"
      aria-label="Our Specialties Directory"
    >
      <div className="specialties-mega-menu-grid">
        {SPECIALTIES_COLUMNS.map((column, colIdx) => (
          <ul key={colIdx} className="specialties-mega-column">
            {column.map((item) => (
              <li key={item.label} className="specialties-mega-item">
                <Link
                  href={item.href as Route}
                  onClick={onClose}
                  className="specialties-mega-link"
                >
                  <span className="specialties-mega-chevron" aria-hidden="true">
                    ›
                  </span>
                  <span className="specialties-mega-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
