import React from "react";
import Link from "next/link";

export default function DepartmentsHero() {
  return (
    <div style={{ background: "linear-gradient(135deg, #14092b 0%, #23134a 55%, #0d1b3a 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px 60px", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.5)",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "rgba(255, 255, 255, 0.5)", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ opacity: 0.4 }}>&rsaquo;</span>
          <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>Departments</span>
        </div>
        <h1
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "48px",
            lineHeight: 1.15,
            color: "#fff",
            margin: "0 0 16px",
            fontWeight: 700,
          }}
        >
          Our Departments
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(255, 255, 255, 0.6)",
            margin: "0 auto",
            maxWidth: "600px",
          }}
        >
          World-class infrastructure and cutting-edge facilities, we deliver unparalleled expert care tailored to the unique needs of every patient, at an affordable cost, with holistic and empathetic support.
        </p>
      </div>
    </div>
  );
}
