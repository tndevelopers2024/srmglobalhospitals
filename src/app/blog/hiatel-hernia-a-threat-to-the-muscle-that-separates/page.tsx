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
  title: "Hiatal Hernia: A Threat to the Muscle that Separates",
  description:
    "Hiatal hernia occurs when the stomach pushes through the diaphragm. Gastroenterologists at SRM Global Hospitals explain the four types, symptoms, complications, diagnosis, and treatment options for each.",
  path: "/blog/hiatel-hernia-a-threat-to-the-muscle-that-separates",
  image: "/images/blog/hiatel-hernia-a-threat-to-the-muscle-that-separates/hero.jpeg",
  author: "Gastro Specialist",
  section: "Gastro",
  publishedTime: "2026-12-30",
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

export default function HiatalHerniaArticle() {
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
        date="December 30, 2026"
        readMinutes={16}
        reads="3,650"
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
            { id: "types", title: "Hiatal hernia types" },
            { id: "causes", title: "Causes" },
            { id: "symptoms", title: "Symptoms" },
            { id: "complications", title: "Complications" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "treatment", title: "Treatment" },
            { id: "lifestyle", title: "Lifestyle and diet" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/all-about-esophagitis-types-causes-complications-treatments-and-management",
              image: "/images/blog/all-about-esophagitis-types-causes-complications-treatments-and-management/hero.jpeg",
              title: "All about esophagitis: types, causes, complications, treatments",
              meta: "15 min · Gastro",
            },
            {
              href: "/blog/what-is-antral-gastritis-and-why-gut-experts-treat-it-differently",
              image: "/images/blog/what-is-antral-gastritis-and-why-gut-experts-treat-it-differently/hero.jpeg",
              title: "What is antral gastritis and why gut experts treat it differently",
              meta: "13 min · Gastro",
            },
            {
              href: "/blog/what-you-must-know-about-gastritis-causes-symptoms-complications-treatment-and-management",
              image: "/images/blog/what-you-must-know-about-gastritis-causes-symptoms-complications-treatment-and-management/hero.jpeg",
              title: "What you must know about gastritis",
              meta: "14 min · Gastro",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry/hero.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/expert-diabetic-foot-care-to-keep-you-moving",
            image: "/images/blog/expert-diabetic-foot-care-to-keep-you-moving/hero.jpeg",
            category: "Diabetes",
            title: "Your HbA1c stopped falling. Here is what your doctor checks next.",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
