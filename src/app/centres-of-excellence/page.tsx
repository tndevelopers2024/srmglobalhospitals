import "@/styles/coe.css";

import Link from "next/link";
import type { Route } from "next";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";

export const metadata = createMetadata({
  title: "Centres of Excellence | SRM Global Hospitals Chennai",
  description:
    "Explore the specialised Centres of Excellence at SRM Global Hospitals Chennai, delivering advanced tertiary care in Cardiac, Neuro, Ortho, Gastro, Emergency, Women's Health, and more.",
  path: "/centres-of-excellence",
});

const coeCentres: Array<{
  slug: string;
  title: string;
  badge: string;
  description: string;
  stats: string;
  href: Route;
}> = [
  {
    slug: "emergency-and-critical-care",
    title: "Centre of Excellence in Emergency & Critical Care",
    badge: "24/7 Emergency & Trauma",
    description:
      "Full-scale round-the-clock emergency care, trauma bays, STEMI rapid response, acute stroke management, and advanced intensive care ICU.",
    stats: "15,000+ Emergencies | 10 Min Response Time",
    href: "/centres-of-excellence/emergency-and-critical-care",
  },
  {
    slug: "gastro-and-liver-sciences",
    title: "Centre of Excellence in Gastro & Liver Sciences",
    badge: "Medical & Surgical Gastro",
    description:
      "Comprehensive digestive and liver care covering advanced endoscopy, ERCP, hepatology, laparoscopic GI surgery, and 24/7 GI bleed management.",
    stats: "5,000+ GI Procedures | 96% Success Rate",
    href: "/centres-of-excellence/gastro-and-liver-sciences",
  },
  {
    slug: "neuro-sciences",
    title: "Centre of Excellence in Neuro Sciences",
    badge: "Neurology & Neurosurgery",
    description:
      "Integrated neurological and neurosurgical care for stroke, brain tumours, epilepsy, Parkinson's disease, complex spine surgery, and neuro-rehabilitation.",
    stats: "3,000+ Neuro Surgeries | 24/7 Stroke Ready",
    href: "/centres-of-excellence/neuro-sciences",
  },
  {
    slug: "bone-joint-spine",
    title: "Centre for Bone, Joint & Spine",
    badge: "Orthopaedics & Sports Care",
    description:
      "Specialist orthopaedic care featuring computer-navigated joint replacement, keyhole sports arthroscopy, spine surgery, and 24/7 trauma fixation.",
    stats: "4,000+ Surgeries | 98% Replacement Success",
    href: "/centres-of-excellence/bone-joint-spine",
  },
  {
    slug: "womens-health",
    title: "Centre for Women's Health & Wellness",
    badge: "Maternity & Gynaecology",
    description:
      "Comprehensive care across all life stages: safe normal delivery, high-risk pregnancy, laparoscopic gynaecological surgery, Level II NICU, and fertility support.",
    stats: "6,000+ Deliveries | 24/7 Labour Ward & NICU",
    href: "/centres-of-excellence/womens-health",
  },
  {
    slug: "cardiac-sciences",
    title: "Institute of Cardiac Sciences",
    badge: "Comprehensive Cardiac Care",
    description:
      "State-of-the-art interventional cardiology, electrophysiology, coronary artery bypass grafting (CABG), valve replacements, and 24/7 primary angioplasty.",
    stats: "24/7 Cath Lab | Advanced Coronary Care",
    href: "/best-doctor/institute-of-cardiac-sciences",
  },
  {
    slug: "renal-sciences",
    title: "Institute of Renal Sciences & Urology",
    badge: "Nephrology & Urology",
    description:
      "Dialysis care, kidney disease management, laser stone surgery, prostate treatments, and comprehensive urological interventions.",
    stats: "Advanced Dialysis | Laser Lithotripsy",
    href: "/best-doctor/nephrology",
  },
  {
    slug: "solid-organ-transplant",
    title: "Centre for Solid Organ Transplants",
    badge: "Transplant Excellence",
    description:
      "Multi-organ transplant infrastructure with dedicated pre-transplant workup, laminar OT suites, and lifelong post-transplant immunosuppression management.",
    stats: "Multidisciplinary Transplant Team",
    href: "/best-doctor/hepatology",
  },
];

export default function CentresOfExcellenceDirectoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Centres of Excellence", path: "/centres-of-excellence" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="coe" />
      <main id="main-content" className="coe-page">
        <section className="hero" style={{ minHeight: "360px", padding: "80px 0 60px" }}>
          <div className="container" style={{ display: "block", textAlign: "center" }}>
            <div className="hero-badge" style={{ margin: "0 auto 16px" }}>
              <span>SRM Global Hospitals Chennai</span>
            </div>
            <h1 style={{ margin: "0 auto 16px" }}>Centres of Clinical Excellence</h1>
            <p className="hero-tagline" style={{ margin: "0 auto 32px", maxWidth: "720px" }}>
              World-class clinical expertise, advanced medical technology, and patient-first care across multidisciplinary specialities.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0", background: "var(--mist)" }}>
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                gap: "28px",
              }}
            >
              {coeCentres.map((centre) => (
                <div
                  key={centre.slug}
                  style={{
                    background: "var(--paper)",
                    borderRadius: "var(--radius)",
                    padding: "32px",
                    border: "1px solid var(--rule)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "var(--brand)",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        display: "inline-block",
                        marginBottom: "10px",
                      }}
                    >
                      {centre.badge}
                    </span>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "var(--ink-deep)",
                        marginBottom: "12px",
                        fontFamily: "var(--font-display)",
                        lineHeight: 1.35,
                      }}
                    >
                      {centre.title}
                    </h3>
                    <p style={{ fontSize: "14.5px", color: "var(--ink-soft)", lineHeight: 1.65, marginBottom: "20px" }}>
                      {centre.description}
                    </p>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--cyan)",
                        marginBottom: "20px",
                        borderTop: "1px solid var(--rule)",
                        paddingTop: "14px",
                      }}
                    >
                      {centre.stats}
                    </div>
                    <Link href={centre.href} className="btn btn-gradient btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                      Explore Centre{" "}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
