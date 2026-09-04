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
            <span>Hepatology</span>
          </div>
          <div className="hero-text reveal">
            <div className="hero-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v4l3 3" />
              </svg>
              Specialty Department
            </div>
            <h1>Department of Hepatology</h1>
            <p className="hero-subtitle">Advanced, Compassionate Care for Every Stage of Liver Disease.</p>
            <p className="hero-desc">Recognized as the best hepatology hospital in Chengalpattu, our hepatologists and liver specialists provide comprehensive liver disease treatment, from hepatitis treatment and fatty liver treatment to cirrhosis treatment and liver transplantation, backed by a dedicated liver intensive care unit and regenerative liver therapies.</p>
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
            <div className="img-placeholder">Hero Image - Hepatology Department</div>
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
              <div className="stat-label">Hepatology &amp; Regenerative Medicine Team</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div className="stat-value">Comprehensive</div>
              <div className="stat-label">Liver Disease &amp; Transplant Care</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div className="stat-value">Advanced</div>
              <div className="stat-label">Liver Diagnostics &amp; Treatment</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="stat-value">Multidisciplinary</div>
              <div className="stat-label">Patient-Centered Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-text reveal">
            <div className="section-label">About the Department</div>
            <h2 className="section-title">Comprehensive Liver Care in Chengalpattu</h2>
            <p>The doctors in the department of hepatology are a group of focused doctors specifically trained to diagnose and manage liver diseases. The group of experienced doctors backed up with state of the art diagnostic and interventional support renders very comprehensive care in the field of liver diseases. The unit is well versed with the up-to-date standard of care regimens in liver diseases and also has a liver transplant unit and a dedicated liver intensive care unit for the critically ill.</p>
            <p>Stem cell and regenerative therapies are among the most exciting and emerging therapies in medical science, studying the use of human cells or tissues to revert or improve a chronic medical condition. As the best hepatology hospital in Chengalpattu, our stem cell research involves basic and pre-clinical studies followed by use in humans as part of approved research projects.</p>
          </div>
          <div className="about-img reveal">
            <div className="img-placeholder">Department Image - Hepatology Clinic / Consultation</div>
          </div>
        </div>
      </section>

      {/* 4. CONDITIONS */}
      <section className="conditions" id="conditions">
        <div className="wrap">
          <div className="conditions-header reveal">
            <div className="section-label">What We Treat</div>
            <h2 className="section-title">Conditions We Treat</h2>
            <p className="section-desc">Expert diagnosis and management across the full spectrum of liver diseases and disorders.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h4>Liver Cirrhosis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
              <h4>Hepatitis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h4>Liver Cancer</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h4>Liver Failure</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h4>Alcoholic Liver Disease</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </div>
              <h4>Non-alcoholic Fatty Liver Disease (NAFLD)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h4>Hepatic Encephalopathy</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h4>Portal Hypertension</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Liver Transplantation</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <h4>Liver Biopsy</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
              </div>
              <h4>Hepatic Steatosis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h4>Primary Biliary Cholangitis (PBC)</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Autoimmune Hepatitis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h4>Wilson&amp;apos;s Disease</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>
              </div>
              <h4>Hemochromatosis</h4>
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
            <p className="section-desc">Advanced medical, interventional, and regenerative therapies delivered by experienced hepatologists.</p>
          </div>
          <div className="treatments-grid">
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Liver Transplantation</h4>
              <p>A dedicated liver transplant unit and liver intensive care unit supporting patients through evaluation, surgery, and post-transplant recovery.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h4>Cirrhosis Treatment</h4>
              <p>Comprehensive cirrhosis treatment focused on slowing disease progression, managing complications, and protecting remaining liver function.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
              <h4>Hepatitis B &amp; C Treatment</h4>
              <p>Antiviral and long-term hepatitis treatment for hepatitis B and hepatitis C, aimed at controlling the virus and preventing liver damage.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </div>
              <h4>Fatty Liver Treatment</h4>
              <p>Fatty liver treatment for alcoholic and non-alcoholic fatty liver disease, combining medical management with lifestyle and dietary guidance.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <h4>Liver Biopsy</h4>
              <p>Liver biopsy performed to accurately diagnose the type and extent of liver disease, guiding the most effective treatment plan.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8c-2-3-6-3-7 0-1 3 1 6 4 6h3M12 8c2-3 6-3 7 0 1 3-1 6-4 6h-3"/></svg>
              </div>
              <h4>Regenerative Liver Therapies</h4>
              <p>Innovative regenerative medicine approaches, including stem cell therapy under approved research protocols, aimed at promoting liver regeneration and repair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCTORS */}
      <section className="doctors" id="doctors">
        <div className="wrap">
          <div className="doctors-header reveal">
            <div className="section-label">Meet Our Expert</div>
            <h2 className="section-title">Our Hepatology Specialist</h2>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/hepatology/dr-joy-varghese.png" alt="Dr. Joy Varghese" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Joy Varghese</h4>
                <p className="doctor-qualification">MBBS, DM</p>
                <p>Chief Clinical Advisor, Hepatology</p>
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
              <h4>Expert Hepatologists &amp; Regenerative Medicine Specialists</h4>
              <p>Our Centre of Hepatology and Regenerative Medicine is led by a team of expert hepatologists and regenerative medicine specialists offering personalized and comprehensive care for each patient.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h4>Comprehensive Liver Care</h4>
              <p>We offer a comprehensive range of liver care services, including screening, diagnosis, treatment, and supportive care, from common liver diseases such as cirrhosis and fatty liver disease to liver cancer.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4>State-of-the-Art Modalities</h4>
              <p>We utilize state-of-the-art treatment modalities including advanced medical therapies, minimally invasive procedures, liver transplantation, and innovative regenerative medicine approaches.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Multidisciplinary Approach</h4>
              <p>Our hepatology team collaborates closely with transplant surgeons, radiologists, oncologists, nutritionists, and supportive care providers to develop comprehensive treatment plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT CTA */}
      <section className="appointment" id="appointment">
        <div className="wrap">
          <div className="appt-text reveal">
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Ready to Take Charge of Your Liver Health?</h2>
            <p>Schedule a consultation with our hepatologists for hepatitis treatment, fatty liver treatment, cirrhosis treatment, or liver transplantation. As the best hepatology hospital in Chengalpattu, we combine liver specialist expertise with a personalized care plan for every patient.</p>
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
            <p className="section-desc">Find answers to common questions about our hepatology services.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                When should I see a hepatologist instead of a general physician?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>A hepatologist, or liver specialist, should be consulted for persistent abnormal liver function tests, jaundice, chronic hepatitis, unexplained fatigue with liver involvement, or any diagnosed liver disease that needs specialized liver disease treatment.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What is the difference between hepatitis B and hepatitis C?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Both are viral infections that can cause chronic liver disease, but they spread differently and respond to different treatments. Hepatitis B treatment and hepatitis C treatment are both tailored to the specific virus and stage of liver involvement.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                Can fatty liver disease be reversed with treatment?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>In many cases, yes. Fatty liver treatment combining lifestyle changes, weight management, and medical management can reverse or significantly improve non-alcoholic fatty liver disease when caught early.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What does a liver biopsy involve?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>A liver biopsy involves taking a small sample of liver tissue, usually with a fine needle, to accurately diagnose the type and severity of liver disease and guide the right treatment plan.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What is regenerative liver therapy and who is it for?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Regenerative liver therapy uses stem cells or tissue engineering approaches under approved research protocols to help repair damaged liver tissue, and may be considered for select patients with chronic liver disease as part of ongoing research.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. STICKY BOTTOM CTA */}
      <div className={`sticky-cta ${isStickyVisible ? "show" : ""}`} id="stickyCta">
        <div className="wrap">
          <div className="sticky-cta-text">Have a liver health concern?</div>
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
