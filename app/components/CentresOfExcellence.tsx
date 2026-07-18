export default function CentresOfExcellence() {
  return (
    <section id="coe" className="reveal">
      <div className="container">
        <div className="section-head" style={{ marginBottom: '40px' }}>
          <div>
            <span className="eyebrow">Centres of Excellence</span>{" "}
            <h2 className="display-2">Seven centres of excellence. One campus.</h2>{" "}
          </div>{" "}
          <a href="#" className="link-arrow"> View all centres of excellence <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M5 12h14M13 5l7 7-7 7" />
</svg></a>{" "}
        </div>{" "}
        <div className="coe-grid-compact">
          <a href="#" className="coe-compact" data-dept="cardiac">
            <div className="coe-compact-icon cardiac-icon">
              <svg viewBox="0 0 60 50" className="coe-anim cardiac-anim">
                <path className="cardiac-line" d="M0,25 L12,25 L16,10 L20,38 L24,5 L28,35 L32,25 L48,25 L52,18 L56,32 L60,25" fill="none" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Cardiology &amp; Cardiac Surgery</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Cardiac Sciences</h3>{" "}
            <span className="coe-compact-tags">Angioplasty · Bypass · Aortic Centre</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
          <a href="#" className="coe-compact" data-dept="gastro">
            <div className="coe-compact-icon gastro-icon">
              <svg viewBox="0 0 60 50" className="coe-anim gastro-anim">
                <circle className="gastro-bubble" cx="20" cy="25" r="4" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
                <circle className="gastro-bubble b2" cx="35" cy="20" r="3" fill="none" stroke="var(--purple)" strokeWidth="1.5" />
                <circle className="gastro-bubble b3" cx="45" cy="28" r="5" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Gastroenterology &amp; Hepatology</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Gastro &amp; Liver Sciences</h3>{" "}
            <span className="coe-compact-tags">Endoscopy · Liver Disease · Bariatric</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
          <a href="#" className="coe-compact" data-dept="womens">
            <div className="coe-compact-icon womens-icon">
              <svg viewBox="0 0 60 50" className="coe-anim womens-anim">
                <circle className="womens-ring" cx="30" cy="25" r="12" fill="none" stroke="var(--purple)" strokeWidth="1.5" />
                <circle className="womens-core" cx="30" cy="25" r="4" fill="var(--purple)" opacity="0.3" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Obstetrics &amp; Gynaecology</span>{" "}
            <h3 className="coe-compact-name">Centre for Women's Health</h3>{" "}
            <span className="coe-compact-tags">High-Risk Pregnancy · Fetal Medicine · IVF</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
          <a href="#" className="coe-compact" data-dept="ortho">
            <div className="coe-compact-icon ortho-icon">
              <svg viewBox="0 0 60 50" className="coe-anim ortho-anim">
                <line className="ortho-bone" x1="15" y1="10" x2="45" y2="40" stroke="var(--purple)" strokeWidth="2" strokeLinecap="round" />
                <circle className="ortho-joint" cx="30" cy="25" r="6" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Orthopaedics &amp; Spine</span>{" "}
            <h3 className="coe-compact-name">Centre for Bone, Joint &amp; Spine</h3>{" "}
            <span className="coe-compact-tags">Joint Replacement · Spine · Arthroscopy</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
          <a href="#" className="coe-compact" data-dept="emergency">
            <div className="coe-compact-icon emergency-icon">
              <svg viewBox="0 0 60 50" className="coe-anim emerg-anim">
                <path className="emerg-cross-h" d="M18,25 L42,25" stroke="var(--emergency)" strokeWidth="3" strokeLinecap="round" />
                <path className="emerg-cross-v" d="M30,13 L30,37" stroke="var(--emergency)" strokeWidth="3" strokeLinecap="round" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Emergency &amp; Critical Care</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Emergency &amp; Critical Care</h3>{" "}
            <span className="coe-compact-tags">Polytrauma · Stroke Code · STEMI Pathway</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
          <a href="#" className="coe-compact" data-dept="neuro">
            <div className="coe-compact-icon neuro-icon">
              <svg viewBox="0 0 60 50" className="coe-anim neuro-anim">
                <path className="neuro-wave" d="M5,25 Q15,10 25,25 T45,25 T60,25" fill="none" stroke="var(--purple)" strokeWidth="1.5" strokeLinecap="round" />
                <path className="neuro-wave nw2" d="M5,25 Q15,15 25,25 T45,25 T60,25" fill="none" stroke="var(--cyan)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Neurology &amp; Neurosurgery</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Neuro Sciences</h3>{" "}
            <span className="coe-compact-tags">Stroke Care · Spine Surgery · Movement Disorders</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
          <a href="#" className="coe-compact" data-dept="renal">
            <div className="coe-compact-icon renal-icon">
              <svg viewBox="0 0 60 50" className="coe-anim renal-anim">
                <circle className="renal-drop" cx="30" cy="20" r="5" fill="var(--cyan)" opacity="0.3" />
                <path className="renal-flow" d="M30,28 Q20,35 30,42 Q40,35 30,28Z" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Nephrology &amp; Urology</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Renal Sciences</h3>{" "}
            <span className="coe-compact-tags">Dialysis · Kidney Stones · Uro-Oncology</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
          <a href="#" className="coe-compact" data-dept="transplant">
            <div className="coe-compact-icon transplant-icon">
              <svg viewBox="0 0 60 50" className="coe-anim transplant-anim">
                <circle className="tx-ring1" cx="24" cy="25" r="10" fill="none" stroke="var(--purple)" strokeWidth="1.5" />
                <circle className="tx-ring2" cx="36" cy="25" r="10" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
              </svg>{" "}
            </div>{" "}
            <span className="coe-compact-label">Transplantation</span>{" "}
            <h3 className="coe-compact-name">Centre of Excellence in Solid Organ Transplants</h3>{" "}
            <span className="coe-compact-tags">Kidney · Liver · Donor Programme</span>{" "}
            <svg className="coe-compact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
