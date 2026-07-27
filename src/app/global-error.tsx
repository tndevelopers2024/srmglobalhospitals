"use client";

import { useEffect } from "react";

/**
 * Last-resort boundary: replaces the root layout when the layout itself throws.
 *
 * Everything is inlined — no CSS module, no fonts, no shared components —
 * because whatever broke may well be the thing that loads them. `metadata`
 * exports aren't supported here, so the title is set with React's <title>.
 */
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#1a1f5c",
          background: "#ffffff",
        }}
      >
        <title>Something went wrong — SRM Global Hospitals</title>
        <div style={{ maxWidth: "520px", textAlign: "center" }}>
          <p
            style={{
              margin: "0 0 18px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8b3dff",
            }}
          >
            Something went wrong
          </p>
          <h1
            style={{
              margin: "0 0 16px",
              fontSize: "34px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            We couldn&rsquo;t load the site
          </h1>
          <p
            style={{
              margin: "0 0 32px",
              fontSize: "16px",
              lineHeight: 1.65,
              color: "rgba(26, 31, 92, 0.68)",
            }}
          >
            Please try again. For anything urgent, call our emergency line on{" "}
            <a
              href="tel:+919644496444"
              style={{ color: "#d93535", fontWeight: 600 }}
            >
              +91 96444 96444
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => unstable_retry()}
            style={{
              padding: "13px 26px",
              border: "none",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #1fb6e0 0%, #8b3dff 100%)",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
          {error.digest ? (
            <p
              style={{
                marginTop: "28px",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "12px",
                color: "rgba(26, 31, 92, 0.42)",
                wordBreak: "break-all",
              }}
            >
              Reference: {error.digest}
            </p>
          ) : null}
        </div>
      </body>
    </html>
  );
}
