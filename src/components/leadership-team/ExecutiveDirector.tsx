import Image from "next/image";

export default function ExecutiveDirector() {
    return (
        <div className="leadership-container">
            <div className="leadership-card layout-img-left">
                <div className="leadership-img-wrap leadership-img-wrap-purple">
                    <Image
                        src="/images/leadership-team/dr_madhuri.jpg"
                        alt="Dr. Madhuri Sathyanarayanan"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "top",
                        }}
                    />
                </div>
                <div className="leadership-content">
                    <div className="leadership-role-eyebrow purple">
                        Executive Director, SRM Global Hospitals Pvt Ltd
                    </div>
                    <h2 className="leadership-name">
                        Dr. Madhuri Sathyanarayanan
                    </h2>
                    <p className="leadership-bio-p">
                        Leads the hospital&apos;s clinical excellence and
                        patient experience initiatives. Her work centres on
                        building systems that maintain consistently high
                        standards of care across all departments and
                        specialties.
                    </p>
                    <p className="leadership-bio-p">
                        Responsible for specialist recruitment, quality protocol
                        development, and patient feedback systems that directly
                        inform operational improvements at SRM Global Hospitals.
                    </p>
                    <p className="leadership-bio-p">
                        Her approach to healthcare leadership is grounded in
                        three priorities: clinical outcomes that meet global
                        benchmarks, a patient experience that extends beyond
                        treatment, and continuous professional development for
                        the medical team.
                    </p>
                    <div className="leadership-pills-row">
                        <div className="leadership-pill leadership-pill-purple">
                            <div className="leadership-pill-title purple">
                                Focus Areas
                            </div>
                            <div className="leadership-pill-text">
                                Clinical Excellence · Specialist Recruitment ·
                                Quality Protocols · Patient Feedback
                            </div>
                        </div>
                        <div className="leadership-pill leadership-pill-blue">
                            <div className="leadership-pill-title blue">
                                Key Roles
                            </div>
                            <div className="leadership-pill-text">
                                Executive Director, SRM Global Hospitals · Head
                                of Clinical Standards
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
