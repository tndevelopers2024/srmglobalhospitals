"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VideoTestimonials.module.css";

const testimonials = ["iD_6EmmetWk", "WwYhTWqPub8", "HJjVpN0QBB8"];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!activeVideo) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [activeVideo]);

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
                  <button type="button" className={styles.preview} onClick={() => setActiveVideo(videoId)} aria-label={`Play patient testimonial video ${index + 1}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`} alt="" loading="lazy" width="320" height="180" />
                    <span className={styles.play} aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 5v14l11-7z" /></svg>
                    </span>
                  </button>
              </div>

            </article>
          ))}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Patient testimonial video"
        onCancel={(event) => { event.preventDefault(); setActiveVideo(null); }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setActiveVideo(null);
        }}
      >
        <div className={styles.modalHeader}>
          <span>Patient Testimonial</span>
          <button type="button" className={styles.close} aria-label="Close video" onClick={() => setActiveVideo(null)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>
          </button>
        </div>
        <div className={styles.modalVideo}>
          {activeVideo && <iframe
            key={activeVideo}
            src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0`}
            title={`Patient testimonial video ${testimonials.indexOf(activeVideo) + 1}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />}
        </div>
      </dialog>
    </section>
  );
}
