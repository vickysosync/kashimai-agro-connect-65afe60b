import { Link } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";
import { PublicLayout, SectionHeading } from "@/components/site/Layout";
import SafeImage from "@/components/site/SafeImage";
import ServiceCard from "@/components/site/ServiceCard";
import GalleryGrid from "@/components/site/GalleryGrid";
import { ArrowRightIcon, MapPinIcon } from "@/components/site/Icons";

export default function Home() {
  const { home, services, gallery, approach, company } = useApp();
  const s = home.sections;
  const featured = home.featuredServiceIds.map((id) => services.find((x) => x.id === id)).filter((x) => x && x.visible);
  const preview = home.galleryPreviewIds.map((id) => gallery.find((x) => x.id === id)).filter((x) => x && x.visible);

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <SafeImage src={home.heroImage} alt="Green farmland in rural Maharashtra at sunrise" className="absolute inset-0 -z-10 h-full w-full" fetchPriority="high" loading="eager" />
        <div className="absolute inset-0 -z-10 bg-overlay-forest" />
        <div className="container-site flex min-h-[78vh] flex-col justify-center py-24">
          <p className="inline-flex w-fit items-center gap-2 rounded-sm bg-harvest px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-harvest-foreground">
            {home.heroLabel}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">{home.heroHeading}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">{home.heroDescription}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/services" className="btn-harvest">{home.ctaPrimary} <ArrowRightIcon className="h-4 w-4" /></Link>
            <Link to="/contact" className="btn-light">{home.ctaSecondary}</Link>
          </div>
        </div>
      </section>

      {s.showIntro && (
        <section className="container-site grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-2 text-3xl text-primary md:text-4xl">{home.introHeading}</h2>
            {home.introContent.split("\n\n").map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-foreground/80">{p}</p>
            ))}
            <Link to="/about" className="btn-outline mt-7">More about us</Link>
          </div>
          <div className="relative">
            <SafeImage src={home.introImage} alt="Farmers working together in a green field" className="aspect-[4/5] w-full rounded-md lg:aspect-[5/6]" />
            <div className="absolute -bottom-6 left-6 right-6 rounded-md border-l-4 border-harvest bg-card p-5 shadow-md sm:left-auto sm:w-72">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Based in</p>
              <p className="mt-1 font-display text-lg text-primary">Ahmedpur, Latur — Maharashtra</p>
            </div>
          </div>
        </section>
      )}

      {s.showServices && featured.length > 0 && (
        <section className="bg-secondary py-20">
          <div className="container-site">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="What we do" title="Our Services" text="Proposed service areas built around the practical needs of farming families." />
              <Link to="/services" className="btn-outline w-fit">View all services</Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((svc) => <ServiceCard key={svc.id} service={svc} />)}
            </div>
          </div>
        </section>
      )}

      {s.showApproach && (
        <section className="container-site py-20">
          <SectionHeading eyebrow="How we work" title="Our Approach" text={approach.introContent} />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
            {approach.steps.map((st) => (
              <li key={st.id} className="bg-card p-6">
                <span className="font-display text-4xl text-harvest">{st.number}</span>
                <h3 className="mt-3 text-lg text-primary">{st.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{st.description}</p>
              </li>
            ))}
          </ol>
          <Link to="/approach" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-leaf">
            Read our full approach <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </section>
      )}

      {s.showGallery && preview.length > 0 && (
        <section className="bg-card py-20">
          <div className="container-site">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="From the fields" title="Agriculture Gallery" />
              <Link to="/gallery" className="btn-outline w-fit">Open full gallery</Link>
            </div>
            <div className="mt-10"><GalleryGrid items={preview} variant="mosaic" /></div>
          </div>
        </section>
      )}

      {s.showCompany && (
        <section className="container-site py-20">
          <div className="grid gap-8 rounded-md border border-border bg-card p-8 md:p-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">Company information</p>
              <h2 className="mt-2 text-3xl text-primary">At a glance</h2>
              <Link to="/company-details" className="btn-outline mt-6">Full company details</Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2">
              {[
                ["Primary Business Activity", company.primaryActivity],
                ["Incorporation Date", company.incorporationDate],
                ["Company Status", `${company.status} (as per supplied reference)`],
                ["CIN", company.cin],
              ].map(([k, v]) => (
                <div key={k} className="border-l-2 border-leaf pl-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{v}</dd>
                </div>
              ))}
              <div className="flex gap-3 border-l-2 border-leaf pl-4 sm:col-span-2">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Registered Office</dt>
                  <dd className="mt-1 text-sm font-medium">{company.address}</dd>
                </div>
              </div>
            </dl>
          </div>
        </section>
      )}

      {s.showContactCta && (
        <section className="bg-primary">
          <div className="container-site flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl text-primary-foreground md:text-4xl">{home.contactCtaHeading}</h2>
              <p className="mt-3 text-primary-foreground/80">{home.contactCtaText}</p>
            </div>
            <Link to="/contact" className="btn-harvest shrink-0">Contact Us <ArrowRightIcon className="h-4 w-4" /></Link>
          </div>
        </section>
      )}
    </PublicLayout>
  );
}
