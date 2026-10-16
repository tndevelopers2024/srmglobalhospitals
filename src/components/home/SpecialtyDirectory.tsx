import Link from "next/link";
import type { Route } from "next";

export default function SpecialtyDirectory() {
  return (
    <section id="specialties" className="reveal">
      <div className="container">
        <div className="specialties-head">
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '16px' }}>Specialties Index</span>{" "}
            <h2 className="display-2">Every specialty.<br />One directory.</h2>{" "}
          </div>{" "}
          <div>
            <div className="specialties-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--ink-soft)' }}>
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.35-4.35" />
              </svg>{" "}
              <input type="search" placeholder="Search specialties" aria-label="Search specialties" aria-controls="specialty-list" />{" "}
            </div>{" "}
            <p className="caption" style={{ marginTop: '16px' }}>Looking for something specific? <a href="/our-specialties" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--ink)' }}>Browse all specialties</a></p>{" "}
          </div>{" "}
        </div>{" "}
        <ul className="specialties-index" id="specialty-list">
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-anaesthesiology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Anaesthesiology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/arthroscopy-sports-medicine" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Arthroscopy &amp; Sports Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-cardiology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Cardiology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-dental-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Dental &amp; OMFS <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-skin-care-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Dermatology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-diabetic-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Diabetology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-emergency-care-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Emergency Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-endocrinology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Endocrinology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-ent-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              ENT <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/fetal-medicine" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Fetal Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-general-medicine-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              General Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-general-surgery-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              General Surgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-geriatric-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Geriatrics <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/hematology" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Haematology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-hepatology-regenerative-medicine-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Hepatology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/infectious-disease" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Infectious Disease <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/interventional-radiology" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Interventional Radiology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/joint-replacement" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Joint Replacement <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-medical-gastroenterology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Medical Gastroenterology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-medical-surgical-oncology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Medical Oncology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-nephrology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Nephrology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/neurology" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Neurology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-neurosurgery-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Neurosurgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-gynecology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Obstetrics &amp; Gynaecology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-eye-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Ophthalmology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-orthopedic-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Orthopaedics <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-paediatrics-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Paediatrics <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/paediatric-critical-care" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Paediatric Critical Care <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/paediatric-surgery" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Paediatric Surgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/physical-medicine-and-rehabilitation" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Physical Medicine Rehabilitation <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-plastic-surgery-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Plastic Surgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-psychiatry-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Psychiatry <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-pulmonology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Pulmonology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-radiology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Radiology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/reproductive-medicine" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Reproductive Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-rheumatology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Rheumatology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/spine-care" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Spine Care <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/leading-surgical-gastroenterology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Surgical Gastroenterology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/surgical-oncology" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Surgical Oncology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/trauma-acute-care-surgery" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Trauma &amp; Acute Care <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/uro-gynaecology" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Uro-Gynaecology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/best-urology-hospital" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Urology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/our-specialties/vascular-surgery" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Vascular Surgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
        </ul>
        <p id="specialty-search-status" role="status" hidden>No specialties found. Try another search.</p>{" "}
      </div>{" "}
    </section>
  );
}
