import React from "react";
import Image from "next/image";

export interface DeptCardCTAProps {
  title?: string;
  description?: string;
  image?: string;
  bookText?: string;
  callText?: string;
  phone?: string;
}

export default function DeptCardCTA({
  title = "Talk to a Specialist",
  description = "Book an appointment or call us directly. We'll connect you with the right doctor for your concern.",
  image = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1400&q=80",
  bookText = "Book Appointment",
  callText = "Call Us",
  phone = "+919644496444",
}: DeptCardCTAProps) {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Image
        src={image}
        alt="Medical team"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
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
      />
      <div
        className="cta-inner"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "80px 40px",
        }}
      >
        <h2
          className="cta-title"
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "38px",
            color: "#fff",
            margin: "0 0 16px",
            fontWeight: 700,
          }}
        >
          {title}
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
          {description}
        </p>
        <div style={{ display: "inline-flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href={`tel:${phone}`}
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
              display: "inline-block",
            }}
          >
            {bookText}
          </a>
          <a
            href={`tel:${phone}`}
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
              display: "inline-block",
            }}
          >
            {callText}
          </a>
        </div>
      </div>
    </div>
  );
}
