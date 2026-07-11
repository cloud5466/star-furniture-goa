import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-dark)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-gold)] text-[var(--color-bg-dark)] shadow-[0_12px_34px_rgba(212,160,60,0.18)] hover:bg-[var(--color-gold-dark)] hover:text-[var(--color-cream)]",
        dark:
          "bg-[var(--color-bg-dark)] text-[var(--color-cream)] hover:bg-[#2a2a2a]",
        outline:
          "border border-[rgba(212,160,60,0.45)] bg-transparent text-[var(--color-cream)] hover:border-[var(--color-gold)] hover:bg-[rgba(212,160,60,0.08)]",
        ghost:
          "bg-transparent text-[var(--color-cream)] hover:bg-[rgba(255,248,238,0.08)]",
        icon:
          "bg-transparent text-[var(--color-cream)] hover:bg-[rgba(255,248,238,0.08)]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-10 px-4 text-xs",
        lg: "h-12 px-6",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
