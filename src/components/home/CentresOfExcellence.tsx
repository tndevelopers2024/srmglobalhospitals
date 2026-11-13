import Link from "next/link";
import { Ambulance, Bone, Brain, HandHeart, HeartPulse, Venus } from "lucide-react";

export default function CentresOfExcellence() {
  return (
    <section id="coe" className="reveal">
      <div className="container">
        <div className="section-head" style={{ marginBottom: '40px' }}>
          <div>
            <span className="eyebrow">Centres of Excellence</span>{" "}
            <h2 className="display-2">Seven centres of excellence. One campus.</h2>{" "}
          </div>{" "}
          <Link href="/clinical-excellence" className="link-arrow">
            View all centres of excellence{" "}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>{" "}
        </div>{" "}
        <div className="coe-grid-compact">
          <Link href="/institute-of-cardiac-sciences" className="coe-compact" data-dept="cardiac">
            <div className="coe-compact-icon cardiac-icon">
              <HeartPulse size={44} strokeWidth={1.7} aria-hidden="true" />{" "}
            </div>{" "}
            <span className="coe-compact-label">Cardiology &amp; Cardiac Surgery</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Cardiac Sciences</h3>{" "}
            <span className="coe-compact-tags">Angioplasty · Bypass · Aortic Centre</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </Link>{" "}
          <Link href="/institute-of-gastro-and-liver-sciences" className="coe-compact" data-dept="gastro">
            <div className="coe-compact-icon gastro-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 4v12c0 5-3 7-6 10-4 4-4 10 0 14 5 5 15 5 22-2 7-7 7-19 2-24-4-4-9-2-10 3-1 3-4 3-4-1V4" />
                <path d="M14 32c3 4 9 5 13 2" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Gastroenterology &amp; Hepatology</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Gastro &amp; Liver Sciences</h3>{" "}
            <span className="coe-compact-tags">Endoscopy · Liver Disease · Bariatric</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </Link>{" "}
          <Link href="/centre-for-womens-health-and-wellness" className="coe-compact" data-dept="womens">
            <div className="coe-compact-icon womens-icon">
              <Venus size={44} strokeWidth={1.7} aria-hidden="true" />{" "}
            </div>{" "}
            <span className="coe-compact-label">Obstetrics &amp; Gynaecology</span>{" "}
            <h3 className="coe-compact-name">Centre for Women&apos;s Health</h3>{" "}
            <span className="coe-compact-tags">High-Risk Pregnancy · Fetal Medicine · IVF</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </Link>{" "}
          <Link href="/centre-for-bone-joint-spine-care" className="coe-compact" data-dept="ortho">
            <div className="coe-compact-icon ortho-icon">
              <Bone size={44} strokeWidth={1.7} aria-hidden="true" />{" "}
            </div>{" "}
            <span className="coe-compact-label">Orthopaedics &amp; Spine</span>{" "}
            <h3 className="coe-compact-name">Centre for Bone, Joint &amp; Spine</h3>{" "}
            <span className="coe-compact-tags">Joint Replacement · Spine · Arthroscopy</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </Link>{" "}
          <Link href="/institute-of-emergency-and-critical-care-unit" className="coe-compact" data-dept="emergency">
            <div className="coe-compact-icon emergency-icon">
              <Ambulance size={44} strokeWidth={1.7} aria-hidden="true" />{" "}
            </div>{" "}
            <span className="coe-compact-label">Emergency &amp; Critical Care</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Emergency &amp; Critical Care</h3>{" "}
            <span className="coe-compact-tags">Polytrauma · Stroke Code · STEMI Pathway</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </Link>{" "}
          <Link href="/institute-of-neuro-sciences" className="coe-compact" data-dept="neuro">
            <div className="coe-compact-icon neuro-icon">
              <Brain size={44} strokeWidth={1.7} aria-hidden="true" />{" "}
            </div>{" "}
            <span className="coe-compact-label">Neurology &amp; Neurosurgery</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Neuro Sciences</h3>{" "}
            <span className="coe-compact-tags">Stroke Care · Spine Surgery · Movement Disorders</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </Link>{" "}
          <Link href="/institute-of-renal-sciences" className="coe-compact" data-dept="renal">
            <div className="coe-compact-icon renal-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 6C8 6 4 15 4 24s4 15 10 15c5 0 8-4 8-8 0-4-5-5-5-9s5-5 5-9c0-4-2-7-6-7Z" />
                <path d="M32 6c8 0 12 9 12 18s-4 15-10 15c-5 0-8-4-8-8 0-4 5-5 5-9s-5-5-5-9c0-4 2-7 6-7Z" />
                <path d="M17 22c6 0 5 13 5 20m9-20c-6 0-5 13-5 20" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Nephrology &amp; Urology</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Renal Sciences</h3>{" "}
            <span className="coe-compact-tags">Dialysis · Kidney Stones · Uro-Oncology</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </Link>{" "}
          <Link href="/institute-of-solid-organ-transplants" className="coe-compact" data-dept="transplant">
            <div className="coe-compact-icon transplant-icon">
              <HandHeart size={44} strokeWidth={1.7} aria-hidden="true" />{" "}
            </div>{" "}
            <span className="coe-compact-label">Transplantation</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Solid Organ Transplants</h3>{" "}
            <span className="coe-compact-tags">Kidney · Liver · Donor Programme</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
