import { getRelatedArticles, MoreArticleItem } from "@/lib/blog-posts";

export type { MoreArticleItem };

interface MoreArticlesProps {
  items?: MoreArticleItem[];
  currentSlug?: string;
  category?: string;
}

const GENERIC_TITLES = new Set([
  "Multiple sclerosis: what expert care at the right time can actually do".toLowerCase(),
  "Multiple Sclerosis Treatment: What Expert Care at the Right Time Can Do?".toLowerCase(),
  "Chest pain at 40: When is it your heart, and when is it not?".toLowerCase(),
  "Chest Pain Due to Gas: When is It Harmless? When You Should Worry?".toLowerCase(),
  "Your HbA1c stopped falling. Here is what your doctor checks next.".toLowerCase(),
  "Expert Diabetic Foot Care to Keep You Moving".toLowerCase(),
]);

function isGenericList(items?: MoreArticleItem[]): boolean {
  if (!items || items.length === 0) return true;
  return items.every((item) => GENERIC_TITLES.has(item.title.toLowerCase().trim()));
}

export default function MoreArticles({ items, currentSlug, category }: MoreArticlesProps) {
  const resolvedItems = (!items || items.length === 0 || (currentSlug && isGenericList(items)))
    ? getRelatedArticles(currentSlug || "", category)
    : items;

  return (
    <section className="more-articles">
      <div className="container">
        <h2>You might also like</h2>
        <div className="more-grid">
          {resolvedItems.map((item) => (
            <a key={item.href + item.title} href={item.href} className="more-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="more-card-body">
                <span className="more-card-cat">{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
