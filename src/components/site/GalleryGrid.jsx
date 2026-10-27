import { useCallback, useEffect, useState } from "react";
import SafeImage from "./SafeImage";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";

export function Lightbox({ items, index, onClose, onIndex }) {
  const item = items[index];
  const prev = useCallback(() => onIndex((index - 1 + items.length) % items.length), [index, items.length, onIndex]);
  const next = useCallback(() => onIndex((index + 1) % items.length), [index, items.length, onIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  if (!item) return null;
  const navBtn =
    "absolute top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-card/90 text-primary hover:bg-card";

  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} className="fixed inset-0 z-50 flex items-center justify-center bg-scrim p-4" onClick={onClose}>
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <SafeImage src={item.image} alt={item.alt} className="max-h-[75vh] w-full rounded-md object-contain" />
        <div className="mt-3 flex items-start justify-between gap-4 text-primary-foreground">
          <div>
            <p className="font-display text-lg">{item.title}</p>
            <p className="text-sm text-primary-foreground/80">{item.caption}</p>
          </div>
          <p className="shrink-0 text-sm text-primary-foreground/70">
            {index + 1} / {items.length}
          </p>
        </div>
        {items.length > 1 && (
          <>
            <button type="button" aria-label="Previous image" onClick={prev} className={`${navBtn} left-2`}>
              <ChevronLeftIcon />
            </button>
            <button type="button" aria-label="Next image" onClick={next} className={`${navBtn} right-2`}>
              <ChevronRightIcon />
            </button>
          </>
        )}
        <button type="button" aria-label="Close" onClick={onClose} className="absolute -top-2 right-0 inline-flex h-10 w-10 -translate-y-full items-center justify-center rounded-full bg-card text-primary">
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default function GalleryGrid({ items, variant = "grid" }) {
  const [open, setOpen] = useState(null);
  if (!items.length) {
    return <p className="card-surface p-8 text-center text-muted-foreground">No images in this category yet.</p>;
  }
  return (
    <>
      <ul className={variant === "mosaic" ? "grid grid-cols-2 gap-3 md:grid-cols-3 md:[&>li:first-child]:col-span-2 md:[&>li:first-child]:row-span-2" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"}>
        {items.map((g, i) => (
          <li key={g.id}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block h-full w-full overflow-hidden rounded-md text-left focus-visible:outline-2 focus-visible:outline-ring"
            >
              <SafeImage src={g.image} alt={g.alt} className={`w-full transition-transform duration-500 group-hover:scale-[1.04] ${variant === "mosaic" ? "h-full min-h-44 aspect-[4/3]" : "aspect-[4/3]"}`} />
              <span className="absolute inset-x-0 bottom-0 bg-caption-fade p-3">
                <span className="block text-sm font-semibold text-primary-foreground">{g.title}</span>
                <span className="block text-xs text-primary-foreground/80">{g.caption}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
    </>
  );
}
