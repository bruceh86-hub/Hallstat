import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export function Figure({
  src,
  alt,
  caption,
  className,
  priority,
}: {
  src: StaticImageData;
  alt: string;
  caption?: React.ReactNode;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("rounded-2xl bg-white p-5 ring-1 ring-black/5", className)}>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        priority={priority}
        sizes="(min-width: 768px) 45vw, 90vw"
        className="mx-auto h-auto max-h-[26rem] w-auto"
      />
      {caption && <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>}
    </figure>
  );
}
