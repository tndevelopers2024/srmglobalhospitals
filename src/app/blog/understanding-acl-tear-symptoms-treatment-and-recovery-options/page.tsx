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
  title: "Understanding ACL Tear: Symptoms, Treatment, and Recovery Options",
  description:
    "ACL injuries are graded 1 to 3 by severity, from mild sprain to complete rupture. Orthopaedic specialists at SRM Global Hospitals explain each grade, diagnosis, surgical and non-surgical treatment, and recovery timelines.",
  path: "/blog/understanding-acl-tear-symptoms-treatment-and-recovery-options",
  image: "/images/blog/understanding-acl-tear-symptoms-treatment-and-recovery-options/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2027-08-11",
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

export default function UnderstandingAclTearArticle() {
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
        readMinutes={15}
        reads="5,180"
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
            { id: "what-is-the-acl", title: "What is the ACL" },
            { id: "how-acl-tear-happens", title: "How tears happen" },
            { id: "types-and-grades", title: "Grades of ACL tears" },
            { id: "signs-and-symptoms", title: "Signs and symptoms" },
            { id: "diagnosis", title: "Diagnosis" },
            { id: "associated-injuries", title: "Associated injuries" },
            { id: "healing-without-surgery", title: "Healing without surgery" },
            { id: "treatment-options", title: "Treatment options" },
            { id: "when-surgery-required", title: "When surgery is needed" },
            { id: "acl-reconstruction", title: "Reconstruction surgery" },
            { id: "recovery-timeline", title: "Recovery timeline" },
            { id: "rehab-plan", title: "Rehabilitation plan" },
            { id: "risks-and-complications", title: "Risks and complications" },
            { id: "prevention", title: "Preventing future injuries" },
            { id: "untreated-acl-tear", title: "Untreated ACL tear" },
            { id: "return-to-sports", title: "Return to sports" },
            { id: "srm-partner-recovery", title: "SRM Global Hospitals care" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/what-is-acl-tear-surgery-essential-insights-and-recovery-tips",
              image: "/images/blog/what-is-acl-tear-surgery-essential-insights-and-recovery-tips/hero.jpeg",
              title: "What is ACL tear surgery? Essential insights and recovery tips",
              meta: "13 min · Orthopaedics",
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
