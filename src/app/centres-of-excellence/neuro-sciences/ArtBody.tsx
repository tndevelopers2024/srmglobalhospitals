"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  const [activeTab, setActiveTab] = useState("brain-surgery");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Institute of Neuro Sciences",
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
          const targetCounts = [3000, 95, 50, 24];

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
      setFormData({ name: "", phone: "", department: "Institute of Neuro Sciences", date: "" });
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
              <span>Institute of Neuro Sciences</span>
            </div>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <span>Center of Excellence</span>
            </div>
            <h1>Neurology Hospital in Kattankulathur</h1>
            <p className="hero-tagline">Advanced brain, spine, and nerve care with 24/7 neurology and neurosurgery services for Chengalpattu and surrounding areas.</p>
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
                <span>Neurosciences Team Photo</span>
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
            <div className="trust-label">Neuro Cases Treated</div>
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
            <div className="trust-label">Neuro Emergency</div>
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
            <h2 className="section-heading">Neurology Hospital in Chengalpattu for Brain, Spine, and Nerve Care</h2>
            <p>The Institute of Neuro Sciences at SRM Global Hospitals brings together neurologists and neurosurgeons under one roof to diagnose and treat the full range of neurological conditions. Located in Kattankulathur on GST Road, the department serves patients across Chengalpattu, Guduvancheri, Tambaram, and the broader southern Chennai corridor.</p>
            <p>From acute stroke intervention and complex brain surgery to long-term management of epilepsy and Parkinson&apos;s disease, the department is equipped with advanced CT and MRI imaging, a dedicated neuro ICU, and round-the-clock emergency neurology coverage. Every case is evaluated by a multidisciplinary team to determine the most effective treatment path.</p>
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
                24/7 Neuro Emergency
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
              Neurosciences Team
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
            <p className="section-sub">Dedicated neurology and neurosurgery teams covering every subspecialty of brain, spine, and nerve care.</p>
          </div>
          <div className="subspec-grid">
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Clinical Neurology</h3>
              <p>Diagnosis and ongoing management of neurological conditions including epilepsy, stroke, migraines, Parkinson&apos;s disease, multiple sclerosis, and dementia. Outpatient and inpatient services with detailed neurological evaluation.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <h3>Neurosurgery</h3>
              <p>Surgical management of brain tumours, spinal cord disorders, traumatic brain injuries, aneurysms, and congenital abnormalities. Minimally invasive and open surgical techniques performed by experienced neurosurgeons.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
              </div>
              <h3>Paediatric Neurology</h3>
              <p>Neurological care for children, from seizure disorders and developmental delays to cerebral palsy and childhood epilepsy. Age-appropriate diagnostic protocols and treatment plans.</p>
            </div>
            <div className="subspec-card">
              <div className="subspec-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>Neuro-Rehabilitation</h3>
              <p>Structured recovery programmes for patients after stroke, brain injury, or spinal cord surgery. Physiotherapy, occupational therapy, and speech therapy coordinated by the neurosciences team.</p>
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
            <h2 className="section-heading">Neurological Conditions We Treat</h2>
            <p className="section-sub">Comprehensive care for a wide range of brain, spine, and nerve disorders.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div>
                <h3>Stroke</h3>
                <p>Time-critical stroke management with rapid CT imaging, thrombolytic therapy, and neurosurgical intervention when needed. A dedicated stroke protocol ensures treatment begins within minutes of arrival. Immediate care is critical when symptoms like facial drooping, speech difficulty, or sudden weakness appear.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
              <div>
                <h3>Epilepsy &amp; Seizure Disorders</h3>
                <p>Comprehensive epilepsy evaluation using EEG monitoring, medication management, and surgical options for drug-resistant epilepsy. Both adult and paediatric seizure disorders are managed by the neurology team.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
              <div>
                <h3>Brain Tumours</h3>
                <p>Diagnosis and surgical treatment of benign and malignant brain tumours. Neurosurgeons work alongside oncologists and radiologists to plan the optimal approach, from biopsy to complete resection.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div>
                <h3>Parkinson&apos;s Disease &amp; Movement Disorders</h3>
                <p>Long-term management of Parkinson&apos;s disease, essential tremor, dystonia, and other movement disorders. Treatment includes medication optimisation, botulinum toxin therapy, and surgical referral for deep brain stimulation when appropriate.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
              <div>
                <h3>Migraines &amp; Chronic Headaches</h3>
                <p>Neurological evaluation for patients with frequent headaches and migraines that disrupt daily life. Treatment plans combine medication, lifestyle modification, and preventive strategies.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div>
              <div>
                <h3>Spinal Cord Disorders</h3>
                <p>Surgical and non-surgical management of spinal cord compression, disc herniation, spinal tumours, and traumatic spinal injuries. Advanced imaging guides treatment decisions from conservative care to complex spinal surgery.</p>
              </div>
            </div>
            <div className="condition-card">
              <div className="condition-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div>
                <h3>Peripheral Neuropathy</h3>
                <p>Diagnosis and treatment of nerve damage causing numbness, weakness, tingling, and pain in the hands and feet. Electromyography and nerve conduction studies identify the type and severity of neuropathy.</p>
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
            <div className="eyebrow">Meet Our Team</div>
            <h2 className="section-heading">Our Specialists</h2>
            <p className="section-sub">Experienced neurologists and neurosurgeons delivering comprehensive neurological care.</p>
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
                <div className="doctor-name">Dr. Ilankumaran</div>
                <div className="doctor-designation">SENIOR CONSULTANT, NEUROSURGERY</div>
                <div className="doctor-quals">MBBS, MS, MCH</div>
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
                <div className="doctor-name">Dr. Elanthiraiyan G.C</div>
                <div className="doctor-designation">SENIOR CONSULTANT, NEUROLOGY</div>
                <div className="doctor-quals">MBBS, MD, DM</div>
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
                <div className="doctor-name">Dr. T.P. Jeya Selva Senthilkumar</div>
                <div className="doctor-designation">SENIOR CONSULTANT, NEUROSURGERY</div>
                <div className="doctor-quals">MBBS, MCH</div>
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
                <div className="doctor-name">Dr. R. Kalpana</div>
                <div className="doctor-designation">VISITING CONSULTANT, NEUROLOGY</div>
                <div className="doctor-quals">MBBS, MD, DM</div>
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
            <p className="section-sub">Diagnostic and surgical procedures performed by our neurology and neurosurgery teams.</p>
          </div>
          <div className="tabs-nav">
            <button
              type="button"
              className={`tab-btn ${activeTab === "brain-surgery" ? "active" : ""}`}
              onClick={() => setActiveTab("brain-surgery")}
            >
              Brain Tumour Surgery
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "spine-surgery" ? "active" : ""}`}
              onClick={() => setActiveTab("spine-surgery")}
            >
              Spine Surgery
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "stroke-intervention" ? "active" : ""}`}
              onClick={() => setActiveTab("stroke-intervention")}
            >
              Stroke Intervention
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "epilepsy-mgmt" ? "active" : ""}`}
              onClick={() => setActiveTab("epilepsy-mgmt")}
            >
              Epilepsy Management
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "neuro-diagnostics" ? "active" : ""}`}
              onClick={() => setActiveTab("neuro-diagnostics")}
            >
              Neuro-Diagnostics
            </button>
          </div>

          {activeTab === "brain-surgery" && (
            <div className="tab-panel active" id="tab-brain-surgery">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Brain Surgery
                </div>
              </div>
              <div className="tab-content">
                <h3>Brain Tumour Surgery</h3>
                <p>Surgical removal of brain tumours using microsurgical and neuronavigation-assisted techniques. The approach depends on tumour size, location, and type, with the goal of maximum safe resection while preserving neurological function.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Neuronavigation-guided surgery</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Microsurgical techniques for precision</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Intraoperative neurophysiological monitoring</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Post-operative neuro ICU care</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "spine-surgery" && (
            <div className="tab-panel active" id="tab-spine-surgery">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Spine Surgery
                </div>
              </div>
              <div className="tab-content">
                <h3>Spine Surgery</h3>
                <p>Surgical treatment for disc herniation, spinal stenosis, spinal cord tumours, fractures, and degenerative spinal conditions. Both minimally invasive and open surgical approaches are available depending on the complexity of the case.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Minimally invasive disc surgery</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Spinal decompression and fusion</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Spinal tumour excision</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Trauma stabilisation and fixation</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "stroke-intervention" && (
            <div className="tab-panel active" id="tab-stroke-intervention">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Stroke Intervention
                </div>
              </div>
              <div className="tab-content">
                <h3>Stroke Intervention</h3>
                <p>Emergency stroke treatment including intravenous thrombolysis and mechanical thrombectomy for large vessel occlusions. The neurology and neurosurgery teams work together to restore blood flow to the brain within the critical treatment window.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Rapid CT and CT angiography</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> IV thrombolysis within therapeutic window</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Mechanical clot retrieval</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Post-stroke neuro-rehabilitation</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "epilepsy-mgmt" && (
            <div className="tab-panel active" id="tab-epilepsy-mgmt">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Epilepsy Management
                </div>
              </div>
              <div className="tab-content">
                <h3>Epilepsy Management</h3>
                <p>Comprehensive evaluation and treatment for epilepsy, from medication management to surgical intervention for drug-resistant cases. Video EEG monitoring, brain MRI, and neuropsychological testing guide the treatment plan.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Continuous video EEG monitoring</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Anti-epileptic medication optimisation</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Pre-surgical epilepsy evaluation</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Epilepsy surgery for refractory cases</li>
                </ul>
                <a href="#cta-banner" className="btn btn-gradient btn-sm">Book a Consultation</a>
              </div>
            </div>
          )}

          {activeTab === "neuro-diagnostics" && (
            <div className="tab-panel active" id="tab-neuro-diagnostics">
              <div className="tab-image">
                <div style={{ textAlign: "center", padding: "20px", color: "var(--ink-faint)" }}>
                  Image Placeholder: Neuro-Diagnostics
                </div>
              </div>
              <div className="tab-content">
                <h3>Neuro-Diagnostics</h3>
                <p>Advanced diagnostic procedures including electroencephalography (EEG), electromyography (EMG), nerve conduction studies (NCS), and evoked potentials. These tests help neurologists identify the precise location and nature of neurological problems, guiding accurate diagnosis and treatment.</p>
                <ul>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> EEG for seizure and brain activity evaluation</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> EMG and NCS for nerve and muscle disorders</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Visual and auditory evoked potentials</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Sleep study for neurological sleep disorders</li>
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
            <h2 className="section-heading">Built for Precision Neuroscience</h2>
            <p className="section-sub">Advanced infrastructure designed for accurate neurological diagnosis and safe neurosurgical intervention.</p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Neuroimaging</div>
              <div className="tech-card-body">
                <h3>Advanced Neuroimaging</h3>
                <p>High-resolution CT scanner and MRI capabilities for detailed brain and spinal cord imaging. CT angiography for emergency stroke assessment and MRI protocols for tumour evaluation, epilepsy workup, and demyelinating diseases.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Neuro ICU</div>
              <div className="tech-card-body">
                <h3>Neuro Intensive Care Unit</h3>
                <p>Dedicated neuro ICU with continuous EEG monitoring, invasive intracranial pressure monitoring, ventilator support, and round-the-clock intensivist and neurology coverage for post-operative and critically ill neurological patients.</p>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-img">Image Placeholder: Neuro OT</div>
              <div className="tech-card-body">
                <h3>Neurosurgical Operating Theatre</h3>
                <p>Fully equipped neurosurgery OT with operating microscope, neuronavigation system, and intraoperative monitoring. Designed for both cranial and spinal procedures with infection control standards matching international protocols.</p>
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
            <p className="section-sub">Real experiences from patients who received neurological care at SRM Global Hospitals.</p>
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
            <p className="section-sub">The right neurological care at the right time can change the course of recovery.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>Neurology &amp; Neurosurgery Under One Roof</h3>
              <p>Neurologists and neurosurgeons work side by side, ensuring that patients who need both medical and surgical expertise receive coordinated care without referrals to external hospitals.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <h3>24/7 Neuro Emergency</h3>
              <p>Stroke, head injury, and acute neurological emergencies are managed round the clock. The neurology team is available on-site for immediate evaluation, not just on call.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h3>Multidisciplinary Team Approach</h3>
              <p>Complex neurological cases are discussed in team meetings involving neurologists, neurosurgeons, neuro-radiologists, and rehabilitation specialists. Every treatment decision reflects multiple expert perspectives.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
              </div>
              <h3>Paediatric Neurology Expertise</h3>
              <p>Children with neurological conditions are evaluated and treated using age-appropriate protocols by specialists trained in paediatric neurology, ensuring that young patients receive care designed for their specific needs.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              </div>
              <h3>Comprehensive Rehabilitation</h3>
              <p>Recovery does not end after surgery or hospital discharge. The neuro-rehabilitation programme provides structured physiotherapy, speech therapy, and occupational therapy for patients recovering from stroke, brain injury, or spinal surgery.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
              </div>
              <h3>Insurance &amp; TPA Support</h3>
              <p>Cashless treatment with all major insurance providers and government health schemes. A dedicated desk manages approvals and documentation so families can focus on the patient.</p>
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
            <h2>Book Your Neurology Consultation</h2>
            <p>Whether you are dealing with persistent headaches, seizures, numbness, or a recent neurological diagnosis, our team is ready to help. Book a consultation or call us directly.</p>
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
                  <option value="Institute of Neuro Sciences">Institute of Neuro Sciences</option>
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
            <p className="section-sub">Insights from our neurology and neurosurgery team to help you understand neurological health.</p>
          </div>
          <div className="articles-grid">
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Stroke</span>
                <h3>Understanding Stroke: Warning Signs and Why Every Minute Matters</h3>
                <p>Recognising stroke symptoms early and reaching a hospital within the treatment window can prevent permanent brain damage and save lives.</p>
                <div className="article-meta">
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Epilepsy</span>
                <h3>Living with Epilepsy: What Patients and Families Should Know</h3>
                <p>Epilepsy is manageable with the right diagnosis and treatment plan. Understanding seizure types, triggers, and medication adherence makes a real difference.</p>
                <div className="article-meta">
                  <span>4 min read</span>
                </div>
              </div>
            </div>
            <div className="article-card">
              <div className="article-img">Image Placeholder</div>
              <div className="article-body">
                <span className="article-tag">Neurology</span>
                <h3>When Should You See a Neurologist?</h3>
                <p>Persistent headaches, unexplained dizziness, numbness, or sudden weakness are signs that a neurological evaluation may be needed.</p>
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
            <p className="section-sub">Common questions about neurology services at SRM Global Hospitals.</p>
          </div>
          <div className="faq-list">
            {[
              {
                q: "1. Is there a neurology hospital in Chengalpattu?",
                a: "Yes. SRM Global Hospitals in Kattankulathur operates a full Department of Neuro Sciences with both neurology and neurosurgery services. Located on GST Road, the hospital is accessible from Chengalpattu, Guduvancheri, Maraimalai Nagar, and surrounding areas. Neurologists and neurosurgeons are available for outpatient consultations and emergency care.",
              },
              {
                q: "2. What neurological conditions are treated at SRM Global?",
                a: "The department treats the full range of neurological conditions including stroke, epilepsy, brain tumours, Parkinson's disease, migraines, dementia, spinal cord disorders, peripheral neuropathy, multiple sclerosis, traumatic brain injuries, and movement disorders. Both adult and paediatric neurology cases are managed.",
              },
              {
                q: "3. When should I consult a neurologist?",
                a: "Consult a neurologist if you experience frequent headaches or migraines, seizures, unexplained dizziness, persistent numbness or weakness in the limbs, sudden changes in vision or speech, memory problems, or tremors. These symptoms may indicate an underlying neurological condition that requires evaluation.",
              },
              {
                q: "4. Does SRM Global have neurosurgery facilities?",
                a: "Yes. The Institute of Neuro Sciences includes a fully equipped neurosurgery programme with an operating microscope, neuronavigation system, and a dedicated neuro ICU. Brain tumour surgery, spine surgery, trauma surgery, and emergency neurosurgical procedures are performed by experienced neurosurgeons.",
              },
              {
                q: "5. What diagnostic tests are available for neurological conditions?",
                a: "The department offers advanced neuro-diagnostics including EEG (electroencephalography), EMG (electromyography), nerve conduction studies, evoked potentials, high-resolution CT scans, and MRI. These tests help neurologists pinpoint the exact location and nature of the problem for accurate diagnosis.",
              },
              {
                q: "6. Is emergency stroke treatment available 24/7?",
                a: "Yes. The hospital has a dedicated stroke protocol with 24/7 availability. Patients presenting with stroke symptoms receive rapid CT imaging, and thrombolytic therapy or mechanical thrombectomy is initiated within the critical treatment window. The neurology team is on-site round the clock for emergency evaluation.",
              },
              {
                q: "7. Does the department treat children with neurological problems?",
                a: "Yes. Paediatric neurology services cover seizure disorders, developmental delays, cerebral palsy, childhood epilepsy, and other neurological conditions in children. Evaluation and treatment follow age-appropriate protocols with paediatric-specific diagnostic tools.",
              },
              {
                q: "8. Is neuro-rehabilitation available after surgery or stroke?",
                a: "Yes. The department provides structured neuro-rehabilitation programmes including physiotherapy, occupational therapy, and speech therapy. These are coordinated by the neurosciences team and tailored to the patient's condition, whether recovering from brain surgery, stroke, or spinal cord injury.",
              },
              {
                q: "9. How do I reach SRM Global Hospitals for a neurology consultation?",
                a: "SRM Global Hospitals is located on GST Road in Kattankulathur, near SRM University. By road, it is approximately 10 km from Chengalpattu, 5 km from Guduvancheri, and 18 km from Tambaram. Call +91 96444 96444 to book an appointment or for emergency neurology assistance.",
              },
              {
                q: "10. Does SRM Global accept insurance for neurology treatment?",
                a: "Yes. Cashless treatment is available with all major insurance companies and third-party administrators. Government health schemes are also accepted. A dedicated insurance desk handles pre-authorisation and documentation. Treatment is never delayed for insurance processing in emergency neurological cases.",
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
          <div className="sticky-cta-text">Institute of Neuro Sciences <span>SRM Global Hospitals, Chennai</span></div>
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
