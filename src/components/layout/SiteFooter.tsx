"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SiteFooter() {
  const pathname = usePathname();
  const footerBottomRef = useRef<HTMLDivElement>(null);
  const [hasStickyBar, setHasStickyBar] = useState(false);
  const [stickyHeight, setStickyHeight] = useState(60);

  useEffect(() => {
    let ticking = false;

    const getStickyElements = () => {
      return document.querySelectorAll<HTMLElement>(".sticky-bar, .sticky-cta");
    };

    const detectSticky = () => {
      const els = getStickyElements();
      if (els.length > 0) {
        setHasStickyBar(true);
        let maxH = 0;
        els.forEach((el) => {
          if (el.offsetHeight > maxH) maxH = el.offsetHeight;
        });
        if (maxH > 0) setStickyHeight(maxH);
      } else {
        setHasStickyBar(false);
      }
    };

    detectSticky();
    const t1 = setTimeout(detectSticky, 200);
    const t2 = setTimeout(detectSticky, 600);

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const footerBottom = footerBottomRef.current;
          const els = getStickyElements();
          const floatingCta = document.querySelector<HTMLElement>(".floating-cta");

          if (footerBottom && els.length > 0) {
            const rect = footerBottom.getBoundingClientRect();
            const winH = window.innerHeight;

            if (rect.top < winH) {
              const overlap = Math.max(0, winH - rect.top);
              els.forEach((el) => {
                el.style.bottom = `${overlap}px`;
                // Ensure sticky bar stays visible when docked in footer
                if (el.classList.contains("sticky-bar")) {
                  el.classList.add("visible");
                } else if (el.classList.contains("sticky-cta")) {
                  el.classList.add("show");
                  el.classList.add("visible");
                }
              });
              if (floatingCta) {
                floatingCta.style.bottom = `${overlap + 28}px`;
              }
            } else {
              els.forEach((el) => {
                el.style.bottom = "0px";
              });
              if (floatingCta) {
                floatingCta.style.bottom = "";
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      detectSticky();
      onScroll();
    }, { passive: true });

    onScroll();

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      const els = getStickyElements();
      els.forEach((el) => {
        el.style.bottom = "";
      });
      const floatingCta = document.querySelector<HTMLElement>(".floating-cta");
      if (floatingCta) {
        floatingCta.style.bottom = "";
      }
    };
  }, [pathname]);

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-block">
            <div className="brand footer-brand">
              <img src="https://srmglobalhospitals.com/wp-content/uploads/2023/01/srm-logo-final.png" alt="SRM Global Hospitals" className="brand-logo" />{" "}
            </div>{" "}
            <p>A 200-bed super speciality hospital in Chengalpattu, Chennai. Seven centres of excellence, AI-assisted patient monitoring, and dedicated international patient services.</p>{" "}
            <div className="footer-social">
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
          <div className="footer-col">
            <h4>Care</h4>{" "}
            <ul>
              <li>
                <Link href="/#coe">Centres of Excellence</Link>
              </li>{" "}
              <li>
                <Link href="/#specialties">Specialties</Link>
              </li>{" "}
              <li>
                <Link href="/best-doctor">Doctors</Link>
              </li>{" "}
              <li>
                <Link href="/#packages">Health Packages</Link>
              </li>{" "}
              <li>
                <Link href="/#intl">International Patients</Link>
              </li>{" "}
              <li>
                <Link href="/services">Hospital Services</Link>
              </li>{" "}
              <li>
                <Link href="/#emergency">Emergency</Link>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="footer-col">
            <h4>Patients &amp; Visitors</h4>{" "}
            <ul>
              <li>
                <a href="tel:+919644496444">Book an Appointment</a>
              </li>{" "}
              <li>
                <Link href="/#insurance">Insurance &amp; Cashless</Link>
              </li>{" "}
              <li>
                <Link href="/#admissions">Admissions</Link>
              </li>{" "}
              <li>
                <Link href="/#visitors">Visitor Information</Link>
              </li>{" "}
              <li>
                <Link href="/#records">Medical Records</Link>
              </li>{" "}
              <li>
                <Link href="/#stories">Patient Stories</Link>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="footer-col">
            <h4>About SRM</h4>{" "}
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>{" "}
              <li>
                <Link href="/about#leader">Leadership</Link>
              </li>{" "}
              <li>
                <Link href="/#quality">Quality &amp; Accreditation</Link>
              </li>{" "}
              <li>
                <Link href="/#careers">Careers</Link>
              </li>{" "}
              <li>
                <Link href="/blog">Newsroom</Link>
              </li>{" "}
              <li>
                <Link href="/blog">Insights Blog</Link>
              </li>{" "}
              <li>
                <Link href="/#contact">Contact</Link>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="footer-sticky-spacer"
          style={{ height: hasStickyBar ? `${stickyHeight + 16}px` : 0 }}
        />{" "}
        <div className="footer-bottom" ref={footerBottomRef}>
          <div>©️ 2026 SRM Global Hospitals (A part of SRM Group). All Rights Reserved.</div>{" "}
          <div className="footer-bottom-links">
            <Link href="/#privacy">Privacy Policy</Link>{" "}
            <Link href="/#terms">Terms &amp; Conditions</Link>{" "}
            <Link href="/#disclaimer">Disclaimer</Link>{" "}
            <a href="/sitemap.xml">Sitemap</a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
