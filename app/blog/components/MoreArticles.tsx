export default function MoreArticles() {
  return (
    <section className="more-articles">
      <div className="container">
        <h2>You might also like</h2>{" "}
        <div className="more-grid">
          <a href="/blog/multiple-sclerosis-expert-care" className="more-card">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=85" alt="" />{" "}
            <div className="more-card-body">
              <span className="more-card-cat">Spine Care</span>{" "}
              <h3>Sciatica: Cause, treatment, and when surgery makes sense</h3>{" "}
            </div>{" "}
          </a>{" "}
          <a href="/blog/multiple-sclerosis-expert-care" className="more-card">
            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=85" alt="" />{" "}
            <div className="more-card-body">
              <span className="more-card-cat">Cardiology</span>{" "}
              <h3>Chest pain at 40: When is it your heart, and when is it not?</h3>{" "}
            </div>{" "}
          </a>{" "}
          <a href="/blog/multiple-sclerosis-expert-care" className="more-card">
            <img src="https://images.unsplash.com/photo-1616093875092-19208e6c4d35?w=600&q=85" alt="" />{" "}
            <div className="more-card-body">
              <span className="more-card-cat">Diabetes</span>{" "}
              <h3>Your HbA1c stopped falling. Here is what your doctor checks next.</h3>{" "}
            </div>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
