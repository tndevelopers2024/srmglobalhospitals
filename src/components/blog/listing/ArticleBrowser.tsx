"use client";

import { useMemo, useState, type ReactNode } from "react";

import { type BlogPost, type Specialty } from "@/lib/blog-posts";
import CardSection from "@/components/blog/listing/CardSection";
import FilterBar, { type SortOrder } from "@/components/blog/listing/FilterBar";

const PAGE_SIZE = 12;

type Props = {
  /** Every article, newest first — the grid lists all of them. */
  posts: BlogPost[];
  counts: Record<string, number>;
  /** The feature strip — server-rendered and passed through, so it stays out of the client bundle. */
  children: ReactNode;
};

/**
 * Owns the listing's filter, sort and "load more" state. The filter bar sits
 * above the page container and the card grid inside it, so both live under
 * this one client boundary rather than syncing state across the gap.
 */
export default function ArticleBrowser({ posts, counts, children }: Props) {
  const [filter, setFilter] = useState<Specialty | "All">("All");
  const [sort, setSort] = useState<SortOrder>("recent");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const matching = useMemo(() => {
    const filtered = filter === "All" ? posts : posts.filter((p) => p.specialty === filter);
    if (sort === "az") {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }
    // `posts` already arrives newest-first, so "most recent" needs no re-sort.
    return filtered;
  }, [posts, filter, sort]);

  function onFilter(next: Specialty | "All") {
    setFilter(next);
    setVisibleCount(PAGE_SIZE);
  }

  function onSort(next: SortOrder) {
    setSort(next);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <>
      <FilterBar
        counts={counts}
        total={posts.length}
        active={filter}
        onFilter={onFilter}
        sort={sort}
        onSort={onSort}
      />
      <div className="container blog-content">
        {children}
        <CardSection
          posts={matching}
          visibleCount={visibleCount}
          onLoadMore={() => setVisibleCount((c) => c + PAGE_SIZE)}
        />
      </div>
    </>
  );
}
