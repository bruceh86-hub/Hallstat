import Image from "next/image";
import { cn } from "@/lib/utils";
import logoWhite from "../../public/brand/hallstat-logo-white.png";
import logoNavy from "../../public/brand/hallstat-logo-navy.png";

/**
 * Official Hallstat logo, from the owner's 1472x2000 navy master (white background removed, artwork unchanged).
 * `white` = for navy backgrounds (same artwork, white fill), `navy` = primary version for light backgrounds.
 * Size it by height via className (e.g. "h-16"); width follows the logo's proportions.
 */
export function Logo({
  variant = "white",
  className,
  priority,
}: {
  variant?: "white" | "navy";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "white" ? logoWhite : logoNavy}
      alt="Hallstat"
      priority={priority}
      sizes="120px"
      className={cn("h-16 w-auto", className)}
    />
  );
}
