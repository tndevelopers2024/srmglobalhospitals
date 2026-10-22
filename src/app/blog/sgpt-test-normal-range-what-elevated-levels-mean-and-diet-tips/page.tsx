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
import ArtBody from "./ArtBody";
import ArtSide from "@/components/blog/article/ArtSide";
import EndCta from "@/components/blog/article/EndCta";
import MoreArticles from "@/components/blog/article/MoreArticles";
import MobileActionBar from "@/components/blog/article/MobileActionBar";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

const article = {
  title: "SGPT Test: Normal Range, What Elevated Levels Mean & Diet Tips",
  description:
    "An SGPT (ALT) blood test measures alanine aminotransferase to assess liver health. Learn about the SGPT normal range, causes of elevated SGPT levels, procedure, test price, and diet tips at SRM Global Hospitals.",
  path: "/blog/sgpt-test-normal-range-what-elevated-levels-mean-and-diet-tips",
  image:
    "/images/blog/sgpt-test-normal-range-what-elevated-levels-mean-and-diet-tips/hero.webp",
  author: "Gastroenterology Specialist",
  section: "Gastroenterology",
  publishedTime: "2026-10-22",
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

export default function SgptTestArticle() {
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
            { name: "Health Insights", path: "/blogs" },
            { name: article.title, path: article.path },
          ]),
        ])}
      />
      <HeaderTop />
      <SiteHeader />
      <ReadProgress />
      <ArtCover
        image={article.image}
        dotClass="dot-gastroenterology"
        category="Gastroenterology"
        title={article.title}
        specialistTitle="Gastroenterology Specialist"
        department="Institute of Gastro and Liver Sciences"
        date="October 22, 2026"
        readMinutes={15}
        reads="4,260"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gastroenterology Specialist"
          department="Institute of Gastro and Liver Sciences"
          blurb="Our hepatology, gastroenterology, and diagnostic laboratory specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-sgpt", title: "What is SGPT (ALT)" },
            { id: "what-does-the-sgpt-test-measure", title: "What the test measures" },
            { id: "sgpt-normal-range", title: "SGPT normal range" },
            { id: "what-causes-high-sgpt-levels", title: "Causes of high SGPT" },
            { id: "sgpt-levels-what-different-values-mean", title: "What SGPT values mean" },
            { id: "how-is-the-sgpt-test-performed", title: "Procedure & test price" },
            { id: "diet-tips-to-reduce-elevated-sgpt-levels", title: "Diet tips to lower SGPT" },
            { id: "when-to-see-a-doctor", title: "When to see a doctor" },
            { id: "get-expert-liver-health-assessment", title: "Expert liver assessment" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/bilirubin-test-normal-range-high-and-low-levels-explained",
              image: "/images/blog/bilirubin-test-normal-range-high-and-low-levels-explained/hero.jpg",
              title: "Bilirubin Test: Normal Range, High & Low Levels Explained",
              meta: "14 min · Gastroenterology",
            },
            {
              href: "/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor",
              image: "/images/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor/hero.jpg",
              title: "Jaundice: Causes, Symptoms & When to See a Doctor",
              meta: "24 min · Gastro",
            },
            {
              href: "/blog/gastroenterologist-what-they-treat-and-when-you-need-one",
              image: "/images/blog/gastroenterologist-what-they-treat-and-when-you-need-one/hero.jpg",
              title: "Gastroenterologist: What They Treat & When You Need One",
              meta: "18 min · Gastroenterology",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles currentSlug={article.path} category={article.section} />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
