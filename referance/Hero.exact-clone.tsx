export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow eyebrow">SRM Global Hospitals · Chengalpattu</div>{" "}
            <h1 className="hero-headline"> Super speciality care,<br /> held to a <em>higher</em> standard. </h1>{" "}
            <p className="hero-subline"> A 200-bed super speciality hospital with seven centres of excellence, AI-assisted patient monitoring, and dedicated international patient services. Every specialty, one campus. </p>{" "}
            <div className="hero-actions">
              <a href="#" className="btn btn-primary"> Book an appointment <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M5 12h14M13 5l7 7-7 7" />
</svg></a>{" "}
              <a href="#doctors" className="btn btn-outline">Find a doctor</a>{" "}
              <a href="tel:+919644496444" className="btn-emergency"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
</svg> Emergency · +91 96444 96444 </a>{" "}
            </div>{" "}
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="num" data-counter="7">0</span>{" "}
                <span className="lbl">Centres of Excellence</span>{" "}
              </div>{" "}
              <div className="hero-meta-item">
                <span className="num"><span data-counter="40">0</span>+</span>{" "}
                <span className="lbl">Specialties</span>{" "}
              </div>{" "}
              <div className="hero-meta-item">
                <span className="num"><span data-counter="100">0</span>+</span>{" "}
                <span className="lbl">Senior Specialists</span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="hero-trust">
              <span className="hero-trust-label">Accredited</span>{" "}
              <div className="hero-trust-badges">
                <span className="hero-trust-badge">NABH</span>{" "}
                <span className="hero-trust-badge">NABL</span>{" "}
                <span className="hero-trust-badge">ISO 9001</span>{" "}
                <span className="hero-trust-badge">Cashless · 100+ Insurers</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="hero-image-wrap">
            <div className="hero-panel" id="hero-panel">
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <linearGradient id="ecgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1fb6e0" />{" "}
                    <stop offset="100%" stopColor="#8b3dff" />{" "}
                  </linearGradient>{" "}
                  <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1fb6e0" />{" "}
                    <stop offset="100%" stopColor="#8b3dff" />{" "}
                  </linearGradient>{" "}
                  <linearGradient id="glucoseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1fb6e0" />{" "}
                    <stop offset="100%" stopColor="#8b3dff" />{" "}
                  </linearGradient>{" "}
                  <linearGradient id="breathGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1fb6e0" />{" "}
                    <stop offset="100%" stopColor="#8b3dff" />{" "}
                  </linearGradient>{" "}
                </defs>{" "}
              </svg>{" "}
              <div className="hero-panel-header">
                <span className="eyebrow">Explore our specialties</span>{" "}
              </div>{" "}
              <div className="hero-panel-tabs" role="tablist">
                <button className="hero-tab active" data-spec="cardio" role="tab">Cardiology</button>{" "}
                <button className="hero-tab" data-spec="neuro" role="tab">Neurology</button>{" "}
                <button className="hero-tab" data-spec="diabet" role="tab">Diabetes</button>{" "}
                <button className="hero-tab" data-spec="pulmo" role="tab">Pulmonology</button>{" "}
                <button className="hero-tab" data-spec="emerg" role="tab">Emergency</button>{" "}
              </div>{" "}
              <div className="hero-panel-stage">
                <div className="panel-content active" data-spec="cardio">
                  <span className="panel-institute">Centre of Excellence in Cardiac Sciences</span>{" "}
                  <h3 className="panel-headline">72 bpm and holding. Your heart team is already watching.</h3>{" "}
                  <div className="panel-visual">
                    <svg className="ecg-svg" viewBox="0 0 320 80" preserveAspectRatio="xMidYMid meet">
                      <path className="ecg-static" d="M0,40 L60,40 L72,40 L80,20 L88,60 L96,10 L104,55 L112,40 L160,40 L170,40 L178,30 L186,50 L194,20 L202,55 L210,40 L260,40 L268,38 L276,42 L284,40 L320,40" />{" "}
                      <path className="ecg-pulse" d="M0,40 L60,40 L72,40 L80,20 L88,60 L96,10 L104,55 L112,40 L160,40 L170,40 L178,30 L186,50 L194,20 L202,55 L210,40 L260,40 L268,38 L276,42 L284,40 L320,40" />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div className="panel-meta">
                    <div>
                      <div className="panel-meta-num">
                        <span data-counter="72">0</span>
                        <span className="unit">bpm</span>
                      </div>{" "}
                      <div className="caption" style={{ marginTop: '6px' }}>Average patient heart rate, ICU floor</div>{" "}
                    </div>{" "}
                    <div className="panel-meta-lbl">24x7 hybrid cath lab. Door-to-balloon under 60 min.</div>{" "}
                  </div>{" "}
                  <a href="#" className="panel-cta">Visit Centre of Excellence in Cardiac Sciences <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M5 12h14M13 5l7 7-7 7" />
</svg></a>{" "}
                </div>{" "}{" "}
                <div className="panel-content" data-spec="neuro">
                  <span className="panel-institute">Centre of Excellence in Neuro Sciences</span>{" "}
                  <h3 className="panel-headline">38 minutes from door to needle. Every second was planned.</h3>{" "}
                  <div className="panel-visual">
                    <svg className="brain-svg" viewBox="0 0 320 90" preserveAspectRatio="xMidYMid meet">
                      <path className="brain-wave brain-wave-3" d="M0,45 Q40,15 80,45 T160,45 T240,45 T320,45" />{" "}
                      <path className="brain-wave brain-wave-2" d="M0,45 Q40,25 80,45 T160,45 T240,45 T320,45" />{" "}
                      <path className="brain-wave brain-wave-1" d="M0,45 Q40,30 80,45 T160,45 T240,45 T320,45" />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div className="panel-meta">
                    <div>
                      <div className="panel-meta-num">
                        <span data-counter="38">0</span>
                        <span className="unit">min</span>
                      </div>{" "}
                      <div className="caption" style={{ marginTop: '6px' }}>Door-to-needle time, average stroke case</div>{" "}
                    </div>{" "}
                    <div className="panel-meta-lbl">24x7 stroke code. Interventional neuroradiology on site.</div>{" "}
                  </div>{" "}
                  <a href="#" className="panel-cta">Visit Centre of Excellence in Neuro Sciences <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M5 12h14M13 5l7 7-7 7" />
</svg></a>{" "}
                </div>{" "}{" "}
                <div className="panel-content" data-spec="diabet">
                  <span className="panel-institute">Diabetology &amp; Endocrinology</span>{" "}
                  <h3 className="panel-headline">Your HbA1c dropped 1.4 points in 90 days. Here is how.</h3>{" "}
                  <div className="panel-visual">
                    <svg className="glucose-svg" viewBox="0 0 200 130">
                      <path className="glucose-track" d="M30,110 A70,70 0 0,1 170,110" />{" "}
                      <path className="glucose-arc-cyan" d="M30,110 A70,70 0 0,1 170,110" />{" "}
                      <path className="glucose-arc" d="M30,110 A70,70 0 0,1 170,110" />{" "}
                      <text className="glucose-number" x="100" y="88">
                        <tspan data-counter="98">0</tspan>
                      </text>{" "}
                      <text x="100" y="108" fontFamily="DM Sans" fontSize="10" fill="rgba(26,31,92,0.55)" textAnchor="middle" letterSpacing="1.5">MG/DL · IDEAL ZONE</text>{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div className="panel-meta">
                    <div>
                      <div className="panel-meta-num">
                        <span data-counter="6">0</span>
                        <span className="unit">.4 %</span>
                      </div>{" "}
                      <div className="caption" style={{ marginTop: '6px' }}>Avg HbA1c reduction across our long-term cohort</div>{" "}
                    </div>{" "}
                    <div className="panel-meta-lbl">Personalised insulin titration. Nutrition built in.</div>{" "}
                  </div>{" "}
                  <a href="#" className="panel-cta">Visit Diabetes &amp; Endocrinology <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M5 12h14M13 5l7 7-7 7" />
</svg></a>{" "}
                </div>{" "}{" "}
                <div className="panel-content" data-spec="pulmo">
                  <span className="panel-institute">Department of Pulmonology</span>{" "}
                  <h3 className="panel-headline">Your lungs checked, your sleep tracked, your breathing restored.</h3>{" "}
                  <div className="panel-visual">
                    <svg className="breath-svg" viewBox="0 0 220 130">
                      <circle className="breath-ring" cx="110" cy="65" r="36" />{" "}
                      <circle className="breath-ring-2" cx="110" cy="65" r="36" />{" "}
                      <circle className="breath-circle" cx="110" cy="65" r="32" />{" "}
                      <text x="110" y="70" fontFamily="DM Sans" fontSize="14" fontWeight="600" fill="white" textAnchor="middle">SpO₂</text>{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div className="panel-meta">
                    <div>
                      <div className="panel-meta-num">
                        <span data-counter="98">0</span>
                        <span className="unit">%</span>
                      </div>{" "}
                      <div className="caption" style={{ marginTop: '6px' }}>SpO₂ target maintained across pulmonary care unit</div>{" "}
                    </div>{" "}
                    <div className="panel-meta-lbl">Bronchoscopy suite. PFT lab. Sleep medicine clinic.</div>{" "}
                  </div>{" "}
                  <a href="#" className="panel-cta">Visit Pulmonology <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M5 12h14M13 5l7 7-7 7" />
</svg></a>{" "}
                </div>{" "}{" "}
                <div className="panel-content" data-spec="emerg">
                  <span className="panel-institute">Centre of Excellence in Emergency &amp; Critical Care</span>{" "}
                  <h3 className="panel-headline">Ambulance dispatched. Trauma bay prepped. You are 8 minutes out.</h3>{" "}
                  <div className="panel-visual">
                    <svg className="ecg-svg" viewBox="0 0 320 80" preserveAspectRatio="xMidYMid meet">
                      <path className="ecg-static" d="M0,40 L40,40 L48,20 L56,60 L64,15 L72,55 L80,40 L120,40 L128,25 L136,55 L144,20 L152,60 L160,40 L200,40 L208,30 L216,50 L224,40 L320,40" style={{ stroke: 'rgba(217, 53, 53, 0.18)' }} />{" "}
                      <path className="ecg-pulse" d="M0,40 L40,40 L48,20 L56,60 L64,15 L72,55 L80,40 L120,40 L128,25 L136,55 L144,20 L152,60 L160,40 L200,40 L208,30 L216,50 L224,40 L320,40" style={{ stroke: 'var(--emergency)', filter: 'drop-shadow(0 0 6px rgba(217, 53, 53, 0.5))' }} />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div className="panel-meta">
                    <div>
                      <div className="panel-meta-num">
                        <span data-counter="8">0</span>
                        <span className="unit">min</span>
                      </div>{" "}
                      <div className="caption" style={{ marginTop: '6px' }}>Average ambulance dispatch time within 10 km</div>{" "}
                    </div>{" "}
                    <div className="panel-meta-lbl">Trauma bays, dedicated ICUs, 24x7 polytrauma response.</div>{" "}
                  </div>{" "}
                  <a href="tel:+919644496444" className="panel-cta" style={{ color: 'var(--emergency)' }}>Emergency: +91 96444 96444 <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M5 12h14M13 5l7 7-7 7" />
</svg></a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
