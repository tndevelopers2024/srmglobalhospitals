export default function ContactMapSection() {
  return (
    <div className="contact-map-card" id="hospital-location">
      <div className="contact-map-frame-wrapper">
        <iframe
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.823970188229!2d80.04541807491434!3d12.822996387478918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f769375a3f4f%3A0x4cb1f924f10a9298!2sSRM%20Global%20Hospitals!5e1!3m2!1sen!2sin!4v1791520835763!5m2!1sen!2sin" 
          title="SRM Global Hospitals Location Map"
          aria-label="SRM Global Hospitals Map"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
