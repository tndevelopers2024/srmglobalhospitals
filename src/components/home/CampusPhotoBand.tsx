export default function CampusPhotoBand() {
  return (
    <div style={{ height: '420px', position: 'relative', overflow: 'hidden' }}>
      <img src="/images/campus-facilities.jpg" alt="SRM Global Hospitals campus and facilities" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{" "}
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, transparent 40%, rgba(14,18,64,0.5) 100%)' }} />{" "}
      <div className="container" style={{ position: 'absolute', bottom: '36px', left: '0', right: '0', zIndex: '1' }}>
        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>Our Campus · Chengalpattu, Chennai</span>{" "}
      </div>{" "}
    </div>
  );
}
