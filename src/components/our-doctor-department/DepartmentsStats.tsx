import React from "react";

export default function DepartmentsStats() {
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "36px 40px" }}>
        <div className="stats-grid">
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "32px", fontWeight: 700, color: "#8b3dff" }}>42</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#888", marginTop: "4px" }}>
              Specialties &amp; Departments
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "32px", fontWeight: 700, color: "#1fb6e0" }}>8</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#888", marginTop: "4px" }}>
              Centres of Clinical Excellence
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "32px", fontWeight: 700, color: "#8b3dff" }}>200-Bed</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#888", marginTop: "4px" }}>
              Super Speciality Hospital
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
