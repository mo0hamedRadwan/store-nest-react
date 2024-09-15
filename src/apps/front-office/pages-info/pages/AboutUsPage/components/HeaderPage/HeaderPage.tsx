import React from "react";

export type HeaderPageProps = {
  title: string;
};
function _HeaderPage({ title }: HeaderPageProps) {
  return (
    <h2 className="text-4xl font-bold text-center capitalize mt-12 bg-[url('/public/images/about-us/wave.png')] bg-no-repeat bg-bottom pb-7">
      {title}
    </h2>
  );
}

const HeaderPage = React.memo(_HeaderPage);
export default HeaderPage;
