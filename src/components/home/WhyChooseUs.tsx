export default function WhyChooseUs() {
  return (
    <section className="why reveal">
      <div className="container">
        <div className="why-inner">
          <div className="why-left">
            <span className="eyebrow">Why SRM Global</span>{" "}
            <h2 className="display-2" style={{ color: 'var(--paper)' }}>The reasons our patients choose us, twice.</h2>{" "}
            <div style={{ marginTop: '32px', aspectRatio: '16/10', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src="/images/hospital-interior.jpg" alt="Modern hospital interior at SRM Global Hospitals" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75) contrast(1.1)' }} />{" "}
            </div>{" "}
          </div>{" "}
          <div className="why-right">
            <div className="why-card">
              <span className="why-num">01</span>{" "}
              <h3>Specialty Depth</h3>{" "}
              <p>Seven centres of excellence and 40+ specialties on a single campus. Multidisciplinary boards and cross-referrals in hours, not weeks.</p>{" "}
            </div>{" "}
            <div className="why-card">
              <span className="why-num">02</span>{" "}
              <h3>AI-Assisted Care</h3>{" "}
              <p>Continuous remote monitoring, predictive alerts, and contact-free vitals across ICU and ward beds. Clinicians notified before deterioration.</p>{" "}
            </div>{" "}
            <div className="why-card">
              <span className="why-num">03</span>{" "}
              <h3>International Standards</h3>{" "}
              <p>Treatment protocols benchmarked to global best practice. NABH and NABL aligned. Calibrated diagnostic labs.</p>{" "}
            </div>{" "}
            <div className="why-card">
              <span className="why-num">04</span>{" "}
              <h3>Patient-First Operations</h3>{" "}
              <p>Dedicated coordinators. Cashless with 100+ insurers. Single point of contact from first call to discharge follow-up.</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
