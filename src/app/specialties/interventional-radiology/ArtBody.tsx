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
            <span>Interventional Radiology</span>
          </div>
          <div className="hero-text reveal">
            <div className="hero-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v4l3 3" />
              </svg>
              Specialty Department
            </div>
            <h1>Department of Interventional Radiology</h1>
            <p className="hero-subtitle">Minimally Invasive, Image-Guided Care Without Open Surgery.</p>
            <p className="hero-desc">Recognized as the best interventional radiology hospital in Chengalpattu, our interventional radiologists use image-guided therapy and vascular interventions, from angiography and stent placement to uterine fibroid embolisation and the TACE procedure, so patients get effective, catheter-based treatment with faster recovery and minimal pain.</p>
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
            <div className="img-placeholder">Hero Image - Interventional Radiology Department</div>
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
              <div className="stat-value">Expert</div>
              <div className="stat-label">Interventional Radiologist</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div className="stat-value">Advanced</div>
              <div className="stat-label">Image-Guided Imaging Suite</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <div className="stat-value">Minimally Invasive</div>
              <div className="stat-label">Procedures with Faster Recovery</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="stat-value">Multi-Specialty</div>
              <div className="stat-label">Collaborative Care Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-text reveal">
            <div className="section-label">About the Department</div>
            <h2 className="section-title">Minimally Invasive, Image-Guided Care in Chengalpattu</h2>
            <p>The Department of Interventional Radiology at SRM Global Hospital, Kattankulathur offers minimally invasive, image-guided procedures that serve as highly effective alternatives to traditional surgery. Using real-time imaging such as ultrasound, CT scan, and fluoroscopy, our interventional radiologists diagnose and treat a variety of conditions through tiny incisions, ensuring faster recovery, minimal pain, and reduced hospital stays.</p>
            <p>From treating blocked blood vessels to targeting tumors without open surgery, our team plays a critical role across specialties including oncology, neurology, vascular care, and urology. As the best interventional radiology hospital in Chengalpattu, we combine advanced IR procedures with a multi-specialty, patient-centered approach to every case.</p>
          </div>
          <div className="about-img reveal">
            <div className="img-placeholder">Department Image - Interventional Radiology Suite</div>
          </div>
        </div>
      </section>

      {/* 4. CONDITIONS */}
      <section className="conditions" id="conditions">
        <div className="wrap">
          <div className="conditions-header reveal">
            <div className="section-label">What We Treat</div>
            <h2 className="section-title">Conditions We Treat</h2>
            <p className="section-desc">Precise, image-guided diagnosis and treatment across vascular, oncology, and organ-specific conditions.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h4>Peripheral Artery Disease (PAD)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </div>
              <h4>Deep Vein Thrombosis (DVT)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12c1.5-4 3.5-4 5 0s3.5 4 5 0 3.5-4 5 0 3.5 4 5 0"/></svg>
              </div>
              <h4>Varicose Veins</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h4>Uterine Fibroids</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Prostate Enlargement (BPH)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h4>Liver and Kidney Tumors</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h4>Vascular Malformations</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/></svg>
              </div>
              <h4>Carotid Artery Stenosis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h4>Ischemic Stroke</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <h4>Biliary Obstruction</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              </div>
              <h4>Renal Obstruction</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </div>
              <h4>Dialysis Access Complications</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h4>Gastrointestinal Bleeding</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h4>Abdominal Abscesses and Fluid Collections</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <h4>Swallowing and Feeding Difficulties</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TREATMENTS */}
      <section className="treatments" id="treatments">
        <div className="wrap">
          <div className="treatments-header reveal">
            <div className="section-label">Our Treatments</div>
            <h2 className="section-title">Key Treatments &amp; Procedures</h2>
            <p className="section-desc">Advanced, catheter-based interventions delivered under real-time imaging guidance by our interventional radiologist.</p>
          </div>
          <div className="treatments-grid">
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4>Angiography &amp; Vascular Imaging</h4>
              <p>Diagnostic angiography to precisely map blood vessels and identify blockages, aneurysms, or malformations before treatment.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h4>Uterine Fibroid Embolisation (UFE)</h4>
              <p>A minimally invasive alternative to surgery that blocks blood supply to uterine fibroids, relieving symptoms while preserving the uterus.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h4>Stent Placement &amp; Angioplasty</h4>
              <p>Stent placement and angioplasty to reopen narrowed or blocked arteries and veins, restoring healthy blood flow through a tiny incision.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h4>TACE Procedure</h4>
              <p>The TACE procedure delivers targeted chemotherapy directly into liver tumors while cutting off their blood supply, sparing healthy tissue.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <h4>Catheter-Based Vascular Treatment</h4>
              <p>Catheter-based treatment for stroke, deep vein thrombosis, and other vascular emergencies, delivered rapidly through a small puncture site.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Image-Guided Drainage &amp; Biopsy Procedures</h4>
              <p>Biliary and nephrostomy drainage, abscess drainage, and image-guided biopsies performed with precision to diagnose and relieve obstruction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCTORS */}
      <section className="doctors" id="doctors">
        <div className="wrap">
          <div className="doctors-header reveal">
            <div className="section-label">Meet Our Expert</div>
            <h2 className="section-title">Our Interventional Radiology Specialist</h2>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/interventional-radiology/dr-mohanraj.png" alt="Dr. Mohanraj P" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Mohanraj P</h4>
                <p className="doctor-qualification">MBBS, MD (Radiodiagnosis), DM (Interventional Radiology)</p>
                <p>Consultant, Interventional Radiology</p>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <h4>Minimally Invasive Expertise</h4>
              <p>Advanced, scar-minimizing procedures using image guidance, so patients get effective treatment through the smallest possible incision.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Multi-Specialty Collaboration</h4>
              <p>We work closely with oncology, nephrology, gastroenterology, and vascular surgery teams to plan and deliver every intervention.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4>State-of-the-Art Imaging Suite</h4>
              <p>Equipped with high-resolution ultrasound, CT, and fluoroscopy imaging systems that allow every procedure to be guided with precision.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h4>Reduced Risk, Greater Accuracy</h4>
              <p>Precision-targeted treatments with lower complication rates compared to open surgery, for a safer path to recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT CTA */}
      <section className="appointment" id="appointment">
        <div className="wrap">
          <div className="appt-text reveal">
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Ready for a Minimally Invasive Solution?</h2>
            <p>Schedule a consultation with our interventional radiologist for image-guided therapy, vascular interventions, or catheter-based treatment. As the best interventional radiology hospital in Chengalpattu, we combine advanced imaging with a personalized care plan for every patient.</p>
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
            <p className="section-desc">Find answers to common questions about our interventional radiology services.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What is interventional radiology and how is it different from surgery?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Interventional radiology uses real-time imaging such as ultrasound, CT, and fluoroscopy to guide minimally invasive procedures through tiny incisions, offering an effective alternative to traditional open surgery with faster recovery.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What conditions can be treated with image-guided procedures?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Image-guided therapy can treat blocked blood vessels, uterine fibroids, enlarged prostate, liver and kidney tumors, stroke, biliary and renal obstruction, and gastrointestinal bleeding, among other conditions.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                Is uterine fibroid embolisation a good alternative to surgery?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>For many patients, yes. Uterine fibroid embolisation relieves fibroid symptoms while preserving the uterus, avoiding the incision, blood loss, and recovery time of surgical fibroid removal.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                How long is the recovery after a minimally invasive vascular procedure?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Most interventional radiology procedures are done as day-care or with a short hospital stay, and patients typically return to normal activity much sooner than after open surgery.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                When would I need a stent placement or angiography?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Angiography is used to diagnose narrowed or blocked blood vessels, and stent placement may follow to reopen the vessel and restore normal blood flow when a significant blockage is found.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. STICKY BOTTOM CTA */}
      <div className={`sticky-cta ${isStickyVisible ? "show" : ""}`} id="stickyCta">
        <div className="wrap">
          <div className="sticky-cta-text">Need a minimally invasive procedure?</div>
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
