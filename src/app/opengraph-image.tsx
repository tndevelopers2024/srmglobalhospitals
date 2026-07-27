import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

/**
 * Default social sharing card, inherited by every page that doesn't define its
 * own. To override for a route, add an `opengraph-image.tsx` in that segment.
 */

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#8b3dff",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "linear-gradient(135deg, #1fb6e0 0%, #8b3dff 100%)",
              color: "#ffffff",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </div>
          Chengalpattu · Chennai
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              color: "#1a1f5c",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "rgba(26, 31, 92, 0.68)",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            Seven centres of excellence, AI-assisted monitoring, and dedicated
            international patient services.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 10,
            borderRadius: 999,
            background: "linear-gradient(90deg, #1fb6e0 0%, #8b3dff 100%)",
          }}
        />
      </div>
    ),
    size,
  );
}
