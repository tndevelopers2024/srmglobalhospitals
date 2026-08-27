"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  const [activeTab, setActiveTab] = useState("normal-delivery");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Centre for Women's Health & Wellness",
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
          const targetCounts = [6000, 98, 40, 24];

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
      setFormData({ name: "", phone: "", department: "Centre for Women's Health & Wellness", date: "" });
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
              <span>Centre for Women&apos;s Health &amp; Wellness</span>
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>Center of Excellence</span>
            </div>
            <h1>Gynaecology Hospital in Chengalpattu</h1>
            <p className="hero-tagline">Complete obstetrics and gynaecology care with safe deliveries, high-risk pregnancy management, fertility support, and gynaecological surgery for women across all life stages.</p>
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
                <span>Women&apos;s Health Team Photo</span>
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
            <div className="trust-label">Deliveries Conducted</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">{counts[1]}%</div>
            <div className="trust-label">Safe Delivery Rate</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">{counts[2]}+</div>
            <div className="trust-label">Years Combined Exp.</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">{counts[3]}/7</div>
            <div className="trust-label">Obstetric Emergency</div>
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
            <h2 className="section-heading">Gynaecology Hospital in Chengalpattu for Women&apos;s Health and Maternity Care</h2>
            <p>The Centre for Women&apos;s Health and Wellness at SRM Global Hospitals provides the full spectrum of obstetrics and gynaecology services, from routine antenatal care and safe deliveries to complex gynaecological surgeries and fertility treatments. Located in Kattankulathur on GST Road, the department serves pregnant women and families across Chengalpattu, Guduvancheri, Tambaram, and surrounding areas.</p>
            <p>The department is staffed by obstetricians and gynaecologists with qualifications including DNB, MRCOG, FACOG, and FMAS, ensuring that both routine and high-risk cases are managed by specialists with the right training. A dedicated labour ward, neonatal ICU, and round-the-clock obstetric emergency coverage support safe outcomes for mothers and babies.</p>
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
                24/7 Labour Ward
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
              Women&apos;s Health Team
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
            <p className="section-sub">Dedicated teams covering every area of women&apos;s health from adolescence through menopause.</p>
          </div>
          <div className="subspec-grid">
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Obstetrics &amp; Maternity Care</h3>
              <p>Complete pregnancy care including antenatal check-ups, routine and high-risk pregnancy management, normal delivery, caesarean section, and postnatal care. Structured antenatal care programmes guide mothers through each trimester.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <h3>Gynaecological Surgery</h3>
              <p>Laparoscopic and open surgical management of fibroids, ovarian cysts, endometriosis, pelvic inflammatory disease, and abnormal uterine bleeding. Laparoscopic hysterectomy prioritised for faster recovery.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
              </div>
              <h3>Reproductive Medicine &amp; Fertility</h3>
              <p>Evaluation and treatment of female and male infertility, recurrent pregnancy loss, ovulation disorders, and hormonal imbalance. Fertility treatments including ovulation induction, IUI, and IVF referral pathways.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>Urogynaecology</h3>
              <p>Specialised care for urinary incontinence, pelvic organ prolapse, overactive bladder, and pelvic floor disorders in women. Both surgical and non-surgical management options available.</p>
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
            <h2 className="section-heading">Conditions We Treat</h2>
            <p className="section-sub">Comprehensive care for gynaecological and obstetric conditions across all stages of a woman&apos;s life.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
              <div><h3>High-Risk Pregnancy</h3><p>Management of pregnancies complicated by gestational diabetes, preeclampsia, placenta previa, multiple pregnancies, recurrent pregnancy loss, and maternal age-related risks. Close monitoring ensures safe outcomes for mother and baby.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div><h3>Menstrual Disorders</h3><p>Irregular periods, heavy bleeding, painful periods, and absent periods evaluated through hormonal testing, ultrasound, and endometrial assessment. Treatment includes medication, hormonal therapy, and surgical intervention.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
              <div><h3>Fibroids &amp; Ovarian Cysts</h3><p>Uterine fibroids and ovarian cysts causing pain, heavy bleeding, or fertility problems. Management ranges from monitoring and medication to laparoscopic myomectomy, cystectomy, or hysterectomy.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
              <div><h3>Endometriosis</h3><p>Chronic pelvic pain, painful periods, and fertility challenges caused by endometrial tissue growing outside the uterus. Managed with medication, hormonal therapy, and laparoscopic excision surgery.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div><h3>Cervical &amp; Gynaecological Cancers</h3><p>Cervical cancer screening with Pap smear and HPV testing. Early detection and management of cervical, ovarian, and uterine cancers in coordination with oncology. Regular cervical health screenings recommended for women above 25.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
              <div><h3>Infertility</h3><p>Structured evaluation of female and male factors affecting conception. Treatment spans ovulation induction, IUI, surgical correction, and referral for advanced fertility treatments.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
              <div><h3>Adolescent Gynaecology</h3><p>Gynaecological care for young girls and teenagers including menstrual irregularities, PCOS, delayed puberty, and reproductive health education. Age-appropriate evaluation and patient education.</p></div>
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
            <p className="section-sub">Qualified obstetricians and gynaecologists delivering comprehensive women&apos;s health care.</p>
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
                <div className="doctor-name">Dr. R.K. Vidhyalakshmi</div>
                <div className="doctor-designation">SENIOR CONSULTANT, OBG</div>
                <div className="doctor-quals">MBBS, DNB, FMAS</div>
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
                <div className="doctor-name">Dr. Harini Sivamani</div>
                <div className="doctor-designation">CONSULTANT, OBG &amp; UROGYNAECOLOGY</div>
                <div className="doctor-quals">MBBS, DNB, MRCOG, FACOG, FMAS</div>
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
                <div className="doctor-name">Dr. P. Mathumathi</div>
                <div className="doctor-designation">CONSULTANT, OBG</div>
                <div className="doctor-quals">MBBS, DNB, MS, DNB</div>
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
                <div className="doctor-name">Dr. Karthiga Prabhu J</div>
                <div className="doctor-designation">VISITING CONSULTANT, OBG</div>
                <div className="doctor-quals">MBBS, MD, FICOG, CIMP</div>
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
            <p className="section-sub">Obstetric and gynaecological procedures performed by our specialist team.</p>
          </div>
          <div className="tabs-nav">
            <button
              type="button"
              className={`tab-btn ${activeTab === "normal-delivery" ? "active" : ""}`}
              onClick={() => setActiveTab("normal-delivery")}
            >
              Normal Delivery
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "csection" ? "active" : ""}`}
              onClick={() => setActiveTab("csection")}
            >
              Caesarean Section
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "lap-gynae" ? "active" : ""}`}
              onClick={() => setActiveTab("lap-gynae")}
            >
              Laparoscopic Surgery
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "fertility" ? "active" : ""}`}
              onClick={() => setActiveTab("fertility")}
            >
              Fertility Treatment
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "cervical" ? "active" : ""}`}
              onClick={() => setActiveTab("cervical")}
            >
              Cervical Screening
            </button>
          </div>

          {activeTab === "normal-delivery" && (
            <div className="tab-panel active" id="tab-normal-delivery">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Normal Delivery Suite
                </div>
              </div>
              <div className="tab-content">
                <h3>Normal &amp; Assisted Delivery</h3>
                <p>Vaginal delivery supported by experienced obstetricians and midwifery staff. Labour monitoring, epidural pain relief, and assisted delivery available when needed. Every delivery is planned with the mother&apos;s preferences and safety as the priority.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Dedicated labour and delivery suites</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Epidural and pain management options</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Continuous foetal monitoring</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Neonatal resuscitation team on standby</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "csection" && (
            <div className="tab-panel active" id="tab-csection">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: C-Section OT
                </div>
              </div>
              <div className="tab-content">
                <h3>Caesarean Section</h3>
                <p>Planned and emergency caesarean section for high-risk pregnancies, foetal distress, malpresentation, and other obstetric indications. Performed in a dedicated OT with neonatal team present.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Emergency C-section available 24/7</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Spinal and general anaesthesia options</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Skin-to-skin contact encouraged post-delivery</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Structured post-operative recovery protocol</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "lap-gynae" && (
            <div className="tab-panel active" id="tab-lap-gynae">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Laparoscopic Surgery
                </div>
              </div>
              <div className="tab-content">
                <h3>Laparoscopic Gynaecological Surgery</h3>
                <p>Minimally invasive surgery for fibroids, ovarian cysts, endometriosis, ectopic pregnancy, and total laparoscopic hysterectomy. Smaller incisions, less blood loss, shorter hospital stay, and faster return to daily activity.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Laparoscopic hysterectomy</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Ovarian cystectomy and myomectomy</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Endometriosis excision</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Ectopic pregnancy management</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "fertility" && (
            <div className="tab-panel active" id="tab-fertility">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Fertility Consultation
                </div>
              </div>
              <div className="tab-content">
                <h3>Fertility Evaluation &amp; Treatment</h3>
                <p>Comprehensive infertility workup including hormonal profiles, ovulation tracking, tubal patency testing, and semen analysis. Treatment includes ovulation induction, IUI, and surgical correction of tubal or uterine abnormalities.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Complete male and female fertility workup</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Ovulation induction and IUI</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Surgical correction of tubal blockage</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Referral pathway for IVF when required</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "cervical" && (
            <div className="tab-panel active" id="tab-cervical">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Cervical Screening
                </div>
              </div>
              <div className="tab-content">
                <h3>Cervical Screening &amp; Colposcopy</h3>
                <p>Pap smear, HPV testing, and colposcopy for early detection of cervical abnormalities. Women above 25 are encouraged to undergo regular cervical health screenings. Abnormal results managed with biopsy, LEEP, or referral to gynaecological oncology.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Pap smear and liquid-based cytology</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> HPV testing</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Colposcopy with guided biopsy</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> LEEP for cervical pre-cancer</li>
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
            <h2 className="section-heading">Built for Safe Deliveries and Precise Gynaecological Care</h2>
            <p className="section-sub">Infrastructure designed for the safety of mothers, babies, and women undergoing gynaecological treatment.</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Labour Ward</div>
              <div className="tech-card-body">
                <h3>Labour Ward &amp; Delivery Suites</h3>
                <p>Dedicated labour rooms with continuous foetal monitoring, epidural capability, and immediate access to the operating theatre for emergency caesarean section. Designed for privacy, comfort, and safe childbirth.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: NICU</div>
              <div className="tech-card-body">
                <h3>Neonatal ICU (NICU)</h3>
                <p>Level II NICU with incubators, phototherapy, CPAP, and monitoring for premature and high-risk newborns. Neonatal team available round the clock for immediate resuscitation and stabilisation.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Gynae OT</div>
              <div className="tech-card-body">
                <h3>Gynaecological OT &amp; Endoscopy</h3>
                <p>Fully equipped operating theatre for open and laparoscopic gynaecological surgeries. Hysteroscopy suite for diagnostic and operative procedures including polypectomy, fibroid resection, and septal correction.</p>
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
            <p className="section-sub">Real experiences from women who received obstetric and gynaecological care at SRM Global Hospitals.</p>
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
            <p className="section-sub">The hospital a woman chooses for her pregnancy and gynaecological care shapes her experience and outcomes.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>OBG Under One Roof</h3>
              <p>Antenatal care, safe deliveries, gynaecological surgery, fertility support, and urogynaecology available in one department. No fragmented care or external referrals.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>24/7 Obstetric Emergency</h3>
              <p>Labour, delivery complications, and obstetric emergencies managed round the clock. Obstetricians, anaesthesiologists, and neonatal teams are on-site for immediate response.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h3>Internationally Trained Specialists</h3>
              <p>The team includes obstetricians with MRCOG (UK), FACOG (USA), FMAS, and FICOG credentials. Both routine and complex cases are managed with confidence.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
              </div>
              <h3>High-Risk Pregnancy Expertise</h3>
              <p>Pregnancies complicated by diabetes, hypertension, placenta previa, and recurrent pregnancy loss are managed by a senior consultant team with structured monitoring and multidisciplinary support.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <h3>Comprehensive Fertility Support</h3>
              <p>Couples struggling with infertility receive a structured evaluation and treatment pathway from initial consultation through ovulation induction, IUI, and surgical correction.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
              </div>
              <h3>Insurance &amp; TPA Support</h3>
              <p>Cashless treatment with all major insurance providers and government health schemes. Maternity packages and delivery-related expenses covered under most plans.</p>
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
            <h2>Book Your Gynaecology Consultation</h2>
            <p>Whether you are planning a pregnancy, managing a gynaecological condition, or seeking a second opinion, our women&apos;s health team is ready to help. Book a consultation or call us directly.</p>
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
                  <option value="Centre for Women's Health & Wellness">Centre for Women&apos;s Health &amp; Wellness</option>
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
            <p className="section-sub">Practical information for women about pregnancy, gynaecological health, and preventive care.</p>
          </div>
          <div className="articles-grid">
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Pregnancy</span>
                <h3>What to Expect During Each Trimester of Pregnancy</h3>
                <p>A practical guide to the physical changes, tests, and milestones in each stage of pregnancy, from the first scan to delivery preparation.</p>
                <div className="article-meta">
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Fertility</span>
                <h3>PCOS and Fertility: What Every Woman Should Know</h3>
                <p>PCOS is one of the most common causes of irregular periods and difficulty conceiving. Here is how it is diagnosed and what treatment options are available.</p>
                <div className="article-meta">
                  <span>4 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Screening</span>
                <h3>Cervical Cancer Screening: When to Start and How Often</h3>
                <p>Regular Pap smears and HPV testing can catch cervical changes early. Here is the recommended screening schedule.</p>
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
            <p className="section-sub">Common questions about gynaecology and maternity services at SRM Global Hospitals.</p>
          </div>
          <div className="faq-list">
            {[
              {
                q: "1. Is there a gynaecology hospital in Chengalpattu?",
                a: "Yes. SRM Global Hospitals in Kattankulathur operates a full Centre for Women's Health and Wellness with obstetrics, gynaecology, fertility, and urogynaecology services. Located on GST Road, the hospital is accessible from Chengalpattu, Guduvancheri, Maraimalai Nagar, and surrounding areas. Obstetricians and gynaecologists are available for consultations, deliveries, and emergency obstetric care.",
              },
              {
                q: "2. What gynaecological conditions are treated at SRM Global?",
                a: "The department treats menstrual disorders, fibroids, ovarian cysts, endometriosis, PCOS, pelvic inflammatory disease, cervical abnormalities, urinary incontinence, pelvic organ prolapse, infertility, and gynaecological cancers. Both medical and surgical management options are available.",
              },
              {
                q: "3. Does SRM Global handle high-risk pregnancies?",
                a: "Yes. The department manages pregnancies complicated by gestational diabetes, preeclampsia, placenta previa, multiple pregnancies, recurrent pregnancy loss, and advanced maternal age. A senior consultant team provides structured monitoring with frequent scans, blood work, and multidisciplinary support.",
              },
              {
                q: "4. Is normal delivery supported at SRM Global Hospitals?",
                a: "Yes. Normal vaginal delivery is actively encouraged wherever it is safe for mother and baby. Labour monitoring, epidural pain relief, and assisted delivery options are available. The labour ward operates 24/7 with experienced obstetricians, anaesthesiologists, and a neonatal team on standby.",
              },
              {
                q: "5. What fertility services are available?",
                a: "The department offers complete infertility evaluation including hormonal testing, ovulation tracking, tubal patency testing, and semen analysis. Treatment includes ovulation induction, intrauterine insemination (IUI), and surgical correction. Referral pathways for IVF are available for couples who require advanced fertility treatments.",
              },
              {
                q: "6. Does the department perform laparoscopic gynaecological surgery?",
                a: "Yes. Laparoscopic myomectomy, ovarian cystectomy, endometriosis excision, and total laparoscopic hysterectomy are performed by trained gynaecological surgeons. Minimally invasive techniques are prioritised for faster recovery, less pain, and shorter hospital stays.",
              },
              {
                q: "7. Is cervical cancer screening available?",
                a: "Yes. The department offers Pap smear, HPV testing, and colposcopy for cervical cancer screening. Women above 25 are recommended to undergo regular cervical health screenings. Abnormal results are managed with biopsy, LEEP, or referral to gynaecological oncology.",
              },
              {
                q: "8. Is there a neonatal ICU for premature or high-risk babies?",
                a: "Yes. The hospital has a Level II NICU with incubators, phototherapy, CPAP, and monitoring for premature and high-risk newborns. A neonatal team is available round the clock for immediate resuscitation and care after delivery.",
              },
              {
                q: "9. How do I reach SRM Global Hospitals for a gynaecology consultation?",
                a: "SRM Global Hospitals is located on GST Road in Kattankulathur, near SRM University. By road, it is approximately 10 km from Chengalpattu, 5 km from Guduvancheri, and 18 km from Tambaram. Call +91 96444 96444 to book an appointment or for obstetric emergencies.",
              },
              {
                q: "10. Does SRM Global accept insurance for maternity and gynaecology treatment?",
                a: "Yes. Cashless treatment is available with all major insurance companies and TPAs. Government health schemes are also accepted. Maternity packages covering antenatal care, delivery, and postnatal stay are supported under most plans. A dedicated desk handles pre-authorisation and documentation.",
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
          <div className="sticky-cta-text">Centre for Women&apos;s Health &amp; Wellness <span>SRM Global Hospitals, Chennai</span></div>
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
