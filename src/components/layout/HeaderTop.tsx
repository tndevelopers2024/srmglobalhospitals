"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import type { Route } from "next";

export default function HeaderTop() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const mobile = window.matchMedia("(max-width: 880px)");
    let previousY = Math.max(0, window.scrollY);
    let directionStartY = previousY;
    let direction = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      if (!mobile.matches || y <= 10) {
        header.classList.remove("mobile-header-hidden");
        direction = 0;
        directionStartY = y;
      } else {
        const nextDirection = Math.sign(y - previousY);
        if (nextDirection && nextDirection !== direction) {
          directionStartY = previousY;
          direction = nextDirection;
        }
        if (Math.abs(y - directionStartY) >= 8) {
          header.classList.toggle("mobile-header-hidden", direction > 0 && y > header.offsetHeight);
        }
      }
      previousY = y;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    mobile.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mobile.removeEventListener("change", update);
      cancelAnimationFrame(frame);
      header.classList.remove("mobile-header-hidden");
    };
  }, []);

  return (
    <div className="header-top" id="nav-wrap" ref={headerRef}>
      <div className="container">
        <div className="header-top-inner">
          <Link href="/" className="brand" aria-label="SRM Global Hospitals">
            <img
              src="/images/srm-logo-final.png"
              alt="SRM Global Hospitals"
              className="brand-logo"
            />{" "}
          </Link>{" "}
          <MobileNavigation />
          <div className="header-quick-actions">
            {/*<a
              href="tel:+919644496444"
              className="header-pill emergency-pill"
              aria-label="Emergency: call +91 96444 96444"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.32 1.58.59 2.33" />
              </svg>{" "}
              Emergency{" "}
            </a>{" "}*/}

          </div>{" "}
          <div className="header-secondary">
            <Link href="/best-doctors" className="header-pill">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.35-4.35" />
              </svg>{" "}
              Find A Doctor
            </Link>{" "}
            <nav className="secondary-nav" aria-label="Secondary">
              <div className="nav-dropdown">
                <Link href="#" className="nav-dropdown-toggle">
                  About Us{" "}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <div className="nav-dropdown-menu">
                  <Link href="/about-us">About Us</Link>
                  <Link href="/leadership-team">Leadership Team</Link>
                </div>
              </div>{" "}
              <div className="nav-dropdown">
                <Link href="#" className="nav-dropdown-toggle">
                  Media{" "}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <div className="nav-dropdown-menu">
                  <Link href={"/in-the-media" as Route}>Media</Link>
                  <Link href={"/press-release" as Route}>Press Release</Link>
                  <Link href="/blogs">Blogs</Link>
                </div>
              </div>{" "}
              <Link href={"/contact-us" as Route}>Contact Us</Link>{" "}
            </nav>{" "}
            <a
              href="tel:+919644496444"
              className="btn btn-primary header-cta"
              aria-label="Emergency: call +91 96444 96444"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>{" "}
              Emergency{" "}
            </a>{" "}
            <Link
              href={"/book-an-appointment" as Route}
              className="btn btn-primary header-cta"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>{" "}
              Book An Appointment{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
