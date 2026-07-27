import { ImageResponse } from "next/og";

/** Home-screen icon for iOS. Replace with `app/apple-icon.png` (180×180). */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1fb6e0 0%, #8b3dff 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 58, fontWeight: 700, letterSpacing: "-0.02em" }}>
          SRM
        </div>
        <div style={{ fontSize: 20, fontWeight: 500, opacity: 0.9 }}>
          GLOBAL
        </div>
      </div>
    ),
    size,
  );
}
