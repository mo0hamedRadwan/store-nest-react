import { trans } from "@mongez/localization";
import React from "react";
function _AboutStatsSection() {
  return (
    <div className="relative p-10 body-t-5 bg-[url('/images/about-us/about-9.png')] bg-cover bg-center">
      <div className="overlay bg-[#4B675A] absolute inset-0 opacity-80"></div>
      <div className="relative text-white hidden md:grid md:grid-cols-2 lg:grid-cols-5 z-50">
        <div className="box-info my-8 text-center">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">
            {trans("about-us.gloriousYears")}
          </p>
        </div>
        <div className="box-info my-8 text-center">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">
            {trans("about-us.happyCustomers")}
          </p>
        </div>
        <div className="box-info my-8 text-center">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">
            {trans("about-us.successfulProjects")}
          </p>
        </div>
        <div className="box-info my-8 text-center">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">
            {trans("about-us.professionalTeam")}
          </p>
        </div>
        <div className="box-info my-8 text-center hidden lg:block">
          <div className="rate text-7xl font-bold">+0</div>
          <p className="text-2xl font-semibold">
            {trans("about-us.globalPresence")}
          </p>
        </div>
      </div>
    </div>
  );
}

const AboutStatsSection = React.memo(_AboutStatsSection);
export default AboutStatsSection;
