import type { Metadata } from "next";
import { brand, services } from "@/lib/site-content";

const ogImage = "/images/og-narayan-events.jpg";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${brand.siteUrl}/#organization`,
  name: brand.name,
  alternateName: brand.shortName,
  url: brand.siteUrl,
  logo: `${brand.siteUrl}/images/narayan-logo.png`,
  image: `${brand.siteUrl}${ogImage}`,
  email: brand.email,
  description:
    "Delhi-based event management and brand activation company delivering corporate events, launches, BTL activations, exhibitions and awards across India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [brand.instagram, brand.facebook, brand.linkedin],
  knowsAbout: services.map((service) => service.title),
};

export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      serviceType: service.title,
      url: `${brand.siteUrl}/services#${service.slug}`,
      provider: { "@id": `${brand.siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
    },
  })),
};

type PageSeo = {
  path: string;
  title: string;
  description: string;
};

/** Unique title, description, canonical URL and social tags for a page. */
export function pageMetadata({ path, title, description }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [{ url: ogImage, width: 1200, height: 630, alt: brand.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: brand.siteUrl },
      { "@type": "ListItem", position: 2, name, item: `${brand.siteUrl}${path}` },
    ],
  };
}
