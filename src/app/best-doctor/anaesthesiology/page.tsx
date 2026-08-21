import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Anaesthesiology Department | SRM Global Hospitals",
  description:
    "Safe anaesthesia, pain management, and critical care support, delivered by a team of nine specialists across all surgical disciplines at SRM Global Hospitals Chennai.",
  path: "/best-doctor/anaesthesiology",
});

const DOCTORS = [
  { initials: "VC", name: "Dr. Varun. C",           role: "Senior Consultant", quals: "MBBS, MD",      color: "#8b3dff", bg: "linear-gradient(135deg, #f3ebff, #e4cffe)" },
  { initials: "K",  name: "Dr. Ksheerabdhi",        role: "Consultant",        quals: "MBBS, MD",      color: "#1fb6e0", bg: "linear-gradient(135deg, #e7f8fc, #c9edf8)" },
  { initials: "SR", name: "Dr. Shanmitha R",        role: "Consultant",        quals: "MBBS, MD",      color: "#8b3dff", bg: "linear-gradient(135deg, #f3ebff, #e4cffe)" },
  { initials: "KA", name: "Dr. K.Y. Aravindhan",   role: "Consultant",        quals: "MBBS, MD",      color: "#1fb6e0", bg: "linear-gradient(135deg, #e7f8fc, #c9edf8)" },
  { initials: "SK", name: "Dr. Satheesh Kumar. R", role: "Consultant",        quals: "MBBS, MD",      color: "#8b3dff", bg: "linear-gradient(135deg, #f3ebff, #e4cffe)" },
  { initials: "SC", name: "Dr. Saravanan. C. R",   role: "Consultant",        quals: "MBBS, MD, DNB", color: "#1fb6e0", bg: "linear-gradient(135deg, #e7f8fc, #c9edf8)" },
  { initials: "KK", name: "Dr. Karthik. K",         role: "Consultant",        quals: "MBBS, MD",      color: "#8b3dff", bg: "linear-gradient(135deg, #f3ebff, #e4cffe)" },
  { initials: "TT", name: "Dr. Teena Thomas",       role: "Consultant",        quals: "MBBS, MD, DNB", color: "#1fb6e0", bg: "linear-gradient(135deg, #e7f8fc, #c9edf8)" },
  { initials: "AS", name: "Dr. Ajay Sankar. G. R", role: "Consultant",        quals: "MBBS, MD, FNB", color: "#8b3dff", bg: "linear-gradient(135deg, #f3ebff, #e4cffe)" },
];

export default function AnaesthesiologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Departments", path: "/best-doctor" },
            { name: "Anaesthesiology", path: "/best-doctor/anaesthesiology" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="doctors" />

      <main id="main-content">

        {/* HERO */}
        <div style={{ background: "linear-gradient(135deg, #14092b 0%, #23134a 55%, #0d1b3a 100%)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px 60px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "24px", flexWrap: "wrap" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
              <span style={{ opacity: 0.4 }}>›</span>
              <Link href="/best-doctor" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Our Specialties</Link>
              <span style={{ opacity: 0.4 }}>›</span>
              <span style={{ color: "rgba(255,255,255,0.85)" }}>Anaesthesiology</span>
            </div>
            <h1 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "48px", lineHeight: 1.15, color: "#fff", margin: "0 0 16px", fontWeight: 700 }}>
              Anaesthesiology
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: 0, maxWidth: "560px" }}>
              Safe anaesthesia, pain management, and critical care support, delivered by a team of nine specialists across all surgical disciplines.
            </p>
          </div>
        </div>

        {/* ABOUT */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <div style={{ width: "40px", height: "3px", background: "#8b3dff", borderRadius: "2px", marginBottom: "20px" }} />
              <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "32px", color: "#14092b", margin: "0 0 20px", fontWeight: 700 }}>
                About the Department
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.85, color: "#555", margin: "0 0 14px" }}>
                The Department of Anaesthesiology at SRM Global Hospitals provides perioperative care, pain management, and critical care support across all surgical specialties. The team works alongside every operating department in the hospital.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.85, color: "#555", margin: 0 }}>
                With nine anaesthesiologists on staff, the department covers general and regional anaesthesia, sedation for diagnostic procedures, obstetric anaesthesia, and post-operative pain management, available round the clock.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { value: "9",    label: "Specialists",           color: "#8b3dff" },
                { value: "24/7", label: "Availability",          color: "#1fb6e0" },
                { value: "All",  label: "Surgical Disciplines",  color: "#8b3dff" },
                { value: "ICU",  label: "Critical Care Support", color: "#1fb6e0" },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "#fff", borderRadius: "14px", padding: "24px 20px", border: "1px solid rgba(0,0,0,0.05)", textAlign: "center" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "28px", fontWeight: 700, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#888", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOCTORS GRID */}
        <div style={{ background: "#fff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ width: "40px", height: "3px", background: "#1fb6e0", borderRadius: "2px", margin: "0 auto 20px" }} />
              <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "36px", color: "#14092b", margin: "0 0 12px", fontWeight: 700 }}>
                Our Anaesthesiology Team
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#888", margin: 0 }}>
                9 specialists covering all surgical and critical care needs.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {DOCTORS.map((doc) => (
                <div key={doc.name} style={{ background: "#faf8ff", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.05)", transition: "all 0.3s" }}>
                  <div style={{ height: "280px", background: doc.bg, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    <div style={{ width: "100px", height: "100px", background: doc.color, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontSize: "32px", fontWeight: 700, color: "#fff" }}>
                      {doc.initials}
                    </div>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "10px", fontWeight: 600, color: doc.color, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "6px" }}>
                      {doc.role}
                    </div>
                    <h3 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "20px", color: "#14092b", margin: "0 0 6px", fontWeight: 700 }}>
                      {doc.name}
                    </h3>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#888", marginBottom: "16px" }}>
                      {doc.quals}
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <a href="tel:+919644496444" style={{ flex: 1, background: "#8b3dff", color: "#fff", padding: "10px", borderRadius: "8px", fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
                        Book Appointment
                      </a>
                      <div style={{ background: "#f3ebff", color: "#8b3dff", padding: "10px 16px", borderRadius: "8px", fontFamily: "Poppins, sans-serif", fontSize: "12px", fontWeight: 600, textAlign: "center", cursor: "pointer" }}>
                        Profile
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="/images/best-doctor/hero-image.jpg" alt="Team" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(139,61,255,0.92), rgba(31,182,224,0.88))" }} />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 40px" }}>
            <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "38px", color: "#fff", margin: "0 0 16px", fontWeight: 700 }}>Talk to a Specialist</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.85)", margin: "0 auto 32px", maxWidth: "480px", lineHeight: 1.6 }}>
              Book an appointment or call us directly. We will connect you with the right doctor for your concern.
            </p>
            <div style={{ display: "inline-flex", gap: "14px" }}>
              <a href="tel:+919644496444" style={{ background: "#fff", color: "#8b3dff", padding: "14px 36px", borderRadius: "100px", fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>Book Appointment</a>
              <a href="tel:+919644496444" style={{ border: "2px solid rgba(255,255,255,0.6)", color: "#fff", padding: "12px 36px", borderRadius: "100px", fontFamily: "Poppins, sans-serif", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>Call Us</a>
            </div>
          </div>
        </div>

      </main>
      <SiteFooter />
    </>
  );
}
