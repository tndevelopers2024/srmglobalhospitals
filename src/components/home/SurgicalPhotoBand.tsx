export default function SurgicalPhotoBand() {
  return (
    <div style={{ height: '360px', position: 'relative', overflow: 'hidden' }}>
      <img src="/images/medical-professionals.jpg" alt="Medical professionals at SRM Global Hospitals" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />{" "}
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, transparent 30%, rgba(14,18,64,0.45) 100%)' }} />{" "}
      <div className="container" style={{ position: 'absolute', bottom: '36px', left: '0', right: '0', zIndex: '1' }}>
        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>Our Specialists</span>{" "}
      </div>{" "}
    </div>
  );
}
