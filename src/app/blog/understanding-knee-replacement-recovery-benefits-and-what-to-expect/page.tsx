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
  title: "Understanding Knee Replacement: Recovery, Benefits, and What to Expect",
  description: "Knee replacement surgery restores mobility and relieves chronic joint pain. Joint replacement specialists at SRM Global Hospitals explain the procedure, preparation checklist, recovery phases, and physical therapy exercises.",
  path: "/blog/understanding-knee-replacement-recovery-benefits-and-what-to-expect",
  image: "/images/blog/understanding-knee-replacement-recovery-benefits-and-what-to-expect/hero.png",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2025-07-18",
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

export default function KneeReplacementRecoveryPage() {
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
        dotClass="dot-orthopaedics"
        category="Orthopaedics"
        title={article.title}
        specialistTitle="Orthopaedic Specialist"
        department="Centre for Bone, Joint & Spine Care"
        readMinutes={16}
        reads="5,430"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Orthopaedic Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our joint replacement specialists are available across the week, in-person and via tele-consult."
          initialToc={[
          {
                  "id": "what-you-will-learn",
                  "title": "What you will learn"
          },
          {
                  "id": "what-is-knee-replacement-surgery",
                  "title": "What Is Knee Replacement Surgery?"
          },
          {
                  "id": "benefits-of-knee-replacement-surgery",
                  "title": "Benefits of Knee Replacement Sur..."
          },
          {
                  "id": "what-to-expect-before-the-surgery",
                  "title": "What to Expect Before the Surgery"
          },
          {
                  "id": "what-happens-during-the-surgery",
                  "title": "What Happens During the Surgery"
          },
          {
                  "id": "recovery-process-timeline-and-phases",
                  "title": "Recovery Process"
          },
          {
                  "id": "when-to-contact-your-doctor",
                  "title": "When to Contact Your Doctor"
          },
          {
                  "id": "physical-therapy-and-exercises",
                  "title": "Physical Therapy and Exercises"
          },
          {
                  "id": "risks-and-complications",
                  "title": "Risks and Complications"
          },
          {
                  "id": "life-after-knee-replacement-what-to-expect",
                  "title": "Life After Knee Replacement"
          }
]}
          relatedReading={[
          {
                  "href": "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
                  "image": "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief/hero.jpeg",
                  "title": "Sciatica pain treatment: understand the cause and find the right relief",
                  "meta": "11 min · Orthopaedics"
          },
          {
                  "href": "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
                  "image": "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain/hero.jpeg",
                  "title": "PRP injection knee therapy: an effective non-surgical way to manage knee pain",
                  "meta": "11 min · Orthopaedics"
          },
          {
                  "href": "/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis",
                  "image": "/images/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis/hero.jpeg",
                  "title": "Why do my knees hurt? Everything you need to know about knee osteoarthritis",
                  "meta": "9 min · Orthopaedics"
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
