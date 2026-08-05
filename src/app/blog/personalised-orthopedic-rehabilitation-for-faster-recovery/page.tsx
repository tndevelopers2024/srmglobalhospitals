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
import ArtBody from "./MainContent";
import ArtSide from "@/components/blog/article/ArtSide";
import EndCta from "@/components/blog/article/EndCta";
import MoreArticles from "@/components/blog/article/MoreArticles";
import MobileActionBar from "@/components/blog/article/MobileActionBar";
import BlogInteractions from "@/components/blog/shared/BlogInteractions";

const article = {
    title: "Personalised Orthopedic Rehabilitation for Faster Recovery",
    description:
        "SRM Global Hospitals offers an advanced structured and doctor-supervised approach to orthopedic rehabilitation, ensuring individuals recover from injuries.",
    path: "/blog/personalised-orthopedic-rehabilitation-for-faster-recovery",
    image: "/images/blog/srm-blog25-img1.webp",
    author: "Orthopaedic Specialist",
    section: "Orthopaedics",
    publishedTime: "2026-03-30",
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

export default function OrthopedicRehabArticle() {
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
                specialistTitle="Orthopaedic Rehabilitation Specialist"
                department="Institute of Orthopaedics"
                date="March 30, 2026"
                readMinutes={4}
                reads="294"
            />
            <div className="art-wrap">
                <ShareRail />
                <ArtBody />
                <ArtSide
                    specialistTitle="Orthopaedic Rehabilitation Specialist"
                    department="Institute of Orthopaedics"
                    blurb="Our expert physical therapists and specialists are available to support patients in regaining mobility and function safely."
                    initialToc={[
                        { id: "what-is", title: "What is the Program?" },
                        { id: "expertise", title: "Core Areas of Expertise" },
                        { id: "therapeutic-techniques", title: "Therapeutic Techniques" },
                        { id: "process", title: "The Rehabilitation Process" },
                        { id: "modern-trends", title: "Modern Recovery Trends" },
                        { id: "why-choose", title: "Why Choose Us?" },
                        { id: "faqs", title: "FAQs" },
                    ]}
                    relatedReading={[
                        {
                            href: "/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief",
                            image: "/images/blog/sciatica-pain-treatment-understand-the-cause-and-find-the-right-relief.jpeg",
                            title: "Sciatica Pain Treatment: Understand the Cause and Find the Right Relief",
                            meta: "11 min · Orthopaedics",
                        },
                        {
                            href: "/blog/expert-physiotherapy-for-geriatric-rehabilitation",
                            image: "/images/blog/srm-blog23-img1.webp",
                            title: "Expert Physiotherapy for Geriatric Rehabilitation",
                            meta: "6 min · Orthopaedics",
                        },
                    ]}
                />
            </div>
            <EndCta />
            <MoreArticles
                items={[
                    {
                        href: "/blog/empower-your-neurological-rehabilitation-journey",
                        image: "/images/blog/srm-blog24-img1.webp",
                        category: "Neurology",
                        title: "Empower Your Neurological Rehabilitation Journey",
                    },
                    {
                        href: "/blog/empowering-independence-advanced-assistive-device-technology",
                        image: "/images/blog/empowering-independence-advanced-assistive-device-technology.jpeg",
                        category: "Orthopaedics",
                        title: "Empowering Independence: Advanced Assistive Device Technology",
                    },
                ]}
            />
            <MobileActionBar />
            <SiteFooter />
            <BlogInteractions />
        </>
    );
}
