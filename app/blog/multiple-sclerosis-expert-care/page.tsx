import type { Metadata } from "next";
import "../blog.css";
import HeaderTop from "../../components/HeaderTop";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ReadProgress from "../components/ReadProgress";
import ArtCover from "../components/ArtCover";
import ShareRail from "../components/ShareRail";
import ArtBody from "../components/ArtBody";
import ArtSide from "../components/ArtSide";
import EndCta from "../components/EndCta";
import MoreArticles from "../components/MoreArticles";
import MobileActionBar from "../components/MobileActionBar";
import BlogInteractions from "../components/BlogInteractions";

export const metadata: Metadata = {
  title:
    "Multiple sclerosis: What expert care at the right time can actually do | SRM Global Hospitals",
  description:
    "How early diagnosis, disease-modifying therapy, and the right specialist team change the course of multiple sclerosis — written by SRM Global Hospitals doctors.",
};

export default function MultipleSclerosisArticle() {
  return (
    <>
      <HeaderTop />
      <SiteHeader />
      <ReadProgress />
      <ArtCover />
      <div className="art-wrap">
        <ShareRail />
        <ArtBody />
        <ArtSide />
      </div>
      <EndCta />
      <MoreArticles />
      <MobileActionBar />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
