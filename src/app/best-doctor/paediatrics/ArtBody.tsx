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
            <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>Paediatrics</span>
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
            Paediatrics
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
            Comprehensive medical care for infants, children, and adolescents, covering everything from routine checkups and vaccinations to the diagnosis and treatment of childhood illnesses.
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
              The Department of Paediatrics at SRM Global Hospitals provides comprehensive medical care for infants, children, and adolescents, addressing their physical, developmental, and emotional health needs at every stage of growth. The team manages a wide range of childhood illnesses and conditions, from common infections to more complex health concerns.
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
              Services include routine well-child checkups, growth and developmental monitoring, and immunisation as per recommended vaccination schedules, alongside the diagnosis and treatment of acute and chronic paediatric conditions. The department works closely with the paediatric critical care and neonatology teams to ensure continuity of care for young patients.
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
                12
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "4px",
                }}
              >
                Specialists
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
                All Ages
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "4px",
                }}
              >
                Newborn to Adolescent Care
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
                Vaccination
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "4px",
                }}
              >
                &amp; Preventive Care
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
              Our Paediatrics Team
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#888", margin: 0 }}>
              12 specialists providing comprehensive paediatric care from infancy through adolescence.
            </p>
          </div>

          <div
            className="doctors-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {/* Dr. S. Satyamanasa Gayatri Vinay (Female) */}
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
                  background: "linear-gradient(135deg, rgb(243, 235, 255), rgb(228, 207, 254))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/departments/paediatrics/image-1.png"
                  alt="Dr. S. Satyamanasa Gayatri Vinay"
                  width={280}
                  height={280}
                  style={{
                    width: "65%",
                    height: "90%",
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
                    color: "#8b3dff",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "6px",
                  }}
                >
                  Senior Consultant
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
                  Dr. S. Satyamanasa Gayatri Vinay
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
                  MBBS, DNB, MNAMS
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
                      background: "#f3ebff",
                      color: "#8b3dff",
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

            {/* Dr. Deepa Ganapathi (Female) */}
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
                  background: "linear-gradient(135deg, rgb(243, 235, 255), rgb(228, 207, 254))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/departments/paediatrics/image-2.png"
                  alt="Dr. Deepa Ganapathi"
                  width={280}
                  height={280}
                  style={{
                    width: "75%",
                    height: "90%",
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
                    color: "#8b3dff",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "6px",
                  }}
                >
                  Consultant
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
                  Dr. Deepa Ganapathi
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
                      background: "#f3ebff",
                      color: "#8b3dff",
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

            {/* Dr. Parimelazhagan. R (Male) */}
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
                  src="/images/departments/paediatrics/image-3.png"
                  alt="Dr. Parimelazhagan. R"
                  width={280}
                  height={280}
                  style={{
                    width: "90%",
                    height: "90%",
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
                  Consultant
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
                  Dr. Parimelazhagan. R
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
                  MBBS, DNB
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

            {/* Dr. Subash. S (Male) */}
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
                  src="/images/departments/paediatrics/image-4.png"
                  alt="Dr. Subash. S"
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
                  Visiting Consultant – Paediatrics
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
                  Dr. Subash. S
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
                  MBBS, MD (Paediatrics)
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

            {/* Dr. Vimalraj V (Male) */}
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
                  src="/images/departments/paediatrics/image-5.png"
                  alt="Dr. Vimalraj V"
                  width={280}
                  height={280}
                  style={{
                    width: "75%",
                    height: "90%",
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
                  Visiting Consultant - Paediatrics
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
                  Dr. Vimalraj V
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
                  MBBS, DNB, IBPCCM
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

            {/* Dr. R. Suresh (Male) */}
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
                  src="/images/departments/paediatrics/image-6.png"
                  alt="Dr. R. Suresh"
                  width={280}
                  height={280}
                  style={{
                    width: "95%",
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
                  Visiting Consultant – Paediatrics
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
                  Dr. R. Suresh
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
                  MBBS, MD
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

            {/* Dr. Gayathri Priyadharshini. B (Female) */}
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
                  background: "linear-gradient(135deg, rgb(243, 235, 255), rgb(228, 207, 254))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/departments/paediatrics/image-7.png"
                  alt="Dr. Gayathri Priyadharshini. B"
                  width={280}
                  height={280}
                  style={{
                    width: "95%",
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
                    color: "#8b3dff",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "6px",
                  }}
                >
                  Visiting Consultant - Paediatrics
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
                  Dr. Gayathri Priyadharshini. B
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
                  MBBS, DNB
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
                      background: "#f3ebff",
                      color: "#8b3dff",
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

            {/* Dr. Vaishnavi .S (Female) */}
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
                  background: "linear-gradient(135deg, rgb(243, 235, 255), rgb(228, 207, 254))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/departments/paediatrics/image-8.png"
                  alt="Dr. Vaishnavi .S"
                  width={280}
                  height={280}
                  style={{
                    width: "95%",
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
                    color: "#8b3dff",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "6px",
                  }}
                >
                  Visiting Consultant - Paediatrics
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
                  Dr. Vaishnavi .S
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
                  MBBS, MD
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
                      background: "#f3ebff",
                      color: "#8b3dff",
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

            {/* Dr. Rakshana K. (Female) */}
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
                  background: "linear-gradient(135deg, rgb(243, 235, 255), rgb(228, 207, 254))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/departments/paediatrics/image-9.png"
                  alt="Dr. Rakshana K."
                  width={280}
                  height={280}
                  style={{
                    width: "95%",
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
                    color: "#8b3dff",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "6px",
                  }}
                >
                  Junior Consultant – Paediatrics &amp; Neonatology
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
                  Dr. Rakshana K.
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
                  MBBS, MD (Paediatrics)
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
                      background: "#f3ebff",
                      color: "#8b3dff",
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

            {/* Dr. C. Balaji (Male) */}
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
                  src="/images/departments/paediatrics/image-10.png"
                  alt="Dr. C. Balaji"
                  width={280}
                  height={280}
                  style={{
                    width: "95%",
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
                  Consultant – Paediatrics
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
                  Dr. C. Balaji
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
                  MBBS, MD
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

            {/* Dr. O. M. Ramya (Female) */}
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
                  background: "linear-gradient(135deg, rgb(243, 235, 255), rgb(228, 207, 254))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/departments/paediatrics/image-11.png"
                  alt="Dr. O. M. Ramya"
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
                    color: "#8b3dff",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "6px",
                  }}
                >
                  Visiting Consultant – Paediatrics
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
                  Dr. O. M. Ramya
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
                      background: "#f3ebff",
                      color: "#8b3dff",
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

            {/* Dr. M. Swathi Priya (Female) */}
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
                  background: "linear-gradient(135deg, rgb(243, 235, 255), rgb(228, 207, 254))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/departments/paediatrics/image-12.png"
                  alt="Dr. M. Swathi Priya"
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
                    color: "#8b3dff",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "6px",
                  }}
                >
                  Visiting Consultant – Paediatrics
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
                  Dr. M. Swathi Priya
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
                  MBBS, MD
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
                      background: "#f3ebff",
                      color: "#8b3dff",
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
