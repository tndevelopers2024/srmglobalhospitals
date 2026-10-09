import { createMetadata } from "@/lib/seo";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";
import { PressReleaseClient } from "@/components/press-release";

export const metadata = createMetadata({
  title: "Press Releases",
  description:
    "Official press releases, clinical milestones, and healthcare announcements from SRM Global Hospitals.",
  path: "/press-release",
});

export default function PressReleasePage() {
  return (
    <>
      <HeaderTop />
      <SiteHeader />
      <main id="main-content" style={{ background: "#fdf9f5", minHeight: "80vh" }}>
        <PressReleaseClient />
      </main>
      <SiteFooter />
    </>
  );
}
