"use client";

import Link from "next/link";
import type { Route } from "next";

interface CoeItem {
  label: string;
  href: Route;
}

export const COE_ITEMS: CoeItem[] = [
  {
    label: "Institute of Gastro and Liver Sciences",
    href: "/institute-of-gastro-and-liver-sciences",
  },
  {
    label: "Institute of Cardiac Sciences",
    href: "/institute-of-cardiac-sciences",
  },
  {
    label: "Centre for Women’s Health & Wellness",
    href: "/centre-for-womens-health-and-wellness",
  },
  {
    label: "Centre for Bone Joint Spine Care",
    href: "/centre-for-bone-joint-spine-care",
  },
  {
    label: "Institute of Emergency & Critical Care Unit",
    href: "/institute-of-emergency-and-critical-care-unit",
  },
  {
    label: "Institute of Neuro Sciences",
    href: "/institute-of-neuro-sciences",
  },
  {
    label: "Institute of Renal Sciences",
    href: "/institute-of-renal-sciences",
  },
  {
    label: "Institute of Solid Organ Transplants",
    href: "/institute-of-solid-organ-transplants",
  },
];

interface ClinicalExcellenceDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClinicalExcellenceDropdown({
  isOpen,
  onClose,
}: ClinicalExcellenceDropdownProps) {
  return (
    <div
      className={`coe-dropdown-menu ${isOpen ? "is-open" : ""}`}
      role="region"
      aria-label="Clinical Excellence Directory"
    >
      <ul className="coe-dropdown-list">
        {COE_ITEMS.map((item) => (
          <li key={item.label} className="coe-dropdown-item">
            <Link
              href={item.href}
              onClick={onClose}
              className="coe-dropdown-link"
            >
              <span className="coe-dropdown-chevron" aria-hidden="true">
                ›
              </span>
              <span className="coe-dropdown-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
