import Image from "next/image";

export default function ManagingDirector() {
    return (
        <div className="leadership-container">
            <div className="leadership-card layout-img-right">
                <div className="leadership-content">
                    <div className="leadership-role-eyebrow blue">
                        Managing Director, SRM Global Hospitals Pvt Ltd
                    </div>
                    <h2 className="leadership-name">
                        Mrs. Manimangai Sathyanarayanan
                    </h2>
                    <p className="leadership-bio-p">
                        Oversees the hospital&apos;s day-to-day operations with
                        a focus on value-driven patient care and community
                        well-being. Under her direction, SRM Global Hospitals
                        has expanded its outreach programmes and strengthened
                        partnerships with insurance providers to broaden access.
                    </p>
                    <p className="leadership-bio-p">
                        Her priorities centre on accessibility: ensuring the
                        most effective care is available to those who need it,
                        without barriers. She leads the hospital&apos;s
                        commitment to treating patients as individuals and
                        making sure the care team has the resources to deliver
                        on that standard.
                    </p>
                    <p className="leadership-bio-p">
                        Plays a key role in the hospital&apos;s quality
                        assurance systems and community health initiatives
                        across the Chengalpattu region.
                    </p>
                    <div className="leadership-pills-row">
                        <div className="leadership-pill leadership-pill-purple">
                            <div className="leadership-pill-title purple">
                                Focus Areas
                            </div>
                            <div className="leadership-pill-text">
                                Hospital Operations · Patient Access · Insurance
                                Partnerships · Community Outreach
                            </div>
                        </div>
                        <div className="leadership-pill leadership-pill-blue">
                            <div className="leadership-pill-title blue">
                                Key Roles
                            </div>
                            <div className="leadership-pill-text">
                                Managing Director, SRM Global Hospitals ·
                                Quality Assurance Lead
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leadership-img-wrap leadership-img-wrap-blue">
                    <Image
                        src="/images/leadership-team/md_manimangai.jpg"
                        alt="Mrs. Manimangai Sathyanarayanan"
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
