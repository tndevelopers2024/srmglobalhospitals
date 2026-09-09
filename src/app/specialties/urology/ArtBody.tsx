"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroRef = useRef<HTMLElement>(null);

  // Sticky CTA reveal on hero scroll exit
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const item = el.parentElement;
    if (!item) return;
    const answer = item.querySelector<HTMLElement>(".faq-answer");
    const isOpen = item.classList.contains("open");

    // Close all
    document.querySelectorAll(".faq-item.open").forEach((i) => {
      i.classList.remove("open");
      const ans = i.querySelector<HTMLElement>(".faq-answer");
      if (ans) ans.style.maxHeight = "";
    });

    // Open clicked if it was closed
    if (!isOpen && answer) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
<section className="hero" id="hero" ref={heroRef}>
  <div className="wrap">
    <div className="hero-breadcrumb">
      <Link href="/">Home</Link><span>/</span><Link href="/#specialties">Our Specialties</Link><span>/</span><span>Urology</span>
    </div>
    <div className="hero-text reveal">
      <div className="hero-label">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4l3 3"/></svg>
        Specialty Department
      </div>
      <h1>Department of Urology</h1>
      <p className="hero-subtitle">Expert Care for Every Urological Concern.</p>
      <p className="hero-desc">Recognized as the best urology hospital in Chengalpattu, our urologists provide comprehensive diagnosis and treatment for conditions affecting the urinary tract and male reproductive system, from kidney stones and urinary tract infections to prostate cancer and erectile dysfunction.</p>
      <div className="hero-ctas">
        <a href="#appointment" className="btn-primary">
          Book an Appointment
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <a href="tel:+919644496444" className="btn-outline">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Now
        </a>
      </div>
    </div>
    <div className="hero-img reveal">
      <div className="img-placeholder">Hero Image - Urology Department</div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     2. QUICK STATS BAR
     ════════════════════════════════════════════════  */}
<section className="stats-bar reveal">
  <div className="wrap">
    <div className="stats-grid">
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div className="stat-value">4</div>
        <div className="stat-label">Urology Specialists</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div className="stat-value">Advanced</div>
        <div className="stat-label">Diagnostic &amp; Surgical Facilities</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div className="stat-value">Comprehensive</div>
        <div className="stat-label">Urological Care</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <div className="stat-value">Patient-Centric</div>
        <div className="stat-label">Personalized Treatment Plans</div>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     3. ABOUT THE DEPARTMENT
     ════════════════════════════════════════════════  */}
<section className="about" id="about">
  <div className="wrap">
    <div className="about-text reveal">
      <div className="section-label">About the Department</div>
      <h2 className="section-title">Comprehensive Urological Care in Chengalpattu</h2>
      <p>The Urology department at SRM Global Hospitals offers comprehensive care for a wide range of urological conditions, ensuring that patients receive top-notch treatment and support. Led by a team of highly skilled urologists and supported by dedicated nursing staff, the department specializes in diagnosing and treating conditions affecting the urinary tract and male reproductive system.</p>
      <p>From kidney stones and urinary tract infections to prostate cancer and erectile dysfunction, our experts provide personalized care tailored to each patient's needs. Equipped with advanced diagnostic tools and state-of-the-art surgical facilities, patients benefit from the latest advancements in urological care, whether through minimally invasive procedures, endoscopic techniques, or traditional surgery, ensuring optimal outcomes and speedy recovery. With a commitment to excellence and patient-centric care, our Urology department strives to improve the quality of life for individuals dealing with urological issues.</p>
    </div>
    <div className="about-img reveal">
      <div className="img-placeholder">Department Image - Urology Clinic / Consultation</div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     4. CONDITIONS WE TREAT
     ════════════════════════════════════════════════  */}
<section className="conditions" id="conditions">
  <div className="wrap">
    <div className="conditions-header reveal">
      <div className="section-label">What We Treat</div>
      <h2 className="section-title">Conditions We Treat</h2>
      <p className="section-desc">Expert diagnosis and management across the full spectrum of urological conditions.</p>
    </div>
    <div className="conditions-grid">
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        </div>
        <h4>Kidney Stones</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        </div>
        <h4>Urinary Tract Infections (UTIs)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <h4>Benign Prostatic Hyperplasia (BPH)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <h4>Erectile Dysfunction</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <h4>Prostate Cancer</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
        </div>
        <h4>Bladder Cancer</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h4>Testicular Cancer</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        <h4>Incontinence (Urinary and Fecal)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <h4>Overactive Bladder</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/></svg>
        </div>
        <h4>Urethral Stricture</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <h4>Peyronie's Disease</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        </div>
        <h4>Varicocele</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
        </div>
        <h4>Hydrocele</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
        </div>
        <h4>Cryptorchidism</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
        </div>
        <h4>Interstitial Cystitis</h4>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     5. KEY TREATMENTS
     ════════════════════════════════════════════════  */}
<section className="treatments" id="treatments">
  <div className="wrap">
    <div className="treatments-header reveal">
      <div className="section-label">Our Treatments</div>
      <h2 className="section-title">Key Treatments &amp; Procedures</h2>
      <p className="section-desc">A full range of surgical and non-surgical procedures for the diagnosis and treatment of urological conditions.</p>
    </div>
    <div className="treatments-grid">
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
        </div>
        <h4>Minimally Invasive Urological Surgery</h4>
        <p>Advanced minimally invasive techniques for a wide range of urological conditions, reducing discomfort and speeding recovery.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <h4>Endoscopic Procedures</h4>
        <p>Endoscopic techniques used for the diagnosis and treatment of urological conditions, offering a less invasive alternative to open surgery.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        </div>
        <h4>Kidney Stone Treatment</h4>
        <p>Comprehensive management of kidney stones, from medical therapy to surgical removal when needed.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <h4>BPH &amp; Prostate Care</h4>
        <p>Diagnosis and treatment of benign prostatic hyperplasia and prostate cancer, tailored to each patient's needs.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
        </div>
        <h4>Advanced Urological Diagnostics</h4>
        <p>State-of-the-art diagnostic tools for precise evaluation and treatment planning of urological conditions.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </div>
        <h4>Traditional Urological Surgery</h4>
        <p>Traditional surgical approaches for complex urological conditions where minimally invasive options are not suitable.</p>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     6. OUR DOCTORS
     ════════════════════════════════════════════════  */}
<section className="doctors" id="doctors">
  <div className="wrap">
    <div className="doctors-header reveal">
      <div className="section-label">Meet Our Experts</div>
      <h2 className="section-title">Our Urology Specialists</h2>
    </div>
    <div className="doctors-grid">
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/urology/dr-m-deepak.png" alt="Dr. M. Deepak" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. M. Deepak</h4>
          <p className="doctor-qualification">MBBS, MS, MCh</p>
          <p>Senior Consultant, Urology</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/urology/dr-anand-krishnamoorthy.png" alt="Dr. Anand Krishnamoorthi" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Anand Krishnamoorthi</h4>
          <p className="doctor-qualification">MBBS, MS, MCh, FMAS</p>
          <p>Senior Consultant, Urology</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/urology/dr-senthil-kumar-t.png" alt="Dr. Senthil Kumar. T" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Senthil Kumar. T</h4>
          <p className="doctor-qualification">MBBS, MS, MCh</p>
          <p>Consultant, Urology</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/urology/dr-navaneethakrishnan.png" alt="Dr. Navaneethakrishnan" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Navaneethakrishnan</h4>
          <p className="doctor-qualification">MBBS, DNB</p>
          <p>Visiting Consultant, Urology</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     7. WHY CHOOSE US
     ════════════════════════════════════════════════  */}
<section className="why-choose reveal">
  <div className="wrap">
    <div className="why-choose-header">
      <div className="section-label">Why SRM Global</div>
      <h2 className="section-title">Why Choose Us</h2>
    </div>
    <div className="why-grid">
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h4>Expert Urologists</h4>
        <p>Led by a team of highly skilled urologists and supported by dedicated nursing staff, specializing in diagnosing and treating conditions affecting the urinary tract and male reproductive system.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h4>Comprehensive Care</h4>
        <p>From kidney stones and urinary tract infections to prostate cancer and erectile dysfunction, we provide personalized care tailored to each patient's needs.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
        </div>
        <h4>Minimally Invasive Procedures</h4>
        <p>Equipped with advanced diagnostic tools and state-of-the-art surgical facilities, offering minimally invasive and endoscopic techniques that reduce recovery time.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.07 0l1.71-1.71a5 5 0 0 0-7.07-7.07L10 5.93"/><path d="M14 11a5 5 0 0 0-7.07 0l-1.71 1.71a5 5 0 0 0 7.07 7.07L14 18.07"/></svg>
        </div>
        <h4>Advanced Treatments</h4>
        <p>Patients benefit from the latest advancements in urological care, whether through minimally invasive procedures, endoscopic techniques, or traditional surgery, ensuring optimal outcomes and speedy recovery.</p>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     8. APPOINTMENT CTA
     ════════════════════════════════════════════════  */}
<section className="appointment" id="appointment">
  <div className="wrap">
    <div className="appt-text reveal">
      <div className="section-label">Get in Touch</div>
      <h2 className="section-title">Ready to Address Your Urological Concern?</h2>
      <p>Schedule a consultation with our urologists for kidney stone treatment, BPH and prostate care, or minimally invasive urological surgery. As the best urology hospital in Chengalpattu, we combine specialized expertise with a personalized care plan for every patient.</p>
      <div className="appt-phone">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <a href="tel:+919644496444">+91 96444 96444</a>
      </div>
    </div>
    <div className="appt-form reveal">
      <h3>Book an Appointment</h3>
      {formSubmitted ? (
        <div style={{ textAlign: "center", padding: "30px 10px" }}>
          <div style={{ width: "60px", height: "60px", margin: "0 auto 16px", borderRadius: "50%", background: "#e8f9ee", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 style={{ color: "#16a34a", marginBottom: "8px" }}>Appointment Request Received</h3>
          <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            Thank you! Our consultation team will contact you shortly to confirm your slot.
          </p>
          <button
            type="button"
            className="btn-primary"
            style={{ marginTop: "20px" }}
            onClick={() => setFormSubmitted(false)}
          >
            Book Another Appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <input type="date" required />
            </div>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message (optional)"></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Submit Appointment Request
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </form>
      )}
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     9. FAQ
     ════════════════════════════════════════════════  */}
<section className="faq" id="faq">
  <div className="wrap">
    <div className="faq-header reveal">
      <div className="section-label">Have Questions?</div>
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-desc">Find answers to common questions about our urology services.</p>
    </div>
    <div className="faq-list">
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          When should I see a urologist?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">You should see a urologist if you experience symptoms such as blood in the urine, persistent urinary tract infections, difficulty urinating, erectile dysfunction, or pain that could indicate kidney stones or a prostate condition.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          How are kidney stones treated?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Treatment depends on the size and location of the stone, ranging from increased fluid intake and medication for smaller stones to minimally invasive or surgical removal for larger or obstructing stones.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          Is BPH the same as prostate cancer?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">No. Benign prostatic hyperplasia (BPH) is a non-cancerous enlargement of the prostate, while prostate cancer is a separate condition. Both can cause similar urinary symptoms, so proper evaluation by a urologist is important to distinguish between them.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          Can erectile dysfunction be treated?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Yes. Erectile dysfunction can often be managed with lifestyle changes, medication, or other treatments depending on the underlying cause, which our urologists will evaluate during a consultation.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What is the difference between minimally invasive and traditional urological surgery?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Minimally invasive and endoscopic techniques use smaller incisions or natural openings to access the urinary tract, generally offering less discomfort and faster recovery than traditional open surgery, which remains necessary for certain complex conditions.</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     10. STICKY CTA
     ════════════════════════════════════════════════  */}
<div className={`sticky-cta ${isStickyVisible ? "show" : ""}`} id="stickyCta">
  <div className="wrap">
    <div className="sticky-cta-text">Have a urological concern?</div>
    <div className="sticky-cta-actions">
      <a href="#appointment" className="btn-primary">Book Appointment</a>
      <a href="tel:+919644496444" className="btn-call">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>+91 96444 96444</span>
      </a>
    </div>
  </div>
</div>
    </>
  );
}
