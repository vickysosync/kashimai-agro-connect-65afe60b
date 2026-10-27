import { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";
import { CheckIcon } from "./Icons";

const empty = { name: "", phone: "", email: "", service: "", subject: "", message: "" };

export function validateEnquiry(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your full name.";
  if (!v.phone.trim()) e.phone = "Please enter your phone number.";
  else if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(v.phone.replace(/[\s-]/g, "")))
    e.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (!v.subject.trim()) e.subject = "Please add a subject.";
  if (!v.message.trim()) e.message = "Please write a short message.";
  return e;
}

export default function ContactForm() {
  const { services, addEnquiry } = useApp();
  const visible = services.filter((s) => s.visible);
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // Prefill service from ?service=<id> (set by "Enquire About This Service").
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("service");
    const svc = services.find((s) => s.id === id);
    if (svc) setValues((v) => ({ ...v, service: svc.title, subject: `Enquiry about ${svc.title}` }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validateEnquiry(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Simulated submission — no message is sent anywhere.
    setTimeout(() => {
      addEnquiry({ ...values, service: values.service || "General enquiry" });
      setValues(empty);
      setStatus("success");
    }, 900);
  };

  const field = (k, label, props = {}) => (
    <div>
      <label htmlFor={`f-${k}`} className="form-label">
        {label} {k !== "service" && <span className="text-destructive">*</span>}
      </label>
      <input id={`f-${k}`} className="form-input" value={values[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} {...props} />
      {errors[k] && <p id={`e-${k}`} className="mt-1 text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface space-y-4 p-6 md:p-8">
      {status === "success" && (
        <div role="status" className="flex gap-3 rounded-md border border-leaf/40 bg-secondary p-4 text-sm text-secondary-foreground">
          <CheckIcon className="h-5 w-5 shrink-0 text-leaf" />
          <p>Thank you — your enquiry has been recorded in this demo session. This is a frontend-only demo, so the message has not been sent to the company.</p>
        </div>
      )}
      {status === "error" && Object.keys(errors).some((k) => errors[k]) && (
        <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
          Please correct the highlighted fields and try again.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", "Full Name", { autoComplete: "name" })}
        {field("phone", "Phone Number", { type: "tel", autoComplete: "tel", placeholder: "10-digit mobile number" })}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {field("email", "Email Address", { type: "email", autoComplete: "email" })}
        <div>
          <label htmlFor="f-service" className="form-label">Service of Interest</label>
          <select id="f-service" className="form-input" value={values.service} onChange={set("service")}>
            <option value="">General enquiry</option>
            {visible.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>
      </div>
      {field("subject", "Subject")}
      <div>
        <label htmlFor="f-message" className="form-label">Message <span className="text-destructive">*</span></label>
        <textarea id="f-message" rows={5} className="form-input" value={values.message} onChange={set("message")} aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70 sm:w-auto">
        {status === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
            Sending…
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>
      <p className="text-xs text-muted-foreground">Demo form: submissions are kept only in this browser session.</p>
    </form>
  );
}
