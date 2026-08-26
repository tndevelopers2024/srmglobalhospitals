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
            <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>Obstetrics &amp; Gynecology</span>
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
            Obstetrics &amp; Gynecology
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
            Complete maternity care through pregnancy, labour and childbirth, together with gynaecological care for women&apos;s reproductive health at every life stage.
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
              The Department of Obstetrics &amp; Gynecology at SRM Global Hospitals provides complete obstetric care spanning pre-conception counselling, antenatal check-ups, and support through labour and delivery, including management of high-risk pregnancies in coordination with other specialities.
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
              On the gynaecological side, the team evaluates and treats reproductive health conditions across all stages of a woman&apos;s life, from adolescence through menopause, combining clinical expertise with a compassionate, patient-centred approach to women&apos;s wellbeing.
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
                15
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
                Labour &amp; Delivery
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
                Pregnancy
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "4px",
                }}
              >
                &amp; Childbirth Care
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
                Women&apos;s
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "4px",
                }}
              >
                Health &amp; Gynaecology
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
              Our Obstetrics &amp; Gynecology Team
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#888", margin: 0 }}>
              15 specialists in obstetric and gynaecological care.
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
            {/* Dr. R.K. Vidhyalakshmi (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-1.png"
                  alt="Dr. R.K. Vidhyalakshmi"
                  width={280}
                  height={280}
                  style={{
                    width: "90%",
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
                  Dr. R.K. Vidhyalakshmi
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
                  MBBS, DNB, FMAS
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

            {/* Dr. P. Mathumathi (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-2.png"
                  alt="Dr. P. Mathumathi"
                  width={280}
                  height={280}
                  style={{
                    width: "90%",
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
                  Dr. P. Mathumathi
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
                  MBBS, DNB, MS, DNB
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

            {/* Dr. Harini Sivamani (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-3.png"
                  alt="Dr. Harini Sivamani"
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
                  Consultant – Obstetrics, Gynecology &amp; Urogynaecology
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
                  Dr. Harini Sivamani
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
                  MBBS, DNB, MRCOG, FACOG, FMAS
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

            {/* Dr. Prithiv Raj. O G (Male) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-4.png"
                  alt="Dr. Prithiv Raj. O G"
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
                  Visiting Consultant
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
                  Dr. Prithiv Raj. O G
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
                  MBBS, MS
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

            {/* Dr. Sahana. N (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-5.png"
                  alt="Dr. Sahana. N"
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
                  Visiting Consultant
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
                  Dr. Sahana. N
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
                  MS, DNB
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

            {/* Dr. Karthiga Prabhu J (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-6.png"
                  alt="Dr. Karthiga Prabhu J"
                  width={280}
                  height={280}
                  style={{
                    width: "80%",
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
                  Visiting Consultant
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
                  Dr. Karthiga Prabhu J
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
                  MBBS, MD, FICOG, CIMP
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

            {/* Dr. C. Shanmuga Priya (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-7.png"
                  alt="Dr. C. Shanmuga Priya"
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
                  Visiting Consultant
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
                  Dr. C. Shanmuga Priya
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

            {/* Dr. Anuradha. M (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-8.png"
                  alt="Dr. Anuradha. M"
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
                  Visiting Consultant
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
                  Dr. Anuradha. M
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
                  MBBS, MD, FICOG, FMAS
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

            {/* Dr. Sajeetha Kumari. R (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-9.png"
                  alt="Dr. Sajeetha Kumari. R"
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
                  Visiting Consultant
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
                  Dr. Sajeetha Kumari. R
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
                  MBBS, MS, DGO, FICOG, FMAS
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

            {/* Dr. M. Swarnalatha (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-10.png"
                  alt="Dr. M. Swarnalatha"
                  width={280}
                  height={280}
                  style={{
                    width: "85%",
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
                  Visiting Consultant
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
                  Dr. M. Swarnalatha
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
                  MBBS, MS, FICOG
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

            {/* Dr. Maitrayee Sen (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-11.png"
                  alt="Dr. Maitrayee Sen"
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
                  Visiting Consultant
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
                  Dr. Maitrayee Sen
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
                  MBBS, DNB, FICOG, FMAS
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

            {/* Dr. Vinodhini. S (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-12.png"
                  alt="Dr. Vinodhini. S"
                  width={280}
                  height={280}
                  style={{
                    width: "85%",
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
                  Visiting Consultant
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
                  Dr. Vinodhini. S
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
                  MBBS, MS, DNB
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

            {/* Dr. Uma Maheswari. R (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-13.png"
                  alt="Dr. Uma Maheswari. R"
                  width={280}
                  height={280}
                  style={{
                    width: "90%",
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
                  Visiting Consultant
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
                  Dr. Uma Maheswari. R
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
                  MBBS, DGO, DNB
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

            {/* Dr. S.M. Shakthimani (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-14.png"
                  alt="Dr. S.M. Shakthimani"
                  width={280}
                  height={280}
                  style={{
                    width: "90%",
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
                  Visiting Consultant
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
                  Dr. S.M. Shakthimani
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
                  MBBS, MS, DNB
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

            {/* Dr. Hamsathvani. I (Female) */}
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
                  src="/images/departments/obstetrics-and-gynecology/image-15.png"
                  alt="Dr. Hamsathvani. I"
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
                  Visiting Consultant
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
                  Dr. Hamsathvani. I
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
                  MBBS, MS
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
