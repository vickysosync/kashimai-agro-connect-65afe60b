import { Link } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";
import { DemoNote, PageBanner, PublicLayout } from "@/components/site/Layout";
import SafeImage from "@/components/site/SafeImage";
import { CheckIcon, ServiceIcon } from "@/components/site/Icons";

export default function Services() {
  const { services } = useApp();
  const list = services.filter((s) => s.visible);
  return (
    <PublicLayout>
      <PageBanner eyebrow="Services" title="Practical support across the farming cycle" text="From planning a season to handling the harvest — proposed service areas designed around the needs of member farmers." image="/images/service-crop.jpg" alt="Healthy green crop rows in a farm field" />

      <div className="container-site pt-10">
        <DemoNote>These are proposed portfolio service categories. Descriptions are illustrative and make no guarantees about yields, profits, subsidies or government benefits.</DemoNote>
        <nav aria-label="Services" className="mt-6 flex flex-wrap gap-2">
          {list.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-primary hover:text-primary">{s.title}</a>
          ))}
        </nav>
      </div>

      <div className="container-site space-y-16 py-14 md:space-y-24">
        {list.length === 0 && <p className="card-surface p-8 text-center text-muted-foreground">No services are currently published.</p>}
        {list.map((s, i) => (
          <article key={s.id} id={s.id} className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <SafeImage src={s.image} alt={s.title} className="aspect-[4/3] w-full rounded-md" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary"><ServiceIcon category={s.category} /></span>
                <p className="text-xs font-semibold uppercase tracking-wider text-leaf">{String(i + 1).padStart(2, "0")} · {s.category}</p>
              </div>
              <h2 className="mt-4 text-3xl text-primary">{s.title}</h2>
              <p className="mt-3 text-lg text-foreground/85">{s.shortDescription}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
              {s.benefits?.length > 0 && (
                <>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">Potential benefits</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-foreground/80"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />{b}</li>
                    ))}
                  </ul>
                </>
              )}
              <Link to="/contact" search={{ service: s.id }} className="btn-primary mt-7">Enquire About This Service</Link>
            </div>
          </article>
        ))}
      </div>
    </PublicLayout>
  );
}
