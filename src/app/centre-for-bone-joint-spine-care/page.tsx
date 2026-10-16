import "@/styles/coe.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Orthopaedic Hospital in Chengalpattu | SRM Global Hospitals",
  description:
    "Orthopaedic hospital in Chengalpattu. Joint replacement, arthroscopy, spine surgery, 24/7 fracture & trauma care, and rehabilitation at SRM Global Hospitals.",
  path: "/centre-for-bone-joint-spine-care",
});

export default function BoneJointSpinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Clinical Excellence", path: "/clinical-excellence" },
            { name: "Centre for Bone Joint Spine Care", path: "/centre-for-bone-joint-spine-care" },
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
