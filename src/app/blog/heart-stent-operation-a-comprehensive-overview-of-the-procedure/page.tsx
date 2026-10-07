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
  title: "Heart Stent Operation: A Comprehensive Overview of the Procedure",
  description:
    "Heart stent operation restores blood flow in blocked coronary arteries via angioplasty. Cardiologists at SRM Global Hospitals explain stent types, the procedure, risks, recovery timeline, and long-term care.",
  path: "/blog/heart-stent-operation-a-comprehensive-overview-of-the-procedure",
  image: "/images/blog/heart-stent-operation-a-comprehensive-overview-of-the-procedure/hero.jpeg",
  author: "Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2027-11-24",
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

export default function HeartStentOperationArticle() {
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
        readMinutes={15}
        reads="5,890"
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
            { id: "what-is-a-heart-stent", title: "What is a heart stent" },
            { id: "why-and-when-needed", title: "Why & when needed" },
            { id: "preparing", title: "Preparation" },
            { id: "procedure", title: "The procedure" },
            { id: "risks-and-complications", title: "Risks & complications" },
            { id: "recovery", title: "Recovery timeline" },
            { id: "long-term-care", title: "Long-term care" },
            { id: "success-rates", title: "Success rates & outlook" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy",
              image: "/images/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy/hero.jpeg",
              title: "Mastering the rotablator: essential insights for effective atherectomy",
              meta: "16 min · Cardiology",
            },
            {
              href: "/blog/understanding-carotid-endarterectomy-benefits-and-recovery-insights",
              image: "/images/blog/understanding-carotid-endarterectomy-benefits-and-recovery-insights/hero.jpeg",
              title: "Understanding carotid endarterectomy: benefits and recovery insights",
              meta: "13 min · Cardiology",
            },
            {
              href: "/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment",
              image: "/images/blog/atrial-fibrillation-symptoms-causes-risks-and-treatment/hero.jpeg",
              title: "Atrial fibrillation: symptoms, causes, risks, and treatment",
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
