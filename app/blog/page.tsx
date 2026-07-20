import type { Metadata } from "next";
import "./blog.css";
import HeaderTop from "../components/HeaderTop";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FilterBar from "./components/FilterBar";
import FeatureStrip from "./components/FeatureStrip";
import CardSection from "./components/CardSection";
import CtaBand from "./components/CtaBand";
import SpecialtyExplorer from "./components/SpecialtyExplorer";
import BlogInteractions from "./components/BlogInteractions";

export const metadata: Metadata = {
  title: "Health Insights | SRM Global Hospitals",
  description:
    "Articles written by SRM Global Hospitals doctors — practical, evidence-based guidance across every specialty.",
};

export default function BlogListing() {
  return (
    <>
      <HeaderTop />
      <SiteHeader />
      <FilterBar />
      <div className="container blog-content">
        <FeatureStrip />
        <CardSection />
        <CtaBand />
      </div>
      <SpecialtyExplorer />
      <SiteFooter />
      <BlogInteractions />
    </>
  );
}
