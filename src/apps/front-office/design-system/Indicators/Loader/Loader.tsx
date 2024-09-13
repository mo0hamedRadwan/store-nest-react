import { LoaderCircle } from "lucide-react";
import { cn } from "../../utils/utils";

export type LoaderProps = {
  size?: number;
  className?: string;
};
export default function Loader({ size = 50, className = "" }: LoaderProps) {
  return (
    <div className={cn("flex justify-center items-center h-screen", className)}>
      <div className="animate-spin">
        <LoaderCircle size={size} className="text-primary" />
      </div>
    </div>
  );
}
