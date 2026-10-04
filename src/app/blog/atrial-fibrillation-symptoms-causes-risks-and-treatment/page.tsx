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
  title: "Atrial Fibrillation: Symptoms, Causes, Risks, and Treatment",
  description:
    "Atrial fibrillation is a common irregular heart rhythm that raises stroke risk. Cardiologists at SRM Global Hospitals explain types, causes, symptoms, diagnosis, and treatment including catheter ablation.",
  path: "/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment",
  image: "/images/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment/hero.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2027-03-31",
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

export default function AtrialFibrillationArticle() {
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
        date="March 31, 2027"
        readMinutes={13}
        reads="4,910"
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
            { id: "types-of-afib", title: "Types of atrial fibrillation" },
            { id: "causes-and-risks", title: "Causes and risks" },
            { id: "symptoms", title: "Symptoms" },
            { id: "flutter-vs-fibrillation", title: "Atrial flutter vs fibrillation" },
            { id: "diagnosis", title: "Diagnosis and blood tests" },
            { id: "treatments", title: "Treatments" },
            { id: "prevention", title: "Prevention" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment",
              image: "/images/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment/hero.png",
              title: "HFpEF (diastolic heart failure): causes, effects, and treatment",
              meta: "11 min · Cardiology",
            },
            {
              href: "/blog/get-back-with-the-stronger-heart-effective-cardiac-rehabilitation",
              image: "/images/blog/get-back-with-the-stronger-heart-effective-cardiac-rehabilitation/hero.jpeg",
              title: "Get back with the stronger heart: effective cardiac rehabilitation",
              meta: "13 min · Cardiology",
            },
            {
              href: "/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you",
              image: "/images/blog/right-side-chest-pain-what-your-symptoms-could-be-telling-you/hero.jpeg",
              title: "Right side chest pain: what your symptoms could be telling you",
              meta: "11 min · Cardiology",
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
