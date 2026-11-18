# Project notes for coding agents

## Application structure

- Keep brand content, client lists and client-side input schemas in `src/lib/site-content.ts`.
- Shared layout lives in `src/components/`: the header, footer and WhatsApp button
  (`site-shell.tsx`), page sections (`page-layout.tsx`), responsive images (`site-image.tsx`)
  and the enquiry form (`enquiry-form.tsx`).
- This is a Next.js App Router project. Each public page is `src/app/<route>/page.tsx`, exports
  `metadata` built with `pageMetadata()` from `src/lib/seo.ts`, and renders its JSON-LD with
  `<JsonLd />`, so titles, descriptions, canonical URLs and structured data stay unique.
- Keep pages as server components. Put interactivity in small `"use client"` components
  (header, enquiry form, portfolio gallery, carousel rail).

## Content rules

- Use only real Narayan material: photos and client logos from narayanevents.com, services and
  facts from their website and social profiles. Do not invent contact details, testimonials
  or clients.
- Photos live in `public/images/` as `<name>-800.webp` and `<name>-1600.webp`; render them
  with `<SiteImage name="..." />`.
