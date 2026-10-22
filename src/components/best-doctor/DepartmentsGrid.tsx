import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";

interface Department {
  name: string;
  icon: string;
  href?: string;
}

const DEPARTMENTS: Department[] = [
  {
    name: "Anaesthesiology",
    href: "/department/anaesthesiology",
    icon: "/images/best-doctor/icons/department_15_anaesthesiology.png",
  },
  {
    name: "Arthroscopy & Sports Medicine",
    href: "/department/arthroscopy-sports-medicine",
    icon: "/images/best-doctor/icons/arthroscopy.png",
  },
  {
    name: "Cardiac Anaesthesia",
    href: "/department/anaesthesiology-cardiac-anaesthesia",
    icon: "/images/best-doctor/icons/anaesthesiology-cardiac-anaesthesia.png",
  },
  {
    name: "Dental",
    href: "/department/dental",
    icon: "/images/best-doctor/icons/tooth.png",
  },
  {
    name: "Dermatology",
    href: "/department/dermatology",
    icon: "/images/best-doctor/icons/department_1_dermetalogy.png",
  },
  {
    name: "Diabetology",
    href: "/department/diabetology",
    icon: "/images/best-doctor/icons/sugar-blood-level.png",
  },
  {
    name: "Emergency Medicine & Critical Care",
    href: "/department/emergency-medicine-critical-care-unit",
    icon: "/images/best-doctor/icons/ambulance.png",
  },
  {
    name: "ENT",
    href: "/department/ent",
    icon: "/images/best-doctor/icons/department_2_ent.png",
  },
  {
    name: "Fetal Medicine",
    href: "/department/fetal-medicine",
    icon: "/images/best-doctor/icons/fetal-medicine.png",
  },
  {
    name: "General Medicine",
    href: "/department/general-medicine",
    icon: "/images/best-doctor/icons/department_14_general_medecine.png",
  },
  {
    name: "General Surgery",
    href: "/department/general-surgery",
    icon: "/images/best-doctor/icons/department_3_general_surgery.png",
  },
  {
    name: "Hematology",
    href: "/department/hematology",
    icon: "/images/best-doctor/icons/hematuria.png",
  },
  {
    name: "Hepatology",
    href: "/department/hepatology",
    icon: "/images/best-doctor/icons/hepatology.png",
  },
  {
    name: "Infectious Disease",
    href: "/department/infectious-disease",
    icon: "/images/best-doctor/icons/electrophysiology-ep-lab.png",
  },
  {
    name: "Institute of Cardiac Sciences",
    href: "/department/institute-of-cardiac-sciences",
    icon: "/images/best-doctor/icons/cardiology.png",
  },
  {
    name: "Interventional Radiology",
    href: "/department/interventional-radiology",
    icon: "/images/best-doctor/icons/interventional-radiology-icon.png",
  },
  {
    name: "Medical Oncology",
    href: "/department/medical-oncology",
    icon: "/images/best-doctor/icons/medical-oncology.png",
  },
  {
    name: "Neonatology",
    href: "/department/neonatology",
    icon: "/images/best-doctor/icons/neonatology-dept.png",
  },
  {
    name: "Nephrology",
    href: "/department/nephrology",
    icon: "/images/best-doctor/icons/department_12_neprology.png",
  },
  {
    name: "Neurology",
    href: "/department/neurology",
    icon: "/images/best-doctor/icons/department_11_neuro.png",
  },
  {
    name: "NeuroSurgery",
    href: "/department/neurosurgery",
    icon: "/images/best-doctor/icons/anesthesia-for-neurosurgeries.png",
  },
  {
    name: "Obstetrics & Gynecology",
    href: "/department/obstetrics-gynecology",
    icon: "/images/best-doctor/icons/department_4_gynecology.png",
  },
  {
    name: "Ophthalmology",
    href: "/department/ophthalmology",
    icon: "/images/best-doctor/icons/eye.png",
  },
  {
    name: "Orthopaedics",
    href: "/department/orthopaedics",
    icon: "/images/best-doctor/icons/department_5_ortho.png",
  },
  {
    name: "Paediatric Critical Care",
    href: "/department/paediatric-critical-care",
    icon: "/images/best-doctor/icons/pediatrics-critical-care.png",
  },
  {
    name: "Paediatric Endocrinology",
    href: "/department/paediatric-endocrinology",
    icon: "/images/best-doctor/icons/paediatric-endocronology.png",
  },
  {
    name: "Paediatric Surgery",
    href: "/department/paediatric-surgery",
    icon: "/images/best-doctor/icons/pediatrics-surgery.png",
  },
  {
    name: "Paediatrics",
    href: "/department/paediatrics",
    icon: "/images/best-doctor/icons/department_6_pediatric.png",
  },
  {
    name: "Physical Medicine and Rehabilitation",
    href: "/department/physical-medicine-and-rehabilitation",
    icon: "/images/best-doctor/icons/pmr.png",
  },
  {
    name: "Physiotherapy",
    href: "/department/physiotherapy",
    icon: "/images/best-doctor/icons/physiotherapy.png",
  },
  {
    name: "Plastic Surgery",
    href: "/department/plastic-surgery",
    icon: "/images/best-doctor/icons/plastic-surgery.png",
  },
  {
    name: "Pulmonology",
    href: "/department/pulmonology",
    icon: "/images/best-doctor/icons/department_16_pulmonology.png",
  },
  {
    name: "Radiology",
    href: "/department/radiology",
    icon: "/images/best-doctor/icons/department_19_radiology.png",
  },
  {
    name: "Reproductive Medicine",
    href: "/department/reproductive-medicine",
    icon: "/images/best-doctor/icons/reproductive-medicine.png",
  },
  {
    name: "Rheumatology",
    href: "/department/rheumatology",
    icon: "/images/best-doctor/icons/rheumatology.png",
  },
  {
    name: "Spine Care",
    href: "/department/spine-care",
    icon: "/images/best-doctor/icons/Spine-care.png",
  },
  {
    name: "Surgical Gastroenterology",
    href: "/department/surgical-gastroenterology",
    icon: "/images/best-doctor/icons/department_20_gastroenterology.png",
  },
  {
    name: "Surgical Oncology",
    href: "/department/surgical-oncology",
    icon: "/images/best-doctor/icons/medical-oncology.png",
  },
  {
    name: "Trauma & Acute Care Surgery",
    href: "/department/trauma-acute-care-surgery",
    icon: "/images/best-doctor/icons/trauma-acute-care-surgery-dept.png",
  },
  {
    name: "Urology",
    href: "/department/urology",
    icon: "/images/best-doctor/icons/department_13_urology.png",
  },
  {
    name: "Uro-Gynaecology",
    href: "/department/uro-gynaecology",
    icon: "/images/best-doctor/icons/uro-gynaecology.png",
  },
  {
    name: "Vascular Surgery",
    href: "/department/vascular-surgery",
    icon: "/images/best-doctor/icons/vascular.png",
  },
];

export default function DepartmentsGrid() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div style={{ width: "40px", height: "3px", background: "#8b3dff", borderRadius: "2px", margin: "0 auto 20px" }}></div>
        <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "36px", color: "#14092b", margin: "0 0 12px", fontWeight: 700 }}>
          All Departments
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", color: "#888", margin: 0 }}>
          Explore our full range of medical and surgical specialties.
        </p>
      </div>

      <div className="dept-grid">
        {DEPARTMENTS.map((dept, index) => {
          if (dept.href) {
            return (
              <Link key={index} href={dept.href as Route} className="dept-card">
                <div className="dept-icon" style={{ background: "rgb(243, 235, 255)" }}>
                  <Image
                    src={dept.icon}
                    alt={dept.name}
                    width={28}
                    height={28}
                  />
                </div>
                <div className="dept-name">{dept.name}</div>
              </Link>
            );
          }
          return (
            <div key={index} className="dept-card">
              <div className="dept-icon" style={{ background: "rgb(243, 235, 255)" }}>
                <Image
                  src={dept.icon}
                  alt={dept.name}
                  width={28}
                  height={28}
                />
              </div>
              <div className="dept-name">{dept.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
