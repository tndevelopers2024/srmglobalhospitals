export default function PatientStory() {
  return (
    <section id="stories" className="section-mist reveal">
      <div className="container">
        <div className="story-grid">
          <div className="story-image">
            <img src="/images/home/a-patient-story.png" alt="Patient and clinician during recovery consultation" />{" "}
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

          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
