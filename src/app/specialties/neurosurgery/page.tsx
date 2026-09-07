import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Neurosurgery Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best neurosurgery hospital in Chengalpattu, our neurosurgeons provide comprehensive brain surgery and spine surgery, from brain tumour surgery and craniotomy to endoscopic brain surgery, deep brain stimulation, spinal cord surgery, and minimally invasive neurosurgery.",
  path: "/specialties/neurosurgery",
});

export default function NeurosurgeryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Neurosurgery", path: "/specialties/neurosurgery" },
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
