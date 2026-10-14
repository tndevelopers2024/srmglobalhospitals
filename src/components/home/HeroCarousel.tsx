"use client";

import { useEffect, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const slides = [
  {
    label: "Family care",
    eyebrow: "SRM Global Hospitals · Chengalpattu",
    title: <>Super speciality care,<br /> held to a <em>higher</em> standard.</>,
    description: "A 200-bed super speciality hospital with seven centres of excellence, AI-assisted patient monitoring, and dedicated international patient services. Every specialty, one campus.",
    image: "/images/home/banner/desktop-banner-1.jpeg",
    mobileImage: "/images/home/banner/mobile-banner-1.jpeg",
    href: "/book-an-appointment",
    action: "Book an appointment",
  },
  {
    label: "Centres of excellence",
    eyebrow: "Expert teams · Connected care",
    title: <>Specialist expertise.<br /> <em>One</em> connected campus.</>,
    description: "Explore our centres of excellence, where specialist teams work together across cardiac, neuro, renal, and other advanced medical services.",
    image: "/images/home/banner/desktop-banner-2.jpeg",
    mobileImage: "/images/home/banner/mobile-banner-2.jpeg",
    href: "/clinical-excellence",
    action: "Explore our centres",
  },
  {
    label: "International patients",
    eyebrow: "International patient services",
    title: <>Care without borders.<br /> Support at <em>every</em> step.</>,
    description: "Plan your care with a dedicated international patient team, from consultation and treatment estimates to travel guidance and follow-up support.",
    image: "/images/home/banner/desktop-banner-3.jpeg",
    mobileImage: "/images/home/banner/mobile-banner-3.jpeg",
    href: "/international-patients",
    action: "Plan your visit",
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

export default function HeroCarousel({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const [playback, setPlayback] = useState<"auto" | "paused" | "playing">("auto");
  const reducedMotion = useSyncExternalStore(subscribeToMotionPreference, getReducedMotion, () => true);
  const rotating = playback === "playing" || (playback === "auto" && !reducedMotion);
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [rotating, active]);

  function select(index: number) {
    setActive((index + slides.length) % slides.length);
  }

  return (
    <section
      className="hero hero-carousel relative overflow-hidden"
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
          className={`hero-background hero-slide-background${active === index ? " is-active" : ""}`}
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
            <div aria-live={rotating ? "off" : "polite"} aria-atomic="true">
              {slides.map((slide, index) => (
                <div key={slide.label} hidden={active !== index} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.label}`} id={`home-slide-${index}`}>
                  <div className="hero-slide-eyebrow">{slide.eyebrow}</div>
                  {index === 0 ? (
                    <h1 className="hero-headline">{slide.title}</h1>
                  ) : (
                    <h2 className="hero-headline">{slide.title}</h2>
                  )}
                  <p className="hero-subline">{slide.description}</p>
                  <a className="hero-slide-action" href={slide.href}>{slide.action}<ArrowRight size={17} aria-hidden="true" /></a>
                </div>
              ))}
            </div>
            <div className="hero-carousel-controls" aria-label="Banner controls">
              <button type="button" className="hero-carousel-arrow" aria-label="Previous banner slide" onClick={() => select(active - 1)}><ArrowLeft size={18} aria-hidden="true" /></button>
              <div className="hero-carousel-dots">
                {slides.map((slide, index) => (
                  <button key={slide.label} type="button" className="hero-carousel-dot" aria-label={`Show slide ${index + 1}: ${slide.label}`} aria-current={active === index ? "true" : undefined} aria-controls={`home-slide-${index}`} onClick={() => select(index)}><span /></button>
                ))}
              </div>
              <button type="button" className="hero-carousel-arrow" aria-label="Next banner slide" onClick={() => select(active + 1)}><ArrowRight size={18} aria-hidden="true" /></button>
              <button type="button" className="hero-carousel-arrow" aria-label={rotating ? "Pause banner slideshow" : "Play banner slideshow"} onClick={() => setPlayback(rotating ? "paused" : "playing")}>{rotating ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}</button>
              <span className="hero-carousel-count" aria-hidden="true">0{active + 1} / 03</span>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-item"><span className="num">7</span><span className="lbl">Centres of Excellence</span></div>
              <div className="hero-meta-item"><span className="num">40+</span><span className="lbl">Specialties</span></div>
              <div className="hero-meta-item"><span className="num">100+</span><span className="lbl">Senior Specialists</span></div>
            </div>
            <div className="hero-trust">
              <span className="hero-trust-label">Accredited</span>
              <div className="hero-trust-badges">
                <span className="hero-trust-badge">NABH</span><span className="hero-trust-badge">NABL</span><span className="hero-trust-badge">ISO 9001</span><span className="hero-trust-badge">Cashless · 100+ Insurers</span>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
