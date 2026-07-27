"use client";

import { useEffect } from "react";

import { siteConfig } from "@/lib/site";
import styles from "@/styles/system.module.css";

/**
 * Catches render errors below the root layout.
 *
 * Deliberately does not pull in the site header/footer: those are Server
 * Components today, and importing them here would move them into the client
 * bundle for every visitor just to cover a page that should almost never
 * render. The emergency number is what actually matters on this screen.
 */
export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Server errors arrive here with only a digest; the full stack is in the
    // server logs via instrumentation.ts. Wire a client-side error reporter in
    // here when one is chosen.
    console.error(error);
  }, [error]);

  return (
    <main className={`${styles.shell} ${styles.shellFull}`}>
      <div className={styles.panel}>
        <p className={styles.code}>Something went wrong</p>
        <h1 className={styles.title}>This page didn&rsquo;t load</h1>
        <p className={styles.body}>
          We hit an unexpected problem. Trying again usually resolves it — if it
          doesn&rsquo;t, please call us and we&rsquo;ll help you directly.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={() => unstable_retry()}
            className={`${styles.action} ${styles.actionPrimary}`}
          >
            Try again
          </button>
          {/*
            A plain anchor on purpose: <Link> does a client-side transition,
            which would reuse the router state that just failed. A full document
            load is the reliable way out of a broken client.
          */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className={`${styles.action} ${styles.actionSecondary}`}>
            Back to homepage
          </a>
        </div>

        <p className={styles.emergency}>
          Emergency?{" "}
          <a
            href={`tel:${siteConfig.contact.emergencyPhone}`}
            className={styles.emergencyLink}
          >
            {siteConfig.contact.emergencyPhoneDisplay}
          </a>
        </p>

        {error.digest ? (
          <p className={styles.digest}>Reference: {error.digest}</p>
        ) : null}
      </div>
    </main>
  );
}
