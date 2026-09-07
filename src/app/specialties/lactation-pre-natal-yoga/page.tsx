import "@/styles/specialty.css";

import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ArtBody from "./ArtBody";

export const metadata = createMetadata({
  title: "Best Prenatal Care Hospital in Chengalpattu | SRM Global Hospitals",
  description:
    "Recognized as the best prenatal care hospital in Chengalpattu, our lactation consultant and prenatal yoga classes offer breastfeeding support, antenatal care, and postnatal care, from breastfeeding counselling and newborn feeding support to pregnancy yoga, lamaze classes, and birth preparation classes.",
  path: "/specialties/lactation-pre-natal-yoga",
});

export default function LactationPreNatalYogaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Specialties", path: "/#specialties" },
            {
              name: "Department of Lactation and Pre-Natal Yoga",
              path: "/specialties/lactation-pre-natal-yoga",
            },
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
