"use client";

import { useEffect } from "react";

// Ports the blog reference pages' vanilla JS: scroll reveal, sticky nav and
// the reading-progress bar (article). The listing's filter, sort and load-more
// are React state in ArticleBrowser rather than DOM handlers.
export default function BlogInteractions() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    // Scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    // Sticky nav
    const navWrap = document.querySelector(".header-nav-bar");
    const onScroll = () => {
      if (!navWrap) return;
      if (window.scrollY > 4) navWrap.classList.add("scrolled");
      else navWrap.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // Reading progress bar (article page)
    const progressFill = document.getElementById("readProgress");
    const articleEl = document.querySelector<HTMLElement>(".art-body");
    if (progressFill && articleEl) {
      const updateProgress = () => {
        const rect = articleEl.getBoundingClientRect();
        const total = articleEl.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const pct = Math.max(0, Math.min(100, (scrolled / total) * 100));
        progressFill.style.width = pct + "%";
      };
      window.addEventListener("scroll", updateProgress, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", updateProgress));
      updateProgress();
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
