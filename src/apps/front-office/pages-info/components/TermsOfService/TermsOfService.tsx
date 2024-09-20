import { trans } from "@mongez/localization";

export default function TermsOfService() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="text-mainColor">
      <h2 className="text-[40px] leading-[1.2] font-bold mb-2">
        {trans("termsOfService")}
      </h2>

      <div className="text-gray-500 text-sm mb-6">
        <span>By</span>
        <span className="text-priceNowColor">John</span>
        <span className="mx-2">.</span>
        <span>{formattedDate}</span>
        <span className="mx-2">.</span>
        <span>8 mins read</span>
        <span className="mx-2">.</span>
        <span>29k Views</span>
      </div>

      <p className="text-[17px] mb-4 font-normal">
        {trans("termsOfServiceContentOne")}
      </p>
      <p className=" text-[17px] mb-4 font-normal">
        {trans("termsOfServiceContentTwo")}
      </p>
      <p className=" text-[17px] mb-4 font-normal">
        {trans("termsOfServiceContentThree")}
      </p>
    </div>
  );
}
