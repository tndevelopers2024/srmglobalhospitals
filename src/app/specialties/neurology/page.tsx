import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Neurology Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best neurology hospital in Chengalpattu, our neurologists and brain specialists provide expert neurological disorder treatment, from stroke treatment and epilepsy treatment to migraine treatment, Parkinson's disease treatment, and neuropathy treatment, backed by a dedicated nerve specialist team.",
  path: "/specialties/neurology",
});

export default function NeurologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Neurology", path: "/specialties/neurology" },
          ]),
        )}
      />
      <HeaderTop />
      <SiteHeader activeNav="specialties" />
      <main className="specialty-page" id="main-content">
        <ArtBody />
      </main>
      <SiteFooter />
    </>
  );
}
