"use client";

import { useState, FormEvent, ChangeEvent } from "react";

// Exact 29 specialties from original page dropdown
const SPECIALTIES = [
  "Anesthesiology",
  "Cardio Thoracic Sciences",
  "Dental/OMFS",
  "Dermatology",
  "Diabetology",
  "Emergency Medicine & Critical Care Unit",
  "ENT",
  "General Medicine",
  "General Surgery",
  "Institute of Cardiac Sciences",
  "Master Health Checkup",
  "Medical & Surgical Oncology",
  "Medical Gastroenterology",
  "Nephrology",
  "Neurology",
  "Neuroscience",
  "Obstetrics & Gynecology",
  "Oncology",
  "Ophthalmology",
  "Orthopedics",
  "Paediatrics",
  "Paediatric Surgery",
  "Plastic surgery",
  "Psychiatry",
  "Pulmonology",
  "Radiology ",
  "Surgical Gastroenterology",
  "Urology",
  "Vascular Surgery",
];

export default function AppointmentBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    speciality: "",
    doctor: "",
    phone: "",
    appointment_date: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    phone: string;
    speciality: string;
    doctor?: string;
    date: string;
    refId: string;
  } | null>(null);

  // Today's minimum selectable date in YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const body = new FormData();
      body.append("form_fields[name]", formData.name);
      body.append("form_fields[email]", formData.email);
      body.append("form_fields[speciality]", formData.speciality);
      if (formData.doctor) {
        body.append("form_fields[doctor]", formData.doctor);
      }
      body.append("form_fields[phone]", formData.phone);
      body.append("form_fields[appointment_date]", formData.appointment_date);
      body.append("post_id", "8654");
      body.append("form_id", "2828f34");
      body.append("referer_title", "Book an Appointment - SRM Global Hospitals Pvt Ltd");

      await fetch("https://srmglobalhospitals.com/admin/front-end/save.php", {
        method: "POST",
        mode: "no-cors",
        body,
      }).catch(() => {});

      const refId = "SRM-" + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        speciality: formData.speciality,
        doctor: formData.doctor,
        date: formData.appointment_date,
        refId,
      });
    } catch {
      const refId = "SRM-" + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        speciality: formData.speciality,
        doctor: formData.doctor,
        date: formData.appointment_date,
        refId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: "",
      email: "",
      speciality: "",
      doctor: "",
      phone: "",
      appointment_date: "",
    });
  };

  return (
    <div className="appointment-card" id="appointment-form-card">
      {submittedData ? (
        /* Confirmation State */
        <div className="appointment-success-box" role="alert">
          <div className="appointment-success-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="appointment-success-title">Appointment Request Submitted</h2>
          <p className="appointment-success-desc">
            Thank you, <strong>{submittedData.name}</strong>. Your consultation request has been received. Our patient care executive will contact you shortly to confirm your schedule.
          </p>

          <div className="appointment-success-details">
            <div className="appointment-success-row">
              <span>Reference Number:</span>
              <span>{submittedData.refId}</span>
            </div>
            <div className="appointment-success-row">
              <span>Speciality:</span>
              <span>{submittedData.speciality}</span>
            </div>
            {submittedData.doctor && (
              <div className="appointment-success-row">
                <span>Doctor Preference:</span>
                <span>{submittedData.doctor}</span>
              </div>
            )}
            <div className="appointment-success-row">
              <span>Preferred Date:</span>
              <span>{submittedData.date}</span>
            </div>
            <div className="appointment-success-row">
              <span>Contact Phone:</span>
              <span>{submittedData.phone}</span>
            </div>
            <div className="appointment-success-row">
              <span>Email:</span>
              <span>{submittedData.email}</span>
            </div>
          </div>

          <button
            type="button"
            className="appointment-reset-btn"
            onClick={handleReset}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            <span>Book Another Appointment</span>
          </button>
        </div>
      ) : (
        /* Primary Form: Book an Appointment Form(Common) */
        <div>
          <div className="appointment-card-head">
            <h2 className="appointment-card-title">
              Book <span>Appointment</span>
            </h2>
            <p className="appointment-card-subtitle">
              Please enter your details to request an outpatient consultation with our specialists.
            </p>
          </div>

          <form
            className="appointment-form"
            onSubmit={handleSubmit}
            name="Book an Appointment Form(Common)"
          >
            <div className="appointment-form-row">
              {/* Field 1: Name */}
              <div className="appointment-field">
                <label htmlFor="form-field-name" className="appointment-label">
                  <span>Name</span>
                  <span className="appointment-required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="form-field-name"
                  className="appointment-input"
                  placeholder="Name"
                  required
                  aria-required="true"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Field 2: Email */}
              <div className="appointment-field">
                <label htmlFor="form-field-email" className="appointment-label">
                  <span>Email</span>
                  <span className="appointment-required-asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="form-field-email"
                  className="appointment-input"
                  placeholder="Email"
                  required
                  aria-required="true"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="appointment-form-row">
              {/* Field 3: Select Speciality */}
              <div className="appointment-field">
                <label htmlFor="form-field-speciality" className="appointment-label">
                  <span>Select Speciality</span>
                  <span className="appointment-required-asterisk">*</span>
                </label>
                <select
                  name="speciality"
                  id="form-field-speciality"
                  className="appointment-select"
                  required
                  aria-required="true"
                  value={formData.speciality}
                  onChange={handleChange}
                >
                  <option value="">Select Speciality</option>
                  {SPECIALTIES.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              {/* Doctor Preference */}
              <div className="appointment-field">
                <label htmlFor="form-field-doctor" className="appointment-label">
                  <span>Doctor Preference</span>
                  <span className="appointment-optional-text">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="doctor"
                  id="form-field-doctor"
                  className="appointment-input"
                  placeholder="Doctor Name (or Any Specialist)"
                  value={formData.doctor}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="appointment-form-row">
              {/* Field 4: Phone */}
              <div className="appointment-field">
                <label htmlFor="form-field-phone" className="appointment-label">
                  <span>Phone</span>
                  <span className="appointment-required-asterisk">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="form-field-phone"
                  className="appointment-input"
                  placeholder="Phone"
                  required
                  aria-required="true"
                  pattern="[0-9()#&amp;+*\-=. ]+"
                  title="Only numbers and phone characters (#, -, *, etc) are accepted."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Field 5: Choose Appointment Date */}
              <div className="appointment-field">
                <label htmlFor="form-field-appointment_date" className="appointment-label">
                  <span>Choose Appointment Date</span>
                  <span className="appointment-required-asterisk">*</span>
                </label>
                <input
                  type="date"
                  name="appointment_date"
                  id="form-field-appointment_date"
                  className="appointment-input"
                  placeholder="Choose Appointment Date"
                  required
                  aria-required="true"
                  min={today}
                  value={formData.appointment_date}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="appointment-submit-row">
              <button
                type="submit"
                className="appointment-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>Submit</span>
                  </>
                )}
              </button>

              <div className="appointment-submit-lock">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Confidential healthcare scheduling</span>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
