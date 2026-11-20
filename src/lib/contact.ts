import { z } from "zod";
import { partnerRoles } from "@/content/home";

export const contactTopics = {
  partnership: "Partnership / licensing",
  investor: "Investor (deck request)",
  "technical-brief": "Technical brief request",
  clinician: "Clinician",
  media: "Media",
  other: "Other",
} as const;
export type ContactTopic = keyof typeof contactTopics;
export const isContactTopic = (v: unknown): v is ContactTopic =>
  typeof v === "string" && Object.hasOwn(contactTopics, v);

/** One line, no control characters — keeps header-bound values (subject) safe. */
const line = (max: number, required?: string) =>
  z
    .string(required ? { error: required } : undefined)
    .trim()
    .max(max)
    .transform((s) => s.replace(/[\r\n\t]+/g, " "));

export const contactSchema = z.object({
  name: line(120, "Please enter your name.").pipe(z.string().min(1, "Please enter your name.")),
  organization: line(160, "Please enter your organization.").pipe(z.string().min(1, "Please enter your organization.")),
  role: z.enum(partnerRoles, { message: "Please choose your role." }),
  topic: z.enum(Object.keys(contactTopics) as [ContactTopic, ...ContactTopic[]]).default("partnership"),
  email: z.string({ error: "Please enter a valid email address." }).trim().max(200).pipe(z.email("Please enter a valid email address.")),
  message: z.string().trim().max(5000, "Please keep your message under 5,000 characters.").optional().default(""),
  source: line(60).optional().default("website"),
  /** Honeypot: real people never fill this hidden field. */
  website: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
