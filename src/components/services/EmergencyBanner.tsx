import React from "react";

export default function EmergencyBanner() {
  return (
    <div style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #1a1a2e 30%, #ffffffff 30%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px 60px" }}>
        <div
          className="services-emergency-grid"
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 12px 60px rgba(0,0,0,0.08)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div style={{ padding: "48px 44px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(107,74,152,0.08)",
                borderRadius: "8px",
                padding: "6px 14px",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "8px", height: "8px", background: "#ef4444", borderRadius: "50%" }}></div>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#6B4A98",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                24/7 Emergency
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "32px",
                color: "#1a1a2e",
                margin: "0 0 16px",
                fontWeight: 700,
              }}
            >
              Always open. Always staffed.
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#555555",
                margin: "0 0 24px",
              }}
            >
              Our emergency department operates round the clock with specialist doctors, emergency beds, and diagnostic equipment on-site. No waiting for referrals. The right doctor and the right equipment are here when you arrive.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#555555" }}>
                  Global standard medical aid
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#555555" }}>
                  Swift emergency response and triage
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#555555" }}>
                  Dedicated emergency beds
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#555555" }}>
                  On-site imaging, labs, and critical care
                </span>
              </div>
            </div>
            <a
              href="tel:+919644496444"
              style={{
                background: "#6B4A98",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "100px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 20px rgba(107,74,152,0.3)",
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 96444 96444
            </a>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg, #6B4A98, #2294D3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "400px",
            }}
          >
            <div style={{ textAlign: "center", color: "#ffffff" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "80px", fontWeight: 700, lineHeight: 1 }}>
                24/7
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.8)", marginTop: "8px" }}>
                Super Specialty Emergency
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
