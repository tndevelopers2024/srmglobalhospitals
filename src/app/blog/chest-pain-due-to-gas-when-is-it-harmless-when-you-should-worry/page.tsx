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
  title: "Chest Pain Due to Gas: When is It Harmless? When You Should Worry?",
  description:
    "Chest pain due to gas can mimic a heart attack. Cardiologists at SRM Global Hospitals explain how to tell gas pain from cardiac pain, the warning signs that need urgent care, and how to relieve and prevent gas-related chest discomfort.",
  path: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
  image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2026-05-20",
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

export default function ChestPainDueToGasArticle() {
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
        dotClass="dot-cardiology"
        category="Cardiology"
        title={article.title}
        specialistTitle="Cardiology Specialist"
        department="Institute of Cardiac Sciences"
        date="May 20, 2026"
        readMinutes={10}
        reads="4,380"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Cardiology Specialist"
          department="Institute of Cardiac Sciences"
          blurb="Our cardiology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-chest-gas-pain", title: "What is chest gas pain" },
            { id: "common-causes", title: "Common causes" },
            { id: "gas-pain-vs-heart-attack", title: "Gas pain vs heart attack" },
            { id: "digestive-conditions-linked-to-gas-pain", title: "Digestive conditions linked to gas pain" },
            { id: "relief-and-prevention", title: "Relief and prevention" },
            { id: "when-to-seek-medical-advice", title: "When to seek medical advice" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/multiple-sclerosis-expert-care",
              image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=120&q=85",
              title: "Chest pain at 40: when is it your heart, and when is it not?",
              meta: "9 min · Cardiology",
            },
            {
              href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
              image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&q=85",
              title: "Types of cerebral palsy: what it means for your child",
              meta: "13 min · Neurology",
            },
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=120&q=85",
              title: "Sciatica pain treatment: understand the cause and find the right relief",
              meta: "11 min · Orthopaedics",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=85",
            category: "Neurology",
            title: "Multiple sclerosis: what expert care at the right time can actually do",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=85",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "https://images.unsplash.com/photo-1616093875092-19208e6c4d35?w=600&q=85",
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
