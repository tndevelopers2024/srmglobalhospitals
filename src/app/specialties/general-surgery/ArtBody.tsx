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
            <span>General Surgery</span>
          </div>
          <div className="hero-text reveal">
            <div className="hero-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v4l3 3" />
              </svg>
              Specialty Department
            </div>
            <h1>Department of General Surgery</h1>
            <p className="hero-subtitle">Advanced Surgical Care, Delivered with Precision.</p>
            <p className="hero-desc">Recognized as the best general surgery hospital in Chengalpattu, our general surgeons offer laparoscopic surgery and other minimally invasive treatments for hernia surgery, appendix surgery, and gallbladder surgery, with day care surgery options that mean smaller incisions, less discomfort, and a quicker recovery.</p>
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
            <div className="img-placeholder">Hero Image - General Surgery Department</div>
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
              <div className="stat-value">3</div>
              <div className="stat-label">General Surgery Specialists</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/></svg>
              </div>
              <div className="stat-value">Advanced</div>
              <div className="stat-label">Laparoscopic &amp; Minimally Invasive Surgery</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div className="stat-value">Comprehensive</div>
              <div className="stat-label">General &amp; Day Care Surgical Services</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="stat-value">Patient-Centered</div>
              <div className="stat-label">Personalized Surgical Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-text reveal">
            <div className="section-label">About the Department</div>
            <h2 className="section-title">Advanced General Surgery Care in Chengalpattu</h2>
            <p>The Department of General Surgery at SRM Global Hospitals is an advanced surgical care facility that uses the latest techniques and the most advanced technology. Our team of excellent general surgeons and experienced support staff make sure that the surgery you undergo is as comfortable for you as possible. We offer an array of minimally invasive and traditional surgical repairs such as laparoscopic surgery, gastric bypass and bariatric surgery, hernia surgery, and hemorrhoid disease treatment, with the benefits of smaller incisions, minimal blood loss, less discomfort, quicker recovery, a shorter hospital stay, and minimal scars.</p>
            <p>As the best general surgery hospital in Chengalpattu, we are dedicated to adopting the most advanced surgical technology complying with the highest international standards, at an affordable patient cost. We focus on providing the best results for each and every patient using cutting-edge, minimally invasive treatments and day care surgery options, with a philosophy centered around dignified, patient-centered care.</p>
          </div>
          <div className="about-img reveal">
            <div className="img-placeholder">Department Image - General Surgery Operating Theatre</div>
          </div>
        </div>
      </section>

      {/* 4. CONDITIONS */}
      <section className="conditions" id="conditions">
        <div className="wrap">
          <div className="conditions-header reveal">
            <div className="section-label">What We Treat</div>
            <h2 className="section-title">Conditions We Treat</h2>
            <p className="section-desc">Expert surgical diagnosis and management across a wide range of general and abdominal surgical conditions.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h4>Appendicitis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/></svg>
              </div>
              <h4>Hernia (Inguinal, Umbilical, Incisional)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </div>
              <h4>Gallstones</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
              <h4>Diverticulitis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h4>Hemorrhoids</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h4>Colon Cancer</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
              </div>
              <h4>Pancreatitis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </div>
              <h4>Perforated Ulcer</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              </div>
              <h4>Fissures and Fistulas</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <h4>Bowel Obstruction</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h4>Abdominal Trauma</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h4>Breast Cancer</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-2-3-6-3-7 0-1 3 1 6 4 6h3M12 8c2-3 6-3 7 0 1 3-1 6-4 6h-3"/></svg>
              </div>
              <h4>Abscesses</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Lymph Node Biopsy</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>
              </div>
              <h4>Skin Lesions</h4>
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
            <p className="section-desc">Minimally invasive and traditional surgical procedures delivered by experienced general surgeons.</p>
          </div>
          <div className="treatments-grid">
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h4>Laparoscopic Surgery</h4>
              <p>Minimally invasive surgery performed through small incisions, offering less discomfort, minimal scars, and a quicker recovery for a wide range of procedures.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/></svg>
              </div>
              <h4>Hernia Surgery</h4>
              <p>Surgical repair of inguinal, umbilical, and incisional hernias, restoring the abdominal wall and relieving discomfort with a minimally invasive approach where possible.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h4>Appendix Surgery</h4>
              <p>Prompt appendectomy for appendicitis, performed laparoscopically in most cases to reduce hospital stay and speed up recovery.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </div>
              <h4>Gallbladder Surgery</h4>
              <p>Laparoscopic cholecystectomy for gallstones and gallbladder disease, one of the most common minimally invasive procedures we perform.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-2-3-6-3-7 0-1 3 1 6 4 6h3M12 8c2-3 6-3 7 0 1 3-1 6-4 6h-3"/></svg>
              </div>
              <h4>Thyroid Surgery</h4>
              <p>Surgical management of thyroid nodules and thyroid disease, performed with careful attention to preserving voice and nerve function.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <h4>Pilonidal Sinus Surgery &amp; Abscess Drainage</h4>
              <p>Day care surgery for pilonidal sinus and abscess drainage, offering quick relief with same-day discharge for suitable cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCTORS */}
      <section className="doctors" id="doctors">
        <div className="wrap">
          <div className="doctors-header reveal">
            <div className="section-label">Meet Our Experts</div>
            <h2 className="section-title">Our General Surgery Specialists</h2>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/general-surgery/dr-a-ajay-raja.png" alt="Dr. Ajay Raja. A" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Ajay Raja. A</h4>
                <p className="doctor-qualification">MBBS, MS, FIAGES, FALS</p>
                <p>Visiting Consultant, General Surgery</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/general-surgery/dr-athira-gopinathan.png" alt="Dr. Athira Gopinathan" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Athira Gopinathan</h4>
                <p className="doctor-qualification">MBBS, MS</p>
                <p>Visiting Consultant, General Surgery</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/general-surgery/dr-karthi-g.png" alt="Dr. G. Karthik" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. G. Karthik</h4>
                <p className="doctor-qualification">MBBS, MS, FIAGES, FALS</p>
                <p>Visiting Consultant, General Surgery</p>
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
              <h4>Expert Surgeons</h4>
              <p>Our team comprises highly skilled and experienced general surgeons who are leaders in their field, ensuring you receive the highest quality of care tailored to your specific needs.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4>State-of-the-Art Facilities</h4>
              <p>SRM Global Hospitals is equipped with state-of-the-art facilities and cutting-edge technology, enabling our surgeons to perform surgeries with precision and efficiency.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h4>Comprehensive Surgical Services</h4>
              <p>Whether you require minimally invasive procedures, complex surgeries, or emergency interventions, we offer a comprehensive range of surgical services to address diverse medical conditions.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h4>Personalised Care</h4>
              <p>We understand that each patient is unique. Our surgeons take the time to listen to your concerns, thoroughly evaluate your condition, and develop a customized treatment plan that aligns with your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT CTA */}
      <section className="appointment" id="appointment">
        <div className="wrap">
          <div className="appt-text reveal">
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Ready to Discuss Your Surgical Care Options?</h2>
            <p>Schedule a consultation with our general surgeons for laparoscopic surgery, hernia surgery, appendix surgery, or gallbladder surgery. As the best general surgery hospital in Chengalpattu, we combine surgical expertise with a personalized care plan for every patient.</p>
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
            <p className="section-desc">Find answers to common questions about our general surgery services.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What is the difference between laparoscopic and open surgery?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Laparoscopic surgery is a minimally invasive surgery performed through small incisions using a camera and specialized instruments, resulting in less discomfort, minimal scars, and a quicker recovery compared to traditional open surgery.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                When is hernia surgery necessary?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Hernia surgery is recommended when a hernia causes pain, grows larger, or risks becoming strangulated. Our general surgeons evaluate each case to decide between a watch-and-wait approach or surgical repair.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                How long does recovery take after gallbladder surgery?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Most patients undergoing laparoscopic gallbladder surgery return to normal activity within one to two weeks, thanks to the smaller incisions and reduced blood loss associated with minimally invasive surgery.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                Is day care surgery safe for procedures like abscess drainage?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Yes. Day care surgery is a safe option for suitable procedures such as abscess drainage and pilonidal sinus surgery, allowing patients to go home the same day with proper aftercare guidance.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What should I expect before and after appendix surgery?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Appendix surgery for appendicitis is usually performed on an urgent basis. Most patients recover within one to two weeks, especially when the procedure is done laparoscopically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. STICKY BOTTOM CTA */}
      <div className={`sticky-cta ${isStickyVisible ? "show" : ""}`} id="stickyCta">
        <div className="wrap">
          <div className="sticky-cta-text">Need a general surgery consultation?</div>
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
