"use client";

import { useEffect, useState, useSyncExternalStore, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    label: "Super speciality care",
    title: <>Super speciality care,<br /> held to a <em>higher</em> standard.</>,
    description: <>A 200-bed super speciality hospital with seven centres of excellence, AI-assisted patient monitoring, and dedicated international patient services. Every specialty, one campus.</>,
    image: "/images/home/banner/family-care-banner.jpeg",
    mobileImage: "/images/home/banner/family-care-banner.jpeg",
    href: "/book-an-appointment",
    action: "Book an appointment",
  },
  {
    label: "Cardiac sciences",
    title: <>Every heartbeat,<br /> <em>cared for.</em></>,
    description: <>Comprehensive cardiac care built<br />around every beat of life.</>,
    image: "/images/home/banner/cardiac-couple-banner.jpeg",
    mobileImage: "/images/home/banner/cardiac-couple-banner.jpeg",
    href: "/institute-of-cardiac-sciences",
    action: "Explore cardiac care",
  },
  {
    label: "Digestive care",
    title: <>Your Gut <em>TALKS.</em><br /> We <em>LISTEN.</em></>,
    description: <>Every Digestive Concern<br />Deserves Expert Attention.</>,
    image: "/images/home/banner/digestive-health-gut-brain-banner.jpeg",
    mobileImage: "/images/home/banner/digestive-health-gut-brain-banner.jpeg",
    href: "/institute-of-gastro-and-liver-sciences",
    action: "Explore digestive care",
  },
  {
    label: "Bone, joint and spine care",
    title: <>Move <em>without<br />limits.</em></>,
    description: <>Advanced orthopaedic and spine care<br />that gets you moving again.</>,
    image: "/images/home/banner/bone-joint-spine-active-living-banner.jpeg",
    mobileImage: "/images/home/banner/bone-joint-spine-active-living-banner.jpeg",
    href: "/centre-for-bone-joint-spine-care",
    action: "Explore bone, joint & spine care",
  },
];

function subscribeToMotionPreference(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [playback, setPlayback] = useState<"auto" | "paused" | "playing">("auto");
  const reducedMotion = useSyncExternalStore(subscribeToMotionPreference, getReducedMotion, () => true);
  const rotating = playback === "playing" || (playback === "auto" && !reducedMotion);
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [rotating, active]);

  function select(index: number) {
    setActive((index + slides.length) % slides.length);
  }

  return (
    <section
      className={`hero hero-carousel relative overflow-hidden${active < 2 ? " hero-carousel--photo-banner" : ""}`}
      aria-label="SRM Global Hospitals highlights"
      aria-roledescription="carousel"
      onFocusCapture={(event) => {
        // Keyboard navigation pauses rotation; pointer clicks keep it running.
        if (event.target.matches(":focus-visible")) setPlayback("paused");
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.label}
          className={`hero-background hero-slide-background${index < 2 ? " hero-slide-background--photo" : " hero-slide-background--zoomed-out"}${active === index ? " is-active" : ""}`}
          aria-hidden="true"
          style={{
            "--slide-image": `url('${slide.image}')`,
            "--slide-mobile-image": `url('${slide.mobileImage}')`,
          } as CSSProperties}
        />
      ))}
      <div className="container relative z-10">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-slides-track" aria-live={rotating ? "off" : "polite"} aria-atomic="true">
              {slides.map((slide, index) => (
                <div
                  key={slide.label}
                  className={`hero-slide-panel${active === index ? " is-active" : ""}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
                  aria-hidden={active !== index}
                  id={`home-slide-${index}`}
                >
                  <div className="hero-slide-text">
                    {index === 1 && <p className="hero-specialty-label">Cardiac Science</p>}
                    {index === 2 && <p className="hero-specialty-label">Gastro &amp; Liver Science</p>}
                    {index === 3 && <p className="hero-specialty-label">Bone Joint &amp; Spine Care</p>}
                    {index === 0 ? (
                      <h1 className="hero-headline">{slide.title}</h1>
                    ) : (
                      <h2 className="hero-headline">{slide.title}</h2>
                    )}
                    <p className="hero-subline">{slide.description}</p>
                  </div>
                  <div className="hero-slide-action-wrap">
                    <a
                      className="hero-slide-action"
                      href={slide.href}
                      tabIndex={active === index ? 0 : -1}
                    >
                      {slide.action}
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="hero-carousel-controls" aria-label="Banner controls">
              <div className="hero-carousel-dots">
                {slides.map((slide, index) => (
                  <button key={slide.label} type="button" className="hero-carousel-dot" aria-label={`Show slide ${index + 1}: ${slide.label}`} aria-current={active === index ? "true" : undefined} aria-controls={`home-slide-${index}`} onClick={() => select(index)}><span /></button>
                ))}
              </div>
              <span className="hero-carousel-count" aria-hidden="true">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-item"><span className="num">7</span><span className="lbl">Centres of Excellence</span></div>
              <div className="hero-meta-item"><span className="num">40+</span><span className="lbl">Specialties</span></div>
              <div className="hero-meta-item"><span className="num">100+</span><span className="lbl">Senior Specialists</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
