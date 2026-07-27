import "@/styles/blog.css";

import { createMetadata } from "@/lib/seo";
import {
  articleSchema,
  breadcrumbSchema,
  jsonLdScriptProps,
} from "@/lib/structured-data";

import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import ReadProgress from "@/components/blog/article/ReadProgress";
import ArtCover from "@/components/blog/article/ArtCover";
import ShareRail from "@/components/blog/article/ShareRail";
import ArtBody from "@/components/blog/article/ArtBody";
import ArtSide from "@/components/blog/article/ArtSide";
import EndCta from "@/components/blog/article/EndCta";
import MoreArticles from "@/components/blog/article/MoreArticles";
import MobileActionBar from "@/components/blog/article/MobileActionBar";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

const article = {
  title:
    "Multiple sclerosis: What expert care at the right time can actually do",
  description:
    "How early diagnosis, disease-modifying therapy, and the right specialist team change the course of multiple sclerosis — written by SRM Global Hospitals doctors.",
  path: "/blog/multiple-sclerosis-expert-care",
  image:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85",
  author: "Dr. R. Muralidharan",
  section: "Neurology",
  publishedTime: "2026-06-12",
};

export const metadata = createMetadata({
  title: article.title,
  description: article.description,
  path: article.path,
  image: article.image,
  type: "article",
  authors: [article.author],
  section: article.section,
  publishedTime: article.publishedTime,
});

export default function MultipleSclerosisArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        {...jsonLdScriptProps([
          articleSchema({
            headline: article.title,
            description: article.description,
            path: article.path,
            image: article.image,
            datePublished: article.publishedTime,
            author: article.author,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Health Insights", path: "/blog" },
            { name: article.title, path: article.path },
          ]),
        ])}
      />
      <HeaderTop />
      <SiteHeader />
      <ReadProgress />
      <ArtCover />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide />
      </div>
      <EndCta />
      <MoreArticles />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
