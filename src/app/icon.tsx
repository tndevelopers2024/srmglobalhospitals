import { ImageResponse } from "next/og";

/**
 * Placeholder app icon: the brand gradient with an "S" monogram.
 *
 * Replace this file with `app/icon.png` (512×512) once the real logo mark is
 * available as a local asset — Next.js picks up the image file and this route
 * goes away. The logo currently lives on the legacy WordPress origin, which is
 * not something a build should depend on fetching.
 */

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1fb6e0 0%, #8b3dff 100%)",
          color: "#ffffff",
          fontSize: 320,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        S
      </div>
    ),
    size,
  );
}
