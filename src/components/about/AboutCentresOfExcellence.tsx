import Link from "next/link";
import Image from "next/image";

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
            <Image
              src="/images/about-us/centres-of-excellence/institute-of-renal-sciences.jpeg"
              alt="Institute of Renal Sciences"
              className="about-coe-card-img"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              loading="lazy"
            />
            <div className="about-coe-card-overlay">
              <h3 className="about-coe-card-title">Institute of Renal Sciences</h3>
            </div>
          </Link>

          <Link href="/#specialties" className="about-coe-card">
            <Image
              src="/images/about-us/centres-of-excellence/institute-of-neuro-sciences.avif"
              alt="Institute of Neuro Sciences"
              className="about-coe-card-img"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              loading="lazy"
            />
            <div className="about-coe-card-overlay">
              <h3 className="about-coe-card-title">Institute of Neuro Sciences</h3>
            </div>
          </Link>

          <Link href="/#specialties" className="about-coe-card">
            <Image
              src="/images/about-us/centres-of-excellence/institute-of-solid-organ-transplant.jpeg"
              alt="Institute of Solid Organ Transplant"
              className="about-coe-card-img"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              loading="lazy"
            />
            <div className="about-coe-card-overlay">
              <h3 className="about-coe-card-title">Institute of Solid Organ Transplant</h3>
            </div>
          </Link>

          <Link href="/#specialties" className="about-coe-card">
            <Image
              src="/images/about-us/centres-of-excellence/institute-of-cardiac-sciences.jpeg"
              alt="Institute of Cardiac Sciences"
              className="about-coe-card-img"
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              loading="lazy"
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
