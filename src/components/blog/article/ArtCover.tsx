interface ArtCoverProps {
  image: string;
  dotClass: string;
  category: string;
  title: string;
  specialistTitle: string;
  department: string;
  date?: string;
  readMinutes: number;
  reads: string;
}

export default function ArtCover({
  image,
  dotClass,
  category,
  title,
  specialistTitle,
  department,
  date,
  readMinutes,
  reads,
}: ArtCoverProps) {
  return (
    <header className="art-cover">
      <img src={image} alt="" />{" "}
      <div className="art-cover-overlay" />{" "}
      <div className="art-cover-content">
        <div className="cover-cat-tag"><span className={`dot ${dotClass}`} />{category}</div>{" "}
        <h1 className="cover-title">{title}</h1>{" "}
        <div className="cover-meta">
          <div className="cover-author">
            <div className="cover-author-av">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
                <path d="M12 9v6M9 12h6" />
              </svg>
            </div>{" "}
            <div>
              <strong>{specialistTitle}</strong>
              <br />{" "}
              <span style={{ opacity: '0.8', fontSize: '11px' }}>{department}</span>{" "}
            </div>{" "}
          </div>{" "}
          <span style={{ opacity: '0.5' }}>•</span>{" "}
          <span>{readMinutes} min read</span>{" "}
          <span style={{ opacity: '0.5' }}>•</span>{" "}
          <span>{reads} reads</span>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}
