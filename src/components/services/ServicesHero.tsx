import React from "react";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1a1a2e",
      }}
    >
      {/* Hospital Services Hero Backdrop Image */}
      <Image
        src="/images/services/hero.avif"
        alt="SRM Global Hospitals Services - Ambulance, Emergency Entrance, and Hospital Care"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center 25%",
          zIndex: 1,
        }}
      />

      {/* Smooth Bottom-to-Top Gradient Overlay
          Subtle transparency at the top preserving subject details and brightness,
          gradually transitioning to deep dark tone toward the bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(26, 26, 46, 0.96) 0%, rgba(26, 26, 46, 0.8) 35%, rgba(26, 26, 46, 0.45) 70%, rgba(26, 26, 46, 0.08) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px 60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(107, 74, 152, 0.35)",
            border: "1px solid rgba(196, 168, 232, 0.4)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: "100px",
            padding: "6px 18px",
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            color: "#e2d1f7",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "20px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          Hospital Services
        </div>
        <h1
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "48px",
            lineHeight: 1.15,
            color: "#ffffff",
            margin: "0 0 16px",
            fontWeight: 700,
            textShadow: "0 2px 16px rgba(0, 0, 0, 0.6)",
          }}
        >
          Services
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(255, 255, 255, 0.9)",
            margin: "0 auto",
            maxWidth: "520px",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          Everything that supports your care: from the ambulance that brings you in to the pharmacy that fills your prescription on the way out.
        </p>
      </div>
    </div>
  );
}
