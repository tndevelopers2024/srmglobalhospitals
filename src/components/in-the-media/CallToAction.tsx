export default function CallToAction() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1400&q=80" alt="Team" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(107,74,152,0.92), rgba(34,148,211,0.88))" }}></div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 40px" }}>
        <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "38px", color: "#fff", margin: "0 0 16px", fontWeight: 700 }}>Media & Press Enquiries</h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.85)", margin: "0 auto 32px", maxWidth: "480px", lineHeight: 1.6 }}>
          For interview requests, expert commentary, or press information, contact our communications team.
        </p>
        <div style={{ display: "inline-flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ background: "#fff", color: "#6B4A98", padding: "16px 40px", borderRadius: "100px", fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
            Contact Press Team →
          </div>
          <div style={{ border: "2px solid rgba(255,255,255,0.6)", color: "#fff", padding: "14px 36px", borderRadius: "100px", fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
            Call: +91 96444 96444
          </div>
        </div>
      </div>
    </div>
  );
}
