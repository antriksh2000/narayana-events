import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClosingCta, PageHero, PageLayout, SectionHeading } from "@/components/page-layout";
import { SiteImage } from "@/components/site-image";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { process, stats } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About Us | Narayan Events Management, Delhi",
  description:
    "Meet Narayan Events Management: a Delhi-based team that designs, builds and runs corporate events, launches and brand activations for brands across India.",
});

const values = [
  {
    title: "Creativity with purpose",
    text: "Every concept starts from your objective, then finds the form, light and flow that bring it to life.",
  },
  {
    title: "Precision in execution",
    text: "Detailed run sheets, rehearsed cues and a crew that checks everything twice.",
  },
  {
    title: "Partnership you can trust",
    text: "Clear budgets, honest timelines and one team accountable from first call to final breakdown.",
  },
];

export default function About() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbJsonLd("About", "/about")]} />
      <PageHero
        eyebrow="About us"
        title={
          <>
            The people behind <span className="serif-italic text-gold">the moment.</span>
          </>
        }
        lede="A Delhi-based event management and brand activation company, delivering for brands across India."
        image="plant-inauguration-ceremony"
        alt="Guests gathered at a plant inauguration ceremony managed by Narayan Events."
      />

      <section className="section" aria-labelledby="story-title">
        <div className="site-container grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="reveal">
            <p className="eyebrow">Our story</p>
            <h2 id="story-title" className="display-lg mt-6">
              Built on detail, <span className="serif-italic">driven</span> by craft.
            </h2>
          </div>
          <div className="reveal space-y-6 text-[1.05rem] leading-8 font-light text-muted-foreground">
            <p>
              Narayan Events Management is a full-service event management and brand activation
              company based in Delhi. We specialise in corporate events, both ATL and BTL, with
              complete indoor and outdoor branding solutions.
            </p>
            <p>
              Over the years we have staged product launches beneath chandeliers, inaugurated
              factories, built exhibition stalls for global brands and run award nights for hundreds
              of guests. What connects every project is the same quiet attention to detail.
            </p>
            <p>
              Concept, design, fabrication and on-ground management all sit with one in-house team.
              That means fewer handovers, clearer communication, and an event that looks exactly the
              way it was promised.
            </p>
          </div>
        </div>

        <div className="site-container mt-24 grid gap-5 sm:grid-cols-[1.4fr_1fr]">
          <div className="reveal img-frame aspect-[16/10]">
            <SiteImage
              name="metso-led-stage"
              alt="An LED stage reflected on a marble floor."
              sizes="(min-width: 640px) 58vw, 100vw"
            />
          </div>
          <div className="reveal img-frame aspect-[16/10] sm:aspect-auto">
            <SiteImage
              name="venus-exhibition-stall"
              alt="A double-height exhibition stall designed and built by Narayan Events."
              sizes="(min-width: 640px) 40vw, 100vw"
            />
          </div>
        </div>

        <dl className="site-container mt-20 grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-6xl">{stat.value}</dd>
              <dd className="mt-3 text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section bg-champagne-soft" aria-labelledby="approach-title">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our approach"
            title={
              <span id="approach-title">
                From brief to <span className="serif-italic">applause</span>.
              </span>
            }
            lede="A clear, four-step process that keeps you informed and in control, without carrying the weight of the details."
          />
          <ol className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <li key={item.step} className="reveal bg-champagne-soft p-8 lg:p-10">
                <span className="numeral">{item.step}</span>
                <h3 className="display-sm mt-6">{item.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-7 font-light text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="site-container">
          <SectionHeading
            align="center"
            eyebrow="What we value"
            title={<span id="values-title">How we work.</span>}
          />
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="reveal border-t border-gold pt-8 text-center">
                <h3 className="display-sm">{value.title}</h3>
                <p className="mx-auto mt-4 max-w-xs text-[0.95rem] leading-7 font-light text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/services" className="text-link">
              Explore our services <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ClosingCta />
    </PageLayout>
  );
}
