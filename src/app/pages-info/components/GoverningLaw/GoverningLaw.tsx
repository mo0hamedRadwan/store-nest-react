import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { URLS } from "shared/utils";

export default function GoverningLaw() {
  return (
    <div className="text-specialColor-secondary">
      <h2 className="text-2xl leading-8 font-bold mb-[26px] font-custom">
        {trans("governingLaw")}
      </h2>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("governingLawContentOne")}
      </p>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("governingLawContentTwo")}
      </p>

      <h2 className="text-2xl leading-8 font-bold mb-[26px] font-custom">
        {trans("changes")}
      </h2>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("changesContentOne")}
      </p>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("changesContentTwo")}
      </p>

      <h2 className="text-2xl leading-8 font-bold mb-[26px] font-custom">
        {trans("contactUs")}
      </h2>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("contactUsContentOne")}
        <Link
          to={URLS.pages.contactUs}
          className="text-priceNowColor pl-2 font-lato hover:text-[#FDC040]">
          {trans("contactUs")}
        </Link>
        .
      </p>
    </div>
  );
}
