export default function CtaBand() {
  return (
    <section className="cta-band">
      <div>
        <h2>Get one useful article a week, written by an SRM doctor.</h2>{" "}
        <p>Plain-language pieces on conditions, treatments, and when to act. Unsubscribe anytime.</p>{" "}
      </div>{" "}
      <form className="cta-band-form">
        <input type="email" placeholder="your.email@domain.com" required />{" "}
        <button type="submit" className="btn btn-primary">Subscribe</button>{" "}
      </form>{" "}
    </section>
  );
}
