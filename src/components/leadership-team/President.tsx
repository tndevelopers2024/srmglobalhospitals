import Image from "next/image";

export default function President() {
    return (
        <div className="leadership-container first-card">
            <div className="leadership-card layout-img-left">
                <div className="leadership-img-wrap leadership-img-wrap-purple">
                    <Image
                        src="/images/leadership-team/president_sathiya.jpg"
                        alt="Dr. P. Sathyanarayanan"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "top",
                        }}
                    />
                </div>
                <div className="leadership-content">
                    <div className="leadership-role-eyebrow purple">
                        President, SRM Group of Companies
                    </div>
                    <h2 className="leadership-name">
                        Dr. P. Sathyanarayanan
                    </h2>
                    <p className="leadership-bio-p">
                        Pro-Chancellor of SRM Institute of Science and
                        Technology (SRMIST), Chengalpattu and SRM
                        University-AP. Served as Vice-Chancellor of SRM
                        University from 2003 to 2010, during which the
                        institution grew significantly in research output and
                        international collaborations.
                    </p>
                    <p className="leadership-bio-p">
                        Established an International Advisory Board with
                        academicians from Harvard, MIT, Kellogg, and Carnegie
                        Mellon. Set up SRM University campuses in Andhra Pradesh
                        (2017) and Sikkim (2013).
                    </p>
                    <p className="leadership-bio-p">
                        Founded and chairs SRM Technologies Pvt. Ltd. (since
                        1998). Also leads SRM Engineering Construction
                        Corporation and New Generation Media Corporation.
                    </p>
                    <div className="leadership-pills-row">
                        <div className="leadership-pill leadership-pill-purple">
                            <div className="leadership-pill-title purple">
                                Education
                            </div>
                            <div className="leadership-pill-text">
                                B.E. (Anna University) · M.S. (Northeastern,
                                USA) · Ph.D. (Southern Cross, Australia)
                            </div>
                        </div>
                        <div className="leadership-pill leadership-pill-blue">
                            <div className="leadership-pill-title blue">
                                Key Roles
                            </div>
                            <div className="leadership-pill-text">
                                Pro-Chancellor, SRMIST · Pro-Chancellor, SRM-AP
                                · Chairman, SRM Technologies
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
