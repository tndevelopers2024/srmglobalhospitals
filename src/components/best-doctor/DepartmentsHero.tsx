import React from "react";
import Link from "next/link";

export default function DepartmentsHero() {
  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "360px" }}>
      <img
        src="/images/best-doctor/our-department-1.avif"
        alt="SRM Global Hospitals Departments"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(20, 9, 43, 0.84) 0%, rgba(35, 19, 74, 0.78) 55%, rgba(13, 27, 58, 0.84) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px 60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ opacity: 0.5 }}>&rsaquo;</span>
          <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>Departments</span>
        </div>
        <h1
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "48px",
            lineHeight: 1.15,
            color: "#fff",
            margin: "0 0 16px",
            fontWeight: 700,
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Our Departments
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(255, 255, 255, 0.85)",
            margin: "0 auto",
            maxWidth: "600px",
            textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          World-class infrastructure and cutting-edge facilities, we deliver unparalleled expert care tailored to the unique needs of every patient, at an affordable cost, with holistic and empathetic support.
        </p>
      </div>
    </div>
  );
}
