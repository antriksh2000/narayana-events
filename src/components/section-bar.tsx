import Link from "next/link";
import type { ReactNode } from "react";

/** Small uppercase section title with an optional link and controls. */
export function SectionBar({
  title,
  link,
  controls,
  id,
}: {
  title: string;
  link?: { label: string; href: string };
  controls?: ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-6">
      <h2 id={id} className="eyebrow">
        {title}
      </h2>
      <div className="flex shrink-0 items-center gap-5">
        {link && (
          <Link href={link.href} className="text-link">
            {link.label}
          </Link>
        )}
        {controls}
      </div>
    </div>
  );
}
