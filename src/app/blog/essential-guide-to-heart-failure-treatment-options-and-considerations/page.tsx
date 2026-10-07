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
  title: "Essential Guide to Heart Failure Treatment Options and Considerations",
  description:
    "Heart failure treatment spans four stages, from prevention through advanced device therapy and transplant. Cardiologists at SRM Global Hospitals explain types, causes, diagnosis, medications, and living well with the condition.",
  path: "/blog/essential-guide-to-heart-failure-treatment-options-and-considerations",
  image: "/images/blog/essential-guide-to-heart-failure-treatment-options-and-considerations/hero.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2027-12-01",
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

export default function HeartFailureTreatmentArticle() {
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
        readMinutes={16}
        reads="5,240"
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
            { id: "what-is-heart-failure", title: "What is heart failure" },
            { id: "types-of-heart-failure", title: "Types of heart failure" },
            { id: "causes-and-risk-factors", title: "Causes & risk factors" },
            { id: "symptoms", title: "Symptoms" },
            { id: "stages-of-heart-failure", title: "Stages of heart failure" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "medications", title: "Medications" },
            { id: "surgery-and-devices", title: "Surgical & device options" },
            { id: "living-well", title: "Living well" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment",
              image: "/images/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment/hero.jpeg",
              title: "HFpEF (diastolic heart failure): causes, effects, and treatment",
              meta: "11 min · Cardiology",
            },
            {
              href: "/blog/heart-stent-operation-a-comprehensive-overview-of-the-procedure",
              image: "/images/blog/heart-stent-operation-a-comprehensive-overview-of-the-procedure/hero.jpeg",
              title: "Heart stent operation: a comprehensive overview of the procedure",
              meta: "15 min · Cardiology",
            },
            {
              href: "/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect",
              image: "/images/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect/hero.jpeg",
              title: "Effective arrhythmia treatment: options, benefits, and what to expect",
              meta: "13 min · Cardiology",
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
            title: "Multiple Sclerosis Treatment: What Expert Care at the Right Time Can Do?",
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
