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
  title: "Cervical Lymph Nodes: The Body’s Defence You Didn’t Know About",
  description:
    "Learn about the body's defense mechanism: cervical lymph nodes, their function, and what swollen lymph nodes indicate.",
  path: "/blog/cervical-lymph-nodes-the-bodys-defence-you-didnt-know-about",
  image: "/images/blog/cervical-lymph-nodes-the-bodys-defence-you-didnt-know-about/hero.jpeg",
  author: "Neurology Specialist",
  section: "Neurology",
  publishedTime: "2026-03-31",
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

export default function CervicalLymphNodesArticle() {
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
        dotClass="dot-neurology"
        category="Neurology"
        title={article.title}
        specialistTitle="Neurology Specialist"
        department="Centre for Neurology"
        date="March 31, 2026"
        readMinutes={4}
        reads="3,050"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Neurology Specialist"
          department="Centre for Neurology"
          blurb="Our specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "structure-classification", title: "Structure and classification" },
            { id: "swollen-lymph-nodes", title: "Swollen lymph nodes" },
            { id: "diagnostic-tools", title: "Diagnostic tools" },
            { id: "neck-dissection", title: "Neck dissection" },
            { id: "monitoring-prevention", title: "Monitoring and prevention" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/cervical-mucus-your-bodys-fertility-guide-explained",
              image: "/images/blog/cervical-mucus-your-bodys-fertility-guide-explained/hero.jpeg",
              title: "Cervical mucus: your body's fertility guide explained",
              meta: "10 min · Women's Health",
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
