import { trans } from "@mongez/localization";
import forgetImage from "assets/images/forgot_password.svg";
export default function HeadOfForgetPassword() {
  return (
    <>
      <div>
        <img src={forgetImage} alt="notFound" className="rounded-[15px]" />
      </div>
      <div>
        <h2 className="font-bold text-[40px] text-[#253D4E] mt-6 mb-5 leading-tight">
          {trans("forgetTitle")}
        </h2>
        <p className="mb-7 font-medium text-[15px] -mt-2 text-[#7E7E7E]">
          {trans("forgetDescription")}
        </p>
      </div>
    </>
  );
}
