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
  title: "Occupational Therapy for Children: Expert Support for Real-life Development",
  description:
    "Paediatric occupational therapy helps children build fine and gross motor skills, sensory regulation, self-care, and social skills. Specialists at SRM Global Hospitals explain assessment, core therapy areas, and how families and schools can help.",
  path: "/blog/occupational-therapy-for-children-expert-support-for-real-life-development",
  image: "/images/blog/occupational-therapy-for-children-expert-support-for-real-life-development.jpeg",
  author: "Paediatrics Specialist",
  section: "Paediatrics",
  publishedTime: "2026-04-01",
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

export default function OccupationalTherapyChildrenArticle() {
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
        dotClass="dot-paediatrics"
        category="Paediatrics"
        title={article.title}
        specialistTitle="Paediatrics Specialist"
        department="Paediatrics"
        date="April 1, 2026"
        readMinutes={9}
        reads="4,820"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Paediatrics Specialist"
          department="Paediatrics"
          blurb="Our paediatric specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-ot-means", title: "When a child needs OT" },
            { id: "role-of-therapist", title: "Role of the therapist" },
            { id: "core-areas", title: "Core areas of therapy" },
            { id: "support-beyond", title: "Support beyond sessions" },
            { id: "ot-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
              image: "/images/blog/articles/cp-hero.jpeg",
              title: "Types of cerebral palsy: what it means for your child",
              meta: "13 min · Neurology",
            },
            {
              href: "/blog/speech-therapy-techniques-for-real-life-communication-challenges",
              image: "/images/blog/speech-therapy-techniques-for-real-life-communication-challenges.jpeg",
              title: "Speech-language therapy for autism: connect, express, understand",
              meta: "13 min · Paediatrics",
            },
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "/images/blog/articles/sc-hero.jpeg",
              title: "Speech therapy techniques for real-life communication challenges",
              meta: "12 min · Neurology",
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
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=85",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
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
