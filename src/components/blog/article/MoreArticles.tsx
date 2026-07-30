export interface MoreArticleItem {
  href: string;
  image: string;
  category: string;
  title: string;
}

interface MoreArticlesProps {
  items: MoreArticleItem[];
}

export default function MoreArticles({ items }: MoreArticlesProps) {
  return (
    <section className="more-articles">
      <div className="container">
        <h2>You might also like</h2>{" "}
        <div className="more-grid">
          {items.map((item) => (
            <a key={item.href + item.title} href={item.href} className="more-card">
              <img src={item.image} alt="" />{" "}
              <div className="more-card-body">
                <span className="more-card-cat">{item.category}</span>{" "}
                <h3>{item.title}</h3>{" "}
              </div>{" "}
            </a>
          ))}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
