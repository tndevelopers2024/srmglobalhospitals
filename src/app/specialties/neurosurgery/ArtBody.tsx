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
      <Link href="/">Home</Link><span>/</span><Link href="/#specialties">Our Specialties</Link><span>/</span><span>Neurosurgery</span>
    </div>
    <div className="hero-text reveal">
      <div className="hero-label">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4l3 3"/></svg>
        Specialty Department
      </div>
      <h1>Department of Neurosurgery</h1>
      <p className="hero-subtitle">Advanced Surgical Care for the Brain, Spine, and Nervous System.</p>
      <p className="hero-desc">Recognized as the best neurosurgery hospital in Chengalpattu, our neurosurgeons provide comprehensive brain surgery and spine surgery, from brain tumour surgery and craniotomy to endoscopic brain surgery, deep brain stimulation, spinal cord surgery, and minimally invasive neurosurgery.</p>
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
      <div className="img-placeholder">Hero Image - Neurosurgery Department</div>
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
        <div className="stat-value">3</div>
        <div className="stat-label">Neurosurgery Specialists</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div className="stat-value">Advanced</div>
        <div className="stat-label">Cutting-Edge Research &amp; Technology</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
        </div>
        <div className="stat-value">Interdisciplinary</div>
        <div className="stat-label">Comprehensive Approach to Care</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div className="stat-value">Holistic</div>
        <div className="stat-label">Patient Care</div>
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
      <h2 className="section-title">Comprehensive Neurosurgery Care in Chengalpattu</h2>
      <p>At SRM Global Hospitals Pvt Ltd, Neuroscience is not just a field of study, it's an interdisciplinary science that delves into the intricate workings of the nervous system. Collaborating across fields like engineering and medicine, our Neurosurgery department explores the structural, functional, and surgical aspects of the brain and spine.</p>
      <p>This interdisciplinary approach enables us to comprehend the complexities of the brain and its functions comprehensively, from brain tumour surgery and craniotomy to minimally invasive neurosurgery and deep brain stimulation.</p>
    </div>
    <div className="about-img reveal">
      <div className="img-placeholder">Department Image - Neurosurgery Clinic / Consultation</div>
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
      <p className="section-desc">Expert surgical and medical management across the full spectrum of brain, spine, and nervous system conditions.</p>
    </div>
    <div className="conditions-grid">
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l1.45-1.45"/><polyline points="3.5 12.5 7 12.5 8.5 9 10.5 15 12 11 13 13 15.5 13"/></svg>
        </div>
        <h4>Stroke</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <h4>Epilepsy</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a9 9 0 0 0-9 9c0 3.5 2 6 4 7.5V21h10v-2.5c2-1.5 4-4 4-7.5a9 9 0 0 0-9-9z"/><path d="M9 18h6"/></svg>
        </div>
        <h4>Alzheimer's Disease</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        </div>
        <h4>Parkinson's Disease</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/></svg>
        </div>
        <h4>Multiple Sclerosis (MS)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h4>Migraine Headaches</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <h4>Traumatic Brain Injury (TBI)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4"/></svg>
        </div>
        <h4>Spinal Cord Injury</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <h4>Brain Tumors</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        <h4>Peripheral Neuropathy</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <h4>Amyotrophic Lateral Sclerosis (ALS)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        </div>
        <h4>Huntington's Disease</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="7" r="4"/><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><path d="M17 8a3 3 0 1 1 0 5.9"/></svg>
        </div>
        <h4>Neurodevelopmental Disorders (e.g., Autism, ADHD)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
        </div>
        <h4>Cerebral Palsy</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 12h4l2-6 4 12 2-6h4"/></svg>
        </div>
        <h4>Myasthenia Gravis</h4>
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
      <p className="section-desc">Advanced surgical procedures delivered by our experienced neurosurgery team.</p>
    </div>
    <div className="treatments-grid">
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <h4>Brain Tumour Surgery</h4>
        <p>Precision brain tumour surgery to safely remove tumors while preserving critical neurological function.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
        </div>
        <h4>Craniotomy</h4>
        <p>Craniotomy procedures performed with advanced imaging guidance to access and treat conditions within the skull.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <h4>Endoscopic Brain Surgery</h4>
        <p>Endoscopic brain surgery using minimally invasive techniques for faster recovery and reduced surgical risk.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        </div>
        <h4>Deep Brain Stimulation</h4>
        <p>Deep brain stimulation to manage movement disorders such as Parkinson's disease through targeted neural stimulation.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4"/></svg>
        </div>
        <h4>Spinal Cord Surgery</h4>
        <p>Spinal cord surgery to treat injuries, tumors, and degenerative conditions affecting the spine and nerve pathways.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        <h4>Minimally Invasive Neurosurgery</h4>
        <p>Minimally invasive neurosurgery techniques that reduce trauma to surrounding tissue and support faster patient recovery.</p>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     6. OUR DOCTORS
     ════════════════════════════════════════════════  */}
<section className="doctors" id="doctors">
  <div className="wrap">
    <div className="doctors-header reveal">
      <div className="section-label">Meet Our Experts</div>
      <h2 className="section-title">Our Neurosurgery Specialists</h2>
    </div>
    <div className="doctors-grid">
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/neurosurgery/dr-ilankumaran.png" alt="Dr. Ilankumaran" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Ilankumaran</h4>
          <p className="doctor-qualification">MBBS, MS, MCH</p>
          <p>Senior Consultant, Neurosurgery</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/neurosurgery/dr-jeya-selva-senthilkumar.png" alt="Dr. T.P. Jeya Selva Senthilkumar" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. T.P. Jeya Selva Senthilkumar</h4>
          <p className="doctor-qualification">MBBS, MCH</p>
          <p>Senior Consultant, Neurosurgery</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/neurosurgery/dr-mohamed-naleer.png" alt="Dr. Mohamed Naleer. H" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Mohamed Naleer. H</h4>
          <p className="doctor-qualification">MBBS, MCH</p>
          <p>Consultant, Neurosurgery</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
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
        <h4>Comprehensive Interdisciplinary Approach</h4>
        <p>Our Neuroscience department takes pride in its interdisciplinary approach, collaborating across various fields to ensure a holistic understanding of neurological issues comprehensively.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h4>Cutting-edge Research and Technology</h4>
        <p>Leveraging advanced tools such as MRI images, computerized 3-D models, and experiments with cell and tissue samples, we stay at the forefront of neuroscience research. This commitment to cutting-edge technology facilitates accurate diagnosis and innovative treatment solutions.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
        </div>
        <h4>Dedicated Neuroscientists</h4>
        <p>Our team of neuroscientists is committed to unraveling the mysteries of the nervous system. Their research not only contributes to the scientific community but also translates into improved patient care through innovative treatments.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        </div>
        <h4>Holistic Patient Care</h4>
        <p>Neuroscience is at the core of various conditions affecting human functions. Our focus is not only on treating neurological disorders but also on understanding the broader impact on patient's lives, providing holistic patient care that goes beyond the symptoms to enhance overall well-being.</p>
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
      <h2 className="section-title">Ready to Take the Next Step in Your Neurosurgical Care?</h2>
      <p>Schedule a consultation with our neurosurgeon for brain surgery, spine surgery, or minimally invasive neurosurgery. As the best neurosurgery hospital in Chengalpattu, we combine advanced surgical expertise with a personalized care plan for every patient.</p>
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
      <p className="section-desc">Find answers to common questions about our neurosurgery services.</p>
    </div>
    <div className="faq-list">
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          When should I see a neurosurgeon instead of a neurologist?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">A neurosurgeon should be consulted when a neurological condition, such as a brain tumor, spinal cord injury, or severe nerve compression, requires surgical treatment rather than medication management alone.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What is the difference between a craniotomy and endoscopic brain surgery?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">A craniotomy involves opening a section of the skull to access the brain directly, while endoscopic brain surgery uses a thin camera and narrow instruments through small openings, often allowing for a less invasive procedure and faster recovery.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What conditions is deep brain stimulation used for?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Deep brain stimulation is commonly used to manage movement disorders such as Parkinson's disease, using a small implanted device to deliver targeted electrical stimulation to specific areas of the brain.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          Is spinal cord surgery always the first line of treatment?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">No. Spinal cord surgery is generally recommended after conservative treatments have been tried, or when there is significant nerve compression, instability, or injury that requires surgical correction.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What are the benefits of minimally invasive neurosurgery?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Minimally invasive neurosurgery techniques typically result in smaller incisions, less pain, reduced risk of complications, and a faster return to daily activities compared to traditional open surgery.</div>
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
    <div className="sticky-cta-text">Have a neurosurgical concern?</div>
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
