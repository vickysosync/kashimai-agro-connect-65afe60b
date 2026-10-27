import { Link } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";
import { PageBanner, PublicLayout, SectionHeading } from "@/components/site/Layout";
import SafeImage from "@/components/site/SafeImage";

export default function Approach() {
  const { approach } = useApp();
  return (
    <PublicLayout>
      <PageBanner eyebrow="Our Approach" title={approach.introHeading} text={approach.introContent} image="/images/approach-understand.jpg" alt="A farmer examining soil in a field" />

      <section className="container-site py-20">
        <ol className="relative space-y-14 before:absolute before:left-6 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border md:before:left-1/2">
          {approach.steps.map((st, i) => (
            <li key={st.id} className="relative grid gap-6 pl-16 md:grid-cols-2 md:gap-14 md:pl-0">
              <span className="absolute left-0 top-0 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-primary font-display text-lg text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                {st.number}
              </span>
              <div className={`${i % 2 ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                <p className="eyebrow">Step {Number(st.number)}: {st.title}</p>
                <h2 className="mt-2 text-2xl text-primary md:text-3xl">{st.heading}</h2>
                <p className="mt-3 leading-relaxed text-foreground/80">{st.description}</p>
              </div>
              <div className={i % 2 ? "md:pr-12" : "md:pl-12"}>
                <SafeImage src={st.image} alt={st.heading} className="aspect-[16/10] w-full rounded-md" />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site">
          <SectionHeading eyebrow="Principles" title="What shapes our work" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {approach.principles.map((p, i) => (
              <div key={p.title} className={`rounded-md bg-card p-6 shadow-sm ${i === 0 ? "lg:row-span-2 lg:bg-primary" : ""}`}>
                <h3 className={`text-xl ${i === 0 ? "lg:text-primary-foreground text-primary" : "text-primary"}`}>{p.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-muted-foreground lg:text-primary-foreground/80" : "text-muted-foreground"}`}>{p.description}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-primary mt-10">Talk to our team</Link>
        </div>
      </section>
    </PublicLayout>
  );
}
