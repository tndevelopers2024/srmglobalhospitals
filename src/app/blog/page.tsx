import "@/styles/blog.css";

import { createMetadata } from "@/lib/seo";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import { blogPosts, featuredPosts, specialtyCounts } from "@/lib/blog-posts";
import ArticleBrowser from "@/components/blog/listing/ArticleBrowser";
import FeatureStrip from "@/components/blog/listing/FeatureStrip";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

export const metadata = createMetadata({
  title: "Health Library",
  description: `Browse ${blogPosts.length} health articles by specialty, written by doctors at SRM Global Hospitals.`,
  path: "/blog",
});

export default function BlogListing() {
  return (
    <>
      <HeaderTop />
      <SiteHeader />
      <ArticleBrowser posts={blogPosts} counts={specialtyCounts}>
        <FeatureStrip posts={featuredPosts} />
      </ArticleBrowser>
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
