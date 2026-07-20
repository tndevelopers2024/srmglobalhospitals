export default function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="container">
        <div className="filter-bar-inner">
          <div className="filter-pills">
            <button className="filter-pill active">All <span style={{ opacity: '0.55' }}>148</span></button>{" "}
            <button className="filter-pill"><span className="cdot" style={{ background: '#ef4444' }} />Cardiology</button>{" "}
            <button className="filter-pill"><span className="cdot" style={{ background: '#8b3dff' }} />Neurology</button>{" "}
            <button className="filter-pill"><span className="cdot" style={{ background: '#f59e0b' }} />Orthopaedics</button>{" "}
            <button className="filter-pill"><span className="cdot" style={{ background: '#14b8a6' }} />Diabetes</button>{" "}
            <button className="filter-pill"><span className="cdot" style={{ background: '#ec4899' }} />Gastro</button>{" "}
            <button className="filter-pill"><span className="cdot" style={{ background: '#f43f5e' }} />Women's Health</button>{" "}
            <button className="filter-pill"><span className="cdot" style={{ background: '#3b82f6' }} />Paediatrics</button>{" "}
            <button className="filter-pill">Mental Health</button>{" "}
            <button className="filter-pill">Pulmonology</button>{" "}
          </div>{" "}
          <div className="filter-sort"> Sort: <select>
  <option>Most recent</option>
  <option>Most read</option>
  <option>A to Z</option>
</select></div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
