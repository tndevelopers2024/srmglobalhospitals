"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { internationalFaqs } from "@/lib/international-faqs";

export default function FaqSection() {
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

        <Accordion type="single" collapsible defaultValue="faq-0" className="intl-faq-wrap">
          {internationalFaqs.map((faq, idx) => (
            <AccordionItem className="intl-faq-item" value={`faq-${idx}`} key={faq.question}>
              <AccordionTrigger className="intl-faq-button">
                <span className="intl-faq-q-text">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="intl-faq-answer">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
