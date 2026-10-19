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
  title: "Understanding Total Knee Replacement: What to Expect and Recovery Tips",
  description:
    "Total knee replacement can restore pain-free movement when arthritis or joint damage becomes severe. Orthopaedic specialists at SRM Global Hospitals explain the procedure, recovery timeline, diet, and long-term care.",
  path: "/blog/understanding-total-knee-replacement-what-to-expect-and-recovery-tips",
  image: "/images/blog/understanding-total-knee-replacement-what-to-expect-and-recovery-tips/hero.png",
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

export default function TotalKneeReplacementPage() {
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
        readMinutes={18}
        reads="6,240"
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
            { id: "what-is-total-knee-replacement-surgery", title: "What Is Total Knee Replacement Surgery?" },
            { id: "what-conditions-are-treated-with-a-knee-repla", title: "What Conditions Are Treated with a Knee Replacement?" },
            { id: "who-should-consider-knee-replacement-surgery", title: "Who Should Consider Knee Replacement Surgery?" },
            { id: "types-of-knee-replacement-procedures", title: "Types of Knee Replacement Procedures" },
            { id: "benefits-of-knee-replacement-surgery", title: "Benefits of Knee Replacement Surgery" },
            { id: "risks-and-complications-of-knee-replacement", title: "Risks and Complications of Knee Replacement" },
            { id: "how-long-does-it-take-to-recover-from-knee-re", title: "How Long Does It Take to Recover from Knee Replacement?" },
            { id: "preparing-yourself-for-surgery-what-to-do-bef", title: "Preparing Yourself for Surgery: What to Do Before the Operation" },
            { id: "what-to-expect-during-your-hospital-stay", title: "What to Expect During Your Hospital Stay" },
            { id: "physical-therapy-and-rehabilitation", title: "Physical Therapy and Rehabilitation" },
            { id: "tips-for-a-smooth-recovery-at-home", title: "Tips for a Smooth Recovery at Home" },
            { id: "diet-and-nutrition-for-faster-healing", title: "Diet and Nutrition for Faster Healing" },
            { id: "when-can-you-get-back-to-normal-life", title: "When Can You Get Back to Normal Life?" },
            { id: "long-term-care-for-your-new-knee", title: "Long-Term Care for Your New Knee" },
            { id: "srm-global-hospitals-your-partner-in-safe-and", title: "SRM Global Hospitals – Your Partner in Safe and Successful Knee Replacement" },
            { id: "faqs", title: "FAQs" },
          ]}
          relatedReading={[
            {
              href: "/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis",
              image: "/images/blog/why-do-my-knees-hurt-everything-you-need-to-know-about-knee-osteoarthritis/hero.jpeg",
              title: "Why Do My Knees Hurt? Everything About Knee Osteoarthritis",
              meta: "12 min · Orthopaedics",
            },
            {
              href: "/blog/what-is-knee-cartilage-damage-causes-symptoms-and-treatments",
              image: "/images/blog/what-is-knee-cartilage-damage-causes-symptoms-and-treatments/hero.jpeg",
              title: "What is Knee Cartilage Damage? Causes, Symptoms, and Treatments",
              meta: "13 min · Orthopaedics",
            },
            {
              href: "/blog/understanding-knee-replacement-recovery-benefits-and-what-to-expect",
              image: "/images/blog/understanding-knee-replacement-recovery-benefits-and-what-to-expect/hero.jpeg",
              title: "Understanding Knee Replacement: Recovery, Benefits, and What to Expect",
              meta: "16 min · Orthopaedics",
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
