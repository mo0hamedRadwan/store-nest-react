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
