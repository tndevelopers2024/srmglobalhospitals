export default function HealthInsights() {
  return (
    <section id="insights" className="reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Health Insights</span>{" "}
            <h2 className="display-2">Written by our doctors. Read by you.</h2>{" "}
            <p className="body-lg lead">Conditions explained without jargon. Treatments compared without bias. All from the specialists who actually do them.</p>{" "}
          </div>{" "}
          <a href="#" className="link-arrow">All articles<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M5 12h14M13 5l7 7-7 7" />
</svg></a>{" "}
        </div>{" "}
        <div className="insights-grid">
          <a href="#" className="insight-card">
            <div className="insight-image">
              <img src="/images/blog-sciatica.jpg" alt="Sciatica pain treatment" />{" "}
            </div>{" "}
            <div className="insight-meta">
              <span>Spine Care</span>{" "}
              <span className="insight-meta-dot" />{" "}
              <span className="insight-meta-date">7 min read</span>{" "}
            </div>{" "}
            <h3>Sciatica Pain: Understand the cause and find the right relief</h3>{" "}
            <p>What sciatica actually is, when to consider imaging, and the realistic outcomes from conservative care versus surgery.</p>{" "}
          </a>{" "}
          <a href="#" className="insight-card">
            <div className="insight-image">
              <img src="/images/blog-cerebral-palsy.jpg" alt="Cerebral palsy in children" />{" "}
            </div>{" "}
            <div className="insight-meta">
              <span>Paediatrics</span>{" "}
              <span className="insight-meta-dot" />{" "}
              <span className="insight-meta-date">9 min read</span>{" "}
            </div>{" "}
            <h3>Types of cerebral palsy: What it means for your child</h3>{" "}
            <p>The four major types, how they affect movement, and the long-term care pathways that change quality of life.</p>{" "}
          </a>{" "}
          <a href="#" className="insight-card">
            <div className="insight-image">
              <img src="/images/blog-multiple-sclerosis.jpg" alt="Multiple sclerosis treatment" />{" "}
            </div>{" "}
            <div className="insight-meta">
              <span>Neurology</span>{" "}
              <span className="insight-meta-dot" />{" "}
              <span className="insight-meta-date">8 min read</span>{" "}
            </div>{" "}
            <h3>Multiple sclerosis: What expert care at the right time can do</h3>{" "}
            <p>Why timing matters in MS treatment, what disease-modifying therapy looks like in practice, and what to expect.</p>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
