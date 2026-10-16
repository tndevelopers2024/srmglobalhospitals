import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/doctor-profile.module.css";

export default function GowthamDoctorCard() {
  return (
    <div className={`doctor-card ${styles.card}`}>
      <div className={styles.photo}><Image src="/images/departments/Orthopaedics/dr-gowtham-gandhi.png" alt="Dr. Gowtham Gandhi" width={824} height={925} sizes="(max-width: 600px) 100vw, 350px" /></div>
      <div className={styles.cardInfo}>
        <p className={styles.eyebrow}>Orthopaedic Surgeon</p>
        <h3>Dr. Gowtham Gandhi</h3>
        <p>MBBS, MS (Orthopaedics), DNB, FIRJR, MNAMS</p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/book-an-appointment">Book Appointment</Link>
          <Link className={styles.secondary} href="/best-doctors/dr-gowtham-gandhi">View Profile</Link>
        </div>
      </div>
    </div>
  );
}
