import { trans } from "@mongez/localization";

export default function Restrictions() {
  return (
    <div className=" text-mainColor">
      <h2 className="text-2xl leading-[1.2] font-bold mb-6">
        {trans("rightsAndRestrictions")}
      </h2>
      <ul className="list-decimal list-inside">
        <li className="mb-4 text-[1rem]">
          {trans("rightsAndRestrictionsContentOne")}
        </li>
        <li className="mb-4 text-[1rem]">
          {trans("rightsAndRestrictionsContentTwo")}
        </li>
        <li className="mb-4 text-[1rem]">
          {trans("rightsAndRestrictionsContentThree")}
        </li>
        <li className="mb-4 text-[1rem]">
          {trans("rightsAndRestrictionsContentFour")}
        </li>
        <li className="mb-4 text-[1rem]">
          {trans("rightsAndRestrictionsContentFive")}
        </li>
      </ul>

      {/* Links To Other Web Sites */}
      <h2 className="text-2xl leading-[1.2] font-bold mb-6">
        {trans("linksToOtherWebSites")}
      </h2>
      <p className="text-[17px] mb-4 font-normal">
        {trans("linksToOtherWebSitesContentOne")}
      </p>
      <p className="text-[17px] mb-4 font-normal">
        {trans("linksToOtherWebSitesContentTwo")}
      </p>
      <p className="text-[17px] mb-4 font-normal">
        {trans("linksToOtherWebSitesContentThree")}
      </p>
    </div>
  );
}
