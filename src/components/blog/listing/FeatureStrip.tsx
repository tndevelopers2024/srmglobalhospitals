import type { BlogPost } from "@/lib/blog-posts";
import { specialtyColor } from "@/lib/blog-posts";

/** Editorial labels the reference puts beside the specialty on the two side cards. */
const SIDE_LABELS = ["Trending", "Most read"];

export default function FeatureStrip({ posts }: { posts: BlogPost[] }) {
  const [main, ...side] = posts;
  if (!main) return null;
  const mainColor = specialtyColor(main.specialty);

  return (
    <section className="feature-strip reveal">
      <a href={main.href} className="feature-main">
        {main.image ? <img src={main.image} alt={main.title} /> : null}{" "}
        <div className="feature-overlay">
          <span className="feature-tag">
            <span className="cdot" style={{ background: mainColor }} />
            {main.specialty}
          </span>{" "}
          <h2>{main.title}</h2>{" "}
          <div className="feature-meta-row" style={{ justifyContent: "space-between" }}>
            <span style={{ fontWeight: 600, color: "#fff" }}>Read More →</span>{" "}
            <span>{main.readMinutes} min read</span>{" "}
          </div>{" "}
        </div>{" "}
      </a>{" "}
      <div className="feature-side">
        {side.map((post, i) => {
          const color = specialtyColor(post.specialty);
          return (
            <a key={post.slug} href={post.href} className="feature-side-card">
              <span className="feature-side-tag" style={{ color }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    background: color,
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                />
                {post.specialty} · {SIDE_LABELS[i]}
              </span>{" "}
              <h3>{post.title}</h3>{" "}
              <div className="feature-side-meta" style={{ justifyContent: "space-between" }}>
                <span style={{ color, fontWeight: 600 }}>Read More →</span>{" "}
                <span>{post.readMinutes} min</span>{" "}
              </div>{" "}
            </a>
          );
        })}
      </div>{" "}
    </section>
  );
}
