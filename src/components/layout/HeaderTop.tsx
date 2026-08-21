import Link from "next/link";

export default function HeaderTop() {
  return (
    <div className="header-top" id="nav-wrap">
      <div className="container">
        <div className="header-top-inner">
          <Link href="/" className="brand" aria-label="SRM Global Hospitals">
            <img src="https://srmglobalhospitals.com/wp-content/uploads/2023/01/srm-logo-final.png" alt="SRM Global Hospitals" className="brand-logo" />{" "}
          </Link>{" "}
          <div className="header-quick-actions">
            <a href="tel:+919644496444" className="header-pill emergency-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.32 1.58.59 2.33" />
</svg> For Emergency +91 96444 96444 </a>{" "}
            <Link href="/#packages" className="header-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <path d="M22 11h-6M19 8v6" />
</svg> Master Health Checkup </Link>{" "}
            <Link href="/best-doctor" className="header-pill"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  <circle cx="11" cy="11" r="7" />
  <path d="m21 21-4.35-4.35" />
</svg> Find A Doctor </Link>{" "}
          </div>{" "}
          <div className="header-secondary">
            <nav className="secondary-nav" aria-label="Secondary">
              <div className="nav-dropdown">
                <Link href="#" className="nav-dropdown-toggle">
                  About Us{" "}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <div className="nav-dropdown-menu">
                  <Link href="/about">About Us</Link>
                  <Link href="/about#leader">Leadership Team</Link>
                </div>
              </div>{" "}
              <div className="nav-dropdown">
                <Link href="/blog" className="nav-dropdown-toggle">
                  Media{" "}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <div className="nav-dropdown-menu">
                  <Link href="/blog">Blogs</Link>
                  <Link href="/blog">Newsletters</Link>
                  <Link href="/blog">Press Releases</Link>
                </div>
              </div>{" "}
              <Link href="/#contact">Contact Us</Link>{" "}
            </nav>{" "}
            <a href="tel:+919644496444" className="btn btn-primary header-cta"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <rect x="3" y="4" width="18" height="18" rx="2" />
  <path d="M16 2v4M8 2v4M3 10h18" />
</svg> Book An Appointment </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
