import "@/styles/coe.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Neurology Hospital in Chengalpattu | SRM Global Hospitals",
  description:
    "Neurology hospital in Chengalpattu. Expert neurologists & neurosurgeons, 24/7 stroke emergency, brain & spine surgery, and neuro ICU at SRM Global Hospitals.",
  path: "/centres-of-excellence/neuro-sciences",
});

export default function NeuroSciencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#coe" },
            { name: "Institute of Neuro Sciences", path: "/centres-of-excellence/neuro-sciences" },
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
