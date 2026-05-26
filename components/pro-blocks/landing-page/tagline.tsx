import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const taglineVariants = cva(
  "flex items-center justify-center text-sm font-medium w-fit gap-1 [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary px-4 py-1.5 rounded-full",
        ghost: "bg-muted text-muted-foreground px-4 py-1.5 rounded-full",
        white: "text-white bg-white/10 px-4 py-1.5 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface TaglineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof taglineVariants> {
  asChild?: boolean;
}

function Tagline({
  className,
  variant,
  asChild = false,
  children,
  ...props
}: TaglineProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={cn(taglineVariants({ variant, className }))} {...props}>
      {children}
    </Comp>
  );
}

export { Tagline, taglineVariants };
