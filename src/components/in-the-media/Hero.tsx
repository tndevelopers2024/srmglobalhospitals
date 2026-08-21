export default function Hero() {
  return (
    <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2a2048 60%, #1a3050 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px 60px", textAlign: "center" }}>
        <div style={{
          display: "inline-block", background: "rgba(107,74,152,0.2)", border: "1px solid rgba(107,74,152,0.3)",
          borderRadius: "100px", padding: "6px 18px", fontFamily: "Inter, sans-serif", fontSize: "12px",
          fontWeight: 600, color: "#c4a8e8", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "20px"
        }}>Press & Media</div>
        <h1 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "48px", lineHeight: 1.15, color: "#fff", margin: "0 0 16px", fontWeight: 700 }}>In the Media</h1>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: "0 auto", maxWidth: "520px" }}>
          SRM Global Hospitals doctors featured across television, radio, and digital publications on health topics that matter.
        </p>
      </div>
    </div>
  );
}
