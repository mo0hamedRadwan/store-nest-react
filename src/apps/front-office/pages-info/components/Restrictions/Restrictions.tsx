import { trans } from "@mongez/localization";

export default function Restrictions() {
  return (
    <div className=" text-specialColor-secondary">
      <h2 className="text-2xl leading-8 font-bold mb-[26px] font-custom">
        {trans("rightsAndRestrictions")}
      </h2>
      <ol className="list-decimal list-inside mb-[30px] pl-1 ">
        <li className="mb-4 text-[16px] font-lato">
          {trans("rightsAndRestrictionsContentOne")}
        </li>
        <li className="mb-4 text-[16px] font-lato">
          {trans("rightsAndRestrictionsContentTwo")}
        </li>
        <li className="mb-4 text-[16px] font-lato">
          {trans("rightsAndRestrictionsContentThree")}
        </li>
        <li className="mb-4 text-[16px] font-lato">
          {trans("rightsAndRestrictionsContentFour")}
        </li>
        <li className="text-[16px] font-lato">
          {trans("rightsAndRestrictionsContentFive")}
        </li>
      </ol>

      {/* Links To Other Web Sites */}
      <h2 className="text-2xl leading-8 font-bold mb-[26px] font-custom text-specialColor-secondary">
        {trans("linksToOtherWebSites")}
      </h2>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("linksToOtherWebSitesContentOne")}
      </p>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("linksToOtherWebSitesContentTwo")}
      </p>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("linksToOtherWebSitesContentThree")}
      </p>
    </div>
  );
}
