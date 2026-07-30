"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
}

export interface RelatedReadingItem {
  href: string;
  image: string;
  title: string;
  meta: string;
}

interface ArtSideProps {
  specialistTitle: string;
  department: string;
  blurb: string;
  initialToc: TocItem[];
  relatedReading: RelatedReadingItem[];
}

export default function ArtSide({
  specialistTitle,
  department,
  blurb,
  initialToc,
  relatedReading,
}: ArtSideProps) {
  const [items, setItems] = useState<TocItem[]>(initialToc);
  const [activeId, setActiveId] = useState<string>(initialToc[0]?.id ?? "");

  useEffect(() => {
    const article = document.querySelector(".art-body");
    if (!article) return;

    const sectionElements = article.querySelectorAll<HTMLElement>("[id]");
    if (sectionElements.length > 0) {
      const extracted: TocItem[] = [];
      sectionElements.forEach((el) => {
        const id = el.id;
        if (!id) return;
        const title =
          el.getAttribute("data-toc-title") ||
          el.querySelector("h2, h3")?.textContent ||
          el.textContent ||
          "";
        extracted.push({
          id,
          title: title.trim(),
        });
      });
      if (extracted.length > 0) {
        queueMicrotask(() => setItems(extracted));
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -100; // Sticky header offset
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <aside className="art-side">
      <div className="side-doctor">
        <div className="side-doctor-head">
          <div className="side-doctor-av">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
              <path d="M12 9v6M9 12h6" />
            </svg>
          </div>{" "}
          <div className="side-doctor-info">
            <strong>{specialistTitle}</strong>{" "}
            <span>{department}</span>{" "}
          </div>{" "}
        </div>{" "}
        <p>{blurb}</p>{" "}
        <a href="#" className="btn btn-primary">Book Appointment</a>{" "}
      </div>{" "}
      <div className="side-box">
        <h4>Jump to section</h4>{" "}
        <nav className="side-toc">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? "active" : ""}
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.title}
            </a>
          ))}
        </nav>{" "}
      </div>{" "}
      <div className="side-box">
        <h4>Related reading</h4>{" "}
        <div className="side-related">
          {relatedReading.map((item) => (
            <a key={item.href + item.title} href={item.href}>
              <img src={item.image} alt="" />{" "}
              <div className="side-related-info">
                <h5>{item.title}</h5>{" "}
                <span>{item.meta}</span>{" "}
              </div>{" "}
            </a>
          ))}
        </div>{" "}
      </div>{" "}
    </aside>
  );
}
