"use client";

import React from "react";
import Link from "next/link";
import type { Route } from "next";

interface CoeItem {
  label: string;
  href: Route;
}

const COE_ITEMS: CoeItem[] = [
  {
    label: "Institute of Gastro and Liver Sciences",
    href: "/centres-of-excellence/gastro-and-liver-sciences",
  },
  {
    label: "Institute of Cardiac Sciences",
    href: "/centres-of-excellence/cardiac-sciences",
  },
  {
    label: "Centre for Women’s Health & Wellness",
    href: "/centres-of-excellence/womens-health",
  },
  {
    label: "Centre for Bone Joint Spine Care",
    href: "/centres-of-excellence/bone-joint-spine",
  },
  {
    label: "Institute of Emergency & Critical Care Unit",
    href: "/centres-of-excellence/emergency-and-critical-care",
  },
  {
    label: "Institute of Neuro Sciences",
    href: "/centres-of-excellence/neuro-sciences",
  },
  {
    label: "Institute of Renal Sciences",
    href: "/centres-of-excellence/renal-sciences",
  },
  {
    label: "Institute of Solid Organ Transplants",
    href: "/centres-of-excellence/solid-organ-transplants",
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
      aria-label="Centres of Excellence Directory"
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
