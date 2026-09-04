"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import SpecialtiesMegaMenu from "./SpecialtiesMegaMenu";
import ClinicalExcellenceDropdown from "./ClinicalExcellenceDropdown";
import DoctorsDropdown from "./DoctorsDropdown";

interface SiteHeaderProps {
  activeNav?: "home" | "about" | "specialties" | "coe" | "doctors" | "intl" | "services" | "insights" | string;
}

export default function SiteHeader({ activeNav }: SiteHeaderProps = {}) {
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isCoeOpen, setIsCoeOpen] = useState(false);
  const coeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const coeWrapperRef = useRef<HTMLDivElement>(null);

  const [isDoctorsOpen, setIsDoctorsOpen] = useState(false);
  const doctorsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const doctorsWrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsSpecialtiesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSpecialtiesOpen(false);
    }, 180);
  };

  const handleCoeMouseEnter = () => {
    if (coeTimeoutRef.current) {
      clearTimeout(coeTimeoutRef.current);
      coeTimeoutRef.current = null;
    }
    setIsCoeOpen(true);
  };

  const handleCoeMouseLeave = () => {
    coeTimeoutRef.current = setTimeout(() => {
      setIsCoeOpen(false);
    }, 180);
  };

  const handleDoctorsMouseEnter = () => {
    if (doctorsTimeoutRef.current) {
      clearTimeout(doctorsTimeoutRef.current);
      doctorsTimeoutRef.current = null;
    }
    setIsDoctorsOpen(true);
  };

  const handleDoctorsMouseLeave = () => {
    doctorsTimeoutRef.current = setTimeout(() => {
      setIsDoctorsOpen(false);
    }, 180);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsSpecialtiesOpen(false);
      }
      if (coeWrapperRef.current && !coeWrapperRef.current.contains(e.target as Node)) {
        setIsCoeOpen(false);
      }
      if (doctorsWrapperRef.current && !doctorsWrapperRef.current.contains(e.target as Node)) {
        setIsDoctorsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSpecialtiesOpen(false);
        setIsCoeOpen(false);
        setIsDoctorsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (coeTimeoutRef.current) clearTimeout(coeTimeoutRef.current);
      if (doctorsTimeoutRef.current) clearTimeout(doctorsTimeoutRef.current);
    };
  }, []);

  return (
    <div className="header-nav-bar">
      <div className="container">
        <div className="header-nav-inner">
          <nav className="main-nav" role="navigation" aria-label="Main">
            <Link href="/" className={activeNav === "home" ? "active" : undefined}>Home</Link>{" "}
            <div
              className="nav-dropdown-wrapper"
              ref={wrapperRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/#specialties"
                className={`${activeNav === "specialties" ? "active" : ""} ${isSpecialtiesOpen ? "dropdown-open" : ""}`}
                aria-haspopup="true"
                aria-expanded={isSpecialtiesOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setIsSpecialtiesOpen((prev) => !prev);
                }}
              >
                Our Specialties
              </Link>
              <SpecialtiesMegaMenu
                isOpen={isSpecialtiesOpen}
                onClose={() => setIsSpecialtiesOpen(false)}
              />
            </div>{" "}
            <div
              className="nav-dropdown-wrapper"
              ref={coeWrapperRef}
              onMouseEnter={handleCoeMouseEnter}
              onMouseLeave={handleCoeMouseLeave}
            >
              <Link
                href="/#coe"
                className={`${activeNav === "coe" ? "active" : ""} ${isCoeOpen ? "dropdown-open" : ""}`}
                aria-haspopup="true"
                aria-expanded={isCoeOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setIsCoeOpen((prev) => !prev);
                }}
              >
                Clinical Excellence
              </Link>
              <ClinicalExcellenceDropdown
                isOpen={isCoeOpen}
                onClose={() => setIsCoeOpen(false)}
              />
            </div>{" "}
            <div
              className="nav-dropdown-wrapper"
              ref={doctorsWrapperRef}
              onMouseEnter={handleDoctorsMouseEnter}
              onMouseLeave={handleDoctorsMouseLeave}
            >
              <Link
                href="/best-doctor"
                className={`${activeNav === "doctors" ? "active" : ""} ${isDoctorsOpen ? "dropdown-open" : ""}`}
                aria-haspopup="true"
                aria-expanded={isDoctorsOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setIsDoctorsOpen((prev) => !prev);
                }}
              >
                Doctors
              </Link>
              <DoctorsDropdown
                isOpen={isDoctorsOpen}
                onClose={() => setIsDoctorsOpen(false)}
              />
            </div>{" "}
            <Link href="/#intl" className={activeNav === "intl" ? "active" : undefined}>International Patients</Link>{" "}
            <Link href="/services" className={activeNav === "services" ? "active" : undefined}>Services</Link>{" "}
            <Link href="/blog" className={activeNav === "insights" ? "active" : undefined}>Health Information</Link>{" "}
          </nav>{" "}
          <div className="header-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>{" "}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
              </svg>
            </a>{" "}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>{" "}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
              </svg>
            </a>{" "}
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48L15.5 11.75z" />
              </svg>
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
