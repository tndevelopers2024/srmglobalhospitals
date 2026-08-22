import React from "react";
import Link from "next/link";

export interface DeptCardHeroProps {
  title: string;
  description: string;
  breadcrumb?: string;
}

export default function DeptCardHero({ title, description, breadcrumb }: DeptCardHeroProps) {
  return (
    <div style={{ background: "linear-gradient(135deg, #14092b 0%, #23134a 55%, #0d1b3a 100%)" }}>
      <div className="hero-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px 60px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.5)",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ opacity: 0.4 }}>›</span>
          <Link href="/#specialties" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
            Our Specialties
          </Link>
          <span style={{ opacity: 0.4 }}>›</span>
          <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>{breadcrumb || title}</span>
        </div>
        <h1
          className="hero-title"
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "48px",
            lineHeight: 1.15,
            color: "#fff",
            margin: "0 0 16px",
            fontWeight: 700,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(255, 255, 255, 0.6)",
            margin: 0,
            maxWidth: "560px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
