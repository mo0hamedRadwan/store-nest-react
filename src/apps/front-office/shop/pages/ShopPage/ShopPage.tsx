import React from "react";

export type ShopPageProps = {
  // props go here
};
function _ShopPage() {
  return (
    <>
      <h1>ShopPage</h1>
    </>
  );
}

const ShopPage = React.memo(_ShopPage);
export default ShopPage;
