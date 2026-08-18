import Link from "next/link";

export default function AboutCentresOfExcellence() {
  return (
    <section className="about-coe-section" aria-label="Centres of Excellence">
      <div className="about-coe-container">
        <div className="about-coe-header">
          <h2 className="about-coe-title">Centres of Excellence</h2>
          <p className="about-coe-subtitle">
            Specialized centres delivering world-class care across multiple disciplines.
          </p>
        </div>
        <div className="about-coe-grid">
          <Link href="/#specialties" className="about-coe-card">
            <img
              src="/images/about-us/centres-of-excellence/image-1.avif"
              alt="Institute of Renal Sciences"
              className="about-coe-card-img"
            />
            <div className="about-coe-card-overlay">
              <h3 className="about-coe-card-title">Institute of Renal Sciences</h3>
            </div>
          </Link>

          <Link href="/#specialties" className="about-coe-card">
            <img
              src="/images/about-us/centres-of-excellence/image-2.avif"
              alt="Institute of Neuro Sciences"
              className="about-coe-card-img"
            />
            <div className="about-coe-card-overlay">
              <h3 className="about-coe-card-title">Institute of Neuro Sciences</h3>
            </div>
          </Link>

          <Link href="/#specialties" className="about-coe-card">
            <img
              src="/images/about-us/centres-of-excellence/image-3.avif"
              alt="Institute of Solid Organ Transplant"
              className="about-coe-card-img"
            />
            <div className="about-coe-card-overlay">
              <h3 className="about-coe-card-title">Institute of Solid Organ Transplant</h3>
            </div>
          </Link>

          <Link href="/#specialties" className="about-coe-card">
            <img
              src="/images/about-us/centres-of-excellence/image-4.avif"
              alt="Institute of Cardiac Sciences"
              className="about-coe-card-img"
            />
            <div className="about-coe-card-overlay">
              <h3 className="about-coe-card-title">Institute of Cardiac Sciences</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
