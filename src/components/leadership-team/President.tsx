import Image from "next/image";

export default function President() {
    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "60px 40px 0",
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
                        src="/images/leadership-team/president_sathiya.jpg"
                        alt="Dr. P. Sathyanarayanan"
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
                        President, SRM Group of Companies
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
                        Dr. P. Sathyanarayanan
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
                        Pro-Chancellor of SRM Institute of Science and
                        Technology (SRMIST), Kattankulathur and SRM
                        University-AP. Served as Vice-Chancellor of SRM
                        University from 2003 to 2010, during which the
                        institution grew significantly in research output and
                        international collaborations.
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
                        Established an International Advisory Board with
                        academicians from Harvard, MIT, Kellogg, and Carnegie
                        Mellon. Set up SRM University campuses in Andhra Pradesh
                        (2017) and Sikkim (2013).
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
                        Founded and chairs SRM Technologies Pvt. Ltd. (since
                        1998). Also leads SRM Engineering Construction
                        Corporation and New Generation Media Corporation.
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
                                Education
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
                                B.E. (Anna University) · M.S. (Northeastern,
                                USA) · Ph.D. (Southern Cross, Australia)
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
                                Pro-Chancellor, SRMIST · Pro-Chancellor, SRM-AP
                                · Chairman, SRM Technologies
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
