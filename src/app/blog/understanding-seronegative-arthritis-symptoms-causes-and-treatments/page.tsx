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
  title: "Understanding Seronegative Arthritis: Symptoms, Causes, and Treatments",
  description:
    "Seronegative arthritis mimics rheumatoid arthritis but tests negative for common blood markers. Rheumatology specialists at SRM Global Hospitals explain symptoms, causes, diagnosis, and treatment options.",
  path: "/blog/understanding-seronegative-arthritis-symptoms-causes-and-treatments",
  image: "/images/blog/understanding-seronegative-arthritis-symptoms-causes-and-treatments/hero.jpeg",
  author: "Rheumatology Specialist",
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

export default function UnderstandingSeronegativeArthritisPage() {
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
        specialistTitle="Rheumatology Specialist"
        department="Centre for Bone, Joint & Spine Care"
        readMinutes={11}
        reads="3,410"
      />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide
          specialistTitle="Rheumatology Specialist"
          department="Centre for Bone, Joint & Spine Care"
          blurb="Our rheumatology specialists are available across the week, in-person and via tele-consult."
          initialToc={[
            { id: "what-you-will-learn", title: "What you will learn" },
            { id: "what-is-seronegative-arthritis", title: "What is Seronegative Arthritis?" },
            { id: "key-symptoms-of-seronegative-arthritis", title: "Key Symptoms of Seronegative Arthritis" },
            { id: "causes-and-risk-factors", title: "Causes and Risk Factors" },
            { id: "how-is-seronegative-arthritis-diagnosed", title: "How is Seronegative Arthritis Diagnosed?" },
            { id: "treatment-options-for-seronegative-arthritis", title: "Treatment Options for Seronegative Arthritis" },
            { id: "living-with-seronegative-arthritis-coping-str", title: "Living with Seronegative Arthritis: Coping Strategies" },
            { id: "final-thoughts", title: "Final Thoughts" },
            { id: "srm-global-hospitals", title: "SRM Global Hospitals" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/find-the-best-doctor-for-rheumatoid-arthritis-in-chennai-today",
              image: "/images/blog/find-the-best-doctor-for-rheumatoid-arthritis-in-chennai-today/hero.jpeg",
              title: "Find the Best Doctor for Rheumatoid Arthritis in Chennai Today",
              meta: "11 min · Orthopaedics",
            },
            {
              href: "/blog/what-are-rheumatoid-arthritis-deformities-causes-and-solutions",
              image: "/images/blog/what-are-rheumatoid-arthritis-deformities-causes-and-solutions/hero.jpeg",
              title: "What are Rheumatoid Arthritis Deformities? Causes and Solutions",
              meta: "14 min · Orthopaedics",
            },
            {
              href: "/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis",
              image: "/images/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis/hero.jpeg",
              title: "Why Do My Knees Hurt? Everything About Knee Osteoarthritis",
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
