import Image from "next/image";
import { cn } from "@/lib/utils";
import logoLight from "../../public/brand/hallstat-logo-light.png";
import logoNavy from "../../public/brand/hallstat-logo-navy.png";

/**
 * Official Hallstat logo (supplied by the owner; white background removed, artwork unchanged).
 * `light` = gray version for navy backgrounds, `navy` = primary version for light backgrounds.
 * Size it by height via className (e.g. "h-16"); width follows the logo's proportions.
 */
export function Logo({
  variant = "light",
  className,
  priority,
}: {
  variant?: "light" | "navy";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "light" ? logoLight : logoNavy}
      alt="Hallstat"
      priority={priority}
      sizes="120px"
      className={cn("h-16 w-auto", className)}
    />
  );
}
