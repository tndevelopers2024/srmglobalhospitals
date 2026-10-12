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
  title: "Understanding TEVAR: A Guide to Thoracic Endovascular Aneurysm Repair",
  description: "Thoracic Endovascular Aneurysm Repair (TEVAR) is a minimally invasive surgery to treat thoracic aortic aneurysms. Specialists at SRM Global Hospitals explain the procedure, benefits over open surgery, recovery timeline, and risks.",
  path: "/blog/understanding-tevar-a-guide-to-thoracic-endovascular-aneurysm-repair",
  image: "/images/blog/understanding-tevar-a-guide-to-thoracic-endovascular-aneurysm-repair/hero.png",
  author: "Vascular Surgery Specialist",
  section: "Cardiology",
  publishedTime: "2025-07-30",
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

export default function TevarGuidePage() {
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
        readMinutes={17}
        reads="3,290"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Vascular Surgery Specialist"
          department="Institute of Cardiac Sciences"
          blurb="Our vascular surgery specialists are available across the week, in-person and via tele-consult."
          initialToc={[
          {
                  "id": "what-you-will-learn",
                  "title": "What you will learn"
          },
          {
                  "id": "what-is-a-thoracic-aortic-aneurysm-taa",
                  "title": "What Is a Thoracic Aortic Aneury..."
          },
          {
                  "id": "what-is-tevar",
                  "title": "What Is TEVAR?"
          },
          {
                  "id": "how-tevar-works-step-by-step-procedure",
                  "title": "How TEVAR Works"
          },
          {
                  "id": "tevar-vs-open-surgery",
                  "title": "TEVAR vs. Open Surgery"
          },
          {
                  "id": "risks-and-complications-of-tevar",
                  "title": "Risks and Complications of TEVAR"
          },
          {
                  "id": "recovery-after-tevar",
                  "title": "Recovery After TEVAR"
          },
          {
                  "id": "long-term-outlook-and-life-after-tevar",
                  "title": "Long-Term Outlook and Life After..."
          },
          {
                  "id": "tevar-for-specific-populations",
                  "title": "TEVAR for Specific Populations"
          },
          {
                  "id": "choosing-a-specialist-and-treatment-centre",
                  "title": "Choosing a Specialist and Treatm..."
          }
]}
          relatedReading={[
          {
                  "href": "/blog/understanding-hypertension-symptoms-key-signs-you-shouldnt-ignore",
                  "image": "/images/blog/understanding-hypertension-symptoms-key-signs-you-shouldnt-ignore/hero.png",
                  "title": "Understanding hypertension symptoms: key signs you shouldn't ignore",
                  "meta": "12 min · Cardiology"
          },
          {
                  "href": "/blog/understanding-mitral-valve-prolapse-symptoms-risks-and-management",
                  "image": "/images/blog/understanding-mitral-valve-prolapse-symptoms-risks-and-management/hero.png",
                  "title": "Understanding mitral valve prolapse: symptoms, risks, and management",
                  "meta": "15 min · Cardiology"
          },
          {
                  "href": "/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment",
                  "image": "/images/blog/hfpef-diastolic-heart-failure-causes-effects-and-treatment/hero.jpeg",
                  "title": "HFpEF (diastolic heart failure): causes, effects, and treatment",
                  "meta": "11 min · Cardiology"
          }
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
