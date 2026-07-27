import Link from "next/link";

import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import { siteConfig } from "@/lib/site";
import styles from "@/styles/system.module.css";

/**
 * Shown for `notFound()` calls and for any URL that matches no route.
 * Next.js adds `noindex` automatically for 404 responses.
 */
export default function NotFound() {
  return (
    <>
      <HeaderTop />
      <SiteHeader />

      <main className={styles.shell}>
        <div className={styles.panel}>
          <p className={styles.code}>Error 404</p>
          <h1 className={styles.title}>We couldn&rsquo;t find that page</h1>
          <p className={styles.body}>
            The page may have been moved or the link may be out of date. You can
            head back to the homepage or browse our health insights.
          </p>

          <div className={styles.actions}>
            <Link
              href="/"
              className={`${styles.action} ${styles.actionPrimary}`}
            >
              Back to homepage
            </Link>
            <Link
              href="/blog"
              className={`${styles.action} ${styles.actionSecondary}`}
            >
              Health insights
            </Link>
          </div>

          <p className={styles.emergency}>
            Need help right away? Call our emergency line{" "}
            <a
              href={`tel:${siteConfig.contact.emergencyPhone}`}
              className={styles.emergencyLink}
            >
              {siteConfig.contact.emergencyPhoneDisplay}
            </a>
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
