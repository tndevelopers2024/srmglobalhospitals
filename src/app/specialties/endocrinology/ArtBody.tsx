"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
      <Link href="/">Home</Link><span>/</span><Link href="/#specialties">Our Specialties</Link><span>/</span><span>Endocrinology</span>
    </div>
    <div className="hero-text reveal">
      <div className="hero-label">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4l3 3"/></svg>
        Specialty Department
      </div>
      <h1>Department of Endocrinology</h1>
      <p className="hero-subtitle">Balancing Your Hormones, Naturally.</p>
      <p className="hero-desc">Recognized as the best endocrinology hospital in Chengalpattu, our endocrinologists and thyroid specialists provide expert hormone disorder treatment, thyroid treatment, and PCOS treatment, along with dedicated care for adrenal and pituitary gland disorders, to help you manage your endocrine health with confidence.</p>
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
      <div className="img-placeholder">Hero Image - Endocrinology Department</div>
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
        <div className="stat-value">Expert</div>
        <div className="stat-label">Endocrinologists &amp; Diabetologists</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div className="stat-value">Advanced</div>
        <div className="stat-label">Hormone &amp; Metabolic Diagnostics</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div className="stat-value">Timely</div>
        <div className="stat-label">Diagnosis &amp; Ongoing Management</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <div className="stat-value">Comprehensive</div>
        <div className="stat-label">Multidisciplinary Endocrine Care</div>
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
      <h2 className="section-title">Comprehensive Hormone &amp; Endocrine Care in Chengalpattu</h2>
      <p>SRM Global Hospitals, recognized as the best endocrinology hospital in Chengalpattu, offers comprehensive care for patients with a range of hormonal imbalances and endocrine disorders. Led by a team of experienced endocrinologists, our Endocrinology Department creates personalized treatment plans tailored to each patient's needs, supported by state-of-the-art facilities and advanced diagnostic tools for accurate diagnosis and effective management of conditions such as diabetes, thyroid treatment, adrenal disorders, and pituitary gland treatment.</p>
      <p>Our multidisciplinary approach ensures integrated care, collaborating closely with other medical specialties to address complex cases, including PCOS treatment, adrenal disorder treatment, osteoporosis treatment, and metabolic disorder management. Patient-centered care is at the heart of everything we do, with a focus on education, empowerment, and support to help every patient achieve optimal hormonal and metabolic health.</p>
    </div>
    <div className="about-img reveal">
      <div className="img-placeholder">Department Image - Endocrinology Clinic / Consultation</div>
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
      <p className="section-desc">Expert diagnosis and management across the full spectrum of hormonal and endocrine conditions.</p>
    </div>
    <div className="conditions-grid">
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
        </div>
        <h4>Diabetes Mellitus (Type 1 &amp; Type 2)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-2-3-6-3-7 0-1 3 1 6 4 6h3M12 8c2-3 6-3 7 0 1 3-1 6-4 6h-3"/></svg>
        </div>
        <h4>Thyroid Disorders</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l9 15H3z"/></svg>
        </div>
        <h4>Adrenal Disorders</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>
        </div>
        <h4>Pituitary Disorders</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="4" cy="13" r="2"/><circle cx="20" cy="13" r="2"/><line x1="6" y1="13" x2="18" y2="13"/></svg>
        </div>
        <h4>Osteoporosis and Other Metabolic Bone Diseases</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="1.5"/><circle cx="15" cy="10" r="1.5"/><circle cx="12" cy="15" r="1.5"/></svg>
        </div>
        <h4>Polycystic Ovary Syndrome (PCOS)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <h4>Hypogonadism (Low Testosterone Levels)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="8" r="2"/><circle cx="16" cy="8" r="2"/><circle cx="8" cy="16" r="2"/><circle cx="16" cy="16" r="2"/></svg>
        </div>
        <h4>Hyperparathyroidism and Hypoparathyroidism</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <h4>Growth Disorders (Such as Gigantism and Dwarfism)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </div>
        <h4>Menopause and Hormone Replacement Therapy</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12c1.5-4 3.5-4 5 0s3.5 4 5 0 3.5-4 5 0 3.5 4 5 0"/></svg>
        </div>
        <h4>Hyperaldosteronism</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        </div>
        <h4>Hypercalcemia and Hypocalcemia</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11z"/></svg>
        </div>
        <h4>Hyperlipidemia and Dyslipidemia</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <h4>Metabolic Syndrome</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <h4>Reproductive Endocrinology Disorders</h4>
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
      <p className="section-desc">Advanced diagnostic and therapeutic care for hormonal and endocrine conditions, delivered by experienced endocrinologists.</p>
    </div>
    <div className="treatments-grid">
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-2-3-6-3-7 0-1 3 1 6 4 6h3M12 8c2-3 6-3 7 0 1 3-1 6-4 6h-3"/></svg>
        </div>
        <h4>Thyroid Treatment</h4>
        <p>Comprehensive thyroid treatment for hypothyroidism, hyperthyroidism, and thyroid nodules, guided by an experienced thyroid specialist.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
        </div>
        <h4>Hormone Disorder Treatment</h4>
        <p>Personalized hormone disorder treatment combining medical management and hormone therapy to restore balance across the endocrine system.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="1.5"/><circle cx="15" cy="10" r="1.5"/><circle cx="12" cy="15" r="1.5"/></svg>
        </div>
        <h4>PCOS Treatment</h4>
        <p>Individualized PCOS treatment addressing hormonal imbalance, irregular cycles, and metabolic health for long-term wellbeing.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l9 15H3z"/></svg>
        </div>
        <h4>Adrenal Disorder Treatment</h4>
        <p>Accurate diagnosis and adrenal disorder treatment for conditions affecting cortisol, aldosterone, and other adrenal hormone production.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>
        </div>
        <h4>Pituitary Gland Treatment</h4>
        <p>Specialized pituitary gland treatment for pituitary tumors and hormone imbalances affecting growth, metabolism, and reproductive health.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="4" cy="13" r="2"/><circle cx="20" cy="13" r="2"/><line x1="6" y1="13" x2="18" y2="13"/></svg>
        </div>
        <h4>Osteoporosis &amp; Metabolic Disorder Management</h4>
        <p>Osteoporosis treatment and broader metabolic disorder management to protect bone health and reduce fracture risk over time.</p>
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
        <h4>Specialized Expertise</h4>
        <p>Our team of endocrinologists comprises specialists who are leaders in their field, with extensive experience diagnosing and treating a wide range of endocrine disorders.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h4>Advanced Diagnostics</h4>
        <p>State-of-the-art diagnostic tools and technologies allow for accurate and timely assessment of endocrine disorders, from advanced imaging to specialized laboratory testing.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <h4>Comprehensive Treatments</h4>
        <p>A full range of treatment options for endocrine disorders, including medical management, hormone therapy, minimally invasive procedures, and surgical intervention when necessary.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.07 0l1.71-1.71a5 5 0 0 0-7.07-7.07L10 5.93"/><path d="M14 11a5 5 0 0 0-7.07 0l-1.71 1.71a5 5 0 0 0 7.07 7.07L14 18.07"/></svg>
        </div>
        <h4>Patient-Centered Care</h4>
        <p>Our team takes the time to listen to your concerns, answer your questions, and involve you in the decision-making process every step of the way.</p>
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
      <h2 className="section-title">Ready to Restore Your Hormone Balance?</h2>
      <p>Schedule a consultation with our endocrinologists for thyroid treatment, PCOS treatment, adrenal disorder treatment, or osteoporosis treatment. As the best endocrinology hospital in Chengalpattu, we combine specialized expertise with a personalized care plan for every patient.</p>
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
      <p className="section-desc">Find answers to common questions about our endocrinology services.</p>
    </div>
    <div className="faq-list">
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          When should I see an endocrinologist instead of my general physician?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">An endocrinologist should be consulted for persistent or complex hormonal issues, such as poorly controlled diabetes, thyroid disorders, PCOS, adrenal or pituitary gland conditions, or unexplained weight, energy, or growth changes that need specialized hormone disorder treatment.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What are the signs of a thyroid disorder?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Common signs include unexplained weight changes, fatigue, hair loss, changes in heart rate, and sensitivity to temperature. A thyroid specialist can confirm the diagnosis with blood tests and recommend the right thyroid treatment for your specific condition.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          Can PCOS be managed effectively with treatment?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Yes. PCOS treatment combining lifestyle changes, medication, and hormone therapy can help regulate menstrual cycles, manage symptoms, and reduce the risk of related conditions such as metabolic syndrome and type 2 diabetes.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          How is osteoporosis diagnosed and treated?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Osteoporosis is typically diagnosed with a bone density scan, and osteoporosis treatment may include calcium and vitamin D supplementation, medication to strengthen bone, and lifestyle changes as part of broader metabolic disorder management.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What conditions fall under adrenal and pituitary gland disorders?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Adrenal disorder treatment addresses conditions affecting cortisol and aldosterone production, while pituitary gland treatment covers pituitary tumors and hormone imbalances that can affect growth, metabolism, and reproductive health. Both require specialized endocrine disease management.</div>
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
    <div className="sticky-cta-text">Dealing with a hormone or thyroid concern?</div>
    <div className="sticky-cta-actions">
      <a href="#appointment" className="btn-primary">Book Appointment</a>
      <a href="tel:+919644496444" className="btn-call">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>+91 96444 96444</span>
      </a>
    </div>
  </div>
</div>

{/*  ════════════════════════════════════════════════
     FOOTER
     ════════════════════════════════════════════════  */}

    </>
  );
}
