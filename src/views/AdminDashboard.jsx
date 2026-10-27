import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useApp } from "@/context/AppContext";
import { GALLERY_CATEGORIES } from "@/data/mockData";
import SafeImage from "@/components/site/SafeImage";
import ServiceCard from "@/components/site/ServiceCard";
import {
  ChartIcon,
  BuildingIcon,
  SproutIcon,
  ImageIcon,
  HomeIcon,
  RouteIcon,
  InboxIcon,
  SettingsIcon,
  PlusIcon,
  EditIcon,
  TrashIcon,
  EyeIcon,
  EyeOffIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ResetIcon,
  LogoutIcon,
  CheckIcon,
  ExternalIcon,
} from "@/components/site/Icons";

/* ------------------------------------------------------------------ */
/* Shared admin UI helpers                                             */
/* ------------------------------------------------------------------ */

const SECTION_LIST = [
  { id: "overview", label: "Overview", Icon: ChartIcon },
  { id: "company", label: "Company Profile", Icon: BuildingIcon },
  { id: "services", label: "Services", Icon: SproutIcon },
  { id: "gallery", label: "Gallery", Icon: ImageIcon },
  { id: "home", label: "Homepage Content", Icon: HomeIcon },
  { id: "approach", label: "Our Approach", Icon: RouteIcon },
  { id: "enquiries", label: "Enquiries", Icon: InboxIcon },
  { id: "settings", label: "Website Settings", Icon: SettingsIcon },
];

function Panel({ title, description, children }) {
  return (
    <section className="rounded-lg border border-border bg-card p-5 shadow-sm md:p-6">
      <h2 className="text-xl text-primary">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>}
    </label>
  );
}

function SaveButton({ onClick, label = "Save changes" }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className="btn-primary"
        onClick={() => {
          onClick();
          setSaved(true);
          setTimeout(() => setSaved(false), 2500);
        }}
      >
        {label}
      </button>
      {saved && (
        <span className="flex items-center gap-1 text-sm font-medium text-primary">
          <CheckIcon className="h-4 w-4" /> Saved — changes are live on the website
        </span>
      )}
    </div>
  );
}

function VisibleToggle({ visible, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={visible}
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors ${
        visible
          ? "border-primary/40 bg-secondary text-primary"
          : "border-border bg-muted text-muted-foreground"
      }`}
    >
      {visible ? <EyeIcon className="h-4 w-4" /> : <EyeOffIcon className="h-4 w-4" />}
      {visible ? "Visible" : "Hidden"}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Module A — Company Profile                                          */
/* ------------------------------------------------------------------ */

function CompanyProfileForm({ app }) {
  const { company, updateCompany } = app;
  const [draft, setDraft] = useState(company);
  const set = (key) => (e) => setDraft({ ...draft, [key]: e.target.value });

  return (
    <Panel
      title="Company Profile"
      description="These details appear on the website header, footer, company details page and about page. Leave phone or email empty to show “Contact details to be updated”."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Company Name">
          <input className="form-input" value={draft.name} onChange={set("name")} />
        </Field>
        <Field label="Client Name" hint="Not supplied yet — editable placeholder.">
          <input className="form-input" value={draft.clientName} onChange={set("clientName")} />
        </Field>
        <Field label="Incorporation Date">
          <input className="form-input" value={draft.incorporationDate} onChange={set("incorporationDate")} />
        </Field>
        <Field label="CIN (Corporate Identification Number)">
          <input className="form-input" value={draft.cin} onChange={set("cin")} />
        </Field>
        <Field label="Company Status Display">
          <input className="form-input" value={draft.status} onChange={set("status")} />
        </Field>
        <Field label="Status Note">
          <input className="form-input" value={draft.statusNote} onChange={set("statusNote")} />
        </Field>
        <Field label="Phone Number" hint="Placeholder until real details are supplied.">
          <input className="form-input" value={draft.phone} onChange={set("phone")} />
        </Field>
        <Field label="Email Address" hint="Placeholder until real details are supplied.">
          <input className="form-input" value={draft.email} onChange={set("email")} />
        </Field>
        <Field label="Primary Business Activity">
          <input className="form-input" value={draft.primaryActivity} onChange={set("primaryActivity")} />
        </Field>
        <Field label="Registered Office Address">
          <textarea className="form-input min-h-24" value={draft.address} onChange={set("address")} />
        </Field>
        <Field label="Vision">
          <textarea className="form-input min-h-20" value={draft.vision} onChange={set("vision")} />
        </Field>
        <Field label="Mission">
          <textarea className="form-input min-h-20" value={draft.mission} onChange={set("mission")} />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="About Us Description">
          <textarea className="form-input min-h-32" value={draft.aboutDescription} onChange={set("aboutDescription")} />
        </Field>
      </div>
      <div className="mt-5">
        <SaveButton onClick={() => updateCompany(draft)} />
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Module B — Services Management                                      */
/* ------------------------------------------------------------------ */

const SERVICE_CATEGORIES = [
  "Crop Production",
  "Horticulture",
  "Advisory",
  "Farmer Support",
  "Sustainability",
  "Planning",
  "Post-Harvest",
  "Business Development",
  "General",
];

const emptyService = {
  title: "",
  category: "General",
  image: "",
  shortDescription: "",
  description: "",
  benefits: [],
  visible: true,
};

function ServiceForm({ initial, onSave, onCancel }) {
  const [draft, setDraft] = useState({
    ...initial,
    benefitsText: (initial.benefits || []).join("\n"),
  });
  const set = (key) => (e) => setDraft({ ...draft, [key]: e.target.value });

  return (
    <form
      className="rounded-md border border-border bg-secondary/40 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        const { benefitsText, ...rest } = draft;
        onSave({ ...rest, benefits: benefitsText.split("\n").map((b) => b.trim()).filter(Boolean) });
      }}
    >
      <h3 className="font-display text-lg text-primary">
        {initial.id ? "Edit Service" : "Add a New Service"}
      </h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field label="Service Title">
          <input className="form-input" value={draft.title} onChange={set("title")} required />
        </Field>
        <Field label="Category">
          <select className="form-input" value={draft.category} onChange={set("category")}>
            {SERVICE_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Image URL" hint="Image uploads are not available in this demo — use an image URL.">
          <input className="form-input" value={draft.image} onChange={set("image")} placeholder="/images/service-crop.jpg" />
        </Field>
        <Field label="Short Description">
          <input className="form-input" value={draft.shortDescription} onChange={set("shortDescription")} />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Detailed Description">
          <textarea className="form-input min-h-28" value={draft.description} onChange={set("description")} />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Potential Benefits" hint="One benefit per line.">
          <textarea className="form-input min-h-24" value={draft.benefitsText} onChange={set("benefitsText")} />
        </Field>
      </div>
      <label className="mt-4 flex items-center gap-2 text-sm font-medium">
        <input
          type="checkbox"
          checked={draft.visible}
          onChange={(e) => setDraft({ ...draft, visible: e.target.checked })}
          className="h-4 w-4 accent-[oklch(0.448_0.108_151.3)]"
        />
        Visible on the website
      </label>
      <div className="mt-4 flex gap-2">
        <button type="submit" className="btn-primary">
          {initial.id ? "Save Service" : "Add Service"}
        </button>
        <button type="button" className="btn-outline" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

function ServicesManager({ app }) {
  const { services, addService, updateService, deleteService } = app;
  const [editing, setEditing] = useState(null);
  const [previewId, setPreviewId] = useState(null);

  return (
    <Panel
      title="Services Management"
      description="Add, edit, hide or delete the service categories shown on the Services page and homepage."
    >
      <button type="button" className="btn-primary mb-5" onClick={() => setEditing({ ...emptyService })}>
        <PlusIcon className="h-4 w-4" /> Add Service
      </button>

      {editing && (
        <div className="mb-6">
          <ServiceForm
            key={editing.id || "new"}
            initial={editing}
            onCancel={() => setEditing(null)}
            onSave={(svc) => {
              if (editing.id) updateService(editing.id, svc);
              else addService(svc);
              setEditing(null);
            }}
          />
        </div>
      )}

      <ul className="space-y-3">
        {services.map((svc) => (
          <li key={svc.id} className="rounded-md border border-border bg-card">
            <div className="flex flex-wrap items-center gap-3 p-3">
              <SafeImage src={svc.image} alt={svc.title} className="h-14 w-24 shrink-0 rounded-sm" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-foreground">{svc.title || "Untitled service"}</p>
                <p className="text-xs text-muted-foreground">{svc.category}</p>
              </div>
              <VisibleToggle
                visible={svc.visible}
                onToggle={() => updateService(svc.id, { visible: !svc.visible })}
              />
              <button
                type="button"
                className="rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-primary hover:bg-secondary"
                onClick={() => setPreviewId(previewId === svc.id ? null : svc.id)}
              >
                {previewId === svc.id ? "Close Preview" : "Preview"}
              </button>
              <button
                type="button"
                aria-label={`Edit ${svc.title}`}
                className="rounded-md border border-border p-2 text-primary hover:bg-secondary"
                onClick={() => setEditing({ ...svc })}
              >
                <EditIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label={`Delete ${svc.title}`}
                className="rounded-md border border-destructive/40 p-2 text-destructive hover:bg-destructive/10"
                onClick={() => {
                  if (window.confirm(`Delete the service “${svc.title}”? This cannot be undone in this session.`)) {
                    deleteService(svc.id);
                  }
                }}
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
            {previewId === svc.id && (
              <div className="border-t border-border bg-secondary/40 p-4">
                <div className="max-w-sm">
                  <ServiceCard service={svc} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {services.length === 0 && (
        <p className="rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
          No services yet. Add your first service above.
        </p>
      )}
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Module C — Gallery Management                                       */
/* ------------------------------------------------------------------ */

function GalleryForm({ initial, onSave, onCancel }) {
  const [draft, setDraft] = useState(initial);
  const set = (key) => (e) => setDraft({ ...draft, [key]: e.target.value });

  return (
    <form
      className="rounded-md border border-border bg-secondary/40 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSave(draft);
      }}
    >
      <h3 className="font-display text-lg text-primary">
        {initial.id ? "Edit Gallery Entry" : "Add a Gallery Entry"}
      </h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Field label="Title">
          <input className="form-input" value={draft.title} onChange={set("title")} required />
        </Field>
        <Field label="Category">
          <select className="form-input" value={draft.category} onChange={set("category")}>
            {GALLERY_CATEGORIES.filter((c) => c !== "All").map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Image URL" hint="No upload service in this demo — paste an image URL.">
          <input className="form-input" value={draft.image} onChange={set("image")} placeholder="/images/gallery-fields.jpg" />
        </Field>
        <Field label="Alt Text" hint="Describes the photo for screen readers.">
          <input className="form-input" value={draft.alt} onChange={set("alt")} />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Caption">
          <input className="form-input" value={draft.caption} onChange={set("caption")} />
        </Field>
      </div>
      <label className="mt-4 flex items-center gap-2 text-sm font-medium">
        <input
          type="checkbox"
          checked={draft.visible}
          onChange={(e) => setDraft({ ...draft, visible: e.target.checked })}
          className="h-4 w-4 accent-[oklch(0.448_0.108_151.3)]"
        />
        Visible in the gallery
      </label>
      <div className="mt-4 flex gap-2">
        <button type="submit" className="btn-primary">
          {initial.id ? "Save Entry" : "Add Entry"}
        </button>
        <button type="button" className="btn-outline" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

const emptyGalleryItem = {
  title: "",
  category: "Crop Farming",
  image: "",
  caption: "",
  alt: "",
  visible: true,
};

function GalleryManager({ app }) {
  const { gallery, addGalleryItem, updateGalleryItem, deleteGalleryItem, moveGalleryItem } = app;
  const [editing, setEditing] = useState(null);

  return (
    <Panel
      title="Gallery Management"
      description="Add, edit, reorder, hide or delete gallery photos. Changes appear on the Gallery page and homepage preview."
    >
      <button type="button" className="btn-primary mb-5" onClick={() => setEditing({ ...emptyGalleryItem })}>
        <PlusIcon className="h-4 w-4" /> Add Gallery Entry
      </button>

      {editing && (
        <div className="mb-6">
          <GalleryForm
            key={editing.id || "new"}
            initial={editing}
            onCancel={() => setEditing(null)}
            onSave={(item) => {
              if (editing.id) updateGalleryItem(editing.id, item);
              else addGalleryItem(item);
              setEditing(null);
            }}
          />
        </div>
      )}

      <ul className="space-y-3">
        {gallery.map((item, index) => (
          <li key={item.id} className="flex flex-wrap items-center gap-3 rounded-md border border-border bg-card p-3">
            <SafeImage src={item.image} alt={item.alt || item.title} className="h-14 w-24 shrink-0 rounded-sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{item.title || "Untitled entry"}</p>
              <p className="truncate text-xs text-muted-foreground">{item.caption}</p>
              <p className="text-xs text-muted-foreground">{item.category}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label={`Move ${item.title} up`}
                disabled={index === 0}
                className="rounded-md border border-border p-2 text-primary hover:bg-secondary disabled:opacity-40"
                onClick={() => moveGalleryItem(item.id, -1)}
              >
                <ChevronUpIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label={`Move ${item.title} down`}
                disabled={index === gallery.length - 1}
                className="rounded-md border border-border p-2 text-primary hover:bg-secondary disabled:opacity-40"
                onClick={() => moveGalleryItem(item.id, 1)}
              >
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </div>
            <VisibleToggle
              visible={item.visible}
              onToggle={() => updateGalleryItem(item.id, { visible: !item.visible })}
            />
            <button
              type="button"
              aria-label={`Edit ${item.title}`}
              className="rounded-md border border-border p-2 text-primary hover:bg-secondary"
              onClick={() => setEditing({ ...item })}
            >
              <EditIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label={`Delete ${item.title}`}
              className="rounded-md border border-destructive/40 p-2 text-destructive hover:bg-destructive/10"
              onClick={() => {
                if (window.confirm(`Delete “${item.title}” from the gallery?`)) deleteGalleryItem(item.id);
              }}
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-md border border-harvest/50 bg-harvest/10 px-3 py-2 text-xs text-foreground/80">
        Note: this demo has no image upload service. Gallery images are referenced by URL and
        changes last only for the current browser session.
      </p>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Module D — Homepage Content                                         */
/* ------------------------------------------------------------------ */

const SECTION_TOGGLES = [
  ["showIntro", "Introduction section"],
  ["showServices", "Services preview"],
  ["showApproach", "Approach preview"],
  ["showGallery", "Gallery preview"],
  ["showCompany", "Company information"],
  ["showContactCta", "Contact call-to-action"],
];

function HomeContentForm({ app }) {
  const { home, services, gallery, updateHome, updateHomeSections, toggleFeaturedService, toggleGalleryPreview } = app;
  const [draft, setDraft] = useState(home);
  const set = (key) => (e) => setDraft({ ...draft, [key]: e.target.value });

  return (
    <div className="space-y-6">
      <Panel title="Hero Section" description="The large banner at the top of the homepage.">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Hero Label">
            <input className="form-input" value={draft.heroLabel} onChange={set("heroLabel")} />
          </Field>
          <Field label="Hero Image URL">
            <input className="form-input" value={draft.heroImage} onChange={set("heroImage")} />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Hero Heading">
            <textarea className="form-input min-h-20" value={draft.heroHeading} onChange={set("heroHeading")} />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Hero Description">
            <textarea className="form-input min-h-24" value={draft.heroDescription} onChange={set("heroDescription")} />
          </Field>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Primary CTA Text">
            <input className="form-input" value={draft.ctaPrimary} onChange={set("ctaPrimary")} />
          </Field>
          <Field label="Secondary CTA Text">
            <input className="form-input" value={draft.ctaSecondary} onChange={set("ctaSecondary")} />
          </Field>
        </div>
        <div className="mt-5">
          <SaveButton onClick={() => updateHome(draft)} />
        </div>
      </Panel>

      <Panel title="Introduction Section">
        <Field label="Introduction Heading">
          <input className="form-input" value={draft.introHeading} onChange={set("introHeading")} />
        </Field>
        <div className="mt-4">
          <Field label="Introduction Content" hint="Separate paragraphs with a blank line.">
            <textarea className="form-input min-h-32" value={draft.introContent} onChange={set("introContent")} />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Introduction Image URL">
            <input className="form-input" value={draft.introImage} onChange={set("introImage")} />
          </Field>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Contact CTA Heading">
            <input className="form-input" value={draft.contactCtaHeading} onChange={set("contactCtaHeading")} />
          </Field>
          <Field label="Contact CTA Text">
            <input className="form-input" value={draft.contactCtaText} onChange={set("contactCtaText")} />
          </Field>
        </div>
        <div className="mt-5">
          <SaveButton onClick={() => updateHome(draft)} />
        </div>
      </Panel>

      <Panel title="Homepage Sections" description="Show or hide entire sections of the homepage.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {SECTION_TOGGLES.map(([key, label]) => (
            <li key={key}>
              <label className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={home.sections[key]}
                  onChange={(e) => updateHomeSections({ [key]: e.target.checked })}
                  className="h-4 w-4 accent-[oklch(0.448_0.108_151.3)]"
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title="Featured Services" description="Choose up to six services shown in the homepage services preview.">
        <ul className="grid gap-2 sm:grid-cols-2">
          {services.map((svc) => (
            <li key={svc.id}>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={home.featuredServiceIds.includes(svc.id)}
                  onChange={() => toggleFeaturedService(svc.id)}
                  className="h-4 w-4 accent-[oklch(0.448_0.108_151.3)]"
                />
                <span className={svc.visible ? "" : "text-muted-foreground line-through"}>{svc.title}</span>
              </label>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title="Gallery Preview" description="Choose up to six photos shown in the homepage gallery preview.">
        <ul className="grid gap-2 sm:grid-cols-2">
          {gallery.map((item) => (
            <li key={item.id}>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={home.galleryPreviewIds.includes(item.id)}
                  onChange={() => toggleGalleryPreview(item.id)}
                  className="h-4 w-4 accent-[oklch(0.448_0.108_151.3)]"
                />
                <span className={item.visible ? "" : "text-muted-foreground line-through"}>{item.title}</span>
              </label>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Module E — Our Approach                                             */
/* ------------------------------------------------------------------ */

function ApproachForm({ app }) {
  const { approach, updateApproachIntro, updateApproachStep } = app;
  const [intro, setIntro] = useState({
    introHeading: approach.introHeading,
    introContent: approach.introContent,
  });

  return (
    <div className="space-y-6">
      <Panel title="Approach Introduction">
        <Field label="Heading">
          <input
            className="form-input"
            value={intro.introHeading}
            onChange={(e) => setIntro({ ...intro, introHeading: e.target.value })}
          />
        </Field>
        <div className="mt-4">
          <Field label="Content">
            <textarea
              className="form-input min-h-24"
              value={intro.introContent}
              onChange={(e) => setIntro({ ...intro, introContent: e.target.value })}
            />
          </Field>
        </div>
        <div className="mt-5">
          <SaveButton onClick={() => updateApproachIntro(intro)} />
        </div>
      </Panel>

      {approach.steps.map((step) => (
        <ApproachStepForm key={step.id} step={step} onSave={(patch) => updateApproachStep(step.id, patch)} />
      ))}
    </div>
  );
}

function ApproachStepForm({ step, onSave }) {
  const [draft, setDraft] = useState(step);
  const set = (key) => (e) => setDraft({ ...draft, [key]: e.target.value });

  return (
    <Panel title={`Step ${step.number} — ${step.title}`}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Heading">
          <input className="form-input" value={draft.heading} onChange={set("heading")} />
        </Field>
        <Field label="Image URL">
          <input className="form-input" value={draft.image} onChange={set("image")} />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Description">
          <textarea className="form-input min-h-24" value={draft.description} onChange={set("description")} />
        </Field>
      </div>
      <div className="mt-5">
        <SaveButton onClick={() => onSave(draft)} />
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Module F — Enquiry Management                                       */
/* ------------------------------------------------------------------ */

const ENQUIRY_STATUSES = ["New", "Contacted", "Resolved"];

function EnquiryManager({ app }) {
  const { enquiries, updateEnquiryStatus, deleteEnquiry } = app;
  const [openId, setOpenId] = useState(null);

  return (
    <Panel
      title="Enquiries"
      description="Enquiries submitted through the contact form during this browser session. They do not survive a page reload or browser reset and are not sent to any server."
    >
      {enquiries.length === 0 ? (
        <p className="rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
          No enquiries yet in this session. Submit the contact form on the website to see one here.
        </p>
      ) : (
        <ul className="space-y-3">
          {enquiries.map((enq) => (
            <li key={enq.id} className="rounded-md border border-border bg-card p-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{enq.fullName}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {enq.service || "General enquiry"} · {new Date(enq.submittedAt).toLocaleString()}
                  </p>
                </div>
                <select
                  aria-label={`Status for ${enq.fullName}`}
                  className="form-input w-36"
                  value={enq.status}
                  onChange={(e) => updateEnquiryStatus(enq.id, e.target.value)}
                >
                  {ENQUIRY_STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <button
                  type="button"
                  className="rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-primary hover:bg-secondary"
                  onClick={() => setOpenId(openId === enq.id ? null : enq.id)}
                >
                  {openId === enq.id ? "Hide Details" : "View Details"}
                </button>
                <button
                  type="button"
                  aria-label={`Delete enquiry from ${enq.fullName}`}
                  className="rounded-md border border-destructive/40 p-2 text-destructive hover:bg-destructive/10"
                  onClick={() => {
                    if (window.confirm(`Delete the enquiry from ${enq.fullName}?`)) deleteEnquiry(enq.id);
                  }}
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
              {openId === enq.id && (
                <dl className="mt-4 grid gap-3 rounded-md bg-secondary/40 p-4 text-sm sm:grid-cols-2">
                  <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Phone</dt><dd>{enq.phone}</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Email</dt><dd>{enq.email}</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Service of Interest</dt><dd>{enq.service}</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Subject</dt><dd>{enq.subject}</dd></div>
                  <div className="sm:col-span-2"><dt className="text-xs uppercase tracking-wider text-muted-foreground">Message</dt><dd className="whitespace-pre-line">{enq.message}</dd></div>
                </dl>
              )}
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Module G — Website Settings                                         */
/* ------------------------------------------------------------------ */

function SettingsForm({ app }) {
  const { settings, updateSettings } = app;
  const [draft, setDraft] = useState(settings);
  const [social, setSocial] = useState(settings.socialLinks || []);
  const set = (key) => (e) => setDraft({ ...draft, [key]: e.target.value });

  return (
    <Panel
      title="Website Settings"
      description="Site-wide text and branding. Phone and email contact details are edited in the Company Profile module."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Logo Text">
          <input className="form-input" value={draft.logoText} onChange={set("logoText")} />
        </Field>
        <Field label="Admin Display Name">
          <input className="form-input" value={draft.adminDisplayName} onChange={set("adminDisplayName")} />
        </Field>
        <Field label="Copyright Text">
          <input className="form-input" value={draft.copyright} onChange={set("copyright")} />
        </Field>
      </div>
      <div className="mt-4">
        <Field label="Footer Description">
          <textarea className="form-input min-h-20" value={draft.footerDescription} onChange={set("footerDescription")} />
        </Field>
      </div>

      <h3 className="mt-6 font-display text-lg text-primary">Social Media Links</h3>
      <p className="text-xs text-muted-foreground">
        No social accounts have been supplied — add links here only if you have real ones.
      </p>
      <ul className="mt-3 space-y-2">
        {social.map((s, i) => (
          <li key={i} className="flex flex-wrap items-center gap-2">
            <input
              className="form-input w-40"
              placeholder="Label"
              value={s.label}
              onChange={(e) => setSocial(social.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)))}
            />
            <input
              className="form-input min-w-0 flex-1"
              placeholder="https://…"
              value={s.url}
              onChange={(e) => setSocial(social.map((x, j) => (j === i ? { ...x, url: e.target.value } : x)))}
            />
            <button
              type="button"
              aria-label={`Remove social link ${s.label || i + 1}`}
              className="rounded-md border border-destructive/40 p-2 text-destructive hover:bg-destructive/10"
              onClick={() => setSocial(social.filter((_, j) => j !== i))}
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="btn-outline mt-3" onClick={() => setSocial([...social, { label: "", url: "" }])}>
        <PlusIcon className="h-4 w-4" /> Add Social Link
      </button>

      <div className="mt-6">
        <SaveButton
          onClick={() => updateSettings({ ...draft, socialLinks: social.filter((s) => s.label.trim() && s.url.trim()) })}
        />
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Module H — Overview, reset & preview                                */
/* ------------------------------------------------------------------ */

function Overview({ app, onOpen }) {
  const { services, gallery, enquiries, company, resetDemo } = app;
  const contactReady = company.phone.trim() && company.email.trim();

  const cards = [
    { label: "Total Services", value: services.length, section: "services" },
    { label: "Total Gallery Images", value: gallery.length, section: "gallery" },
    { label: "Enquiries This Session", value: enquiries.length, section: "enquiries" },
    {
      label: "Company Profile Status",
      value: contactReady ? "Contact details added" : "Contact details pending",
      section: "company",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <button
            key={c.label}
            type="button"
            onClick={() => onOpen(c.section)}
            className="rounded-lg border border-border bg-card p-5 text-left shadow-sm transition-colors hover:border-primary/40"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
            <p className="mt-2 font-display text-2xl text-primary">{c.value}</p>
          </button>
        ))}
      </div>

      <Panel title="Session & Demo Controls" description="This admin panel is a frontend demo — all edits live only in the current browser session.">
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">
            <ExternalIcon className="h-4 w-4" /> Preview Website
          </Link>
          <Link to="/" className="btn-outline">
            Return to Website
          </Link>
          <button
            type="button"
            className="btn-outline text-destructive"
            onClick={() => {
              if (window.confirm("Reset all demo data back to the original mock content? Your edits in this session will be lost.")) {
                resetDemo();
              }
            }}
          >
            <ResetIcon className="h-4 w-4" /> Reset Demo Data
          </button>
        </div>
      </Panel>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboard shell                                                     */
/* ------------------------------------------------------------------ */

export default function AdminDashboard() {
  const app = useApp();
  const navigate = useNavigate();
  const { isAdmin, logout, settings, company } = app;
  const [section, setSection] = useState("overview");

  useEffect(() => {
    if (!isAdmin) navigate({ to: "/admin/login" });
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  const current = SECTION_LIST.find((s) => s.id === section) || SECTION_LIST[0];

  return (
    <div className="flex min-h-screen flex-col bg-light-green">
      {/* Dashboard header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="container-site flex h-16 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <ChartIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate font-display font-semibold text-primary">Admin Dashboard</p>
              <p className="truncate text-xs text-muted-foreground">{company.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-muted-foreground sm:block">
              Signed in as <span className="font-medium text-foreground">{settings.adminDisplayName}</span>
            </span>
            <Link to="/" className="btn-outline !px-3 !py-1.5 text-xs">
              View Website
            </Link>
            <button
              type="button"
              className="btn-primary !px-3 !py-1.5 text-xs"
              onClick={() => {
                logout();
                navigate({ to: "/admin/login" });
              }}
            >
              <LogoutIcon className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container-site flex flex-1 flex-col gap-6 py-6 lg:flex-row">
        {/* Sidebar */}
        <nav aria-label="Admin sections" className="lg:w-60 lg:shrink-0">
          <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {SECTION_LIST.map(({ id, label, Icon }) => (
              <li key={id} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  aria-current={section === id ? "page" : undefined}
                  onClick={() => setSection(id)}
                  className={`flex w-full items-center gap-2.5 whitespace-nowrap rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    section === id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground/80 hover:bg-secondary hover:text-primary"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content */}
        <main className="min-w-0 flex-1 space-y-6">
          <h1 className="sr-only">{current.label}</h1>
          {section === "overview" && <Overview app={app} onOpen={setSection} />}
          {section === "company" && <CompanyProfileForm app={app} />}
          {section === "services" && <ServicesManager app={app} />}
          {section === "gallery" && <GalleryManager app={app} />}
          {section === "home" && <HomeContentForm app={app} />}
          {section === "approach" && <ApproachForm app={app} />}
          {section === "enquiries" && <EnquiryManager app={app} />}
          {section === "settings" && <SettingsForm app={app} />}

          <p className="rounded-md border border-harvest/50 bg-harvest/10 px-3 py-2 text-xs text-foreground/80">
            Demo notice: this dashboard edits in-memory demo data only. Nothing is stored on a
            server, and all changes are lost when the browser session ends. The demo login is
            not secure enough for production use.
          </p>
        </main>
      </div>
    </div>
  );
}
