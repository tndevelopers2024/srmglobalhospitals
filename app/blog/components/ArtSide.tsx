export default function ArtSide() {
  return (
    <aside className="art-side">
      <div className="side-doctor">
        <div className="side-doctor-head">
          <div className="side-doctor-av">RM</div>{" "}
          <div className="side-doctor-info">
            <strong>Dr. R. Muralidharan</strong>{" "}
            <span>Senior Consultant, Neurology</span>{" "}
          </div>{" "}
        </div>{" "}
        <p>Available Mon, Wed, Fri at SRM Global Hospitals. In-person and tele-consult.</p>{" "}
        <a href="#" className="btn btn-primary">Book Appointment</a>{" "}
      </div>{" "}
      <div className="side-box">
        <h4>Jump to section</h4>{" "}
        <nav className="side-toc">
          <a href="#" className="active">What you will learn</a>{" "}
          <a href="#">First six months matter</a>{" "}
          <a href="#">What DMT looks like</a>{" "}
          <a href="#">Five questions to ask</a>{" "}
          <a href="#">What recovery looks like</a>{" "}
          <a href="#">Life beyond prescription</a>{" "}
        </nav>{" "}
      </div>{" "}
      <div className="side-box">
        <h4>Related reading</h4>{" "}
        <div className="side-related">
          <a href="/blog/multiple-sclerosis-expert-care">
            <img src="https://images.unsplash.com/photo-1606206522398-de2884d8c8e1?w=120&q=85" alt="" />{" "}
            <div className="side-related-info">
              <h5>Migraine vs tension headache: how a neurologist tells them apart</h5>{" "}
              <span>6 min · Neurology</span>{" "}
            </div>{" "}
          </a>{" "}
          <a href="/blog/multiple-sclerosis-expert-care">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&q=85" alt="" />{" "}
            <div className="side-related-info">
              <h5>Sciatica: when surgery is genuinely the right answer</h5>{" "}
              <span>7 min · Spine Care</span>{" "}
            </div>{" "}
          </a>{" "}
          <a href="/blog/multiple-sclerosis-expert-care">
            <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=120&q=85" alt="" />{" "}
            <div className="side-related-info">
              <h5>Stroke recovery: what the first 90 days determine</h5>{" "}
              <span>9 min · Neurology</span>{" "}
            </div>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </aside>
  );
}
