// import image
import { phoneCall } from "assets/footerImages";

// import components
import FooterAppInstall from "./FooterAppInstall";
import FooterContactInfo from "./FooterContactInfo";
import FooterLinks from "./FooterLinks";

import { trans } from "@mongez/localization";

export default function Footer() {
  // create dynamically year
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="flex justify-between items-start py-4 px-9 w-full flex-wrap border border-solid border-gray-400">
        <FooterContactInfo />
        <FooterLinks />
        <FooterAppInstall />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center py-5 text-[#7E7E7E] px-3">
        <div className="mb-4 lg:mb-0">
          <p className="pl-4 text-center lg:text-start ">
            © {currentYear} <strong>Nest</strong> {trans("templateName")}
            <br />
            {trans("copyRight")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center text-center gap-4 mb-4 lg:mb-0 ">
          {["1900 - 6666", "1900 - 6666"].map((phone, index) => (
            <div
              key={index}
              className="max-w-[300px] flex flex-col justify-center items-center gap-2 ">
              <img src={phoneCall} alt="phone-call" className="w-[30px]" />
              <p className="flex flex-col">
                <span className="text-[16px] sm:text-[26px] font-bold text-primary-default">
                  {phone}
                </span>
                <span>
                  {index === 0 ? "Working 8:00 - 22:00" : "24/7 Support Center"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
