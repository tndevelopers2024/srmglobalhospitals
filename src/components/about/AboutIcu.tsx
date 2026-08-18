export default function AboutIcu() {
  return (
    <section className="about-icu-section" aria-label="Intensive Care Unit">
      <div className="about-icu-container">
        <div className="about-icu-header">
          <div className="about-icu-eyebrow">Critical Care</div>
          <h2 className="about-icu-title">Intensive Care Unit</h2>
          <p className="about-icu-subtitle">
            State-of-the-art ICU facilities with round-the-clock monitoring and expert critical care
            teams.
          </p>
        </div>
        <div className="about-icu-grid">
          <img
            src="/images/about-us/icu/image-1.avif"
            alt="State-of-the-art Intensive Care Unit at SRM Global Hospitals"
            className="about-icu-img"
          />
          <div className="about-icu-cards-grid">
            <div className="about-icu-card">
              <h3 className="about-icu-card-title-purple">Medical ICU</h3>
              <p className="about-icu-card-desc">
                Advanced monitoring for critically ill medical patients
              </p>
            </div>
            <div className="about-icu-card">
              <h3 className="about-icu-card-title-blue">Surgical ICU</h3>
              <p className="about-icu-card-desc">
                Post-operative critical care with specialized teams
              </p>
            </div>
            <div className="about-icu-card">
              <h3 className="about-icu-card-title-purple">Cardiac ICU</h3>
              <p className="about-icu-card-desc">
                Dedicated cardiac monitoring and intervention
              </p>
            </div>
            <div className="about-icu-card">
              <h3 className="about-icu-card-title-blue">Neonatal ICU</h3>
              <p className="about-icu-card-desc">Specialized neonatal care for newborns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
