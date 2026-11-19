import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Navy text on teal: 5.1:1 contrast.
        primary: "bg-accent text-navy hover:bg-[#17bdb2]",
        dark: "bg-navy text-white hover:bg-navy-800",
        outline: "border border-current bg-transparent hover:bg-white/10",
        link: "text-accent-strong underline-offset-4 hover:underline",
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
