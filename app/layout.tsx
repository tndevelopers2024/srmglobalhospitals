import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRM Global Hospitals | Premium Multispecialty Care, Chengalpattu",
  description:
    "SRM Global Hospitals, Chengalpattu. A premium super speciality hospital with seven centres of excellence, AI-assisted monitoring, and international patient services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
