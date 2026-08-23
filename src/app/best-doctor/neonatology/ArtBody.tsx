import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArtBody() {
  return (
    <>
      {/* HERO */}
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
            <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>Neonatology</span>
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
            Neonatology
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
            Specialised medical care for newborn infants, including premature and critically ill babies who require NICU-level monitoring and support.
          </p>
        </div>
      </div>

      {/* DEPARTMENT OVERVIEW */}
      <div className="overview-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px" }}>
        <div
          className="overview-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}
        >
          <div>
            <div
              style={{
                width: "40px",
                height: "3px",
                background: "#8b3dff",
                borderRadius: "2px",
                marginBottom: "20px",
              }}
            />
            <h2
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "32px",
                color: "#14092b",
                margin: "0 0 20px",
                fontWeight: 700,
              }}
            >
              About the Department
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#555",
                margin: "0 0 14px",
              }}
            >
              The Department of Neonatology at SRM Global Hospitals is dedicated to the care of newborn infants, with particular focus on premature babies and those born with medical complications requiring close monitoring in the first days and weeks of life.
            </p>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#555",
                margin: 0,
              }}
            >
              The team works within a Neonatal Intensive Care Unit (NICU) setting to manage conditions such as prematurity, low birth weight, respiratory distress, jaundice, and infections, coordinating closely with obstetric and paediatric teams to support every newborn through this critical stage.
            </p>
          </div>
          <div
            className="overview-stats-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "24px 20px",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#8b3dff",
                }}
              >
                1
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "4px",
                }}
              >
                Specialist
              </div>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "24px 20px",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1fb6e0",
                }}
              >
                NICU
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "4px",
                }}
              >
                Critical Care
              </div>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "24px 20px",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#8b3dff",
                }}
              >
                Premature 
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "4px",
                }}
              >
                &amp; High-Risk Newborn Care
              </div>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "24px 20px",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#1fb6e0",
                }}
              >
                24/7
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "4px",
                }}
              >
                Availability
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DOCTORS */}
      <div style={{ background: "#fff" }}>
        <div className="doctors-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                width: "40px",
                height: "3px",
                background: "#1fb6e0",
                borderRadius: "2px",
                margin: "0 auto 20px",
              }}
            />
            <h2
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "36px",
                color: "#14092b",
                margin: "0 0 12px",
                fontWeight: 700,
              }}
            >
              Our Neonatology Team
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#888", margin: 0 }}>
              1 specialist in newborn and neonatal intensive care.
            </p>
          </div>

          <div
            className="doctors-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "24px",
              maxWidth: "380px",
              margin: "0 auto",
            }}
          >
            {/* Dr. Ashok. C */}
            <div
              className="doctor-card"
              style={{
                background: "#faf8ff",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "all 0.3s",
                padding: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "280px",
                  background: "linear-gradient(135deg, rgb(231, 248, 252), rgb(201, 237, 248))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/departments/neonatology/image-1.png"
                  alt="Dr. Ashok. C"
                  width={280}
                  height={280}
                  style={{
                    width: "75%",
                    height: "100%",
                    objectFit: "fill",
                    objectPosition: "top center",
                  }}
                />
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "#1fb6e0",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "6px",
                  }}
                >
                  Senior Consultant - Neonatology
                </div>
                <h3
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "20px",
                    color: "#14092b",
                    margin: "0 0 6px",
                    fontWeight: 700,
                  }}
                >
                  Dr. Ashok. C
                </h3>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#888",
                    marginBottom: "16px",
                    lineHeight: 1.5,
                  }}
                >
                  MBBS, MD, DNB
                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                  <a
                    href="tel:+919644496444"
                    style={{
                      flex: 1,
                      background: "#8b3dff",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "8px",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      textAlign: "center",
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    Book Appointment
                  </a>
                  <div
                    style={{
                      background: "#e7f8fc",
                      color: "#1fb6e0",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    Profile
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1400&q=80"
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
            Talk to a Specialist
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
            Book an appointment or call us directly. We&apos;ll connect you with the right doctor for your concern.
          </p>
          <div style={{ display: "inline-flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="tel:+919644496444"
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
              Book Appointment
            </a>
            <a
              href="tel:+919644496444"
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
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
