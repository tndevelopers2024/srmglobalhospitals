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
  title: "Top Meniscus Tear Exercises to Strengthen Your Knee and Alleviate Pain",
  description:
    "Physical therapy and targeted exercises help strengthen the knee and relieve pain from a meniscus tear. Orthopaedic specialists at SRM Global Hospitals share early, mid, and advanced exercises.",
  path: "/blog/top-meniscus-tear-exercises-to-strengthen-your-knee-and-alleviate-pain",
  image: "/images/blog/top-meniscus-tear-exercises-to-strengthen-your-knee-and-alleviate-pain/hero.jpeg",
  author: "Orthopaedic Specialist",
  section: "Orthopaedics",
  publishedTime: "2025-12-03",
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

export default function TopMeniscusTearExercisesPage() {
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
        reads="4,730"
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
            { id: "how-a-meniscus-tear-affects-your-knee-movement", title: "How a Meniscus Tear Affects Your Knee Movement" },
            { id: "types-of-meniscus-tears-and-their-severity-levels", title: "Types of Meniscus Tears and Their Severity Levels" },
            { id: "early-stage-exercises-to-reduce-pain-and-restore-basic-movement", title: "Early-Stage Exercises to Reduce Pain and Restore Basic Movement" },
            { id: "mid-stage-exercises-to-build-strength-and-improve-joint-stability", title: "Mid-Stage Exercises to Build Strength and Improve Joint Stability" },
            { id: "advanced-exercises-for-full-meniscus-tear-recovery", title: "Advanced Exercises for Full Meniscus Tear Recovery" },
            { id: "meniscus-tear-exercises-to-avoid-during-the-rehab-period", title: "Meniscus Tear Exercises to Avoid During the Rehab Period" },
            { id: "home-tips-to-support-meniscus-tear-recovery", title: "Home Tips to Support Meniscus Tear Recovery" },
            { id: "start-meniscus-tear-exercises-early-for-stronger-knees", title: "Start Meniscus Tear Exercises Early for Stronger Knees" },
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
              href: "/blog/knee-cartilage-damage-explained-early-signs-you-shouldnt-ignore",
              image: "/images/blog/knee-cartilage-damage-explained-early-signs-you-shouldnt-ignore/hero.jpeg",
              title: "Knee cartilage damage explained: early signs you shouldn't ignore",
              meta: "11 min · Orthopaedics",
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
