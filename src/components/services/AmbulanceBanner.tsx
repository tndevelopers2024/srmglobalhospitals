import React from "react";

export default function AmbulanceBanner() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 40px 0" }}>
      <div
        className="services-ambulance-grid"
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "48px",
          border: "1px solid rgba(0,0,0,0.05)",
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
              fontSize: "28px",
              color: "#1a1a2e",
              margin: "0 0 12px",
              fontWeight: 700,
            }}
          >
            Ambulance
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#555555",
              margin: 0,
            }}
          >
            Available 24/7. Fully equipped vehicles with trained paramedics. Whether it&apos;s a remote location or the city centre, help is one call away. Our ambulances carry cutting-edge medical equipment for stabilisation during transit.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
          <a
            href="tel:+919644496444"
            style={{
              background: "#6B4A98",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "100px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 16px rgba(107,74,152,0.3)",
              textDecoration: "none",
            }}
          >
            Call: +91 96444 96444
          </a>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#888888" }}>
            Available 24/7
          </div>
        </div>
      </div>
    </div>
  );
}
