import type { BlogPost } from "@/lib/blog-posts";
import { specialtyColor } from "@/lib/blog-posts";

type Props = {
  /** Every post matching the current filter, already sorted. */
  posts: BlogPost[];
  /** How many of them are on screen; the rest stay in the DOM but hidden. */
  visibleCount: number;
  onLoadMore: () => void;
};

const clockIcon = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export default function CardSection({ posts, visibleCount, onLoadMore }: Props) {
  const shown = Math.min(visibleCount, posts.length);

  return (
    <section className="card-section">
      <div className="section-head-row">
        <h2>Latest articles</h2>{" "}
        <div className="results-count">
          Showing <strong>{shown}</strong> of <strong>{posts.length}</strong> articles
        </div>{" "}
      </div>{" "}
      <div className="card-grid">
        {posts.map((post, i) => {
          const color = specialtyColor(post.specialty);
          return (
            <a
              key={post.slug}
              href={post.href}
              className="disc-card"
              data-category={post.specialty}
              style={i < visibleCount ? undefined : { display: "none" }}
            >
              <div className={post.image ? "disc-card-img" : "disc-card-img no-image"}>
                {post.image ? <img src={post.image} alt={post.title} loading="lazy" /> : null}{" "}
                <span className="disc-card-cat">
                  <span className="cdot" style={{ background: color }} />
                  {post.specialty}
                </span>{" "}
              </div>{" "}
              <div className="disc-card-body">
                <h3>{post.title}</h3>{" "}
                <div className="disc-card-foot">
                  <span className="disc-card-readmore" style={{ color, fontWeight: 600 }}>
                    Read More →
                  </span>{" "}
                  <span className="disc-card-time">
                    {clockIcon} {post.readMinutes} min{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </a>
          );
        })}
      </div>{" "}
      <div className="load-more-wrap" style={shown < posts.length ? undefined : { display: "none" }}>
        <button type="button" className="btn btn-outline" onClick={onLoadMore}>
          Load more articles{" "}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>{" "}
        </button>{" "}
      </div>{" "}
    </section>
  );
}
