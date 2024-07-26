import { Link } from "@mongez/react-router";
import { appleIcon, googleIcon, paymentMethod } from "assets/footerImages";

export default function FooterAppInstall() {
  return (
    <div className="flex flex-col flex-wrap p-6 lg:pt-0">
      <h4 className="font-bold text-2xl">Install App</h4>
      <p className="py-4">From App Store or Google Play</p>
      <div className="flex py-3 cursor-pointer">
        <Link className="pr-3 hover:-translate-y-2 duration-200">
          <img src={appleIcon} alt="apple-icon" className="max-w-[120px]" />
        </Link>
        <Link className="hover:-translate-y-2 duration-200">
          <img src={googleIcon} alt="google-icon" className="max-w-[120px]" />
        </Link>
      </div>
      <p className="py-3">Secured Payment Gateways</p>
      <img src={paymentMethod} alt="payment-method" />
    </div>
  );
}
