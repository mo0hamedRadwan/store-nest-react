import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { Link, navigateTo } from "@mongez/react-router";
import Footer from "layouts/BaseLayout/components/Footer/Footer";
import Header from "layouts/BaseLayout/components/Header/Header";
import { BookOpen } from "lucide-react";
import endpoint from "shared/endpoint";
import { URLS } from "shared/utils";
import CheckboxInput from "../common-components-in-account/CheckboxInput";
import "../common-components-in-account/locales";
import TextInput from "../common-components-in-account/TextInput";
import "./../common-components-in-account/input.css";
import HeadOfForgetPassword from "./HeadOfForgetPassword";
export default function ForgetPasswordPage() {
  const handleSubmit = async ({ values }) => {
    try {
      console.log(`values are ${JSON.stringify(values)}`);
      await endpoint.post("/forget-password", values);
      // console.log("success");
      navigateTo(URLS.home);
    } catch (error) {
      console.log(error);
    }
  };

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
        <Form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
          <button
            type="submit"
            className="w-fit mb-8 rounded-[10px] text-white bg-[#253D4E] font-medium py-4 px-10 duration-300 hover:-translate-y-[5px]  hover:bg-[#29A56C]">
            {trans("forgetButton")}
          </button>
        </Form>
      </div>

      <Footer />
    </>
  );
}
