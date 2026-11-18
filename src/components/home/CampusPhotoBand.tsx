import Image from "next/image";

export default function CampusPhotoBand() {
  return (
    <div className="campus-photo-band" style={{ height: '420px', position: 'relative', overflow: 'hidden' }}>
      <Image
        src="/images/home/banner-image-two.avif"
        alt="SRM Global Hospitals entrance and emergency department"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        loading="lazy"
      />{" "}
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(180deg, transparent 40%, rgba(14,18,64,0.5) 100%)' }} />{" "}
      <div className="container" style={{ position: 'absolute', bottom: '36px', left: '0', right: '0', zIndex: '1' }}>
        <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.14em', textTransform: 'uppercase', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>Our Campus · Chengalpattu, Chennai</span>{" "}
      </div>{" "}
    </div>
  );
}
