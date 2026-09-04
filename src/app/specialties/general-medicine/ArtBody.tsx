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
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const question = e.currentTarget;
    const item = question.closest(".faq-item") as HTMLElement | null;
    if (!item) return;

    const answer = item.querySelector(".faq-answer") as HTMLElement | null;
    const isOpen = item.classList.contains("open");

    // Close all open FAQs
    document.querySelectorAll(".faq-item.open").forEach((el) => {
      if (el !== item) {
        el.classList.remove("open");
        const a = el.querySelector(".faq-answer") as HTMLElement | null;
        if (a) a.style.maxHeight = "";
      }
    });

    // Toggle clicked
    if (isOpen) {
      item.classList.remove("open");
      if (answer) answer.style.maxHeight = "";
    } else if (answer) {
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
      {/* 1. HERO */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="wrap">
          <div className="hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#specialties">Our Specialties</Link>
            <span>/</span>
            <span>General Medicine</span>
          </div>
          <div className="hero-text reveal">
            <div className="hero-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v4l3 3" />
              </svg>
              Specialty Department
            </div>
            <h1>Department of General Medicine</h1>
            <p className="hero-subtitle">Complete Care for Every Internal Health Concern.</p>
            <p className="hero-desc">Recognized as the best general medicine hospital in Chengalpattu, our general medicine department brings together experienced general physicians and internal medicine specialists for thorough medical consultation, prompt fever treatment, and long-term management of chronic and lifestyle diseases affecting the body&amp;apos;s internal organs.</p>
            <div className="hero-ctas">
              <a href="#appointment" className="btn-primary">
                Book an Appointment
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="tel:+919644496444" className="btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
          <div className="hero-img reveal">
            <div className="img-placeholder">Hero Image - General Medicine Department</div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="stats-bar reveal">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="stat-value">6</div>
              <div className="stat-label">General Medicine Specialists</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div className="stat-value">Comprehensive</div>
              <div className="stat-label">Internal Medicine Care</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div className="stat-value">Advanced</div>
              <div className="stat-label">Diagnostic &amp; Preventive Screening</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="stat-value">Patient-Centric</div>
              <div className="stat-label">Personalized Treatment Plans</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-text reveal">
            <div className="section-label">About the Department</div>
            <h2 className="section-title">Comprehensive Internal Medicine Care in Chengalpattu</h2>
            <p>At SRM Global Hospitals Pvt Ltd, our General Medicine Department encompasses the vast field of internal medicine, focusing on diseases and disorders affecting the body&amp;apos;s internal organs, including the heart, lungs, gastrointestinal tract, kidneys, urinary tract, brain, spinal column, neurological system, muscles, and joints.</p>
            <p>As the best general medicine hospital in Chengalpattu, our team of general physicians and internal medicine specialists provides thorough medical consultation, accurate diagnosis, and timely fever treatment, while placing strong emphasis on chronic disease management and preventive medicine to support long-term health and well-being for every patient.</p>
          </div>
          <div className="about-img reveal">
            <div className="img-placeholder">Department Image - General Medicine Clinic / Consultation</div>
          </div>
        </div>
      </section>

      {/* 4. CONDITIONS */}
      <section className="conditions" id="conditions">
        <div className="wrap">
          <div className="conditions-header reveal">
            <div className="section-label">What We Treat</div>
            <h2 className="section-title">Conditions We Treat</h2>
            <p className="section-desc">Expert diagnosis and management across the full spectrum of internal medicine and chronic health conditions.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h4>Hypertension</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </div>
              <h4>Diabetes Mellitus</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/></svg>
              </div>
              <h4>Asthma</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h4>Chronic Obstructive Pulmonary Disease (COPD)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h4>Hyperlipidemia</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
              <h4>Gastroesophageal Reflux Disease (GERD)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Chronic Kidney Disease (CKD)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h4>Osteoarthritis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
              </div>
              <h4>Rheumatoid Arthritis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </div>
              <h4>Irritable Bowel Syndrome (IBS)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              </div>
              <h4>Fever, Cold and Cough</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <h4>Anxiety Disorders</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-2-3-6-3-7 0-1 3 1 6 4 6h3M12 8c2-3 6-3 7 0 1 3-1 6-4 6h-3"/></svg>
              </div>
              <h4>Thyroid Disorders</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/></svg>
              </div>
              <h4>Chronic Fatigue Syndrome</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>
              </div>
              <h4>Fibromyalgia</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TREATMENTS */}
      <section className="treatments" id="treatments">
        <div className="wrap">
          <div className="treatments-header reveal">
            <div className="section-label">Our Treatments</div>
            <h2 className="section-title">Key Treatments &amp; Services</h2>
            <p className="section-desc">Thorough medical consultation and management delivered by experienced general physicians and internal medicine specialists.</p>
          </div>
          <div className="treatments-grid">
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <h4>Comprehensive Health Checkups</h4>
              <p>Thorough medical consultation and health checkup services to assess overall wellbeing and detect early signs of internal disease.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h4>Chronic Disease Management</h4>
              <p>Ongoing care for chronic and lifestyle diseases such as hypertension and diabetes, focused on long-term control and prevention of complications.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <h4>Fever &amp; Infectious Disease Care</h4>
              <p>Prompt fever treatment and infectious disease treatment for acute illness, backed by accurate diagnosis and timely follow-up.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h4>Preventive Health Screening</h4>
              <p>Preventive medicine screenings that identify risk factors early, supporting proactive prevention of lifestyle diseases.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h4>Medication Management &amp; Follow-up</h4>
              <p>Careful medication management and scheduled follow-up visits to keep chronic conditions like asthma and thyroid disorders well controlled.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Multi-System Diagnosis &amp; Consultation</h4>
              <p>Medical consultation for patients with multiple or overlapping conditions, coordinated by an internal medicine specialist for a whole-body view of care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCTORS */}
      <section className="doctors" id="doctors">
        <div className="wrap">
          <div className="doctors-header reveal">
            <div className="section-label">Meet Our Experts</div>
            <h2 className="section-title">Our General Medicine Specialists</h2>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/general-medicine/dr-r-nanda-kumar.png" alt="Dr. Nanda Kumar. R" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Nanda Kumar. R</h4>
                <p className="doctor-qualification">MBBS, MD</p>
                <p>Senior Consultant, General Medicine</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/general-medicine/dr-s-n-meenkshi-sundari.png" alt="Dr. Meenakshi Sundari. S/N" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Meenakshi Sundari. S/N</h4>
                <p className="doctor-qualification">MBBS, MD</p>
                <p>Senior Consultant</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/general-medicine/dr-jagan.png" alt="Dr. Y. Jagan Mohan" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Y. Jagan Mohan</h4>
                <p className="doctor-qualification">MBBS, MD (General Medicine), Diploma in Diabetology, B.Sc (Yoga &amp; Naturopathy)</p>
                <p>Consultant, Diabetology</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/general-medicine/dr-vigneshwaran.png" alt="Dr. Vigneshwaran" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Vigneshwaran</h4>
                <p className="doctor-qualification">MBBS, MD</p>
                <p>Consultant</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/general-medicine/dr-js-kumar.png" alt="Dr. Kumar. J.S" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Kumar. J.S</h4>
                <p className="doctor-qualification">MBBS, MD</p>
                <p>Visiting Consultant</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/general-medicine/dr-s-jennie.png" alt="Dr. S. Jennie" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. S. Jennie</h4>
                <p className="doctor-qualification">MBBS, MD, MSc</p>
                <p>Visiting Consultant</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="why-choose reveal">
        <div className="wrap">
          <div className="why-choose-header">
            <div className="section-label">Why SRM Global</div>
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <h4>Comprehensive Internal Medicine Expertise</h4>
              <p>Our department boasts a team of highly skilled internists with expertise in managing a wide spectrum of diseases affecting internal organs.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h4>Patient-Centric Approach</h4>
              <p>We prioritize treating the individual as a whole, considering not only the medical conditions but the overall well-being of our patients.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Disease Prevention and Management</h4>
              <p>Internists play a crucial role in preventing disease by diagnosing and treating illness early, recognizing and controlling risk factors to prevent the onset of chronic diseases like hypertension and diabetes.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h4>Focused Training in Chronic Illnesses</h4>
              <p>Our internists are trained to diagnose and treat chronic illnesses, especially in cases where a patient may have multiple conditions simultaneously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT CTA */}
      <section className="appointment" id="appointment">
        <div className="wrap">
          <div className="appt-text reveal">
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Ready for a Comprehensive Medical Consultation?</h2>
            <p>Schedule a medical consultation with our general physicians for fever treatment, chronic disease management, or ongoing care of an internal health concern. As the best general medicine hospital in Chengalpattu, we combine internal medicine expertise with a personalized care plan for every patient.</p>
            <div className="appt-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="faq-header reveal">
            <div className="section-label">Have Questions?</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">Find answers to common questions about our general medicine services.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                When should I consult a general physician instead of a specialist directly?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>A general physician is the right first medical consultation for fever, cold and cough, unexplained fatigue, or any new or ongoing internal health concern. Our internal medicine specialists can then refer you to the right specialty if a condition needs more focused care.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What conditions does the General Medicine department manage?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Our general medicine department manages a wide range of conditions affecting the internal organs, including hypertension, diabetes mellitus, asthma, thyroid disorders, and chronic kidney disease, alongside everyday illnesses like fever and infections.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                How is fever, cold and cough treated at the General Medicine department?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Fever treatment begins with a medical consultation to identify the underlying cause, followed by appropriate medication and, when needed, further tests to rule out an infectious disease before symptoms are allowed to persist.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What does chronic disease management involve for conditions like hypertension and diabetes?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Chronic disease management combines regular monitoring, medication management, and lifestyle guidance to keep conditions like hypertension and diabetes mellitus under control and reduce the risk of long-term complications.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                Do I need a referral to book a medical consultation with an internal medicine specialist?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>No referral is needed. You can book an appointment with our general medicine department directly for a medical consultation, health checkup, or ongoing chronic disease management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. STICKY BOTTOM CTA */}
      <div className={`sticky-cta ${isStickyVisible ? "show" : ""}`} id="stickyCta">
        <div className="wrap">
          <div className="sticky-cta-text">Need a general physician consultation?</div>
          <div className="sticky-cta-actions">
            <a href="#appointment" className="btn-primary">Book Appointment</a>
            <a href="tel:+919644496444" className="btn-call">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 96444 96444</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
