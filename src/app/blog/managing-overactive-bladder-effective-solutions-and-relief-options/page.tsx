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
  title: "Managing Overactive Bladder: Effective Solutions and Relief Options",
  description:
    "Overactive bladder causes sudden urgency and frequent urination that disrupts daily life. Urology specialists at SRM Global Hospitals explain causes, diagnosis, lifestyle changes, and medical treatments.",
  path: "/blog/managing-overactive-bladder-effective-solutions-and-relief-options",
  image: "/images/blog/managing-overactive-bladder-effective-solutions-and-relief-options/hero.jpeg",
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

export default function ManagingOveractiveBladderPage() {
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
        dotClass="dot-urology"
        category="Urology"
        title={article.title}
        specialistTitle="Urology Specialist"
        department="Institute of Urology and Renal Sciences"
        readMinutes={12}
        reads="4,110"
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
            { id: "what-is-an-overactive-bladder", title: "What Is an Overactive Bladder?" },
            { id: "causes-and-risk-factors", title: "Causes and Risk Factors" },
            { id: "diagnosing-overactive-bladder", title: "Diagnosing Overactive Bladder" },
            { id: "lifestyle-changes-for-managing-overactive-bladder", title: "Lifestyle Changes for Managing Overactive Bladder" },
            { id: "medical-treatments-for-overactive-bladder", title: "Medical Treatments for Overactive Bladder" },
            { id: "living-with-overactive-bladder-coping-strategies", title: "Living With Overactive Bladder: Coping Strategies" },
            { id: "preventing-overactive-bladder-worsening", title: "Preventing Overactive Bladder Worsening" },
            { id: "take-charge-of-your-bladder-health-with-srm-global-hospitals", title: "Take Charge of Your Bladder Health with SRM Global Hospitals" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-interstitial-cystitis-symptoms-causes-and-treatments",
              image: "/images/blog/what-is-interstitial-cystitis-symptoms-causes-and-treatments/hero.jpeg",
              title: "What is interstitial cystitis: symptoms, causes, and treatments",
              meta: "17 min · Urology",
            },
            {
              href: "/blog/what-is-a-urinary-tract-infection-causes-symptoms-and-treatment",
              image: "/images/blog/what-is-a-urinary-tract-infection-causes-symptoms-and-treatment/hero.jpeg",
              title: "What is a urinary tract infection? Causes, symptoms, and treatment",
              meta: "14 min · Urology",
            },
            {
              href: "/blog/urinary-incontinence-after-childbirth-causes-and-remedies",
              image: "/images/blog/urinary-incontinence-after-childbirth-causes-and-remedies/hero.jpeg",
              title: "Urinary incontinence after childbirth: causes and remedies",
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
