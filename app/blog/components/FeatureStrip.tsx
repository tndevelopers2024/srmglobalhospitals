export default function FeatureStrip() {
  return (
    <section className="feature-strip reveal">
      <a href="/blog/multiple-sclerosis-expert-care" className="feature-main">
        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=85" alt="" />{" "}
        <div className="feature-overlay">
          <span className="feature-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
</svg> Editor's Pick · Neurology </span>{" "}
          <h2>Multiple sclerosis: What expert care at the right time can actually do.</h2>{" "}
          <p>Why the first six months after diagnosis matter more than the next six years. A neurologist walks through what disease-modifying therapy looks like in practice.</p>{" "}
          <div className="feature-meta-row">
            <span>Dr. R. Muralidharan</span>{" "}
            <span>·</span>{" "}
            <span>12 min read</span>{" "}
            <span>·</span>{" "}
            <span>14,230 reads</span>{" "}
          </div>{" "}
        </div>{" "}
      </a>{" "}
      <div className="feature-side">
        <a href="/blog/multiple-sclerosis-expert-care" className="feature-side-card">
          <span className="feature-side-tag"><span style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%', display: 'inline-block' }} />Cardiology · Trending</span>{" "}
          <h3>Chest pain at 40: When is it your heart, and when is it not?</h3>{" "}
          <div className="feature-side-meta">
            <span>Dr. T.R. Muralidharan</span>{" "}
            <span>·</span>{" "}
            <span>6 min</span>{" "}
          </div>{" "}
        </a>{" "}
        <a href="/blog/multiple-sclerosis-expert-care" className="feature-side-card">
          <span className="feature-side-tag"><span style={{ width: '6px', height: '6px', background: '#14b8a6', borderRadius: '50%', display: 'inline-block' }} />Diabetes · Most read</span>{" "}
          <h3>Your HbA1c stopped falling. Here is what your endocrinologist looks at next.</h3>{" "}
          <div className="feature-side-meta">
            <span>Dr. Nanda Ravi</span>{" "}
            <span>·</span>{" "}
            <span>8 min</span>{" "}
          </div>{" "}
        </a>{" "}
      </div>{" "}
    </section>
  );
}
