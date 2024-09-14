import { Form } from "@mongez/react-form";
import { Link, navigateBack } from "@mongez/react-router";
import { BookOpen } from "lucide-react";
import Footer from "src/apps/front-office/design-system/layouts/Footer/Footer";
import Header from "src/apps/front-office/design-system/layouts/Header/Header";
import Checkbox from "./components/Checkbox";
import EmailInput from "./components/EmailInput";
import HeadOfRegister from "./components/HeadOfRegister";
import PasswordInput from "./components/PasswordInput";
import RadioGroup from "./components/RadioGroup";
import RadioInput from "./components/RadioInput";
import SocialLogin from "./components/SocialLogin";
import TextInput from "./components/TextInput";
import "./input.css";

export default function RegisterPage() {
  const submitForm = ({ values, form }) => {
    fetch("https://store.mentoor.io/register", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        clientId: "127295491s",
        //  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcwMzI3MDYyLCJfaWQiOiI2NmIxMjJmMTg1MjJkZDUyMDE1ZGFlNDkiLCJ1c2VyVHlwZSI6Imd1ZXN0IiwiY3JlYXRlZEF0IjoxNzIyODg0ODQ5NTExLCJpYXQiOjE3MjI4ODQ4NDl9.kEYoeZp3D5PmeohyEodeBwfswUOiKnROQrTJGiF5YUk`,
      },
    })
      .then(() => {
        navigateBack(); //go back page before
      })
      .catch(() => {
        form.submitting(false);
      });
    // register(values) this show error!
    //   .then(() => {
    //     console.log("Success");
    //   })
    //   .catch(() => {
    //     console.log("error");
    //   });
  };
  return (
    <>
      <Header />
      <div className="container lg:w-5/6 xl:w-4/6 grid gap-7 grid-cols-4 my-20">
        <div className="col-span-4 md:col-span-3 lg:col-span-2 ms-3 lg:ms-0">
          <HeadOfRegister />
          <Form onSubmit={submitForm} className="flex flex-col gap-2">
            <TextInput
              type="text"
              name="name"
              placeholder="Username"
              required
            />
            <EmailInput
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <PasswordInput
              type="password"
              name="password"
              placeholder="Password"
              minLength={8}
              maxLength={16}
              required
            />
            <PasswordInput
              type="confirm-password"
              name="confirmPassword"
              placeholder="Confirm Password"
              match="password"
              minLength={8}
              maxLength={16}
              required
            />
            <RadioGroup name="user" defaultValue="vendor">
              <div className="mb-2 ms-6">
                <RadioInput value="customer" id="customer">
                  I am a customer
                </RadioInput>
              </div>
              <div className="ms-6">
                <RadioInput value="vendor" id="vendor">
                  I am a vendor
                </RadioInput>
              </div>
            </RadioGroup>
            <div className="flex justify-between mt-7 mb-7 items-center">
              <div className="flex gap-2 text-[13px] font-semibold">
                <Checkbox name="policy" id="policy" required={true} />
                <label htmlFor="policy" className="check-policy">
                  I agree to terms & Policy.
                </label>
              </div>
              <div className="flex gap-1 text-[13px] items-center">
                <BookOpen className="text-[#B6B6B6] w-[18px] h-[18px]" />
                <Link
                  to={`/page-privacy-policy`}
                  className="cursor-pointer text-[#3BB77E] font-semibold duration-300 hover:text-[#FDC040]">
                  Learn more
                </Link>
              </div>
            </div>
            <button className="w-fit mb-8 rounded-[10px] text-white bg-[#3BB77E] font-medium py-4 px-10 duration-300 hover:-translate-y-[5px]  hover:bg-[#29A56C]">
              Submit & Register
            </button>
          </Form>
          <p className="text-[13px] text-[#B6B6B6]">
            <b>Note:</b>Your personal data will be used to support your
            experience throughout this website, to manage access to your
            account, and for other purposes described in our privacy policy
          </p>
        </div>
        <SocialLogin />
      </div>
      <Footer />
    </>
  );
}
