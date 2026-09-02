import "@/styles/coe.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Organ Transplant Hospital in Chengalpattu | Kidney, Liver & Multi-Organ Transplant Care | SRM Global Hospitals",
  description: "Organ transplant hospital in Chengalpattu. Kidney, liver, heart, lung and bone marrow transplant care with 24/7 transplant support at SRM Global Hospitals. Call +91 96444 96444.",
  path: "/centres-of-excellence/solid-organ-transplants",
});

export default function SolidOrganTransplantsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#coe" },
            { name: "Centre for Solid Organ Transplants", path: "/centres-of-excellence/solid-organ-transplants" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="coe" />
      <main id="main-content">
        <ArtBody />
      </main>
      <SiteFooter />
    </>
  );
}
