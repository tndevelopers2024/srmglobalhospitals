import "@/styles/blog.css";

import { createMetadata } from "@/lib/seo";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import FilterBar from "@/components/blog/listing/FilterBar";
import FeatureStrip from "@/components/blog/listing/FeatureStrip";
import CardSection from "@/components/blog/listing/CardSection";
import CtaBand from "@/components/blog/listing/CtaBand";
import SpecialtyExplorer from "@/components/blog/listing/SpecialtyExplorer";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

export const metadata = createMetadata({
  title: "Health Insights",
  description:
    "Articles written by SRM Global Hospitals doctors — practical, evidence-based guidance across every specialty.",
  path: "/blog",
});

export default function BlogListing() {
  return (
    <>
      <HeaderTop />
      <SiteHeader />
      <FilterBar />
      <div className="container blog-content">
        <FeatureStrip />
        <CardSection />
        <CtaBand />
      </div>
      <SpecialtyExplorer />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
