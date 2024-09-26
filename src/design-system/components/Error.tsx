import { ReactNode } from "react";

export type ErrorProps = {
  error: ReactNode;
};
export default function Error({ error }: ErrorProps) {
  if (!error) return null;
  return <div className="text-red-600">{error}</div>;
}
