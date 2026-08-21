import React from "react";

export default function DepartmentsCTA() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img
        src="/images/best-doctor/hero-image.jpg"
        alt="Team"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(139,61,255,0.92), rgba(31,182,224,0.88))",
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 40px" }}>
        <h2
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "38px",
            color: "#fff",
            margin: "0 0 16px",
            fontWeight: 700,
          }}
        >
          Not Sure Which Specialist You Need?
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "17px",
            color: "rgba(255,255,255,0.85)",
            margin: "0 auto 32px",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          Book an appointment or call us directly. We&apos;ll connect you with the right department and doctor for your concern.
        </p>
        <div style={{ display: "inline-flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="tel:+919644496444"
            style={{
              background: "#fff",
              color: "#8b3dff",
              padding: "14px 36px",
              borderRadius: "100px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Book Appointment
          </a>
          <a
            href="tel:+919644496444"
            style={{
              border: "2px solid rgba(255,255,255,0.6)",
              color: "#fff",
              padding: "12px 36px",
              borderRadius: "100px",
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
