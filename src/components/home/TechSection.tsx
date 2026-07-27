export default function TechSection() {
  return (
    <section className="reveal">
      <div className="container">
        <div className="section-head" style={{ marginBottom: '32px' }}>
          <div>
            <span className="eyebrow">Technology in Practice</span>{" "}
            <h2 className="display-2">AI that watches.<br />Robots that assist.<br />Clinicians who decide.</h2>{" "}
            <p className="body-lg lead">Every system listed here runs on this campus today. Not planned. Not piloted. Running.</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="tech-grid">
          <div>
            <div className="tech-feature">
              <div className="tech-feature-head">
                <span className="tech-feature-num">01</span>{" "}
                <h3>Real-Time Remote Monitoring</h3>{" "}
              </div>{" "}
              <p>Continuous tracking of vitals across ICU and ward beds, viewable on the clinician's device. No delay between deterioration and response.</p>{" "}
            </div>{" "}
            <div className="tech-feature">
              <div className="tech-feature-head">
                <span className="tech-feature-num">02</span>{" "}
                <h3>Predictive Clinical Alerts</h3>{" "}
              </div>{" "}
              <p>AI surfaces patterns of decline 4 to 6 hours before a conventional early warning score would. The intensivist sees it first.</p>{" "}
            </div>{" "}
            <div className="tech-feature">
              <div className="tech-feature-head">
                <span className="tech-feature-num">03</span>{" "}
                <h3>Touch-Free Vitals Capture</h3>{" "}
              </div>{" "}
              <p>Contactless sensors track respiration, motion, and oxygen levels without the patient ever being disturbed during rest.</p>{" "}
            </div>{" "}
            <div className="tech-feature">
              <div className="tech-feature-head">
                <span className="tech-feature-num">04</span>{" "}
                <h3>Hybrid Operating Theatres</h3>{" "}
              </div>{" "}
              <p>Imaging-equipped OTs that allow surgical and interventional procedures in a single setting, reducing transfers and total anaesthesia time.</p>{" "}
            </div>{" "}
            <div className="tech-feature">
              <div className="tech-feature-head">
                <span className="tech-feature-num">05</span>{" "}
                <h3>Calibrated Diagnostic Labs</h3>{" "}
              </div>{" "}
              <p>Equipment validated through testing and calibration laboratories. Reports you can trust, comparable across visits and across hospitals.</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="tech-visual">
            <img src="/images/tech-visual.jpg" alt="" style={{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', opacity: '0.12', mixBlendMode: 'luminosity' }} />{" "}
            <div>
              <span className="tech-visual-eyebrow">AI-Assisted Care</span>{" "}
              <h3 className="tech-visual-title">Clinical decisions get easier when the data shows up earlier.</h3>{" "}
            </div>{" "}
            <div>
              <div className="tech-visual-stats">
                <div>
                  <div className="tech-stat-val">4 hr</div>{" "}
                  <div className="tech-stat-lbl">Earlier alerting vs. EWS</div>{" "}
                </div>{" "}
                <div>
                  <div className="tech-stat-val">24/7</div>{" "}
                  <div className="tech-stat-lbl">Continuous monitoring</div>{" "}
                </div>{" "}
                <div>
                  <div className="tech-stat-val">100%</div>{" "}
                  <div className="tech-stat-lbl">ICU bed coverage</div>{" "}
                </div>{" "}
                <div>
                  <div className="tech-stat-val">0</div>{" "}
                  <div className="tech-stat-lbl">Patient disturbance</div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
