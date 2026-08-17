export default function AboutCoreValues() {
  return (
    <section className="about-values-section" aria-label="Core Values">
      <div className="about-values-header">
        <div className="about-values-eyebrow">What We Stand For</div>
        <h2 className="about-values-title">Core Values</h2>
        <p className="about-values-subtitle">
          Our enduring values and fundamental principles have consistently formed the bedrock of our
          existence, serving as unwavering guiding tenets.
        </p>
      </div>
      <div className="about-values-grid">
        <div className="about-value-card">
          <div className="about-value-icon-purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h3 className="about-value-card-title">Value Driven Patient Care</h3>
          <p className="about-value-card-text">
            We are committed to delivering the most effective care to patients through high quality
            service that is accessible.
          </p>
        </div>

        <div className="about-value-card">
          <div className="about-value-icon-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2294D3" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="about-value-card-title">Empathy</h3>
          <p className="about-value-card-text">
            At our practice, we approach every patient with empathy, maintain an open and optimistic
            mindset, and deliver comprehensive care.
          </p>
        </div>

        <div className="about-value-card">
          <div className="about-value-icon-purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
              <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
          </div>
          <h3 className="about-value-card-title">Engagement &amp; Satisfaction</h3>
          <p className="about-value-card-text">
            Our team provides expert service with a personal touch, ensuring every interaction is
            warm, positive and exceeds expectations.
          </p>
        </div>

        <div className="about-value-card">
          <div className="about-value-icon-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2294D3" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h3 className="about-value-card-title">Transparency &amp; Accountability</h3>
          <p className="about-value-card-text">
            We are committed to fostering open and transparent communication with our patients and
            their families.
          </p>
        </div>

        <div className="about-value-card">
          <div className="about-value-icon-purple">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h3 className="about-value-card-title">Privacy &amp; Integrity</h3>
          <p className="about-value-card-text">
            SRM Global Hospitals promises to maintain complete confidentiality over patient
            information and health records under all circumstances.
          </p>
        </div>

        <div className="about-value-card">
          <div className="about-value-icon-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2294D3" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <h3 className="about-value-card-title">Community Well-Being</h3>
          <p className="about-value-card-text">
            Our comprehensive services are designed to promote the health and welfare of society as
            a whole.
          </p>
        </div>
      </div>
    </section>
  );
}
