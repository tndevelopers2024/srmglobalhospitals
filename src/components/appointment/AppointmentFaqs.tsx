import React from "react";

interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    category: "Liver FAQ’s",
    question: "When should I consult a liver specialist at SRM Global Hospitals?",
    answer:
      "You should schedule a consultation if you experience persistent jaundice (yellowing of eyes or skin), unexplained fatigue, abdominal swelling, dark urine, or abnormal liver function test results. Our hepatology unit provides advanced FibroScan and diagnostic imaging.",
  },
  {
    category: "Heart FAQ’s",
    question: "How can I book an urgent cardiac evaluation or screening?",
    answer:
      "For acute chest pain, shortness of breath, or severe heart palpitations, immediately access our 24x7 Emergency line at +91 96444 96444. For elective preventive cardiology or routine review, you can submit the appointment form online or call our appointment desk.",
  },
  {
    category: "Gastro FAQ’s",
    question: "What digestive conditions are treated under Medical Gastroenterology?",
    answer:
      "Our gastroenterology specialists diagnose and treat GERD, acid reflux, chronic abdominal pain, irritable bowel syndrome (IBS), ulcers, gallbladder disorders, and colorectal conditions using modern endoscopic and colonoscopic technologies.",
  },
  {
    category: "Fatty Liver FAQ’s",
    question: "Can Non-Alcoholic Fatty Liver Disease (NAFLD) be reversed?",
    answer:
      "Yes, early-stage fatty liver disease can frequently be reversed or managed through structured lifestyle intervention, metabolic optimization, dietary guidance, and routine monitoring. Our specialized FibroScan package helps assess liver stiffness accurately.",
  },
];

export default function AppointmentFaqs() {
  return (
    <section className="appointment-faq-section" aria-label="Frequently Asked Questions">
      <div className="appointment-container">
        <div className="appointment-section-header">
          <span className="appointment-section-eyebrow">Patient Knowledge Base</span>
          <h2 className="appointment-section-title">FAQ&apos;s</h2>
          <p className="appointment-section-desc">
            Helpful answers to common clinical queries across key health categories.
          </p>
        </div>

        <div className="appointment-faq-grid">
          {FAQS.map((faq) => (
            <div key={faq.category} className="appointment-faq-card">
              <div style={{ marginBottom: "10px" }}>
                <span className="appointment-faq-badge">{faq.category}</span>
              </div>
              <h3 className="appointment-faq-title">{faq.question}</h3>
              <p className="appointment-faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
