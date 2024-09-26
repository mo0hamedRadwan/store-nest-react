import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";

export default function TermsOfService() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="text-specialColor-secondary text-[17px]">
      <div className="mb-[30px]">
        <h2 className="text-[40px] leading-[1.2] font-bold font-custom text-specialColor-secondary mb-2">
          {trans("termsOfService")}
        </h2>

        <div className="flex justify-start items-center my-[15px] leading-[1] text-specialColor-primary text-[13px]">
          <span className="mr-[10px] font-lato">
            By
            <Link to="/" className="text-priceNowColor">
              John
            </Link>
          </span>
          <span className="font-lato mr-[10px] relative pl-[10px] before:content-[''] before:w-[4px] before:h-[4px] before:bg-[#d2d2d2] before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0">
            {formattedDate}
          </span>
          <span className="font-lato mr-[10px] relative pl-[10px] before:content-[''] before:w-[4px] before:h-[4px] before:bg-[#d2d2d2] before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0">
            8 mins read
          </span>
          <span className="font-lato mr-[10px] relative pl-[10px] before:content-[''] before:w-[4px] before:h-[4px] before:bg-[#d2d2d2] before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0">
            29k Views
          </span>
        </div>
      </div>

      <p className="font-lato mb-[17px] font-normal">
        {trans("termsOfServiceContentOne")}
      </p>
      <p className="font-lato mb-[17px] font-normal">
        {trans("termsOfServiceContentTwo")}
      </p>
      <p className="font-lato mb-[17px] font-normal">
        {trans("termsOfServiceContentThree")}
      </p>
    </div>
  );
}
