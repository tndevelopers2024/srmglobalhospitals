"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  const [activeTab, setActiveTab] = useState("trauma-resuscitation");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Emergency & Critical Care",
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
          const targetCounts = [15000, 10, 24, 50];

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
      setFormData({ name: "", phone: "", department: "Emergency & Critical Care", date: "" });
    }, 3000);
  };

  return (
    <div className="coe-page">
      {/* ══════════════════════════════════════════════════════
           SECTION 1: HERO
           ══════════════════════════════════════════════════════ */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-breadcrumb">
              <Link href="/">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <Link href="/#coe">Our Specialties</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span>Emergency &amp; Critical Care</span>
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12h6M12 9v6" />
              </svg>
              <span>Center of Excellence</span>
            </div>
            <h1>24/7 Emergency Hospital in Kattankulathur</h1>
            <p className="hero-tagline">Trauma care, cardiac emergencies, and critical care for Chengalpattu and surrounding areas.</p>
            <div className="hero-ctas">
              <a href="#cta-banner" className="btn btn-gradient">
                Get Emergency Help{" "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="tel:+919644496444" className="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>{" "}
                Call Now
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span>Emergency Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 2: TRUST BAR
           ══════════════════════════════════════════════════════ */}
      <section className="trust-bar" ref={trustRef}>
        <div className="container stagger visible">
          <div className="trust-item">
            <div className="trust-number">{counts[0].toLocaleString()}+</div>
            <div className="trust-label">Emergencies Handled</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">{counts[1]} Min</div>
            <div className="trust-label">Avg Response Time</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">{counts[2]}/7</div>
            <div className="trust-label">Always Open</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">{counts[3]}+</div>
            <div className="trust-label">Critical Care Beds</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 3: ABOUT
           ══════════════════════════════════════════════════════ */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-text">
            <div className="eyebrow">About the Institute</div>
            <h2 className="section-heading">Emergency Hospital in Chengalpattu for Critical and Trauma Care</h2>
            <p>SRM Global Hospitals operates a full-scale emergency department built for speed and precision. A team of emergency physicians and critical care specialists works round the clock, supported by dedicated resuscitation areas, trauma bays, and an in-house ambulance team that covers Kattankulathur, Chengalpattu, and surrounding areas.</p>
            <p>The department is equipped with advanced diagnostic equipment including CT, X-ray, ultrasound, point-of-care testing, and a fully staffed laboratory. From the moment a patient arrives, the goal is definitive treatment within the golden hour.</p>
            <div className="about-features">
              <div className="about-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                NABH Accredited
              </div>
              <div className="about-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                24/7 Trauma Ready
              </div>
              <div className="about-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Multi-Organ Transplant Centre
              </div>
            </div>
            <a href="#cta-banner" className="btn btn-gradient btn-sm" style={{ marginTop: "24px" }}>
              Learn More
            </a>
          </div>
          <div className="about-image">
            <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
              Emergency &amp; Critical Care Team
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 4: SUB-SPECIALTIES
           ══════════════════════════════════════════════════════ */}
      <section className="subspecialties">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Sub-Specialties</div>
            <h2 className="section-heading">Sub-Specialties</h2>
            <p className="section-sub">Specialised emergency response teams trained to handle every category of critical and life threatening conditions.</p>
          </div>
          <div className="subspec-grid">
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Trauma &amp; Accident Care</h3>
              <p>Rapid assessment and surgical intervention for road accidents, falls, and major trauma. Dedicated trauma bay with immediate surgical backup.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <h3>Cardiac Emergency Unit</h3>
              <p>24/7 chest pain evaluation, cardiac emergencies including heart attack management, and direct access to the cath lab for urgent interventions.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
              </div>
              <h3>Critical Care Medicine</h3>
              <p>Advanced ICU with ventilator support, haemodynamic monitoring, and organ support for patients in critical conditions requiring intensive observation.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>Pediatric Emergency Care</h3>
              <p>A dedicated team trained in pediatric emergencies, from high fevers and seizures to respiratory distress and acute infections in children.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 5: CONDITIONS WE TREAT
           ══════════════════════════════════════════════════════ */}
      <section className="conditions">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Conditions We Treat</div>
            <h2 className="section-heading">Medical Emergencies We Handle</h2>
            <p className="section-sub">Immediate medical attention for a wide range of acute and life threatening conditions.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <div>
                <h3>Heart Attack &amp; Cardiac Arrest</h3>
                <p>Rapid evaluation, defibrillation, and emergency cardiac intervention. Direct activation of the cardiac team for catheterisation and stenting when needed.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <div>
                <h3>Stroke &amp; Neurological Emergencies</h3>
                <p>Time-critical stroke management with rapid imaging, clot-busting therapy, and coordination with the neurosciences team for surgical intervention.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <div>
                <h3>Major Trauma &amp; Fractures</h3>
                <p>Comprehensive trauma care for road accidents, falls, crush injuries, and multiple fractures. Trauma surgery backup available round the clock.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
              </div>
              <div>
                <h3>Acute Respiratory Failure</h3>
                <p>Emergency intubation, ventilator management, and treatment for severe asthma, COPD exacerbations, pneumonia, and respiratory distress.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" /></svg>
              </div>
              <div>
                <h3>Poisoning &amp; Allergic Reactions</h3>
                <p>Rapid decontamination, antidote administration for poisoning, and emergency treatment for severe allergic reactions including anaphylaxis.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
              </div>
              <div>
                <h3>Pediatric Emergencies</h3>
                <p>High fevers, convulsions, breathing difficulty, dehydration, and acute infections in children, managed by a paediatric emergency team.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <div>
                <h3>Surgical Emergencies</h3>
                <p>Acute appendicitis, intestinal obstruction, internal bleeding, and other conditions requiring immediate surgical intervention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 6: OUR SPECIALISTS
           ══════════════════════════════════════════════════════ */}
      <section className="specialists">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Meet Our Team</div>
            <h2 className="section-heading">Our Specialists</h2>
            <p className="section-sub">Board-certified emergency physicians and critical care specialists available round the clock.</p>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <Image
                    src="/images/coe/247-emergency-hospital-in-kattankulathur/image-1.png"
                    alt="Dr. V.P. Chandrasekaran"
                    width={122}
                    height={122}
                    style={{ width: "80%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">Dr. V.P. Chandrasekaran</div>
                <div className="doctor-designation">Emergency Medicine Advisor</div>
                <div className="doctor-quals">MBBS, MD, MBA</div>
                <div className="doctor-exp"></div>
                <a href="#cta-banner" className="btn btn-outline-purple btn-sm">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <Image
                    src="/images/coe/247-emergency-hospital-in-kattankulathur/image-2.png"
                    alt="Dr. Arthi Rajendran"
                    width={122}
                    height={122}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">Dr. Arthi Rajendran</div>
                <div className="doctor-designation">Senior Consultant</div>
                <div className="doctor-quals">MBBS, DNB</div>
                <div className="doctor-exp"></div>
                <a href="#cta-banner" className="btn btn-outline-purple btn-sm">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <Image
                    src="/images/coe/247-emergency-hospital-in-kattankulathur/image-3.png"
                    alt="Dr. Raja Rajeshwaran"
                    width={122}
                    height={122}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">Dr. Raja Rajeshwaran</div>
                <div className="doctor-designation">Senior Consultant</div>
                <div className="doctor-quals">MBBS, MD</div>
                <div className="doctor-exp"></div>
                <a href="#cta-banner" className="btn btn-outline-purple btn-sm">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <Image
                    src="/images/coe/247-emergency-hospital-in-kattankulathur/image-4.png"
                    alt="Dr. Hari Prasad S"
                    width={122}
                    height={122}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">Dr. Hari Prasad S</div>
                <div className="doctor-designation">Consultant</div>
                <div className="doctor-quals">MBBS, DNB, CPCDM</div>
                <div className="doctor-exp"></div>
                <a href="#cta-banner" className="btn btn-outline-purple btn-sm">Book Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 7: PROCEDURES (TABS)
           ══════════════════════════════════════════════════════ */}
      <section className="procedures" id="procedures">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Our Procedures</div>
            <h2 className="section-heading">Treatments &amp; Procedures</h2>
            <p className="section-sub">Life-saving procedures performed by our emergency medicine and critical care teams.</p>
          </div>
          <div className="tabs-nav">
            <button
              type="button"
              className={`tab-btn ${activeTab === "trauma-resuscitation" ? "active" : ""}`}
              onClick={() => setActiveTab("trauma-resuscitation")}
            >
              Trauma Resuscitation
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "cardiac-care" ? "active" : ""}`}
              onClick={() => setActiveTab("cardiac-care")}
            >
              Emergency Cardiac Care
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "stroke-management" ? "active" : ""}`}
              onClick={() => setActiveTab("stroke-management")}
            >
              Stroke Management
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "critical-care" ? "active" : ""}`}
              onClick={() => setActiveTab("critical-care")}
            >
              Critical Care
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "paediatric-emergency" ? "active" : ""}`}
              onClick={() => setActiveTab("paediatric-emergency")}
            >
              Pediatric Emergency
            </button>
          </div>

          {activeTab === "trauma-resuscitation" && (
            <div className="tab-panel active" id="tab-trauma-resuscitation">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Trauma Resuscitation
                </div>
              </div>
              <div className="tab-content">
                <h3>Trauma Resuscitation &amp; Stabilisation</h3>
                <p>A structured approach to major trauma that follows Advanced Trauma Life Support protocols. The resuscitation area is designed for rapid primary survey, haemorrhage control, and airway management, with immediate access to blood products and surgical backup.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Dedicated trauma bay with full monitoring</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Massive transfusion protocol on standby</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Direct surgical team activation</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Integrated imaging within the trauma bay</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Get Emergency Help</a>
              </div>
            </div>
          )}

          {activeTab === "cardiac-care" && (
            <div className="tab-panel active" id="tab-cardiac-care">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Emergency Cardiac Care
                </div>
              </div>
              <div className="tab-content">
                <h3>Emergency Cardiac Intervention</h3>
                <p>Rapid assessment and treatment for cardiac emergencies including heart attack, unstable angina, and cardiac arrest. The department maintains a direct pathway to the cath lab, reducing door-to-balloon time for patients who need urgent intervention.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> ECG and cardiac markers within minutes</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Direct cath lab activation pathway</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> ACLS-trained resuscitation team</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Post-cardiac care ICU transfer</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Get Emergency Help</a>
              </div>
            </div>
          )}

          {activeTab === "stroke-management" && (
            <div className="tab-panel active" id="tab-stroke-management">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Stroke Management
                </div>
              </div>
              <div className="tab-content">
                <h3>Acute Stroke Management</h3>
                <p>A time-sensitive stroke protocol that begins at triage. Rapid CT imaging, neurologist consultation, and thrombolytic therapy are initiated within minutes of arrival. For large vessel occlusions, the team coordinates directly with neuro-interventionalists.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Door-to-CT under 20 minutes</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Thrombolysis within therapeutic window</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Neuro-intervention team on call</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Dedicated stroke ICU bed availability</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Get Emergency Help</a>
              </div>
            </div>
          )}

          {activeTab === "critical-care" && (
            <div className="tab-panel active" id="tab-critical-care">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Critical Care ICU
                </div>
              </div>
              <div className="tab-content">
                <h3>Intensive Care &amp; Organ Support</h3>
                <p>Advanced critical care for patients with multi-organ failure, sepsis, severe infections, and post-operative complications. The ICU is equipped with invasive monitoring, ventilators, dialysis capability, and round-the-clock intensivist presence.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> 1:1 nurse-patient ratio for critical cases</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Ventilator and haemodynamic support</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Bedside dialysis capability</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> 24/7 intensivist-led care</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Get Emergency Help</a>
              </div>
            </div>
          )}

          {activeTab === "paediatric-emergency" && (
            <div className="tab-panel active" id="tab-paediatric-emergency">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Pediatric Emergency
                </div>
              </div>
              <div className="tab-content">
                <h3>Pediatric Emergency Medicine</h3>
                <p>Children are not small adults. Our pediatric emergency team uses age-appropriate protocols, paediatric-specific diagnostic equipment, and weight-based dosing to manage acute illness and injury in children from newborns to adolescents.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Paediatric-trained emergency physicians</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Age-appropriate equipment and dosing</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Child-friendly treatment environment</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Direct paediatric ICU admission pathway</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Get Emergency Help</a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 8: TECHNOLOGY
           ══════════════════════════════════════════════════════ */}
      <section className="technology">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Advanced Infrastructure</div>
            <h2 className="section-heading">Built for Speed and Precision</h2>
            <p className="section-sub">Every piece of equipment in the emergency department is chosen for one purpose: faster, better patient care.</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Trauma Bay</div>
              <div className="tech-card-body">
                <h3>Trauma Bay &amp; Resuscitation</h3>
                <p>Fully equipped resuscitation area with advanced monitoring, defibrillators, emergency airway equipment, and point-of-care ultrasound. Designed for simultaneous multi-team response to critical patients.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Diagnostics</div>
              <div className="tech-card-body">
                <h3>In-House Diagnostics</h3>
                <p>24/7 radiology facilities including digital X-ray, CT scanner, and ultrasound. On-site laboratory services for blood work, cardiac markers, and toxicology, delivering results within minutes.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: ICU</div>
              <div className="tech-card-body">
                <h3>Critical Care ICU</h3>
                <p>Multi-bed intensive care unit with individual isolation capability, invasive and non-invasive ventilators, continuous haemodynamic monitoring, bedside echocardiography, and ECMO readiness for the most critical conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 9: PATIENT STORIES
           ══════════════════════════════════════════════════════ */}
      <section className="stories">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Patient Stories</div>
            <h2 className="section-heading">What Our Patients Say</h2>
            <p className="section-sub">Real experiences from patients who received emergency treatment at SRM Global Hospitals.</p>
          </div>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-quote-icon">
                <svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
              </div>
              <p className="story-text">[Patient story placeholder. Awaiting real testimonial from SRM team. Ideally a trauma or cardiac emergency case with a positive recovery outcome.]</p>
              <div className="story-author">
                <div className="story-avatar">P1</div>
                <div>
                  <div className="story-name">[Patient Name]</div>
                  <div className="story-procedure">[Procedure/Condition]</div>
                </div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-quote-icon">
                <svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
              </div>
              <p className="story-text">[Patient story placeholder. Ideally a pediatric emergency or stroke case demonstrating speed of response.]</p>
              <div className="story-author">
                <div className="story-avatar">P2</div>
                <div>
                  <div className="story-name">[Patient Name]</div>
                  <div className="story-procedure">[Procedure/Condition]</div>
                </div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-quote-icon">
                <svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
              </div>
              <p className="story-text">[Patient story placeholder. Ideally an accident/trauma case demonstrating ambulance and trauma bay coordination.]</p>
              <div className="story-author">
                <div className="story-avatar">P3</div>
                <div>
                  <div className="story-name">[Patient Name]</div>
                  <div className="story-procedure">[Procedure/Condition]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 10: WHY CHOOSE SRM
           ══════════════════════════════════════════════════════ */}
      <section className="why-choose">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Why SRM Global</div>
            <h2 className="section-heading">Why Choose SRM Global Hospitals</h2>
            <p className="section-sub">When every minute counts, the right hospital makes the difference between recovery and risk.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>Multidisciplinary Team</h3>
              <p>Emergency physicians work alongside cardiologists, neurologists, surgeons, orthopaedic specialists, and intensivists. One call activates the right team within minutes.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>24/7, 365 Days</h3>
              <p>The emergency department never closes. Senior emergency physicians, anaesthesiologists, and critical care specialists are on-site round the clock, not just on call.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h3>Ambulance Services</h3>
              <p>SRM's ambulance team operates across Kattankulathur, Guduvancheri, Chengalpattu, and surrounding areas with advanced life support equipment on board.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
              </div>
              <h3>Insurance &amp; TPA Support</h3>
              <p>Cashless emergency treatment with all major insurance providers and government health schemes. A dedicated desk handles approvals so your family doesn't have to.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <h3>Integrated Diagnostics</h3>
              <p>CT scans, X-rays, blood work, and cardiac markers are available within the emergency department itself. No transfers, no waiting for external labs.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Definitive Care Under One Roof</h3>
              <p>From the emergency room to the operating theatre to the ICU, every step of emergency treatment happens inside one hospital. No referrals, no delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 11: CTA BANNER
           ══════════════════════════════════════════════════════ */}
      <section className="cta-banner" id="cta-banner">
        <div className="container">
          <div className="cta-text">
            <h2>Emergency? Call Us Now.</h2>
            <p>Our emergency department is open 24 hours a day, 7 days a week. If you or someone you know needs immediate medical attention, do not wait. Call us or come directly to the hospital.</p>
            <a href="tel:+919644496444" className="cta-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 96444 96444
            </a>
          </div>
          <form className="cta-form" onSubmit={handleFormSubmit}>
            {formSubmitted ? (
              <div className="form-success">
                ✓ Thank you! We will contact you shortly.
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <select
                  required
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                >
                  <option value="" disabled>Select Department</option>
                  <option value="Emergency & Critical Care">Emergency &amp; Critical Care</option>
                  <option value="Institute of Cardiac Sciences">Institute of Cardiac Sciences</option>
                  <option value="Institute of Orthopaedics">Institute of Orthopaedics</option>
                  <option value="Institute of Neurosciences">Institute of Neurosciences</option>
                  <option value="Institute of Oncology">Institute of Oncology</option>
                  <option value="Institute of Gastroenterology">Institute of Gastroenterology</option>
                  <option value="Institute of Nephrology">Institute of Nephrology</option>
                  <option value="Institute of Pulmonology">Institute of Pulmonology</option>
                  <option value="Institute of Urology">Institute of Urology</option>
                </select>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                <button type="submit" className="btn btn-gradient">
                  Book Appointment{" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 12: RELATED ARTICLES
           ══════════════════════════════════════════════════════ */}
      <section className="articles">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Health Information</div>
            <h2 className="section-heading">Related Articles</h2>
            <p className="section-sub">Practical information to help you respond better in emergency situations.</p>
          </div>
          <div className="articles-grid">
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Emergency Care</span>
                <h3>What to Do in the First 10 Minutes of a Heart Attack</h3>
                <p>Recognising the signs of a heart attack and knowing what steps to take before the ambulance arrives can significantly improve survival.</p>
                <div className="article-meta">
                  <span>4 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Trauma</span>
                <h3>Road Accident First Aid: What Bystanders Should Know</h3>
                <p>Simple first-response actions at an accident scene can stabilise an injured person while professional help is on its way.</p>
                <div className="article-meta">
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Child Health</span>
                <h3>When to Rush Your Child to the Emergency Room</h3>
                <p>Not every fever is an emergency, but some signs in children require immediate medical attention. Here&apos;s how to tell the difference.</p>
                <div className="article-meta">
                  <span>4 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 13: FAQ
           ══════════════════════════════════════════════════════ */}
      <section className="faq">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">FAQ</div>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-sub">Common questions about emergency services at SRM Global Hospitals.</p>
          </div>
          <div className="faq-list">
            {[
              {
                q: "Is there a 24-hour emergency hospital in Chengalpattu?",
                a: "Yes. SRM Global Hospitals in Kattankulathur operates a 24/7 emergency department, 365 days a year. Located on GST Road, the hospital is accessible from Chengalpattu, Guduvancheri, Maraimalai Nagar, and surrounding areas. Senior emergency physicians and critical care specialists are on-site at all times, not just on call. Walk-ins and ambulance arrivals are accepted round the clock.",
              },
              {
                q: "What are the main medical emergencies handled here?",
                a: "The emergency department handles a wide range of medical emergencies including heart attack and cardiac arrest, stroke, major trauma from road accidents and falls, acute respiratory failure, severe infections and sepsis, poisoning, allergic reactions including anaphylaxis, pediatric emergencies, and surgical emergencies like appendicitis or internal bleeding. A multidisciplinary team ensures that every critical condition receives the right specialist response.",
              },
              {
                q: "What are the 5 levels of triage in an emergency department?",
                a: "Triage is the system used to prioritise patients by the severity of their condition. Level 1 (Resuscitation) is for immediately life threatening conditions like cardiac arrest. Level 2 (Emergency) covers conditions that could rapidly deteriorate, such as a heart attack. Level 3 (Urgent) addresses serious but stable conditions. Level 4 (Semi-urgent) covers conditions that need treatment within 1-2 hours. Level 5 (Non-urgent) applies to minor issues that could be seen at an outpatient clinic.",
              },
              {
                q: "What is the difference between an emergency ward and an ICU?",
                a: "The emergency department is the entry point where patients receive immediate assessment, stabilisation, and emergency treatment. The ICU (Intensive Care Unit) is where critically ill patients are transferred for ongoing monitoring, ventilator support, and organ support over days or weeks. At SRM Global, the emergency department and critical care ICU are connected, allowing seamless transfers when a patient's condition requires intensive care.",
              },
              {
                q: "Does SRM Global accept insurance for emergency treatment?",
                a: "Yes. SRM Global Hospitals offers cashless emergency treatment with all major insurance companies and third-party administrators. Government health schemes are also accepted. A dedicated insurance desk operates alongside the emergency department to handle pre-authorisation and documentation so that families can focus on the patient rather than paperwork. Emergency treatment is never delayed for insurance approval.",
              },
              {
                q: "What diagnostic facilities are available in the emergency department?",
                a: "The emergency department has in-house radiology facilities including digital X-ray, CT scanner, and ultrasound, all available 24/7. On-site laboratory services provide blood counts, cardiac markers, blood gas analysis, and toxicology results within minutes. Point-of-care testing at the bedside allows emergency physicians to make faster clinical decisions without waiting for external reports.",
              },
              {
                q: "How do I reach SRM Global Hospitals for an emergency?",
                a: "SRM Global Hospitals is located on GST Road in Kattankulathur, near SRM University. By road, it is approximately 10 km from Chengalpattu, 5 km from Guduvancheri, and 18 km from Tambaram. The hospital's ambulance team can be dispatched by calling +91 96444 96444. If driving, the hospital is directly on the GST Road with a clearly marked emergency entrance.",
              },
              {
                q: "What should I do if someone has a heart attack before reaching the hospital?",
                a: "Call the SRM Global emergency line (+91 96444 96444) immediately. Keep the person seated or lying down in a comfortable position. If they are conscious and not allergic to aspirin, give one regular aspirin tablet to chew. Do not give them water or food. If the person becomes unresponsive and stops breathing, begin chest compressions (CPR) and continue until the ambulance team arrives.",
              },
              {
                q: "Does the emergency department handle pediatric emergencies?",
                a: "Yes. The emergency department has a dedicated team trained in pediatric emergencies. Children with high fever, seizures, breathing difficulty, severe dehydration, injuries, or allergic reactions are treated using age-appropriate protocols, paediatric-specific equipment, and weight-based medication dosing. If admission is needed, a direct pathway to the paediatric ICU is available.",
              },
              {
                q: "What are emergency services in a hospital?",
                a: "Emergency services refer to the clinical department that provides immediate medical attention to patients with acute injuries, sudden illness, or life threatening conditions. This includes triage and assessment, resuscitation, emergency surgery, trauma care, cardiac emergency response, stroke management, diagnostic imaging, laboratory testing, and critical care. SRM Global's emergency department integrates all of these services under one roof with 24/7 specialist availability.",
              },
            ].map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaqIndex === idx ? "open" : ""}`}>
                <div className="faq-question" onClick={() => toggleFaq(idx)}>
                  <h3>{faq.q}</h3>
                  <div className="faq-toggle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 14: STICKY CTA
           ══════════════════════════════════════════════════════ */}
      <div className={`sticky-cta ${isStickyVisible ? "visible" : ""}`} id="stickyCta">
        <div className="container">
          <div className="sticky-cta-text">Emergency &amp; Critical Care <span>SRM Global Hospitals, Chennai</span></div>
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
