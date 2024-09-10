/* eslint-disable unused-imports/no-unused-vars */
import React from "react";

export type CatalogPageProps = {
  // props go here
};

function _CatalogPage(props: CatalogPageProps) {
  return (
    <>
      <h1>CatalogPage</h1>
    </>
  );
}

const CatalogPage = React.memo(_CatalogPage);
export default CatalogPage;
