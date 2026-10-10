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
  title: "Understanding Esophageal Ulcer: Symptoms, Causes, and Treatments",
  description:
    "Esophageal ulcers form from prolonged acid exposure, most often linked to GERD. Gastroenterologists at SRM Global Hospitals explain 8 symptoms, 8 causes, diagnosis, treatment, and prevention.",
  path: "/blog/understanding-esophageal-ulcer-symptoms-causes-and-treatments",
  image: "/images/blog/understanding-esophageal-ulcer-symptoms-causes-and-treatments/hero.png",
  author: "Gastroenterology Specialist",
  section: "Gastro",
  publishedTime: "2026-12-22",
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

export default function EsophagealUlcerArticle() {
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
        specialistTitle="Gastroenterology Specialist"
        department="Institute of Gastro and Liver Sciences"
        readMinutes={15}
        reads="3,980"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gastroenterology Specialist"
          department="Institute of Gastro and Liver Sciences"
          blurb="Our gastroenterology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-esophageal-ulcer", title: "What is an esophageal ulcer" },
            { id: "common-symptoms", title: "Common symptoms" },
            { id: "causes-and-risk-factors", title: "Causes and risk factors" },
            { id: "when-to-seek-attention", title: "When to seek medical attention" },
            { id: "diagnosing-esophageal-ulcer", title: "Diagnosis" },
            { id: "treatment-options", title: "Treatment options" },
            { id: "home-remedies", title: "Home remedies" },
            { id: "potential-complications", title: "Potential complications" },
            { id: "prevention-tips", title: "Prevention tips" },
            { id: "srm-care", title: "Book appointment" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/all-about-esophagitis-types-causes-complications-treatments-and-management",
              image: "/images/blog/all-about-esophagitis-types-causes-complications-treatments-and-management/hero.jpeg",
              title: "Esophagitis: causes, symptoms, and treatment options",
              meta: "14 min · Gastro",
            },
            {
              href: "/blog/hiatel-hernia-a-threat-to-the-muscle-that-separates",
              image: "/images/blog/hiatel-hernia-a-threat-to-the-muscle-that-separates/hero.jpeg",
              title: "Hiatal hernia: types, causes, and treatment approaches",
              meta: "12 min · Gastro",
            },
            {
              href: "/blog/antral-gastritis-causes-best-treatments-and-symptoms-explained",
              image: "/images/blog/antral-gastritis-causes-best-treatments-and-symptoms-explained/hero.png",
              title: "Antral gastritis: causes, best treatments, and symptoms explained",
              meta: "10 min · Gastro",
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
