import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "apps/front-office/design-system/utils/utils";

const buttonVariants = cva(
  "inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm capitalize font-bold  transition-all ease-in-out duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary-default text-slate-50 hover:bg-primary-hover transform hover:-translate-y-0.5",
        cart: "bg-primary-light text-primary-default hover:bg-primary-default  hover:text-white transform hover:-translate-y-0.5",
        outline:
          "text-gray-400 border border-slate-200 bg-white hover:bg-primary-default hover:text-white hover:border-transparent transform hover:-translate-y-0.5",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: "h-11 md:h-12 px-[10px] md:px-4 py-2",
        sm: "h-10 rounded-md px-5 py-2 text-sm",
        lg: "h-12 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
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
