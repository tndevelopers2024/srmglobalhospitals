"use client";

import React from "react";
import Link from "next/link";
import type { Route } from "next";

interface DoctorItem {
  label: string;
  href: string;
}

const DOCTORS_ITEMS: DoctorItem[] = [
  {
    label: "Meet Our Doctors",
    href: "/best-doctor",
  },
  {
    label: "Book an Appointment",
    href: "/best-doctor#appointment",
  },
];

interface DoctorsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DoctorsDropdown({
  isOpen,
  onClose,
}: DoctorsDropdownProps) {
  return (
    <div
      className={`doctors-dropdown-menu ${isOpen ? "is-open" : ""}`}
      role="region"
      aria-label="Doctors Directory"
    >
      <ul className="doctors-dropdown-list">
        {DOCTORS_ITEMS.map((item) => (
          <li key={item.label} className="doctors-dropdown-item">
            <Link
              href={item.href as Route}
              onClick={onClose}
              className="doctors-dropdown-link"
            >
              <span className="doctors-dropdown-chevron" aria-hidden="true">
                ›
              </span>
              <span className="doctors-dropdown-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
