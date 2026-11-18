"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/** next/link that sets data-status="active" on the current page (styled by .nav-link). */
export function NavLink({ href, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0] ?? href);
  const isHash = href.includes("#");
  return <Link href={href} data-status={active && !isHash ? "active" : undefined} {...props} />;
}
