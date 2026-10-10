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
  title: "Essential Seizure First Aid: What You Need to Know for Emergencies",
  description: "Knowing what to do during a seizure can save a life. Neurologists at SRM Global Hospitals explain essential seizure first aid steps, safety precautions, emergency warning signs, and care for children and infants.",
  path: "/blog/essential-seizure-first-aid-what-you-need-to-know-for-emergencies",
  image: "/images/blog/essential-seizure-first-aid-what-you-need-to-know-for-emergencies/hero.png",
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

export default function SeizureFirstAidGuidePage() {
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
        readMinutes={12}
        reads="6,480"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Emergency Medicine Specialist"
          department="Department of Emergency Medicine & Critical Care"
          blurb="Our emergency medicine specialists are available across the week, in-person and via tele-consult."
          initialToc={[
          {
                  "id": "what-you-will-learn",
                  "title": "What you will learn"
          },
          {
                  "id": "types-of-seizures-and-what-causes-them",
                  "title": "Types of Seizures and What Cause..."
          },
          {
                  "id": "early-signs-of-a-seizure-you-shouldnt-ignore",
                  "title": "Early Signs of a Seizure You Sho..."
          },
          {
                  "id": "immediate-first-aid-steps-during-a-seizure",
                  "title": "Immediate First Aid Steps During..."
          },
          {
                  "id": "when-to-call-emergency-services",
                  "title": "When to Call Emergency Services"
          },
          {
                  "id": "what-to-do-after-a-seizure-ends",
                  "title": "What to Do After a Seizure Ends"
          },
          {
                  "id": "seizure-first-aid-for-children-and-infants",
                  "title": "Seizure First Aid for Children a..."
          },
          {
                  "id": "conclusion-know-what-to-do-when-it-counts",
                  "title": "Conclusion"
          },
          {
                  "id": "faqs",
                  "title": "FAQs"
          }
]}
          relatedReading={[
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
          },
          {
                  "href": "/blog/types-of-cerebral-palsy-what-it-means-for-your-child",
                  "image": "/images/blog/types-of-cerebral-palsy-what-it-means-for-your-child/hero.jpeg",
                  "title": "Types of cerebral palsy: what it means for your child",
                  "meta": "13 min · Neurology"
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
