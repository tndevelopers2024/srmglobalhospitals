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
            <div className="leadership-cta-wrap">
                <h2 className="leadership-cta-title">
                    Talk to a Specialist
                </h2>
                <p className="leadership-cta-desc">
                    Book an appointment or call us directly. We&apos;ll connect
                    you with the right doctor for your concern.
                </p>
                <div className="leadership-cta-actions">
                    <a
                        href="/contact-us"
                        className="leadership-btn-white"
                    >
                        Book Appointment
                    </a>
                    <a
                        href="tel:+919644496444"
                        className="leadership-btn-outline"
                    >
                        Call Us
                    </a>
                </div>
            </div>
        </div>
    );
}
