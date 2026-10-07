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
  title: "Helicobacter pylori Infection: Symptoms, Diagnosis, and Treatment",
  description:
    "Helicobacter pylori affects nearly half the world's population. Gastroenterology specialists at SRM Global Hospitals explain how H. pylori damages the stomach, symptoms, diagnosis, and triple therapy treatment.",
  path: "/blog/helicobacter-pylori-infection-symptoms-diagnosis-and-treatment",
  image: "/images/blog/helicobacter-pylori-infection-symptoms-diagnosis-and-treatment/hero.jpeg",
  author: "Gastro Specialist",
  section: "Gastro",
  publishedTime: "2025-12-04",
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

export default function HelicobacterPyloriArticle() {
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
        date="December 4, 2025"
        readMinutes={10}
        reads="4,780"
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
            { id: "what-is-h-pylori", title: "What is H. pylori" },
            { id: "symptoms", title: "Symptoms" },
            { id: "how-it-spreads", title: "How it spreads" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "treatment", title: "Treatment" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-you-must-know-about-gastritis-causes-symptoms-complications-treatment-and-management",
              image: "/images/blog/what-you-must-know-about-gastritis-causes-symptoms-complications-treatment-and-management/hero.jpeg",
              title: "What you must know about gastritis",
              meta: "14 min · Gastro",
            },
            {
              href: "/blog/what-is-antral-gastritis-and-why-gut-experts-treat-it-differently",
              image: "/images/blog/what-is-antral-gastritis-and-why-gut-experts-treat-it-differently/hero.jpeg",
              title: "What is antral gastritis and why gut experts treat it differently",
              meta: "13 min · Gastro",
            },
            {
              href: "/blog/what-happens-in-barretts-esophagus-understanding-the-health-changes",
              image: "/images/blog/what-happens-in-barretts-esophagus-understanding-the-health-changes/hero.jpeg",
              title: "What happens in Barrett's esophagus? Understanding the health changes",
              meta: "11 min · Gastro",
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
