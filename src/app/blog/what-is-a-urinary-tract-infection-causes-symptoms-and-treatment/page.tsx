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
  title: "What is a Urinary Tract Infection? Causes, Symptoms, and Treatment",
  description:
    "A urinary tract infection can affect the bladder, urethra, ureters, or kidneys. Urology specialists at SRM Global Hospitals explain causes, risk factors, symptoms by age group, diagnosis, and treatment.",
  path: "/blog/what-is-a-urinary-tract-infection-causes-symptoms-and-treatment",
  image: "/images/blog/what-is-a-urinary-tract-infection-causes-symptoms-and-treatment/hero.jpeg",
  author: "Urology Specialist",
  section: "Urology",
  publishedTime: "2025-11-04",
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

export default function UtiCausesSymptomsTreatmentPage() {
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
            { name: "Health Insights", path: "/blogs" },
            { name: article.title, path: article.path },
          ]),
        ])}
      />
      <HeaderTop />
      <SiteHeader />
      <ReadProgress />
      <ArtCover
        image={article.image}
        dotClass="dot-urology"
        category="Urology"
        title={article.title}
        specialistTitle="Urology Specialist"
        department="Institute of Urology and Renal Sciences"
        readMinutes={14}
        reads="5,340"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Urology Specialist"
          department="Institute of Urology and Renal Sciences"
          blurb="Our urology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-a-urinary-tract-infection-uti", title: "What is a Urinary Tract Infection (UTI)?" },
            { id: "causes-of-urinary-tract-infections", title: "Causes of Urinary Tract Infections" },
            { id: "risk-factors-for-utis", title: "Risk Factors for UTIs" },
            { id: "symptoms-of-urinary-tract-infections", title: "Symptoms of Urinary Tract Infections" },
            { id: "diagnosis-of-uti", title: "Diagnosis of UTI" },
            { id: "treatment-options-for-uti", title: "Treatment Options for UTI" },
            { id: "complications-if-left-untreated", title: "Complications if Left Untreated" },
            { id: "preventive-measures-for-utis", title: "Preventive Measures for UTIs" },
            { id: "srm-global-hospital-trusted-care-for-faster-h", title: "SRM Global Hospital – Trusted Care for Faster Healing and Safer Recovery" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/managing-overactive-bladder-effective-solutions-and-relief-options",
              image: "/images/blog/managing-overactive-bladder-effective-solutions-and-relief-options/hero.jpeg",
              title: "Managing Overactive Bladder: Effective Solutions and Relief Options",
              meta: "12 min · Urology",
            },
            {
              href: "/blog/what-is-interstitial-cystitis-symptoms-causes-and-treatments",
              image: "/images/blog/what-is-interstitial-cystitis-symptoms-causes-and-treatments/hero.jpeg",
              title: "What is Interstitial Cystitis: Symptoms, Causes, and Treatments",
              meta: "17 min · Urology",
            },
            {
              href: "/blog/urinary-incontinence-after-childbirth-causes-and-remedies",
              image: "/images/blog/urinary-incontinence-after-childbirth-causes-and-remedies/hero.jpeg",
              title: "Urinary Incontinence After Childbirth: Causes and Remedies",
              meta: "12 min · Women's Health",
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
