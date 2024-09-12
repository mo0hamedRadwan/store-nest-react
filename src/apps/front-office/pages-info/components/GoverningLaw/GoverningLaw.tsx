import { trans } from "@mongez/localization";

export default function GoverningLaw() {
  return (
    <div className="text-mainColor">
      <h2 className="text-2xl leading-[1.2] font-bold mb-6">
        {trans("governingLaw")}
      </h2>
      <p className="text-[17px] mb-4 font-normal">
        {trans("governingLawContentOne")}
      </p>
      <p className="text-[17px] mb-4 font-normal">
        {trans("governingLawContentTwo")}
      </p>

      <h2 className="text-2xl leading-[1.2] font-bold mb-6">
        {trans("changes")}
      </h2>
      <p className="text-[17px] mb-4 font-normal">
        {trans("changesContentOne")}
      </p>
      <p className="text-[17px] mb-4 font-normal">
        {trans("changesContentTwo")}
      </p>

      <h2 className="text-2xl leading-[1.2] font-bold mb-6">
        {trans("contactUs")}
      </h2>
      <p className="text-[17px] mb-4 font-normal">
        {trans("contactUsContentOne")}
        <a href="/" className="text-priceNowColor pl-2">
          {trans("contactUs")}
        </a>
        .
      </p>
    </div>
  );
}
