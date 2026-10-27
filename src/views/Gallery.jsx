import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { GALLERY_CATEGORIES } from "@/data/mockData";
import { PageBanner, PublicLayout } from "@/components/site/Layout";
import GalleryGrid from "@/components/site/GalleryGrid";

export default function Gallery() {
  const { gallery } = useApp();
  const [cat, setCat] = useState("All");
  const visible = gallery.filter((g) => g.visible);
  const items = cat === "All" ? visible : visible.filter((g) => g.category === cat);

  return (
    <PublicLayout>
      <PageBanner eyebrow="Gallery" title="Scenes from agricultural life" text="Crop fields, orchards, irrigation and harvest — the farming landscape we work in." image="/images/gallery-fields.jpg" alt="Patchwork of green crop fields" />
      <section className="container-site py-14">
        <div role="tablist" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((c) => {
            const n = c === "All" ? visible.length : visible.filter((g) => g.category === c).length;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-primary hover:text-primary"}`}
              >
                {c} <span className="opacity-70">({n})</span>
              </button>
            );
          })}
        </div>
        <div className="mt-8"><GalleryGrid key={cat} items={items} /></div>
        <p className="mt-6 text-xs text-muted-foreground">Illustrative agricultural photographs. They do not depict the company's own farms, offices or staff.</p>
      </section>
    </PublicLayout>
  );
}
