export default function NumbersBand() {
  return (
    <section className="numbers reveal" style={{ padding: '64px 0', background: 'linear-gradient(rgba(247,247,252,0.92), rgba(247,247,252,0.92)), url("/images/numbers-bg.jpg") center/cover no-repeat' }}>
      <div className="container">
        <div className="numbers-grid">
          <div className="number-item">
            <div className="number-value">
              <span data-counter="200">0</span>
              <em>+</em>
            </div>{" "}
            <div className="number-label">Inpatient Beds</div>{" "}
          </div>{" "}
          <div className="number-item">
            <div className="number-value">
              <span data-counter="100">0</span>
              <em>+</em>
            </div>{" "}
            <div className="number-label">Senior Specialists</div>{" "}
          </div>{" "}
          <div className="number-item">
            <div className="number-value">
              <span data-counter="7">0</span>
            </div>{" "}
            <div className="number-label">Centres of Excellence</div>{" "}
          </div>{" "}
          <div className="number-item">
            <div className="number-value">
              <span data-counter="40">0</span>
              <em>+</em>
            </div>{" "}
            <div className="number-label">Specialties</div>{" "}
          </div>{" "}
          <div className="number-item">
            <div className="number-value">24<em>/7</em></div>{" "}
            <div className="number-label">Emergency &amp; ICU</div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
