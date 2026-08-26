"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  const [activeTab, setActiveTab] = useState("upper-gi");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Institute of Gastro and Liver Sciences",
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
          const targetCounts = [5000, 96, 40, 24];

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
      setFormData({ name: "", phone: "", department: "Institute of Gastro and Liver Sciences", date: "" });
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
              <span>Institute of Gastro and Liver Sciences</span>
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>Center of Excellence</span>
            </div>
            <h1>Gastroenterology Hospital in Kattankulathur</h1>
            <p className="hero-tagline">Comprehensive digestive and liver care with medical gastroenterology, surgical gastroenterology, and advanced endoscopy under one roof.</p>
            <div className="hero-ctas">
              <a href="#cta-banner" className="btn btn-gradient">
                Book a Consultation{" "}
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
                <span>Gastro Department Photo</span>
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
            <div className="trust-label">GI Procedures Done</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">{counts[1]}%</div>
            <div className="trust-label">Success Rate</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">{counts[2]}+</div>
            <div className="trust-label">Years Combined Exp.</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">{counts[3]}/7</div>
            <div className="trust-label">GI Bleed Emergency</div>
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
            <h2 className="section-heading">Best Gastroenterology Hospital in Chengalpattu for Digestive and Liver Care</h2>
            <p>The Institute of Gastro and Liver Sciences at SRM Global Hospitals covers the full spectrum of digestive disorders, from common conditions like acid reflux and irritable bowel syndrome to complex gastrointestinal conditions involving the liver, pancreas, and biliary system. Located in Kattankulathur on GST Road, the department serves patients across Chengalpattu, Guduvancheri, Tambaram, and surrounding areas.</p>
            <p>The department brings medical gastroenterology and surgical gastroenterology together under one roof, supported by a dedicated endoscopy suite, on-site laboratory, and round-the-clock GI bleed emergency coverage. Every patient receives a clear diagnosis before any treatment plan begins.</p>
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
                24/7 GI Bleed Emergency
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
              Gastroenterology Team
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
            <p className="section-sub">Medical, surgical, and diagnostic gastroenterology services delivered by dedicated specialist teams.</p>
          </div>
          <div className="subspec-grid">
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Medical Gastroenterology</h3>
              <p>Non-surgical management of digestive disorders including GERD, IBS, inflammatory bowel disease, liver disease, and pancreatic conditions. Ongoing care for chronic gastrointestinal conditions with medication, dietary guidance, and monitoring.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <h3>Surgical Gastroenterology</h3>
              <p>Surgical treatment for GI cancers, gallbladder disease, pancreatic disorders, hernias, and complex gastrointestinal conditions requiring operative intervention. Minimally invasive and open surgical approaches available.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
              </div>
              <h3>Diagnostic &amp; Therapeutic Endoscopy</h3>
              <p>Upper GI endoscopy, colonoscopy, endoscopic ultrasound, and ERCP for both diagnosis and treatment. Procedures performed in a dedicated endoscopy suite with sedation support.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>Hepatology</h3>
              <p>Specialised care for liver disease including fatty liver, hepatitis, cirrhosis, jaundice, and liver failure. Evaluation and management by gastroenterologists with hepatology expertise, with transplant referral pathways when needed.</p>
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
            <h2 className="section-heading">Digestive Disorders We Treat</h2>
            <p className="section-sub">Accurate diagnosis and effective treatment for conditions affecting the digestive system and liver.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div><h3>Acid Reflux &amp; GERD</h3><p>Persistent heartburn, regurgitation, and difficulty swallowing caused by stomach acid flowing back into the oesophagus. Treatment includes medication, lifestyle changes, and endoscopic intervention when needed.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
              <div><h3>Irritable Bowel Syndrome (IBS)</h3><p>Chronic bloating, abdominal pain, constipation, and diarrhoea managed through dietary modification, medication, and ongoing gastroenterology follow-up. A structured approach helps patients regain control of daily life.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
              <div><h3>Inflammatory Bowel Disease</h3><p>Crohn&apos;s disease and ulcerative colitis causing chronic inflammation of the gastrointestinal tract. Long-term management with immunomodulators, biologics, and surgical intervention when medical therapy is insufficient.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div><h3>Liver Disease &amp; Jaundice</h3><p>Fatty liver, hepatitis, cirrhosis, and jaundice evaluated through blood work, imaging, and liver biopsy when required. Treatment addresses the underlying cause and prevents progression to liver failure.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
              <div><h3>Peptic Ulcers</h3><p>Stomach and duodenal ulcers causing abdominal pain, nausea, and bleeding. Diagnosed via upper GI endoscopy and treated with medication, H. pylori eradication, and emergency intervention for bleeding ulcers.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
              <div><h3>Gallbladder &amp; Pancreatic Disorders</h3><p>Gallstones, cholecystitis, pancreatitis, and pancreatic cysts managed through medical treatment, ERCP, or laparoscopic surgery depending on severity and complexity.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div><h3>GI Cancers</h3><p>Cancers of the oesophagus, stomach, colon, rectum, liver, and pancreas. Multidisciplinary evaluation with gastroenterologists, surgical oncologists, and radiologists for staging, surgical planning, and treatment.</p></div>
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
            <p className="section-sub">Gastroenterologists and GI surgeons delivering comprehensive digestive and liver care.</p>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">[Doctor 1]</div>
                <div className="doctor-designation">[DESIGNATION]</div>
                <div className="doctor-quals">[Qualifications]</div>
                <div className="doctor-exp"></div>
                <a href="#cta-banner" className="btn btn-outline-purple btn-sm">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">[Doctor 2]</div>
                <div className="doctor-designation">[DESIGNATION]</div>
                <div className="doctor-quals">[Qualifications]</div>
                <div className="doctor-exp"></div>
                <a href="#cta-banner" className="btn btn-outline-purple btn-sm">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">[Doctor 3]</div>
                <div className="doctor-designation">[DESIGNATION]</div>
                <div className="doctor-quals">[Qualifications]</div>
                <div className="doctor-exp"></div>
                <a href="#cta-banner" className="btn btn-outline-purple btn-sm">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">[Doctor 4]</div>
                <div className="doctor-designation">[DESIGNATION]</div>
                <div className="doctor-quals">[Qualifications]</div>
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
            <p className="section-sub">Diagnostic and therapeutic procedures performed by our gastroenterology and GI surgery teams.</p>
          </div>
          <div className="tabs-nav">
            <button
              type="button"
              className={`tab-btn ${activeTab === "upper-gi" ? "active" : ""}`}
              onClick={() => setActiveTab("upper-gi")}
            >
              Upper GI Endoscopy
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "colonoscopy" ? "active" : ""}`}
              onClick={() => setActiveTab("colonoscopy")}
            >
              Colonoscopy
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "ercp" ? "active" : ""}`}
              onClick={() => setActiveTab("ercp")}
            >
              ERCP
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "lap-surgery" ? "active" : ""}`}
              onClick={() => setActiveTab("lap-surgery")}
            >
              Laparoscopic GI Surgery
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "liver-mgmt" ? "active" : ""}`}
              onClick={() => setActiveTab("liver-mgmt")}
            >
              Liver Disease Management
            </button>
          </div>

          {activeTab === "upper-gi" && (
            <div className="tab-panel active" id="tab-upper-gi">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Endoscopy Suite
                </div>
              </div>
              <div className="tab-content">
                <h3>Upper GI Endoscopy</h3>
                <p>A thin, flexible scope is passed through the mouth to examine the oesophagus, stomach, and duodenum. Used to diagnose acid reflux, ulcers, difficulty swallowing, bleeding, and early cancers. Biopsies can be taken during the same procedure for further analysis.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Diagnostic and therapeutic in one session</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Biopsy and polyp removal capability</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Sedation for patient comfort</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Results discussed same day</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "colonoscopy" && (
            <div className="tab-panel active" id="tab-colonoscopy">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Colonoscopy
                </div>
              </div>
              <div className="tab-content">
                <h3>Colonoscopy</h3>
                <p>Examination of the large intestine to detect polyps, cancers, inflammatory bowel disease, and causes of chronic diarrhoea, constipation, or rectal bleeding. Polyps can be removed during the procedure, reducing future cancer risk.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Complete colon visualisation</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Polyp removal during procedure</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Screening for colorectal cancer</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> IBD assessment and biopsy</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "ercp" && (
            <div className="tab-panel active" id="tab-ercp">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: ERCP
                </div>
              </div>
              <div className="tab-content">
                <h3>ERCP (Endoscopic Retrograde Cholangiopancreatography)</h3>
                <p>A specialised endoscopic procedure to diagnose and treat conditions of the bile ducts and pancreatic ducts. Used for removing gallstones stuck in the bile duct, placing stents, draining infections, and managing pancreatic disorders without open surgery.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Bile duct stone extraction</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Biliary and pancreatic stenting</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Management of obstructive jaundice</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Alternative to open surgery in many cases</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "lap-surgery" && (
            <div className="tab-panel active" id="tab-lap-surgery">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Laparoscopic Surgery
                </div>
              </div>
              <div className="tab-content">
                <h3>Laparoscopic GI Surgery</h3>
                <p>Minimally invasive surgical treatment for gallbladder removal, hernia repair, appendectomy, and selected GI cancers. Smaller incisions mean less pain, shorter hospital stays, and faster return to normal activity compared to open surgery.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Laparoscopic cholecystectomy</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Minimally invasive hernia repair</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Laparoscopic colorectal surgery</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Faster recovery and fewer complications</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "liver-mgmt" && (
            <div className="tab-panel active" id="tab-liver-mgmt">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Liver Care
                </div>
              </div>
              <div className="tab-content">
                <h3>Liver Disease Management</h3>
                <p>Structured evaluation and treatment for fatty liver, viral hepatitis, alcoholic liver disease, cirrhosis, and liver failure. Includes blood work, fibroscan or liver biopsy for staging, antiviral therapy for hepatitis, and transplant evaluation referral when needed.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Non-invasive liver fibrosis assessment</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Hepatitis B and C treatment protocols</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Cirrhosis complication management</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Transplant evaluation pathway</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
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
            <h2 className="section-heading">Built for Accurate Diagnosis and Safe Procedures</h2>
            <p className="section-sub">Every diagnostic and surgical tool is chosen to ensure precision, safety, and faster patient outcomes.</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Endoscopy Suite</div>
              <div className="tech-card-body">
                <h3>Dedicated Endoscopy Suite</h3>
                <p>High-definition endoscopy system for upper GI endoscopy, colonoscopy, endoscopic ultrasound, and ERCP. Separate procedure and recovery areas with full sedation support and monitoring.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: OT</div>
              <div className="tech-card-body">
                <h3>Advanced Surgical OT</h3>
                <p>Fully equipped operating theatre with laparoscopic instruments, energy devices, and intraoperative imaging for minimally invasive and open GI surgeries. Infection control protocols matching international standards.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Lab</div>
              <div className="tech-card-body">
                <h3>On-Site Laboratory &amp; Imaging</h3>
                <p>24/7 laboratory for liver function tests, tumour markers, and histopathology. Ultrasound, CT, and MRI available for comprehensive GI and liver imaging without external referrals.</p>
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
            <p className="section-sub">Real experiences from patients who received gastroenterology care at SRM Global Hospitals.</p>
          </div>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-quote-icon">
                <svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
              </div>
              <p className="story-text">After my bypass surgery at SRM Global Hospitals, I felt like I got a second chance at life. The entire cardiac team was exceptional, from the surgeon to the rehabilitation staff. I was walking within days.</p>
              <div className="story-author">
                <div className="story-avatar">RS</div>
                <div>
                  <div className="story-name">Ramesh Sundaram</div>
                  <div className="story-procedure">Triple Bypass Surgery</div>
                  <div className="story-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-quote-icon">
                <svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
              </div>
              <p className="story-text">My father had a heart attack at 3 AM. The emergency team at SRM had him in the cath lab within 30 minutes. The quick response saved his life. We are forever grateful to Dr. Kumar and his team.</p>
              <div className="story-author">
                <div className="story-avatar">LA</div>
                <div>
                  <div className="story-name">Lakshmi Arunachalam</div>
                  <div className="story-procedure">Emergency Angioplasty</div>
                  <div className="story-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="story-card">
              <div className="story-quote-icon">
                <svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
              </div>
              <p className="story-text">I came from overseas for my valve replacement surgery. The international patient services team made everything seamless. The surgery was a success and I recovered faster than expected. World-class care at affordable cost.</p>
              <div className="story-author">
                <div className="story-avatar">MH</div>
                <div>
                  <div className="story-name">Mohammed Hassan</div>
                  <div className="story-procedure">Aortic Valve Replacement</div>
                  <div className="story-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    ))}
                  </div>
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
            <p className="section-sub">The right gastroenterology team makes the difference between managing symptoms and resolving the problem.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>Medical &amp; Surgical Gastro Under One Roof</h3>
              <p>Gastroenterologists and GI surgeons work together from diagnosis through treatment. Patients who need both medical management and surgical intervention receive coordinated care without external referrals.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>24/7 GI Bleed Emergency</h3>
              <p>Gastrointestinal bleeding is a medical emergency. The department provides round-the-clock emergency endoscopy and surgical backup for GI bleed cases, with ICU support available immediately.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h3>Advanced Endoscopy Suite</h3>
              <p>High-definition endoscopy, endoscopic ultrasound, and ERCP performed in a dedicated suite with sedation support. Diagnostic and therapeutic procedures completed in a single session wherever possible.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
              </div>
              <h3>Multidisciplinary Approach</h3>
              <p>Complex liver and pancreatic cases are evaluated jointly by gastroenterologists, surgeons, oncologists, and radiologists. Every treatment decision reflects input from multiple specialists.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <h3>Nutrition &amp; Lifestyle Support</h3>
              <p>Dietary counselling and lifestyle modification plans designed by nutritionists working alongside the gastroenterology team. Essential for managing IBS, fatty liver, IBD, and post-surgical recovery.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
              </div>
              <h3>Insurance &amp; TPA Support</h3>
              <p>Cashless treatment with all major insurance providers and government health schemes. A dedicated desk manages approvals and documentation so families can focus on recovery.</p>
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
            <h2>Book Your Gastroenterology Consultation</h2>
            <p>Whether you are dealing with persistent acidity, bloating, liver concerns, or a recent GI diagnosis, our gastroenterology team is ready to help. Book a consultation or call us directly.</p>
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
                  <option value="Institute of Gastro and Liver Sciences">Institute of Gastro and Liver Sciences</option>
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
            <p className="section-sub">Practical information from our gastroenterology team to help you understand digestive health.</p>
          </div>
          <div className="articles-grid">
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Liver Health</span>
                <h3>Fatty Liver Disease: What You Need to Know Before It Progresses</h3>
                <p>Fatty liver is common and often silent. Understanding the stages, risk factors, and lifestyle changes that can reverse early damage is critical.</p>
                <div className="article-meta">
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Digestive Health</span>
                <h3>IBS vs IBD: How to Tell the Difference</h3>
                <p>Both cause abdominal pain and bowel changes, but the causes, risks, and treatments are very different. Here is how gastroenterologists distinguish between them.</p>
                <div className="article-meta">
                  <span>4 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Screening</span>
                <h3>When Should You Get a Colonoscopy?</h3>
                <p>Colonoscopy screening can catch colorectal cancer early or prevent it entirely. Here is who should get screened and when.</p>
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
            <p className="section-sub">Common questions about gastroenterology services at SRM Global Hospitals.</p>
          </div>
          <div className="faq-list">
            {[
              {
                q: "1. Is there a gastroenterology hospital in Chengalpattu?",
                a: "Yes. SRM Global Hospitals in Kattankulathur operates a full Department of Gastro and Liver Sciences with both medical gastroenterology and surgical gastroenterology services. Located on GST Road, the hospital is accessible from Chengalpattu, Guduvancheri, Maraimalai Nagar, and surrounding areas. Gastroenterologists are available for outpatient consultations, endoscopy procedures, and emergency GI care.",
              },
              {
                q: "2. What digestive conditions are treated at SRM Global?",
                a: "The department treats acid reflux and GERD, irritable bowel syndrome, inflammatory bowel disease (Crohn's and ulcerative colitis), peptic ulcers, liver disease including fatty liver and cirrhosis, gallstones, pancreatitis, jaundice, GI cancers, difficulty swallowing, chronic diarrhoea, constipation, and bloating. Both common and complex gastrointestinal conditions are managed.",
              },
              {
                q: "3. When should I see a gastroenterologist?",
                a: "Consult a gastroenterologist if you experience persistent heartburn or acid reflux, unexplained abdominal pain, chronic bloating or gas, blood in stool, difficulty swallowing, unexplained weight loss, prolonged diarrhoea or constipation, or jaundice. Early evaluation leads to better outcomes for most digestive disorders.",
              },
              {
                q: "4. What endoscopy procedures are available?",
                a: "The department offers upper GI endoscopy to examine the oesophagus and stomach, colonoscopy to examine the large intestine, endoscopic ultrasound for detailed imaging of the pancreas and bile ducts, and ERCP for bile duct stone removal and stenting. All procedures are performed in a dedicated endoscopy suite with sedation support.",
              },
              {
                q: "5. Does SRM Global have surgical gastroenterology services?",
                a: "Yes. The surgical gastroenterology team performs laparoscopic cholecystectomy, hernia repair, appendectomy, colorectal surgery, pancreatic surgery, and operations for GI cancers. Minimally invasive techniques are used wherever possible to ensure faster recovery and fewer complications.",
              },
              {
                q: "6. Is emergency care available for GI bleeding?",
                a: "Yes. The department provides 24/7 emergency coverage for gastrointestinal bleeding. Emergency endoscopy, blood transfusion support, and surgical backup are available round the clock. GI bleed is treated as a medical emergency with immediate specialist response.",
              },
              {
                q: "7. Does the department treat liver disease?",
                a: "Yes. The hepatology programme covers fatty liver, viral hepatitis (B and C), alcoholic liver disease, cirrhosis, jaundice, and liver failure. Evaluation includes blood work, imaging, and liver biopsy or fibroscan when needed. Transplant evaluation referral is available for patients with end-stage liver disease.",
              },
              {
                q: "8. What qualifications should a gastroenterologist have?",
                a: "A qualified gastroenterologist typically holds an MBBS, followed by MD or DNB in General Medicine, and then DM or DNB in Gastroenterology. Surgical gastroenterologists hold MCh in Surgical Gastroenterology. The specialists at SRM Global hold these qualifications with additional fellowship training.",
              },
              {
                q: "9. How do I reach SRM Global Hospitals for a gastroenterology consultation?",
                a: "SRM Global Hospitals is located on GST Road in Kattankulathur, near SRM University. By road, it is approximately 10 km from Chengalpattu, 5 km from Guduvancheri, and 18 km from Tambaram. Call +91 96444 96444 to book an appointment or for emergency GI assistance.",
              },
              {
                q: "10. Does SRM Global accept insurance for gastroenterology treatment?",
                a: "Yes. Cashless treatment is available with all major insurance companies and third-party administrators. Government health schemes are also accepted. A dedicated insurance desk handles pre-authorisation and documentation. Treatment is never delayed for insurance processing in emergency cases.",
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
          <div className="sticky-cta-text">Institute of Gastro and Liver Sciences <span>SRM Global Hospitals, Chennai</span></div>
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
