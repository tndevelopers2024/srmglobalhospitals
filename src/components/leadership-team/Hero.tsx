import Link from "next/link";

export default function Hero() {
    return (
        <div className="page-hero-frame leadership-hero-frame">
            <img
                src="/images/leadership-team/leadership-team-hero.jpg"
                alt="SRM Global Hospitals Leadership Team"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 25%",
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
            <div className="leadership-hero-inner">
                <div className="leadership-hero-breadcrumb">
                    <Link href="/" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>
                        Home
                    </Link>
                    <span style={{ opacity: 0.5 }}>&rsaquo;</span>
                    <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>Leadership Team</span>
                </div>
                <h1 className="leadership-hero-title">
                    Leadership Team
                </h1>
                <p className="leadership-hero-desc">
                    The people responsible for how this hospital runs, what it
                    prioritises, and where it&apos;s headed.
                </p>
            </div>
        </div>
    );
}
