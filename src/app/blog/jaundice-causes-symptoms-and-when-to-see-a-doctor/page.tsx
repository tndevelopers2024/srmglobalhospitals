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
  title: "Jaundice: Causes, Symptoms & When to See a Doctor",
  description:
    "Jaundice causes yellowing of the skin and eyes due to elevated bilirubin levels. Learn about pre-hepatic, hepatic, and obstructive causes, newborn jaundice, diagnosis, and treatment at SRM Global Hospitals.",
  path: "/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor",
  image:
    "/images/blog/jaundice-causes-symptoms-and-when-to-see-a-doctor/hero.jpg",
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

export default function JaundiceArticle() {
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
        readMinutes={24}
        reads="5,180"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Gastro Specialist"
          department="Institute of Gastro and Liver Sciences"
          blurb="Our hepatology, gastroenterology, and neonatology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-jaundice", title: "What is jaundice" },
            { id: "jaundice-symptoms", title: "Jaundice symptoms" },
            { id: "causes-of-jaundice", title: "Causes of jaundice" },
            { id: "jaundice-in-newborns", title: "Jaundice in newborns" },
            { id: "how-is-jaundice-diagnosed", title: "Diagnosis & tests" },
            { id: "treatment-for-jaundice", title: "Treatment options" },
            { id: "how-to-prevent-jaundice", title: "Prevention" },
            { id: "complications-of-untreated-jaundice", title: "Complications" },
            { id: "get-expert-care-for-jaundice", title: "Expert liver care" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/bilirubin-test-normal-range-high-and-low-levels-explained",
              image: "/images/blog/bilirubin-test-normal-range-high-and-low-levels-explained/hero.jpg",
              title: "Bilirubin Test: Normal Range, High & Low Levels Explained",
              meta: "14 min · Gastro",
            },
            {
              href: "/blog/gastroenterologist-what-they-treat-and-when-you-need-one",
              image: "/images/blog/gastroenterologist-what-they-treat-and-when-you-need-one/hero.jpg",
              title: "Gastroenterologist: What They Treat & When You Need One",
              meta: "18 min · Gastro",
            },
            {
              href: "/blog/transform-your-health-overcoming-non-alcoholic-fatty-liver-disease",
              image: "/images/blog/transform-your-health-overcoming-non-alcoholic-fatty-liver-disease/hero.jpeg",
              title: "Transform Your Health: Overcoming Non-Alcoholic Fatty Liver Disease",
              meta: "12 min · Gastro",
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
