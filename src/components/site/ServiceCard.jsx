import { Link } from "@tanstack/react-router";
import SafeImage from "./SafeImage";
import { ArrowRightIcon, ServiceIcon } from "./Icons";

export default function ServiceCard({ service }) {
  return (
    <article className="card-surface group flex flex-col overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SafeImage
          src={service.image}
          alt={service.title}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-card text-primary shadow-sm">
          <ServiceIcon category={service.category} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-leaf">{service.category}</p>
        <h3 className="mt-1 text-xl text-primary">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
        <Link
          to="/services"
          hash={service.id}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-leaf"
        >
          Learn more <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
