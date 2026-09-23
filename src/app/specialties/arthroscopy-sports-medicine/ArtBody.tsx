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
          <Link href="/">HOME</Link> <span className="sep">/</span> <Link href="/#specialties">OUR SPECIALTIES</Link> <span className="sep">/</span> <span>ARTHROSCOPY &AMP; SPORTS MEDICINE</span>
        </div>

        <h1 className="hero-title">Department of Arthroscopy &amp; Sports Medicine</h1>

        <p className="hero-desc">
          Recognized as the best arthroscopy and sports medicine hospital in Chengalpattu, our team of experienced sports medicine doctors specializes in arthroscopy surgery, sports injury treatment, ACL reconstruction, and knee arthroscopy, helping athletes and active individuals return to full mobility.
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
            src="/images/specialties/arthroscopy-sports-medicine/hero-new.avif"
            alt="arthroscopy-sports-medicine Department - SRM Global Hospitals"
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
        <div className="stat-value">2+</div>
        <div className="stat-label">Globally Trained Arthroscopy Surgeons</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div className="stat-value">Advanced</div>
        <div className="stat-label">Arthroscopic Technology</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div className="stat-value">Faster</div>
        <div className="stat-label">Recovery &amp; Rehabilitation</div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <div className="stat-value">Comprehensive</div>
        <div className="stat-label">Sports Injury Care</div>
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
      <h2 className="section-title">Advanced Arthroscopy &amp; Sports Medicine Care in Chengalpattu</h2>
      <p>The Arthroscopy &amp; Sports Medicine Centre at SRM Global Hospitals, recognized as the best arthroscopy and sports medicine hospital in Chengalpattu, is dedicated to the comprehensive care of joint, ligament, and cartilage conditions through advanced, minimally invasive arthroscopy surgery. Our sports medicine doctors specialize in diagnosing, treating, and rehabilitating sports injuries and degenerative joint disorders, helping patients achieve faster recovery and long-term mobility.</p>
      <p>Our multidisciplinary team uses cutting-edge arthroscopic technology and evidence-based protocols to deliver personalized sports injury treatment for athletes, active individuals, and those with chronic joint issues, including ACL reconstruction, knee arthroscopy, shoulder arthroscopy, and meniscus repair. From injury prevention to complete post-operative sports rehabilitation, we work closely with our physiotherapy and rehabilitation teams to restore movement and enhance performance at every level.</p>
    </div>
    <div className="about-img reveal">
      <div className="img-placeholder">
        <Image
          src="/images/specialties/arthroscopy-sports-medicine/dept-1.avif"
          alt="Arthroscopy Suite / Consultation - SRM Global Hospitals"
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
      <p className="section-desc">Expert diagnosis and treatment across the full range of sports injuries and joint conditions.</p>
    </div>
    <div className="conditions-grid">
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/ACL-injuries.webp" alt="ACL Injuries" width={32} height={32} />
        </div>
        <h4>ACL Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/PCL-injuries.webp" alt="PCL Injuries" width={32} height={32} />
        </div>
        <h4>PCL Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/MCL-and-LCL-injuries.webp" alt="MCL & LCL Injuries" width={32} height={32} />
        </div>
        <h4>MCL &amp; LCL Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Multi-ligament-knee-injuries.webp" alt="Multi-Ligament Knee Injuries" width={32} height={32} />
        </div>
        <h4>Multi-Ligament Knee Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Meniscal-tears.webp" alt="Meniscal Tears" width={32} height={32} />
        </div>
        <h4>Meniscal Tears</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Meniscus-transplantation.webp" alt="Meniscus Transplantation" width={32} height={32} />
        </div>
        <h4>Meniscus Transplantation</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Cartilage-defects.webp" alt="Cartilage Defects" width={32} height={32} />
        </div>
        <h4>Cartilage Defects</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Osteochondral-injuries.webp" alt="Osteochondral Injuries" width={32} height={32} />
        </div>
        <h4>Osteochondral Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Patellar-dislocations.webp" alt="Patellar Dislocations" width={32} height={32} />
        </div>
        <h4>Patellar Dislocations</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Patellar-malalignment.webp" alt="Patellar Malalignment" width={32} height={32} />
        </div>
        <h4>Patellar Malalignment</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/High-tibial-osteotomy-HTO.webp" alt="High Tibial Osteotomy (HTO)" width={32} height={32} />
        </div>
        <h4>High Tibial Osteotomy (HTO)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Distal-femoral-osteotomy-DFO.webp" alt="Distal Femoral Osteotomy (DFO)" width={32} height={32} />
        </div>
        <h4>Distal Femoral Osteotomy (DFO)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Rotator-cuff-tears.webp" alt="Rotator Cuff Tears" width={32} height={32} />
        </div>
        <h4>Rotator Cuff Tears</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Shoulder-instability.webp" alt="Shoulder Instability" width={32} height={32} />
        </div>
        <h4>Shoulder Instability</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Shoulder-dislocations.webp" alt="Shoulder Dislocations" width={32} height={32} />
        </div>
        <h4>Shoulder Dislocations</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Labral-tears.webp" alt="Labral Tears" width={32} height={32} />
        </div>
        <h4>Labral Tears</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/SLAP-lesions.webp" alt="SLAP Lesions" width={32} height={32} />
        </div>
        <h4>SLAP Lesions</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Shoulder-impingement.webp" alt="Shoulder Impingement" width={32} height={32} />
        </div>
        <h4>Shoulder Impingement</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Frozen-shoulder.webp" alt="Frozen Shoulder" width={32} height={32} />
        </div>
        <h4>Frozen Shoulder</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Biceps-tendon-injuries.webp" alt="Biceps Tendon Injuries" width={32} height={32} />
        </div>
        <h4>Biceps Tendon Injuries</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Shoulder-arthritis-requiring-arthroplasty.webp" alt="Shoulder Arthritis Requiring Arthroplasty" width={32} height={32} />
        </div>
        <h4>Shoulder Arthritis &amp; Arthroplasty</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Early-stage-arthritis.webp" alt="Early-Stage Arthritis" width={32} height={32} />
        </div>
        <h4>Early-Stage Arthritis</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Tendon-ruptures.webp" alt="Tendon Ruptures" width={32} height={32} />
        </div>
        <h4>Tendon Ruptures</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Overuse-injuries-tendinitis-bursitis.webp" alt="Overuse Injuries (Tendinitis & Bursitis)" width={32} height={32} />
        </div>
        <h4>Overuse Injuries (Tendinitis &amp; Bursitis)</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Sports-related-fractures.webp" alt="Sports-Related Fractures" width={32} height={32} />
        </div>
        <h4>Sports-Related Fractures</h4>
      </div>
      <div className="condition-card reveal">
        <div className="condition-icon">
          <Image src="/images/departments/anaesthesiology-cardiac anaesthesia/arthroscopy-sports-medicine/Arthroscopic-assisted-fracture-fixation.webp" alt="Arthroscopic-Assisted Fracture Fixation" width={32} height={32} />
        </div>
        <h4>Arthroscopic-Assisted Fracture Fixation</h4>
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
      <p className="section-desc">Advanced arthroscopic and sports medicine procedures delivered by experienced orthopaedic surgeons.</p>
    </div>
    <div className="treatments-grid">
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        <h4>ACL Reconstruction</h4>
        <p>Advanced ACL reconstruction using arthroscopic techniques to restore knee stability and get athletes back to sport safely.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        <h4>Knee Arthroscopy</h4>
        <p>Minimally invasive knee arthroscopy for diagnosis and treatment of meniscal tears, cartilage damage, and ligament injuries.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <h4>Shoulder Arthroscopy</h4>
        <p>Precision shoulder arthroscopy for rotator cuff repair, shoulder instability, and labral tear treatment with minimal scarring.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        </div>
        <h4>Meniscus Repair</h4>
        <p>Meniscus repair and, where needed, meniscus transplantation to preserve joint function and delay degenerative changes.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        </div>
        <h4>Rotator Cuff Surgery</h4>
        <p>Arthroscopic rotator cuff surgery to repair torn tendons and restore shoulder strength and range of motion.</p>
      </div>
      <div className="treatment-card reveal">
        <div className="treatment-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
        </div>
        <h4>Sports Rehabilitation</h4>
        <p>Individualized sports rehabilitation and physiotherapy protocols, from prehabilitation to post-surgery recovery, to reduce reinjury risk.</p>
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
      <h2 className="section-title">Our Arthroscopy &amp; Sports Medicine Team</h2>
    </div>
    <div className="doctors-grid">
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/arthroscopy-sports-medicine/dr-saseendar.png" alt="Dr. Saseendar Shanmugasundaram" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Saseendar Shanmugasundaram</h4>
          <p>Senior Consultant, Arthroscopy &amp; Sports Medicine</p>
          <a href="#appointment" className="btn-primary">Book Appointment</a>
        </div>
      </div>
      <div className="doctor-card reveal">
        <div className="doctor-photo"><Image src="/images/specialties/arthroscopy-sports-medicine/dr-samundeeswari.png" alt="Dr. Samundeeswari S" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} /></div>
        <div className="doctor-info">
          <h4>Dr. Samundeeswari S</h4>
          <p>Consultant, Arthroscopy &amp; Sports Medicine</p>
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
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h4>Advanced Minimally Invasive Techniques</h4>
        <p>We perform high-precision arthroscopic surgeries using world-class technology that minimizes scarring and recovery time.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h4>Specialized Sports Medicine Expertise</h4>
        <p>Our team understands the unique needs of athletes and physically active individuals, delivering care that gets you back in the game.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h4>Comprehensive Joint Preservation Care</h4>
        <p>We focus on treatment as well as prevention and long-term joint health through cartilage restoration and ligament reconstruction.</p>
      </div>
      <div className="why-item">
        <div className="why-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
        </div>
        <h4>Individualized Rehabilitation Protocols</h4>
        <p>From prehabilitation to post-surgery physiotherapy, our rehab plans are tailored for faster recovery and reduced risk of reinjury.</p>
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
      <h2 className="section-title">Ready to Get Back in the Game?</h2>
      <p>Schedule a consultation with our sports medicine doctors for an evaluation of your injury. As the best arthroscopy and sports medicine hospital in Chengalpattu, we help athletes and active individuals recover fully and return to peak performance.</p>
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
      <p className="section-desc">Find answers to common questions about our arthroscopy and sports medicine services.</p>
    </div>
    <div className="faq-list">
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What is arthroscopy surgery and how does it work?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Arthroscopy surgery is a minimally invasive procedure that uses small incisions, a tiny camera called an arthroscope, and specialized instruments to diagnose and treat joint problems. Because it avoids large open incisions, patients typically experience less pain, less scarring, and a faster recovery than with traditional open surgery.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          When is ACL reconstruction necessary?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">ACL reconstruction is usually recommended when a torn anterior cruciate ligament causes knee instability, especially in athletes and active individuals who want to return to sports involving pivoting, jumping, or sudden direction changes. The procedure involves grafting new tissue to replace the torn ligament and restore knee stability.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What is the difference between meniscus repair and meniscus removal?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Meniscus repair involves stitching the torn cartilage back together to preserve as much natural tissue as possible, and is generally preferred for younger, active patients with repairable tears. When a tear cannot be repaired, a partial meniscectomy removes only the damaged tissue. Repair is favored when possible because it better preserves long-term joint health.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          How long is recovery after shoulder arthroscopy or rotator cuff surgery?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Recovery time varies depending on the procedure and severity of the injury. Minor arthroscopic repairs may allow return to light activity within a few weeks, while a full rotator cuff repair typically needs several months of structured sports rehabilitation and physiotherapy, with a gradual, guided return to activity.</div>
        </div>
      </div>
      <div className="faq-item reveal">
        <div className="faq-question" onClick={toggleFaq}>
          What does sports rehabilitation involve?
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className="faq-answer">
          <div className="faq-answer-inner">Sports rehabilitation is a structured, individualized program combining physiotherapy, strength training, and functional exercises. Our team guides patients from prehabilitation through post-surgery recovery, gradually rebuilding strength and mobility while reducing the risk of reinjury before a full return to sport.</div>
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
    <div className="sticky-cta-text">Dealing with a sports injury or joint pain?</div>
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
