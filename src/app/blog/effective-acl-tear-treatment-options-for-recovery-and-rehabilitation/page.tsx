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
  title: "Effective ACL Tear Treatment: Options for Recovery and Rehabilitation",
  description:
    "ACL tear treatment covers causes, diagnosis, surgical and non-surgical options, a 5-phase rehab timeline, and the psychological side of recovery. Orthopaedic specialists at SRM Global Hospitals explain it all.",
  path: "/blog/effective-acl-tear-treatment-options-for-recovery-and-rehabilitation",
  image: "/images/blog/effective-acl-tear-treatment-options-for-recovery-and-rehabilitation/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2027-06-02",
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

export default function EffectiveAclTearTreatmentArticle() {
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
        date="June 2, 2027"
        readMinutes={14}
        reads="4,890"
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
            { id: "what-is-acl-tear", title: "What is an ACL tear" },
            { id: "causes", title: "Causes of ACL injuries" },
            { id: "symptoms-diagnosis", title: "Symptoms & diagnosis" },
            { id: "treatment-options", title: "Treatment options" },
            { id: "rehab-phases", title: "Rehabilitation and recovery" },
            { id: "phases-table", title: "Phases of ACL recovery" },
            { id: "role-of-physiotherapy", title: "Role of physiotherapy" },
            { id: "psychological-support", title: "Psychological support" },
            { id: "lifestyle-prevention", title: "Lifestyle and prevention" },
            { id: "when-to-seek-help", title: "When to seek medical help" },
            { id: "connect-with-srm", title: "Connect with SRM Global" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-acl-tear-surgery-essential-insights-and-recovery-tips",
              image: "/images/blog/what-is-acl-tear-surgery-essential-insights-and-recovery-tips/hero.jpeg",
              title: "What is ACL tear surgery? Essential insights and recovery tips",
              meta: "7 min · Orthopaedics",
            },
            {
              href: "/blog/what-is-partial-acl-tear-recovery-time-without-surgery",
              image: "/images/blog/what-is-partial-acl-tear-recovery-time-without-surgery/hero.jpeg",
              title: "What is partial ACL tear recovery time without surgery",
              meta: "10 min · Orthopaedics",
            },
            {
              href: "/blog/the-best-complete-acl-tear-treatment-options-for-effective-recovery",
              image: "/images/blog/the-best-complete-acl-tear-treatment-options-for-effective-recovery/hero.jpeg",
              title: "The best complete ACL tear treatment options for effective recovery",
              meta: "12 min · Orthopaedics",
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
