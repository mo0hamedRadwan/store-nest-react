import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import { BookOpen } from "lucide-react";
import Footer from "src/apps/front-office/design-system/layouts/Footer/Footer";
import Header from "src/apps/front-office/design-system/layouts/Header/Header";
import endpoint from "src/shared/endpoint";
import CheckboxInput from "./components/CheckboxInput";
import EmailInput from "./components/EmailInput";
import HeadOfRegister from "./components/HeadOfRegister";
import PasswordInput from "./components/PasswordInput";
import RadioGroup from "./components/RadioGroup";
import RadioInput from "./components/RadioInput";
import SocialLogin from "./components/SocialLogin";
import TextInput from "./components/TextInput";
import "./input.css";
import "./locales";

export default function RegisterPage() {
  const submitForm = async ({ values }) => {
    console.log(values);

    try {
      await endpoint.post("/register", values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet
        title={trans("registerTitle")}
        appendAppName={false}
        keywords={["online", "store", "متجر"]}
        description={trans("registerDescription")}
      />
      <Header />
      <div className="container lg:w-5/6 xl:w-4/6 grid gap-7 grid-cols-4 my-20">
        <div className="col-span-4 md:col-span-3 lg:col-span-2 ms-3 lg:ms-0">
          <HeadOfRegister />
          <Form onSubmit={submitForm} className="flex flex-col gap-2">
            <TextInput
              type="text"
              name="userName"
              placeholder={trans("namePlaceHolder")}
              required
            />
            <EmailInput
              type="email"
              name="email"
              placeholder={trans("emailPlaceHolder")}
              required
            />
            <PasswordInput
              type="password"
              name="password"
              placeholder={trans("passwordPlaceHolder")}
              minLength={8}
              maxLength={16}
              required
            />
            <PasswordInput
              type="confirm-password"
              name="confirmPassword"
              placeholder={trans("confirmPasswordPlaceHolder")}
              match="password"
              minLength={8}
              maxLength={16}
              required
            />
            <RadioGroup name="typeUser" defaultValue="vendor">
              <div className="mb-2 ms-6">
                <RadioInput value="customer" id="customer">
                  {trans("radioFirstChoose")}
                </RadioInput>
              </div>
              <div className="ms-6">
                <RadioInput value="vendor" id="vendor">
                  {trans("radioSecondChoose")}
                </RadioInput>
              </div>
            </RadioGroup>
            <div className="flex justify-between mt-7 mb-7 items-center">
              <div className="flex gap-2 text-[13px] font-semibold">
                <CheckboxInput name="checkPolicy" id="policy" required />
                <label htmlFor="policy" className="check-policy">
                  {trans("checkBoxPrivacy")}
                </label>
              </div>
              <div className="flex gap-1 text-[13px] items-center">
                <BookOpen className="text-[#B6B6B6] w-[18px] h-[18px]" />
                <Link
                  to={`/page-privacy-policy`}
                  className="cursor-pointer text-[#3BB77E] font-semibold duration-300 hover:text-[#FDC040]">
                  {trans("learnMor")}
                </Link>
              </div>
            </div>
            <button className="w-fit mb-8 rounded-[10px] text-white bg-[#3BB77E] font-medium py-4 px-10 duration-300 hover:-translate-y-[5px]  hover:bg-[#29A56C]">
              {trans("buttonSubmit")}
            </button>
          </Form>
          <p className="text-[13px] text-[#B6B6B6]">
            <b>{trans("note")}:</b>
            {trans("noteDescription")}
          </p>
        </div>
        <SocialLogin />
      </div>
      <Footer />
    </>
  );
}
