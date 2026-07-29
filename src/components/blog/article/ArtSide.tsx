"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
}

export default function ArtSide() {
  const [items, setItems] = useState<TocItem[]>([
    { id: "what-you-will-learn", title: "What you will learn" },
    { id: "first-six-months-matter", title: "First six months matter" },
    { id: "what-dmt-looks-like", title: "What DMT looks like" },
    { id: "five-questions-to-ask", title: "Five questions to ask" },
    { id: "what-recovery-looks-like", title: "What recovery looks like" },
    { id: "life-beyond-prescription", title: "Life beyond prescription" },
  ]);
  const [activeId, setActiveId] = useState<string>("what-you-will-learn");

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
          <div className="side-doctor-av">RM</div>{" "}
          <div className="side-doctor-info">
            <strong>Dr. R. Muralidharan</strong>{" "}
            <span>Senior Consultant, Neurology</span>{" "}
          </div>{" "}
        </div>{" "}
        <p>Available Mon, Wed, Fri at SRM Global Hospitals. In-person and tele-consult.</p>{" "}
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
          <a href="/blog/multiple-sclerosis-expert-care">
            <img src="https://images.unsplash.com/photo-1606206522398-de2884d8c8e1?w=120&q=85" alt="" />{" "}
            <div className="side-related-info">
              <h5>Migraine vs tension headache: how a neurologist tells them apart</h5>{" "}
              <span>6 min · Neurology</span>{" "}
            </div>{" "}
          </a>{" "}
          <a href="/blog/multiple-sclerosis-expert-care">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&q=85" alt="" />{" "}
            <div className="side-related-info">
              <h5>Sciatica: when surgery is genuinely the right answer</h5>{" "}
              <span>7 min · Spine Care</span>{" "}
            </div>{" "}
          </a>{" "}
          <a href="/blog/multiple-sclerosis-expert-care">
            <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=120&q=85" alt="" />{" "}
            <div className="side-related-info">
              <h5>Stroke recovery: what the first 90 days determine</h5>{" "}
              <span>9 min · Neurology</span>{" "}
            </div>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </aside>
  );
}

