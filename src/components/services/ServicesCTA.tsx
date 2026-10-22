
export default function ServicesCTA() {
  return (
    <div className="services-section-wrap cta-wrap">
      <div className="services-cta-grid">
        <div>
          <h2 className="services-cta-title">
            Need a service or have a question?
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              color: "rgba(255,255,255,0.6)",
              margin: 0,
              maxWidth: "480px",
              lineHeight: 1.6,
            }}
          >
            Call the hospital directly or book an appointment online. Our front desk can route you to the right department.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
          <a
            href="tel:+919644496444"
            className="services-cta-btn"
          >
            Book Appointment →
          </a>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
            or call{" "}
            <a href="tel:+919644496444" style={{ color: "#ffffff", fontWeight: 600, textDecoration: "none" }}>
              +91 96444 96444
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
