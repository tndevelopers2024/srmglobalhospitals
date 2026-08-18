export default function AboutVisionMission() {
  return (
    <section className="about-vm-section" aria-label="Our Vision and Mission">
      <div className="about-vm-pattern" aria-hidden="true" />
      <div className="about-vm-container">
        <div className="about-vm-header">
          <h2 className="about-vm-title">Our Vision &amp; Mission</h2>
        </div>
        <div className="about-vm-grid">
          <div className="about-vm-card">
            <div className="about-vm-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="about-vm-card-title">Vision</h3>
            <p className="about-vm-card-text">
              To become globally reputed hospital delivering high quality patient centric healthcare
              service for the well-being of humanity.
            </p>
          </div>
          <div className="about-vm-card">
            <div className="about-vm-icon-box">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="about-vm-card-title">Mission</h3>
            <p className="about-vm-card-text">
              To deliver patient friendly service of global standards to each patient in an ethically,
              timely, and cost appropriate manner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
