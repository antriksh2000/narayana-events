"use client";

import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiteImage } from "@/components/site-image";
import { portfolioCategories, portfolioItems, type PortfolioCategory } from "@/lib/site-content";

type Filter = "All" | PortfolioCategory;
const filters: Filter[] = ["All", ...portfolioCategories];

/** Filterable photo gallery with a full-screen lightbox. */
export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<number | null>(null);

  const visible =
    filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);
  const current = active === null ? null : visible[active];

  const step = (direction: 1 | -1) =>
    setActive((index) =>
      index === null ? null : (index + direction + visible.length) % visible.length,
    );

  return (
    <>
      <section className="section" aria-label="Event gallery">
        <div className="site-container">
          <div
            role="group"
            aria-label="Filter by category"
            className="flex flex-wrap justify-center gap-x-10 gap-y-3 border-b border-border pb-6"
          >
            {filters.map((name) => (
              <button
                key={name}
                type="button"
                className="filter-btn"
                aria-pressed={filter === name}
                onClick={() => {
                  setFilter(name);
                  setActive(null);
                }}
              >
                {name}
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            Showing {visible.length} {filter === "All" ? "" : filter} events
          </p>

          <ul className="gallery mt-14">
            {visible.map((item, index) => (
              <li key={item.image} className="gallery__item">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className="group block w-full text-left"
                  aria-label={`View larger: ${item.title}`}
                >
                  <span
                    className={`img-frame img-hover block ${index % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                  >
                    <SiteImage
                      name={item.image}
                      alt={item.alt}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </span>
                  <span className="mt-4 flex items-baseline justify-between gap-4">
                    <span className="font-display text-xl">{item.title}</span>
                    <span className="text-[0.64rem] tracking-[0.22em] text-gold-deep uppercase">
                      {item.category}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DialogPrimitive.Root
        open={current !== null && current !== undefined}
        onOpenChange={(open) => !open && setActive(null)}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-charcoal/95" />
          <DialogPrimitive.Content
            className="data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 flex flex-col items-center justify-center p-4 text-ivory outline-none sm:p-12"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") step(1);
              if (event.key === "ArrowLeft") step(-1);
            }}
          >
            {current && (
              <>
                <figure className="flex max-h-full w-full max-w-6xl flex-col items-center">
                  <img
                    src={`/images/${current.image}-1600.webp`}
                    alt={current.alt}
                    className="max-h-[78vh] w-auto object-contain"
                  />
                  <figcaption className="mt-5 text-center">
                    <DialogPrimitive.Title className="font-display text-2xl">
                      {current.title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="mt-1 text-[0.66rem] tracking-[0.24em] text-gold uppercase">
                      {current.category}
                    </DialogPrimitive.Description>
                  </figcaption>
                </figure>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="absolute top-1/2 left-2 flex size-12 -translate-y-1/2 items-center justify-center text-ivory/70 hover:text-gold sm:left-6"
                >
                  <ChevronLeft className="size-7" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="absolute top-1/2 right-2 flex size-12 -translate-y-1/2 items-center justify-center text-ivory/70 hover:text-gold sm:right-6"
                >
                  <ChevronRight className="size-7" aria-hidden="true" />
                </button>
                <DialogPrimitive.Close
                  aria-label="Close"
                  className="absolute top-4 right-4 flex size-12 items-center justify-center text-ivory/70 hover:text-gold sm:top-8 sm:right-8"
                >
                  <X className="size-6" aria-hidden="true" />
                </DialogPrimitive.Close>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
