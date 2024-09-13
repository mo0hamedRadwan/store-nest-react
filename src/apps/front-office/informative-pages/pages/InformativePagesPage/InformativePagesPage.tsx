import React from "react";

export type InformativePagesPageProps = {
  children: React.ReactNode;
};

function _InformativePagesPage({ children }: InformativePagesPageProps) {
  return <>{children}</>;
}

const InformativePagesPage = React.memo(_InformativePagesPage);
export default InformativePagesPage;
