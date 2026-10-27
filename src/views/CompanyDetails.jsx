import { useState } from "react";
import { formatContactValue, useApp } from "@/context/AppContext";
import { DemoNote, PageBanner, PublicLayout } from "@/components/site/Layout";
import { CheckIcon, CopyIcon } from "@/components/site/Icons";

function CopyButton({ value, label }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const t = document.createElement("textarea");
      t.value = value;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setDone(true);
    setTimeout(() => setDone(false), 1800);
  };
  return (
    <button type="button" onClick={copy} aria-label={`Copy ${label}`} className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-primary hover:bg-secondary">
      {done ? <CheckIcon className="h-4 w-4 text-leaf" /> : <CopyIcon className="h-4 w-4" />}
      {done ? "Copied" : "Copy"}
    </button>
  );
}

export default function CompanyDetails() {
  const { company } = useApp();
  const rows = [
    ["Full Company Name", company.name],
    ["Incorporation Date", company.incorporationDate],
    ["CIN", company.cin, true],
    ["Status", `${company.status} — based on the supplied reference screenshot`],
    ["Primary Activity", company.primaryActivity],
    ["Classification Reference", "Division 01 under MCA/NIC classification"],
    ["Registered Office", company.address, true],
    ["Phone", formatContactValue(company.phone, "Not provided")],
    ["Email", formatContactValue(company.email, "Not provided")],
  ];
  return (
    <PublicLayout>
      <PageBanner eyebrow="Company Details" title="Company information" text="Registration and contact details as supplied for this portfolio." image="/images/company-banner.jpg" alt="Wide view of agricultural fields under an open sky" />
      <section className="container-site py-16">
        <div className="mx-auto max-w-4xl">
          <dl className="divide-y divide-border overflow-hidden rounded-md border border-border bg-card">
            {rows.map(([k, v, copy]) => (
              <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[220px_1fr] sm:gap-6 sm:px-6">
                <dt className="text-sm font-medium text-muted-foreground">{k}</dt>
                <dd className="flex items-start justify-between gap-4 text-sm font-medium text-foreground">
                  <span className={k === "CIN" ? "font-mono tracking-wide" : ""}>{v}</span>
                  {copy && <CopyButton value={v} label={k} />}
                </dd>
              </div>
            ))}
          </dl>
          {company.alternativeName && (
            <p className="mt-4 text-xs text-muted-foreground">Spelling note: the name may also appear as “{company.alternativeName}”. This refers to the same company.</p>
          )}
          <div className="mt-4"><DemoNote>{company.statusNote}</DemoNote></div>
        </div>
      </section>
    </PublicLayout>
  );
}
