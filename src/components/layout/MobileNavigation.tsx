"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { SPECIALTIES_COLUMNS } from "./SpecialtiesMegaMenu";
import { COE_ITEMS } from "./ClinicalExcellenceDropdown";

interface NavigationItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const links: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Specialties", href: "/specialties", children: SPECIALTIES_COLUMNS.flat() },
  { label: "Clinical Excellence", href: "/clinical-excellence", children: COE_ITEMS },
  { label: "Doctors", href: "/best-doctor" },
  { label: "International Patients", href: "/international-patients" },
  { label: "Services", href: "/services" },
  { label: "Health Information", href: "/blog" },
  { label: "Careers", href: "/careers", children: [
    { label: "Doctors", href: "/careers/doctors" },
    { label: "Staff Members", href: "/careers/hospital-staff" },
  ] },
  { label: "About Us", href: "/about", children: [
    { label: "About Us", href: "/about" },
    { label: "Leadership Team", href: "/leadership-team" },
  ] },
  { label: "Media", href: "/in-the-media", children: [
    { label: "Media", href: "/in-the-media" },
    { label: "Press Release", href: "/press-release" },
    { label: "Blogs", href: "/blog" },
  ] },
  { label: "Contact Us", href: "/contact-us" },
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 881px)");
    const onDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <div className="mobile-navigation" ref={wrapper}>
      <Link href="/best-doctor" className="mobile-find-doctor" onClick={() => setOpen(false)}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" /></svg>
        Find A Doctor
      </Link>
      <button ref={toggle} type="button" className="mobile-menu-toggle" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-main-navigation" onClick={() => setOpen((value) => !value)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
      <nav id="mobile-main-navigation" className="mobile-menu-panel" aria-label="Mobile navigation" hidden={!open}>
        {links.map((item, index) => item.children ? (
          <div className="mobile-menu-group" key={item.href}>
            <button type="button" className="mobile-submenu-toggle" aria-expanded={expanded === item.label} aria-controls={`mobile-submenu-${index}`} onClick={() => setExpanded((current) => current === item.label ? null : item.label)}>
              {item.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ transform: expanded === item.label ? "rotate(180deg)" : undefined }}><path d="m6 9 6 6 6-6" /></svg>
            </button>
            <div id={`mobile-submenu-${index}`} className="mobile-submenu" hidden={expanded !== item.label}>
              <Link href={item.href as Route} onClick={() => setOpen(false)}>View {item.label}</Link>
              {item.children.map((child) => <Link key={child.href} href={child.href as Route} onClick={() => setOpen(false)}>{child.label}</Link>)}
            </div>
          </div>
        ) : <Link key={item.href} href={item.href as Route} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <div className="mobile-menu-actions">
          <a href="tel:+919644496444" onClick={() => setOpen(false)}> Emergency</a>
          <Link href="/book-an-appointment" onClick={() => setOpen(false)}>Book an Appointment</Link>
        </div>
      </nav>
    </div>
  );
}
