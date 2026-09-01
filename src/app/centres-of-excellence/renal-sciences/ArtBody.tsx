"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  const [activeTab, setActiveTab] = useState("hemo");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Institute of Renal Sciences",
    date: "",
  });

  const heroRef = useRef<HTMLElement>(null);
  const trustRef = useRef<HTMLElement>(null);
  const [counterAnimated, setCounterAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  // Sticky CTA IntersectionObserver
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Trust bar count-up animation
  useEffect(() => {
    const trustEl = trustRef.current;
    if (!trustEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counterAnimated) {
          setCounterAnimated(true);
          const duration = 1800;
          const startTime = performance.now();
          const targetCounts = [10000, 25000, 20, 24];

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounts(targetCounts.map((target) => Math.floor(eased * target)));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(trustEl);
    return () => observer.disconnect();
  }, [counterAnimated]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", department: "Institute of Renal Sciences", date: "" });
    }, 3000);
  };

  return (
    <div className="coe-page">
      <section className="hero" id="hero" ref={heroRef}>
  <div className="container">
    <div className="hero-content">
      <div className="hero-breadcrumb">
        <Link href="/">Home</Link>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        <Link href="/#coe">Our Specialties</Link>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        <span>Institute of Nephrology</span>
      </div>
      <div className="hero-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
        <span>Center of Excellence</span>
      </div>
      <h1>Nephrology Hospital in Chengalpattu</h1>
      <p className="hero-tagline">Comprehensive kidney care for chronic kidney disease, dialysis, and kidney transplant evaluation, backed by expert nephrologists and round-the-clock support for patients across Chengalpattu, Guduvancheri, Tambaram, and the wider southern Chennai corridor.</p>
      <div className="hero-ctas">
        <a className="btn btn-gradient" href="#cta-banner">Book a Consultation
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </a>
        <a className="btn btn-outline" href="tel:+919644496444">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          Call Now
        </a>
      </div>
    </div>
    <div className="hero-image">
      <div className="hero-image-wrapper">
        <div className="hero-image-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg><span>Nephrology Team Photo</span></div>
      </div>
    </div>
  </div>
</section>

      <section className="trust-bar" ref={trustRef}>
  <div className="container">
    <div className="trust-item">
      <div className="trust-number">{counts[0] ? counts[0].toLocaleString() : 0}+</div>
      <div className="trust-label">Kidney Patients Treated</div>
    </div>
    <div className="trust-item">
      <div className="trust-number">{counts[1] ? counts[1].toLocaleString() : 0}+</div>
      <div className="trust-label">Dialysis Sessions Conducted</div>
    </div>
    <div className="trust-item">
      <div className="trust-number">{counts[2] ? counts[2].toLocaleString() : 0}+</div>
      <div className="trust-label">Years Combined Exp.</div>
    </div>
    <div className="trust-item">
      <div className="trust-number">{counts[3] || 24}/7</div>
      <div className="trust-label">Nephrology Support</div>
    </div>
  </div>
</section>

      <section className="about" id="about">
  <div className="container">
    <div className="about-text">
      <div className="eyebrow">About the Institute</div>
      <h2 className="section-heading">Nephrology Hospital in Chengalpattu for Kidney Care and Dialysis</h2>
      <p>The Department of Nephrology at SRM Global Hospitals provides comprehensive care for kidney disorders in adults and children, including chronic kidney disease, acute kidney injury, kidney stones, and glomerular diseases. Located in Kattankulathur on GST Road, it is staffed by consultant nephrologists supporting patients across Chengalpattu, Guduvancheri, Tambaram, and surrounding areas.</p>
      <p>Because hypertension and diabetes are leading causes of kidney disease, the team works closely with cardiology and diabetology on blood pressure and blood sugar control. Patients are typically referred to nephrology for changes in urine output, unexplained fatigue, swelling, or abnormal blood and urine test results.</p>
      <div className="about-features">
        <div className="about-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>NABH Accredited</div>
        <div className="about-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Adult &amp; Pediatric Nephrology</div>
        <div className="about-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>24/7 Dialysis Support</div>
      </div>
      <a className="btn btn-gradient btn-sm" style={{ marginTop: '24px' }} href="#cta-banner">Learn More</a>
    </div>
    <div className="about-image">
      <div>Nephrology Team</div>
    </div>
  </div>
</section>

      <section className="subspecialties">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Sub-Specialties</div>
      <h2 className="section-heading">Sub-Specialties</h2>
      <p className="section-sub">Dedicated nephrology teams covering kidney care from childhood through adulthood.</p>
    </div>
    <div className="subspec-grid">
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
        <h3>Adult Nephrology</h3>
        <p>Diagnosis and treatment of chronic kidney disease, acute kidney injury, kidney stones, and hypertension-related kidney disease in adults, with ongoing monitoring of kidney function.</p>
      </div>
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
        <h3>Pediatric Nephrology</h3>
        <p>Specialised kidney care for children, covering congenital kidney conditions, urinary tract disorders, and early signs of impaired kidney function.</p>
      </div>
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg></div>
        <h3>Dialysis Services</h3>
        <p>Hemodialysis, peritoneal dialysis, and home dialysis options that replace lost kidney function to prolong and protect life, supported by a dedicated dialysis care team.</p>
      </div>
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="4" /></svg></div>
        <h3>Kidney Transplant Care</h3>
        <p>Pre-transplant evaluation and lifelong post-transplant follow-up for kidney transplant recipients, considered the most effective long-term treatment for end-stage kidney failure, coordinated closely with the hospital's transplant surgery team.</p>
      </div>
    </div>
  </div>
</section>

      <section className="conditions">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Conditions We Treat</div>
      <h2 className="section-heading">Kidney Conditions We Treat</h2>
      <p className="section-sub">Diagnosis and management of kidney disorders affecting patients at every age.</p>
    </div>
    <div className="conditions-grid">
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
        <div>
          <h3>Chronic Kidney Disease (CKD)</h3>
          <p>Gradual loss of kidney function, often linked to diabetes and high blood pressure, managed with medication and monitoring.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
        <div>
          <h3>Acute Kidney Injury (AKI)</h3>
          <p>A sudden drop in kidney function from infection, dehydration, or medication effects, sometimes needing urgent dialysis.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg></div>
        <div>
          <h3>Kidney Stones</h3>
          <p>Painful mineral deposits in the urinary tract, evaluated with ultrasound and urine tests. Our nephrologists also investigate the underlying cause to help prevent stones from forming again.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
        <div>
          <h3>Glomerulonephritis</h3>
          <p>Inflammation of the kidney's filtering units causing blood or protein in the urine, diagnosed through urinalysis and, when needed, a kidney biopsy.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8 6 4 10.5 4 15a8 8 0 0 0 16 0c0-4.5-4-9-8-13z" /></svg></div>
        <div>
          <h3>Hypertension-Related Kidney Disease</h3>
          <p>Long-standing high blood pressure that gradually damages the kidneys' blood vessels, managed with blood pressure control and regular testing.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg></div>
        <div>
          <h3>Polycystic Kidney Disease (PKD)</h3>
          <p>A genetic condition in which fluid-filled cysts form in the kidneys, monitored with imaging to track kidney function over time.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="specialists">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Meet Our Team</div>
      <h2 className="section-heading">Our Specialists</h2>
      <p className="section-sub">Consultant nephrologists caring for adult and pediatric kidney patients at SRM Global Hospitals.</p>
    </div>
    <div className="doctors-grid">
      <div className="doctor-card">
        <div className="doctor-photo"><div className="doctor-photo-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div></div>
        <div className="doctor-info">
          <div className="doctor-name">Dr. Mathew Gerry George</div>
          <div className="doctor-designation">SENIOR CONSULTANT, NEPHROLOGY</div>
          <div className="doctor-quals">MBBS, MD, DNB</div>
          <a className="btn btn-outline-purple btn-sm" href="#cta-banner">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card">
        <div className="doctor-photo"><div className="doctor-photo-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div></div>
        <div className="doctor-info">
          <div className="doctor-name">Dr. Jayaprakash V</div>
          <div className="doctor-designation">VISITING CONSULTANT, NEPHROLOGY</div>
          <div className="doctor-quals">MBBS, MD, DM, DNB</div>
          <a className="btn btn-outline-purple btn-sm" href="#cta-banner">Book Appointment</a>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="procedures" id="procedures">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Our Procedures</div>
      <h2 className="section-heading">Treatments &amp; Procedures</h2>
      <p className="section-sub">Diagnostic and therapeutic procedures performed by our nephrology team.</p>
    </div>
    <div className="tabs-nav">
      <button 
        className={`tab-btn ${activeTab === 'hemo' ? 'active' : ''}`} 
        type="button" 
        data-tab="hemo"
        onClick={() => setActiveTab('hemo')}
      >
        Hemodialysis
      </button>
      <button 
        className={`tab-btn ${activeTab === 'peritoneal' ? 'active' : ''}`} 
        type="button" 
        data-tab="peritoneal"
        onClick={() => setActiveTab('peritoneal')}
      >
        Peritoneal Dialysis
      </button>
    </div>

    <div className={`tab-panel ${activeTab === 'hemo' ? 'active' : ''}`} id="tab-hemo">
      <div className="tab-image"><div>Image Placeholder: Hemodialysis Unit</div></div>
      <div className="tab-content">
        <h3>Hemodialysis</h3>
        <p>Hemodialysis filters waste and excess fluid from the blood using a dialysis machine, typically for two to three sessions a week, for chronic kidney disease and acute kidney injury.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Vascular access creation and care</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Two to three sessions per week</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Continuous monitoring during dialysis</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Coordination with the transplant team when needed</li>
        </ul>
        <a className="btn btn-gradient btn-sm" href="#cta-banner">Book a Consultation</a>
      </div>
    </div>

    <div className={`tab-panel ${activeTab === 'peritoneal' ? 'active' : ''}`} id="tab-peritoneal">
      <div className="tab-image"><div>Image Placeholder: Peritoneal Dialysis</div></div>
      <div className="tab-content">
        <h3>Peritoneal Dialysis</h3>
        <p>Peritoneal dialysis uses the lining of the abdomen as a natural filter to remove waste and excess fluid, letting many patients dialyse at home rather than at a dialysis unit.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Home-based dialysis option</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Training and support for patients and caregivers</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Regular monitoring for infection and effectiveness</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Suitable for select patients with kidney failure</li>
        </ul>
        <a className="btn btn-gradient btn-sm" href="#cta-banner">Book a Consultation</a>
      </div>
    </div>

  </div>
</section>

      <section className="technology" id="technology">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Advanced Infrastructure</div>
      <h2 className="section-heading">Built for Comprehensive Kidney Care</h2>
      <p className="section-sub">Infrastructure designed for accurate kidney diagnosis and safe dialysis care.</p>
    </div>
    <div className="tech-grid">
      <div className="tech-card">
        <div className="tech-card-img">Image Placeholder: Dialysis Unit</div>
        <div className="tech-card-body">
          <h3>Dedicated Dialysis Unit</h3>
          <p>A dedicated hemodialysis and peritoneal dialysis unit with continuous monitoring, supporting patients with both chronic kidney disease and acute kidney injury.</p>
        </div>
      </div>
      <div className="tech-card">
        <div className="tech-card-img">Image Placeholder: Nephrology Lab</div>
        <div className="tech-card-body">
          <h3>Nephrology Lab &amp; Imaging</h3>
          <p>On-site urinalysis, blood tests, and ultrasound imaging to detect kidney disorders early and monitor kidney function over time.</p>
        </div>
      </div>
      <div className="tech-card">
        <div className="tech-card-img">Image Placeholder: Critical Care</div>
        <div className="tech-card-body">
          <h3>Critical Care Support for AKI</h3>
          <p>Close coordination with intensive care for patients with acute kidney injury who need urgent dialysis or combined organ support.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="life-after" id="kidney-health">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Kidney Health &amp; Prevention</div>
      <h2 className="section-heading">Protecting Your Kidney Health</h2>
      <p className="section-sub">Early detection and everyday habits go a long way in protecting kidney function.</p>
    </div>
    <p>Beyond filtering waste from the blood, the kidneys release the enzyme renin to help control blood pressure, produce the hormone erythropoietin to stimulate red blood cell production, and regulate the electrolyte and acid-base balance that every cell in the body depends on. This is why nephrologists are trained to manage electrolyte and acid-base disorders alongside kidney disease itself.</p>
    <p>Diabetes and high blood pressure are the two leading causes of kidney disease, so keeping both under control is one of the most effective ways to protect kidney function. Routine blood and urine tests can pick up early signs of kidney damage before symptoms appear, especially for people with a family history of kidney disease. Staying well hydrated, limiting excess salt, and avoiding overuse of painkillers also support long-term kidney health.</p>
  </div>
</section>

      <section className="stories">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Patient Stories</div>
      <h2 className="section-heading">What Our Patients Say</h2>
      <p className="section-sub">Real experiences from patients who received nephrology care at SRM Global Hospitals.</p>
    </div>
    <div className="stories-grid">
      <div className="story-card">
        <div className="story-quote-icon"><svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg></div>
        <p className="story-text">After my bypass surgery at SRM Global Hospitals, I felt like I got a second chance at life. The entire cardiac team was exceptional, from the surgeon to the rehabilitation staff. I was walking within days.</p>
        <div className="story-author">
          <div className="story-avatar">RS</div>
          <div>
            <div className="story-name">Ramesh Sundaram</div>
            <div className="story-procedure">Triple Bypass Surgery</div>
            <div className="story-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="story-card">
        <div className="story-quote-icon"><svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg></div>
        <p className="story-text">My father had a heart attack at 3 AM. The emergency team at SRM had him in the cath lab within 30 minutes. The quick response saved his life. We are forever grateful to Dr. Kumar and his team.</p>
        <div className="story-author">
          <div className="story-avatar">LA</div>
          <div>
            <div className="story-name">Lakshmi Arunachalam</div>
            <div className="story-procedure">Emergency Angioplasty</div>
            <div className="story-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="story-card">
        <div className="story-quote-icon"><svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg></div>
        <p className="story-text">I came from overseas for my valve replacement surgery. The international patient services team made everything seamless. The surgery was a success and I recovered faster than expected. World-class care at affordable cost.</p>
        <div className="story-author">
          <div className="story-avatar">MH</div>
          <div>
            <div className="story-name">Mohammed Hassan</div>
            <div className="story-procedure">Aortic Valve Replacement</div>
            <div className="story-stars">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="why-choose">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Why SRM Global</div>
      <h2 className="section-heading">Why Choose SRM Global Hospitals</h2>
      <p className="section-sub">Kidney care outcomes depend on early diagnosis, consistent monitoring, and coordinated care.</p>
    </div>
    <div className="why-grid">
      <div className="why-card">
        <div className="why-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
        <h3>Nephrology Care for Adults and Children</h3>
        <p>Consultant nephrologists manage kidney disorders across every age group, from pediatric kidney conditions to adult chronic kidney disease and dialysis.</p>
      </div>
      <div className="why-card">
        <div className="why-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /></svg></div>
        <h3>Comprehensive Kidney Services Under One Roof</h3>
        <p>Diagnosis, dialysis, and kidney transplant evaluation are all managed within the same department, working closely with diabetology, cardiology, and transplant surgery.</p>
      </div>
      <div className="why-card">
        <div className="why-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg></div>
        <h3>Patient-Centric, Round-the-Clock Support</h3>
        <p>Dialysis services and nephrology consultations are supported round the clock, with compassionate care built around each patient's treatment plan.</p>
      </div>
    </div>
  </div>
</section>

      <section className="cta-banner" id="cta-banner">
  <div className="container">
    <div className="cta-text">
      <h2>Book Your Nephrology Consultation</h2>
      <p>Whether you need a routine kidney check, ongoing dialysis care, or evaluation for kidney transplantation, our nephrology team is ready to help. Book a consultation or call us directly.</p>
      <a className="cta-phone" href="tel:+919644496444">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        +91 96444 96444
      </a>
    </div>
    <form className="cta-form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Your Full Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <select required defaultValue="Institute of Nephrology">
        <option value="" disabled>Select Department</option>
        <option value="Institute of Nephrology">Institute of Nephrology</option>
        <option value="Institute of Cardiac Sciences">Institute of Cardiac Sciences</option>
        <option value="Institute of Orthopaedics">Institute of Orthopaedics</option>
        <option value="Institute of Neurosciences">Institute of Neurosciences</option>
        <option value="Institute of Oncology">Institute of Oncology</option>
        <option value="Institute of Gastroenterology">Institute of Gastroenterology</option>
        <option value="Institute of Organ Transplant">Institute of Organ Transplant</option>
        <option value="Institute of Pulmonology">Institute of Pulmonology</option>
        <option value="Institute of Urology">Institute of Urology</option>
      </select>
      <input type="date" required />
      {formSubmitted ? (
                <div style={{ color: '#2d6a4f', fontWeight: 600, padding: '12px 0' }}>
                  ✓ Consultation Request Received. We will call you shortly.
                </div>
              ) : (
                <button type="submit" className="btn btn-gradient">
                  Book Appointment
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              )}
    </form>
  </div>
</section>

      <section className="articles">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Health Information</div>
      <h2 className="section-heading">Related Articles</h2>
      <p className="section-sub">Practical information about kidney health, dialysis, and prevention.</p>
    </div>
    <div className="articles-grid">
      <div className="article-card">
        <div className="article-img">Image Placeholder</div>
        <div className="article-body">
          <span className="article-tag">Kidney Health</span>
          <h3>5 Signs Your Kidneys May Not Be Working Properly</h3>
          <p>Fatigue, changes in urine output, swelling, and other early signs of kidney trouble that should not be ignored.</p>
          <div className="article-meta"><span>4 min read</span></div>
        </div>
      </div>
      <div className="article-card">
        <div className="article-img">Image Placeholder</div>
        <div className="article-body">
          <span className="article-tag">Dialysis</span>
          <h3>Hemodialysis vs Peritoneal Dialysis: Which Is Right for You?</h3>
          <p>A practical comparison of the two main dialysis options, including how each fits into daily life.</p>
          <div className="article-meta"><span>4 min read</span></div>
        </div>
      </div>
      <div className="article-card">
        <div className="article-img">Image Placeholder</div>
        <div className="article-body">
          <span className="article-tag">Prevention</span>
          <h3>Chronic Kidney Disease vs Acute Kidney Injury: What's the Difference?</h3>
          <p>Understanding how a sudden drop in kidney function differs from the gradual decline seen in chronic kidney disease.</p>
          <div className="article-meta"><span>5 min read</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="faq">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">FAQ</div>
      <h2 className="section-heading">Frequently Asked Questions</h2>
      <p className="section-sub">Common questions about nephrology and kidney care at SRM Global Hospitals.</p>
    </div>
    <div className="faq-list">

      <div className={`faq-item ${openFaqIndex === 0 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(0)}>
          <h3>1. What is nephrology, and what does the department treat?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Nephrology is the branch of internal medicine focused on kidney health. The department treats chronic kidney disease, acute kidney injury, kidney stones, and glomerular diseases, and manages dialysis and transplant care for adults and children.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 1 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(1)}>
          <h3>2. What are the signs that your kidneys are not working properly?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Common signs include changed urine output, swelling, persistent fatigue, high blood pressure, and nausea. Blood and urine tests can detect reduced kidney function even before symptoms appear.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 2 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(2)}>
          <h3>3. Why would I be referred to a nephrologist?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">You may be referred if tests show reduced kidney function, if you have long-standing diabetes or high blood pressure, or if you have blood in the urine or unexplained swelling.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 3 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(3)}>
          <h3>4. What is the best treatment for kidney disease?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Treatment depends on the stage of disease. Early chronic kidney disease is managed with medication and blood pressure or blood sugar control, while kidney failure may need dialysis or transplantation.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 4 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(4)}>
          <h3>5. Which hospital and nephrologist is right for kidney care in Chennai?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Rather than one best hospital or doctor, look for accreditation, a wide range of services, and a nephrologist experienced in your condition. SRM Global Hospitals in Chengalpattu is NABH accredited and treats both adult and pediatric kidney conditions.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 5 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(5)}>
          <h3>6. What is the best thing to drink for your kidneys?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Plain water is generally best, since it helps the kidneys filter waste and maintain fluid balance. People with existing kidney disease should follow their nephrologist's advice on daily fluid intake, since the right amount varies by condition.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 6 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(6)}>
          <h3>7. How are nephrologists trained?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Nephrologists first complete a medical degree, typically four to six years, followed by specialised training. In Australia, this includes at least three years of basic physician training and three more years of advanced nephrology training. In the UK, nephrology training typically spans five years, while in the US nephrologists complete a three-year internal medicine residency before a nephrology fellowship. Pediatric nephrologists complete a three-year pediatric residency before training further in kidney care for children.</div></div>
      </div>

    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
           SECTION 14: STICKY CTA
           ══════════════════════════════════════════════════════ */}
      <div className={`sticky-cta ${isStickyVisible ? "visible" : ""}`} id="stickyCta">
        <div className="container">
          <div className="sticky-cta-text">Institute of Renal Sciences <span>SRM Global Hospitals, Chennai</span></div>
          <div className="sticky-cta-actions">
            <a href="tel:+919644496444" className="sticky-cta-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 96444 96444
            </a>
            <a href="#cta-banner" className="btn btn-gradient btn-sm">Book Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
}
