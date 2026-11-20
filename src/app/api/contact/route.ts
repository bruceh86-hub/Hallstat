import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, contactTopics } from "@/lib/contact";

/**
 * Contact / partner / investor form handler (BLUEPRINT 6, CLAUDE.md step 6).
 * Env (set in Vercel): RESEND_API_KEY, CONTACT_TO_EMAIL (comma-separated allowed),
 * optional CONTACT_FROM_EMAIL (needs a domain verified in Resend, e.g. "Hallstat Website <website@contact.hallstat.com>").
 * TODO: forward `role` to a HubSpot contact property for lead triage once HubSpot is connected.
 */
const FALLBACK_FROM = "Hallstat Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fields[key] ??= issue.message;
    }
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", fields }, { status: 400 });
  }
  const d = parsed.data;

  // Honeypot filled → silently accept so bots learn nothing.
  if (d.website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL?.split(",").map((s) => s.trim()).filter(Boolean);
  if (!apiKey || !to?.length) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return NextResponse.json(
      { ok: false, error: "Our contact form is not available right now. Please try again later." },
      { status: 503 },
    );
  }

  const topic = contactTopics[d.topic];
  const text = [
    `New ${topic} inquiry from hallstat.com`,
    "",
    `Name:         ${d.name}`,
    `Organization: ${d.organization}`,
    `Role:         ${d.role}`,
    `Email:        ${d.email}`,
    `Topic:        ${topic}`,
    `Form:         ${d.source}`,
    "",
    "Message:",
    d.message || "(none)",
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || FALLBACK_FROM,
    to,
    replyTo: d.email,
    subject: `[${topic}] ${d.name} — ${d.organization}`,
    text,
  });

  if (error) {
    console.error("[contact] Resend error:", error.name, error.message);
    return NextResponse.json(
      { ok: false, error: "Sorry, your message couldn’t be sent right now. Please try again later." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
