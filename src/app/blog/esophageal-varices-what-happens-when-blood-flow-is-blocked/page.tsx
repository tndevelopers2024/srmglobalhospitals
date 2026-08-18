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
  title: "Esophageal Varices: What Happens When Blood Flow Is Blocked",
  description:
    "Esophageal varices are enlarged veins caused by portal hypertension from liver disease. Gastroenterologists at SRM Global Hospitals explain warning signs, diagnosis, emergency treatment, and prevention.",
  path: "/blog/esophageal-varices-what-happens-when-blood-flow-is-blocked",
  image: "/images/blog/esophageal-varices-what-happens-when-blood-flow-is-blocked/hero.jpeg",
  author: "Gastro Specialist",
  section: "Gastro",
  publishedTime: "2027-01-06",
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

export default function EsophagealVaricesArticle() {
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
        date="January 06, 2027"
        readMinutes={14}
        reads="3,290"
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
            { id: "why-occur", title: "Why do varices occur" },
            { id: "symptoms", title: "Symptoms & warning signs" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "treatment", title: "Treatment & emergency care" },
            { id: "prevention", title: "Liver health & prevention" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/hiatel-hernia-a-threat-to-the-muscle-that-separates",
              image: "/images/blog/hiatel-hernia-a-threat-to-the-muscle-that-separates.jpeg",
              title: "Hiatal Hernia: A Threat to the Muscle That Separates",
              meta: "10 min · Gastro",
            },
            {
              href: "/blog/understanding-esophageal-ulcer-symptoms-causes-diagnosis-and-treatment",
              image: "/images/blog/understanding-esophageal-ulcer-symptoms-causes-diagnosis-and-treatment.jpeg",
              title: "Understanding Esophageal Ulcer: Symptoms, Causes & Treatment",
              meta: "8 min · Gastro",
            },
            {
              href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
              image: "/images/blog/articles/chest-pain-hero.jpeg",
              title: "Chest pain at 40: When is it your heart, and when is it not?",
              meta: "7 min · Gastro",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/articles/ms-hero.jpeg",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/articles/chest-pain-hero.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/expert-diabetic-foot-care-to-keep-you-moving",
            image: "/images/blog/articles/diabetic-foot-hero.jpeg",
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
