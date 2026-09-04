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
            <span>Cardiac Sciences</span>
          </div>
          <div className="hero-text reveal">
            <div className="hero-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v4l3 3" />
              </svg>
              Specialty Department
            </div>
            <h1>Institute of Cardiac Sciences</h1>
            <p className="hero-subtitle">Comprehensive Heart Care, So You Can Live Your Life.</p>
            <p className="hero-desc">Recognized as the best cardiac hospital in Chengalpattu, our cardiologists and heart specialists provide advanced heart disease treatment and interventional cardiology, from angioplasty and pacemaker implantation to cardiac surgery, so your heart stays healthy at every stage of life.</p>
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
            <div className="img-placeholder">Hero Image - Institute of Cardiac Sciences</div>
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
              <div className="stat-value">10</div>
              <div className="stat-label">Cardiac Specialists</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div className="stat-value">Advanced</div>
              <div className="stat-label">Cardiac Diagnostics (ECG, 2D Echo, Cardiac CT)</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="stat-value">24/7</div>
              <div className="stat-label">Emergency Cardiac Care</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div className="stat-value">Comprehensive</div>
              <div className="stat-label">Interventional &amp; Surgical Cardiac Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-text reveal">
            <div className="section-label">About the Department</div>
            <h2 className="section-title">Comprehensive Heart Care in Chengalpattu</h2>
            <p>At SRM Global Hospitals Pvt Ltd, we understand that a healthy heart is essential for individuals of all ages. Our Cardiology Department is dedicated to helping you achieve and maintain optimal heart health.</p>
            <p>As the best cardiac hospital in Chengalpattu, we offer comprehensive cardiac care programs, specialized treatment, and a range of diagnostic tools to prevent and address heart disease. Our commitment is to ensure your heart remains healthy, whether you are seeking preventive measures or requiring urgent medical attention, so you can live your life.</p>
          </div>
          <div className="about-img reveal">
            <div className="img-placeholder">Department Image - Institute of Cardiac Sciences Clinic / Consultation</div>
          </div>
        </div>
      </section>

      {/* 4. CONDITIONS */}
      <section className="conditions" id="conditions">
        <div className="wrap">
          <div className="conditions-header reveal">
            <div className="section-label">What We Treat</div>
            <h2 className="section-title">Conditions We Treat</h2>
            <p className="section-desc">Expert diagnosis and management across the full spectrum of heart and cardiovascular conditions.</p>
          </div>
          <div className="conditions-grid">
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h4>Coronary Artery Disease</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/></svg>
              </div>
              <h4>Hypertension</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h4>Heart Failure</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h4>Arrhythmias</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
              </div>
              <h4>Valvular Heart Disease</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <h4>Congenital Heart Disease</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
              </div>
              <h4>Peripheral Artery Disease</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h4>Cardiomyopathy</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h4>Endocarditis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h4>Myocardial Infarction</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12c1.5-4 3.5-4 5 0s3.5 4 5 0 3.5-4 5 0 3.5 4 5 0"/></svg>
              </div>
              <h4>Heart Murmurs</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
              </div>
              <h4>Angina</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Pericarditis</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4>Cardiac Arrest</h4>
            </div>
            <div className="condition-card reveal">
              <div className="condition-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l1.45-1.45"/><polyline points="3.5 12.5 7 12.5 8.5 9 10.5 15 12 11 13 13 15.5 13"/></svg>
              </div>
              <h4>Atrial Fibrillation</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TREATMENTS */}
      <section className="treatments" id="treatments">
        <div className="wrap">
          <div className="treatments-header reveal">
            <div className="section-label">Our Treatments</div>
            <h2 className="section-title">Key Treatments &amp; Services</h2>
            <p className="section-desc">Advanced interventional and surgical cardiac procedures delivered with precision and compassionate follow-up care.</p>
          </div>
          <div className="treatments-grid">
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h4>Angioplasty</h4>
              <p>Minimally invasive angioplasty to open blocked or narrowed coronary arteries and restore healthy blood flow to the heart.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h4>Bypass Surgery (Coronary Artery Bypass Grafting)</h4>
              <p>Coronary artery bypass grafting to reroute blood flow around severely blocked arteries, performed by our cardiothoracic surgical team.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h4>Pacemaker Implantation</h4>
              <p>Pacemaker implantation to correct slow or irregular heart rhythms, helping the heart maintain a steady, healthy beat.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4>Echocardiogram &amp; Advanced Cardiac Imaging</h4>
              <p>2D echocardiography and multi-slice cardiac CT imaging for precise, non-invasive assessment of heart structure and function.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Heart Failure Treatment</h4>
              <p>Comprehensive heart failure treatment combining medication management, lifestyle guidance, and close monitoring to keep patients stable.</p>
            </div>
            <div className="treatment-card reveal">
              <div className="treatment-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </div>
              <h4>Interventional Cardiology Procedures</h4>
              <p>A full range of interventional cardiology procedures, from diagnostic catheterization to complex structural heart interventions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCTORS */}
      <section className="doctors" id="doctors">
        <div className="wrap">
          <div className="doctors-header reveal">
            <div className="section-label">Meet Our Experts</div>
            <h2 className="section-title">Our Cardiac Specialists</h2>
          </div>
          <div className="doctors-grid">
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-c-s-aravind.png" alt="Dr. C. S. Aravind" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. C. S. Aravind</h4>
                <p className="doctor-qualification">MBBS, MD</p>
                <p>Senior Consultant, Cardiology</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-tamil-mani.png" alt="Dr. Tamilmani. V" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Tamilmani. V</h4>
                <p className="doctor-qualification">MBBS, MD (Internal Medicine), DNB (Cardiology)</p>
                <p>Senior Consultant, Cardiology</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-surya-prakash.png" alt="Dr. Surya Prakash. S" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Surya Prakash. S</h4>
                <p className="doctor-qualification">MBBS, MD, DrNB</p>
                <p>Senior Consultant, Cardiology</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-sri-charan.png" alt="Dr. Sri Charan Theja Nallsetty" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Sri Charan Theja Nallsetty</h4>
                <p className="doctor-qualification">MBBS, DNB (Cardiology)</p>
                <p>Consultant, Cardiology</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-ranjith.png" alt="Dr. Ranjith K" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Ranjith K</h4>
                <p className="doctor-qualification">MBBS, MD (General Medicine), DM (Cardiology)</p>
                <p>Consultant, Cardiology</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-sujith.png" alt="Dr. Sujith Vekoyudhan Indira" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Sujith Vekoyudhan Indira</h4>
                <p className="doctor-qualification">MBBS, MS, MCH</p>
                <p>Senior Consultant, Cardiothoracic Surgery</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-b-nembian-raja-rajan.png" alt="Dr. B. Nembiar Raja Rajan" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. B. Nembiar Raja Rajan</h4>
                <p className="doctor-qualification">MBBS, MS, MCH</p>
                <p>Consultant, Cardiothoracic Surgery</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-srinath.png" alt="Dr. Srinath. D" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Srinath. D</h4>
                <p className="doctor-qualification">MBBS, MD, DM</p>
                <p>Senior Consultant, Cardiac Anaesthesia</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-swamynathan.png" alt="Dr. R. Swaminathan Veerasamy" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. R. Swaminathan Veerasamy</h4>
                <p className="doctor-qualification">MBBS, MBA, MD, PDCC</p>
                <p>Consultant, Cardiac Anaesthesia</p>
                <a href="#appointment" className="btn-primary">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-card reveal">
              <div className="doctor-photo">
                <Image src="/images/specialties/institute-of-cardiac-sciences/dr-mercy.png" alt="Dr. Mercy Saghana. S" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div className="doctor-info">
                <h4>Dr. Mercy Saghana. S</h4>
                <p className="doctor-qualification">MBBS, MD (Anaesthesiology), FIPM</p>
                <p>Consultant, Anaesthesia</p>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h4>Comprehensive Cardiac Care Programs</h4>
              <p>Tailored services to screen and assess your heart health, with personalized care plans to keep your heart in top condition.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4>Highly Trained Emergency Team</h4>
              <p>A dedicated team of highly trained doctors and healthcare professionals available around the clock for emergency cardiac care.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4>Cutting-edge Diagnostic Services</h4>
              <p>State-of-the-art facilities including ECG, 2D echocardiography, ambulatory blood pressure monitoring, and multi-slice cardiac CT.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <h4>Specialized Clinical Cardiology Services</h4>
              <p>Inpatient services with a focus on specialized cardiac care, plus dedicated clinics for targeted heart disease treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT CTA */}
      <section className="appointment" id="appointment">
        <div className="wrap">
          <div className="appt-text reveal">
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Ready to Take the Next Step for Your Heart Health?</h2>
            <p>Schedule a consultation with our cardiac specialists for heart disease treatment, interventional cardiology, or a routine cardiac diagnostics check. As the best cardiac hospital in Chengalpattu, we combine advanced technology with a personalized care plan so you can live your life.</p>
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
            <p className="section-desc">Find answers to common questions about our cardiac care services.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                When should I see a cardiologist instead of my general physician?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>You should see a cardiologist if you experience chest pain, breathlessness, palpitations, unexplained fatigue, or if you have risk factors such as hypertension, diabetes, or a family history of heart disease that need dedicated heart disease treatment.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What is the difference between angioplasty and bypass surgery?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Angioplasty is a minimally invasive procedure that uses a balloon and stent to open a blocked artery, while bypass surgery reroutes blood flow around blocked segments using a graft. Our cardiac team recommends the right approach based on your specific condition.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                How does a pacemaker help with heart rhythm problems?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>A pacemaker is a small device implanted to send electrical signals that keep the heart beating at a steady, healthy rate, correcting arrhythmias caused by slow or irregular heart rhythms.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                What does an echocardiogram show that an ECG cannot?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>An echocardiogram uses ultrasound to show the heart&amp;apos;s structure, chamber size, and pumping function in real time, while an ECG records the heart&amp;apos;s electrical activity. Together they give a fuller picture during cardiac diagnostics.</p>
                </div>
              </div>
            </div>
            <div className="faq-item reveal">
              <div className="faq-question" onClick={toggleFaq}>
                Can heart failure be managed effectively with treatment?
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>Yes. With the right combination of medication, lifestyle changes, and regular monitoring, heart failure treatment can help most patients manage symptoms, improve heart function, and maintain a good quality of life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. STICKY BOTTOM CTA */}
      <div className={`sticky-cta ${isStickyVisible ? "show" : ""}`} id="stickyCta">
        <div className="wrap">
          <div className="sticky-cta-text">Have a heart health concern?</div>
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
