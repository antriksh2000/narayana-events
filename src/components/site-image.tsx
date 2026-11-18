import { imageSet } from "@/lib/site-content";

type Props = {
  name: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/** Optimised WebP from public/images (800w and 1600w), lazy by default. */
export function SiteImage({ name, alt, sizes = "100vw", priority = false, className }: Props) {
  const { src, srcSet } = imageSet(name);
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={1600}
      height={1200}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
