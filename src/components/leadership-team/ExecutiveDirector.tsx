import Image from "next/image";

export default function ExecutiveDirector() {
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
                    gridTemplateColumns: "400px 1fr",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        background: "#f3eff8",
                        minHeight: "500px",
                    }}
                >
                    <Image
                        src="/images/leadership-team/dr_madhuri.jpg"
                        alt="Dr. Madhuri Sathyanarayanan"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "top",
                        }}
                    />
                </div>
                <div style={{ padding: "52px 48px" }}>
                    <div
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "11px",
                            fontWeight: "600",
                            color: "#6b4a98",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            marginBottom: "8px",
                        }}
                    >
                        Executive Director, SRM Global Hospitals Pvt Ltd
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
                        Dr. Madhuri Sathyanarayanan
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
                        Leads the hospital&apos;s clinical excellence and
                        patient experience initiatives. Her work centres on
                        building systems that maintain consistently high
                        standards of care across all departments and
                        specialties.
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
                        Responsible for specialist recruitment, quality protocol
                        development, and patient feedback systems that directly
                        inform operational improvements at SRM Global Hospitals.
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
                        Her approach to healthcare leadership is grounded in
                        three priorities: clinical outcomes that meet global
                        benchmarks, a patient experience that extends beyond
                        treatment, and continuous professional development for
                        the medical team.
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
                                Clinical Excellence · Specialist Recruitment ·
                                Quality Protocols · Patient Feedback
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
                                Executive Director, SRM Global Hospitals · Head
                                of Clinical Standards
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
