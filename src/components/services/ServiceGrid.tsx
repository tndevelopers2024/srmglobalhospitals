import React from "react";

export default function ServiceGrid() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 40px 0" }}>
      <div className="services-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>

        {/* Pharmacy */}
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "48px", height: "48px", minWidth: "48px", background: "#f3eff8", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 8px" }}>Pharmacy</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#666666", margin: 0 }}>In-house pharmacy stocked with all prescribed medications. Fills prescriptions before you leave the hospital — no second trip needed.</p>
            </div>
          </div>
        </div>

        {/* Dialysis Centre */}
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "48px", height: "48px", minWidth: "48px", background: "#e8f4fc", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2294D3" strokeWidth="2">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 8px" }}>Dialysis Centre</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#666666", margin: 0 }}>Dedicated dialysis unit with modern machines and trained nephrology support. Scheduled and emergency dialysis sessions available.</p>
            </div>
          </div>
        </div>

        {/* Nutrition & Dietetics */}
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "48px", height: "48px", minWidth: "48px", background: "#f3eff8", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 8px" }}>Nutrition &amp; Dietetics</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#666666", margin: 0 }}>Clinical dietitians work with your medical team to build meal plans that support recovery, manage chronic conditions, and improve long-term health.</p>
            </div>
          </div>
        </div>

        {/* Occupational Therapy */}
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "48px", height: "48px", minWidth: "48px", background: "#e8f4fc", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2294D3" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 8px" }}>Occupational Therapy</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#666666", margin: 0 }}>Helps patients regain daily living skills after surgery, injury, or neurological events. Personalised rehabilitation programmes for each patient.</p>
            </div>
          </div>
        </div>

        {/* Speech Therapy */}
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "48px", height: "48px", minWidth: "48px", background: "#f3eff8", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 8px" }}>Speech Therapy</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#666666", margin: 0 }}>For patients recovering from stroke, head injury, or surgery affecting speech and swallowing. Assessment and treatment by certified speech-language pathologists.</p>
            </div>
          </div>
        </div>

        {/* Physiotherapy */}
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "48px", height: "48px", minWidth: "48px", background: "#e8f4fc", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2294D3" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 8px" }}>Physiotherapy</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#666666", margin: 0 }}>Post-surgical rehab, musculoskeletal recovery, and mobility restoration. In-patient and out-patient programmes with dedicated physiotherapy staff.</p>
            </div>
          </div>
        </div>

        {/* Laboratory */}
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "48px", height: "48px", minWidth: "48px", background: "#f3eff8", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B4A98" strokeWidth="2">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 8px" }}>Laboratory</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#666666", margin: 0 }}>NABL-certified diagnostic laboratory on-site. Blood work, pathology, microbiology, and biochemistry. Results delivered directly to your treating doctor.</p>
            </div>
          </div>
        </div>

        {/* Radiology */}
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px 32px", border: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "48px", height: "48px", minWidth: "48px", background: "#e8f4fc", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2294D3" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 600, color: "#1a1a2e", margin: "0 0 8px" }}>Radiology &amp; Imaging</h3>
              <p style={{ fontFamily: "Inter,sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#666666", margin: 0 }}>24/7 radio imaging services including X-ray, CT, MRI, ultrasound, and interventional radiology. On-site reporting for faster diagnosis.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
