"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  const [activeTab, setActiveTab] = useState("knee-replace");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Centre for Bone Joint Spine Care",
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
          const targetCounts = [4000, 97, 45, 24];

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
      setFormData({ name: "", phone: "", department: "Centre for Bone Joint Spine Care", date: "" });
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
              <span>Centre for Bone Joint Spine Care</span>
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>Center of Excellence</span>
            </div>
            <h1>Orthopaedic Hospital in Chengalpattu</h1>
            <p className="hero-tagline">Bone, joint, and spine care with joint replacement, arthroscopy, sports medicine, and trauma surgery for Chengalpattu and surrounding areas.</p>
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
                <span>Orthopaedics Team Photo</span>
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
            <div className="trust-label">Ortho Surgeries</div>
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
            <div className="trust-label">Fracture &amp; Trauma</div>
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
            <h2 className="section-heading">Orthopaedic Hospital in Chengalpattu for Bone, Joint, and Spine Care</h2>
            <p>The Centre for Bone Joint Spine Care at SRM Global Hospitals covers the full range of orthopaedic conditions, from emergency fracture management and complex joint replacements to arthroscopic sports injury repair and paediatric orthopaedic care. Located in Kattankulathur on GST Road, the department serves patients across Chengalpattu, Guduvancheri, Tambaram, and the broader southern corridor.</p>
            <p>The department combines experienced orthopaedic surgeons, a dedicated physiotherapy and rehabilitation unit, and round-the-clock trauma coverage under one roof. Whether the case requires a total knee replacement, spinal fusion, or non-surgical management with bracing and therapy, every treatment plan begins with an accurate diagnosis and a clear discussion with the patient.</p>
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
                24/7 Fracture &amp; Trauma
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
              Orthopaedic Team
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
            <p className="section-sub">Specialised orthopaedic teams covering every area of bone, joint, and spine care.</p>
          </div>
          <div className="subspec-grid">
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Joint Replacement Surgery</h3>
              <p>Total knee replacement, total hip replacement, shoulder replacements, and revision joint replacement for patients with advanced arthritis, deformity, or failed previous surgery. Minimally invasive techniques used where appropriate for faster recovery.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <h3>Arthroscopy &amp; Sports Medicine</h3>
              <p>Keyhole surgery for ligament tears, cartilage damage, meniscal injuries, and rotator cuff repair. Platelet rich plasma (PRP) therapy and non-surgical rehabilitation protocols for athletes returning to sport.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
              </div>
              <h3>Spine Surgery</h3>
              <p>Surgical and non-surgical management of disc herniation, spinal stenosis, scoliosis, spinal fractures, and degenerative spine conditions. Minimally invasive spine surgery and open procedures available.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>Trauma &amp; Fracture Care</h3>
              <p>Round-the-clock emergency fracture fixation for road accidents, falls, and high-energy injuries. Internal fixation, external fixation, and polytrauma management by orthopaedic surgeons.</p>
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
            <h2 className="section-heading">Orthopaedic Conditions We Treat</h2>
            <p className="section-sub">Comprehensive care for musculoskeletal conditions affecting bones, joints, muscles, ligaments, and the spine.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div><h3>Arthritis &amp; Joint Degeneration</h3><p>Osteoarthritis of the knee, hip, and shoulder causing pain, stiffness, and reduced mobility. Treatment ranges from medication and physiotherapy for early stages to joint replacement surgery for advanced degeneration.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
              <div><h3>Bone Fractures &amp; Trauma</h3><p>Simple and complex fractures of the upper limb, lower limb, pelvis, and spine. Emergency fracture fixation available 24/7 with internal plating, nailing, and external fixation.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
              <div><h3>Ligament &amp; Sports Injuries</h3><p>ACL tears, PCL tears, meniscal injuries, rotator cuff tears, and ankle ligament injuries common in sports and accidents. Arthroscopic reconstruction and repair restore stability and function.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div><h3>Spinal Disc Disease</h3><p>Slipped disc, disc bulge, sciatica, and nerve compression causing back pain, leg pain, and numbness. Treatment includes medication, physiotherapy, and minimally invasive disc surgery when conservative measures fail.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
              <div><h3>Paediatric Orthopaedic Conditions</h3><p>Clubfoot, flat feet, limb deformities, bone infections, and fractures in children. Paediatric-specific treatment protocols ensure safe management of growing bones and joints.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
              <div><h3>Deformity Corrections</h3><p>Bow legs, knock knees, limb length discrepancy, and post-fracture malunion corrected through osteotomy and fixation techniques guided by precise imaging and alignment assessment.</p></div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div><h3>Shoulder &amp; Upper Limb Conditions</h3><p>Frozen shoulder, rotator cuff tears, shoulder dislocations, tennis elbow, and carpal tunnel syndrome. Treatment spans physiotherapy, injections, and arthroscopic or open surgical repair.</p></div>
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
            <p className="section-sub">Experienced orthopaedic surgeons delivering comprehensive bone, joint, and spine care.</p>
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
                <div className="doctor-name">Dr. Dilip Kumar Naidu E</div>
                <div className="doctor-designation">SENIOR CONSULTANT, ORTHOPAEDICS</div>
                <div className="doctor-quals">MBBS, MS</div>
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
                <div className="doctor-name">Dr. Prasad Dakshinamoorthy</div>
                <div className="doctor-designation">CONSULTANT, ORTHOPAEDICS</div>
                <div className="doctor-quals">MBBS, MS, FIJR, FIAA</div>
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
                <div className="doctor-name">Dr. Saravanan J</div>
                <div className="doctor-designation">CONSULTANT, ORTHOPAEDICS</div>
                <div className="doctor-quals">MBBS, MS</div>
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
                <div className="doctor-name">Dr. Arun Karthik R</div>
                <div className="doctor-designation">CONSULTANT, ORTHOPAEDICS</div>
                <div className="doctor-quals">MBBS, MS (Orthopaedics)</div>
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
            <p className="section-sub">Surgical and non-surgical procedures performed by the orthopaedic team.</p>
          </div>
          <div className="tabs-nav">
            <button
              type="button"
              className={`tab-btn ${activeTab === "knee-replace" ? "active" : ""}`}
              onClick={() => setActiveTab("knee-replace")}
            >
              Knee Replacement
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "hip-replace" ? "active" : ""}`}
              onClick={() => setActiveTab("hip-replace")}
            >
              Hip Replacement
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "arthroscopy" ? "active" : ""}`}
              onClick={() => setActiveTab("arthroscopy")}
            >
              Arthroscopic Surgery
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "spine-surg" ? "active" : ""}`}
              onClick={() => setActiveTab("spine-surg")}
            >
              Spine Surgery
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "fracture-fix" ? "active" : ""}`}
              onClick={() => setActiveTab("fracture-fix")}
            >
              Fracture Fixation
            </button>
          </div>

          {activeTab === "knee-replace" && (
            <div className="tab-panel active" id="tab-knee-replace">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Knee Replacement
                </div>
              </div>
              <div className="tab-content">
                <h3>Total Knee Replacement</h3>
                <p>Replacement of the damaged knee joint with a prosthetic implant to eliminate pain and restore movement. Performed for advanced knee arthritis, post-traumatic deformity, or failed conservative treatment. Computer-assisted navigation available for precise implant positioning.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Accurate implant alignment with navigation</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Minimally invasive approach for suitable cases</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Structured post-operative physiotherapy</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Long-term implant durability (15-20+ years)</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "hip-replace" && (
            <div className="tab-panel active" id="tab-hip-replace">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Hip Replacement
                </div>
              </div>
              <div className="tab-content">
                <h3>Total Hip Replacement</h3>
                <p>Replacement of the damaged hip joint for patients with severe hip arthritis, avascular necrosis, or hip fractures in the elderly. Anterior, posterior, and lateral surgical approaches used based on patient anatomy and surgeon assessment.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Multiple surgical approach options</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Bipolar and total hip options available</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Early mobilisation protocol</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Return to pain-free walking within weeks</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "arthroscopy" && (
            <div className="tab-panel active" id="tab-arthroscopy">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Arthroscopy
                </div>
              </div>
              <div className="tab-content">
                <h3>Arthroscopic Surgery</h3>
                <p>Keyhole surgery for ligament reconstruction (ACL, PCL), meniscal repair, cartilage restoration, rotator cuff repair, and shoulder stabilisation. Small incisions, camera-guided precision, and faster rehabilitation compared to open surgery.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> ACL and PCL reconstruction</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Meniscal repair and trimming</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Rotator cuff and labral repair</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Reduced scarring and faster recovery</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "spine-surg" && (
            <div className="tab-panel active" id="tab-spine-surg">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Spine Surgery
                </div>
              </div>
              <div className="tab-content">
                <h3>Spine Surgery</h3>
                <p>Surgical treatment for disc herniation, spinal stenosis, spondylolisthesis, spinal fractures, and deformity correction. Minimally invasive techniques including microdiscectomy and endoscopic spine surgery reduce tissue damage and hospital stay.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Microdiscectomy for slipped disc</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Spinal decompression and fusion</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Fracture stabilisation</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Deformity correction (scoliosis, kyphosis)</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "fracture-fix" && (
            <div className="tab-panel active" id="tab-fracture-fix">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Fracture Surgery
                </div>
              </div>
              <div className="tab-content">
                <h3>Fracture Fixation &amp; Trauma Surgery</h3>
                <p>Emergency and elective surgical fixation of fractures using plates, screws, nails, and external fixators. Polytrauma cases managed with damage control orthopaedics principles, stabilising life-threatening injuries first before definitive fracture repair.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Internal fixation (plating, nailing)</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> External fixation for complex injuries</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Pelvic and acetabular fracture surgery</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Polytrauma damage control protocols</li>
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
            <h2 className="section-heading">Built for Precision Orthopaedic Care</h2>
            <p className="section-sub">Advanced infrastructure designed for accurate surgical outcomes and safe patient recovery.</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: OT</div>
              <div className="tech-card-body">
                <h3>Advanced Operating Theatres</h3>
                <p>Laminar airflow OTs with arthroscopy towers, image intensifiers (C-arm), and navigation systems for joint replacement and spine surgery. Strict infection control protocols for implant-based procedures.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Rehab</div>
              <div className="tech-card-body">
                <h3>Physiotherapy &amp; Rehabilitation</h3>
                <p>Dedicated rehabilitation unit with trained physiotherapists for post-operative recovery, sports injury rehabilitation, and chronic pain management. Early mobilisation protocols for joint replacement and fracture patients.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Imaging</div>
              <div className="tech-card-body">
                <h3>Imaging &amp; Diagnostics</h3>
                <p>On-site digital X-ray, CT, and MRI for immediate fracture assessment, pre-surgical planning, and spinal imaging. Weight-bearing X-rays and full-limb alignment scans available for joint replacement planning.</p>
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
            <p className="section-sub">Real experiences from patients who received orthopaedic care at SRM Global Hospitals.</p>
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
            <p className="section-sub">The right orthopaedic team determines whether you recover fully or live with limitations.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>Full Spectrum Orthopaedic Centre</h3>
              <p>Joint replacement, arthroscopy, spine surgery, trauma care, sports medicine, and paediatric orthopaedics available under one roof. No external referrals needed for any orthopaedic subspecialty.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>24/7 Fracture &amp; Trauma Emergency</h3>
              <p>Emergency fracture fixation and polytrauma management available round the clock. Orthopaedic surgeons are on-site for immediate assessment, supported by anaesthesia, ICU, and blood bank services.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h3>Minimally Invasive Approach</h3>
              <p>Arthroscopic surgery, minimally invasive joint replacement, and endoscopic spine techniques are prioritised wherever clinically appropriate. Smaller incisions, less tissue damage, and faster return to activity.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <h3>Dedicated Rehabilitation</h3>
              <p>Structured physiotherapy programmes for post-operative patients, sports injury recovery, and chronic musculoskeletal conditions. Early mobilisation protocols are standard for every joint replacement.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
              </div>
              <h3>Insurance &amp; CMCHIS Support</h3>
              <p>Cashless treatment with all major insurance providers and TPAs. CMCHIS covers joint replacement, fracture fixation, ligament repairs, and spine procedures. A dedicated desk manages approvals and documentation.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Experienced Orthopaedic Surgeons</h3>
              <p>Every case is managed by qualified orthopaedic surgeons with subspecialty training in joint replacement, arthroscopy, spine, or trauma. Complex cases benefit from multidisciplinary discussion within the team.</p>
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
            <h2>Book Your Orthopaedic Consultation</h2>
            <p>Whether you are dealing with joint pain, a recent fracture, back pain, or a sports injury, our orthopaedic team is ready to help. Book a consultation or call us directly.</p>
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
                  <option value="Centre for Bone Joint Spine Care">Centre for Bone Joint Spine Care</option>
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
            <p className="section-sub">Practical information from our orthopaedic team about bone, joint, and spine health.</p>
          </div>
          <div className="articles-grid">
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Joint Replacement</span>
                <h3>Knee Replacement: What to Expect Before, During, and After</h3>
                <p>A clear guide to preparing for knee replacement, understanding the procedure, and following the rehabilitation plan for the best outcome.</p>
                <div className="article-meta">
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Sports Medicine</span>
                <h3>ACL Injury: When Surgery is Needed and When It Isn&apos;t</h3>
                <p>Not every ACL tear needs surgery. Here is how orthopaedic surgeons decide between reconstruction and conservative management.</p>
                <div className="article-meta">
                  <span>4 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Spine</span>
                <h3>Back Pain That Won&apos;t Go Away: When to See a Spine Specialist</h3>
                <p>Most back pain resolves on its own, but persistent pain, leg numbness, or weakness may signal a condition that needs evaluation.</p>
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
            <p className="section-sub">Common questions about orthopaedic services at SRM Global Hospitals.</p>
          </div>
          <div className="faq-list">
            {[
              {
                q: "1. Is there an orthopaedic hospital in Chengalpattu?",
                a: "Yes. SRM Global Hospitals in Kattankulathur operates a full Centre for Bone Joint Spine Care with joint replacement, arthroscopy, spine surgery, and trauma services. Located on GST Road, the hospital is accessible from Chengalpattu, Guduvancheri, Maraimalai Nagar, and surrounding areas. Orthopaedic surgeons are available for outpatient consultations and 24/7 emergency fracture care.",
              },
              {
                q: "2. What orthopaedic conditions are treated at SRM Global?",
                a: "The department treats arthritis, bone fractures, ligament tears, sports injuries, spinal disc disease, shoulder conditions, deformity corrections, paediatric orthopaedic conditions, and musculoskeletal infections. Both surgical and non-surgical orthopaedic treatments are available.",
              },
              {
                q: "3. Does SRM Global perform knee and hip replacement surgery?",
                a: "Yes. Total knee replacement, total hip replacement, partial knee replacement, shoulder replacements, and revision joint replacement procedures are performed by experienced orthopaedic surgeons. Computer-assisted navigation and minimally invasive techniques are used for precise implant positioning and faster recovery.",
              },
              {
                q: "4. Is arthroscopic surgery available for sports injuries?",
                a: "Yes. The department performs arthroscopic ACL reconstruction, PCL reconstruction, meniscal repair, rotator cuff repair, and shoulder stabilisation. Platelet rich plasma (PRP) therapy and structured sports rehabilitation are also available for athletes recovering from ligament tears and cartilage injuries.",
              },
              {
                q: "5. Does the department handle spine surgery?",
                a: "Yes. Spine surgery services cover disc herniation, spinal stenosis, scoliosis, spinal fractures, and degenerative spine conditions. Minimally invasive techniques including microdiscectomy are used where appropriate. Post-operative physiotherapy and spine rehabilitation support long-term recovery.",
              },
              {
                q: "6. Is emergency fracture care available 24/7?",
                a: "Yes. The orthopaedic department provides round-the-clock emergency fracture fixation for road accidents, falls, and high-energy trauma. Internal fixation, external fixation, and polytrauma management are available with surgical backup from anaesthesia, ICU, and blood bank services.",
              },
              {
                q: "7. Does SRM Global offer physiotherapy and rehabilitation?",
                a: "Yes. A dedicated physiotherapy and rehabilitation centre supports post-operative recovery, sports injury rehabilitation, chronic pain management, and early mobilisation for joint replacement patients. Structured rehabilitation programmes are tailored to each patient's condition and recovery goals.",
              },
              {
                q: "8. Are orthopaedic surgeries covered under CMCHIS and insurance?",
                a: "Yes. Government health schemes including CMCHIS cover joint replacement surgeries, fracture fixation, ligament repairs, and spine procedures at SRM Global Hospitals. Cashless treatment with all major private insurance providers and TPAs is also available. A dedicated desk handles all approvals and documentation.",
              },
              {
                q: "9. How do I reach SRM Global Hospitals for an orthopaedic consultation?",
                a: "SRM Global Hospitals is located on GST Road in Kattankulathur, near SRM University. By road, it is approximately 10 km from Chengalpattu, 5 km from Guduvancheri, and 18 km from Tambaram. Call +91 96444 96444 to book an appointment or for emergency orthopaedic assistance.",
              },
              {
                q: "10. When should I see an orthopaedic surgeon?",
                a: "See an orthopaedic surgeon if you have persistent joint pain, difficulty walking or climbing stairs, a recent fracture or injury, back pain with numbness or weakness in the legs, sports injuries affecting movement, or visible bone or joint deformity. Early evaluation prevents conditions from worsening and expands treatment options.",
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
          <div className="sticky-cta-text">Centre for Bone Joint Spine Care <span>SRM Global Hospitals, Chennai</span></div>
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
