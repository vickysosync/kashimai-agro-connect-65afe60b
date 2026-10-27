import { Link } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";
import { DemoNote, PageBanner, PublicLayout, SectionHeading } from "@/components/site/Layout";
import SafeImage from "@/components/site/SafeImage";
import { DropIcon, LeafIcon, MapPinIcon, SproutIcon, TreeIcon, UsersIcon } from "@/components/site/Icons";

const values = [
  { icon: UsersIcon, title: "Farmer First", text: "Decisions begin with what is practical and useful for farming families." },
  { icon: LeafIcon, title: "Sustainability", text: "Care for soil, water and long-term farm health in everyday practice." },
  { icon: SproutIcon, title: "Practicality", text: "Simple, grounded guidance that fits real fields and real seasons." },
  { icon: TreeIcon, title: "Long-Term Thinking", text: "Steady progress over years rather than promises of quick results." },
];

export default function About() {
  const { company } = useApp();
  return (
    <PublicLayout>
      <PageBanner eyebrow="About Us" title="A farmer producer company rooted in Latur's farmland" image="/images/about-banner.jpg" alt="Farmers walking along a field boundary in rural Maharashtra" />

      <section className="container-site grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeading eyebrow="Introduction" title="Who we are" />
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">{company.aboutDescription}</p>
          <h3 className="mt-10 text-2xl text-primary">Company background</h3>
          <p className="mt-3 leading-relaxed text-foreground/80">
            The company was incorporated on {company.incorporationDate}, with its registered office in Ahmedpur, Latur district. Its primary business activity is {company.primaryActivity.charAt(0).toLowerCase() + company.primaryActivity.slice(1)}.
          </p>
          <h3 className="mt-10 text-2xl text-primary">Agricultural focus</h3>
          <p className="mt-3 leading-relaxed text-foreground/80">
            Our work centres on crop production, horticulture and agricultural services — the activities that make up the daily life of farming households in the Marathwada region, where rain-fed crops, pulses, jowar, soybean and growing horticultural interest shape the landscape.
          </p>
        </div>
        <SafeImage src="/images/service-coordination.jpg" alt="Farmers gathered for a village-level meeting" className="aspect-[4/5] w-full rounded-md" />
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {[["Vision", company.vision], ["Mission", company.mission]].map(([k, v]) => (
            <div key={k} className="rounded-md border-t-4 border-primary bg-card p-8 shadow-sm">
              <p className="eyebrow">Our {k}</p>
              <p className="mt-4 font-display text-2xl leading-snug text-primary">“{v}”</p>
            </div>
          ))}
          <div className="md:col-span-2">
            <DemoNote>The vision and mission above are proposed statements prepared for this portfolio, not officially supplied company declarations.</DemoNote>
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <SectionHeading eyebrow="What guides us" title="Core values" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-4 text-lg text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <SafeImage src="/images/service-sustainable.jpg" alt="Drip irrigation lines running along crop rows" className="aspect-[16/11] w-full rounded-md" />
          <div>
            <SectionHeading eyebrow="Sustainability" title="Commitment to sustainable practices" />
            <p className="mt-4 leading-relaxed text-foreground/80">We encourage water-efficient irrigation, compost and soil health practices, and careful use of inputs — so farms stay productive for the next generation.</p>
            <h3 className="mt-8 flex items-center gap-2 text-xl text-primary"><DropIcon className="h-5 w-5 text-leaf" /> Farmer-oriented development</h3>
            <p className="mt-2 leading-relaxed text-foreground/80">As a farmer producer company, our philosophy is collective: farmers planning together, sharing knowledge, and building a stronger voice in agricultural markets.</p>
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="flex flex-col gap-5 rounded-md border border-border bg-card p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <MapPinIcon className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Registered Office</p>
              <p className="mt-1 font-medium">{company.address}</p>
            </div>
          </div>
          <Link to="/company-details" className="btn-outline shrink-0">Company details</Link>
        </div>
      </section>
    </PublicLayout>
  );
}
