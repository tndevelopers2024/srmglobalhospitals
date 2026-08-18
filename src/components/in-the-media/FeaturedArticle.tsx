export default function FeaturedArticle() {
  return (
    <div style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #1a1a2e 30%, #fdf9f5 30%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px 60px" }}>
        <div style={{ background: "#fff", borderRadius: "24px", overflow: "hidden", boxShadow: "0 12px 60px rgba(0,0,0,0.08)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 0 }}>
          <div style={{ background: "linear-gradient(135deg, #6B4A98, #2294D3)", padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "6px 14px", marginBottom: "20px", alignSelf: "flex-start" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span style={{ fontFamily: "Poppins, sans-serif", fontSize: "11px", fontWeight: 600, color: "#fff", textTransform: "uppercase", letterSpacing: "1px" }}>Featured</span>
            </div>
            <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "32px", color: "#fff", margin: "0 0 16px", fontWeight: 700, lineHeight: 1.25 }}>Ranked 3rd for Cardiology in Chennai</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.8)", margin: "0 0 20px", lineHeight: 1.7 }}>
              SRM Global Hospital delivers world-class tertiary healthcare through Centres of Excellence in Cardiology, Orthopedics & Neurosciences, ranked 3rd for Cardiology in Chennai by Outlook Rankings, June 2026.
            </p>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>- Dr. V.P. Chandrasekaran, Chief Operating Officer</div>
          </div>
          <div style={{ padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "96px", fontWeight: 700, color: "#6B4A98", lineHeight: 1 }}>#3</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", color: "#555", marginTop: "8px" }}>Cardiology in Chennai</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#888", marginTop: "4px" }}>Outlook Rankings · June 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
