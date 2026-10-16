"use client";

import Link from "next/link";
import type { Route } from "next";

interface SpecialtyItem {
  label: string;
  href: string;
}

export const SPECIALTIES_COLUMNS: SpecialtyItem[][] = [
  // Column 1
  [
    { label: "Anaesthesiology", href: "/our-specialties/leading-anaesthesiology-hospital" },
    { label: "Arthroscopy & Sports Medicine", href: "/our-specialties/arthroscopy-sports-medicine" },
    { label: "Cardiology", href: "/our-specialties/leading-cardiology-hospital" },
    { label: "Dental/OMFS", href: "/our-specialties/best-dental-hospital" },
    { label: "Dermatology", href: "/our-specialties/best-skin-care-hospital" },
    { label: "Diabetology", href: "/our-specialties/leading-diabetic-hospital" },
    { label: "Emergency Medicine & Critical Care Unit", href: "/our-specialties/leading-emergency-care-hospital" },
    { label: "Endocrinology", href: "/our-specialties/leading-endocrinology-hospital" },
    { label: "ENT", href: "/our-specialties/best-ent-hospital" },
    { label: "Fetal Medicine", href: "/our-specialties/fetal-medicine" },
    { label: "General Medicine", href: "/our-specialties/leading-general-medicine-hospital" },
  ],
  // Column 2
  [
    { label: "General Surgery", href: "/our-specialties/leading-general-surgery-hospital" },
    { label: "Geriatrics", href: "/our-specialties/best-geriatric-hospital" },
    { label: "Hematology", href: "/our-specialties/hematology" },
    { label: "Hepatology", href: "/our-specialties/leading-hepatology-regenerative-medicine-hospital" },
    { label: "Infectious Disease", href: "/our-specialties/infectious-disease" },
    { label: "Interventional Radiology", href: "/our-specialties/interventional-radiology" },
    { label: "Joint Replacement", href: "/our-specialties/joint-replacement" },
    { label: "Lactation & Pre-Natal Yoga", href: "/our-specialties/lactation-and-pre-natal-yoga" },
    { label: "Medical Gastroenterology", href: "/our-specialties/best-medical-gastroenterology-hospital" },
    { label: "Medical oncology", href: "/our-specialties/best-medical-surgical-oncology-hospital" },
    { label: "Nephrology", href: "/our-specialties/leading-nephrology-hospital" },
  ],
  // Column 3
  [
    { label: "Neurology", href: "/our-specialties/neurology" },
    { label: "NeuroSurgery", href: "/our-specialties/best-neurosurgery-hospital" },
    { label: "Obstetrics & Gynecology", href: "/our-specialties/best-gynecology-hospital" },
    { label: "Ophthalmology", href: "/our-specialties/best-eye-hospital" },
    { label: "Orthopedics", href: "/our-specialties/leading-orthopedic-hospital" },
    { label: "Paediatrics", href: "/our-specialties/best-paediatrics-hospital" },
    { label: "Paediatric Critical Care", href: "/our-specialties/paediatric-critical-care" },
    { label: "Paediatric Surgery", href: "/our-specialties/paediatric-surgery" },
    { label: "Physical Medicine Rehabilitation", href: "/our-specialties/physical-medicine-and-rehabilitation" },
    { label: "Plastic Surgery", href: "/our-specialties/best-plastic-surgery-hospital" },
    { label: "Psychiatry", href: "/our-specialties/best-psychiatry-hospital" },
  ],
  // Column 4
  [
    { label: "Pulmonology", href: "/our-specialties/leading-pulmonology-hospital" },
    { label: "Radiology", href: "/our-specialties/best-radiology-hospital" },
    { label: "Reproductive Medicine", href: "/our-specialties/reproductive-medicine" },
    { label: "Rheumatology", href: "/our-specialties/best-rheumatology-hospital" },
    { label: "Spine Care", href: "/our-specialties/spine-care" },
    { label: "Surgical Gastroenterology", href: "/our-specialties/leading-surgical-gastroenterology-hospital" },
    { label: "Surgical Oncology", href: "/our-specialties/surgical-oncology" },
    { label: "Trauma & Acute Care Surgery", href: "/our-specialties/trauma-acute-care-surgery" },
    { label: "Urology", href: "/our-specialties/best-urology-hospital" },
    { label: "Uro-Gynaecology", href: "/our-specialties/uro-gynaecology" },
    { label: "Vascular Surgery", href: "/our-specialties/vascular-surgery" },
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
