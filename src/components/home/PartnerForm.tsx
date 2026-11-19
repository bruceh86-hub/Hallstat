"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { partnerRoles } from "@/content/home";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

const field =
  "mt-1 block w-full rounded-md border border-white/25 bg-white/5 px-3 py-2.5 text-white placeholder:text-white/50 focus:border-accent";

export function PartnerForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending" });
    try {
      // Handler arrives in Step 6 (`/api/contact`: Zod validation + Resend; Role → HubSpot property).
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "homepage-partner" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus({ state: "sent", message: "Thank you. We’ll be in touch soon." });
    } catch {
      setStatus({
        state: "error",
        message: "Sorry, your message couldn’t be sent right now. Please try again later.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="pf-name" className="text-sm font-medium">
          Name
        </label>
        <input id="pf-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="pf-org" className="text-sm font-medium">
          Organization
        </label>
        <input id="pf-org" name="organization" required autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="pf-role" className="text-sm font-medium">
          Role
        </label>
        <select id="pf-role" name="role" required defaultValue="" className={field}>
          <option value="" disabled className="text-navy">
            Select your role
          </option>
          {partnerRoles.map((r) => (
            <option key={r} value={r} className="text-navy">
              {r}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pf-email" className="text-sm font-medium">
          Email <span className="font-normal text-white/60">(so we can reply)</span>
        </label>
        <input id="pf-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="pf-message" className="text-sm font-medium">
          Message <span className="font-normal text-white/60">(optional)</span>
        </label>
        <textarea id="pf-message" name="message" rows={4} className={field} />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : "Partner With Us"}
        </Button>
        <p role="status" aria-live="polite" className="text-sm text-white/80">
          {status.message}
        </p>
      </div>
    </form>
  );
}
