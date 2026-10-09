import Link from "next/link";
import type { Route } from "next";

interface SpecialtyItem {
  name: string;
  href: string;
  icon: string;
  description: string;
}

const FEATURED_SPECIALTIES: SpecialtyItem[] = [
  {
    name: "Institute of Cardiac Sciences",
    href: "/best-doctor/institute-of-cardiac-sciences",
    icon: "heart",
    description: "Advanced cardiology, interventional procedures, and cardiothoracic surgical care.",
  },
  {
    name: "Emergency Medicine & Critical Care Unit",
    href: "/best-doctor/emergency-medicine-critical-care",
    icon: "activity",
    description: "Round-the-clock trauma response and state-of-the-art intensive care facilities.",
  },
  {
    name: "Obstetrics & Gynecology",
    href: "/best-doctor/obstetrics-gynecology",
    icon: "user",
    description: "Comprehensive maternal healthcare, high-risk obstetrics, and women's wellness.",
  },
  {
    name: "Orthopedics",
    href: "/best-doctor/orthopaedics",
    icon: "shield",
    description: "Joint replacement, spine interventions, sports injuries, and complex trauma care.",
  },
  {
    name: "Nephrology",
    href: "/best-doctor/nephrology",
    icon: "droplet",
    description: "Renal diagnosis, dialysis, chronic kidney management, and transplant services.",
  },
  {
    name: "Oncology",
    href: "/best-doctor/medical-oncology",
    icon: "crosshair",
    description: "Multidisciplinary medical, surgical, and preventive cancer care programs.",
  },
  {
    name: "Diabetology",
    href: "/best-doctor/diabetology",
    icon: "clipboard",
    description: "Evidence-based metabolic management, diabetic foot care, and endocrine solutions.",
  },
  {
    name: "Medical Gastroenterology",
    href: "/best-doctor/surgical-gastroenterology",
    icon: "layers",
    description: "Digestive health, therapeutic endoscopy, hepatology, and luminal treatments.",
  },
];

export default function AppointmentSpecialties() {
  return (
    <section className="appointment-specialties-section" aria-label="Our Specialties">
      <div className="appointment-container">
        <div className="appointment-section-header">
          <span className="appointment-section-eyebrow">Centres of Excellence</span>
          <h2 className="appointment-section-title">Our Specialties</h2>
          <p className="appointment-section-desc">
            Consult experienced medical leaders and super-specialists across multidisciplinary healthcare domains.
          </p>
        </div>

        <div className="appointment-specialties-grid">
          {FEATURED_SPECIALTIES.map((spec) => (
            <div key={spec.name} className="appointment-specialty-card">
              <div className="appointment-specialty-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="appointment-specialty-title">{spec.name}</h3>
              <p style={{ fontSize: "13.5px", color: "#64748b", margin: 0, lineHeight: "1.5" }}>
                {spec.description}
              </p>
              <Link href={spec.href as Route} className="appointment-specialty-action">
                <span>View Department</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
