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
  title:
    "Gallstone Pancreatitis: What to Do Now, How to Heal Faster, and How to Prevent Future Attacks",
  description:
    "Gallstone pancreatitis is the leading cause of acute pancreatitis. Gastroenterologists at SRM Global Hospitals explain warning signs, diagnosis, treatment phases, and how to prevent recurrence.",
  path: "/blog/gallstone-pancreatitis-what-to-do-now-how-to-heal-faster-and-how-to-prevent-future-attacks",
  image:
    "/images/blog/gallstone-pancreatitis-what-to-do-now-how-to-heal-faster-and-how-to-prevent-future-attacks/hero.jpeg",
  author: "Gastro Specialist",
  section: "Gastro",
  publishedTime: "2026-11-25",
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

export default function GallstonePancreatitisArticle() {
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
      <ArtCover
        image={article.image}
        dotClass="dot-gastro"
        category="Gastro"
        title={article.title}
        specialistTitle="Gastro Specialist"
        department="Institute of Gastro and Liver Sciences"
        date="November 25, 2026"
        readMinutes={13}
        reads="3,720"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gastro Specialist"
          department="Institute of Gastro and Liver Sciences"
          blurb="Our gastroenterology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            {
              id: "what-is-gallstone-pancreatitis",
              title: "What is gallstone pancreatitis",
            },
            { id: "warning-signs", title: "Warning signs" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "treatment-phases", title: "Treatment phases" },
            { id: "long-term-outlook", title: "Long-term outlook" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/transform-your-health-overcoming-non-alcoholic-fatty-liver-disease",
              image:
                "/images/blog/transform-your-health-overcoming-non-alcoholic-fatty-liver-disease/hero.jpeg",
              title:
                "Transform your health: overcoming non-alcoholic fatty liver disease",
              meta: "12 min · Gastro",
            },
            {
              href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
              image:
                "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry/hero.jpeg",
              title:
                "Chest pain due to gas: when is it harmless, when you should worry",
              meta: "10 min · Cardiology",
            },
            {
              href: "/blog/expert-diabetic-foot-care-to-keep-you-moving",
              image:
                "/images/blog/expert-diabetic-foot-care-to-keep-you-moving/hero.jpeg",
              title: "Expert diabetic foot care to keep you moving",
              meta: "11 min · Diabetes",
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
