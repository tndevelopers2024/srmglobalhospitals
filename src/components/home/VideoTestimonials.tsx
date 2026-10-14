"use client";

import { useState } from "react";
import styles from "./VideoTestimonials.module.css";

const testimonials = ["iD_6EmmetWk", "WwYhTWqPub8", "HJjVpN0QBB8"];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="patient-testimonials" className={styles.section} aria-labelledby="video-testimonials-title">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Patient Testimonials</span>
            <h2 id="video-testimonials-title" className="display-2">Stories of care. Voices of recovery.</h2>
            <p className="body-lg lead">Hear patients share their experiences at SRM Global Hospitals.</p>
          </div>
        </div>
        <div className={styles.grid}>
          {testimonials.map((videoId, index) => (
            <article className={styles.card} key={videoId}>
              <div className={styles.media}>
                {activeVideo === videoId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={`Patient testimonial video ${index + 1}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button type="button" className={styles.preview} onClick={() => setActiveVideo(videoId)} aria-label={`Play patient testimonial video ${index + 1}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" width="480" height="360" />
                    <span className={styles.play} aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 5v14l11-7z" /></svg>
                    </span>
                  </button>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
