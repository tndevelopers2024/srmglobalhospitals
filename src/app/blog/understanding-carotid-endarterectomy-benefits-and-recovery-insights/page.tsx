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
  title: "Understanding Carotid Endarterectomy: Benefits and Recovery Insights",
  description:
    "Carotid endarterectomy removes plaque from the carotid artery to lower stroke risk. Vascular surgery specialists at SRM Global Hospitals explain who needs it, the procedure, benefits, costs, and recovery timeline.",
  path: "/blog/understanding-carotid-endarterectomy-benefits-and-recovery-insights",
  image: "/images/blog/understanding-carotid-endarterectomy-benefits-and-recovery-insights/hero.png",
  author: "Vascular Surgery Specialist",
  section: "Cardiology",
  publishedTime: "2027-11-10",
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

export default function UnderstandingCarotidEndarterectomyArticle() {
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
        specialistTitle="Vascular Surgery Specialist"
        department="Institute of Cardiac Sciences"
        readMinutes={13}
        reads="3,760"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Vascular Surgery Specialist"
          department="Institute of Cardiac Sciences"
          blurb="Our vascular surgery specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-carotid-endarterectomy", title: "What is carotid endarterectomy" },
            { id: "who-needs-it", title: "Who needs it" },
            { id: "the-procedure", title: "The procedure" },
            { id: "benefits", title: "Benefits of procedure" },
            { id: "cost", title: "Cost of procedure" },
            { id: "recovery-timeline", title: "Recovery timeline" },
            { id: "srm-care", title: "Care at SRM" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/microvascular-disease-guide-symptoms-care-long-term-risks",
              image: "/images/blog/microvascular-disease-guide-symptoms-care-long-term-risks/hero.jpeg",
              title: "Microvascular disease guide: symptoms, care & long-term risks",
              meta: "14 min · Cardiology",
            },
            {
              href: "/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy",
              image: "/images/blog/mastering-the-rotablator-essential-insights-for-effective-atherectomy/hero.jpeg",
              title: "Mastering the rotablator: essential insights for effective atherectomy",
              meta: "16 min · Cardiology",
            },
            {
              href: "/blog/understanding-tevar-a-guide-to-thoracic-endovascular-aneurysm-repair",
              image: "/images/blog/understanding-tevar-a-guide-to-thoracic-endovascular-aneurysm-repair/hero.png",
              title: "Understanding TEVAR: a guide to thoracic endovascular aneurysm repair",
              meta: "17 min · Cardiology",
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
