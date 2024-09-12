import { trans } from "@mongez/localization";

export default function Termination() {
  return (
    <div className="text-mainColor">
      <h2 className="text-2xl leading-[1.2] font-bold mb-6">
        {trans("termination")}
      </h2>
      <p className="text-[17px] mb-4 font-normal">
        {trans("terminationContentOne")}
      </p>
      <p className="text-[17px] mb-4 font-normal">
        {trans("terminationContentTwo")}
      </p>
    </div>
  );
}
