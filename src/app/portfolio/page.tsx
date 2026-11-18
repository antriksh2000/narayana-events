import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ClosingCta, PageHero, PageLayout } from "@/components/page-layout";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/portfolio",
  title: "Event Portfolio | Stages, Launches & Exhibitions by Narayan Events",
  description:
    "Browse event stages, product launches, conferences, exhibition stalls and outdoor events designed and delivered by Narayan Events Management across India.",
});

export default function Portfolio() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbJsonLd("Portfolio", "/portfolio")]} />
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Moments we have <span className="serif-italic text-gold">brought to life.</span>
          </>
        }
        lede="A selection of stages, launches, conferences and exhibitions from our recent work."
        image="crompton-launch-stage"
        alt="A product launch stage beneath crystal chandeliers."
      />

      <PortfolioGallery />

      <ClosingCta />
    </PageLayout>
  );
}
