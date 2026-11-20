"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";

export default function ArtBody() {
  const [activeTab, setActiveTab] = useState("preventive");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroRef = useRef<HTMLElement>(null);

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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="coe-page">
      <style>{`
        .coe-page .child-health {
          background: var(--mist);
          padding: 80px 0;
        }
        .coe-page .ch-list {
          max-width: 820px;
          margin: 0 auto;
          display: grid;
          gap: 16px;
        }
        .coe-page .ch-item {
          background: #ffffff;
          border: 1px solid var(--rule);
          border-left: 4px solid var(--brand);
          border-radius: 12px;
          padding: 18px 24px;
          color: var(--ink-soft);
          font-size: 15.5px;
          line-height: 1.6;
          box-shadow: 0 2px 12px rgba(26, 31, 92, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .coe-page .ch-item:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 18px rgba(26, 31, 92, 0.08);
        }
        .coe-page .placeholder {
          color: var(--ink-faint);
          font-style: italic;
        }
      `}</style>
      {/* ══════════════════════════════════════════════════════
           SECTION 1: HERO
           ══════════════════════════════════════════════════════ */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="container">
          <div className="hero-inner-card">
            <div className="hero-content">
              <div className="hero-breadcrumb">
                <Link href="/">Home</Link>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <Link href={"/clinical-excellence" as Route}>Clinical Excellence</Link>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                <span>Pediatric Centre of Excellence</span>
              </div>
              <div className="hero-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
                <span>Center of Excellence</span>
              </div>
              <h1>Pediatric Hospital in Chengalpattu</h1>
              <p className="hero-tagline">
                Dedicated care for infants, children and adolescents under one roof, with trained pediatricians, modern facilities and 24/7 emergency support in Tamil Nadu.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-gradient" href="#cta-banner">
                  Book Appointment
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a className="btn btn-outline" href="tel:+919644496444">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Emergency
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-wrapper">
                <Image
                  src="/images/coe/pediatric/hero-1.avif"
                  alt="Pediatric Centre of Excellence"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 2: TRUST BAR
           ══════════════════════════════════════════════════════ */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-item">
            <div className="trust-number">5,000+</div>
            <div className="trust-label">Children Treated</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">3,000+</div>
            <div className="trust-label">Newborns Cared For</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">20+</div>
            <div className="trust-label">Years Combined Experience</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">24/7</div>
            <div className="trust-label">Pediatric Emergency Care</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 3: ABOUT
           ══════════════════════════════════════════════════════ */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-text">
            <div className="eyebrow">About the Department</div>
            <h2 className="section-heading">Pediatric Hospital in Chengalpattu for Complete <br /> Child Care</h2>
            <p>
              SRM Global Hospitals is a pediatric hospital in Chengalpattu that offers quality healthcare for children from birth to adolescence. Our pediatrics department brings multiple specialties together under one roof, so families do not need to travel for every consult.
            </p>
            <p>
              Our pediatricians treat childhood illnesses, track growth, guide nutrition and provide vaccinations. For infants and premature babies, a dedicated neonatal unit offers specialised care around the clock.
            </p>
            <p>
              Every child is different. We choose gentle, age-appropriate methods and keep parents involved at each step of diagnosis and treatment, because a child&apos;s well being depends on the whole family feeling supported.
            </p>
            <p>
              Our commitment to clinical excellence shows in everyday details such as child-friendly rooms, clear explanations and a calm team. Parents can contact us for details about any service before their first visit.
            </p>
            <div className="about-features">
              <div className="about-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Birth to Adolescent Care
              </div>
              <div className="about-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                24/7 Pediatric Emergency
              </div>
            </div>
            <a className="btn btn-gradient btn-sm" style={{ marginTop: "24px" }} href="#cta-banner">
              Learn More
            </a>
          </div>
          <div className="about-image">
            <Image
              src="/images/coe/pediatric/team-new.avif"
              alt="Pediatric Centre of Excellence Team"
              width={600}
              height={450}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 4: SUB-SPECIALTIES
           ══════════════════════════════════════════════════════ */}
      <section className="subspecialties">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Specialities</div>
            <h2 className="section-heading">Pediatric Specialities and Services</h2>
            <p className="section-sub">
              Specialised care for children presenting with common and complex needs, all in one department.
            </p>
          </div>
          <div className="subspec-grid">
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h3>General Pediatrics</h3>
              <p>
                Routine checkups, vaccinations and everyday childhood illnesses managed by an experienced pediatrician who follows your child from infancy through the teenage years.
              </p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Neonatology</h3>
              <p>
                Dedicated care for newborns, premature infants and low-birth-weight babies in a neonatal unit with round-the-clock nursing support.
              </p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Pediatric Critical Care</h3>
              <p>
                Close monitoring and rapid treatment for children with severe or sudden illness, supported by trained critical care staff.
              </p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3>Pediatric Endocrinology</h3>
              <p>
                Assessment of growth concerns, hormone problems and diabetes in children, with dietary advice for families.
              </p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
              </div>
              <h3>Pediatric Surgery</h3>
              <p>
                Surgery for children, planned with child-friendly anaesthesia and careful recovery support for the child and the family.
              </p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Pediatric Gastroenterology</h3>
              <p>
                Paediatric gastroenterology care for feeding difficulties, stomach pain and digestive disorders, with guidance on nutrition and diet.
              </p>
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
            <h2 className="section-heading">Childhood Conditions We Treat</h2>
            <p className="section-sub">
              From a first fever to minor injuries, our doctor team treats the conditions parents worry about most.
            </p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                </svg>
              </div>
              <div>
                <h3>Fever and Infections</h3>
                <p>Evaluation and treatment of viral and bacterial infections in infants and children, with clear advice on home care.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                </svg>
              </div>
              <div>
                <h3>Cough, Cold and Asthma</h3>
                <p>Care for wheezing, breathing difficulty and recurring respiratory infections, including long-term asthma management.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div>
                <h3>Diarrhoea and Dehydration</h3>
                <p>Prompt treatment to restore fluids and protect young children from complications that can develop quickly.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div>
                <h3>Growth and Development</h3>
                <p>Assessment of delayed milestones, short stature and weight concerns, with counselling for parents.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3>Allergies and Skin Problems</h3>
                <p>Diagnosis and treatment of rashes, food allergies and eczema, including allergy screening where required.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <div>
                <h3>Minor Injuries</h3>
                <p>Quick care for cuts, falls, fractures and other minor injuries, with a surgery team available when needed.</p>
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
            <div className="eyebrow">Our Specialists</div>
            <h2 className="section-heading">Meet Our Pediatricians</h2>
            <p className="section-sub">Consult our trained pediatricians at SRM Global Hospitals.</p>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <Image
                    src="/images/specialties/paediatrics/dr-s-satyamanasa- gayatri-vinay.png"
                    alt="Dr. S. Satyamanasa Gayatri Vinay"
                    width={122}
                    height={122}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">Dr. S. Satyamanasa Gayatri Vinay</div>
                <div className="doctor-designation">SENIOR CONSULTANT, PAEDIATRICS</div>
                <div className="doctor-quals">MBBS, DNB, MNAMS</div>
                <a className="btn btn-outline-purple btn-sm" href="#cta-banner">
                  Book Appointment
                </a>
              </div>
            </div>

            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <Image
                    src="/images/specialties/paediatrics/dr-deepa-ganapathi.png"
                    alt="Dr. Deepa Ganapathi"
                    width={122}
                    height={122}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">Dr. Deepa Ganapathi</div>
                <div className="doctor-designation">CONSULTANT, PAEDIATRICS</div>
                <div className="doctor-quals">MBBS, MD, DNB</div>
                <a className="btn btn-outline-purple btn-sm" href="#cta-banner">
                  Book Appointment
                </a>
              </div>
            </div>

            <div className="doctor-card">
              <div className="doctor-photo">
                <div className="doctor-photo-circle">
                  <Image
                    src="/images/specialties/paediatrics/dr-parimelazhagan.png"
                    alt="Dr. Parimelazhagan. R"
                    width={122}
                    height={122}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="doctor-info">
                <div className="doctor-name">Dr. Parimelazhagan. R</div>
                <div className="doctor-designation">CONSULTANT, PAEDIATRICS</div>
                <div className="doctor-quals">MBBS, DNB</div>
                <a className="btn btn-outline-purple btn-sm" href="#cta-banner">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 7: PROCEDURES & TREATMENTS (TABS)
           ══════════════════════════════════════════════════════ */}
      <section className="procedures" id="procedures">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Procedures</div>
            <h2 className="section-heading">Pediatric Procedures and Treatments</h2>
            <p className="section-sub">From prevention to surgery, each procedure is explained clearly to parents.</p>
          </div>
          <div className="tabs-nav">
            <button
              className={`tab-btn ${activeTab === "preventive" ? "active" : ""}`}
              type="button"
              onClick={() => setActiveTab("preventive")}
            >
              Preventive Care
            </button>
            <button
              className={`tab-btn ${activeTab === "diagnosis" ? "active" : ""}`}
              type="button"
              onClick={() => setActiveTab("diagnosis")}
            >
              Diagnosis and Treatment
            </button>
            <button
              className={`tab-btn ${activeTab === "surgery" ? "active" : ""}`}
              type="button"
              onClick={() => setActiveTab("surgery")}
            >
              Emergency and Surgery
            </button>
          </div>

          <div className={`tab-panel ${activeTab === "preventive" ? "active" : ""}`} id="tab-preventive">
            <div className="tab-image">
              <Image
                src="/images/coe/pediatric/preventive-care.avif"
                alt="Preventive Care"
                width={600}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="tab-content">
              <h3>Preventive Care</h3>
              <p>
                Preventive care keeps children healthy at every age. Our clinic follows a recommended schedule for immunisation and checkups.
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Vaccinations and immunisation
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Growth and development monitoring
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Newborn and vision screening
                </li>
              </ul>
              <a className="btn btn-gradient btn-sm" href="#cta-banner">
                Book a Consultation
              </a>
            </div>
          </div>

          <div className={`tab-panel ${activeTab === "diagnosis" ? "active" : ""}`} id="tab-diagnosis">
            <div className="tab-image">
              <Image
                src="/images/coe/pediatric/diagnosis-and-treatment.png"
                alt="Diagnosis and Treatment"
                width={600}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="tab-content">
              <h3>Diagnosis and Treatment</h3>
              <p>
                Accurate diagnosis comes first. Our pediatricians examine, test and then plan treatment suited to the child&apos;s age.
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Blood tests and imaging
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Allergy and nutrition assessment
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Inpatient and outpatient treatment
                </li>
              </ul>
              <a className="btn btn-gradient btn-sm" href="#cta-banner">
                Book a Consultation
              </a>
            </div>
          </div>

          <div className={`tab-panel ${activeTab === "surgery" ? "active" : ""}`} id="tab-surgery">
            <div className="tab-image">
              <Image
                src="/images/coe/pediatric/emergency-and-surgery.avif"
                alt="Emergency and Surgery"
                width={600}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="tab-content">
              <h3>Emergency and Surgery</h3>
              <p>
                When a child needs urgent attention or an operation, trained teams are equipped to act quickly.
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Pediatric emergency treatment
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Pediatric surgery
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Neonatal intensive care
                </li>
              </ul>
              <a className="btn btn-gradient btn-sm" href="#cta-banner">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 8: TECHNOLOGY / FACILITIES
           ══════════════════════════════════════════════════════ */}
      <section className="technology" id="technology">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Technology</div>
            <h2 className="section-heading">Modern Facilities Built for Children</h2>
            <p className="section-sub">Our facilities are equipped to ensure safe, comfortable care for every age group.</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-card-img">
                <Image
                  src="/images/coe/pediatric/paediatric-emergency-care.avif"
                  alt="Pediatric Emergency Care"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="tech-card-body">
                <h3>Pediatric Emergency Care</h3>
                <p>An emergency department equipped for acute childhood illnesses and injuries, open 24/7.</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card-img">
                <Image
                  src="/images/coe/pediatric/neonatal-care-unit.avif"
                  alt="Neonatal Care Unit"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="tech-card-body">
                <h3>Neonatal Care Unit</h3>
                <p>Intensive support for premature infants, with trained nurses and constant monitoring.</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card-img">
                <Image
                  src="/images/coe/pediatric/pediatric-diagnostics.avif"
                  alt="Pediatric Diagnostics"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="tech-card-body">
                <h3>Pediatric Diagnostics</h3>
                <p>On-site laboratory and imaging for faster results and fewer visits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 9: CHILD HEALTH
           ══════════════════════════════════════════════════════ */}
      <section className="child-health" id="child-health">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Child Health</div>
            <h2 className="section-heading">Protecting Your Child&apos;s Health Every Year</h2>
            <p className="section-sub">Simple habits support a child&apos;s growth and well being.</p>
          </div>
          <div className="ch-list">
            <div className="ch-item">
              Keep every vaccination on time and ask your pediatrician for the schedule required for your child&apos;s age.
            </div>
            <div className="ch-item">
              Offer balanced nutrition with enough proteins, fruit and vegetables for healthy growth.
            </div>
            <div className="ch-item">
              Book regular screening and growth checks, even when your child seems well.
            </div>
            <div className="ch-item">
              Visit a doctor early when fever, breathing trouble or poor feeding lasts more than a day.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 10: PATIENT / PARENT STORIES
           ══════════════════════════════════════════════════════ */}
      <section className="stories">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Patient Stories</div>
            <h2 className="section-heading">Parent Stories</h2>
            <p className="section-sub">Families share their experience with our pediatric team.</p>
          </div>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-quote-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className="story-text">
                <span className="placeholder">[Verified parent testimonial to be added with consent]</span>
              </p>
              <div className="story-author">
                <div className="story-avatar">PS</div>
                <div>
                  <div className="story-name">
                    <span className="placeholder">[Parent name]</span>
                  </div>
                  <div className="story-procedure">
                    <span className="placeholder">[Treatment]</span>
                  </div>
                  <div className="story-stars">
                    <svg viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 11: WHY CHOOSE US
           ══════════════════════════════════════════════════════ */}
      <section className="why-choose">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Why Choose Us</div>
            <h2 className="section-heading">Why Choose SRM for Pediatric Care</h2>
            <p className="section-sub">Reasons families choose us for providing care close to home.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>One Roof</h3>
              <p>Multiple specialties, diagnostics and pharmacy services in one place, so families avoid repeated trips.</p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Trained Team</h3>
              <p>Dedicated pediatricians, nurses and counselling support who understand how children respond to treatment.</p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>24/7 Emergency</h3>
              <p>Round-the-clock care for urgent childhood illnesses and minor injuries, every day of the year.</p>
            </div>

            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Family Support</h3>
              <p>Clear guidance and counselling for parents, so you always know the next step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 12: CTA BANNER
           ══════════════════════════════════════════════════════ */}
      <section className="cta-banner" id="cta-banner">
        <div className="container">
          <div className="cta-text">
            <h2>Book Your Pediatric Consultation</h2>
            <p>Share your child&apos;s details and choose a date. Our team will contact you to confirm the appointment.</p>
            <a className="cta-phone" href="tel:+918925856353">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 8925856353
            </a>
          </div>
          <form className="cta-form" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Parent name" aria-label="Parent name" required />
            <input type="tel" placeholder="Phone number" aria-label="Phone number" required />
            <select required defaultValue="Pediatrics" aria-label="Department">
              <option value="" disabled>Select Department</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Neonatology">Neonatology</option>
              <option value="Pediatric Surgery">Pediatric Surgery</option>
            </select>
            <input type="date" aria-label="Preferred date" required />
            {formSubmitted ? (
              <div style={{ color: "#2d6a4f", fontWeight: 600, padding: "12px 0", gridColumn: "1 / -1" }}>
                ✓ Consultation Request Received. Our pediatric care team will contact you shortly.
              </div>
            ) : (
              <button type="submit" className="btn btn-gradient">
                Book Appointment
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            )}
          </form>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 13: HEALTH ARTICLES
           ══════════════════════════════════════════════════════ */}
      <section className="articles">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Health Articles</div>
            <h2 className="section-heading">Pediatric Health Articles</h2>
            <p className="section-sub">Practical reading for parents.</p>
          </div>
          <div className="articles-grid">
            <div className="article-card">
              <div className="article-img">
                <Image
                  src="/images/coe/pediatric/article-1.avif"
                  alt="Vaccination Guide for Parents"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="article-body">
                <span className="article-tag">Prevention</span>
                <h3>Vaccination Guide for Parents</h3>
                <p>What to expect at each visit.</p>
                <div className="article-meta">
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            <div className="article-card">
              <div className="article-img">
                <Image
                  src="/images/coe/pediatric/article-2.avif"
                  alt="Building a Healthy Plate for Kids"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="article-body">
                <span className="article-tag">Nutrition</span>
                <h3>Building a Healthy Plate for Kids</h3>
                <p>Proteins and meals for growth.</p>
                <div className="article-meta">
                  <span>4 min read</span>
                </div>
              </div>
            </div>

            <div className="article-card">
              <div className="article-img">
                <Image
                  src="/images/coe/pediatric/article-3.avif"
                  alt="When to Visit a Pediatrician"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="article-body">
                <span className="article-tag">Care</span>
                <h3>When to Visit a Pediatrician</h3>
                <p>Signs that need a doctor.</p>
                <div className="article-meta">
                  <span>4 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 14: FAQS
           ══════════════════════════════════════════════════════ */}
      <section className="faq">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">FAQs</div>
            <h2 className="section-heading">Pediatric Care FAQs</h2>
          </div>
          <div className="faq-list">
            <div className={`faq-item ${openFaqIndex === 0 ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <h3>When should I visit a pediatrician?</h3>
                <div className="faq-toggle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Visit for fever, cough, vomiting, poor feeding, rashes or slow growth, and for routine checkups and vaccinations. Early consultation often prevents a minor illness from becoming serious.
                </div>
              </div>
            </div>

            <div className={`faq-item ${openFaqIndex === 1 ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h3>What does a pediatric hospital offer under one roof?</h3>
                <div className="faq-toggle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Outpatient consultations, inpatient care, neonatal support, diagnostics, surgery and emergency treatment, with several pediatric specialities working together.
                </div>
              </div>
            </div>

            <div className={`faq-item ${openFaqIndex === 2 ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <h3>Do you offer vaccinations?</h3>
                <div className="faq-toggle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Yes. Preventive care includes immunisation as per the recommended schedule, along with growth checks and nutrition advice at each visit.
                </div>
              </div>
            </div>

            <div className={`faq-item ${openFaqIndex === 3 ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <h3>Is newborn care available?</h3>
                <div className="faq-toggle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Yes. Our neonatal unit cares for premature and low-birth-weight infants, with trained staff and modern equipment.
                </div>
              </div>
            </div>

            <div className={`faq-item ${openFaqIndex === 4 ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(4)}>
                <h3>Is pediatric emergency care available 24/7?</h3>
                <div className="faq-toggle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Yes. Our emergency department is open day and night for children presenting with fever, breathing trouble, injuries or sudden illness.
                </div>
              </div>
            </div>

            <div className={`faq-item ${openFaqIndex === 5 ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFaq(5)}>
                <h3>How do I book an appointment?</h3>
                <div className="faq-toggle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Call +91 8925856353 or use the form above. Bring previous records, vaccination details and any current medicines so the pediatrician can assess your child quickly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           SECTION 15: STICKY CTA
           ══════════════════════════════════════════════════════ */}
      <div className={`sticky-cta ${isStickyVisible ? "visible" : ""}`} id="stickyCta">
        <div className="container">
          <div className="sticky-cta-text">
            Pediatric Centre of Excellence <span>SRM Global Hospitals, Chennai</span>
          </div>
          <div className="sticky-cta-actions">
            <a href="tel:+918925856353" className="sticky-cta-phone">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 8925856353
            </a>
            <a href="#cta-banner" className="btn btn-gradient btn-sm">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
