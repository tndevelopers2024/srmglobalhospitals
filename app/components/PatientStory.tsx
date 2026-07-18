export default function PatientStory() {
  return (
    <section className="section-mist reveal">
      <div className="container">
        <div className="story-grid">
          <div className="story-image">
            <img src="/images/patient-recovery.jpg" alt="Patient and clinician during recovery consultation" />{" "}
          </div>{" "}
          <div className="story-content">
            <span className="eyebrow">A patient story</span>{" "}
            <p className="story-quote"> They told me the surgery would take four hours. It took three. I was eating solid food by day two and home by day eleven. My family still cannot believe it. </p>{" "}
            <div className="story-attribution">
              <div className="story-attribution-avatar">L</div>{" "}
              <div className="story-attribution-text">
                <strong>Lavanya K.</strong>{" "}
                <span>Treated at Centre of Excellence in Cardiac Sciences · Chennai</span>{" "}
              </div>{" "}
            </div>{" "}
            <div style={{ marginTop: '32px' }}>
              <a href="#" className="link-arrow">Read more patient stories<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M5 12h14M13 5l7 7-7 7" />
</svg></a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
