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
  title: "The Silent Expansion: Breaking the Cycle of Bronchiectasis",
  description:
    "Bronchiectasis causes permanent widening of the airways, trapping mucus and inviting recurrent infection. Pulmonologists at SRM Global Hospitals explain the four types, causes, symptoms, diagnosis, and treatment.",
  path: "/blog/the-silent-expansion-breaking-the-cycle-of-bronchiectasis",
  image: "/images/blog/the-silent-expansion-breaking-the-cycle-of-bronchiectasis.jpeg",
  author: "Pulmonology Specialist",
  section: "Pulmonology",
  publishedTime: "2027-01-13",
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

export default function BronchiectasisArticle() {
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
        dotClass="dot-pulmonology"
        category="Pulmonology"
        title={article.title}
        specialistTitle="Pulmonology Specialist"
        department="Centre for Respiratory Rehabilitation"
        date="January 13, 2027"
        readMinutes={14}
        reads="3,180"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Pulmonology Specialist"
          department="Centre for Respiratory Rehabilitation"
          blurb="Our pulmonology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "forms-of-bronchiectasis", title: "Forms of bronchiectasis" },
            { id: "causes", title: "Causes" },
            { id: "symptoms", title: "Symptoms" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "treatment", title: "Treatment" },
            { id: "management", title: "Management" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/tuberculosis-treatment-how-it-turns-out-to-be-life-saving-reality",
              image: "/images/blog/tuberculosis-treatment-how-it-turns-out-to-be-life-saving-reality.jpeg",
              title: "Tuberculosis treatment: how it turns out to be life-saving reality",
              meta: "14 min · Pulmonology",
            },
            {
              href: "/blog/breathe-new-life-pulmonary-fibrosis-treatments-symptoms-causes-and-complications",
              image: "/images/blog/breathe-new-life-pulmonary-fibrosis-treatments-symptoms-causes-and-complications.jpeg",
              title: "Breathe new life: pulmonary fibrosis treatments, symptoms, causes",
              meta: "13 min · Pulmonology",
            },
            {
              href: "/blog/why-sarcoidosis-treatment-is-no-longer-a-guessing-game",
              image: "/images/blog/why-sarcoidosis-treatment-is-no-longer-a-guessing-game.png",
              title: "Why sarcoidosis treatment is no longer a guessing game",
              meta: "9 min · Pulmonology",
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
