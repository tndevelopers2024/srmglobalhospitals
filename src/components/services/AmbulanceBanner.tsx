
export default function AmbulanceBanner() {
  return (
    <div className="services-section-wrap">
      <div className="services-ambulance-grid">
        <div>
          <h2 className="services-ambulance-title">
            Ambulance
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#555555",
              margin: 0,
            }}
          >
            Available 24/7. Fully equipped vehicles with trained paramedics. Whether it&apos;s a remote location or the city centre, help is one call away. Our ambulances carry cutting-edge medical equipment for stabilisation during transit.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
          <a
            href="tel:+919644496444"
            className="services-ambulance-btn"
          >
            Call: +91 96444 96444
          </a>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#888888" }}>
            Available 24/7
          </div>
        </div>
      </div>
    </div>
  );
}
