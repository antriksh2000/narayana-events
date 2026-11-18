import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClosingCta, PageHero, PageLayout } from "@/components/page-layout";
import { SiteImage } from "@/components/site-image";
import { breadcrumbJsonLd, pageMetadata, servicesJsonLd } from "@/lib/seo";
import { services } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Event Management Services in Delhi | Narayan Events Management",
  description:
    "Corporate events and conferences, product launches, BTL brand activations, exhibition stalls, award nights and outdoor events, planned and delivered across India.",
});

export default function Services() {
  return (
    <PageLayout>
      <JsonLd data={[servicesJsonLd, breadcrumbJsonLd("Services", "/services")]} />
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Every format, <span className="serif-italic text-gold">one standard.</span>
          </>
        }
        lede="From boardroom summits to trade-show floors, each service is designed, produced and run by our own team."
        image="iifl-led-stage"
        alt="A wide LED stage with beam lights, set by Narayan Events for an awards evening."
      />

      <nav aria-label="Services" className="hairline border-b border-border">
        <ul className="site-container flex gap-8 overflow-x-auto py-5 text-[0.7rem] tracking-[0.2em] whitespace-nowrap uppercase">
          {services.map((service) => (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="text-muted-foreground transition-colors hover:text-charcoal"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="section space-y-28 sm:space-y-36">
        {services.map((service, index) => {
          const flip = index % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-title`}
              className="site-container grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-24"
            >
              <div className={`reveal ${flip ? "lg:order-2" : ""}`}>
                <div className="img-frame img-hover aspect-[4/3]">
                  <SiteImage
                    name={service.image}
                    alt={service.alt}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
              <div className="reveal">
                <span className="numeral text-lg">{service.number}</span>
                <h2 id={`${service.slug}-title`} className="display-md mt-4">
                  {service.title}
                </h2>
                <p className="lede mt-6">{service.description}</p>
                <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-8">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-charcoal">
                      <span className="size-1 rounded-full bg-gold-deep" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="text-link mt-10">
                  Enquire about this service <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </section>
          );
        })}
      </div>

      <ClosingCta
        title="Have something else in mind?"
        text="Most of our projects combine several of these services. Share your brief and we'll shape a plan around it."
      />
    </PageLayout>
  );
}
