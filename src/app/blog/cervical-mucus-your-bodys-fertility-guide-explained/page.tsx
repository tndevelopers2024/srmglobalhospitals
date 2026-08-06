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
  title: "Cervical Mucus: Your Body’s Fertility Guide Explained",
  description:
    "Cervical mucus changes throughout the menstrual cycle provide clues about ovulation and fertility. Gynaecologists at SRM Global Hospitals explain normal patterns, abnormal signs, and clinical evaluation for reproductive health.",
  path: "/blog/cervical-mucus-your-bodys-fertility-guide-explained",
  image: "/images/blog/cervical-mucus-your-bodys-fertility-guide-explained/hero.jpeg",
  author: "Women's Health Specialist",
  section: "Women's Health",
  publishedTime: "2026-08-12",
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

export default function CervicalMucusArticle() {
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
        dotClass="dot-womens-health"
        category="Women's Health"
        title={article.title}
        specialistTitle="Women's Health Specialist"
        department="Centre for Women's Health & Wellness"
        date="August 12, 2026"
        readMinutes={10}
        reads="6,240"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Women's Health Specialist"
          department="Centre for Women's Health & Wellness"
          blurb="Our specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "production", title: "Production" },
            { id: "cycle", title: "Menstrual cycle" },
            { id: "abnormal", title: "Abnormal mucus" },
            { id: "factors", title: "Factors" },
            { id: "evaluation", title: "Clinical evaluation" },
            { id: "management", title: "Management" },
            { id: "follow-up", title: "Follow-up" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/cervical-lymph-nodes-the-bodys-defence-you-didnt-know-about",
              image: "/images/blog/cervical-lymph-nodes-the-bodys-defence-you-didnt-know-about/hero.jpeg",
              title: "Cervical Lymph Nodes: The Body’s Defence You Didn’t Know About",
              meta: "4 min · Neurology",
            },
            {
              href: "/blog/recovery-after-stroke-the-steps-forward-for-functional-independence",
              image: "/images/blog/recovery-after-stroke-the-steps-forward-for-functional-independence/hero.jpeg",
              title: "Recovery after stroke: the steps forward for functional independence",
              meta: "14 min · Neurology",
            },
            {
              href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
              image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
              title: "Sciatica pain treatment: understand the cause and find the right relief",
              meta: "11 min · Orthopaedics",
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
            href: "/blog/chest-pain-at-40-when-is-it-your-heart-and-when-is-it-not",
            image: "/images/blog/chest-pain-at-40-when-is-it-your-heart-and-when-is-it-not.jpeg",
            category: "Cardiology",
            title: "Chest pain at 40: When is it your heart, and when is it not?",
          },
          {
            href: "/blog/your-hba1c-stopped-falling-here-is-what-your-doctor-checks-next",
            image: "/images/blog/your-hba1c-stopped-falling-here-is-what-your-doctor-checks-next.jpeg",
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
