import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "apps/front-office/design-system/components/ui/dialog";

export type DialogProps = {
  title?: string;
  description?: string;
  onViewClick?: () => void;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export default function CustomDialog({
  title,
  description,
  onViewClick,
  icon,
  children,
}: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <span
          onClick={onViewClick}
          className="flex justify-center items-center">
          {icon}
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{description}</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}
