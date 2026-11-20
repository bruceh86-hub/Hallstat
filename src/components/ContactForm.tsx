"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { partnerRoles } from "@/content/home";
import { contactTopics, type ContactTopic } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string; fields?: Record<string, string> };

export function ContactForm({
  tone = "light",
  showTopic = false,
  defaultTopic = "partnership",
  source,
  submitLabel = "Send",
  idPrefix = "cf",
}: {
  tone?: "light" | "dark";
  showTopic?: boolean;
  defaultTopic?: ContactTopic;
  source: string;
  submitLabel?: string;
  idPrefix?: string;
}) {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const dark = tone === "dark";

  const field = cn(
    "mt-1 block w-full rounded-sm border px-3 py-2.5",
    dark
      ? "border-white/30 bg-white/5 text-white placeholder:text-white/50 focus:border-white"
      : "border-line bg-white text-ink focus:border-navy",
  );
  const label = "text-sm font-medium";
  const hint = dark ? "font-normal text-white/70" : "font-normal text-muted";
  const errorText = dark ? "mt-1 text-sm text-[#ffd2d2]" : "mt-1 text-sm text-[#b42318]";
  const id = (n: string) => `${idPrefix}-${n}`;
  const err = (n: string) => status.fields?.[n];
  const describedBy = (n: string) => (err(n) ? `${id(n)}-error` : undefined);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: defaultTopic, ...data, source }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string; fields?: Record<string, string> };
      if (!res.ok) {
        setStatus({ state: "error", message: json.error ?? "Something went wrong.", fields: json.fields });
        return;
      }
      form.reset();
      setStatus({ state: "sent", message: "Thank you. We’ve received your message and will be in touch soon." });
    } catch {
      setStatus({ state: "error", message: "Sorry, your message couldn’t be sent right now. Please try again later." });
    }
  }

  const Err = ({ n }: { n: string }) =>
    err(n) ? (
      <p id={`${id(n)}-error`} className={errorText}>
        {err(n)}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {/* Honeypot: hidden from people and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor={id("name")} className={label}>
          Name
        </label>
        <input id={id("name")} name="name" required autoComplete="name" className={field} aria-invalid={!!err("name")} aria-describedby={describedBy("name")} />
        <Err n="name" />
      </div>
      <div>
        <label htmlFor={id("org")} className={label}>
          Organization
        </label>
        <input id={id("org")} name="organization" required autoComplete="organization" className={field} aria-invalid={!!err("organization")} aria-describedby={describedBy("organization")} />
        <Err n="organization" />
      </div>
      {showTopic && (
        <div className="sm:col-span-2">
          <label htmlFor={id("topic")} className={label}>
            What can we help with?
          </label>
          <select id={id("topic")} name="topic" defaultValue={defaultTopic} className={field}>
            {Object.entries(contactTopics).map(([value, text]) => (
              <option key={value} value={value} className="text-ink">
                {text}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label htmlFor={id("role")} className={label}>
          Role
        </label>
        <select id={id("role")} name="role" required defaultValue="" className={field} aria-invalid={!!err("role")} aria-describedby={describedBy("role")}>
          <option value="" disabled className="text-ink">
            Select your role
          </option>
          {partnerRoles.map((r) => (
            <option key={r} value={r} className="text-ink">
              {r}
            </option>
          ))}
        </select>
        <Err n="role" />
      </div>
      <div>
        <label htmlFor={id("email")} className={label}>
          Email <span className={hint}>(so we can reply)</span>
        </label>
        <input id={id("email")} name="email" type="email" required autoComplete="email" className={field} aria-invalid={!!err("email")} aria-describedby={describedBy("email")} />
        <Err n="email" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={id("message")} className={label}>
          Message <span className={hint}>(optional)</span>
        </label>
        <textarea id={id("message")} name="message" rows={5} maxLength={5000} className={field} aria-invalid={!!err("message")} aria-describedby={describedBy("message")} />
        <Err n="message" />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" variant={dark ? "primary" : "dark"} disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : submitLabel}
        </Button>
        <p role="status" aria-live="polite" className={cn("text-sm", dark ? "text-white/85" : "text-muted")}>
          {status.message}
        </p>
      </div>
    </form>
  );
}
