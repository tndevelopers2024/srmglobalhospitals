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
    <div className="hero-inner">
      <div className="hero-content reveal">
        <div className="hero-breadcrumb">
          <Link href="/">HOME</Link> <span className="sep">/</span> <Link href="/#specialties">OUR SPECIALTIES</Link> <span className="sep">/</span> <span>PULMONOLOGY</span>
        </div>

        <h1 className="hero-title">Department of Pulmonology</h1>

        <p className="hero-desc">
          Our pulmonology team offers comprehensive care for all respiratory conditions, from diagnosis through treatment and long-term management, using the latest medical advancements and technologies.
        </p>

        <div className="hero-ctas">
          <a href="#appointment" className="btn-primary">
            Book an Appointment
          </a>
          <a href="tel:+919644496444" className="btn-secondary">
            Call Now
          </a>
        </div>
      </div>

      <div className="hero-image-layer reveal">
        <div className="image-wrapper">
          <Image
            src="/images/specialties/pulmonology/hero-spec1.avif"
            alt="Pulmonology Department - SRM Global Hospitals"
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            priority
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     2. QUICK STATS BAR
     ════════════════════════════════════════════════  */}
<section className="stats-bar reveal visible">
  <div className="wrap">
    <div className="stats-grid">
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" ></path><circle cx="9" cy="7" r="4" ></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" ></path><path d="M16 3.13a4 4 0 0 1 0 7.75" ></path></svg>
        </div>
        <div className="stat-value">15+</div>
        <div className="stat-label">Respiratory Specialists</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" ></rect><line x1="8" y1="21" x2="16" y2="21" ></line><line x1="12" y1="17" x2="12" y2="21" ></line></svg>
        </div>
        <div className="stat-value">Advanced</div>
        <div className="stat-label">Pulmonary Lab</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" ></circle><polyline points="12 6 12 12 16 14" ></polyline></svg>
        </div>
        <div className="stat-value">24/7</div>
        <div className="stat-label">ICU Support</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" ></path></svg>
        </div>
        <div className="stat-value">5,000+</div>
        <div className="stat-label">Patients Treated</div>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     3. ABOUT THE DEPARTMENT
     ════════════════════════════════════════════════  */}
<section className="about" id="about">
  <div className="wrap">
    <div className="about-text reveal visible">
      <div className="section-label">About the Department</div>
      <h2 className="section-title">Comprehensive Respiratory Care at SRM Global Hospitals</h2>
      <p>The Department of Pulmonology at SRM Global Hospitals brings together a dedicated team of respiratory medicine specialists who provide world-class care for a wide range of breathing and lung disorders. Our state-of-the-art pulmonary function lab, advanced bronchoscopy suite, and sleep study facilities ensure accurate diagnosis and effective treatment.</p>
      <p>From managing chronic conditions like asthma and COPD to treating complex cases of interstitial lung disease and pulmonary infections, our multidisciplinary approach integrates the latest evidence-based therapies with compassionate patient care. We work closely with our critical care and thoracic surgery teams to deliver seamless, end-to-end respiratory care.</p>
    </div>
    <div className="about-img reveal visible">
      <div className="img-placeholder">
        <Image
          src="/images/specialties/pulmonology/dept-1.avif"
          alt="Pulmonary Lab / Consultation - SRM Global Hospitals"
          fill
          style={{ objectFit: "cover", borderRadius: "var(--radius)" }}
        />
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     4. CONDITIONS WE TREAT
     ════════════════════════════════════════════════  */}
<section className="conditions" id="conditions">
  <div className="wrap">
    <div className="conditions-header reveal visible">
      <div className="section-label">What We Treat</div>
      <h2 className="section-title">Conditions We Treat</h2>
      <p className="section-desc">Expert diagnosis and management across the full spectrum of respiratory conditions.</p>
    </div>
    <div className="conditions-grid">
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/asthma.png" alt="Asthma" width={32} height={32} />
        </div>
        <h4>Asthma</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/chronic-obstructive-pulmonary-disease-copd.png" alt="Chronic Obstructive Pulmonary Disease (COPD)" width={32} height={32} />
        </div>
        <h4>Chronic Obstructive Pulmonary Disease (COPD)</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/pneumonia.png" alt="Pneumonia" width={32} height={32} />
        </div>
        <h4>Pneumonia</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/bronchitis.png" alt="Bronchitis" width={32} height={32} />
        </div>
        <h4>Bronchitis</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/emphysema.png" alt="Emphysema" width={32} height={32} />
        </div>
        <h4>Emphysema</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/pulmonary-embolism.png" alt="Pulmonary Embolism" width={32} height={32} />
        </div>
        <h4>Pulmonary Embolism</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/lung-cancer.png" alt="Lung Cancer" width={32} height={32} />
        </div>
        <h4>Lung Cancer</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/pulmonary-fibrosis.png" alt="Pulmonary Fibrosis" width={32} height={32} />
        </div>
        <h4>Pulmonary Fibrosis</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/cystic-fibrosis.png" alt="Cystic Fibrosis" width={32} height={32} />
        </div>
        <h4>Cystic Fibrosis</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/interstitial-lung-disease.png" alt="Interstitial Lung Disease" width={32} height={32} />
        </div>
        <h4>Interstitial Lung Disease</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/bronchiectasis.png" alt="Bronchiectasis" width={32} height={32} />
        </div>
        <h4>Bronchiectasis</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/sleep-apnea.png" alt="Sleep Apnea" width={32} height={32} />
        </div>
        <h4>Sleep Apnea</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/tuberculosis-tb.png" alt="Tuberculosis (TB)" width={32} height={32} />
        </div>
        <h4>Tuberculosis (TB)</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/sarcoidosis.png" alt="Sarcoidosis" width={32} height={32} />
        </div>
        <h4>Sarcoidosis</h4>
      </div>
      <div className="condition-card reveal visible">
        <div className="condition-icon">
          <Image src="/images/specialties/pulmonology/pulmonology-icons/pulmonary-hypertension-clinic.png" alt="Pulmonary Hypertension" width={32} height={32} />
        </div>
        <h4>Pulmonary Hypertension</h4>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     5. KEY TREATMENTS
     ════════════════════════════════════════════════  */}
<section className="treatments" id="treatments">
  <div className="wrap">
    <div className="treatments-header reveal visible">
      <div className="section-label">Our Treatments</div>
      <h2 className="section-title">Key Treatments &amp; Procedures</h2>
      <p className="section-desc">Advanced diagnostic and therapeutic procedures delivered by experienced pulmonologists.</p>
    </div>
    <div className="treatments-grid">
      <div className="treatment-card reveal visible">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" ></circle><path d="M12 16v-4" ></path><path d="M12 8h.01" ></path></svg>
        </div>
        <h4>Bronchoscopy</h4>
        <p>Flexible and rigid bronchoscopy for diagnostic evaluation and therapeutic interventions in airways and lungs.</p>
      </div>
      <div className="treatment-card reveal visible">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" ></path></svg>
        </div>
        <h4>Pulmonary Function Testing</h4>
        <p>Comprehensive lung function assessment including spirometry, lung volumes, and diffusion capacity measurements.</p>
      </div>
      <div className="treatment-card reveal visible">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 18a5 5 0 0 0-10 0" ></path><line x1="12" y1="9" x2="12" y2="2" ></line><path d="M4.22 10.22l1.42 1.42" ></path><path d="M18.36 11.64l1.42-1.42" ></path><line x1="1" y1="22" x2="23" y2="22" ></line></svg>
        </div>
        <h4>Sleep Studies</h4>
        <p>Overnight polysomnography and home sleep testing for diagnosing sleep apnea and other sleep-related breathing disorders.</p>
      </div>
      <div className="treatment-card reveal visible">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" ></path><path d="M8 12h8" ></path></svg>
        </div>
        <h4>Chest Tube &amp; Thoracentesis</h4>
        <p>Minimally invasive procedures for draining fluid or air from the pleural space, providing rapid relief and diagnosis.</p>
      </div>
      <div className="treatment-card reveal visible">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" ></path></svg>
        </div>
        <h4>Nebulization &amp; Inhaler Therapy</h4>
        <p>Personalized inhaler technique training and nebulization protocols for effective airway medication delivery.</p>
      </div>
      <div className="treatment-card reveal visible">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10" ></path><path d="M12 20V4" ></path><path d="M6 20v-6" ></path></svg>
        </div>
        <h4>Pulmonary Rehabilitation</h4>
        <p>Structured exercise, education, and support programs to improve quality of life for patients with chronic lung conditions.</p>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     6. OUR DOCTORS
     ════════════════════════════════════════════════  */}
<section className="doctors" id="doctors">
  <div className="wrap">
    <div className="doctors-header reveal visible">
      <div className="section-label">Meet Our Experts</div>
      <h2 className="section-title">Our Pulmonologists</h2>
    </div>
    <div className="doctors-grid">
      <div className="doctor-card reveal visible">
        <div className="doctor-photo">Doctor Photo Placeholder</div>
        <div className="doctor-info">
          <h4>Dr. [Doctor Name]</h4>
          <p>Senior Consultant, Pulmonology &amp; Respiratory Medicine</p>
          <a href="file:///C:/Users/heman/Downloads/srm-specialty-template%20(4).html#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card reveal visible">
        <div className="doctor-photo">Doctor Photo Placeholder</div>
        <div className="doctor-info">
          <h4>Dr. [Doctor Name]</h4>
          <p>Consultant, Pulmonology &amp; Sleep Medicine</p>
          <a href="file:///C:/Users/heman/Downloads/srm-specialty-template%20(4).html#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     7. WHY CHOOSE US
     ════════════════════════════════════════════════  */}
<section className="why-choose reveal visible">
  <div className="wrap">
    <div className="why-choose-header">
      <div className="section-label">Why SRM Global</div>
      <h2 className="section-title">Why Choose Us</h2>
    </div>
    <div className="why-grid">
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" ></path><circle cx="9" cy="7" r="4" ></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" ></path><path d="M16 3.13a4 4 0 0 1 0 7.75" ></path></svg>
        </div>
        <h4>Experienced Pulmonologists</h4>
        <p>Board-certified respiratory specialists with years of clinical expertise.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ></rect><line x1="8" y1="21" x2="16" y2="21" ></line><line x1="12" y1="17" x2="12" y2="21" ></line></svg>
        </div>
        <h4>Advanced Diagnostic Equipment</h4>
        <p>State-of-the-art pulmonary lab with cutting-edge diagnostic technology.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" ></circle><polyline points="12 6 12 12 16 14" ></polyline></svg>
        </div>
        <h4>Multidisciplinary ICU Support</h4>
        <p>Round-the-clock critical care with integrated respiratory support.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10" ></path><path d="M12 20V4" ></path><path d="M6 20v-6" ></path></svg>
        </div>
        <h4>Comprehensive Rehabilitation</h4>
        <p>Full-spectrum recovery programs for lasting respiratory wellness.</p>
      </div>
    </div>
  </div>
</section>

{/*  ════════════════════════════════════════════════
     8. APPOINTMENT CTA
     ════════════════════════════════════════════════  */}
<section className="appointment" id="appointment">
  <div className="wrap">
    <div className="appt-text reveal visible">
      <div className="section-label">Get in Touch</div>
      <h2 className="section-title">Ready to Breathe Easy?</h2>
      <p>Schedule a consultation with our pulmonology experts. We are here to help you breathe better and live a healthier life.</p>
      <div className="appt-phone">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" ></path></svg>
        <a href="tel:+919644496444">+91 96444 96444</a>
      </div>
    </div>
    <div className="appt-form reveal visible">
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" ></line><polyline points="12 5 19 12 12 19" ></polyline></svg>
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
    <div className="faq-header reveal visible">
      <div className="section-label">Have Questions?</div>
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-desc">Find answers to common questions about our pulmonology services.</p>
    </div>
    <div className="faq-list">
      <div className="faq-item reveal visible">
        <div className="faq-question" onClick={toggleFaq}>
          When should I see a pulmonologist?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" ></polyline></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">You should consider seeing a pulmonologist if you experience persistent cough lasting more than three weeks, shortness of breath during routine activities, chronic wheezing, recurrent chest infections, or if you have been diagnosed with a lung condition that requires specialized management.</div>
        </div>
      </div>
      <div className="faq-item reveal visible">
        <div className="faq-question" onClick={toggleFaq}>
          What is a pulmonary function test (PFT)?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" ></polyline></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">A pulmonary function test is a non-invasive diagnostic procedure that measures how well your lungs work. It assesses lung volume, capacity, airflow rates, and gas exchange. The test involves breathing into a mouthpiece connected to a machine and typically takes 30 to 45 minutes to complete.</div>
        </div>
      </div>
      <div className="faq-item reveal visible">
        <div className="faq-question" onClick={toggleFaq}>
          How is asthma different from COPD?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" ></polyline></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">While both conditions cause airway obstruction and breathing difficulty, asthma typically begins in childhood and involves reversible airway narrowing triggered by allergens or exercise. COPD usually develops in adults over 40, often related to smoking, and causes progressive, largely irreversible airflow limitation. Treatment approaches differ significantly.</div>
        </div>
      </div>
      <div className="faq-item reveal visible">
        <div className="faq-question" onClick={toggleFaq}>
          What happens during a bronchoscopy?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" ></polyline></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">During a bronchoscopy, a thin, flexible tube with a camera is gently passed through your nose or mouth into your airways. The procedure allows the doctor to visually examine your airways, collect tissue samples for biopsy, or remove foreign objects. It is performed under local anesthesia or mild sedation and usually takes 30 to 60 minutes.</div>
        </div>
      </div>
      <div className="faq-item reveal visible">
        <div className="faq-question" onClick={toggleFaq}>
          Do you offer sleep study services?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" ></polyline></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Yes, our pulmonology department offers comprehensive sleep study services including in-lab polysomnography (overnight sleep study) and home sleep apnea testing. These studies help diagnose conditions like obstructive sleep apnea, central sleep apnea, and other sleep-related breathing disorders. Based on results, our specialists will create a personalized treatment plan.</div>
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
    <div className="sticky-cta-text">Need help with a respiratory concern?</div>
    <div className="sticky-cta-actions">
      <a href="file:///C:/Users/heman/Downloads/srm-specialty-template%20(4).html#appointment" className="btn-primary">Book Appointment</a>
      <a href="tel:+919644496444" className="btn-call">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" ></path></svg>
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
