import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Joint Replacement Hospital in Chengalpattu | SRM Global Hospitals",
  description: "Recognized as the best joint replacement hospital in Chengalpattu, our joint replacement surgeons provide advanced joint replacement surgery, from total knee replacement and partial knee replacement to hip replacement surgery, robotic joint replacement, and revision joint replacement, so every patient can move again with confidence.",
  path: "/specialties/joint-replacement",
});

export default function JointReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            { name: "Department of Joint Replacement", path: "/specialties/joint-replacement" },
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
