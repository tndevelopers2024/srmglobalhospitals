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
  title: "Essential Heat Stroke First Aid: Signs, Treatment, and Prevention Tips",
  description: "Heat stroke is a medical emergency that requires immediate cooling and urgent care. Emergency medicine specialists at SRM Global Hospitals outline key symptoms, step-by-step first aid, what to avoid, and prevention tips.",
  path: "/blog/essential-heat-stroke-first-aid-signs-treatment-and-prevention-tips",
  image: "/images/blog/essential-heat-stroke-first-aid-signs-treatment-and-prevention-tips/hero.png",
  author: "Emergency Medicine Specialist",
  section: "Emergency Medicine",
  publishedTime: "2025-06-13",
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

export default function HeatStrokeFirstAidGuidePage() {
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
        dotClass="dot-emergency-medicine"
        category="Emergency Medicine"
        title={article.title}
        specialistTitle="Emergency Medicine Specialist"
        department="Department of Emergency Medicine & Critical Care"
        readMinutes={13}
        reads="7,120"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Emergency Medicine Specialist"
          department="Department of Emergency Medicine & Critical Care"
          blurb="OOur emergency medicine specialists are available across the week, in-person and via tele-consult."
          initialToc={[
          {
                  "id": "what-you-will-learn",
                  "title": "What you will learn"
          },
          {
                  "id": "what-is-heat-stroke",
                  "title": "What Is Heat Stroke?"
          },
          {
                  "id": "what-causes-heat-stroke",
                  "title": "What Causes Heat Stroke?"
          },
          {
                  "id": "common-signs-and-symptoms-of-heat-stroke",
                  "title": "Common Signs and Symptoms of Hea..."
          },
          {
                  "id": "immediate-first-aid-for-heat-stroke",
                  "title": "Immediate First Aid for Heat Stroke"
          },
          {
                  "id": "step-by-step-heat-stroke-first-aid",
                  "title": "Step-by-Step Heat Stroke First Aid"
          },
          {
                  "id": "medical-treatment-and-recovery",
                  "title": "Medical Treatment and Recovery"
          },
          {
                  "id": "tips-to-prevent-heat-stroke",
                  "title": "Tips to Prevent Heat Stroke"
          },
          {
                  "id": "conclusion",
                  "title": "Conclusion"
          },
          {
                  "id": "faqs",
                  "title": "FAQs"
          }
]}
          relatedReading={[
          {
                  "href": "/blog/essential-seizure-first-aid-what-you-need-to-know-for-emergencies",
                  "image": "/images/blog/essential-seizure-first-aid-what-you-need-to-know-for-emergencies/hero.png",
                  "title": "Essential seizure first aid: what you need to know for emergencies",
                  "meta": "12 min · Neurology"
          },
          {
                  "href": "/blog/multiple-sclerosis-expert-care",
                  "image": "/images/blog/multiple-sclerosis-expert-care/hero.jpeg",
                  "title": "Multiple sclerosis treatment: what expert care at the right time can do",
                  "meta": "15 min · Neurology"
          },
          {
                  "href": "/blog/recovery-after-stroke-the-steps-forward-for-functional-independence",
                  "image": "/images/blog/recovery-after-stroke-the-steps-forward-for-functional-independence/hero.jpeg",
                  "title": "Recovery after stroke: the steps forward for functional independence",
                  "meta": "14 min · Neurology"
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
