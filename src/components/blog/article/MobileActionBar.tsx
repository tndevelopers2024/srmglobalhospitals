export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <div className="mobile-action-bar-inner">
        <a href="#" className="btn btn-primary">Book Appointment</a>{" "}
        <a href="tel:+919644496444" className="btn btn-outline">Call</a>{" "}
        <button className="btn-icon" aria-label="Share">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
