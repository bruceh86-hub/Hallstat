import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm font-semibold tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // For dark (navy) sections: white button, navy text.
        primary: "bg-white text-navy hover:bg-navy-50",
        // For light sections: navy button, white text.
        dark: "bg-navy text-white hover:bg-navy-700",
        outline: "border border-current bg-transparent hover:bg-white/10",
        link: "text-navy-600 underline-offset-4 hover:underline",
      },
      size: {
        md: "h-11 px-5 text-base",
        lg: "h-13 px-7 text-lg",
        sm: "h-9 px-3 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
