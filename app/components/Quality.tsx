export default function Quality() {
  return (
    <section className="quality">
      <div className="container">
        <div className="quality-inner">
          <div className="quality-head">
            <span className="eyebrow" style={{ display: 'block', marginBottom: '12px', color: 'var(--purple)' }}>Quality &amp; Accreditation</span>{" "}
            <h3 className="h2">Care that meets the standards you expect.</h3>{" "}
          </div>{" "}
          <div className="quality-badges">
            <div className="quality-badge">
              <div className="quality-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>{" "}
              </div>{" "}
              <strong>NABH</strong>{" "}
              <span>Accredited</span>{" "}
            </div>{" "}
            <div className="quality-badge">
              <div className="quality-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5">
                  <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>{" "}
              </div>{" "}
              <strong>NABL</strong>{" "}
              <span>Certified Labs</span>{" "}
            </div>{" "}
            <div className="quality-badge">
              <div className="quality-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>{" "}
              </div>{" "}
              <strong>ISO 9001</strong>{" "}
              <span>Quality Systems</span>{" "}
            </div>{" "}
            <div className="quality-badge">
              <div className="quality-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5">
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <path d="M1 10h22" />
                </svg>{" "}
              </div>{" "}
              <strong>Cashless</strong>{" "}
              <span>100+ Insurers</span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
