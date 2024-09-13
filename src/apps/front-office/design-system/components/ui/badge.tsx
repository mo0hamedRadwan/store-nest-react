import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "apps/front-office/design-system/utils/utils";

const badgeVariants = cva("inline-flex justify-center items-center text-xs", {
  variants: {
    variant: {
      default:
        "border-transparent bg-slate-900 text-slate-50 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
      product:
        "h-8 px-6 border-transparent text-white rounded-tl-3xl rounded-br-3xl",
      icon: "w-6 h-6 rounded-full text-white text-center",
      danger:
        "inline-flex items-center rounded-lg bg-[#fde0e9] px-6 py-2 text-md font-bold text-[#f74b81] ring-1 ring-inset ring-red-600/10",
      success:
        "inline-flex items-center rounded-md bg-green-50 px-6 py-2 text-xs font-bold text-green-700 ring-1 ring-inset ring-green-600/10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
