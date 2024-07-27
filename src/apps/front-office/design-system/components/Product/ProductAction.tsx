import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "design-system/components/ui/tooltip";

export type ProductActionProps = {
  tooltip: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function ProductAction({ tooltip, Icon }: ProductActionProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger>
          <button className="p-2">
            <Icon className="w-3 h-3 text-primary hover:text-secondary hover:-translate-y-1.5 transition-all duration-400" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="bg-primary text-primary-foreground text-xs animate-bounce-up">
          <div>{tooltip}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
