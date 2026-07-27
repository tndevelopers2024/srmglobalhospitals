export default function ArtCover() {
  return (
    <header className="art-cover">
      <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85" alt="" />{" "}
      <div className="art-cover-overlay" />{" "}
      <div className="art-cover-content">
        <div className="cover-cat-tag"><span className="dot" />Neurology</div>{" "}
        <h1 className="cover-title">Multiple sclerosis: What expert care at the right time can actually do.</h1>{" "}
        <div className="cover-meta">
          <div className="cover-author">
            <div className="cover-author-av">RM</div>{" "}
            <div>
              <strong>Dr. R. Muralidharan</strong>
              <br />{" "}
              <span style={{ opacity: '0.8', fontSize: '11px' }}>Senior Consultant, Neurology</span>{" "}
            </div>{" "}
          </div>{" "}
          <span style={{ opacity: '0.5' }}>•</span>{" "}
          <span>June 12, 2026</span>{" "}
          <span style={{ opacity: '0.5' }}>•</span>{" "}
          <span>12 min read</span>{" "}
          <span style={{ opacity: '0.5' }}>•</span>{" "}
          <span>14,230 reads</span>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}
