import { cn } from "@/lib/utils";

/**
 * TODO: replace with the licensed full-system product render (BLUEPRINT 3: product renders, no stock gradients).
 * Until then this is a clearly labelled placeholder frame.
 */
export function ProductVisual({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <figure
      className={cn(
        "flex aspect-[4/3] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center",
        tone === "dark" ? "border-white/25 text-white/70" : "border-line bg-mist text-muted",
        className,
      )}
    >
      <svg viewBox="0 0 240 80" className="w-3/4 max-w-xs" aria-hidden>
        <path
          d="M10 40 Q 60 40 90 40 L 150 40 Q 175 40 185 30 L 230 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="150" cy="40" r="11" fill="none" stroke="currentColor" strokeWidth="4" />
      </svg>
      <figcaption className="mt-4 text-sm">TODO: Hallstat full-system product render</figcaption>
    </figure>
  );
}
