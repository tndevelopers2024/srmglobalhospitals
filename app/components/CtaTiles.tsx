export default function CtaTiles() {
  return (
    <section className="cta-tiles" style={{ padding: '0' }}>
      <div className="cta-tiles-grid">
        <a href="#" className="cta-tile">
          <div>
            <div className="cta-tile-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>{" "}
            </div>{" "}
            <h3>Book an appointment</h3>{" "}
            <p>Schedule a visit with any specialist in under two minutes.</p>{" "}
          </div>{" "}
          <svg className="cta-tile-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>{" "}
        </a>{" "}
        <a href="#" className="cta-tile">
          <div>
            <div className="cta-tile-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 11h-6M19 8v6" />
              </svg>{" "}
            </div>{" "}
            <h3>Careers at SRM</h3>{" "}
            <p>Join a team of 100+ specialists and 800+ healthcare professionals.</p>{" "}
          </div>{" "}
          <svg className="cta-tile-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>{" "}
        </a>{" "}
        <a href="#" className="cta-tile">
          <div>
            <div className="cta-tile-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>{" "}
            </div>{" "}
            <h3>Health Packages</h3>{" "}
            <p>Master Health Checkup and condition-specific preventive panels.</p>{" "}
          </div>{" "}
          <svg className="cta-tile-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>{" "}
        </a>{" "}
        <a href="#" className="cta-tile">
          <div>
            <div className="cta-tile-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>{" "}
            </div>{" "}
            <h3>Treatment Enquiries</h3>{" "}
            <p>Send your reports for a second opinion or a written estimate.</p>{" "}
          </div>{" "}
          <svg className="cta-tile-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>{" "}
        </a>{" "}
      </div>{" "}
    </section>
  );
}
