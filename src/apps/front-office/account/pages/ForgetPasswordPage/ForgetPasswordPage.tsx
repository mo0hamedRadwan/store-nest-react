import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import { BookOpen } from "lucide-react";
import Footer from "src/apps/front-office/design-system/layouts/Footer/Footer";
import Header from "src/apps/front-office/design-system/layouts/Header/Header";
import URLS from "src/apps/front-office/utils/urls";
import CheckboxInput from "../common-components-in-account/CheckboxInput";
import TextInput from "../common-components-in-account/TextInput";
import "./../common-components-in-account/input.css";
import "./../common-components-in-account/locales";
import HeadOfForgetPassword from "./HeadOfForgetPassword";
export default function ForgetPasswordPage() {
  return (
    <>
      <Helmet
        title={trans("forgetTitleHelmet")}
        appendAppName={false}
        keywords={["online", "store", "forget", "متجر"]}
        description={trans("forgetDescriptionHelmet")}
      />
      <Header />
      <div className="container my-20 w-full xl:w-2/6 lg:w-3/6	">
        <HeadOfForgetPassword />
        <Form className="flex flex-col gap-2">
          <TextInput
            type="text"
            name="name_or_email"
            placeholder={trans("nameOrEmailPlaceHolder")}
            required
          />
          <div className="flex justify-between mt-7 mb-7 items-center">
            <div className="flex gap-2 text-[13px] font-semibold">
              <CheckboxInput
                name="checkPolicy"
                id="forget-password-policy"
                required
              />
              <label htmlFor="forget-password-policy" className="check-policy">
                {trans("checkBoxPrivacy")}
              </label>
            </div>
            <div className="flex gap-1 text-[13px] items-center">
              <BookOpen className="text-[#B6B6B6] w-[18px] h-[18px]" />
              <Link
                to={URLS.pages.privacyPolicy}
                className="cursor-pointer text-[#B6B6B6] font-semibold duration-300 hover:text-[#FDC040]">
                {trans("learnMor")}
              </Link>
            </div>
          </div>
          <button className="w-fit mb-8 rounded-[10px] text-white bg-[#253D4E] font-medium py-4 px-10 duration-300 hover:-translate-y-[5px]  hover:bg-[#29A56C]">
            {trans("forgetButton")}
          </button>
        </Form>
      </div>

      <Footer />
    </>
  );
}
