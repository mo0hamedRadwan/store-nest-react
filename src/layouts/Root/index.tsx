import { type PropsWithChildren } from "react";

export default function Root({ children }: PropsWithChildren) {
  return <div className="font-custom">{children}</div>;
}
