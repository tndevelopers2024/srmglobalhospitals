import Image from "next/image";

export default function ChiefOperatingOfficer() {
    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "40px 40px 100px",
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
                        Chief Operating Officer, SRM Global Hospitals Pvt Ltd
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
                        Dr. V.P. Chandrasekaran
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
                        23+ years of experience in Emergency Medicine. Also
                        serves as Associate Dean (Super Specialty) and Advisor
                        in Emergency Medicine at SRM Medical College Hospital
                        &amp; Research Centre.
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
                        Previously COO and Medical Director of VIMS Hospital,
                        Salem, where he led the hospital to NABH accreditation
                        and launched its transplant programme. Former National
                        President of the Society for Emergency Medicine India
                        (SEMI).
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
                        Published in national and international journals on
                        emergency care and clinical toxicology. Authored a
                        chapter in the Textbook of Emergency Medicine on General
                        Management of Poisoning.
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
                                Qualifications
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
                                MBBS · MD (Emergency Medicine) · Dip. A&amp;E ·
                                MBA (Bharathiar University)
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
                                Recognition
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
                                Honoured by Dr. A.P.J. Abdul Kalam · Chevalier
                                Award · Lifetime Achievement, ASEM (2014)
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: "relative",
                        background: "#e8f4fc",
                        minHeight: "500px",
                    }}
                >
                    <Image
                        src="/images/leadership-team/coo_chandrasekaran.jpg"
                        alt="Dr. V.P. Chandrasekaran"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "top",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
