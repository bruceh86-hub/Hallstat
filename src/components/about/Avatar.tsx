import Image from "next/image";
import { cn } from "@/lib/utils";

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s+/, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

/** Headshot, or an initials placeholder until a photo is supplied (TODO). */
export function Avatar({ name, photo, alt, className }: { name: string; photo?: string; alt?: string; className?: string }) {
  if (photo) {
    return (
      <Image
        src={photo}
        alt={alt ?? name}
        width={320}
        height={320}
        className={cn("aspect-square rounded-full object-cover", className)}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={cn(
        "flex aspect-square items-center justify-center rounded-full bg-mist text-2xl font-bold text-navy ring-1 ring-line",
        className,
      )}
    >
      {initials(name)}
    </div>
  );
}
