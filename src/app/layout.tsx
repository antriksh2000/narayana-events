import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { brand } from "@/lib/site-content";
import "./globals.css";

// Analytics readiness: set these public IDs in the environment to enable them.
const gaMeasurementId = process.env["NEXT_PUBLIC_GA_MEASUREMENT_ID"];
const searchConsoleToken = process.env["NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"];

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: "Narayan Events Management | Corporate Event Management Company in Delhi",
  description:
    "Corporate events, launches, brand activations and exhibitions, designed and delivered by Narayan Events Management from Delhi across India.",
  openGraph: { siteName: brand.name, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/favicon-48.png", type: "image/png", sizes: "48x48" }],
    apple: "/apple-touch-icon.png",
  },
  ...(searchConsoleToken ? { verification: { google: searchConsoleToken } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
