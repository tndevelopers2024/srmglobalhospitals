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
  title: "What is Interstitial Cystitis: Symptoms, Causes, and Treatments",
  description:
    "Interstitial cystitis causes chronic bladder pain that isn't caused by infection, so antibiotics don't help. Specialists at SRM Global Hospitals explain causes, diagnosis, and the full range of treatment options.",
  path: "/blog/what-is-interstitial-cystitis-symptoms-causes-and-treatments",
  image: "/images/blog/what-is-interstitial-cystitis-symptoms-causes-and-treatments/hero.jpeg",
  author: "Urology Specialist",
  section: "Urology",
  publishedTime: "2027-07-14",
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

export default function InterstitialCystitisArticle() {
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
        readMinutes={17}
        reads="3,590"
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
            { id: "what-is-ic", title: "What is interstitial cystitis" },
            { id: "anatomy-function", title: "Anatomy of the bladder" },
            { id: "symptoms", title: "Symptoms" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "causes", title: "Causes of IC" },
            { id: "lifestyle-habits", title: "Lifestyle & daily habits" },
            { id: "non-pharmacological", title: "Non-drug treatments" },
            { id: "pharmacological", title: "Medications" },
            { id: "other-treatments", title: "Other treatments" },
            { id: "surgical-options", title: "Surgical options" },
            { id: "risks-considerations", title: "Risks & considerations" },
            { id: "long-term-management", title: "Long-term management" },
            { id: "prevention-flare-ups", title: "Preventing flare-ups" },
            { id: "connect-with-srm", title: "SRM Global Hospitals" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery",
              image: "/images/blog/cervical-stitch-pregnancy-strengthening-the-mothers-for-a-safer-delivery/hero.jpeg",
              title: "Cervical stitch pregnancy: strengthening mothers for a safer delivery",
              meta: "11 min · Women's Health",
            },
            {
              href: "/blog/white-discharge-during-pregnancy-whats-normal-and-whats-not",
              image: "/images/blog/white-discharge-during-pregnancy-whats-normal-and-whats-not/hero.jpeg",
              title: "White discharge during pregnancy: what's normal and what's not",
              meta: "13 min · Women's Health",
            },
            {
              href: "/blog/cervical-length-at-20-weeks-what-every-mom-to-be-should-know",
              image: "/images/blog/cervical-length-at-20-weeks-what-every-mom-to-be-should-know/hero.jpeg",
              title: "Cervical length at 20 weeks: what every mom-to-be should know",
              meta: "16 min · Women's Health",
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
