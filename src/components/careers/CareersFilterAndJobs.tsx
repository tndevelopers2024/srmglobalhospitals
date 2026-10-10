"use client";

import React, { useState, useMemo, useEffect } from "react";
import CareerJobCard from "./CareerJobCard";

export interface JobItem {
  id: string;
  title: string;
  department: string;
  category: "all" | "medical" | "nursing" | "allied" | "diagnostics" | "operations";
  jobType: string;
  type: string; // alias for backward-compatibility
  jobLocation: string;
  location: string; // alias for backward-compatibility
  locationFilter: "all" | "kattankulathur" | "field";
  experience: string;
  experienceLevel: "all" | "fresher" | "mid" | "senior";
  qualification: string;
  jobSummary: string;
  overview: string; // alias for backward-compatibility
  responsibilities: string[];
  eligibilityCriteria: string[];
  qualificationsList: string[]; // alias for backward-compatibility
  preferredCandidate: string[];
  keySkills: string[];
  contactNumber?: string;
  benefits?: string[];
}

export const ALL_JOBS: JobItem[] = [
  // 1. Marketing Executive (Field Work)
  {
    id: "marketing-executive",
    title: "Marketing Executive (Field Work)",
    department: "Marketing & Business Development",
    category: "operations",
    jobType: "Full Time • Field Work / In Person",
    type: "Full Time • Field Work",
    jobLocation: "Villupuram, Tindivanam, Kancheepuram, Cheyyar, Tiruvannamalai, ECR, Mahabalipuram, Kilambakkam",
    location: "Villupuram, Tindivanam, Kancheepuram & ECR",
    locationFilter: "field",
    experience: "0 to 5 Years in Marketing / Field Work",
    experienceLevel: "fresher",
    qualification: "Any Graduate / Pharmacy / Healthcare / MBA Marketing",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "We are seeking a dynamic and result-oriented Marketing Executive for a field-based role. The candidate will be responsible for promoting services, building strong relationships with healthcare professionals, and supporting business growth through effective field marketing across assigned locations.",
    overview:
      "We are seeking a dynamic and result-oriented Marketing Executive for a field-based role. The candidate will be responsible for promoting services, building strong relationships with healthcare professionals, and supporting business growth through effective field marketing across assigned locations.",
    responsibilities: [
      "Conduct regular field visits to hospitals, clinics, and healthcare centers",
      "Develop and maintain relationships with doctors and medical professionals",
      "Promote hospital services and generate patient referrals",
      "Execute marketing activities in assigned territories",
      "Track and report daily field activities and performance",
      "Identify new business opportunities and expand network",
    ],
    eligibilityCriteria: [
      "0 to 5 years of experience in marketing / field work",
      "Male & Female candidates can apply",
      "Good communication and interpersonal skills",
      "Must have a valid Driving License and own a two-wheeler",
      "Willingness to travel across the assigned locations",
    ],
    qualificationsList: [
      "0 to 5 years of experience in marketing / field work",
      "Male & Female candidates can apply",
      "Good communication and interpersonal skills",
      "Must have a valid Driving License and own a two-wheeler",
      "Willingness to travel across the assigned locations",
    ],
    preferredCandidate: [
      "Experience as a Medical Representative or in Doctor Referral Marketing",
      "Candidates with Pharmacy / Healthcare background",
    ],
    keySkills: [
      "Excellent Communication & Negotiation",
      "Doctor Referral Marketing",
      "Strong Relationship Building",
      "Territory Planning & Reporting",
      "Self-Motivated & Target-Driven",
      "Healthcare Service Knowledge",
    ],
  },

  // 2. Duty Medical Officer
  {
    id: "duty-medical-officer",
    title: "Duty Medical Officer (DMO)",
    department: "Emergency Medicine & Clinical Services",
    category: "medical",
    jobType: "Full Time • Rotational Shifts (6 hrs / 12 hrs)",
    type: "Full Time • Rotational Shifts",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "0–2 Years (Freshers Welcome)",
    experienceLevel: "fresher",
    qualification: "MBBS Graduate with Valid TNMC Registration",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "We are looking for a dedicated and responsible Duty Medical Officer to provide round-the-clock medical care and support in a hospital setting. The candidate will be responsible for handling patient care, emergencies, and coordinating with consultants to ensure smooth clinical operations.",
    overview:
      "We are looking for a dedicated and responsible Duty Medical Officer to provide round-the-clock medical care and support in a hospital setting. The candidate will be responsible for handling patient care, emergencies, and coordinating with consultants to ensure smooth clinical operations.",
    responsibilities: [
      "Provide immediate medical care and attend to patients in OPD/IPD and emergency cases",
      "Perform initial assessment, diagnosis, and stabilization of patients",
      "Coordinate with consultants and follow treatment protocols",
      "Monitor patient progress and maintain accurate medical records",
      "Handle medical emergencies efficiently",
      "Ensure proper documentation, case sheets, and discharge summaries",
      "Support clinical procedures and assist senior doctors when required",
      "Adhere to hospital policies and clinical guidelines",
    ],
    eligibilityCriteria: [
      "MBBS Graduate from a recognized medical institution",
      "0–2 years of clinical experience (Freshers can also apply)",
      "TNMC Registration is mandatory (grace period of 2 months will be provided)",
      "Good clinical knowledge and decision-making skills",
    ],
    qualificationsList: [
      "MBBS Graduate from a recognized medical institution",
      "0–2 years of clinical experience (Freshers can also apply)",
      "TNMC Registration is mandatory (grace period of 2 months will be provided)",
      "Good clinical knowledge and decision-making skills",
    ],
    preferredCandidate: [
      "Candidates from Chengalpattu, Tambaram, or nearby locations",
      "Willingness to work in rotational shifts (6 hrs / 12 hrs)",
      "Immediate joiners or short notice candidates preferred",
    ],
    keySkills: [
      "Patient Management",
      "Emergency Handling & Resuscitation",
      "Clinical Decision Making",
      "Communication & Teamwork",
      "Accurate Clinical Documentation",
    ],
  },

  // 2b. Consultant / Intensivist (Critical Care & ICU)
  {
    id: "intensivist-critical-care",
    title: "Consultant / Intensivist (Critical Care & ICU)",
    department: "Critical Care Medicine & Intensive Care",
    category: "medical",
    jobType: "Full Time • Rotational ICU Shifts",
    type: "Full Time • Rotational Shifts",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "3 – 7 Years post-MD/DNB",
    experienceLevel: "mid",
    qualification: "MD (Anaesthesia / General Medicine / Pulmonology) / DNB / IDCCM with Valid TNMC Registration",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Provide specialized tertiary and quaternary intensive care management for critically ill patients across Medical ICU, Surgical ICU, and Neuro ICU. Lead multidisciplinary resuscitation, advanced hemodynamic monitoring, invasive mechanical ventilation, and continuous renal replacement therapy.",
    overview:
      "Provide specialized tertiary and quaternary intensive care management for critically ill patients across Medical ICU, Surgical ICU, and Neuro ICU. Lead multidisciplinary resuscitation, advanced hemodynamic monitoring, invasive mechanical ventilation, and continuous renal replacement therapy.",
    responsibilities: [
      "Lead daily ICU rounds, clinical assessments, and treatment plans for multi-organ failure patients",
      "Perform invasive critical care procedures including central line insertion, arterial cannulation, and percutaneous tracheostomy",
      "Manage advanced mechanical ventilation protocols, ARDS lung-protective strategies, and prone positioning",
      "Coordinate clinical handovers with primary admitting consultants and surgical specialists",
      "Oversee hospital code blue and rapid response team activations across inpatient wards",
      "Uphold strict antimicrobial stewardship, infection control bundles, and clinical quality metrics",
    ],
    eligibilityCriteria: [
      "MD (Anaesthesia, General Medicine, Pulmonology) / DNB / DM Critical Care with valid TNMC Registration",
      "Fellowship in Critical Care (IDCCM, IFCCM, EDIC) or 3+ years experience in a high-volume tertiary ICU",
      "Proficiency in bedside echocardiography, lung ultrasound, and fiberoptic bronchoscopy",
    ],
    qualificationsList: [
      "MD (Anaesthesia, General Medicine, Pulmonology) / DNB / DM Critical Care with valid TNMC Registration",
      "Fellowship in Critical Care (IDCCM, IFCCM, EDIC) or 3+ years experience in a high-volume tertiary ICU",
      "Proficiency in bedside echocardiography, lung ultrasound, and fiberoptic bronchoscopy",
    ],
    preferredCandidate: [
      "Prior experience in ECMO management and CRRT in quaternary healthcare centers",
      "Strong interpersonal skills for sensitive family counselling and empathetic patient communication",
    ],
    keySkills: [
      "Advanced Hemodynamic Monitoring & Resuscitation",
      "Invasive Mechanical Ventilation & ARDS Management",
      "Percutaneous Tracheostomy & Vascular Access",
      "Bedside Critical Care Ultrasound & Echocardiography",
      "Code Blue & Emergency Rapid Response Leadership",
    ],
  },

  // 2c. Emergency Medicine Physician / Consultant
  {
    id: "emergency-medicine-physician",
    title: "Emergency Medicine Physician / Consultant",
    department: "Emergency & Trauma Care",
    category: "medical",
    jobType: "Full Time • Rotational Shifts",
    type: "Full Time • Rotational Shifts",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "2 – 6 Years post-MEM/MD",
    experienceLevel: "mid",
    qualification: "MD (Emergency Medicine) / DNB / MEM / MRCEM with Valid TNMC Registration",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Lead 24/7 emergency resuscitation, trauma triage, and acute clinical stabilization at SRM Global Hospitals Level 1 Emergency Department. Direct rapid intervention pathways for acute stroke (thrombolysis), STEMI (primary PCI), severe sepsis, and polytrauma.",
    overview:
      "Lead 24/7 emergency resuscitation, trauma triage, and acute clinical stabilization at SRM Global Hospitals Level 1 Emergency Department. Direct rapid intervention pathways for acute stroke (thrombolysis), STEMI (primary PCI), severe sepsis, and polytrauma.",
    responsibilities: [
      "Conduct rapid triage, evaluation, and resuscitation for adult and pediatric emergency cases",
      "Perform emergency life-saving procedures including rapid sequence intubation, chest tube thoracostomy, and joint reductions",
      "Direct STEMI code, acute ischemic stroke code, and polytrauma activation pathways",
      "Supervise and mentor Duty Medical Officers, emergency nursing staff, and EMT teams",
      "Ensure swift emergency diagnostic workup (FAST ultrasound, CT scans) and consultant referrals",
      "Ensure meticulous documentation of medico-legal cases (MLC) and emergency case sheets",
    ],
    eligibilityCriteria: [
      "MD Emergency Medicine / DNB / MEM / MRCEM with valid TNMC registration",
      "2 to 6 years of experience in an accredited emergency medicine department",
      "ACLS, ATLS, and PALS certified clinician",
    ],
    qualificationsList: [
      "MD Emergency Medicine / DNB / MEM / MRCEM with valid TNMC registration",
      "2 to 6 years of experience in an accredited emergency medicine department",
      "ACLS, ATLS, and PALS certified clinician",
    ],
    preferredCandidate: [
      "Experience in disaster management, mass casualty triage, and stroke pathway execution",
      "Residents of Chengalpattu, Tambaram, or nearby Chennai suburbs preferred",
    ],
    keySkills: [
      "Polytrauma Resuscitation & Damage Control",
      "Rapid Sequence Intubation & Airway Management",
      "Emergency Bedside Ultrasound (eFAST & Cardiac)",
      "Stroke Thrombolysis & STEMI Rapid Pathways",
      "Medico-Legal Documentation & Triage Leadership",
    ],
  },

  // 2d. Junior Consultant / Senior Resident - General & Laparoscopic Surgery
  {
    id: "consultant-general-surgery",
    title: "Junior Consultant / Senior Resident - General & Laparoscopic Surgery",
    department: "General & Minimally Invasive Surgery",
    category: "medical",
    jobType: "Full Time • In Person",
    type: "Full Time • In Person",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "1 – 4 Years post-MS/DNB",
    experienceLevel: "fresher",
    qualification: "MS (General Surgery) / DNB (General Surgery) with Valid TNMC Registration",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Perform elective and emergency general surgical procedures, laparoscopic surgeries, and comprehensive pre/post-operative surgical care. Support chief surgical consultants in complex abdominal, colorectal, endocrine, and trauma surgical interventions.",
    overview:
      "Perform elective and emergency general surgical procedures, laparoscopic surgeries, and comprehensive pre/post-operative surgical care. Support chief surgical consultants in complex abdominal, colorectal, endocrine, and trauma surgical interventions.",
    responsibilities: [
      "Perform routine elective surgeries: laparoscopic cholecystectomy, appendectomy, and hernia repairs",
      "Attend to surgical emergencies including acute abdomen, peritonitis, bowel obstruction, and trauma laparotomies",
      "Conduct daily surgical ward rounds, post-operative monitoring, and wound care management",
      "Conduct surgical outpatient clinics (OPD) and evaluate patients for surgical indications",
      "Ensure strict surgical safety checklist adherence, surgical site infection (SSI) surveillance, and documentation",
    ],
    eligibilityCriteria: [
      "MS or DNB in General Surgery from a recognized institution with active TNMC registration",
      "1 to 4 years post-qualification surgical experience",
      "Sound competency in basic and advanced laparoscopic techniques",
    ],
    qualificationsList: [
      "MS or DNB in General Surgery from a recognized institution with active TNMC registration",
      "1 to 4 years post-qualification surgical experience",
      "Sound competency in basic and advanced laparoscopic techniques",
    ],
    preferredCandidate: [
      "Fellowship in Minimal Access Surgery (FMAS / FIAGES) is an added advantage",
      "Immediate joiners or candidates on short notice period preferred",
    ],
    keySkills: [
      "Minimally Invasive & Laparoscopic Surgery",
      "Emergency Laparotomy & Abdominal Trauma Care",
      "Surgical Safety Checklist & Infection Control",
      "Pre & Post-Operative Critical Surgical Care",
      "Endocrine & Colorectal Surgical Procedures",
    ],
  },

  // 3. House Keeping Supervisor
  {
    id: "house-keeping-supervisor",
    title: "House Keeping Supervisor",
    department: "Hospital Facility & Environmental Hygiene",
    category: "operations",
    jobType: "Full Time • In Person (Rotational Shifts)",
    type: "Full Time • In Person",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "5 – 10 Years",
    experienceLevel: "senior",
    qualification: "Diploma / Degree in Hotel/Facility Management or Any Graduate",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Supervise and coordinate daily hospital housekeeping operations, infection control sanitization, and bio-medical waste segregation across inpatient wards, ICUs, OPDs, and operation theatres to uphold the highest standards of cleanliness and NABH environmental hygiene.",
    overview:
      "Supervise and coordinate daily hospital housekeeping operations, infection control sanitization, and bio-medical waste segregation across inpatient wards, ICUs, OPDs, and operation theatres to uphold the highest standards of cleanliness and NABH environmental hygiene.",
    responsibilities: [
      "Oversee daily cleaning, disinfection, and sanitation schedules across all hospital floors, wards, and operation theatres",
      "Supervise housekeeping attendants, assign duty rosters, and monitor daily attendance",
      "Implement strict bio-medical waste segregation, color-coded bin protocols, and infection control standards",
      "Conduct regular inspections of clinical and public areas for hygiene, linen circulation, and aesthetic maintenance",
      "Manage inventory of cleaning chemicals, machinery, PPE, and consumable sanitation supplies",
      "Conduct regular hygiene training, PPE compliance, and safety orientation for cleaning personnel",
    ],
    eligibilityCriteria: [
      "Diploma or Degree in Hotel Management, Facility Management, or any graduate discipline",
      "5 to 10 years of proven experience in hospital or healthcare facility housekeeping",
      "Sound understanding of hospital infection control practices and NABH quality standards",
    ],
    qualificationsList: [
      "Diploma or Degree in Hotel Management, Facility Management, or any graduate discipline",
      "5 to 10 years of proven experience in hospital or healthcare facility housekeeping",
      "Sound understanding of hospital infection control practices and NABH quality standards",
    ],
    preferredCandidate: [
      "Supervisory experience in reputed tertiary care or multi-specialty hospitals",
      "Demonstrated leadership in managing 24/7 rotational housekeeping shifts",
      "Residence in or around Kattankulathur, Chengalpattu, or Tambaram",
    ],
    keySkills: [
      "Hospital Sanitation & Hygiene Protocols",
      "Bio-Medical Waste (BMW) Management",
      "Manpower Rostering & Supervision",
      "Infection Control Compliance",
      "Inventory & Equipment Care",
    ],
  },

  // 4. Branding Head
  {
    id: "branding-head",
    title: "Branding Head",
    department: "Branding, PR & Corporate Communications",
    category: "operations",
    jobType: "Full Time • In Person",
    type: "Full Time • In Person",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "10 – 15 Years",
    experienceLevel: "senior",
    qualification: "MBA in Marketing / Mass Communication / Branding or Equivalent",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Lead the overarching brand strategy, institutional positioning, and multi-channel marketing campaigns for SRM Global Hospitals. Spearhead corporate identity, digital footprint, hospital public relations, and community outreach to solidify SRM's standing as a world-class healthcare institution.",
    overview:
      "Lead the overarching brand strategy, institutional positioning, and multi-channel marketing campaigns for SRM Global Hospitals. Spearhead corporate identity, digital footprint, hospital public relations, and community outreach to solidify SRM's standing as a world-class healthcare institution.",
    responsibilities: [
      "Develop and execute comprehensive brand building and communication strategies across hospital specialties and centers of excellence",
      "Oversee creative design, advertising campaigns, digital media, press releases, and corporate collateral",
      "Lead reputation management, healthcare PR, media partnerships, and CSR health initiative outreach",
      "Collaborate with clinical department heads to translate medical breakthroughs into compelling patient stories",
      "Manage agency partners, brand budgets, vendor relationships, and high-impact healthcare events",
      "Track brand equity metrics, campaign performance, and digital engagement analytics",
    ],
    eligibilityCriteria: [
      "MBA in Marketing / Mass Communication / Branding or related postgraduate qualification",
      "10 to 15 years of proven experience in brand management, corporate communications, or advertising",
      "Demonstrated portfolio of successful 360-degree brand campaigns and high-level stakeholder management",
    ],
    qualificationsList: [
      "MBA in Marketing / Mass Communication / Branding or related postgraduate qualification",
      "10 to 15 years of proven experience in brand management, corporate communications, or advertising",
      "Demonstrated portfolio of successful 360-degree brand campaigns and high-level stakeholder management",
    ],
    preferredCandidate: [
      "Prior brand leadership experience in healthcare chains, multi-specialty hospitals, or top-tier advertising agencies",
      "Exceptional creative vision, strategic communication, and executive presentation abilities",
    ],
    keySkills: [
      "Strategic Brand Positioning",
      "Corporate Communications & PR",
      "Healthcare Campaign Management",
      "Digital Branding & Social Media Leadership",
      "Creative Direction & Agency Management",
    ],
  },

  // 5. Echo Technician
  {
    id: "echo-technician",
    title: "Echo Technician",
    department: "Cardiology & Non-Invasive Cardiac Lab",
    category: "diagnostics",
    jobType: "Full Time • In Person",
    type: "Full Time • In Person",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "5 – 10 Years",
    experienceLevel: "senior",
    qualification: "B.Sc in Cardiac Care / Cardiovascular Technology or Diploma in Echo Technology",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Perform diagnostic non-invasive cardiac echocardiography procedures, including Transthoracic Echocardiograms (TTE), Stress Echo, and assisting with Transesophageal Echocardiograms (TEE) for comprehensive cardiac disease evaluation and hemodynamic monitoring.",
    overview:
      "Perform diagnostic non-invasive cardiac echocardiography procedures, including Transthoracic Echocardiograms (TTE), Stress Echo, and assisting with Transesophageal Echocardiograms (TEE) for comprehensive cardiac disease evaluation and hemodynamic monitoring.",
    responsibilities: [
      "Conduct high-resolution 2D/3D Transthoracic Echocardiograms (TTE), Doppler studies, and tissue Doppler imaging",
      "Assist cardiologists during Transesophageal Echocardiograms (TEE), Dobutamine Stress Echo, and contrast studies",
      "Measure cardiac chamber dimensions, ejection fraction, valve gradients, and hemodynamics accurately",
      "Prepare preliminary technical study findings and upload images onto PACS",
      "Maintain, calibrate, and sterilize ultrasound probes and echocardiography machines",
      "Assist in emergency bedside echocardiograms in CCU, ICU, and cardiac emergency triage",
    ],
    eligibilityCriteria: [
      "B.Sc in Cardiac Care Technology / Cardiovascular Technology or Diploma in Echo Technology",
      "5 to 10 years of clinical experience as an Echo Technician in an advanced cardiac center or tertiary care hospital",
      "In-depth understanding of cardiac anatomy, adult and pediatric valvular heart diseases, and ischemic cardiomyopathy",
    ],
    qualificationsList: [
      "B.Sc in Cardiac Care Technology / Cardiovascular Technology or Diploma in Echo Technology",
      "5 to 10 years of clinical experience as an Echo Technician in an advanced cardiac center or tertiary care hospital",
      "In-depth understanding of cardiac anatomy, adult and pediatric valvular heart diseases, and ischemic cardiomyopathy",
    ],
    preferredCandidate: [
      "Experience in assisting complex structural heart and congenital echo evaluations",
      "Familiarity with high-end GE, Philips, or Siemens echocardiography platforms",
      "Ability to respond promptly to CCU and emergency codes",
    ],
    keySkills: [
      "2D / 3D Echocardiography & Color Doppler",
      "Hemodynamic Assessment & Chamber Quantification",
      "Stress Echo & TEE Procedure Assistance",
      "Emergency Bedside Cardiac Ultrasound",
      "Equipment Care & PACS Archiving",
    ],
  },

  // 6. Radiographer
  {
    id: "radiographer",
    title: "Radiographer",
    department: "Radiology & Medical Imaging",
    category: "diagnostics",
    jobType: "Full Time • Rotational Shifts",
    type: "Full Time • Rotational Shifts",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "2 – 5 Years",
    experienceLevel: "mid",
    qualification: "B.Sc in Medical Imaging Technology (BMIT) or Diploma in Radiological Technology (DRIT / CRA)",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Operate diagnostic radiographic equipment including digital radiography (DR/CR), multi-slice CT, and high-field MRI to produce diagnostic-quality medical images while upholding strict radiation safety and patient care protocols.",
    overview:
      "Operate diagnostic radiographic equipment including digital radiography (DR/CR), multi-slice CT, and high-field MRI to produce diagnostic-quality medical images while upholding strict radiation safety and patient care protocols.",
    responsibilities: [
      "Perform routine and special diagnostic X-ray procedures, fluoroscopy, and trauma imaging",
      "Position patients accurately to obtain optimal diagnostic views while ensuring minimal patient discomfort",
      "Operate multi-slice CT scanners and assist radiologists during contrast-enhanced imaging and biopsies",
      "Ensure strict adherence to AERB (Atomic Energy Regulatory Board) radiation safety guidelines, ALARA principles, and lead shielding",
      "Maintain radiographic equipment, QA logs, and ensure timely transmission of scans to PACS",
      "Attend to emergency trauma radiography and bedside portable X-rays in ICUs and operation theatres",
    ],
    eligibilityCriteria: [
      "B.Sc in Medical Imaging Technology (BMIT) or Diploma in Radiological Technology (DRIT / CRA)",
      "2 to 5 years of hands-on experience in diagnostic radiology in a hospital setup",
      "AERB certification and thorough knowledge of radiation safety standards",
    ],
    qualificationsList: [
      "B.Sc in Medical Imaging Technology (BMIT) or Diploma in Radiological Technology (DRIT / CRA)",
      "2 to 5 years of hands-on experience in diagnostic radiology in a hospital setup",
      "AERB certification and thorough knowledge of radiation safety standards",
    ],
    preferredCandidate: [
      "Experience handling multislice CT scanners and digital radiography systems",
      "Quick response capability during emergency trauma and poly-trauma triage",
      "Willingness to work in rotational day/night hospital shifts",
    ],
    keySkills: [
      "Digital Radiography (DR / CR) & Fluoroscopy",
      "CT Scanning & Patient Positioning",
      "Radiation Safety & ALARA Compliance (AERB)",
      "Trauma & Bedside Portable Imaging",
      "PACS & RIS Workflow",
    ],
  },

  // 7. Internal Audit
  {
    id: "internal-audit",
    title: "Internal Audit Executive",
    department: "Internal Audit & Corporate Governance",
    category: "operations",
    jobType: "Full Time • In Person",
    type: "Full Time • In Person",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "2 – 5 Years",
    experienceLevel: "mid",
    qualification: "Chartered Accountant (CA Inter / Semi-Qualified) or M.Com / MBA in Finance",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Conduct internal financial, operational, and compliance audits across hospital departments. Review billing accuracy, procurement processes, inventory controls, and statutory compliance to safeguard organizational resources and improve hospital governance.",
    overview:
      "Conduct internal financial, operational, and compliance audits across hospital departments. Review billing accuracy, procurement processes, inventory controls, and statutory compliance to safeguard organizational resources and improve hospital governance.",
    responsibilities: [
      "Execute audit plans covering hospital revenue cycle, IP/OP billing accuracy, pharmacy inventory, and purchase orders",
      "Verify compliance with internal SOPs, financial controls, statutory norms, and corporate governance policies",
      "Scrutinize patient billings, discount authorizations, insurance claims, and tariff implementations",
      "Conduct physical verification of hospital pharmacy stocks, capital assets, and biomedical equipment",
      "Prepare detailed audit reports, identify operational risks or leakages, and recommend remediation measures",
      "Follow up on previous audit observations and track implementation of corrective actions",
    ],
    eligibilityCriteria: [
      "Chartered Accountant (CA Inter / Semi-Qualified) or M.Com / MBA in Finance",
      "2 to 5 years of internal audit experience (preferably within healthcare, hospital, or corporate service sectors)",
      "Proficient in hospital information systems (HIS), ERP software, and advanced MS Excel",
    ],
    qualificationsList: [
      "Chartered Accountant (CA Inter / Semi-Qualified) or M.Com / MBA in Finance",
      "2 to 5 years of internal audit experience (preferably within healthcare, hospital, or corporate service sectors)",
      "Proficient in hospital information systems (HIS), ERP software, and advanced MS Excel",
    ],
    preferredCandidate: [
      "Prior experience in hospital internal auditing, healthcare billing audits, or Big 4 / leading accounting firms",
      "Sharp analytical acumen, high integrity, and meticulous documentation capability",
    ],
    keySkills: [
      "Financial & Operational Auditing",
      "Healthcare Revenue Cycle & Tariff Scrutiny",
      "Inventory & Fixed Asset Verification",
      "Risk Assessment & SOP Compliance",
      "Audit Reporting & Advanced MS Excel",
    ],
  },

  // 8. Perfusionist
  {
    id: "perfusionist",
    title: "Perfusionist",
    department: "Cardiothoracic & Vascular Surgery (CTVS)",
    category: "medical",
    jobType: "Full Time • In Person",
    type: "Full Time • In Person",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "5 – 10 Years",
    experienceLevel: "senior",
    qualification: "B.Sc in Perfusion Technology / Cardiovascular Perfusion from a Recognized Medical Institution",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Operate heart-lung machines (cardiopulmonary bypass) and related life support systems during open-heart cardiac surgeries, coronary artery bypass grafting (CABG), valve replacements, and complex pediatric/adult cardiac procedures.",
    overview:
      "Operate heart-lung machines (cardiopulmonary bypass) and related life support systems during open-heart cardiac surgeries, coronary artery bypass grafting (CABG), valve replacements, and complex pediatric/adult cardiac procedures.",
    responsibilities: [
      "Assemble, prime, calibrate, and operate the cardiopulmonary bypass (CPB) machine during cardiac surgical procedures",
      "Manage patient physiological parameters including perfusion pressure, arterial blood gases, hematocrit, anticoagulation (ACT), and temperature regulation during bypass",
      "Administer cardioplegia solutions to protect the myocardium during cardioplegic arrest",
      "Operate mechanical circulatory support systems including Intra-Aortic Balloon Pump (IABP) and ECMO (Extracorporeal Membrane Oxygenation) when indicated",
      "Operate autologous blood salvage (cell saver) systems and monitor blood conservation protocols",
      "Maintain perfusion equipment, inventory of oxygenators and cannulas, and uphold strict OT sterility protocols",
    ],
    eligibilityCriteria: [
      "B.Sc in Perfusion Technology / Cardiovascular Perfusion from a recognized medical institution",
      "5 to 10 years of clinical experience in an active cardiothoracic surgical unit",
      "Proven track record handling high-volume adult and pediatric open-heart surgical cases",
    ],
    qualificationsList: [
      "B.Sc in Perfusion Technology / Cardiovascular Perfusion from a recognized medical institution",
      "5 to 10 years of clinical experience in an active cardiothoracic surgical unit",
      "Proven track record handling high-volume adult and pediatric open-heart surgical cases",
    ],
    preferredCandidate: [
      "Hands-on expertise in ECMO initiation and maintenance, and IABP console operation",
      "Calm decision-making under high-pressure surgical emergencies and code situations",
    ],
    keySkills: [
      "Cardiopulmonary Bypass (CPB) Operation",
      "Myocardial Protection & Cardioplegia Delivery",
      "ECMO & IABP Console Management",
      "Blood Gas & Anticoagulation (ACT) Monitoring",
      "Autologous Cell Salvage & OT Sterility Protocols",
    ],
  },

  // 9. Cath Lab Technician
  {
    id: "cath-lab-technician",
    title: "Cath Lab Technician",
    department: "Interventional Cardiology",
    category: "diagnostics",
    jobType: "Full Time • Rotational / On-Call Shifts",
    type: "Full Time • Rotational Shifts",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "2 – 10 Years",
    experienceLevel: "mid",
    qualification: "B.Sc in Cardiac Care Technology or Diploma in Cath Lab Technology",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Assist interventional cardiologists during diagnostic catheterizations, coronary angioplasties (PTCA), pacemaker implantations, and emergency cardiac interventions in a state-of-the-art Cardiac Catheterization Laboratory.",
    overview:
      "Assist interventional cardiologists during diagnostic catheterizations, coronary angioplasties (PTCA), pacemaker implantations, and emergency cardiac interventions in a state-of-the-art Cardiac Catheterization Laboratory.",
    responsibilities: [
      "Prepare and calibrate Cath Lab imaging equipment, hemodynamic monitoring systems, and radiation protection gear",
      "Assist interventional cardiologists during angiographies, angioplasties, stenting, valve interventions, and EPS procedures",
      "Monitor and record real-time hemodynamic parameters (intracardiac pressures, ECG rhythm, oxygen saturation) throughout procedures",
      "Scrub in and assist with sterile tray setup, guide wires, catheters, balloons, and stent delivery systems",
      "Operate hemodynamic monitors, contrast injectors, and assist with emergency Primary PCI (heart attack codes)",
      "Ensure radiation safety protocols and post-procedure sheath management and patient observation",
    ],
    eligibilityCriteria: [
      "B.Sc in Cardiac Care Technology or Diploma in Cath Lab Technology",
      "2 to 10 years of experience in an advanced cardiac catheterization laboratory",
      "Sound knowledge of interventional hardware, sterile scrubbing techniques, and cardiac emergency handling",
    ],
    qualificationsList: [
      "B.Sc in Cardiac Care Technology or Diploma in Cath Lab Technology",
      "2 to 10 years of experience in an advanced cardiac catheterization laboratory",
      "Sound knowledge of interventional hardware, sterile scrubbing techniques, and cardiac emergency handling",
    ],
    preferredCandidate: [
      "Prior experience in high-volume tertiary cardiac care hospitals with 24/7 Primary PCI services",
      "Immediate readiness to attend emergency cardiac on-call duty",
    ],
    keySkills: [
      "Cath Lab Scrubbing & Catheter / Stent Instrumentation",
      "Hemodynamic & ECG Rhythm Monitoring",
      "Primary Angioplasty & Emergency Code Assistance",
      "Radiation Safety & Equipment Maintenance",
      "Contrast Media & Sterile Technique Adherence",
    ],
  },

  // 10. Insurance Executive (Billing & Insurance Executive)
  {
    id: "insurance-executive",
    title: "Insurance Executive (Billing & Insurance)",
    department: "Patient Billing & TPA Desk",
    category: "operations",
    jobType: "Full Time • In Person",
    type: "Full Time • In Person",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "0–3 Years (Freshers & Experienced)",
    experienceLevel: "fresher",
    qualification: "Bachelor's Degree in Commerce / Healthcare Management / Any Discipline",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "The Insurance Executive will be responsible for managing all activities related to patient insurance — including pre-authorization, claim processing, billing coordination, and liaison with insurance companies and TPAs. The role ensures accurate documentation, timely follow-up, and smooth coordination between patients, clinical teams, and insurers.",
    overview:
      "The Insurance Executive will be responsible for managing all activities related to patient insurance — including pre-authorization, claim processing, billing coordination, and liaison with insurance companies and TPAs. The role ensures accurate documentation, timely follow-up, and smooth coordination between patients, clinical teams, and insurers.",
    responsibilities: [
      "Coordinate with insurance companies and TPAs for pre-authorization approvals",
      "Verify patient eligibility and insurance coverage prior to admission",
      "Collect and submit necessary documents for pre-authorization and final claims",
      "Ensure correct coding (ICD, procedure codes) and documentation for claim processing",
      "Maintain communication between patients, doctors, and insurance desks for status updates",
      "Track and follow up on pending claims, rejections, or queries",
      "Prepare and maintain daily insurance MIS reports",
      "Assist in billing and discharge processes for insured patients",
      "Support cashless and reimbursement claim procedures",
      "Ensure compliance with hospital and insurance policies at all times",
    ],
    eligibilityCriteria: [
      "For Freshers: Bachelor's degree in any discipline (preferably in commerce, healthcare management, or related fields) with good communication skills",
      "For Experienced: 1–3 years of experience in hospital insurance desk operations, TPA coordination, or cashless claims",
      "Basic knowledge of MS Office (Word, Excel) and eagerness to learn hospital insurance workflows",
    ],
    qualificationsList: [
      "For Freshers: Bachelor's degree in any discipline (preferably in commerce, healthcare management, or related fields)",
      "For Experienced: 1–3 years of experience in hospital insurance desk operations, TPA coordination, or cashless claims",
      "Basic knowledge of MS Office (Word, Excel) and eagerness to learn hospital insurance workflows",
    ],
    preferredCandidate: [
      "Familiarity with pre-authorization, claim submission, insurance software portals, and corporate TPA guidelines",
      "Strong follow-up skills and patient-centric communication",
    ],
    keySkills: [
      "Pre-Authorization & TPA Coordination",
      "Cashless Claims Processing",
      "Documentation & ICD Coding Accuracy",
      "Insurance MIS Reporting",
      "Patient Empathy & Query Resolution",
    ],
  },

  // 11. Staff Nurse (CCU/ICU)
  {
    id: "staff-nurse",
    title: "Staff Nurse (CCU/ICU)",
    department: "Critical Care & Cardiac Nursing",
    category: "nursing",
    jobType: "Full Time • Rotational Shifts",
    type: "Full Time • Rotational Shifts",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "1+ Years in CCU / ICU",
    experienceLevel: "fresher",
    qualification: "B.Sc Nursing / Post-Basic B.Sc Nursing with TNC Registration",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "SRM Global Hospitals is looking for an experienced and dedicated CCU/ICU Staff Nurse to join our critical care team. The role involves providing comprehensive nursing care to patients with acute cardiac conditions in a fast-paced, technology-driven environment.",
    overview:
      "SRM Global Hospitals is looking for an experienced and dedicated CCU/ICU Staff Nurse to join our critical care team. The role involves providing comprehensive nursing care to patients with acute cardiac conditions in a fast-paced, technology-driven environment.",
    responsibilities: [
      "Provide direct nursing care to critically ill cardiac patients",
      "Monitor cardiac parameters, ECG, and vital signs",
      "Administer medications and IV infusions as prescribed",
      "Assist doctors during cardiac procedures and emergencies",
      "Maintain accurate and timely patient documentation",
      "Ensure adherence to hospital protocols and infection control practices",
    ],
    eligibilityCriteria: [
      "B.Sc Nursing from a recognized institution",
      "Registered Nurse with the State Nursing Council",
      "Minimum 1 year of experience in CCU / ICU (cardiac experience preferred)",
      "Strong clinical knowledge, patient care, and communication skills",
      "Willingness to work in rotational shifts",
    ],
    qualificationsList: [
      "B.Sc Nursing from a recognized institution",
      "Registered Nurse with the State Nursing Council",
      "Minimum 1 year of experience in CCU / ICU (cardiac experience preferred)",
      "Strong clinical knowledge, patient care, and communication skills",
      "Willingness to work in rotational shifts",
    ],
    preferredCandidate: [
      "Hands-on experience in ventilator management, hemodynamic monitoring, and central line care",
      "BLS / ACLS certification preferred",
      "Immediate joiners preferred",
    ],
    keySkills: [
      "Critical Care & Cardiac Nursing",
      "Continuous ECG & Hemodynamic Monitoring",
      "Medication & IV Infusion Administration",
      "Infection Control & Patient Safety",
      "Emergency Code Response & BLS",
    ],
    benefits: [
      "Health insurance",
      "Provident Fund",
      "Competitive salary based on experience",
      "Training and career growth opportunities",
      "Supportive and professional work environment",
    ],
  },

  // 12. Front Office Executive
  {
    id: "front-office-executive",
    title: "Front Office Executive",
    department: "Patient Hospitality & Front Desk",
    category: "operations",
    jobType: "Full Time • In Person",
    type: "Full Time • In Person",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "1 – 4 Years",
    experienceLevel: "fresher",
    qualification: "Any Bachelor's Degree / Diploma from a Recognized Institution",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Manage hospital front desk operations, patient reception, and outpatient flow with courtesy and professionalism. Serve as the primary point of contact for patients, families, and visitors, ensuring seamless registration, billing inquiries, and department navigation.",
    overview:
      "Manage hospital front desk operations, patient reception, and outpatient flow with courtesy and professionalism. Serve as the primary point of contact for patients, families, and visitors, ensuring seamless registration, billing inquiries, and department navigation.",
    responsibilities: [
      "Greet and welcome patients, visitors, and guests with a friendly and positive attitude",
      "Manage front desk operations, including answering phones, directing calls, and managing inquiries",
      "Schedule and confirm patient appointments, ensuring efficient utilization of resources",
      "Maintain the reception area, ensuring it is tidy, organized, and welcoming at all times",
      "Process patient registration, verify insurance information, and collect payments as needed",
      "Coordinate with other departments to ensure timely and accurate communication of patient information",
      "Assist in managing patient flow within the hospital, ensuring minimal wait times and optimal service delivery",
    ],
    eligibilityCriteria: [
      "Any Bachelor's Degree / Diploma from a recognized institution",
      "1 – 4 Years of experience in front office, reception, or guest relations",
      "Good verbal and written communication skills in English and Tamil",
    ],
    qualificationsList: [
      "Any Bachelor's Degree / Diploma from a recognized institution",
      "1 – 4 Years of experience in front office, reception, or guest relations",
      "Good verbal and written communication skills in English and Tamil",
    ],
    preferredCandidate: [
      "Prior experience at a hospital reception, clinic front desk, or hospitality establishment",
      "Pleasant demeanor, professional grooming, and calm composure under busy outpatient footfall",
    ],
    keySkills: [
      "Front Desk & Reception Operations",
      "Patient Registration & Appointment Scheduling",
      "Hospitality & Guest Communication",
      "Wait-Time & Patient Flow Management",
      "HIS & Basic Billing Software",
    ],
  },

  // 13. Ward Secretary (Ward Secratary)
  {
    id: "ward-secretary",
    title: "Ward Secretary",
    department: "Inpatient Administration & Nursing Support",
    category: "operations",
    jobType: "Full Time • In Person",
    type: "Full Time • In Person",
    jobLocation: "Kattankulathur, Chennai",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "0–2 Years in Healthcare/Hospital Setting",
    experienceLevel: "fresher",
    qualification: "Any Bachelor's Degree / Diploma",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "Provide administrative and clerical support to inpatient wards and nursing stations, ensuring smooth day-to-day operations, accurate patient documentation, and effective communication between medical staff, patients, and their families.",
    overview:
      "Provide administrative and clerical support to inpatient wards and nursing stations, ensuring smooth day-to-day operations, accurate patient documentation, and effective communication between medical staff, patients, and their families.",
    responsibilities: [
      "Provide administrative support to the ward, ensuring smooth day-to-day operations",
      "Maintain accurate and up-to-date patient records, including admission, transfer, and discharge details",
      "Coordinate communication between medical staff, patients, and their families",
      "Handle patient inquiries and concerns, escalating issues to appropriate personnel when necessary",
      "Ensure that all ward documentation, including consent forms and medical charts, are properly completed and filed",
      "Support nursing and medical staff by facilitating the delivery of patient care services",
      "Track diagnostic test orders and follow up on lab/radiology reports",
    ],
    eligibilityCriteria: [
      "Any Bachelor's Degree / Diploma from a recognized institution",
      "0–2 years or more in a healthcare or hospital setting, preferably in an administrative role",
      "Good organizational and communication skills",
    ],
    qualificationsList: [
      "Any Bachelor's Degree / Diploma from a recognized institution",
      "0–2 years or more in a healthcare or hospital setting, preferably in an administrative role",
      "Good organizational and communication skills",
    ],
    preferredCandidate: [
      "Familiarity with hospital inpatient workflows, medical charts, and billing coordination",
      "Basic computer proficiency in MS Office and hospital management software",
    ],
    keySkills: [
      "Inpatient Ward Administration",
      "Medical Records & Consent Form Documentation",
      "Interdepartmental Coordination",
      "Patient Admission & Discharge Assistance",
      "HIS Data Entry & Report Tracking",
    ],
  },

  // 14. Patient Care Executive (Female Staffs Only)
  {
    id: "patient-care-executive",
    title: "Patient Care Executive (Female Staffs Only)",
    department: "Patient Relations & Service Excellence",
    category: "operations",
    jobType: "Full Time • Rotational Shifts (Morning / Evening)",
    type: "Full Time • Rotational Shifts",
    jobLocation: "SRM Global Hospitals Campus, Kattankulathur",
    location: "Kattankulathur, Chennai",
    locationFilter: "kattankulathur",
    experience: "0–3 Years (Freshers Welcome)",
    experienceLevel: "fresher",
    qualification: "Minimum 12th Pass / Diploma or Degree in Any Discipline",
    contactNumber: "+91 9994255121 / 8754010369",
    jobSummary:
      "SRM Global Hospitals is seeking dynamic, presentable, and service-oriented female candidates for the position of Patient Care Executive. The role involves ensuring exceptional patient experience through professional assistance, empathetic communication, and efficient coordination across departments. Candidates with backgrounds in aviation, hospitality, or customer service are highly encouraged to apply.",
    overview:
      "SRM Global Hospitals is seeking dynamic, presentable, and service-oriented female candidates for the position of Patient Care Executive. The role involves ensuring exceptional patient experience through professional assistance, empathetic communication, and efficient coordination across departments. Candidates with backgrounds in aviation, hospitality, or customer service are highly encouraged to apply.",
    responsibilities: [
      "Greet and assist patients and visitors with warmth, courtesy, and professionalism",
      "Guide patients through admission, consultation, and discharge processes smoothly",
      "Coordinate with doctors, nurses, and administrative teams to ensure timely service delivery",
      "Provide clear communication about hospital procedures, billing, and facilities",
      "Handle patient queries, concerns, and feedback with empathy and promptness",
      "Ensure a comfortable and clean environment for patients and attendants",
      "Support the hospital's service excellence initiatives and maintain patient satisfaction standards",
      "Uphold the hospital's image through a neat appearance, professional demeanor, and courteous behavior at all times",
    ],
    eligibilityCriteria: [
      "Gender: Female candidates only",
      "Education: Minimum 12th Pass / Diploma or Degree in any discipline",
      "Experience: 0–3 years of experience in hospital, airline, hotel, or customer-facing roles (Freshers with good communication skills may also apply)",
      "Excellent communication and interpersonal skills (English & regional languages)",
    ],
    qualificationsList: [
      "Gender: Female candidates only",
      "Education: Minimum 12th Pass / Diploma or Degree in any discipline",
      "Experience: 0–3 years in hospital, airline, hotel, or customer-facing roles (Freshers welcome)",
      "Excellent communication and interpersonal skills (English & regional languages)",
    ],
    preferredCandidate: [
      "Candidates from Aviation, Hospitality, or Customer Service industries are most welcome",
      "Pleasant personality, professional grooming, and strong sense of empathy",
      "Rotational shift readiness (Morning / Evening)",
    ],
    keySkills: [
      "Patient Experience & Hospitality",
      "Empathetic Communication",
      "Patient Guidance & Departmental Navigation",
      "Feedback & Query Management",
      "Basic Computer Knowledge (MS Office)",
    ],
    benefits: [
      "Health insurance",
      "Provident Fund",
      "Formal Hospital Uniform / Dress Code as per standards",
    ],
  },
];

interface CareersFilterAndJobsProps {
  initialDept?: string;
  onApplyForJob: (job: JobItem) => void;
  onViewJobDetails?: (job: JobItem) => void;
  onGeneralApply: () => void;
}

export default function CareersFilterAndJobs({
  initialDept,
  onApplyForJob,
  onViewJobDetails,
  onGeneralApply,
}: CareersFilterAndJobsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(initialDept || "all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedExp, setSelectedExp] = useState("all");
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    if (initialDept) {
      setSelectedDept(initialDept);
      return;
    }
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const dept = params.get("dept");
      if (dept) {
        if (dept === "doctor" || dept === "medical") {
          setSelectedDept("medical");
        } else if (dept === "staff") {
          setSelectedDept("staff");
        } else {
          setSelectedDept(dept);
        }
      }
    }
  }, [initialDept]);

  // Cards display in compact header mode initially; details show only when clicked
  const [expandedJobIds, setExpandedJobIds] = useState<Set<string>>(new Set());

  // Reset to first five roles whenever search or filter criteria change
  useEffect(() => {
    setVisibleCount(5);
  }, [searchQuery, selectedDept, selectedLocation, selectedExp]);

  const toggleJob = (id: string) => {
    setExpandedJobIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredJobs = useMemo(() => {
    return ALL_JOBS.filter((job) => {
      // Department filter
      if (selectedDept === "staff") {
        if (job.category === "medical") return false;
      } else if (selectedDept !== "all" && job.category !== selectedDept) {
        return false;
      }
      // Location filter
      if (selectedLocation !== "all" && job.locationFilter !== selectedLocation) {
        return false;
      }
      // Experience filter
      if (selectedExp !== "all" && job.experienceLevel !== selectedExp) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const match =
          job.title.toLowerCase().includes(q) ||
          job.department.toLowerCase().includes(q) ||
          job.qualification.toLowerCase().includes(q) ||
          job.jobSummary.toLowerCase().includes(q) ||
          job.keySkills.some((s) => s.toLowerCase().includes(q));
        if (!match) return false;
      }
      return true;
    });
  }, [searchQuery, selectedDept, selectedLocation, selectedExp]);

  const displayedJobs = useMemo(() => {
    return filteredJobs.slice(0, visibleCount);
  }, [filteredJobs, visibleCount]);

  const hasMore = visibleCount < filteredJobs.length;

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDept("all");
    setSelectedLocation("all");
    setSelectedExp("all");
    setVisibleCount(5);
  };

  return (
    <section id="openings" style={{ padding: "70px 0 80px", background: "#ffffff" }}>
      <div className="careers-container">
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div className="careers-section-eyebrow">Current Vacancies</div>
          <h2 className="careers-section-title">Explore Current Openings</h2>
          <p className="careers-section-desc">
            Discover meaningful career pathways across clinical excellence, nursing, diagnostics,
            and hospital operations at SRM Global Hospitals.
          </p>
        </div>

        {/* Clean Filter Card */}
        <div className="careers-filter-card">
          <div className="careers-filter-grid">
            {/* Search by title / keyword */}
            <div className="careers-input-wrap">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
                style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title, skill, or keyword..."
                className="careers-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#94a3b8",
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Department dropdown */}
            <div>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="careers-select"
              >
                <option value="all">All Departments ({ALL_JOBS.length})</option>
                <option value="medical">Doctors &amp; Clinical</option>
                <option value="staff">Hospital &amp; Clinical Staff</option>
                <option value="diagnostics">Diagnostics &amp; Imaging</option>
                <option value="nursing">Nursing &amp; Critical Care</option>
                <option value="operations">Hospital Operations &amp; Marketing</option>
              </select>
            </div>

            {/* Location dropdown */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="careers-select"
              >
                <option value="all">All Locations</option>
                <option value="kattankulathur">Kattankulathur, Chennai</option>
                <option value="field">Field Work (Villupuram, Tindivanam, etc.)</option>
              </select>
            </div>

            {/* Experience dropdown */}
            <div>
              <select
                value={selectedExp}
                onChange={(e) => setSelectedExp(e.target.value)}
                className="careers-select"
              >
                <option value="all">All Experience Levels</option>
                <option value="fresher">0–2 Yrs / Freshers</option>
                <option value="mid">2–5 Years</option>
                <option value="senior">5+ Years (Senior)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Card Grid */}
        {filteredJobs.length === 0 ? (
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "20px",
              padding: "54px 32px",
              textAlign: "center",
              border: "1px dashed #cbd5e1",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                color: "#64748b",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", color: "#1a1f5c", marginBottom: "8px" }}>
              No Openings Found Matching Your Search
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#64748b", marginBottom: "20px" }}>
              Try adjusting your filter options or submit a spontaneous resume to our talent database.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button
                type="button"
                onClick={clearFilters}
                className="careers-btn-secondary"
                style={{ padding: "10px 22px" }}
              >
                Clear All Filters
              </button>
              <button
                type="button"
                onClick={onGeneralApply}
                className="careers-btn-primary"
                style={{ padding: "10px 24px" }}
              >
                Submit General Application
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="careers-jobs-grid">
              {displayedJobs.map((job) => (
                <CareerJobCard
                  key={job.id}
                  job={job}
                  isOpen={expandedJobIds.has(job.id)}
                  onToggle={() => toggleJob(job.id)}
                  onApply={onApplyForJob}
                  accentColor="#6B4A98"
                />
              ))}
            </div>

          {/* Load More Button matching reference screenshot */}
          {hasMore && (
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 5)}
                style={{
                  background: "#62327a",
                  color: "#ffffff",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "9px 24px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(98, 50, 122, 0.25)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#502864";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(98, 50, 122, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#62327a";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(98, 50, 122, 0.25)";
                }}
              >
                Load more...
              </button>
            </div>
          )}
        </>
        )}
      </div>
    </section>
  );
}
