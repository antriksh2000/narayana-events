"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import {
  ArrowRight,
  ChevronRight,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PenLine,
  X,
} from "lucide-react";
import { brand, navigation, services, whatsappUrl } from "@/lib/site-content";

const greeting = `Hello ${brand.shortName}, I'd like to plan an event.`;

const menu = [
  { label: "Corporate Events", to: "/services", hash: "corporate-events" },
  { label: "Launches", to: "/services", hash: "launches" },
  { label: "Activations", to: "/services", hash: "brand-activations" },
  { label: "Exhibitions", to: "/services", hash: "exhibitions" },
  { label: "Awards", to: "/services", hash: "awards" },
  { label: "Outdoor", to: "/services", hash: "sports-events" },
] as const;

/** Brand logo, transparent and tightly cropped (public/images/narayan-logo.png). */
function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/narayan-logo.png"
      alt={`${brand.name}, Turning Ideas into Action`}
      width={660}
      height={378}
      className={`object-contain ${className}`}
    />
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Utility bar */}
      <div className="utility-bar hidden md:block">
        <div className="site-container-wide flex h-8 items-center justify-between">
          <ul className="flex items-center divide-x divide-black/15">
            <li className="pr-4">Delhi · Pan-India execution</li>
            <li className="px-4">Design · Fabrication · On-ground management</li>
            <li className="pl-4">1,200+ events delivered</li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <a href={`mailto:${brand.email}`} className="hover:underline">
                {brand.email}
              </a>
            </li>
            <li>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href={brand.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Promo bar */}
      <div className="promo-bar">
        <div className="flex h-8 items-center justify-center gap-3 px-4 text-center">
          <span className="truncate">Planning a launch, conference or exhibition this season?</span>
          <Link href="/contact" className="shrink-0 font-semibold underline underline-offset-4">
            Get a proposal
          </Link>
        </div>
      </div>

      <header className="site-header" data-scrolled={scrolled}>
        <div className="site-container-wide grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-1.5">
          <div className="flex items-center">
            <button
              type="button"
              className="icon-btn -ml-2 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
            <Link
              href="/contact"
              className="hidden h-9 w-full max-w-[18rem] items-center gap-2.5 rounded-[var(--radius)] border border-border px-3 text-[0.8rem] text-muted-foreground transition-colors hover:border-charcoal hover:text-charcoal lg:flex"
            >
              <PenLine className="size-3.5" aria-hidden="true" />
              Tell us about your event…
            </Link>
          </div>

          <Link href="/" aria-label={`${brand.name}, home`} className="header-logo">
            <Logo className="h-full w-auto" />
          </Link>

          <div className="flex items-center justify-end gap-1.5">
            <Link
              href="/contact"
              className="mr-2 hidden h-9 items-center gap-2 rounded-[var(--radius)] bg-charcoal px-3.5 text-[0.75rem] font-medium text-white transition-colors hover:bg-black sm:inline-flex"
            >
              <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
              Plan your event
            </Link>
            <a
              href={whatsappUrl(greeting)}
              target="_blank"
              rel="noreferrer"
              aria-label="Enquire on WhatsApp"
              className="icon-btn"
            >
              <MessageCircle className="size-[1.1rem]" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${brand.email}`}
              aria-label="Email us"
              className="icon-btn hidden sm:flex"
            >
              <Mail className="size-[1.1rem]" aria-hidden="true" />
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="icon-btn hidden sm:flex"
            >
              <Instagram className="size-[1.1rem]" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Primary" className="hidden border-t border-border lg:block">
          <ul className="site-container-wide flex items-center justify-center gap-4 whitespace-nowrap xl:gap-7">
            <li>
              <NavLink href="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" className="nav-link">
                About
              </NavLink>
            </li>
            {menu.map((item) => (
              <li key={item.hash}>
                <NavLink href={`${item.to}#${item.hash}`} className="nav-link">
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                href="/portfolio"
                className="my-1.5 inline-flex items-center gap-2 rounded-[var(--radius)] bg-charcoal px-2.5 py-1.5 text-[0.7rem] font-medium tracking-[0.06em] text-white uppercase"
              >
                <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
                Portfolio
              </Link>
            </li>
            <li>
              <NavLink href="/contact" className="nav-link nav-link--accent">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="mobile-menu lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-2">
            <Logo className="h-14 w-auto" />
            <button
              type="button"
              className="icon-btn"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="px-5 pt-2 pb-10">
            {[{ label: "Home", to: "/" as const }, ...navigation].map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className="mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
                <ChevronRight className="size-4" aria-hidden="true" />
              </Link>
            ))}
            <p className="eyebrow mt-8">Services</p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="block h-full rounded-[var(--radius)] border border-border px-3 py-3 text-[0.8rem] leading-snug"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-dark mt-8 w-full"
            >
              Plan your event <ArrowRight aria-hidden="true" />
            </Link>
            <a
              href={whatsappUrl(greeting)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline mt-3 w-full"
            >
              <MessageCircle aria-hidden="true" /> WhatsApp us
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="band-dark">
      <div className="site-container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1fr]">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="section-label mb-5 text-[0.85rem]">Company</h2>
            <ul className="space-y-2.5 text-[0.82rem]">
              <li>
                <Link className="footer-link" href="/">
                  Home
                </Link>
              </li>
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link className="footer-link" href={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-label mb-5 text-[0.85rem]">Find us on</h2>
            <ul className="space-y-2.5 text-[0.82rem]">
              <li>
                <a className="footer-link" href={brand.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="footer-link" href={brand.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a className="footer-link" href={brand.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="section-label mb-5 text-[0.85rem]">About</h2>
          <p className="max-w-md text-[0.82rem] leading-7 text-white/75">
            {brand.name} is a Delhi-based event management and brand activation company. We design,
            build and run corporate events, launches, activations and exhibitions for brands across
            India.
          </p>
          <h2 className="section-label mt-8 mb-4 text-[0.85rem]">Services</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[0.82rem]">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="footer-link" href={`/services#${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link
            href="/"
            aria-label={`${brand.name}, home`}
            className="inline-block rounded-[var(--radius)] bg-white px-5 py-4"
          >
            <Logo className="h-20 w-auto" />
          </Link>
          <ul className="mt-6 space-y-3 text-[0.82rem]">
            <li className="flex gap-3 text-white/75">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {brand.location} · Serving clients across India
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-white/75" aria-hidden="true" />
              <a className="footer-link" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container-wide flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>
            © {year} {brand.name}. All rights reserved.
          </span>
          <span>Turning Ideas into Action</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl(greeting)}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire on WhatsApp"
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
