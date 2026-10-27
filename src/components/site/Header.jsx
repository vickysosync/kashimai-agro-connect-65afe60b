import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";
import { CloseIcon, LogoMark, MenuIcon } from "./Icons";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/approach", label: "Our Approach" },
  { to: "/gallery", label: "Gallery" },
  { to: "/company-details", label: "Company Details" },
  { to: "/contact", label: "Contact Us" },
];

const linkBase = "rounded-md px-2.5 py-2 text-sm font-medium transition-colors";
const activeCls = "text-primary bg-secondary";
const idleCls = "text-foreground/80 hover:text-primary hover:bg-secondary/70";

export default function Header() {
  const { settings, company } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-10 w-10 shrink-0" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg font-semibold text-primary">
              {settings.logoText}
            </span>
            <span className="hidden truncate text-[11px] uppercase tracking-wider text-muted-foreground sm:block">
              Farmer Producer Company Ltd.
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.slice(0, 6).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={linkBase}
              activeProps={{ className: activeCls }}
              inactiveProps={{ className: idleCls }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            Contact Us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-card xl:hidden">
          <div className="container-site flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium"
                activeProps={{ className: activeCls }}
                inactiveProps={{ className: idleCls }}
              >
                {l.label}
              </Link>
            ))}
            <p className="mt-2 px-3 text-xs text-muted-foreground">{company.name}</p>
          </div>
        </nav>
      )}
    </header>
  );
}
