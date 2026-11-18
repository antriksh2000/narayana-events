import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Megaphone,
  Presentation,
  Rocket,
  Store,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { CheckList, ClosingCta, PageLayout } from "@/components/page-layout";
import { Rail } from "@/components/rail";
import { SectionBar } from "@/components/section-bar";
import { SiteImage } from "@/components/site-image";
import { organizationJsonLd, pageMetadata } from "@/lib/seo";
import {
  brand,
  clients,
  portfolioItems,
  process,
  reasons,
  services,
  stats,
  testimonials,
} from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: "Narayan Events Management | Corporate Event Management Company in Delhi",
  description:
    "Narayan Events Management designs and delivers corporate events, product launches, brand activations, exhibition stalls and award nights from Delhi to venues across India.",
});

const serviceIcons: Record<(typeof services)[number]["slug"], LucideIcon> = {
  "corporate-events": Presentation,
  launches: Rocket,
  "brand-activations": Megaphone,
  exhibitions: Store,
  awards: Award,
  "sports-events": Trophy,
};

export default function Home() {
  return (
    <PageLayout>
      <JsonLd data={[organizationJsonLd]} />
      <Hero />
      <Stats />
      <Clients />
      <Services />
      <WhyBand />
      <InHouse />
      <SelectedWork />
      <Process />
      <ClosingCta />
    </PageLayout>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <SiteImage name="metso-led-stage" alt="" priority className="hero__photo" />
      <div className="site-container relative grid gap-12 py-24 sm:py-28 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:py-32">
        <div>
          <p className="eyebrow rise">Event management · Delhi &amp; Pan India</p>
          <h1 id="hero-title" className="display-xl rise rise-1 mt-6">
            We create moments that last forever.
          </h1>
          <p className="hero__lede rise rise-2 mt-6">
            {brand.name} designs and delivers corporate events, launches, brand activations and
            exhibitions. Concept, fabrication and on-ground execution, handled by one team.
          </p>
          <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-gold">
              Plan your event <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/portfolio" className="btn btn-outline-light">
              Explore our events
            </Link>
          </div>
        </div>
        <div className="rise rise-4 border-white/20 lg:border-l lg:pl-10">
          <p className="font-display text-[1.75rem] leading-tight">#TurningIdeasIntoAction</p>
          <CheckList
            className="mt-6 text-[0.85rem] text-white/80"
            items={[
              "Corporate events · Conferences & galas",
              "Launches · Product & plant inaugurations",
              "Exhibitions · Stall design & build",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Narayan in numbers" className="border-b border-border">
      <dl className="site-container-wide grid grid-cols-2 lg:grid-cols-4">
        {[...stats, { value: "Pan India", label: "Event execution from our Delhi base" }].map(
          (stat, index) => (
            <div
              key={stat.label}
              className={`px-6 py-9 sm:px-10 ${index % 2 === 1 ? "border-l" : ""} ${
                index > 1 ? "border-t lg:border-t-0" : ""
              } ${index === 2 ? "lg:border-l" : ""} border-border`}
            >
              <dd className="font-display text-[2.6rem] leading-none">{stat.value}</dd>
              <dt className="mt-3 text-[0.8rem] text-muted-foreground">{stat.label}</dt>
            </div>
          ),
        )}
      </dl>
    </section>
  );
}

function Clients() {
  return (
    <section className="section-tight" aria-labelledby="clients-title">
      <div className="site-container">
        <SectionBar
          id="clients-title"
          title="Brands that trust Narayan"
          link={{ label: "See our work", href: "/portfolio" }}
        />
        <ul className="grid grid-cols-3 border-y border-border sm:grid-cols-5">
          {clients.map((client) => (
            <li
              key={client.logo}
              className="client-cell flex h-20 min-w-0 items-center justify-center px-3 sm:h-24 sm:px-4"
              title={client.name}
            >
              <img
                src={`/images/clients/${client.logo}.webp`}
                alt={client.name}
                loading="lazy"
                className="client-logo"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section bg-champagne-soft" aria-labelledby="services-title">
      <div className="site-container">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 id="services-title" className="display-lg mt-4">
            Six formats. One standard of execution.
          </h2>
        </div>
        <ul className="mt-12 grid border-t border-l border-border bg-white sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug];
            return (
              <li key={service.slug} className="border-r border-b border-border">
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-champagne-soft sm:p-8"
                >
                  <Icon className="size-5 text-indigo" aria-hidden="true" />
                  <span className="mt-6 font-display text-[1.35rem] leading-tight">
                    {service.title}
                  </span>
                  <span className="mt-3 text-[0.82rem] leading-6 text-muted-foreground">
                    {service.short}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    Learn more <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function WhyBand() {
  return (
    <section className="band-dark section" aria-labelledby="why-title">
      <div className="site-container-wide grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">Why Narayan</p>
          <h2 id="why-title" className="display-lg mt-4">
            Calm hands for important moments.
          </h2>
        </div>
        <div className="grid gap-x-12 gap-y-10 border-t border-white/15 pt-10 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="reveal">
              <h3 className="font-sans text-[0.95rem] font-semibold">{reason.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-6 text-white/65">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InHouse() {
  return (
    <section className="section" aria-labelledby="inhouse-title">
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
        <div className="reveal">
          <p className="eyebrow">Design to delivery</p>
          <h2 id="inhouse-title" className="display-lg mt-4">
            Every detail, in one place.
          </h2>
          <p className="lede mt-5">
            One accountable team from the first sketch to the final bow, so nothing gets lost
            between vendors.
          </p>
          <CheckList
            className="mt-7 text-[0.85rem]"
            items={[
              "Concept, 3D visuals and stage design",
              "Fabrication, printing and indoor & outdoor branding",
              "LED, sound, lighting and AV production",
              "Guest flow, show cueing and vendor management",
              "On-ground crew from build to breakdown",
            ]}
          />
        </div>
        <div className="reveal">
          <figure>
            <div className="img-frame aspect-[16/10] rounded-[var(--radius)]">
              <SiteImage
                name="crompton-launch-stage"
                alt="A product launch stage beneath crystal chandeliers, designed and built by Narayan Events."
                sizes="(min-width: 1024px) 38rem, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Crompton product launch. Stage, branding and show run by Narayan.
            </figcaption>
          </figure>
          <p className="hairline mt-6 pt-5 text-[0.82rem] text-muted-foreground">
            Want to see more of our work?{" "}
            <Link href="/portfolio" className="text-link ml-1 text-charcoal">
              View the portfolio <ArrowRight aria-hidden="true" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  const order = [
    "metso-led-stage",
    "scoda-exhibition-stall",
    "outdoor-evening-stage",
    "iifl-led-stage",
    "venus-exhibition-stall",
    "corporate-gala-dinner",
    "plant-inauguration-ceremony",
    "adra-exhibition-stall",
  ];
  const picks = order.flatMap((name) => portfolioItems.filter((item) => item.image === name));
  return (
    <section className="section" aria-labelledby="work-title">
      <div className="site-container">
        <Rail
          id="work-title"
          title="Selected work"
          link={{ label: "View all", href: "/portfolio" }}
          className="rail--3"
        >
          {picks.map((item) => (
            <Link key={item.image} href="/portfolio" className="group block">
              <span className="img-frame block aspect-[4/5] rounded-[var(--radius)]">
                <SiteImage
                  name={item.image}
                  alt={item.alt}
                  sizes="(min-width: 768px) 23rem, 78vw"
                />
              </span>
              <span className="mt-3 flex items-baseline justify-between gap-3">
                <span className="font-display text-[1.1rem]">{item.title}</span>
                <span className="shrink-0 text-[0.72rem] text-muted-foreground">
                  {item.category}
                </span>
              </span>
            </Link>
          ))}
        </Rail>
      </div>
    </section>
  );
}

function Process() {
  const testimonial = testimonials[0];
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="site-container">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 id="process-title" className="display-lg mt-4">
            From first call to the final bow.
          </h2>
        </div>
        <ol className="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <li
              key={item.step}
              className={`reveal py-8 sm:px-6 ${index === 0 ? "sm:pl-0" : ""} ${
                index > 0 ? "lg:border-l" : ""
              } ${index % 2 === 1 ? "sm:border-l" : ""} border-border`}
            >
              <span className="numeral">{item.step}</span>
              <h3 className="mt-3 text-[1.6rem]">{item.title}</h3>
              <p className="mt-3 text-[0.82rem] leading-6 text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>

        <figure className="reveal mt-10 grid gap-6 border-t border-border pt-10 md:grid-cols-[auto_1fr] md:items-start md:gap-10">
          <span className="eyebrow">Client voice</span>
          <div>
            <blockquote className="font-display text-[1.6rem] leading-snug italic sm:text-[1.9rem]">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-4 text-[0.82rem] text-muted-foreground">
              <span className="font-semibold text-charcoal">{testimonial.name}</span> ·{" "}
              {testimonial.role}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
