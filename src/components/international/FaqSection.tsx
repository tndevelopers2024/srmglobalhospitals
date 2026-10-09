"use client";

import { useState } from "react";
import { internationalFaqs } from "@/lib/international-faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="intl-section" id="faqs" aria-label="FAQs for International Patients">
      <div className="intl-container">
        <div className="intl-section-header text-center">
          <span className="intl-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="intl-h2">FAQs for International Patients</h2>
          <p className="intl-lead-p" style={{ margin: '0 auto', maxWidth: '680px' }}>
            Find clear answers to key queries regarding consultation, travel support, insurance, and medical care at SRM Global Hospitals.
          </p>
        </div>

        <div className="intl-faq-wrap">
          {internationalFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className={`intl-faq-item ${isOpen ? "active" : ""}`} key={idx}>
                <button
                  type="button"
                  className="intl-faq-button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <h3 className="intl-faq-q-text">{faq.question}</h3>
                  <span className="intl-faq-toggle-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="intl-faq-answer"
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
