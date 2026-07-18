export default function Triage() {
  return (
    <section className="triage">
      <div className="container">
        <div className="triage-grid">
          <a href="#" className="triage-card">
            <div className="triage-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>{" "}
            </div>{" "}
            <div className="triage-card-content">
              <span className="lbl">Book an appointment</span>{" "}
              <span className="val">Schedule online in 2 minutes</span>{" "}
            </div>{" "}
            <svg className="triage-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
          <a href="#" className="triage-card">
            <div className="triage-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>{" "}
            </div>{" "}
            <div className="triage-card-content">
              <span className="lbl">Talk to a doctor</span>{" "}
              <span className="val">Tele-consult or in person</span>{" "}
            </div>{" "}
            <svg className="triage-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
          <a href="tel:+919644496444" className="triage-card">
            <div className="triage-card-icon emergency">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>{" "}
            </div>{" "}
            <div className="triage-card-content">
              <span className="lbl">24x7 Emergency</span>{" "}
              <span className="val phone">+91 96444 96444</span>{" "}
            </div>{" "}
            <svg className="triage-card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
