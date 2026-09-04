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
              <input type="search" placeholder="Search 40+ specialties, doctors, conditions" />{" "}
            </div>{" "}
            <p className="caption" style={{ marginTop: '16px' }}>Looking for something specific? <a href="#" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--ink)' }}>Browse by condition</a></p>{" "}
          </div>{" "}
        </div>{" "}
        <ul className="specialties-index">
          <li className="specialty-item">
            <Link href="/specialties/anaesthesiology" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Anaesthesiology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href="/specialties/arthroscopy-sports-medicine" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Arthroscopy &amp; Sports Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">Cardiac Sciences <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">
            <Link href="/specialties/dental-omfs" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Dental &amp; OMFS <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href="/specialties/dermatology" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Dermatology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/specialties/diabetology" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Diabetology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/specialties/emergency-medicine" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Emergency Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/specialties/endocrinology" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Endocrinology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">
            <Link href={"/specialties/ent" as Route} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              ENT <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">Fetal Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">General Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">General Surgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Geriatrics <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Haematology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Hepatology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Infectious Disease <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Interventional Radiology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Joint Replacement <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Medical Gastroenterology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Medical Oncology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Nephrology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Neurology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Neurosurgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Obstetrics &amp; Gynaecology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Ophthalmology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Orthopaedics <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Paediatrics <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Paediatric Surgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Plastic Surgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Psychiatry <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">
            <Link href="/specialties/pulmonology" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              Pulmonology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </li>{" "}
          <li className="specialty-item">Radiology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Reproductive Medicine <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Rheumatology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Spine Care <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Surgical Gastroenterology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Surgical Oncology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Trauma &amp; Acute Care <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Urology <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
          <li className="specialty-item">Vascular Surgery <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></li>{" "}
        </ul>{" "}
      </div>{" "}
    </section>
  );
}
