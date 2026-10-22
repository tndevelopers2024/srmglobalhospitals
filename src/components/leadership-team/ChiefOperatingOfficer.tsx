import Image from "next/image";

export default function ChiefOperatingOfficer() {
    return (
        <div className="leadership-container last-card">
            <div className="leadership-card layout-img-right">
                <div className="leadership-content">
                    <div className="leadership-role-eyebrow blue">
                        Chief Operating Officer, SRM Global Hospitals Pvt Ltd
                    </div>
                    <h2 className="leadership-name">
                        Dr. V.P. Chandrasekaran
                    </h2>
                    <p className="leadership-bio-p">
                        23+ years of experience in Emergency Medicine. Also
                        serves as Associate Dean (Super Specialty) and Advisor
                        in Emergency Medicine at SRM Medical College Hospital
                        &amp; Research Centre.
                    </p>
                    <p className="leadership-bio-p">
                        Previously COO and Medical Director of VIMS Hospital,
                        Salem, where he led the hospital to NABH accreditation
                        and launched its transplant programme. Former National
                        President of the Society for Emergency Medicine India
                        (SEMI).
                    </p>
                    <p className="leadership-bio-p">
                        Published in national and international journals on
                        emergency care and clinical toxicology. Authored a
                        chapter in the Textbook of Emergency Medicine on General
                        Management of Poisoning.
                    </p>
                    <div className="leadership-pills-row">
                        <div className="leadership-pill leadership-pill-purple">
                            <div className="leadership-pill-title purple">
                                Qualifications
                            </div>
                            <div className="leadership-pill-text">
                                MBBS · MD (Emergency Medicine) · Dip. A&amp;E ·
                                MBA (Bharathiar University)
                            </div>
                        </div>
                        <div className="leadership-pill leadership-pill-blue">
                            <div className="leadership-pill-title blue">
                                Recognition
                            </div>
                            <div className="leadership-pill-text">
                                Honoured by Dr. A.P.J. Abdul Kalam · Chevalier
                                Award · Lifetime Achievement, ASEM (2014)
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leadership-img-wrap leadership-img-wrap-blue">
                    <Image
                        src="/images/leadership-team/coo_chandrasekaran.jpg"
                        alt="Dr. V.P. Chandrasekaran"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "top",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
