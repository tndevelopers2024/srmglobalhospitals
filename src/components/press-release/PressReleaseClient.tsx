"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRESS_RELEASES, type PressReleaseItem } from "@/lib/press-releases-data";

export default function PressReleaseClient() {
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<PressReleaseItem | null>(null);

  const filteredReleases = PRESS_RELEASES.filter((item) => {
    if (selectedYear === "All") return true;
    return item.year === selectedYear;
  });

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "360px" }}>
        <img
          src="/images/press-releases/press-release-hero.jpg"
          alt="SRM Global Hospitals Press Releases"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(20, 9, 43, 0.84) 0%, rgba(35, 19, 74, 0.78) 55%, rgba(13, 27, 58, 0.84) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 40px 60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "24px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ opacity: 0.5 }}>&rsaquo;</span>
            <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>Press Releases</span>
          </div>
          <h1
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: "48px",
              lineHeight: 1.15,
              color: "#fff",
              margin: "0 0 16px",
              fontWeight: 700,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            Press Releases
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.85)",
              margin: "0 auto",
              maxWidth: "600px",
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Official statements, medical breakthroughs, clinical milestones, and healthcare announcements from SRM Global Hospitals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 24px 80px" }}>
        {/* Year Filter Tabs */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "40px", flexWrap: "wrap" }}>
          {["All", "2025", "2024"].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{
                padding: "8px 24px",
                borderRadius: "100px",
                border: selectedYear === year ? "1px solid #6B4A98" : "1px solid #e2d9f3",
                background: selectedYear === year ? "#6B4A98" : "#ffffff",
                color: selectedYear === year ? "#ffffff" : "#4a3b63",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {year === "All" ? "All Releases" : year}
            </button>
          ))}
        </div>

        {/* Press Releases Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {filteredReleases.map((item) => (
            <article
              key={item.id}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(26, 31, 92, 0.08)",
                boxShadow: "0 4px 20px rgba(14, 18, 64, 0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "230px", background: "#f3effa", overflow: "hidden" }}>
                <img
                  src={item.localImage || item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                  onError={(e) => {
                    // Fallback to WP image if local fails
                    if (e.currentTarget.src !== item.image) {
                      e.currentTarget.src = item.image;
                    }
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(14, 18, 64, 0.85)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                    padding: "4px 12px",
                    borderRadius: "100px",
                  }}
                >
                  {item.category || "Press Release"}
                </span>
              </div>

              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ fontSize: "12.5px", color: "#8a7e9e", fontWeight: 500, marginBottom: "10px" }}>
                  {item.date || item.month}
                </div>
                <h2
                  style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: "19px",
                    lineHeight: "1.35",
                    color: "#181433",
                    margin: "0 0 16px",
                    fontWeight: 600,
                    flexGrow: 1,
                  }}
                >
                  {item.title}
                </h2>
                <div style={{ marginTop: "auto", paddingTop: "12px", borderTop: "1px solid #f0ecf7" }}>
                  <button
                    onClick={() => setSelectedItem(item)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#6B4A98",
                      fontSize: "13.5px",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    View Press Release →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10, 14, 38, 0.8)",
            backdropFilter: "blur(5px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              maxWidth: "780px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "28px 28px 32px",
              position: "relative",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
            }}
          >
            {/* Top Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "16px",
                marginBottom: "20px",
                borderBottom: "1px solid #f1f5f9",
                paddingBottom: "16px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6B4A98",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "6px",
                  }}
                >
                  {selectedItem.category} · {selectedItem.month} {selectedItem.year}
                </div>
                <h2
                  style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: "21px",
                    lineHeight: 1.35,
                    color: "#181433",
                    margin: 0,
                    fontWeight: 700,
                  }}
                >
                  {selectedItem.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "none",
                  background: "#f0ecf7",
                  color: "#2a2048",
                  fontSize: "18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                ✕
              </button>
            </div>

            {/* Official Press Release Document Content */}
            {selectedItem.isDocumentScan ? (
              /* Case 1: Scanned 1-Page Official Press Release (Aortic Centre, Stemcell, etc.) */
              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  background: "#ffffff",
                }}
              >
                <img
                  src={selectedItem.localImage || selectedItem.image}
                  alt={selectedItem.title}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            ) : (
              /* Case 2: Formatted Official Press Release Document Sheet (Iraqi Patient Laser Surgery, etc.) */
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "32px 32px 36px",
                  boxShadow: "0 2px 14px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Letterhead Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #f1f5f9",
                    paddingBottom: "16px",
                    marginBottom: "20px",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#475569",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Press Release
                  </div>
                  <div>
                    <img
                      src="/images/srm-logo-final.png"
                      alt="SRM Global Hospitals"
                      style={{ height: "38px", width: "auto", display: "block" }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>

                {/* Headline */}
                <h3
                  style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 16px",
                    lineHeight: 1.35,
                  }}
                >
                  {selectedItem.title}
                </h3>

                {/* Bullet Highlights */}
                {selectedItem.highlights && selectedItem.highlights.length > 0 && (
                  <ul
                    style={{
                      margin: "0 0 22px",
                      paddingLeft: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {selectedItem.highlights.map((bullet, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13.5px",
                          lineHeight: 1.6,
                          color: "#334155",
                          fontWeight: 500,
                        }}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Case / Team Photo Embedded in Document */}
                {selectedItem.localImage && (
                  <div
                    style={{
                      margin: "0 0 24px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: "1px solid #e2e8f0",
                      background: "#f8fafc",
                    }}
                  >
                    <img
                      src={selectedItem.localImage}
                      alt={selectedItem.title}
                      style={{
                        width: "100%",
                        maxHeight: "360px",
                        objectFit: "cover",
                        objectPosition: "top center",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        padding: "8px 14px",
                        fontSize: "12px",
                        color: "#64748b",
                        background: "#f8fafc",
                        borderTop: "1px solid #f1f5f9",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontStyle: "italic",
                      }}
                    >
                      <span>Clinical Case &amp; Team Documentation</span>
                      <span style={{ fontWeight: 600 }}>SRM Global Hospitals</span>
                    </div>
                  </div>
                )}

                {/* Body Paragraphs */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    fontSize: "13.5px",
                    lineHeight: "1.75",
                    color: "#1e293b",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {selectedItem.paragraphs.map((p, idx) => {
                    const isQuote =
                      p.includes("said, “") ||
                      p.includes("In his comments,") ||
                      p.startsWith("“") ||
                      p.startsWith('"');
                    return (
                      <p
                        key={idx}
                        style={{
                          margin: 0,
                          ...(isQuote
                            ? {
                                background: "#faf7fc",
                                borderLeft: "3px solid #6B4A98",
                                padding: "12px 16px",
                                borderRadius: "6px",
                                color: "#261a38",
                                fontStyle: "italic",
                              }
                            : {}),
                        }}
                      >
                        {p}
                      </p>
                    );
                  })}
                </div>

                {/* Official Release Footer */}
                <div
                  style={{
                    marginTop: "30px",
                    paddingTop: "16px",
                    borderTop: "1px solid #e2e8f0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                    fontSize: "12px",
                    color: "#64748b",
                  }}
                >
                  <div>
                    <strong>Issued by:</strong> Corporate Communications &amp; Media Relations, SRM Global Hospitals
                  </div>
                  <div>
                    Kattankulathur, Chennai ·{" "}
                    <a
                      href="mailto:info@srmglobalhospitals.com"
                      style={{ color: "#6B4A98", fontWeight: 600, textDecoration: "none" }}
                    >
                      info@srmglobalhospitals.com
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Close Action */}
            <div style={{ textAlign: "center", marginTop: "22px" }}>
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  padding: "9px 30px",
                  borderRadius: "100px",
                  background: "#6B4A98",
                  color: "#ffffff",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 2px 10px rgba(107, 74, 152, 0.2)",
                  transition: "all 0.2s ease",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Media & Press Contact Block */}
      <section style={{ background: "linear-gradient(135deg, #1c1335 0%, #291a45 100%)", padding: "64px 24px", textAlign: "center", color: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "32px", color: "#ffffff", margin: "0 0 14px", fontWeight: 700 }}>
            Media & Press Enquiries
          </h2>
          <p style={{ fontSize: "15.5px", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.7, margin: "0 0 28px" }}>
            For official statements, interview requests with hospital leadership and senior consultants, or media resources, please reach out to our communications team.
          </p>
          <a
            href="mailto:info@srmglobalhospitals.com"
            style={{
              display: "inline-block",
              background: "#ffffff",
              color: "#6B4A98",
              padding: "14px 36px",
              borderRadius: "100px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            Contact Media Relations →
          </a>
        </div>
      </section>
    </div>
  );
}
