import "@/styles/media.css";
import { createMetadata } from "@/lib/seo";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import Hero from "@/components/in-the-media/Hero";
import FeaturedArticle from "@/components/in-the-media/FeaturedArticle";
import MediaGrid2025 from "@/components/in-the-media/MediaGrid2025";
import MediaGrid2024 from "@/components/in-the-media/MediaGrid2024";
import MediaLogos from "@/components/in-the-media/MediaLogos";
import CallToAction from "@/components/in-the-media/CallToAction";

export const metadata = createMetadata({
  title: "In the Media",
  description:
    "SRM Global Hospitals doctors featured across television, radio, and digital publications on health topics that matter.",
  path: "/in-the-media",
});

export default function InTheMediaPage() {
  return (
    <>
      <HeaderTop />
      <SiteHeader />
      <main className="media-page" id="main-content">
        <Hero />
        <FeaturedArticle />
        <MediaGrid2025 />
        <MediaGrid2024 />
        <MediaLogos />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
