import Image from "next/image";
import { cn } from "@/lib/utils";
import markWhite from "../../public/brand/hallstat-logo-white.png";
import markNavy from "../../public/brand/hallstat-logo-navy.png";
import wordmarkWhite from "../../public/brand/hallstat-wordmark-white.png";
import wordmarkNavy from "../../public/brand/hallstat-wordmark-navy.png";

const files = {
  mark: { white: markWhite, navy: markNavy },
  wordmark: { white: wordmarkWhite, navy: wordmarkNavy },
};

/**
 * Official Hallstat logos supplied by the owner (artwork unchanged).
 * - `wordmark`: horizontal "Hallstat" logo (owner's transparent PNGs). Used in the header.
 * - `mark`: diamond/chevron logo with name (from the 1472x2000 navy master; white = same artwork, white fill).
 * `white` for navy backgrounds, `navy` for light backgrounds. Size by height via className.
 */
export function Logo({
  shape = "wordmark",
  variant = "white",
  className,
  priority,
}: {
  shape?: "wordmark" | "mark";
  variant?: "white" | "navy";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={files[shape][variant]}
      alt="Hallstat"
      priority={priority}
      sizes={shape === "wordmark" ? "200px" : "120px"}
      className={cn(shape === "wordmark" ? "h-8 w-auto" : "h-16 w-auto", className)}
    />
  );
}
