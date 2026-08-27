import "@/styles/coe.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Gynaecology Hospital in Chengalpattu | SRM Global Hospitals",
  description:
    "Gynaecology & maternity hospital in Chengalpattu. Safe deliveries, high-risk pregnancy, fertility support, laparoscopic surgery, and NICU at SRM Global Hospitals.",
  path: "/centres-of-excellence/womens-health",
});

export default function WomensHealthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#coe" },
            { name: "Centre for Women's Health & Wellness", path: "/centres-of-excellence/womens-health" },
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
