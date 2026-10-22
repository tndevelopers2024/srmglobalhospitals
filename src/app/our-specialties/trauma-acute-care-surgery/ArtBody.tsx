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
          <Link href="/">HOME</Link> <span className="sep">/</span> <Link href="/#specialties">OUR SPECIALTIES</Link> <span className="sep">/</span> <span>TRAUMA &AMP; ACUTE CARE SURGERY</span>
        </div>

        <h1 className="hero-title">Trauma &amp; Acute Care Surgery</h1>

        <p className="hero-desc">
          Recognized as the best trauma and acute care surgery hospital in Chengalpattu, our AIIMS-trained trauma surgeons deliver 24/7 consultant-led care for critically injured and emergency surgical patients, from the Emergency Room to the Operating Theatre, ICU, and rehabilitation pathway.
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
            src="/images/specialties/trauma-acute-care-surgery/hero-spec.avif"
            alt="trauma-acute-care-surgery Department - SRM Global Hospitals"
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
<section className="stats-bar reveal">
  <div className="wrap">
    <div className="stats-grid">
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div className="stat-value">3</div>
        <div className="stat-label">Trauma &amp; Acute Care Surgeons</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div className="stat-value">24/7</div>
        <div className="stat-label">Consultant-Led Trauma Care</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div className="stat-value">Only Centre</div>
        <div className="stat-label">Dedicated Trauma Department in Chennai</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div className="stat-value">AIIMS-Trained</div>
        <div className="stat-label">Trauma & Acute Care Surgeons</div>
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
      <h2 className="section-title">24/7 Trauma &amp; Acute Care Surgery in Chengalpattu</h2>
      <p>The Department of Trauma &amp; Acute Care Surgery at SRM Global Hospitals delivers 24/7 consultant-led comprehensive care for critically injured and emergency surgical patients.</p>
      <p>Our department is dedicated to the rapid assessment, resuscitation, surgical stabilization, and critical care management of trauma patients, ensuring seamless care from the Emergency Room to the Operating Theatre, ICU, and rehabilitation pathway.</p>
    </div>
    <div className="about-img reveal">
      <div className="img-placeholder">
        <Image
          src="/images/specialties/trauma-acute-care-surgery/dept.avif"
          alt="Trauma ICU / Critical Care Unit - SRM Global Hospitals"
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
    <div className="conditions-header reveal">
      <div className="section-label">What We Treat</div>
      <h2 className="section-title">Conditions We Treat</h2>
      <p className="section-desc">Expert management for a wide spectrum of traumatic injuries, emergency surgical conditions, and critically ill patients.</p>
    </div>
    <div className="conditions-grid">
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/road-traffic-accident-injuries.png" alt="Road Traffic Accident Injuries" width={32} height={32} />
        </div>
        <h4>Road Traffic Accident Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/falls-from-height-and-industrial-injuries.png" alt="Falls from Height and Industrial Injuries" width={32} height={32} />
        </div>
        <h4>Falls from Height and Industrial Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/polytrauma-and-multiple-injuries.png" alt="Polytrauma and Multiple Injuries" width={32} height={32} />
        </div>
        <h4>Polytrauma and Multiple Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/head-injuries-and-facial-trauma.png" alt="Head Injuries and Facial Trauma" width={32} height={32} />
        </div>
        <h4>Head Injuries and Facial Trauma</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/blunt-and-penetrating-chest-trauma.png" alt="Blunt and Penetrating Chest Trauma" width={32} height={32} />
        </div>
        <h4>Blunt and Penetrating Chest Trauma</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/rib-fractures-flail-chest-and-hemothorax.png" alt="Rib Fractures, Flail Chest, and Hemothorax" width={32} height={32} />
        </div>
        <h4>Rib Fractures, Flail Chest, and Hemothorax</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/abdominal-trauma-and-solid-organ-injuries.png" alt="Abdominal Trauma and Solid Organ Injuries" width={32} height={32} />
        </div>
        <h4>Abdominal Trauma and Solid Organ Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/liver-spleen-bowel-and-mesenteric-injuries.png" alt="Liver, Spleen, Bowel, and Mesenteric Injuries" width={32} height={32} />
        </div>
        <h4>Liver, Spleen, Bowel, and Mesenteric Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/pelvic-trauma-and-associated-hemorrhage.png" alt="Pelvic Trauma and Associated Hemorrhage" width={32} height={32} />
        </div>
        <h4>Pelvic Trauma and Associated Hemorrhage</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/musculoskeletal-and-soft-tissue-injuries.png" alt="Musculoskeletal and Soft Tissue Injuries" width={32} height={32} />
        </div>
        <h4>Musculoskeletal and Soft Tissue Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/degloving-injuries-and-complex-wounds.png" alt="Degloving Injuries and Complex Wounds" width={32} height={32} />
        </div>
        <h4>Degloving Injuries and Complex Wounds</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/emergency-abdominal-conditions-requiring-surgery.png" alt="Emergency Abdominal Conditions Requiring Surgery" width={32} height={32} />
        </div>
        <h4>Emergency Abdominal Conditions Requiring Surgery</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/perforation-peritonitis.png" alt="Perforation Peritonitis" width={32} height={32} />
        </div>
        <h4>Perforation Peritonitis</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/intestinal-obstruction.png" alt="Intestinal Obstruction" width={32} height={32} />
        </div>
        <h4>Intestinal Obstruction</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/acute-appendicitis-and-acute-cholecystitis.png" alt="Acute Appendicitis and Acute Cholecystitis" width={32} height={32} />
        </div>
        <h4>Acute Appendicitis and Acute Cholecystitis</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/necrotizing-soft-tissue-infections.png" alt="Necrotizing Soft Tissue Infections" width={32} height={32} />
        </div>
        <h4>Necrotizing Soft Tissue Infections</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/sepsis-requiring-emergency-source-control.png" alt="Sepsis Requiring Emergency Source Control" width={32} height={32} />
        </div>
        <h4>Sepsis Requiring Emergency Source Control</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/postoperative-surgical-critical-care-needs.png" alt="Postoperative Surgical Critical Care Needs" width={32} height={32} />
        </div>
        <h4>Postoperative Surgical Critical Care Needs</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/specialties/trauma-acute-care-surgery/trauma-acute-care-surgery-icons/trauma-icu-and-ventilator-support.png" alt="Trauma ICU and Ventilator Support" width={32} height={32} />
        </div>
        <h4>Trauma ICU and Ventilator Support cases intervention, critical care support, and rehabilitation planning for optimal patient outcomes</h4>
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
      <p className="section-desc">Comprehensive surgical and critical care procedures delivered by our trauma and acute care surgery team.</p>
    </div>
    <div className="treatments-grid">
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
        </div>
        <h4>Emergency Laparotomy &amp; Thoracotomy</h4>
        <p>Emergency surgical intervention for life-threatening chest and abdominal trauma, including laparotomy and thoracotomy.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <h4>Damage Control Surgery</h4>
        <p>A staged surgical strategy to rapidly control bleeding and contamination in critically injured patients before definitive repair.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h4>Trauma ICU &amp; Ventilator Support</h4>
        <p>Dedicated trauma intensive care with ventilator support and continuous monitoring for critically injured and postoperative patients.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h4>Acute Care Surgical Emergencies</h4>
        <p>Rapid surgical management of acute abdominal emergencies such as perforation peritonitis, intestinal obstruction, and acute appendicitis.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
        </div>
        <h4>Emergency Source Control for Sepsis</h4>
        <p>Emergency surgery to control the source of sepsis and life-threatening infection, including necrotizing soft tissue infections.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2" ry="2"/><path d="M9 14l2 2 4-4"/></svg>
        </div>
        <h4>Postoperative Critical Care &amp; Rehabilitation Planning</h4>
        <p>Comprehensive postoperative critical care support and rehabilitation planning to optimize recovery and long-term outcomes.</p>
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
      <h2 className="section-title">Our Trauma &amp; Acute Care Surgery Specialists</h2>
    </div>
    <div className="doctors-grid">
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/trauma-acute-care-surgery/dr-vijayan-p.png" alt="Dr. Vijayan P" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Vijayan P</h4>
          <p className="doctor-qualification">MBBS, MS (General Surgery), MCh (Trauma Surgery &amp; Critical Care), MBA, FSHM, FMAS, FACS</p>
          <p>Senior Consultant, Trauma &amp; Acute Care Surgeon</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/trauma-acute-care-surgery/dr-abdul-hakeem-s.png" alt="Dr. Abdul Hakeem S" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Abdul Hakeem S</h4>
          <p className="doctor-qualification">MBBS, MS (General Surgery), MCh (Trauma Surgery &amp; Critical Care), MBA (Healthcare &amp; Hospital Management, Ongoing)</p>
          <p>Consultant, Trauma &amp; Acute Care Surgeon</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/trauma-acute-care-surgery/dr-vishnu-teja-muddu.png" alt="Dr. Vishnu Teja Muddu" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Vishnu Teja Muddu</h4>
          <p className="doctor-qualification">MBBS, MS, MCh</p>
          <p>Consultant, Trauma &amp; Acute Care Surgeon</p>
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
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h4>Only Dedicated Trauma Center in Chennai</h4>
        <p>SRM Global Hospitals is the only centre in Chennai with a dedicated Department of Trauma &amp; Acute Care Surgery, providing 24/7 expert care for critically injured patients and acute surgical emergencies.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h4>AIIMS-Trained Trauma Surgeons</h4>
        <p>Our department is led by MCh-qualified Trauma &amp; Acute Care Surgeons from the All India Institute of Medical Sciences (AIIMS), bringing specialized expertise to every case.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
        </div>
        <h4>Evidence-Based Trauma Protocols</h4>
        <p>With a focus on evidence-based trauma protocols, advanced critical care, and early definitive surgical management, our team works to deliver the best possible outcomes for every patient.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </div>
        <h4>Comprehensive Scope of Trauma &amp; Acute Care</h4>
        <p>From road traffic accidents and polytrauma to emergency laparotomy, damage control surgery, and trauma ICU care, we manage the full spectrum of traumatic injuries and acute surgical emergencies.</p>
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
      <h2 className="section-title">Need Emergency Trauma or Acute Surgical Care?</h2>
      <p>Our trauma and acute care surgery team is available 24/7 for critically injured patients and acute surgical emergencies. As the best trauma and acute care surgery hospital in Chengalpattu, we combine AIIMS-trained expertise with evidence-based protocols for every patient.</p>
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
      <p className="section-desc">Find answers to common questions about our trauma and acute care surgery services.</p>
    </div>
    <div className="faq-list">
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What does the Department of Trauma &amp; Acute Care Surgery treat?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Our department manages the full spectrum of traumatic injuries and acute surgical emergencies, including road traffic accident injuries, polytrauma, chest and abdominal trauma, and acute abdominal conditions such as perforation peritonitis and intestinal obstruction.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          Is emergency trauma care available 24/7?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Yes. Our department provides 24/7 consultant-led care for critically injured and emergency surgical patients, with seamless coordination from the Emergency Room to the Operating Theatre and ICU.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What is damage control surgery?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Damage control surgery is a staged surgical strategy used in critically injured patients to rapidly control bleeding and contamination before proceeding to definitive surgical repair.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          Who leads the trauma and acute care surgery team?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Our team is led by MCh-qualified Trauma &amp; Acute Care Surgeons trained at the All India Institute of Medical Sciences (AIIMS), supported by dedicated trauma ICU and critical care staff.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What happens after trauma surgery?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">After surgery, patients receive postoperative critical care in our trauma ICU with ventilator support as needed, followed by a structured rehabilitation plan for optimal recovery.</div>
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
    <div className="sticky-cta-text">Facing a trauma or acute surgical emergency?</div>
    <div className="sticky-cta-actions">
      <a href="#appointment" className="btn-primary">Book Appointment</a>
      <a href="tel:+919644496444" className="btn-call">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>+91 96444 96444</span>
      </a>
    </div>
  </div>
</div>
    </>
  );
}
