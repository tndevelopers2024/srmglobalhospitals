export default function ContactMapSection() {
  return (
    <div className="contact-map-card" id="hospital-location">
      <div className="contact-map-frame-wrapper">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=SRM%20Global%20Hospitals&t=m&z=13&output=embed&iwloc=near"
          title="SRM Global Hospitals Location Map"
          aria-label="SRM Global Hospitals Map"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
