import { formatContactValue, useApp } from "@/context/AppContext";
import { PageBanner, PublicLayout } from "@/components/site/Layout";
import ContactForm from "@/components/site/ContactForm";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/site/Icons";

export default function Contact() {
  const { company } = useApp();
  const items = [
    { icon: MapPinIcon, label: "Registered Office", value: company.address },
    { icon: PhoneIcon, label: "Phone", value: formatContactValue(company.phone) },
    { icon: MailIcon, label: "Email", value: formatContactValue(company.email) },
  ];
  return (
    <PublicLayout>
      <PageBanner eyebrow="Contact Us" title="Get in touch with our team" text="Questions about our work, services or membership — send us a message." image="/images/contact-banner.jpg" alt="Farmer standing in a green field at dusk" />
      <section className="container-site grid gap-10 py-16 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-2xl text-primary">{company.name}</h2>
          <ul className="mt-6 space-y-5">
            {items.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary"><Icon /></span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-0.5 text-sm font-medium">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </section>
    </PublicLayout>
  );
}
