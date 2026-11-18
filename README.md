# Narayan Events Management

Website for [Narayan Events Management](https://www.narayanevents.com), a Delhi-based
event management and brand activation company delivering corporate events, launches,
activations, exhibitions and award nights across India.

Built with [Next.js 16](https://nextjs.org) (App Router, statically prerendered pages),
Tailwind CSS v4 and TypeScript.

## Getting started

Requires Node.js 22.18 or newer.

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

| Command             | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Start the dev server with hot reload              |
| `npm run build`     | Build the production site to `.next/`             |
| `npm start`         | Serve the production build                        |
| `npm run lint`      | Lint with ESLint (Next.js rules) and Prettier     |
| `npm run typecheck` | Type-check with TypeScript                        |
| `npm test`          | Run the content and routing tests (`node --test`) |

## Pages

| Route        | File                         |
| ------------ | ---------------------------- |
| `/`          | `src/app/page.tsx`           |
| `/about`     | `src/app/about/page.tsx`     |
| `/services`  | `src/app/services/page.tsx`  |
| `/portfolio` | `src/app/portfolio/page.tsx` |
| `/contact`   | `src/app/contact/page.tsx`   |

Brand facts, services, portfolio items and client logos are all in
`src/lib/site-content.ts`.

## Configuration

- **WhatsApp:** set `whatsappNumber` in `src/lib/site-content.ts` (international format,
  digits only, e.g. `919810000000`). Until it is set, WhatsApp buttons open WhatsApp without
  a recipient.
- **Analytics (optional):** set `NEXT_PUBLIC_GA_MEASUREMENT_ID` for Google Analytics and
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` for Search Console in a `.env.local` file.

## Deployment

Deploy to [Vercel](https://vercel.com/new) by importing the GitHub repository; no
configuration is needed. On any other host, run `npm run build` and `npm start`.

## SEO

Every page sets a unique title, description, canonical URL, Open Graph tags and JSON-LD
(Organization / LocalBusiness, Service and BreadcrumbList). `public/sitemap.xml` and
`public/robots.txt` point at https://www.narayanevents.com.
