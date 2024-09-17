import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { appleIcon, googleIcon, paymentMethod } from "assets/footerImages";

export default function FooterAppInstall() {
  return (
    <div className="flex flex-col text-specialColor-secondary flex-wrap lg:pt-0 ">
      <h4 className="font-bold leading-[1.2] text-2xl capitalize mt-[15px] mb-5 font-custom">
        {trans("installApp")}
      </h4>
      <p className="mb-[5px] text-[15px] font-normal leading-6 font-lato">
        {trans("installAppContentOne")}
      </p>
      <div className="flex mt-[25px] mb-[33px] cursor-pointer">
        <Link
          className="mr-3 hover:-translate-y-2"
          style={{ transition: "all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1)" }}>
          <img src={appleIcon} alt="apple-icon" className="max-w-[120px]" />
        </Link>
        <Link
          className="hover:-translate-y-2"
          style={{ transition: "all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1)" }}>
          <img src={googleIcon} alt="google-icon" className="max-w-[120px]" />
        </Link>
      </div>
      <p className="mb-5 font-normal leading-6 text-[15px] font-lato">
        {trans("installAppContentTwo")}
      </p>
      <img src={paymentMethod} alt="payment-method" />
    </div>
  );
}
