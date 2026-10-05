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
  title: "Microvascular Disease Guide: Symptoms, Care & Long-Term Risks",
  description:
    "Microvascular disease damages the tiny blood vessels supplying the heart, brain, and kidneys, often with normal-looking large arteries. Cardiologists at SRM Global Hospitals explain symptoms, diagnosis, and treatment.",
  path: "/blog/microvascular-disease-guide-symptoms-care-long-term-risks",
  image: "/images/blog/microvascular-disease-guide-symptoms-care-long-term-risks/hero.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2027-04-21",
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

export default function MicrovascularDiseaseArticle() {
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
        date="April 21, 2027"
        readMinutes={14}
        reads="3,150"
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
            { id: "what-is-microvascular-disease", title: "What is microvascular disease" },
            { id: "how-it-begins", title: "How it begins inside the body" },
            { id: "early-symptoms", title: "Early symptoms" },
            { id: "difference-cad", title: "Difference from coronary artery disease" },
            { id: "stages-progression", title: "Stages of progression" },
            { id: "risk-factors", title: "Risk factors" },
            { id: "long-term-organ-risks", title: "Long-term organ risks" },
            { id: "diagnostic-methods", title: "Diagnostic methods" },
            { id: "treatment-pathways", title: "Treatment pathways" },
            { id: "prevention-strategies", title: "Prevention strategies" },
            { id: "expert-care", title: "Expert care at SRM Global" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/takotsubo-cardiomyopathy-how-stress-affects-the-heart",
              image: "/images/blog/takotsubo-cardiomyopathy-how-stress-affects-the-heart/hero.jpeg",
              title: "Takotsubo cardiomyopathy: how stress affects the heart",
              meta: "6 min · Cardiology",
            },
            {
              href: "/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment",
              image: "/images/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment/hero.png",
              title: "HFpEF (diastolic heart failure): causes, effects, and treatment",
              meta: "4 min · Cardiology",
            },
            {
              href: "/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment",
              image: "/images/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment/hero.jpeg",
              title: "Atrial fibrillation: symptoms, causes, risks, and treatment",
              meta: "10 min · Cardiology",
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
