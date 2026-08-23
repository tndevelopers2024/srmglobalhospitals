import React from "react";

export interface DeptCardDoctor {
  name: string;
  role: string;
  qualifications: string;
  initials: string;
  gradientBg?: string;
  initialsColor?: string;
  themeColor?: string;
  secondaryBtnBg?: string;
  secondaryBtnColor?: string;
}

export interface DeptCardDoctorsProps {
  title?: string;
  subtitle?: string;
  doctors: DeptCardDoctor[];
  maxColumns?: number;
}

export default function DeptCardDoctors({
  title = "Our Team",
  subtitle,
  doctors,
  maxColumns,
}: DeptCardDoctorsProps) {
  const isTwoCols = maxColumns === 2 || (maxColumns === undefined && doctors.length === 2);
  const gridStyle = isTwoCols
    ? {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px",
        maxWidth: "760px",
        margin: "0 auto",
      }
    : {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
      };

  return (
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
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#888", margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="doctors-grid" style={gridStyle}>
          {doctors.map((doctor, index) => {
            const isCyan = index % 2 === 1;
            const gradientBg =
              doctor.gradientBg ||
              (isCyan
                ? "linear-gradient(135deg, rgb(231, 248, 252), rgb(201, 237, 248))"
                : "linear-gradient(135deg, rgb(243, 235, 255), rgb(228, 207, 254))");
            const initialsColor = doctor.initialsColor || (isCyan ? "#1fb6e0" : "#8b3dff");
            const themeColor = doctor.themeColor || (isCyan ? "#1fb6e0" : "#8b3dff");
            const secondaryBtnBg = doctor.secondaryBtnBg || (isCyan ? "#e7f8fc" : "#f3ebff");
            const secondaryBtnColor = doctor.secondaryBtnColor || (isCyan ? "#1fb6e0" : "#8b3dff");

            return (
              <div
                key={index}
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
                    background: gradientBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      background: initialsColor,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "32px",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {doctor.initials}
                  </div>
                </div>
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "10px",
                      fontWeight: 600,
                      color: themeColor,
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      marginBottom: "6px",
                    }}
                  >
                    {doctor.role}
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
                    {doctor.name}
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
                    {doctor.qualifications}
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
                        background: secondaryBtnBg,
                        color: secondaryBtnColor,
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
