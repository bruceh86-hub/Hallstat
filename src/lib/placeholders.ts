/**
 * TODO placeholders are visible on local builds and Vercel previews (so gaps are easy to spot)
 * and hidden on the production site, so unverified or unfinished items never go public.
 * VERCEL_ENV is set by Vercel at build time: "production" | "preview" | "development".
 */
export const showPlaceholders = process.env.VERCEL_ENV !== "production";
export const isTodo = (v?: string) => !v || v.includes("TODO");
