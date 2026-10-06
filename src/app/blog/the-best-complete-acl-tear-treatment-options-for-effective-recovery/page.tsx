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
  title: "The Best Complete ACL Tear Treatment Options for Effective Recovery",
  description:
    "A complete ACL tear can be treated surgically or non-surgically depending on age, activity level, and injury severity. Orthopaedic specialists at SRM Global Hospitals compare both treatment paths and recovery phases.",
  path: "/blog/the-best-complete-acl-tear-treatment-options-for-effective-recovery",
  image: "/images/blog/the-best-complete-acl-tear-treatment-options-for-effective-recovery/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2027-05-12",
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

export default function CompleteAclTearTreatmentArticle() {
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
        readMinutes={12}
        reads="4,320"
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
            { id: "what-are-acl-tears", title: "What are ACL tears" },
            { id: "non-surgical-options", title: "Non-surgical treatment" },
            { id: "surgical-options", title: "Surgical treatment options" },
            { id: "recovery-rehabilitation", title: "Recovery & rehabilitation" },
            { id: "comparing-treatment-paths", title: "Comparing treatment paths" },
            { id: "preventing-re-injury", title: "Preventing re-injury" },
            { id: "connect-with-srm", title: "SRM Global Hospitals" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-a-meniscus-tear-signs-treatment-recovery-guide",
              image: "/images/blog/what-is-a-meniscus-tear-signs-treatment-recovery-guide/hero.jpeg",
              title: "What is a meniscus tear? Signs, treatment & recovery guide",
              meta: "13 min · Orthopaedics",
            },
            {
              href: "/blog/lateral-meniscus-tear-symptoms-causes-and-best-treatment-options",
              image: "/images/blog/lateral-meniscus-tear-symptoms-causes-and-best-treatment-options/hero.jpeg",
              title: "Lateral meniscus tear: symptoms, causes, and best treatment options",
              meta: "12 min · Orthopaedics",
            },
            {
              href: "/blog/what-is-partial-acl-tear-recovery-time-without-surgery",
              image: "/images/blog/what-is-partial-acl-tear-recovery-time-without-surgery/hero.jpeg",
              title: "What is partial ACL tear recovery time without surgery",
              meta: "10 min · Orthopaedics",
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
            title: "Multiple sclerosis: what expert care at the right time can actually do",
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
