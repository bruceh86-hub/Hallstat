import Image from "next/image";
import { cn } from "@/lib/utils";
import systemPhoto from "../../../public/images/product/hallstat-system.jpg";

/**
 * Full Hallstat system photo (cropped from the current product page).
 * TODO: swap in the high-resolution original / licensed render when available.
 */
export function ProductVisual({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <figure className={cn("rounded-md bg-white p-6 shadow-sm ring-1 ring-black/5", className)}>
      <Image
        src={systemPhoto}
        alt="The Hallstat Foley catheter system: silicone catheter, drainage tubing, urine meter and collection bag"
        className="mx-auto h-auto max-h-[28rem] w-auto"
        sizes="(min-width: 768px) 330px, 80vw"
        placeholder="blur"
        priority={priority}
      />
    </figure>
  );
}
