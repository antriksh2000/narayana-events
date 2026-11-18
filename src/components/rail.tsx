"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionBar } from "@/components/section-bar";

/** Section title plus a horizontal scroll-snap carousel with arrow buttons. */
export function Rail({
  id,
  title,
  link,
  className = "",
  children,
}: {
  id: string;
  title: string;
  link?: { label: string; href: string };
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const frame = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scroll = (direction: 1 | -1) =>
    ref.current?.scrollBy({ left: direction * ref.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <>
      <SectionBar
        id={id}
        title={title}
        {...(link ? { link } : {})}
        controls={
          <div className="flex gap-2">
            <button
              type="button"
              className="round-btn"
              aria-label="Previous"
              disabled={edges.start}
              onClick={() => scroll(-1)}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="round-btn"
              aria-label="Next"
              disabled={edges.end}
              onClick={() => scroll(1)}
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        }
      />
      <div ref={ref} className={`rail ${className}`}>
        {children}
      </div>
    </>
  );
}
