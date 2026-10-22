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
  title: "Bilirubin Test: Normal Range, High & Low Levels Explained",
  description:
    "A bilirubin test measures total, direct (conjugated), and indirect (unconjugated) bilirubin in the blood to evaluate liver function and jaundice. Learn normal ranges, causes of high levels, and testing at SRM Global Hospitals.",
  path: "/blog/bilirubin-test-normal-range-high-and-low-levels-explained",
  image:
    "/images/blog/bilirubin-test-normal-range-high-and-low-levels-explained/hero.jpg",
  author: "Gastro Specialist",
  section: "Gastro",
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

export default function BilirubinTestArticle() {
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
        dotClass="dot-gastro"
        category="Gastro"
        title={article.title}
        specialistTitle="Gastro Specialist"
        department="Institute of Gastro and Liver Sciences"
        date="October 22, 2026"
        readMinutes={14}
        reads="4,480"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gastro Specialist"
          department="Institute of Gastro and Liver Sciences"
          blurb="Our hepatology and gastroenterology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-bilirubin", title: "What is bilirubin" },
            { id: "what-is-a-bilirubin-test", title: "What is a bilirubin test" },
            { id: "how-is-the-bilirubin-test-performed", title: "How it is performed" },
            { id: "bilirubin-normal-range", title: "Normal range" },
            { id: "what-do-high-bilirubin-levels-mean", title: "High bilirubin levels" },
            { id: "what-do-low-bilirubin-levels-mean", title: "Low bilirubin levels" },
            { id: "interpreting-bilirubin-test-results", title: "Interpreting results" },
            { id: "when-to-seek-medical-advice", title: "When to see a doctor" },
            { id: "get-accurate-bilirubin-testing", title: "Book a bilirubin test" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
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
              meta: "18 min · Gastro",
            },
            {
              href: "/blog/gallstone-pancreatitis-what-to-do-now-how-to-heal-faster-and-how-to-prevent-future-attacks",
              image: "/images/blog/gallstone-pancreatitis-what-to-do-now-how-to-heal-faster-and-how-to-prevent-future-attacks/hero.jpeg",
              title: "Gallstone Pancreatitis: What to Do Now & How to Heal Faster",
              meta: "13 min · Gastro",
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
