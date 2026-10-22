"use client";

import { useEffect } from "react";

// Ports the reference page's vanilla JS behaviors: sticky nav, scroll reveal,
// count-up counters, hero specialty tabs with auto-rotate, live bookings
// ticker, and the specialty search filter.
export default function HomeInteractions() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animationFrames = new Map<HTMLElement, number>();
    cleanups.push(() => animationFrames.forEach((id) => cancelAnimationFrame(id)));

    // Sticky nav + sticky bar
    const navWrap = document.querySelector(".header-nav-bar");
    const stickyBar = document.getElementById("sticky-bar");
    let lastScroll = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (navWrap) {
        if (y > 4) navWrap.classList.add("scrolled");
        else navWrap.classList.remove("scrolled");
      }
      if (stickyBar) {
        if (y > 600 && y > lastScroll) {
          stickyBar.classList.add("visible");
        } else if (y < lastScroll || y < 600) {
          stickyBar.classList.remove("visible");
        }
      }
      if (stickyBar) stickyBar.inert = !stickyBar.classList.contains("visible");
      lastScroll = y;
    };
    onScroll();
    if (stickyBar) {
      const stickyObserver = new MutationObserver(() => {
        stickyBar.inert = !stickyBar.classList.contains("visible");
      });
      stickyObserver.observe(stickyBar, { attributes: true, attributeFilter: ["class"] });
      cleanups.push(() => stickyObserver.disconnect());
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // Scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    const main = document.getElementById("main-content");
    if (!reducedMotion) main?.classList.add("home-animations-ready");
    cleanups.push(() => main?.classList.remove("home-animations-ready"));
    cleanups.push(() => revealObserver.disconnect());

    // Count-up animation
    function animateCount(el: HTMLElement) {
      const target = parseInt(el.dataset.counter || "0", 10);
      const previousFrame = animationFrames.get(el);
      if (previousFrame !== undefined) cancelAnimationFrame(previousFrame);
      if (reducedMotion) {
        el.textContent = String(target);
        return;
      }
      const duration = 1400;
      const start = performance.now();
      const initial = 0;
      function tick(now: number) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(initial + (target - initial) * eased));
        if (t < 1) animationFrames.set(el, requestAnimationFrame(tick));
        else {
          el.textContent = String(target);
          animationFrames.delete(el);
        }
      }
      animationFrames.set(el, requestAnimationFrame(tick));
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting && !el.dataset.counted) {
            el.dataset.counted = "1";
            animateCount(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => counterObserver.observe(el));
    cleanups.push(() => counterObserver.disconnect());

    // Hero panel tabs (specialty switcher)
    const heroTabs = document.querySelectorAll<HTMLElement>(".hero-tab");
    const panelContents = document.querySelectorAll<HTMLElement>(".panel-content");

    heroTabs.forEach((tab) => {
      const onClick = () => {
        const spec = tab.dataset.spec;
        heroTabs.forEach((t) => {
          const selected = t === tab;
          t.classList.toggle("active", selected);
          t.setAttribute("aria-selected", String(selected));
          t.tabIndex = selected ? 0 : -1;
        });
        panelContents.forEach((p) => {
          const isActive = p.dataset.spec === spec;
          p.classList.toggle("active", isActive);
          // Reset and restart count-up on the newly active panel
          if (isActive) {
            p.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
              el.dataset.counted = "1";
              animateCount(el);
            });
          }
        });
      };
      const onEnter = () => {
        if (!tab.classList.contains("active")) tab.click();
      };
      const onKeyDown = (event: KeyboardEvent) => {
        const index = Array.from(heroTabs).indexOf(tab);
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % heroTabs.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + heroTabs.length) % heroTabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = heroTabs.length - 1;
        else return;
        event.preventDefault();
        heroTabs[next].focus();
        heroTabs[next].click();
      };
      tab.addEventListener("click", onClick);
      tab.addEventListener("mouseenter", onEnter);
      tab.addEventListener("keydown", onKeyDown);
      cleanups.push(() => {
        tab.removeEventListener("click", onClick);
        tab.removeEventListener("mouseenter", onEnter);
        tab.removeEventListener("keydown", onKeyDown);
      });
    });

    // Auto-rotate panels every 6 seconds when user hasn't interacted
    let autoRotate = !reducedMotion;
    let rotateIndex = 0;
    const heroPanel = document.querySelector(".hero-panel");
    const stopRotate = () => {
      autoRotate = false;
    };
    heroPanel?.addEventListener("mouseenter", stopRotate, { once: true });
    heroPanel?.addEventListener("focusin", stopRotate);
    heroPanel?.addEventListener("pointerdown", stopRotate);
    cleanups.push(() => {
      heroPanel?.removeEventListener("mouseenter", stopRotate);
      heroPanel?.removeEventListener("focusin", stopRotate);
      heroPanel?.removeEventListener("pointerdown", stopRotate);
    });

    const rotateTimer = setInterval(() => {
      if (!autoRotate || document.hidden || heroTabs.length === 0) return;
      rotateIndex = (rotateIndex + 1) % heroTabs.length;
      heroTabs[rotateIndex].click();
    }, 6000);
    cleanups.push(() => clearInterval(rotateTimer));

    // Live bookings ticker
    const liveBookings = document.getElementById("live-bookings");
    if (liveBookings) {
      let count = parseInt(liveBookings.textContent || "0", 10);
      const bookingsTimer = setInterval(() => {
        if (Math.random() > 0.5) {
          count += 1;
          liveBookings.textContent = String(count);
          const box = liveBookings.parentElement?.parentElement;
          if (box) {
            box.style.transition = "background 200ms";
            box.style.background = "rgba(34, 197, 94, 0.18)";
            setTimeout(() => {
              box.style.background = "rgba(34, 197, 94, 0.08)";
            }, 600);
          }
        }
      }, 9000);
      cleanups.push(() => clearInterval(bookingsTimer));
    }

    // Specialty search filter
    const search = document.querySelector<HTMLInputElement>(".specialties-search input");
    const items = document.querySelectorAll<HTMLElement>(".specialty-item");
    if (search) {
      const onInput = (e: Event) => {
        const q = (e.target as HTMLInputElement).value.trim().toLowerCase();
        let matches = 0;
        items.forEach((item) => {
          const txt = (item.textContent || "").toLowerCase();
          const visible = txt.includes(q);
          item.style.display = visible ? "" : "none";
          if (visible) matches++;
        });
        const status = document.getElementById("specialty-search-status");
        if (status) status.hidden = matches > 0;
      };
      search.addEventListener("input", onInput);
      cleanups.push(() => search.removeEventListener("input", onInput));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
