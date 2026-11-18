"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
import {
  enquirySchema,
  enquiryText,
  eventTypes,
  mailtoUrl,
  whatsappUrl,
  type Enquiry,
} from "@/lib/site-content";

type Field = keyof Enquiry;
type FormValues = Record<Field, string>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  preferredDate: "",
  message: "",
};

/**
 * Validates the enquiry, then hands it to email or WhatsApp with the details prefilled.
 * There is no backend: connect a form endpoint here if the client wants server-side storage.
 */
export function EnquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [ready, setReady] = useState<Enquiry | null>(null);

  function update(field: Field, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setReady(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && field in initialValues && !nextErrors[field as Field]) {
          nextErrors[field as Field] = issue.message;
        }
      }
      setErrors(nextErrors);
      const first = Object.keys(nextErrors)[0];
      if (first) document.getElementById(first)?.focus();
      return;
    }
    setReady(parsed.data);
    window.location.href = mailtoUrl(
      `Event enquiry: ${parsed.data.eventType}`,
      enquiryText(parsed.data),
    );
  }

  const describe = (field: Field) => ({
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form id="enquiry" onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <FormField label="Your name" id="name" error={errors.name}>
          <input
            id="name"
            name="name"
            className="form-control"
            autoComplete="name"
            maxLength={100}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            required
            {...describe("name")}
          />
        </FormField>
        <FormField label="Email address" id="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            autoComplete="email"
            maxLength={254}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            required
            {...describe("email")}
          />
        </FormField>
        <FormField label="Phone number" id="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-control"
            autoComplete="tel"
            inputMode="tel"
            maxLength={24}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
            {...describe("phone")}
          />
        </FormField>
        <FormField label="Event type" id="eventType" error={errors.eventType}>
          <select
            id="eventType"
            name="eventType"
            className="form-control"
            value={values.eventType}
            onChange={(e) => update("eventType", e.target.value)}
            required
            {...describe("eventType")}
          >
            <option value="">Select an event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Preferred event date" id="preferredDate" error={errors.preferredDate}>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            className="form-control"
            value={values.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            {...describe("preferredDate")}
          />
        </FormField>
      </div>
      <FormField label="Tell us about your event" id="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          className="form-control"
          rows={4}
          maxLength={2000}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="The occasion, expected guests, city or venue, and anything you already have in mind."
          required
          {...describe("message")}
        />
      </FormField>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-dark">
          {ready ? (
            <>
              Enquiry prepared <Check aria-hidden="true" />
            </>
          ) : (
            <>
              Send enquiry <ArrowRight aria-hidden="true" />
            </>
          )}
        </button>
        <p className="text-sm text-muted-foreground">We usually reply within one working day.</p>
      </div>

      {ready && (
        <div role="status" className="border-l border-gold bg-champagne-soft p-6 text-sm leading-7">
          <p>
            Your email app should open with the enquiry ready to send. If it didn&rsquo;t, choose
            another way to send it:
          </p>
          <div className="mt-4 flex flex-wrap gap-6">
            <a
              className="text-link"
              href={whatsappUrl(enquiryText(ready))}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" /> Send on WhatsApp
            </a>
            <a
              className="text-link"
              href={mailtoUrl(`Event enquiry: ${ready.eventType}`, enquiryText(ready))}
            >
              <Mail aria-hidden="true" /> Try email again
            </a>
          </div>
        </div>
      )}
    </form>
  );
}

function FormField({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: Field;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-xs text-destructive" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
