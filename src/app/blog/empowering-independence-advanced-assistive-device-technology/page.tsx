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
import ArtBody from "./ArticleBody";
import ArtSide from "@/components/blog/article/ArtSide";
import EndCta from "@/components/blog/article/EndCta";
import MoreArticles from "@/components/blog/article/MoreArticles";
import MobileActionBar from "@/components/blog/article/MobileActionBar";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

const article = {
    title: "Empowering Independence: Advanced Assistive Device Technology",
    description:
        "SRM Global Hospitals in Chennai provides clinically guided assistive device technology services, including device selection, fitting, training, and follow-up.",
    path: "/blog/empowering-independence-advanced-assistive-device-technology",
    image: "/images/blog/empowering-independence-advanced-assistive-device-technology.jpeg",
    author: "Orthopaedics Specialist",
    section: "Orthopaedics",
    publishedTime: "2026-03-31",
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

export default function AssistiveTechnologyArticle() {
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
                dotClass="dot-ortho"
                category="Orthopaedics"
                title={article.title}
                specialistTitle="Orthopaedics Specialist"
                department="Institute of Orthopaedics"
                date="March 31, 2026"
                readMinutes={5}
                reads="1,204"
            />
            <div className="art-wrap">
                <ShareRail />
                <ArtBody />
                <ArtSide
                    specialistTitle="Orthopaedics Specialist"
                    department="Institute of Orthopaedics"
                    blurb="Our orthopaedics and rehabilitation specialists are available for consultation and device assessments."
                    initialToc={[
                        { id: "global-needs", title: "Global Needs for Assistive Technology" },
                        { id: "clinical-integration", title: "Clinical Integration and Oversight" },
                        { id: "mobility-seating", title: "Mobility, Seating, and Positioning" },
                        { id: "neurological-high-tech", title: "Neurological and High-Tech Rehab" },
                        { id: "communication-cognitive", title: "Communication and Cognitive Devices" },
                        { id: "sensory-access", title: "Sensory Access and Accessibility" },
                        { id: "ai-monitoring", title: "Smart Hospital AI Monitoring" },
                        { id: "why-choose", title: "Why Choose SRM Global Hospitals?" },
                        { id: "faqs", title: "FAQs" },
                    ]}
                    relatedReading={[
                        {
                            href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
                            image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief.jpeg",
                            title: "Sciatica Pain Treatment: Understand the Cause and Find Relief",
                            meta: "11 min · Orthopaedics",
                        },
                        {
                            href: "/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain",
                            image: "/images/blog/prp-injection-knee-therapy-an-effective-non-surgical-way-to-manage-knee-pain.jpeg",
                            title: "PRP Injection Knee Therapy: Effective Non-Surgical Way",
                            meta: "5 min · Orthopaedics",
                        },
                        {
                            href: "/blog/empower-your-neurological-rehabilitation-journey",
                            image: "/images/blog/empower-your-neurological-rehabilitation-journey.jpeg",
                            title: "Empower Your Neurological Rehabilitation Journey",
                            meta: "8 min · Neurology",
                        },
                    ]}
                />
            </div>
            <EndCta />
            <MoreArticles
                items={[
                    {
                        href: "/blog/personalised-orthopedic-rehabilitation-for-faster-recovery",
                        image: "/images/blog/personalised-orthopedic-rehabilitation-for-faster-recovery.jpeg",
                        category: "Orthopaedics",
                        title: "Personalised Orthopedic Rehabilitation for Faster Recovery",
                    },
                    {
                        href: "/blog/pediatric-rehabilitation-focused-on-your-children",
                        image: "/images/blog/pediatric-rehabilitation-focused-on-your-children.jpeg",
                        category: "Paediatrics",
                        title: "Pediatric Rehabilitation Focused on Your Children",
                    },
                    {
                        href: "/blog/restoring-hope-through-professional-gait-training",
                        image: "/images/blog/restoring-hope-through-professional-gait-training.jpeg",
                        category: "Neurology",
                        title: "Restoring Hope Through Professional Gait Training",
                    },
                ]}
            />
            <MobileActionBar />
            <SiteFooter />
            <BlogInteractions />
        </>
    );
}
