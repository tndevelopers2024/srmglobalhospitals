import Image from "next/image";

export default function CallToAction() {
    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <Image
                src="/images/leadership-team/team_cta_bg.jpg"
                alt="Team"
                fill
                style={{
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background:
                        "linear-gradient(135deg, rgba(107, 74, 152, 0.92), rgba(34, 148, 211, 0.88))",
                }}
            ></div>
            <div
                style={{
                    position: "relative",
                    zIndex: "1",
                    textAlign: "center",
                    padding: "80px 40px",
                }}
            >
                <h2
                    style={{
                        fontFamily: "'Source Serif 4', serif",
                        fontSize: "38px",
                        color: "#fff",
                        margin: "0 0 16px",
                        fontWeight: "700",
                    }}
                >
                    Talk to a Specialist
                </h2>
                <p
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "17px",
                        color: "rgba(255, 255, 255, 0.85)",
                        margin: "0 auto 32px",
                        maxWidth: "480px",
                        lineHeight: "1.6",
                    }}
                >
                    Book an appointment or call us directly. We&apos;ll connect
                    you with the right doctor for your concern.
                </p>
                <div style={{ display: "inline-flex", gap: "14px" }}>
                    <a
                        href="#"
                        style={{
                            background: "#fff",
                            color: "#6b4a98",
                            padding: "14px 36px",
                            borderRadius: "100px",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "15px",
                            fontWeight: "600",
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        Book Appointment
                    </a>
                    <a
                        href="#"
                        style={{
                            border: "2px solid rgba(255, 255, 255, 0.6)",
                            color: "#fff",
                            padding: "12px 36px",
                            borderRadius: "100px",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "15px",
                            fontWeight: "600",
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        Call Us
                    </a>
                </div>
            </div>
        </div>
    );
}
