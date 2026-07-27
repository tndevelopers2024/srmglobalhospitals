export default function SiteHeader() {
  return (
    <div className="header-nav-bar">
      <div className="container">
        <div className="header-nav-inner">
          <nav className="main-nav" role="navigation" aria-label="Main">
            <a href="#">Home</a>{" "}
            <a href="#specialties">Our Specialties</a>{" "}
            <a href="#coe">Clinical Excellence</a>{" "}
            <a href="#doctors">Doctors</a>{" "}
            <a href="#intl">International Patients</a>{" "}
            <a href="#">Services</a>{" "}
            <a href="#insights">Health Information</a>{" "}
          </nav>{" "}
          <div className="header-social">
            <a href="#" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>{" "}
            <a href="#" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
              </svg>
            </a>{" "}
            <a href="#" aria-label="X">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>{" "}
            <a href="#" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
              </svg>
            </a>{" "}
            <a href="#" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48L15.5 11.75z" />
              </svg>
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
