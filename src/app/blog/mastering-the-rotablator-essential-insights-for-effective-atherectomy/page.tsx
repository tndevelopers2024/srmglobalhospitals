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
  title: "Mastering the Rotablator: Essential Insights for Effective Atherectomy",
  description:
    "Rotational atherectomy uses a diamond-tipped burr to break down calcified plaque that resists standard balloon angioplasty. Cardiologists at SRM Global Hospitals explain the mechanism, technique, and outcomes.",
  path: "/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy",
  image: "/images/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy/hero.png",
  author: "Interventional Cardiology Specialist",
  section: "Cardiology",
  publishedTime: "2025-08-13",
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

export default function MasteringTheRotablatorPage() {
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
        specialistTitle="Interventional Cardiology Specialist"
        department="Institute of Cardiac Sciences"
        readMinutes={16}
        reads="3,120"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Interventional Cardiology Specialist"
          department="Institute of Cardiac Sciences"
          blurb="Our interventional cardiology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-rotational-atherectomy-ra-and-why-is", title: "What Is Rotational Atherectomy (RA) and Why Is It Needed?" },
            { id: "what-makes-rotational-atherectomy-essential-i", title: "What Makes Rotational Atherectomy Essential in Treating Calcified Coronary Lesions?" },
            { id: "how-rotablation-works-key-mechanism-and-compo", title: "How Rotablation Works: Key Mechanism and Components" },
            { id: "inside-the-rotapro™-system-equipment-and-setu", title: "Inside the ROTAPRO™ System: Equipment and Setup" },
            { id: "step-by-step-performing-ra-in-practice", title: "Step-by-Step: Performing RA in Practice" },
            { id: "advanced-ra-strategies-for-complex-cases", title: "Advanced RA Strategies for Complex Cases" },
            { id: "rotational-atherectomy-outcomes-what-the-evid", title: "Rotational Atherectomy Outcomes: What the Evidence Shows" },
            { id: "complications-and-how-to-minimize-them", title: "Complications and How to Minimize Them" },
            { id: "ra-vs-other-atherectomy-techniques-oa-and-elc", title: "RA vs. Other Atherectomy Techniques: OA and ELCA" },
            { id: "srm-global-hospitals-supporting-ra-excellence", title: "SRM Global Hospitals: Supporting RA Excellence" },
            { id: "conclusion", title: "Conclusion" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/microvascular-disease-guide-symptoms-care-long-term-risks",
              image: "/images/blog/microvascular-disease-guide-symptoms-care-long-term-risks/hero.jpeg",
              title: "Microvascular Disease Guide: Symptoms, Care & Long-Term Risks",
              meta: "14 min · Cardiology",
            },
            {
              href: "/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect",
              image: "/images/blog/effective-arrhythmia-treatment-options-benefits-and-what-to-expect/hero.jpeg",
              title: "Effective Arrhythmia Treatment: Options, Benefits, and What to Expect",
              meta: "13 min · Cardiology",
            },
            {
              href: "/blog/understanding-carotid-endarterectomy-benefits-and-recovery-insights",
              image: "/images/blog/understanding-carotid-endarterectomy-benefits-and-recovery-insights/hero.png",
              title: "Understanding Carotid Endarterectomy: Benefits and Recovery Insights",
              meta: "13 min · Cardiology",
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
