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
    href: "/best-doctors/arthroscopy-sports-medicine",
    icon: "/images/best-doctor/icons/arthroscopy.png",
  },
  {
    name: "Cardiac Anaesthesia",
    href: "/best-doctors/anaesthesiology-cardiac-anaesthesia",
    icon: "/images/best-doctor/icons/anaesthesiology-cardiac-anaesthesia.png",
  },
  {
    name: "Dental",
    href: "/best-doctors/dental",
    icon: "/images/best-doctor/icons/tooth.png",
  },
  {
    name: "Dermatology",
    href: "/best-doctors/dermatology",
    icon: "/images/best-doctor/icons/department_1_dermetalogy.png",
  },
  {
    name: "Diabetology",
    href: "/best-doctors/diabetology",
    icon: "/images/best-doctor/icons/sugar-blood-level.png",
  },
  {
    name: "Emergency Medicine & Critical Care",
    href: "/best-doctors/emergency-medicine-critical-care",
    icon: "/images/best-doctor/icons/ambulance.png",
  },
  {
    name: "ENT",
    href: "/best-doctors/ent",
    icon: "/images/best-doctor/icons/department_2_ent.png",
  },
  {
    name: "Fetal Medicine",
    href: "/best-doctors/fetal-medicine",
    icon: "/images/best-doctor/icons/fetal-medicine.png",
  },
  {
    name: "General Medicine",
    href: "/best-doctors/general-medicine",
    icon: "/images/best-doctor/icons/department_14_general_medecine.png",
  },
  {
    name: "General Surgery",
    href: "/best-doctors/general-surgery",
    icon: "/images/best-doctor/icons/department_3_general_surgery.png",
  },
  {
    name: "Hematology",
    href: "/best-doctors/hematology",
    icon: "/images/best-doctor/icons/hematuria.png",
  },
  {
    name: "Hepatology",
    href: "/best-doctors/hepatology",
    icon: "/images/best-doctor/icons/hepatology.png",
  },
  {
    name: "Infectious Disease",
    href: "/best-doctors/infectious-disease",
    icon: "/images/best-doctor/icons/electrophysiology-ep-lab.png",
  },
  {
    name: "Institute of Cardiac Sciences",
    href: "/best-doctors/institute-of-cardiac-sciences",
    icon: "/images/best-doctor/icons/cardiology.png",
  },
  {
    name: "Interventional Radiology",
    href: "/best-doctors/interventional-radiology",
    icon: "/images/best-doctor/icons/interventional-radiology-icon.png",
  },
  {
    name: "Medical Oncology",
    href: "/best-doctors/medical-oncology",
    icon: "/images/best-doctor/icons/medical-oncology.png",
  },
  {
    name: "Neonatology",
    href: "/best-doctors/neonatology",
    icon: "/images/best-doctor/icons/neonatology-dept.png",
  },
  {
    name: "Nephrology",
    href: "/best-doctors/nephrology",
    icon: "/images/best-doctor/icons/department_12_neprology.png",
  },
  {
    name: "Neurology",
    href: "/best-doctors/neurology",
    icon: "/images/best-doctor/icons/department_11_neuro.png",
  },
  {
    name: "NeuroSurgery",
    href: "/best-doctors/neurosurgery",
    icon: "/images/best-doctor/icons/anesthesia-for-neurosurgeries.png",
  },
  {
    name: "Obstetrics & Gynecology",
    href: "/best-doctors/obstetrics-gynecology",
    icon: "/images/best-doctor/icons/department_4_gynecology.png",
  },
  {
    name: "Ophthalmology",
    href: "/best-doctors/ophthalmology",
    icon: "/images/best-doctor/icons/eye.png",
  },
  {
    name: "Orthopaedics",
    href: "/best-doctors/orthopaedics",
    icon: "/images/best-doctor/icons/department_5_ortho.png",
  },
  {
    name: "Paediatric Critical Care",
    href: "/best-doctors/paediatric-critical-care",
    icon: "/images/best-doctor/icons/pediatrics-critical-care.png",
  },
  {
    name: "Paediatric Endocrinology",
    href: "/best-doctors/paediatric-endocrinology",
    icon: "/images/best-doctor/icons/paediatric-endocronology.png",
  },
  {
    name: "Paediatric Surgery",
    href: "/best-doctors/paediatric-surgery",
    icon: "/images/best-doctor/icons/pediatrics-surgery.png",
  },
  {
    name: "Paediatrics",
    href: "/best-doctors/paediatrics",
    icon: "/images/best-doctor/icons/department_6_pediatric.png",
  },
  {
    name: "Physical Medicine and Rehabilitation",
    href: "/best-doctors/physical-medicine-and-rehabilitation",
    icon: "/images/best-doctor/icons/pmr.png",
  },
  {
    name: "Physiotherapy",
    href: "/best-doctors/physiotherapy",
    icon: "/images/best-doctor/icons/physiotherapy.png",
  },
  {
    name: "Plastic Surgery",
    href: "/best-doctors/plastic-surgery",
    icon: "/images/best-doctor/icons/plastic-surgery.png",
  },
  {
    name: "Pulmonology",
    href: "/best-doctors/pulmonology",
    icon: "/images/best-doctor/icons/department_16_pulmonology.png",
  },
  {
    name: "Radiology",
    href: "/best-doctors/radiology",
    icon: "/images/best-doctor/icons/department_19_radiology.png",
  },
  {
    name: "Reproductive Medicine",
    href: "/best-doctors/reproductive-medicine",
    icon: "/images/best-doctor/icons/reproductive-medicine.png",
  },
  {
    name: "Rheumatology",
    href: "/best-doctors/rheumatology",
    icon: "/images/best-doctor/icons/rheumatology.png",
  },
  {
    name: "Spine Care",
    href: "/best-doctors/spine-care",
    icon: "/images/best-doctor/icons/Spine-care.png",
  },
  {
    name: "Surgical Gastroenterology",
    href: "/best-doctors/surgical-gastroenterology",
    icon: "/images/best-doctor/icons/department_20_gastroenterology.png",
  },
  {
    name: "Surgical Oncology",
    href: "/best-doctors/surgical-oncology",
    icon: "/images/best-doctor/icons/medical-oncology.png",
  },
  {
    name: "Trauma & Acute Care Surgery",
    href: "/best-doctors/trauma-and-acute-care-surgery",
    icon: "/images/best-doctor/icons/trauma-acute-care-surgery-dept.png",
  },
  {
    name: "Urology",
    href: "/best-doctors/urology",
    icon: "/images/best-doctor/icons/department_13_urology.png",
  },
  {
    name: "Uro-Gynaecology",
    href: "/best-doctors/uro-gynaecology",
    icon: "/images/best-doctor/icons/uro-gynaecology.png",
  },
  {
    name: "Vascular Surgery",
    href: "/best-doctors/vascular-surgery",
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
