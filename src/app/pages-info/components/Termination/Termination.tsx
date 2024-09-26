import { trans } from "@mongez/localization";

export default function Termination() {
  return (
    <div className="text-specialColor-secondary">
      <h2 className="text-2xl leading-8 font-bold mb-[26px] font-custom">
        {trans("termination")}
      </h2>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("terminationContentOne")}
      </p>
      <p className="text-[17px] mb-[17px] font-normal font-lato">
        {trans("terminationContentTwo")}
      </p>
    </div>
  );
}
