import Link from "next/link";
import Image from "next/image";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { gowthamBiography, gowthamSections } from "@/lib/gowtham-gandhi";
import styles from "@/styles/doctor-profile.module.css";

export const metadata = createMetadata({
  title: "Dr. Gowtham Gandhi | Orthopaedic Surgeon | SRM Global Hospitals",
  description: "Meet Dr. Gowtham Gandhi, Orthopaedic Surgeon with a special interest in robotic joint replacement, complex trauma, arthroscopy and sports injuries.",
  path: "/best-doctor/dr-gowtham-gandhi",
});

export default function GowthamGandhiPage() {
  return (
    <>
      <script type="application/ld+json" {...jsonLdScriptProps(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Orthopaedics", path: "/best-doctor/orthopaedics" },
        { name: "Dr. Gowtham Gandhi", path: "/best-doctor/dr-gowtham-gandhi" },
      ]))} />
      <HeaderTop />
      <SiteHeader activeNav="doctors" />
      <main id="main-content" className={styles.page}>
        <header className={`${styles.hero} page-hero-frame`}>
          <div className={`${styles.wrap} ${styles.heroLayout}`}>
            <div>
            <nav aria-label="Breadcrumb"><Link href="/best-doctor/orthopaedics">Orthopaedics</Link><span> / Dr. Gowtham Gandhi</span></nav>
            <p className={styles.eyebrow}>Orthopaedic Surgeon</p>
            <h1>Dr. Gowtham Gandhi</h1>
            <p>MBBS, MS (Orthopaedics), DNB, FIRJR, MNAMS</p>
            <p>Robotic joint replacement · Complex trauma · Arthroscopy &amp; sports injuries</p>
            <Link className={styles.primary} href="/book-an-appointment">Book Appointment</Link>
            </div>
            <Image className={styles.heroPhoto} src="/images/departments/Orthopaedics/dr-gowtham-gandhi.png" alt="Dr. Gowtham Gandhi" width={824} height={925} sizes="(max-width: 600px) 80vw, 340px" preload />
          </div>
        </header>
        <div className={`${styles.wrap} ${styles.content}`}>
          <section aria-labelledby="biography"><h2 id="biography">Biography</h2>
            {gowthamBiography.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </section>
          {gowthamSections.map(section => (
            <section key={section.title} aria-labelledby={section.title.toLowerCase().replaceAll(" ", "-")}>
              <h2 id={section.title.toLowerCase().replaceAll(" ", "-")}>{section.title}</h2>
              {section.groups.map((group, index) => <div key={group.title || index}>
                {group.title && <h3>{group.title}</h3>}
                <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>)}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
