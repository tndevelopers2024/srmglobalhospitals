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
  title: "Transform Your Health: Overcoming Non-Alcoholic Fatty Liver Disease",
  description:
    "Non-alcoholic fatty liver disease (NAFLD/MASLD) affects millions and is often silent. Gastroenterologists at SRM Global Hospitals explain causes, diagnosis, lifestyle management, and clinical treatment options.",
  path: "/blog/transform-your-health-overcoming-non-alcoholic-fatty-liver-disease",
  image: "/images/blog/transform-your-health-overcoming-non-alcoholic-fatty-liver-disease/hero.jpeg",
  author: "Gastro Specialist",
  section: "Gastro",
  publishedTime: "2026-12-02",
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

export default function FattyLiverArticle() {
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
        date="December 2, 2026"
        readMinutes={12}
        reads="4,250"
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
            { id: "what-is-fatty-liver", title: "What is fatty liver" },
            { id: "types-of-fatty-liver", title: "Types of fatty liver" },
            { id: "causes-nafld", title: "Causes of NAFLD/MASLD" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "lifestyle-management", title: "Lifestyle management" },
            { id: "clinical-management", title: "Clinical management" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/gallstone-pancreatitis-what-to-do-now-how-to-heal-faster-and-how-to-prevent-future-attacks",
              image: "/images/blog/gallstone-pancreatitis-what-to-do-now-how-to-heal-faster-and-how-to-prevent-future-attacks/hero.jpeg",
              title: "Gallstone pancreatitis: what to do now, how to heal faster",
              meta: "13 min · Gastro",
            },
            {
              href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
              image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry/hero.jpeg",
              title: "Chest pain due to gas: when is it harmless, when you should worry",
              meta: "10 min · Cardiology",
            },
            {
              href: "/blog/expert-diabetic-foot-care-to-keep-you-moving",
              image: "/images/blog/expert-diabetic-foot-care-to-keep-you-moving/hero.jpeg",
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
