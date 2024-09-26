import React from "react";
import { createPortal } from "react-dom";
export type PortalProps = {
  children: React.ReactNode;
  containerId: string;
};

export default function Portal({ children, containerId }: PortalProps) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  return createPortal(children, container!);
}
