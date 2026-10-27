import { Link } from "@tanstack/react-router";
import { formatContactValue, useApp } from "@/context/AppContext";
import { LogoMark, MailIcon, MapPinIcon, PhoneIcon } from "./Icons";
import { NAV_LINKS } from "./Header";

export default function Footer() {
  const { company, settings } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-11 w-11" />
            <span className="font-display text-xl font-semibold text-primary-foreground">{settings.logoText}</span>
          </div>
          <p className="mt-4 font-display text-base text-primary-foreground">{company.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            {settings.footerDescription}
          </p>
          {settings.socialLinks?.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {settings.socialLinks.map((s) => (
                <li key={s.label + s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-harvest">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 transition-colors hover:text-harvest">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/admin/login" className="font-medium text-primary-foreground transition-colors hover:text-harvest">
                Admin Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-harvest">Contact Information</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-harvest" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-harvest" />
              <span>{formatContactValue(company.phone)}</span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-harvest" />
              <span>{formatContactValue(company.email)}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {settings.copyright}</p>
          <p>Designed and development by SOSynch Ai Tech</p>
        </div>
      </div>
    </footer>
  );
}
