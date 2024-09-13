import { trans } from "@mongez/localization";
import FooterAppInstall from "./FooterAppInstall";
import FooterContactInfo from "./FooterContactInfo";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-3 sm:px-5 w-11/12 lg:w-full mx-auto">
      <div className="flex flex-wrap justify-between ">
        <FooterContactInfo />
        <FooterLinks />
        <FooterAppInstall />
      </div>

      <div className="border border-solid border-shopCategoryColor w-11/12 lg:w-full mx-auto mt-2" />

      <div className="flex flex-wrap lg:flex-row md:justify-between justify-start items-center py-3 text-[#7E7E7E] w-11/12 lg:w-full mx-auto ">
        <div className="flex-1 mb-3 text-[14px] leading-[24px]">
          <p className="lg:text-start whitespace-nowrap">
            © {currentYear} <strong className="text-primary">Nest</strong> -
            {trans("templateName")}
            <br />
            {trans("copyRight")}
          </p>
        </div>

        <div className="hidden lg:flex flex-wrap justify-start gap-4 mb-4 lg:mb-0 flex-1 pr-10">
          {["1900 - 6666", "1900 - 6666"].map((phone, index) => (
            <div key={index} className="flex justify-center items-center gap-2">
              <i className="bx bx-phone-call text-primary text-3xl"></i>

              <p className="flex flex-col">
                <span className="text-[16px] font-bold text-primary">
                  {phone}
                </span>
                <span>
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
