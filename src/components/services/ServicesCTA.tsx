import React from "react";
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 40px 100px" }}>
      <div
        className="services-cta-grid"
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #2a2048)",
          borderRadius: "24px",
          padding: "60px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: "32px",
              color: "#ffffff",
              margin: "0 0 12px",
              fontWeight: 700,
            }}
          >
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
          <Link
            href="/#contact"
            style={{
              background: "#6B4A98",
              color: "#ffffff",
              padding: "16px 40px",
              borderRadius: "100px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 24px rgba(107,74,152,0.5)",
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            Book Appointment →
          </Link>
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
