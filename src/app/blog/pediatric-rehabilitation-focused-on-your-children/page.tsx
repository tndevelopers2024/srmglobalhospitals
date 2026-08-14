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
  title: "Pediatric Rehabilitation Focused on Your Children",
  description:
    "Pediatric rehabilitation at SRM Global Hospitals combines sensory integration, feeding therapy, AAC and assistive technology, delivered by a multidisciplinary team through personalised, family-centred programs.",
  path: "/blog/pediatric-rehabilitation-focused-on-your-children",
  image: "/images/blog/pediatric-rehabilitation-focused-on-your-children/hero.jpeg",
  author: "Paediatrics Specialist",
  section: "Paediatrics",
  publishedTime: "2026-03-30",
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

export default function PediatricRehabilitationArticle() {
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
        date="March 30, 2026"
        readMinutes={10}
        reads="2,340"
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
            { id: "pr-team", title: "Multidisciplinary team" },
            { id: "pr-programs", title: "Individualised programs" },
            { id: "pr-holistic", title: "Holistic development" },
            { id: "pr-faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/pediatric-rehabilitation-focused-on-your-children",
              image: "/images/blog/occupational-therapy-for-children-expert-support-for-real-life-development/hero.jpeg",
              title: "Occupational therapy for children: expert support for real-life development",
              meta: "9 min · Paediatrics",
            },
            {
              href: "/blog/speech-language-therapy-for-autism-connect-express-and-understand-the-world-around-you",
              image: "/images/blog/speech-language-therapy-for-autism-connect-express-and-understand-the-world-around-you/hero.jpeg",
              title: "Speech-language therapy for autism: connect, express, understand",
              meta: "13 min · Paediatrics",
            },
            {
              href: "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
              image: "/images/blog/types-of-cerebral-palsy-what-it-means-for-your-child/hero.jpeg",
              title: "Types of cerebral palsy: what it means for your child",
              meta: "13 min · Neurology",
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
            href: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
            image: "/images/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you/hero.jpeg",
            category: "Cardiology",
            title: "Right side chest pain: what your symptoms could be telling you",
          },
          {
            href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
            image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
            category: "Orthopaedics",
            title: "Sciatica pain treatment: understand the cause and find the right relief",
          },
        ]}
      />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
