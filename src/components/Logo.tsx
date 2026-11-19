import { cn } from "@/lib/utils";

/** Text wordmark. TODO: replace with the official Hallstat logo file when supplied. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("text-xl font-bold tracking-tight", className)}>
      Hall<span className="text-accent">stat</span>
    </span>
  );
}
