"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  const [activeTab, setActiveTab] = useState("kidney");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Centre for Solid Organ Transplants",
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
          const targetCounts = [500, 95, 20, 24];

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
      setFormData({ name: "", phone: "", department: "Centre for Solid Organ Transplants", date: "" });
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
        <span>Institute of Organ Transplant</span>
      </div>
      <div className="hero-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
        <span>Center of Excellence</span>
      </div>
      <h1>Organ Transplant Hospital in Kattankulathur</h1>
      <p className="hero-tagline">Comprehensive kidney, liver, heart, lung, and bone marrow transplant care, backed by a dedicated transplant ICU and round-the-clock transplant support for Chengalpattu, Guduvancheri, Tambaram, and the wider southern Chennai corridor.</p>
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
        <div className="hero-image-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg><span>Transplant Team Photo</span></div>
      </div>
    </div>
  </div>
</section>

      <section className="trust-bar" ref={trustRef}>
  <div className="container">
    <div className="trust-item">
      <div className="trust-number">{counts[0] ? counts[0].toLocaleString() : 0}+</div>
      <div className="trust-label">Transplants Performed</div>
    </div>
    <div className="trust-item">
      <div className="trust-number">{counts[1] || 95}%</div>
      <div className="trust-label">Graft Success Rate</div>
    </div>
    <div className="trust-item">
      <div className="trust-number">{counts[2] ? counts[2].toLocaleString() : 0}+</div>
      <div className="trust-label">Years Combined Exp.</div>
    </div>
    <div className="trust-item">
      <div className="trust-number">{counts[3] || 24}/7</div>
      <div className="trust-label">Transplant Support</div>
    </div>
  </div>
</section>

      <section className="about" id="about">
  <div className="container">
    <div className="about-text">
      <div className="eyebrow">About the Institute</div>
      <h2 className="section-heading">Organ Transplant Hospital in Chengalpattu for Kidney, Liver, and Multi-Organ Care</h2>
      <p>The Institute of Organ Transplant at SRM Global Hospitals brings transplant surgeons, nephrologists, hepatologists, and cardiothoracic surgeons together under one roof to manage every stage of organ transplantation, from first evaluation to lifelong follow-up. Located in Kattankulathur on GST Road, it serves patients across Chengalpattu, Guduvancheri, Tambaram, and the broader southern Chennai corridor, as part of the hospital's wider Multi-Organ Transplant Centre.</p>
      <p>A transplant is recommended when a vital organ, such as the kidney, liver, heart, or lung, has reached end-stage failure and can no longer sustain the body. Every case is reviewed by a multidisciplinary transplant board before listing, using either a living donor or a deceased donor organ, matched by blood group and tissue typing to reduce the risk of organ rejection.</p>
      <p>In selected paediatric patients, ABO-incompatible transplants are also possible in children under two years of age, since a young child's immune system has not yet developed the antibody response that would otherwise cause rejection across blood groups.</p>
      <div className="about-features">
        <div className="about-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>NABH Accredited</div>
        <div className="about-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Multi-Organ Transplant Centre</div>
        <div className="about-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>24/7 Transplant Care</div>
      </div>
      <a className="btn btn-gradient btn-sm" style={{ marginTop: '24px' }} href="#cta-banner">Learn More</a>
    </div>
    <div className="about-image">
      <div>Transplant Institute Team</div>
    </div>
  </div>
</section>

      <section className="subspecialties">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Sub-Specialties</div>
      <h2 className="section-heading">Sub-Specialties</h2>
      <p className="section-sub">Dedicated transplant teams covering every major solid-organ and bone marrow transplant programme.</p>
    </div>
    <div className="subspec-grid">
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
        <h3>Kidney Transplant</h3>
        <p>Renal transplantation for chronic kidney disease and end-stage renal failure, using both living donor and deceased donor kidneys, with full pre-transplant work-up and lifelong nephrology follow-up.</p>
      </div>
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
        <h3>Liver Transplant</h3>
        <p>Living donor and deceased donor liver transplantation for liver cirrhosis, end-stage liver disease, and acute liver failure, performed by transplant surgeons and hepatologists working as one team.</p>
      </div>
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg></div>
        <h3>Heart &amp; Lung Transplant</h3>
        <p>Heart transplant and lung transplant evaluation for advanced heart failure, cardiomyopathy, chronic obstructive pulmonary disease, and pulmonary fibrosis, coordinated with cardiac and pulmonology specialists. A combined heart lung transplant is evaluated in the rare cases where both organs have failed together.</p>
      </div>
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="4" /></svg></div>
        <h3>Bone Marrow Transplant</h3>
        <p>Bone marrow and stem cell transplants for severe blood cancers, marrow failure, and graft versus host disease management, supported by a dedicated transplant coordinator throughout the process.</p>
      </div>
    </div>
  </div>
</section>

      <section className="conditions">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Conditions We Treat</div>
      <h2 className="section-heading">Organ Failure Conditions We Treat</h2>
      <p className="section-sub">Evaluation and transplant care for patients with severe organ failure across every major organ system.</p>
    </div>
    <div className="conditions-grid">
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
        <div>
          <h3>Chronic Kidney Disease &amp; End-Stage Renal Failure</h3>
          <p>Progressive loss of kidney function that no longer responds to dialysis alone, evaluated for kidney transplantation once a transplanted organ offers a better long-term outcome than continued dialysis.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
        <div>
          <h3>Liver Cirrhosis &amp; End-Stage Liver Disease</h3>
          <p>Irreversible liver scarring that may require a liver transplant for survival once complications such as fluid build-up, internal bleeding, or confusion from toxin build-up appear.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
        <div>
          <h3>Acute Liver Failure</h3>
          <p>A sudden, rapid loss of liver function in a person with no prior liver disease, often triggered by viral hepatitis, certain medications, or toxin exposure. It can progress within days and frequently requires urgent evaluation for an emergency liver transplant.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
        <div>
          <h3>Heart Failure &amp; Cardiomyopathy</h3>
          <p>Heart disease that has progressed to the point where the heart can no longer pump enough blood to meet the body's needs, despite medication and devices. A heart transplant is considered once conventional treatment can no longer maintain quality of life.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg></div>
        <div>
          <h3>COPD &amp; Pulmonary Fibrosis</h3>
          <p>Chronic obstructive pulmonary disease and pulmonary fibrosis can progressively destroy lung tissue until breathing is no longer possible without support. A lung transplant may be indicated when oxygen therapy and medication no longer control severe organ failure.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="4" /></svg></div>
        <div>
          <h3>Blood Cancers &amp; Bone Marrow Failure</h3>
          <p>Leukaemia, lymphoma, and severe aplastic anaemia can destroy the bone marrow's ability to produce healthy blood cells. A bone marrow transplant replaces damaged marrow with healthy stem cells, sometimes from the patient and sometimes from a matched donor.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8 6 4 10.5 4 15a8 8 0 0 0 16 0c0-4.5-4-9-8-13z" /></svg></div>
        <div>
          <h3>Multi-Organ Failure</h3>
          <p>When two or more vital organs fail together, for example the kidneys and liver, or the heart and lungs, the transplant team evaluates the patient for multi-organ transplants in a single coordinated surgery.</p>
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
      <p className="section-sub">Transplant surgeons and physicians from SRM Global Hospitals&apos; Institute of Solid Organ Transplants.</p>
    </div>
    <div className="doctors-grid">
      <div className="doctor-card">
        <div className="doctor-photo">
          <div className="doctor-photo-circle">
            <Image
              src="/images/coe/organ-transplant-hospital-in-kattankulathur/image-1.png"
              alt="Dr. Sujith Velayudhan Indira"
              width={122}
              height={122}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="doctor-info">
          <div className="doctor-name">Dr. Sujith Velayudhan Indira</div>
          <div className="doctor-designation">SENIOR CONSULTANT, CARDIOTHORACIC SURGERY</div>
          <div className="doctor-quals">MBBS, MS, MCH</div>
          <a className="btn btn-outline-purple btn-sm" href="#cta-banner">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card">
        <div className="doctor-photo">
          <div className="doctor-photo-circle">
            <Image
              src="/images/coe/organ-transplant-hospital-in-kattankulathur/image-2.png"
              alt="Dr. Sindhu V"
              width={122}
              height={122}
              style={{ width: "95%", height: "100%", objectFit: "fill" }}
            />
          </div>
        </div>
        <div className="doctor-info">
          <div className="doctor-name">Dr. Sindhu V</div>
          <div className="doctor-designation">CONSULTANT</div>
          <div className="doctor-quals">MBBS, DTCD, DNB</div>
          <a className="btn btn-outline-purple btn-sm" href="#cta-banner">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card">
        <div className="doctor-photo">
          <div className="doctor-photo-circle">
            <Image
              src="/images/coe/organ-transplant-hospital-in-kattankulathur/image-3.png"
              alt="Dr. Gopi Ramu"
              width={122}
              height={122}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="doctor-info">
          <div className="doctor-name">Dr. Gopi Ramu</div>
          <div className="doctor-designation">CONSULTANT</div>
          <div className="doctor-quals">MBBS, DNB</div>
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
      <p className="section-sub">Diagnostic evaluation and transplant surgery performed by our transplant surgeons, physicians, and coordination team.</p>
    </div>
    <div className="tabs-nav">
      <button 
        className={`tab-btn ${activeTab === 'kidney' ? 'active' : ''}`} 
        type="button" 
        data-tab="kidney"
        onClick={() => setActiveTab('kidney')}
      >
        Kidney Transplant
      </button>
      <button 
        className={`tab-btn ${activeTab === 'liver' ? 'active' : ''}`} 
        type="button" 
        data-tab="liver"
        onClick={() => setActiveTab('liver')}
      >
        Liver Transplant
      </button>
      <button 
        className={`tab-btn ${activeTab === 'heartlung' ? 'active' : ''}`} 
        type="button" 
        data-tab="heartlung"
        onClick={() => setActiveTab('heartlung')}
      >
        Heart &amp; Lung Transplant
      </button>
      <button 
        className={`tab-btn ${activeTab === 'bmt' ? 'active' : ''}`} 
        type="button" 
        data-tab="bmt"
        onClick={() => setActiveTab('bmt')}
      >
        Bone Marrow Transplant
      </button>
    </div>

    <div className={`tab-panel ${activeTab === 'kidney' ? 'active' : ''}`} id="tab-kidney">
      <div className="tab-image"><div>Image Placeholder: Kidney Transplant</div></div>
      <div className="tab-content">
        <h3>Kidney Transplant</h3>
        <p>Renal transplantation replaces a failed kidney with a healthy kidney from a living donor or a deceased donor, the preferred long-term treatment for end-stage renal failure over continued dialysis for most eligible patients, offering better survival and quality of life.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Living donor and deceased donor kidney transplant</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Blood group and tissue-type cross-matching</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Post-operative transplant ICU monitoring</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Lifelong nephrology and immunosuppression follow-up</li>
        </ul>
        <a className="btn btn-gradient btn-sm" href="#cta-banner">Book a Consultation</a>
      </div>
    </div>

    <div className={`tab-panel ${activeTab === 'liver' ? 'active' : ''}`} id="tab-liver">
      <div className="tab-image"><div>Image Placeholder: Liver Transplant</div></div>
      <div className="tab-content">
        <h3>Liver Transplant</h3>
        <p>A liver transplant replaces a diseased liver with a healthy donor organ, used to treat liver cirrhosis, end-stage liver disease, and acute liver failure. Living donor liver transplants use a portion of a healthy donor's liver, which regenerates in both donor and recipient over the following months.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Living donor and deceased donor liver transplant</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Emergency evaluation for acute liver failure</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Dedicated liver transplant ICU care</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Long-term hepatology follow-up</li>
        </ul>
        <a className="btn btn-gradient btn-sm" href="#cta-banner">Book a Consultation</a>
      </div>
    </div>

    <div className={`tab-panel ${activeTab === 'heartlung' ? 'active' : ''}`} id="tab-heartlung">
      <div className="tab-image"><div>Image Placeholder: Heart &amp; Lung Transplant</div></div>
      <div className="tab-content">
        <h3>Heart &amp; Lung Transplant</h3>
        <p>Heart transplant and lung transplant programmes are reserved for patients whose heart or lung disease has progressed beyond what medication, devices, or less invasive procedures can manage. Combined heart-lung transplants are performed in the rare cases where both organs have failed together.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Heart transplant for end-stage heart failure</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Lung transplant for COPD and pulmonary fibrosis</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Combined heart-lung transplant evaluation</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Cardiology and pulmonology joint follow-up</li>
        </ul>
        <a className="btn btn-gradient btn-sm" href="#cta-banner">Book a Consultation</a>
      </div>
    </div>

    <div className={`tab-panel ${activeTab === 'bmt' ? 'active' : ''}`} id="tab-bmt">
      <div className="tab-image"><div>Image Placeholder: Bone Marrow Transplant</div></div>
      <div className="tab-content">
        <h3>Bone Marrow Transplant</h3>
        <p>A bone marrow transplant, also called a stem cell transplant, replaces damaged or diseased bone marrow with healthy blood-forming stem cells, using either the patient's own stem cells or those of a matched donor. Patients receiving donor stem cells are monitored closely for graft versus host disease.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Autologous (self-donor) and allogeneic (matched donor) transplants</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Graft versus host disease monitoring</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Protective isolation during immune recovery</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Long-term haematology follow-up</li>
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
      <h2 className="section-heading">Built for Safe, Coordinated Transplant Care</h2>
      <p className="section-sub">Advanced infrastructure designed for accurate donor matching and safe transplant surgery.</p>
    </div>
    <div className="tech-grid">
      <div className="tech-card">
        <div className="tech-card-img">Image Placeholder: Transplant ICU</div>
        <div className="tech-card-body">
          <h3>24/7 Transplant Surgery Suite &amp; ICU</h3>
          <p>A dedicated transplant surgery suite and intensive care unit, staffed round the clock for close monitoring in the days immediately following transplant surgery.</p>
        </div>
      </div>
      <div className="tech-card">
        <div className="tech-card-img">Image Placeholder: Tissue-Typing Lab</div>
        <div className="tech-card-body">
          <h3>Advanced Imaging &amp; Laboratory Services</h3>
          <p>On-site imaging, blood tests, and tissue-typing to confirm donor compatibility and monitor organ function before and after every transplant.</p>
        </div>
      </div>
      <div className="tech-card">
        <div className="tech-card-img">Image Placeholder: Transplant OT</div>
        <div className="tech-card-body">
          <h3>Post-Transplant &amp; Telemedicine Support</h3>
          <p>Medication management, counselling, and rehabilitation after surgery, plus telemedicine consultations for patients following up from outside Chengalpattu.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="life-after" id="life-after">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Recovery &amp; Follow-Up</div>
      <h2 className="section-heading">Life After Transplant</h2>
      <p className="section-sub">Recovery does not end at discharge; it is a lifelong partnership between the patient and the transplant team.</p>
    </div>
    <p>Most transplant recipients resume normal daily activities within three to six months, on lifelong anti-rejection medicine to protect the new organ. Patients and families are taught to recognise early signs of organ rejection, such as fever, fatigue, or swelling, and the department connects them with counselling and support groups through recovery.</p>
  </div>
</section>

      <section className="stories">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Patient Stories</div>
      <h2 className="section-heading">What Our Patients Say</h2>
      <p className="section-sub">Real experiences from patients who received organ transplant care at SRM Global Hospitals.</p>
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
      <p className="section-sub">Transplant outcomes depend on more than surgery alone; they depend on the team and infrastructure behind it.</p>
    </div>
    <div className="why-grid">
      <div className="why-card">
        <div className="why-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
        <h3>Multi-Organ Transplant Programme Under One Roof</h3>
        <p>Kidney, liver, heart, lung, and bone marrow transplant specialists work within a single Multi-Organ Transplant Centre, so patients needing more than one organ evaluated are not referred out to a separate transplant center.</p>
      </div>
      <div className="why-card">
        <div className="why-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /></svg></div>
        <h3>Expert, Multidisciplinary Transplant Team</h3>
        <p>Every transplant candidate is reviewed by a board of transplant surgeons, nephrologists, hepatologists, and physicians before listing, so each recommendation reflects more than one specialist's opinion.</p>
      </div>
      <div className="why-card">
        <div className="why-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg></div>
        <h3>Dedicated Transplant Infrastructure &amp; Support</h3>
        <p>A transplant-specific ICU, on-site tissue-typing lab, and a dedicated desk for insurance, TPA, and government scheme approvals mean less running between departments and paperwork.</p>
      </div>
    </div>
  </div>
</section>

      <section className="cta-banner" id="cta-banner">
  <div className="container">
    <div className="cta-text">
      <h2>Book Your Organ Transplant Consultation</h2>
      <p>Whether you are exploring a kidney, liver, heart, lung, or bone marrow transplant, or supporting a family member as a potential living donor, our transplant team is ready to guide you through every step. Book a consultation or call us directly.</p>
      <a className="cta-phone" href="tel:+919644496444">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        +91 96444 96444
      </a>
    </div>
    <form className="cta-form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Your Full Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <select required defaultValue="Institute of Organ Transplant">
        <option value="" disabled>Select Department</option>
        <option value="Institute of Organ Transplant">Institute of Organ Transplant</option>
        <option value="Institute of Cardiac Sciences">Institute of Cardiac Sciences</option>
        <option value="Institute of Orthopaedics">Institute of Orthopaedics</option>
        <option value="Institute of Neurosciences">Institute of Neurosciences</option>
        <option value="Institute of Oncology">Institute of Oncology</option>
        <option value="Institute of Gastroenterology">Institute of Gastroenterology</option>
        <option value="Institute of Nephrology">Institute of Nephrology</option>
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
      <p className="section-sub">Insights from our transplant team to help you understand organ donation and transplantation.</p>
    </div>
    <div className="articles-grid">
      <div className="article-card">
        <div className="article-img">Image Placeholder</div>
        <div className="article-body">
          <span className="article-tag">Organ Donation</span>
          <h3>Living Donor vs Deceased Donor Transplant: What's the Difference?</h3>
          <p>Understanding how living donor and deceased donor transplants differ can help patients and families make sense of waiting times, matching, and what to expect from each path.</p>
          <div className="article-meta"><span>5 min read</span></div>
        </div>
      </div>
      <div className="article-card">
        <div className="article-img">Image Placeholder</div>
        <div className="article-body">
          <span className="article-tag">Kidney Transplant</span>
          <h3>Life After a Kidney Transplant: What to Expect in the First Year</h3>
          <p>From hospital discharge to the first year of follow-up visits, here is what patients can expect as they adjust to life with a transplanted kidney.</p>
          <div className="article-meta"><span>4 min read</span></div>
        </div>
      </div>
      <div className="article-card">
        <div className="article-img">Image Placeholder</div>
        <div className="article-body">
          <span className="article-tag">Post-Transplant Care</span>
          <h3>Signs of Organ Rejection Every Transplant Patient Should Know</h3>
          <p>Recognising the early warning signs of organ rejection, and knowing when to call the transplant team, can make the difference in protecting a transplanted organ.</p>
          <div className="article-meta"><span>4 min read</span></div>
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
      <p className="section-sub">Common questions about organ transplant services at SRM Global Hospitals.</p>
    </div>
    <div className="faq-list">

      <div className={`faq-item ${openFaqIndex === 0 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(0)}>
          <h3>1. Is there an organ transplant hospital in Chengalpattu?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Yes. SRM Global Hospitals in Kattankulathur operates an Institute of Organ Transplant as part of its wider Multi-Organ Transplant Centre, accessible from Chengalpattu, Guduvancheri, and surrounding areas.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 1 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(1)}>
          <h3>2. Which organs can be transplanted?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">The most commonly transplanted solid organs are the kidneys, liver, heart, and lungs. Bone marrow (stem cells) and tissues such as the cornea and skin can also be transplanted, and multi-organ transplants are performed for patients with combined organ failure.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 2 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(2)}>
          <h3>3. What is the difference between a living donor and a deceased donor transplant?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">A living donor transplant uses a kidney or a portion of the liver from a living person, usually a family member. A deceased donor transplant uses an organ recovered from a brain dead donor, after the family consents to donation. Both require matching blood group and tissue type before surgery.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 3 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(3)}>
          <h3>4. What is a liver transplant, and how do I get one at SRM Global Hospitals?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">A liver transplant replaces a diseased liver with a healthy donor liver, considered when cirrhosis, end-stage liver disease, or acute liver failure progresses beyond other treatment. The process starts with a consultation and evaluation, followed by donor registration or living-donor work-up, blood tests, and tissue-typing before surgery is scheduled.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 4 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(4)}>
          <h3>5. What happens after an organ transplant, and what is the outlook for a heart transplant?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Recipients spend the first days in a transplant ICU, then move to a step-down ward before discharge, on lifelong medication to prevent rejection. Most resume normal activities within three to six months. Heart transplant outcomes vary by patient, but registries report high first-year survival in experienced centres, with many recipients living a decade or longer.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 5 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(5)}>
          <h3>6. Which hospital in Tamil Nadu is best for liver or bone marrow transplants?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">A good transplant centre is usually judged on accreditation, transplant volume and outcomes, a dedicated transplant ICU, and round-the-clock specialist support. SRM Global Hospitals in Chengalpattu is NABH accredited and offers both liver and bone marrow transplant evaluation within its Multi-Organ Transplant Centre, which is worth comparing alongside other centres on these same factors.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 6 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(6)}>
          <h3>7. Does SRM Global Hospitals perform paediatric organ transplants?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Yes. In selected cases, ABO-incompatible transplants can be performed in children under two years of age, since a young child's immune system has not yet developed the antibody response that would otherwise cause rejection across blood groups.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 7 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(7)}>
          <h3>8. Is emergency transplant support available, and does SRM Global accept insurance?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Yes to both. Conditions like acute liver failure can progress within days, so the transplant team and ICU are supported round the clock. SRM Global also works with major insurance providers, TPAs, and government schemes. Call +91 96444 96444 or use the form on this page to book a consultation.</div></div>
      </div>

    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
           SECTION 14: STICKY CTA
           ══════════════════════════════════════════════════════ */}
      <div className={`sticky-cta ${isStickyVisible ? "visible" : ""}`} id="stickyCta">
        <div className="container">
          <div className="sticky-cta-text">Centre for Solid Organ Transplants <span>SRM Global Hospitals, Chennai</span></div>
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
