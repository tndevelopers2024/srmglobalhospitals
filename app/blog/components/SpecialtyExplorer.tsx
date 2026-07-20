export default function SpecialtyExplorer() {
  return (
    <section className="specialty-explorer">
      <div className="container">
        <h2>Browse by specialty</h2>{" "}
        <div className="spec-tile-grid">
          <a href="#" className="spec-tile">
            <div className="spec-tile-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>{" "}
            <div className="spec-tile-text">
              <strong>Cardiology</strong>
              <span>32 articles</span>
            </div>{" "}
          </a>{" "}
          <a href="#" className="spec-tile">
            <div className="spec-tile-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 10v6M4.22 4.22l4.24 4.24m7.08 7.08l4.24 4.24" />
              </svg>
            </div>{" "}
            <div className="spec-tile-text">
              <strong>Neurology</strong>
              <span>24 articles</span>
            </div>{" "}
          </a>{" "}
          <a href="#" className="spec-tile">
            <div className="spec-tile-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2l8 8-8 12L4 10z" />
              </svg>
            </div>{" "}
            <div className="spec-tile-text">
              <strong>Orthopaedics</strong>
              <span>19 articles</span>
            </div>{" "}
          </a>{" "}
          <a href="#" className="spec-tile">
            <div className="spec-tile-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>{" "}
            <div className="spec-tile-text">
              <strong>Diabetes</strong>
              <span>17 articles</span>
            </div>{" "}
          </a>{" "}
          <a href="#" className="spec-tile">
            <div className="spec-tile-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2a4 4 0 0 0-4 4v3.5L4 14v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l-4-4.5V6a4 4 0 0 0-4-4z" />
              </svg>
            </div>{" "}
            <div className="spec-tile-text">
              <strong>Gastroenterology</strong>
              <span>15 articles</span>
            </div>{" "}
          </a>{" "}
          <a href="#" className="spec-tile">
            <div className="spec-tile-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>{" "}
            <div className="spec-tile-text">
              <strong>Women's Health</strong>
              <span>14 articles</span>
            </div>{" "}
          </a>{" "}
          <a href="#" className="spec-tile">
            <div className="spec-tile-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 7L9 18l-5-5" />
              </svg>
            </div>{" "}
            <div className="spec-tile-text">
              <strong>Paediatrics</strong>
              <span>12 articles</span>
            </div>{" "}
          </a>{" "}
          <a href="#" className="spec-tile">
            <div className="spec-tile-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3.6 9h16.8M3.6 15h16.8" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>{" "}
            <div className="spec-tile-text">
              <strong>All specialties</strong>
              <span>View all 18</span>
            </div>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
