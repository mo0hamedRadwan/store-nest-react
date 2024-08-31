import { cn } from "apps/front-office/design-system/utils/utils";

interface LoaderProps {
  size?: "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  className?: string;
}

export default function Loader({ size = "lg", className = "" }: LoaderProps) {
  return (
    <div className={cn("flex justify-center items-center h-screen", className)}>
      <i
        className={`bx bx-loader-alt text-${size} text-primary-default animate-spin}`}></i>
    </div>
  );
}
