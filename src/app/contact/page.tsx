import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero, PageLayout } from "@/components/page-layout";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { brand, whatsappUrl } from "@/lib/site-content";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact Us | Plan Your Event with Narayan Events Management",
  description:
    "Plan your corporate event, launch, activation or exhibition with Narayan Events Management in Delhi. Send an enquiry, message us on WhatsApp or email our team.",
});

export default function Contact() {
  return (
    <PageLayout>
      <JsonLd data={[breadcrumbJsonLd("Contact", "/contact")]} />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s plan <span className="serif-italic text-gold">your event.</span>
          </>
        }
        lede="Share a few details and our team will come back to you with ideas, timelines and next steps."
        image="outdoor-evening-stage"
        alt="A red carpet leading to an outdoor stage at dusk."
      />

      <section className="section">
        <div className="site-container grid gap-20 lg:grid-cols-[1.5fr_1fr] lg:gap-28">
          <div className="reveal">
            <p className="eyebrow">Enquiry</p>
            <h2 className="display-md mt-5">Tell us about the occasion.</h2>
            <div className="mt-12">
              <EnquiryForm />
            </div>
          </div>

          <aside className="reveal space-y-12 lg:pt-4" aria-label="Contact details">
            <div className="bg-charcoal p-8 text-ivory sm:p-10">
              <p className="eyebrow text-gold">Prefer to chat?</p>
              <h2 className="display-sm mt-5">Message us on WhatsApp</h2>
              <p className="mt-4 text-sm leading-7 font-light text-ivory/70">
                Send a quick note about your event and we&rsquo;ll pick it up from there.
              </p>
              <a
                href={whatsappUrl(`Hello ${brand.shortName}, I'd like to plan an event.`)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold mt-8 w-full"
              >
                <MessageCircle aria-hidden="true" /> WhatsApp enquiry
              </a>
            </div>

            <ul className="space-y-8">
              <li className="flex gap-5">
                <Mail className="mt-1 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
                <div>
                  <h3 className="field-label mb-1">Email</h3>
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-lg transition-colors hover:text-gold-deep"
                  >
                    {brand.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-5">
                <MapPin className="mt-1 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
                <div>
                  <h3 className="field-label mb-1">Studio</h3>
                  <p className="text-lg">{brand.location}</p>
                  <p className="text-sm text-muted-foreground">Serving clients across India</p>
                </div>
              </li>
            </ul>

            <div className="hairline pt-8">
              <h3 className="field-label mb-4">Follow our work</h3>
              <ul className="space-y-3">
                {[
                  ["Instagram", brand.instagram],
                  ["Facebook", brand.facebook],
                  ["LinkedIn", brand.linkedin],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-b border-border pb-3 text-lg transition-colors hover:text-gold-deep"
                    >
                      {label}
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
