import { SPECIALTIES, type Specialty } from "@/lib/blog-posts";

export type SortOrder = "recent" | "az";

type Props = {
  counts: Record<string, number>;
  total: number;
  active: Specialty | "All";
  onFilter: (filter: Specialty | "All") => void;
  sort: SortOrder;
  onSort: (sort: SortOrder) => void;
};

export default function FilterBar({ counts, total, active, onFilter, sort, onSort }: Props) {
  // A specialty with nothing published under it would be a dead-end filter.
  const specialties = SPECIALTIES.filter((s) => (counts[s.name] ?? 0) > 0);

  return (
    <div className="filter-bar">
      <div className="container">
        <div className="filter-bar-inner">
          <div className="filter-pills">
            <button
              type="button"
              className={active === "All" ? "filter-pill active" : "filter-pill"}
              onClick={() => onFilter("All")}
              aria-pressed={active === "All"}
            >
              All <span style={{ opacity: 0.55 }}>{total}</span>
            </button>{" "}
            {specialties.map((s) => (
              <button
                key={s.name}
                type="button"
                className={active === s.name ? "filter-pill active" : "filter-pill"}
                onClick={() => onFilter(s.name)}
                aria-pressed={active === s.name}
              >
                <span className="cdot" style={{ background: s.color }} />
                {s.name}
              </button>
            ))}
          </div>{" "}
          <div className="filter-sort">
            <label htmlFor="blog-sort">Sort:</label>{" "}
            <select id="blog-sort" value={sort} onChange={(e) => onSort(e.target.value as SortOrder)}>
              <option value="recent">Most recent</option>
              <option value="az">A to Z</option>
            </select>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
