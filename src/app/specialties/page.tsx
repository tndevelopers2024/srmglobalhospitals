import "@/styles/specialty.css";

import Link from "next/link";
import type { Route } from "next";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";

export const metadata = createMetadata({
  title: "Specialties & Departments | SRM Global Hospitals Chennai",
  description:
    "Explore our dedicated medical and surgical specialties at SRM Global Hospitals Chennai, delivering comprehensive patient-first care across all clinical disciplines.",
  path: "/specialties",
});

const specialtiesList: Array<{
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}> = [
  {
    slug: "anaesthesiology",
    title: "Department of Anaesthesiology",
    subtitle: "Safe Anaesthesia. Comfortable Surgery.",
    description:
      "Comprehensive anaesthesia services, from general and regional anaesthesia to advanced perioperative pain management and critical care support.",
    href: "/specialties/anaesthesiology",
  },
  {
    slug: "arthroscopy-sports-medicine",
    title: "Department of Arthroscopy & Sports Medicine",
    subtitle: "Recover Faster. Move Better.",
    description:
      "Expert care in keyhole arthroscopic surgery, sports injury rehabilitation, ACL reconstruction, and joint preservation.",
    href: "/specialties/arthroscopy-sports-medicine",
  },
  {
    slug: "dental-omfs",
    title: "Department of Dental & OMFS",
    subtitle: "Healthy Smiles, Confident Faces.",
    description:
      "Advanced oral and maxillofacial surgery, dental implants, corrective jaw procedures, and comprehensive dental health.",
    href: "/specialties/dental-omfs",
  },
  {
    slug: "dermatology",
    title: "Department of Dermatology",
    subtitle: "Healthy Skin. Confident You.",
    description:
      "Comprehensive skin, hair, and nail treatments with cutting-edge laser technology, cosmetic dermatology, and clinical dermatology.",
    href: "/specialties/dermatology",
  },
  {
    slug: "pulmonology",
    title: "Department of Pulmonology",
    subtitle: "Breathe Better. Live Better.",
    description:
      "Advanced pulmonary function testing, bronchoscopy, asthma and COPD management, and dedicated respiratory critical care.",
    href: "/specialties/pulmonology",
  },
  {
    slug: "diabetology",
    title: "Department of Diabetology",
    subtitle: "Balanced Sugars. Better Living.",
    description:
      "Comprehensive diabetes management, insulin therapy, diabetic foot care, and specialized gestational diabetes clinics.",
    href: "/specialties/diabetology",
  },
  {
    slug: "emergency-medicine",
    title: "Department of Emergency Medicine & Critical Care",
    subtitle: "Every Second Matters.",
    description:
      "24/7 emergency care for trauma, cardiac arrest, stroke, and life-threatening conditions backed by advanced life support and intensive care.",
    href: "/specialties/emergency-medicine",
  },
  {
    slug: "endocrinology",
    title: "Department of Endocrinology",
    subtitle: "Balancing Your Hormones, Naturally.",
    description:
      "Specialized care for hormone disorders, thyroid conditions, PCOS, adrenal and pituitary disorders, and metabolic health.",
    href: "/specialties/endocrinology",
  },
  {
    slug: "ent",
    title: "Department of ENT",
    subtitle: "Hear Better. Breathe Easier. Speak Clearly.",
    description:
      "Comprehensive ear, nose, and throat care, sinus treatments, hearing evaluations, and advanced microsurgical and endoscopic procedures.",
    href: "/specialties/ent",
  },
];

export default function SpecialtiesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Specialties Directory", path: "/specialties" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="specialties" />
      <main className="specialty-page" id="main-content">
        <section className="hero">
          <div className="wrap">
            <div className="hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Our Specialties</span>
            </div>
            <div className="hero-text">
              <div className="hero-label">Clinical Departments</div>
              <h1>Our Specialties</h1>
              <p className="hero-subtitle">World-Class Care Across Medical Specialties</p>
              <p className="hero-desc">
                From specialized surgical interventions to advanced medical diagnostics and therapy, explore SRM Global Hospitals' comprehensive clinical departments.
              </p>
            </div>
          </div>
        </section>

        <section className="conditions" style={{ background: "#ffffff", padding: "60px 0 80px" }}>
          <div className="wrap">
            <div className="conditions-header">
              <div className="section-label">Directory</div>
              <h2 className="section-title">Specialty Departments</h2>
              <p className="section-desc">Select a specialty to explore our services, treatments, experts, and booking options.</p>
            </div>
            <div className="treatments-grid">
              {specialtiesList.map((spec) => (
                <Link
                  key={spec.slug}
                  href={spec.href as Route}
                  className="treatment-card"
                  style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
                >
                  <div className="treatment-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h4>{spec.title}</h4>
                  <p style={{ fontWeight: 600, color: "var(--brand)", marginBottom: "8px", fontSize: "0.85rem" }}>
                    {spec.subtitle}
                  </p>
                  <p style={{ flexGrow: 1 }}>{spec.description}</p>
                  <div style={{ marginTop: "16px", display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--brand)", fontWeight: 600, fontSize: "0.9rem" }}>
                    <span>Explore Department</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
