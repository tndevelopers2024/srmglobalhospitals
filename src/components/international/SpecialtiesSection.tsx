export default function SpecialtiesSection() {
  const specialties = [
    {
      title: "Cardiac Care",
      desc: "Cardiac care, including procedures such as coronary angioplasty and surgery for valve disorders.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      title: "Liver Disease & Transplant",
      desc: "Liver disease management, including liver transplant and follow-up programs.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z" />
        </svg>
      ),
    },
    {
      title: "Gastroenterology",
      desc: "Gastroenterology for gastrointestinal disorders, inflammatory bowel disease, and cancers of the digestive tract.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 2v20M17 2v20M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Oncology",
      desc: "Oncology with advanced therapies like stereotactic radiotherapy.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 14.14 14.14" />
        </svg>
      ),
    },
    {
      title: "Orthopedics & Spine Care",
      desc: "Orthopedics, spine care, and joint replacements.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M8 5h8M7 9h10M6 13h12M7 17h10M8 21h8" />
        </svg>
      ),
    },
    {
      title: "Women's Health",
      desc: "Women's health programs covering pregnancy, infertility, and gynecology.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="9" r="6" />
          <path d="M12 15v7M9 19h6" />
        </svg>
      ),
    },
    {
      title: "General Surgery & Rehabilitation",
      desc: "General surgery, rehabilitation, and patient care across different specialties.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="intl-section intl-section-alt" id="specialties" aria-label="Specialties International Patients Seek">
      <div className="intl-container">
        <div className="intl-section-header text-center">
          <span className="intl-eyebrow">CENTRES OF EXCELLENCE</span>
          <h2 className="intl-h2">Specialties International Patients Seek</h2>
          <p className="intl-lead-p" style={{ margin: '0 auto', maxWidth: '720px' }}>
            Comprehensive clinical departments offering advanced diagnosis, world-class treatments, and dedicated post-procedure rehabilitation.
          </p>
        </div>

        <div className="intl-specialties-grid">
          {specialties.map((item, idx) => (
            <div className="intl-specialty-card" key={idx}>
              <div className="intl-specialty-icon">
                {item.icon}
              </div>
              <div className="intl-specialty-content">
                <h3 className="intl-specialty-title">{item.title}</h3>
                <p className="intl-specialty-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
