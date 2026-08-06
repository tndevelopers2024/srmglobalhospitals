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
  title: "Speech-language Therapy for Autism: Connect, Express, and Understand the World Around You",
  description:
    "Speech-language therapy for autism spectrum disorder builds practical communication skills through speech therapy, language therapy, AAC, and social communication therapy. Paediatric specialists at SRM Global Hospitals explain assessment, techniques, and family support.",
  path: "/blog/speech-language-therapy-for-autism-connect-express-and-understand-the-world-around-you",
  image: "/images/blog/speech-language-therapy-for-autism-connect-express-and-understand-the-world-around-you/hero.jpeg",
  author: "Paediatrics Specialist",
  section: "Paediatrics",
  publishedTime: "2026-06-17",
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

export default function SpeechLanguageTherapyAutismArticle() {
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
        date="June 17, 2026"
        readMinutes={13}
        reads="3,290"
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
            { id: "autism-communication-issues", title: "Communication issues in autism" },
            { id: "early-intervention", title: "Early intervention" },
            { id: "speech-language-assessment", title: "Assessment" },
            { id: "core-techniques", title: "Core techniques" },
            { id: "family-centered-therapy", title: "Family-centered therapy" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
              image: "/images/blog/types-of-cerebral-palsy-what-it-means-for-your-child/hero.jpeg",
              title: "Types of cerebral palsy: what it means for your child",
              meta: "13 min · Neurology",
            },
            {
              href: "/blog/speech-therapy-techniques-for-real-life-communication-challenges",
              image: "/images/blog/speech-therapy-techniques-for-real-life-communication-challenges/hero.jpeg",
              title: "Speech therapy techniques for real-life communication challenges",
              meta: "12 min · Neurology",
            },
            {
              href: "/blog/occupational-therapy-for-children-expert-support-for-real-life-development",
              image: "/images/blog/occupational-therapy-for-children-expert-support-for-real-life-development/hero.jpeg",
              title: "Occupational therapy for children: expert support for real-life development",
              meta: "11 min · Paediatrics",
            },
          ]}
        />
      </div>
      <EndCta />
      <MoreArticles
        items={[
          {
            href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
            image: "/images/blog/types-of-cerebral-palsy-what-it-means-for-your-child/hero.jpeg",
            category: "Neurology",
            title: "Types of Cerebral Palsy: What It Means for Your Child?",
          },
          {
            href: "/blog/multiple-sclerosis-expert-care",
            image: "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
            category: "Neurology",
            title: "Multiple Sclerosis Treatment: What Expert Care at the Right Time Can Do?",
          },
          {
            href: "/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry",
            image: "/images/blog/chest-pain-due-to-gas-when-is-it-harmless-when-you-should-worry/hero.jpeg",
            category: "Cardiology",
            title: "Chest Pain Due to Gas: When is It Harmless? When You Should Worry?",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
