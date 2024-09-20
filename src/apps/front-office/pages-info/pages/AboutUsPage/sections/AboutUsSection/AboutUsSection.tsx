import { trans } from "@mongez/localization";
import React from "react";
function _AboutUsSection() {
  return (
    <div className="container grid gap-x-7 grid-cols-1 lg:grid-cols-3">
      <div className="box-info my-4">
        <h5 className="capitalize text-3xl font-bold my-4">
          {trans("about-us.whoWeAre")}
        </h5>
        <p className="line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid,
          iure blanditiis voluptate repellendus temporibus voluptates unde eum
          fuga, corporis, ea tenetur quibusdam
        </p>
      </div>
      <div className="box-info my-4">
        <h5 className="capitalize text-3xl font-bold my-4">
          {trans("about-us.ourHistory")}
        </h5>
        <p className="line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid,
          iure blanditiis voluptate repellendus temporibus voluptates unde eum
          fuga, corporis, ea tenetur quibusdam
        </p>
      </div>
      <div className="box-info my-4">
        <h5 className="capitalize text-3xl font-bold my-4">
          {trans("about-us.ourMission")}
        </h5>
        <p className="line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid,
          iure blanditiis voluptate repellendus temporibus voluptates unde eum
          fuga, corporis, ea tenetur quibusdam
        </p>
      </div>
    </div>
  );
}

const AboutUsSection = React.memo(_AboutUsSection);
export default AboutUsSection;
