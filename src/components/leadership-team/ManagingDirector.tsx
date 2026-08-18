import Image from "next/image";

export default function ManagingDirector() {
    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "40px 40px 0",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 4px 40px rgba(0, 0, 0, 0.04)",
                    display: "grid",
                    gridTemplateColumns: "1fr 400px",
                }}
            >
                <div style={{ padding: "52px 48px" }}>
                    <div
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "11px",
                            fontWeight: "600",
                            color: "#2294d3",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            marginBottom: "8px",
                        }}
                    >
                        Managing Director, SRM Global Hospitals Pvt Ltd
                    </div>
                    <h2
                        style={{
                            fontFamily: "'Source Serif 4', serif",
                            fontSize: "34px",
                            color: "#1a1a2e",
                            margin: "0 0 20px",
                            fontWeight: "700",
                        }}
                    >
                        Mrs. Manimangai Sathyanarayanan
                    </h2>
                    <p
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "15px",
                            lineHeight: "1.8",
                            color: "#555",
                            margin: "0 0 14px",
                        }}
                    >
                        Oversees the hospital&apos;s day-to-day operations with
                        a focus on value-driven patient care and community
                        well-being. Under her direction, SRM Global Hospitals
                        has expanded its outreach programmes and strengthened
                        partnerships with insurance providers to broaden access.
                    </p>
                    <p
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "15px",
                            lineHeight: "1.8",
                            color: "#555",
                            margin: "0 0 14px",
                        }}
                    >
                        Her priorities centre on accessibility: ensuring the
                        most effective care is available to those who need it,
                        without barriers. She leads the hospital&apos;s
                        commitment to treating patients as individuals and
                        making sure the care team has the resources to deliver
                        on that standard.
                    </p>
                    <p
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "15px",
                            lineHeight: "1.8",
                            color: "#555",
                            margin: "0 0 24px",
                        }}
                    >
                        Plays a key role in the hospital&apos;s quality
                        assurance systems and community health initiatives
                        across the Kattankulathur region.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            style={{
                                background: "#f3eff8",
                                borderRadius: "8px",
                                padding: "12px 16px",
                                flex: "1",
                                minWidth: "200px",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "11px",
                                    fontWeight: "600",
                                    color: "#6b4a98",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                }}
                            >
                                Focus Areas
                            </div>
                            <div
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "12.5px",
                                    color: "#555",
                                    marginTop: "6px",
                                    lineHeight: "1.5",
                                }}
                            >
                                Hospital Operations · Patient Access · Insurance
                                Partnerships · Community Outreach
                            </div>
                        </div>
                        <div
                            style={{
                                background: "#e8f4fc",
                                borderRadius: "8px",
                                padding: "12px 16px",
                                flex: "1",
                                minWidth: "200px",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "11px",
                                    fontWeight: "600",
                                    color: "#2294d3",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                }}
                            >
                                Key Roles
                            </div>
                            <div
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "12.5px",
                                    color: "#555",
                                    marginTop: "6px",
                                    lineHeight: "1.5",
                                }}
                            >
                                Managing Director, SRM Global Hospitals ·
                                Quality Assurance Lead
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ position: "relative", background: "#e8f4fc" }}>
                    <Image
                        src="/images/leadership-team/md_manimangai.jpg"
                        alt="Mrs. Manimangai Sathyanarayanan"
                        width={400}
                        height={500}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            minHeight: "500px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
