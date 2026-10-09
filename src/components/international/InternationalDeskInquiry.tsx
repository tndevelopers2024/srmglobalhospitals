"use client";

import { useState } from "react";

export default function InternationalDeskInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    phone: "",
    specialty: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="intl-section intl-section-alt" id="international-desk-inquiry" aria-label="International Patient Desk Inquiry">
      <div className="intl-container">
        <div className="intl-section-header text-center">
          <span className="intl-eyebrow">DIRECT INTERNATIONAL DESK</span>
          <h2 className="intl-h2">Request a Callback from Our International Desk</h2>
          <p className="intl-lead-p" style={{ margin: "0 auto", maxWidth: "680px" }}>
            Reach out directly to our dedicated international patient team for treatment estimates, medical opinion, visa assistance, and appointment coordination.
          </p>
        </div>

        <div className="intl-inquiry-box">
          <div className="intl-inquiry-grid">
            {/* Contact details & direct lines */}
            <div>
              <h3 style={{ fontFamily: "var(--font-display, 'Poppins')", fontSize: "20px", fontWeight: 600, color: "#0e1240", marginBottom: "12px" }}>
                Contact Us for International Patient Services
              </h3>
              <p style={{ fontSize: "15px", lineHeight: "1.65", color: "#64748b", margin: "0 0 20px" }}>
                Our team is available round the clock to answer your queries and assist with your journey to Chennai.
              </p>

              <div className="intl-contact-pills">
                <a href="tel:+919644496444" className="intl-contact-pill">
                  <div className="intl-contact-pill-icon" style={{ background: "#fef2f2", color: "#dc2626" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.32 1.58.59 2.33" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>24/7 Emergency Line</div>
                    <strong style={{ color: "#0e1240" }}>+91 96444 96444</strong>
                  </div>
                </a>

                <a href="tel:+918925856353" className="intl-contact-pill">
                  <div className="intl-contact-pill-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.8.32 1.58.59 2.33" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>International Desk Helpline</div>
                    <strong style={{ color: "#0e1240" }}>+91 8925856353</strong>
                  </div>
                </a>

                <a
                  href="https://api.whatsapp.com/send/?phone=919644496444&text=Hello%20SRM%20Global%20Hospitals%20International%20Desk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="intl-contact-pill"
                >
                  <div className="intl-contact-pill-icon" style={{ background: "#f0fdf4", color: "#16a34a" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>WhatsApp International Support</div>
                    <strong style={{ color: "#0e1240" }}>+91 96444 96444</strong>
                  </div>
                </a>

                <a href="mailto:info@srmglobalhospitals.com" className="intl-contact-pill">
                  <div className="intl-contact-pill-icon" style={{ background: "#fdf4ff", color: "#6b4a98" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>Email Support</div>
                    <strong style={{ color: "#0e1240" }}>info@srmglobalhospitals.com</strong>
                  </div>
                </a>

                <div className="intl-contact-pill" style={{ cursor: "default" }}>
                  <div className="intl-contact-pill-icon" style={{ background: "#f8fafc", color: "#475569" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>Hospital Address</div>
                    <span style={{ color: "#0e1240", fontSize: "13.5px", fontWeight: 500 }}>
                      Mahatma Gandhi Rd, Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603 203
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Request Form */}
            <div>
              <div style={{ background: "#ffffff", padding: "32px", borderRadius: "18px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ fontFamily: "var(--font-display, 'Poppins')", fontSize: "18px", fontWeight: 600, color: "#0e1240", marginBottom: "8px" }}>
                  Book an Appointment with Our International Patient Desk
                </h4>
                <p style={{ fontSize: "14px", color: "#64748b", margin: "0 0 20px" }}>
                  Fill in your details below and an international coordinator will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div style={{ padding: "24px", background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "12px", textAlign: "center" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#22c55e", color: "#ffffff", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h5 style={{ fontSize: "17px", fontWeight: 700, color: "#14532d", margin: "0 0 6px" }}>Request Received</h5>
                    <p style={{ fontSize: "14px", color: "#166534", margin: 0 }}>
                      Thank you. Our International Patient Coordinator will contact you shortly with personalized guidance.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#1e293b", marginBottom: "6px" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "8px",
                          border: "1px solid #cbd5e1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#1e293b", marginBottom: "6px" }}>
                          Country of Origin *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. UAE, UK, USA"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "11px 14px",
                            borderRadius: "8px",
                            border: "1px solid #cbd5e1",
                            fontSize: "14px",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#1e293b", marginBottom: "6px" }}>
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+Country Code & Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "11px 14px",
                            borderRadius: "8px",
                            border: "1px solid #cbd5e1",
                            fontSize: "14px",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#1e293b", marginBottom: "6px" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "8px",
                          border: "1px solid #cbd5e1",
                          fontSize: "14px",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#1e293b", marginBottom: "6px" }}>
                        Medical Specialty Required
                      </label>
                      <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "8px",
                          border: "1px solid #cbd5e1",
                          fontSize: "14px",
                          background: "#ffffff",
                          outline: "none",
                        }}
                      >
                        <option value="General Inquiry">General Consultation Inquiry</option>
                        <option value="Cardiac Care">Cardiac Care &amp; Heart Surgery</option>
                        <option value="Liver Disease & Transplant">Liver Disease &amp; Transplant</option>
                        <option value="Gastroenterology">Gastroenterology</option>
                        <option value="Oncology">Oncology &amp; Radiation Therapy</option>
                        <option value="Orthopedics & Spine">Orthopedics &amp; Spine Care</option>
                        <option value="Women's Health">Women’s Health &amp; Gynecology</option>
                        <option value="General Surgery & Rehab">General Surgery &amp; Rehabilitation</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#1e293b", marginBottom: "6px" }}>
                        Brief Medical Query / Message
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about the medical condition or travel plans..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          borderRadius: "8px",
                          border: "1px solid #cbd5e1",
                          fontSize: "14px",
                          resize: "vertical",
                          outline: "none",
                        }}
                      />
                    </div>

                    <button type="submit" className="intl-btn-primary" style={{ width: "100%", marginTop: "8px" }}>
                      Request a Callback from Our International Desk
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
