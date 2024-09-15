import React from "react";

export type HeaderPageProps = {
  title: string;
};
function _HeaderPage({ title }: HeaderPageProps) {
  return (
    <h2 className="text-4xl font-bold text-center capitalize my-4 bg-[url('https://nest-frontend-rtl-v6.vercel.app/assets/imgs/theme/wave.png')] bg-no-repeat bg-bottom pb-7">
      {title}
    </h2>
  );
}

const HeaderPage = React.memo(_HeaderPage);
export default HeaderPage;
