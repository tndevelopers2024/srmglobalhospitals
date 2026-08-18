import Link from "next/link";

export default function AboutRealm() {
  return (
    <section className="about-realm-section" aria-label="About SRM Global Hospitals Overview">
      <div className="about-realm-inner">
        <div className="about-realm-grid">
          <div className="about-realm-image-wrap">
            <img
              src="/images/about-us/realm/image-1.avif"
              alt="SRM Global Hospitals advanced medical interior facility"
              className="about-realm-img"
            />
          </div>
          <div>
            <h2 className="about-realm-title">SRM Global Hospitals</h2>
            <p className="about-realm-p">
              Step into our realm, where more than 200 beds stand as silent sentinels of care and
              compassion. With over 30 specialties under our banner, we offer a comprehensive array
              of healthcare services that cater to your every need.
            </p>
            <p className="about-realm-p">
              From the moment you cross our threshold, a saga of exceptional medical care begins to
              unfold.
            </p>
            <p className="about-realm-p about-realm-p-last">
              SRM Global Hospitals, etched through years of tireless dedication and a passion for
              nurturing lives. We invite you to become a part of this story, where the chapters are
              filled with healing, hope, and the promise of a healthier tomorrow.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <Link href="/#specialties" className="about-realm-btn">
                Explore Specialities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
