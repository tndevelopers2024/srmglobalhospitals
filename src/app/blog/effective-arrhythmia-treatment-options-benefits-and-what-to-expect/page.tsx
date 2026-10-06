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
  title: "Effective Arrhythmia Treatment: Options, Benefits, and What to Expect",
  description:
    "From medications to catheter ablation and pacemakers, arrhythmia treatment options vary by type and severity. Cardiologists at SRM Global Hospitals explain causes, symptoms, diagnosis, and treatment.",
  path: "/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect",
  image: "/images/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect/hero.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2027-09-22",
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

export default function EffectiveArrhythmiaTreatmentArticle() {
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
        readMinutes={13}
        reads="4,680"
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
            { id: "what-is-arrhythmia", title: "What is arrhythmia" },
            { id: "causes-and-risk-factors", title: "Causes & risk factors" },
            { id: "symptoms", title: "Symptoms to watch for" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "treatment-options", title: "Treatment options" },
            { id: "after-treatment", title: "After treatment" },
            { id: "prevention", title: "Prevention" },
            { id: "emergency-signs", title: "Emergency warning signs" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment",
              image: "/images/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment/hero.jpeg",
              title: "Atrial Fibrillation: Symptoms, Causes, Risks, and Treatment",
              meta: "13 min · Cardiology",
            },
            {
              href: "/blog/takotsubo-cardiomyopathy-how-stress-affects-the-heart",
              image: "/images/blog/takotsubo-cardiomyopathy-how-stress-affects-the-heart/hero.jpeg",
              title: "Takotsubo Cardiomyopathy: How Stress Affects the Heart",
              meta: "15 min · Cardiology",
            },
            {
              href: "/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy",
              image: "/images/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy/hero.jpeg",
              title: "Mastering the Rotablator: Essential Insights for Effective Atherectomy",
              meta: "16 min · Cardiology",
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
