import { trans } from "@mongez/localization";
import FooterAppInstall from "./FooterAppInstall";
import FooterContactInfo from "./FooterContactInfo";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 sm:px-5 w-11/12 lg:w-full mx-auto ">
      <div className="flex flex-wrap justify-between">
        <FooterContactInfo />
        <FooterLinks />
        <FooterAppInstall />
      </div>

      <div className="border border-solid border-shopCategoryColor w-11/12 lg:w-full mx-auto mt-2" />

      <div className="flex flex-wrap lg:flex-row md:justify-between justify-start items-center py-3 text-specialColor-primary w-11/12 lg:w-full mx-auto ">
        <div className="flex-[0.7] mb-3">
          <p className="lg:text-start whitespace-nowrap font-normal leading-6 text-[14px] text-specialColor-primary">
            © {currentYear}{" "}
            <strong className="text-priceNowColor">Nest</strong> -
            {trans("templateName")}
            <br />
            {trans("copyRight")}
          </p>
        </div>

        <div className="hidden lg:flex flex-wrap justify-start gap-4 mb-4 lg:mb-0 flex-1 font-custom">
          {["1900 - 6666", "1900 - 6666"].map((phone, index) => (
            <div key={index} className="flex justify-center items-center gap-2">
              <i className="bx bx-phone-call min-w-[10px] max-w-[30px] mr-3 text-4xl"></i>

              <p className="flex flex-col text-[26px] font-bold text-priceNowColor font-custom">
                {phone}

                <span className="font-medium text-xs text-specialColor-primary tracking-[0.9]">
                  {index === 0 ? "Working 8:00 - 22:00" : "24/7 Support Center"}
                </span>
              </p>
            </div>
          ))}
        </div>
        <FooterSocialMedia />
      </div>
    </footer>
  );
}
