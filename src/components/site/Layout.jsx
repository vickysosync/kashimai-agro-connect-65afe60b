import Header from "./Header";
import Footer from "./Footer";
import SafeImage from "./SafeImage";

export function PublicLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

/** Inner-page banner with photo and restrained green overlay. */
export function PageBanner({ eyebrow, title, text, image, alt }) {
  return (
    <section className="relative isolate overflow-hidden">
      <SafeImage src={image} alt={alt} className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute inset-0 -z-10 bg-overlay-forest" />
      <div className="container-site py-20 md:py-28">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-harvest">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl text-primary-foreground md:text-5xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">{text}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl text-primary md:text-4xl">{title}</h2>
      {text && <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function DemoNote({ children }) {
  return (
    <p className="rounded-md border border-harvest/50 bg-harvest/10 px-3 py-2 text-xs text-foreground/80">
      {children}
    </p>
  );
}
