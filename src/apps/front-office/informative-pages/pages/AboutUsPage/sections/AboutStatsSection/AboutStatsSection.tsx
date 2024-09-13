import React from "react";
function _AboutStatsSection() {
  return (
    <div className="relative p-10 body-t-5 bg-[url('https://nest-frontend-rtl-v6.vercel.app/assets/imgs/page/about-9.png')] bg-cover bg-center">
      <div className="overlay bg-[#4B675A] absolute inset-0 opacity-80"></div>
      <div className="relative text-white hidden md:grid md:grid-cols-2 lg:grid-cols-5 z-50">
        <div className="box-info my-8 text-center">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">Glorious years</p>
        </div>
        <div className="box-info my-8 text-center">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">Happy customers</p>
        </div>
        <div className="box-info my-8 text-center">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">Successful projects</p>
        </div>
        <div className="box-info my-8 text-center">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">Professional team</p>
        </div>
        <div className="box-info my-8 text-center hidden lg:block">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">Global presence</p>
        </div>
      </div>
    </div>
  );
}

const AboutStatsSection = React.memo(_AboutStatsSection);
export default AboutStatsSection;
