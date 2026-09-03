import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best ENT Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best ENT hospital in Chengalpattu, our ENT specialists provide expert ear nose throat doctor consultations, sinus treatment, and hearing loss treatment, along with advanced ENT surgery including tonsillectomy, septoplasty, adenoid removal, and cochlear implants.",
  path: "/specialties/ent",
});

export default function EntPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of ENT", path: "/specialties/ent" },
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
