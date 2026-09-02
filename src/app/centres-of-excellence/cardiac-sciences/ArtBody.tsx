"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  const [activeTab, setActiveTab] = useState("diagnostics");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Institute of Cardiac Sciences",
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
          const targetCounts = [5000, 3000, 20, 24];

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
      setFormData({ name: "", phone: "", department: "Institute of Cardiac Sciences", date: "" });
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
        <span>Institute of Cardiac Sciences</span>
      </div>
      <div className="hero-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
        <span>Center of Excellence</span>
      </div>
      <h1>Cardiology Hospital in Chengalpattu</h1>
      <p className="hero-tagline">Comprehensive cardiology care for coronary artery disease, heart failure, and cardiac emergencies, with round-the-clock support across Chengalpattu.</p>
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
        <div className="hero-image-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg><span>Cardiology Team Photo</span></div>
      </div>
    </div>
  </div>
</section>

      <section className="trust-bar" ref={trustRef}>
  <div className="container">
    <div className="trust-item">
      <div className="trust-number">{counts[0] ? counts[0].toLocaleString() : 0}+</div>
      <div className="trust-label">Patients Treated</div>
    </div>
    <div className="trust-item">
      <div className="trust-number">{counts[1] ? counts[1].toLocaleString() : 0}+</div>
      <div className="trust-label">Procedures Performed</div>
    </div>
    <div className="trust-item">
      <div className="trust-number">{counts[2] ? counts[2].toLocaleString() : 0}+</div>
      <div className="trust-label">Years Experience</div>
    </div>
    <div className="trust-item">
      <div className="trust-number">{counts[3] || 24}/7</div>
      <div className="trust-label">Emergency Support</div>
    </div>
  </div>
</section>

      <section className="about" id="about">
  <div className="container">
    <div className="about-text">
      <div className="eyebrow">About Us</div>
      <h2 className="section-heading">Cardiology Hospital in Chengalpattu for Heart Care</h2>
      <p>The Institute of Cardiac Sciences at SRM Global Hospitals is a tertiary care hospital in Kattankulathur, Chengalpattu, India.</p>
      <p>Diabetes, cholesterol, and hypertension are major risk factors for coronary artery disease.</p>
      <div className="about-features">
        <div className="about-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>NABH Accredited</div>
        <div className="about-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Preventive &amp; Interventional Cardiology</div>
        <div className="about-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>24/7 Cardiac Emergency</div>
      </div>
      <a className="btn btn-gradient btn-sm" style={{ marginTop: '24px' }} href="#cta-banner">Learn More</a>
    </div>
    <div className="about-image">
      <div>Cardiology Team</div>
    </div>
  </div>
</section>

      <section className="subspecialties">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Sub-Specialties</div>
      <h2 className="section-heading">Sub-Specialties</h2>
      <p className="section-sub">Prevention through advanced procedures for heart failure patients.</p>
    </div>
    <div className="subspec-grid">
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
        <h3>Preventive Cardiology</h3>
        <p>Risk assessment for diabetes, cholesterol, and hypertension.</p>
      </div>
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg></div>
        <h3>Interventional Cardiology</h3>
        <p>Coronary angioplasty and stenting for blocked arteries.</p>
      </div>
      <div className="subspec-card">
        <div className="subspec-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
        <h3>Cardiac Emergency Care</h3>
        <p>Round-the-clock treatment for chest pain, heart attacks, and cardiac arrest.</p>
      </div>
    </div>
  </div>
</section>

      <section className="conditions">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Conditions We Treat</div>
      <h2 className="section-heading">Heart Conditions We Treat</h2>
      <p className="section-sub">Cardiac conditions affecting all ages.</p>
    </div>
    <div className="conditions-grid">
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
        <div>
          <h3>Coronary Artery Disease</h3>
          <p>Narrowed or blocked heart arteries that can cause a heart attack.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
        <div>
          <h3>Heart Failure</h3>
          <p>A weakened heart muscle that struggles to pump enough blood.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg></div>
        <div>
          <h3>Arrhythmias</h3>
          <p>Irregular heartbeats, including atrial fibrillation, monitored and treated.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
        <div>
          <h3>Heart Valve Disease</h3>
          <p>Narrowed or leaking valves, treated with repair or replacement.</p>
        </div>
      </div>
      <div className="condition-card">
        <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
        <div>
          <h3>Peripheral Artery Disease</h3>
          <p>Reduced blood flow to the limbs, managed to prevent complications.</p>
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
      <p className="section-sub">Consult our skilled cardiologists at SRM Global.</p>
    </div>
    <div className="doctors-grid">
      <div className="doctor-card">
        <div className="doctor-photo"><div className="doctor-photo-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div></div>
        <div className="doctor-info">
          <div className="doctor-name">Dr. C.S. Aravind</div>
          <div className="doctor-designation">SENIOR CONSULTANT, CARDIOLOGY</div>
          <div className="doctor-quals">MBBS, MD, DM</div>
          <a className="btn btn-outline-purple btn-sm" href="#cta-banner">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card">
        <div className="doctor-photo"><div className="doctor-photo-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div></div>
        <div className="doctor-info">
          <div className="doctor-name">Dr. Tamilmani V</div>
          <div className="doctor-designation">SENIOR CONSULTANT, CARDIOLOGY</div>
          <div className="doctor-quals">MBBS, MD, DNB (Cardiology)</div>
          <a className="btn btn-outline-purple btn-sm" href="#cta-banner">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card">
        <div className="doctor-photo"><div className="doctor-photo-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div></div>
        <div className="doctor-info">
          <div className="doctor-name">Dr. Surya Prakash S</div>
          <div className="doctor-designation">SENIOR CONSULTANT, CARDIOLOGY</div>
          <div className="doctor-quals">MBBS, MD, DrNB</div>
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
      <p className="section-sub">Diagnostics and invasive cardiac procedures.</p>
    </div>
    <div className="tabs-nav">
      <button 
        className={`tab-btn ${activeTab === 'diagnostics' ? 'active' : ''}`} 
        type="button" 
        data-tab="diagnostics"
        onClick={() => setActiveTab('diagnostics')}
      >
        Non-Invasive Diagnostics
      </button>
      <button 
        className={`tab-btn ${activeTab === 'interventional' ? 'active' : ''}`} 
        type="button" 
        data-tab="interventional"
        onClick={() => setActiveTab('interventional')}
      >
        Interventional Procedures
      </button>
    </div>

    <div className={`tab-panel ${activeTab === 'diagnostics' ? 'active' : ''}`} id="tab-diagnostics">
      <div className="tab-image"><div>Image Placeholder: Cardiac Diagnostics</div></div>
      <div className="tab-content">
        <h3>Non-Invasive Diagnostics</h3>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>ECG and 2D echocardiography</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Stress testing</li>
        </ul>
        <a className="btn btn-gradient btn-sm" href="#cta-banner">Book a Consultation</a>
      </div>
    </div>

    <div className={`tab-panel ${activeTab === 'interventional' ? 'active' : ''}`} id="tab-interventional">
      <div className="tab-image"><div>Image Placeholder: Cath Lab</div></div>
      <div className="tab-content">
        <h3>Interventional Procedures</h3>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Coronary angioplasty and stenting</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>Post-procedure cardiac ICU care</li>
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
      <h2 className="section-heading">Built for Rapid Cardiac Care</h2>
      <p className="section-sub">Built for golden-hour response.</p>
    </div>
    <div className="tech-grid">
      <div className="tech-card">
        <div className="tech-card-img">Image Placeholder: Cath Lab</div>
        <div className="tech-card-body">
          <h3>Cardiac Emergency &amp; Cath Lab</h3>
          <p>A dedicated cardiac emergency unit and catheterisation lab for rapid angioplasty.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="life-after" id="heart-health">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Heart Health &amp; Prevention</div>
      <h2 className="section-heading">Protecting Your Heart Health</h2>
      <p className="section-sub">Early detection protects long-term heart health.</p>
    </div>
    <p>Coronary artery disease and heart failure develop gradually, often linked to diabetes, cholesterol, and hypertension. Most cardiac deaths occur within the first hours of an event, so reaching care in time protects heart function and improves recovery outcomes.</p>
  </div>
</section>

      <section className="stories">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Patient Stories</div>
      <h2 className="section-heading">What Our Patients Say</h2>
      <p className="section-sub">Real experiences from patients who received cardiology care at SRM Global Hospitals.</p>
    </div>
    <div className="stories-grid">
      <div className="story-card">
        <div className="story-quote-icon"><svg viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg></div>
        <p className="story-text">After my bypass surgery at SRM Global Hospitals, I felt like I got a second chance.</p>
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
    </div>
  </div>
</section>

      <section className="why-choose">
  <div className="container">
    <div className="section-header">
      <div className="eyebrow">Why SRM Global</div>
      <h2 className="section-heading">Why Choose SRM Global Hospitals</h2>
      <p className="section-sub">Prevention, speed, and coordinated response.</p>
    </div>
    <div className="why-grid">
      <div className="why-card">
        <div className="why-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
        <h3>Preventive to Interventional, Under One Roof</h3>
        <p>From preventive screening to angioplasty and bypass coordination, cardiac care is delivered at the highest level across departments, backed by a 24/7 emergency team.</p>
      </div>
    </div>
  </div>
</section>

      <section className="cta-banner" id="cta-banner">
  <div className="container">
    <div className="cta-text">
      <h2>Book Your Cardiology Consultation</h2>
      <p>Whether you need routine cardiology services or urgent cardiac care, book an appointment.</p>
      <a className="cta-phone" href="tel:+919644496444">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        +91 96444 96444
      </a>
    </div>
    <form className="cta-form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Your Full Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <select required defaultValue="Institute of Cardiac Sciences">
        <option value="" disabled>Select Department</option>
        <option value="Institute of Cardiac Sciences">Cardiology</option>
        <option value="Institute of Orthopaedics">Orthopaedics</option>
        <option value="Institute of Neurosciences">Neurosciences</option>
        <option value="Institute of Oncology">Oncology</option>
        <option value="Institute of Gastroenterology">Gastroenterology</option>
        <option value="Institute of Nephrology">Nephrology</option>
        <option value="Institute of Organ Transplant">Organ Transplant</option>
        <option value="Institute of Pulmonology">Pulmonology</option>
        <option value="Institute of Urology">Urology</option>
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
      <p className="section-sub">Heart health and prevention.</p>
    </div>
    <div className="articles-grid">
      <div className="article-card">
        <div className="article-img">Image Placeholder</div>
        <div className="article-body">
          <span className="article-tag">Heart Health</span>
          <h3>Warning Signs of a Heart Attack You Shouldn't Ignore</h3>
          <p>Chest pain and shortness of breath that call for urgent evaluation.</p>
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
      <p className="section-sub">Common questions about cardiology care.</p>
    </div>
    <div className="faq-list">

      <div className={`faq-item ${openFaqIndex === 0 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(0)}>
          <h3>1. Which hospital and cardiologist should I choose for heart treatment in Chengalpattu?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">Rather than a single best cardiologist or hospital, look for 24/7 emergency support and experienced consultants.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 1 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(1)}>
          <h3>2. What is a cardiology department, and what does the heart do?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">A cardiology department diagnoses and treats heart conditions; the heart pumps blood and regulates pressure.</div></div>
      </div>

      <div className={`faq-item ${openFaqIndex === 2 ? 'open' : ''}`}>
        <div className="faq-question" onClick={() => toggleFaq(2)}>
          <h3>3. What is the difference between a cardiologist and an interventional cardiologist, and what does cardiac surgery involve?</h3>
          <div className="faq-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></div>
        </div>
        <div className="faq-answer"><div className="faq-answer-inner">A cardiologist manages heart conditions with medication and testing, while an interventional cardiologist performs procedures like angioplasty.</div></div>
      </div>

    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════
           SECTION 14: STICKY CTA
           ══════════════════════════════════════════════════════ */}
      <div className={`sticky-cta ${isStickyVisible ? "visible" : ""}`} id="stickyCta">
        <div className="container">
          <div className="sticky-cta-text">Institute of Cardiac Sciences <span>SRM Global Hospitals, Chennai</span></div>
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
