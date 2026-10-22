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
  title: "Effective Tennis Elbow Treatment: Relieve Pain and Restore Mobility",
  description:
    "Tennis elbow can affect anyone who repeats the same wrist and forearm motions, not just athletes. Orthopaedic specialists at SRM Global Hospitals explain causes, diagnosis, and treatment from rest to PRP therapy.",
  path: "/blog/effective-tennis-elbow-treatment-relieve-pain-and-restore-mobility",
  image: "/images/blog/effective-tennis-elbow-treatment-relieve-pain-and-restore-mobility/hero.png",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
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

export default function EffectiveTennisElbowTreatmentPage() {
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
            { name: "Health Insights", path: "/blogs" },
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
        readMinutes={12}
        reads="4,590"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Orthopaedic Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our orthopaedic specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-tennis-elbow-and-what-causes-it", title: "What Is Tennis Elbow and What Causes It?" },
            { id: "who-is-at-risk-of-developing-tennis-elbow", title: "Who Is at Risk of Developing Tennis Elbow?" },
            { id: "signs-and-symptoms-to-watch-for", title: "Signs and Symptoms to Watch For" },
            { id: "how-is-tennis-elbow-diagnosed", title: "How Is Tennis Elbow Diagnosed?" },
            { id: "non-surgical-treatment-options-for-tennis-elb", title: "Non-Surgical Treatment Options for Tennis Elbow" },
            { id: "physical-therapy-and-exercises-to-restore-str", title: "Physical Therapy and Exercises to Restore Strength and Mobility" },
            { id: "advanced-treatment-options-when-pain-persists", title: "Advanced Treatment Options When Pain Persists" },
            { id: "when-is-surgery-considered-for-tennis-elbow", title: "When Is Surgery Considered for Tennis Elbow?" },
            { id: "preventing-recurrence-tips-for-long-term-reli", title: "Preventing Recurrence: Tips for Long-Term Relief" },
            { id: "srm-global-hospitals-helping-you-access-the-b", title: "SRM Global Hospitals – Helping You Access the Best Care for Tennis Elbow" },
            { id: "conclusion", title: "Conclusion" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-rotator-cuff-tear-symptoms-diagnosis-and-treatment",
              image: "/images/blog/what-is-rotator-cuff-tear-symptoms-diagnosis-and-treatment/hero.jpeg",
              title: "What is a Rotator Cuff Tear? Symptoms, Diagnosis, and Treatment",
              meta: "13 min · Orthopaedics",
            },
            {
              href: "/blog/comprehensive-guide-to-labral-tear-shoulder-symptoms-and-treatments",
              image: "/images/blog/comprehensive-guide-to-labral-tear-shoulder-symptoms-and-treatments/hero.jpeg",
              title: "Comprehensive Guide to Labral Tear Shoulder: Symptoms and Treatments",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/understanding-total-knee-replacement-what-to-expect-and-recovery-tips",
              image: "/images/blog/understanding-total-knee-replacement-what-to-expect-and-recovery-tips/hero.png",
              title: "Understanding Total Knee Replacement: What to Expect and Recovery Tips",
              meta: "18 min · Orthopaedics",
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
