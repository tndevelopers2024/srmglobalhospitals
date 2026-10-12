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
  title: "Antral Gastritis: Causes, Best Treatments, and Symptoms Explained",
  description:
    "Antral gastritis is inflammation of the stomach's lower chamber. Gastroenterologists at SRM Global Hospitals explain causes, 8 symptoms, medical treatments, and gut health habits.",
  path: "/blog/antral-gastritis-causes-best-treatments-and-symptoms-explained",
  image: "/images/blog/antral-gastritis-causes-best-treatments-and-symptoms-explained/hero.png",
  author: "Gastroenterology Specialist",
  section: "Gastro",
  publishedTime: "2026-12-15",
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

export default function AntralGastritisCausesPage() {
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
        readMinutes={10}
        reads="4,380"
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
            { id: "what-is-antral-gastritis", title: "What is antral gastritis" },
            { id: "causes", title: "Common causes" },
            { id: "symptoms", title: "Symptoms" },
            { id: "when-to-seek-help", title: "When to seek medical help" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "treatments", title: "Best treatments" },
            { id: "prevention", title: "Preventing flare-ups" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-antral-gastritis-and-why-gut-experts-treat-it-differently",
              image: "/images/blog/what-is-antral-gastritis-and-why-gut-experts-treat-it-differently/hero.jpeg",
              title: "What is antral gastritis and why gut experts treat it differently",
              meta: "11 min · Gastro",
            },
            {
              href: "/blog/what-you-must-know-about-gastritis-causes-symptoms-complications-treatment-and-management",
              image: "/images/blog/what-you-must-know-about-gastritis-causes-symptoms-complications-treatment-and-management/hero.jpeg",
              title: "What you must know about gastritis",
              meta: "14 min · Gastro",
            },
            {
              href: "/blog/helicobacter-pylori-infection-symptoms-diagnosis-and-treatment",
              image: "/images/blog/helicobacter-pylori-infection-symptoms-diagnosis-and-treatment/hero.jpeg",
              title: "Helicobacter pylori infection: causes, symptoms, and treatment",
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
