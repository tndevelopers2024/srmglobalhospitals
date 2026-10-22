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
  title: "What is Partial ACL Tear Recovery Time Without Surgery",
  description:
    "A partial ACL tear can often heal without surgery through structured physical therapy. Orthopaedic specialists at SRM Global Hospitals explain the month-by-month recovery timeline and warning signs that still need surgery.",
  path: "/blog/what-is-partial-acl-tear-recovery-time-without-surgery",
  image: "/images/blog/what-is-partial-acl-tear-recovery-time-without-surgery/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2025-11-04",
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

export default function PartialAclTearRecoveryPage() {
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
        readMinutes={10}
        reads="3,980"
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
            { id: "what-is-a-partial-acl-tear", title: "What is a Partial ACL Tear?" },
            { id: "can-a-partial-acl-tear-heal-without-surgery", title: "Can a Partial ACL Tear Heal Without Surgery?" },
            { id: "typical-recovery-timeline-without-surgery", title: "Typical Recovery Timeline Without Surgery" },
            { id: "non-surgical-treatment-options", title: "Non-Surgical Treatment Options" },
            { id: "signs-you-may-still-need-surgery", title: "Signs You May Still Need Surgery" },
            { id: "how-to-book-an-appointment-to-know-your-partial-acl-tear-recovery-time-without-surgery", title: "How to Book an Appointment to Know Your Partial ACL Tear Recovery Time Without Surgery" },
            { id: "final-thoughts", title: "Final Thoughts" },
            { id: "faqs-about-partial-acl-tear-recovery-without-surgery", title: "FAQs About Partial ACL Tear Recovery Without Surgery" },
          ]}
          relatedReading={[
            {
              href: "/blog/the-best-complete-acl-tear-treatment-options-for-effective-recovery",
              image: "/images/blog/the-best-complete-acl-tear-treatment-options-for-effective-recovery/hero.jpeg",
              title: "The best complete ACL tear treatment options for effective recovery",
              meta: "12 min · Orthopaedics",
            },
            {
              href: "/blog/what-is-a-meniscus-tear-signs-treatment-recovery-guide",
              image: "/images/blog/what-is-a-meniscus-tear-signs-treatment-recovery-guide/hero.jpeg",
              title: "What is a meniscus tear? Signs, treatment & recovery guide",
              meta: "13 min · Orthopaedics",
            },
            {
              href: "/blog/what-is-acl-tear-surgery-essential-insights-and-recovery-tips",
              image: "/images/blog/what-is-acl-tear-surgery-essential-insights-and-recovery-tips/hero.jpeg",
              title: "What is ACL tear surgery? Essential insights and recovery tips",
              meta: "13 min · Orthopaedics",
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
