import type { ReactNode } from "react";
import { Check, Mail, MapPin, MessageCircle } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteFooter, SiteHeader, WhatsAppButton } from "@/components/site-shell";
import { SiteImage } from "@/components/site-image";
import { brand, whatsappUrl } from "@/lib/site-content";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-[70] bg-charcoal px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

/** Inner-page hero: dark gradient with a faint photo, editorial serif headline. */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  alt,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  image: string;
  alt: string;
  aside?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <SiteImage
        name={image}
        alt={alt}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="site-container relative grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow rise">{eyebrow}</p>
          <h1 className="display-xl rise rise-1 mt-5">{title}</h1>
          {lede && <p className="hero__lede rise rise-2 mt-6">{lede}</p>}
        </div>
        {aside && <div className="rise rise-3 border-l border-white/20 pl-8">{aside}</div>}
      </div>
    </section>
  );
}

export function CheckList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`check-list space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-lg mt-4">{title}</h2>
      {lede && <p className="lede mt-5">{lede}</p>}
    </div>
  );
}

/** Accent band with the enquiry form in a white card. */
export function ClosingCta({
  title = "Tell us about your event.",
  text = "Share a few details and our team will come back with ideas, a plan and a clear proposal.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="band-accent section" aria-labelledby="enquiry-title">
      <div className="site-container grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div className="reveal">
          <p className="eyebrow text-white/70">Plan your event</p>
          <h2 id="enquiry-title" className="display-lg mt-4">
            {title}
          </h2>
          <p className="mt-5 max-w-sm text-[0.9rem] leading-7 text-white/75">{text}</p>
          <p className="eyebrow mt-12 text-white/60">Prefer to talk?</p>
          <ul className="mt-4 space-y-3 text-[0.85rem] text-white/85">
            <li className="flex items-center gap-3">
              <Mail className="size-4" aria-hidden="true" />
              <a href={`mailto:${brand.email}`} className="hover:underline">
                {brand.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="size-4" aria-hidden="true" />
              <a
                href={whatsappUrl(`Hello ${brand.shortName}, I'd like to plan an event.`)}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Message us on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4" aria-hidden="true" />
              {brand.location} · Serving clients across India
            </li>
          </ul>
        </div>
        <div className="reveal rounded-[var(--radius)] bg-white p-6 text-charcoal shadow-2xl sm:p-8">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
