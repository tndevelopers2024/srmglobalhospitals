export default function AboutStory() {
  return (
    <section className="about-story-section" aria-label="Our Story">
      <div className="about-story-grid">
        <div>
          <div className="about-story-eyebrow">Our Story</div>
          <h2 className="about-story-title">A Legacy of Healing &amp; Hope</h2>
          <p className="about-story-p">
            Welcome to the captivating journey of SRM Global Hospitals – a tale of excellence in
            healthcare that unfolds in the heart of Kattankulathur, Chennai. Our unwavering
            commitment to delivering world-class medical services through state-of-the-art
            facilities that stand as a beacon of global standards.
          </p>
          <p className="about-story-p">
            For over three decades, our devoted team of highly skilled doctors has paved the way for
            exceptional medical care, drawing upon their vast experience to nurture the health and
            well-being of our patients.
          </p>
          <p className="about-story-p">
            At SRM Global Hospitals, time holds its significance, and so we have embraced a
            streamlined, no-queue system that places your precious time at the forefront.
          </p>
        </div>
        <div className="about-story-image-wrap">
          <img
            src="/images/about-us/story/image-1.avif"
            alt="SRM Global Hospitals building campus in Kattankulathur Chennai"
            className="about-story-img"
          />
          <div className="about-story-accent-bar" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
