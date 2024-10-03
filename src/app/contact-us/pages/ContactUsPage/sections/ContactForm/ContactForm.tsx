import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { navigateTo } from "@mongez/react-router";
import { Button } from "design-system/components/ui/button";

import endpoint from "shared/endpoint";
import { URLS } from "shared/utils";
import EmailInput from "../../Components/EmailInput";
import PhoneInput from "../../Components/PhoneInput";
import TextArea from "../../Components/TextArea";
import TextInput from "../../Components/TextInput";

export default function ContactForm() {
  const handleSubmit = async ({ values }) => {
    console.log(values);
    try {
      const res = await endpoint.post("/contact", values);
      if (res.data.success) {
        console.log("Response:", res);
        navigateTo(URLS.home);
      }
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };
  return (
    <section className="my-10">
      <h5 className="text-2xl text-priceNowColor font-black mb-10">
        {trans("Contact form")}
      </h5>
      <div className="w-full flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-2/3 mr-8">
          <h1 className="text-5xl text-mainColor stroke-primary font-extrabold mb-4">
            {trans("Drop Us a Line")}
          </h1>
          <p className="text-sm text-specialColor-primary font-normal leading-6 mb-5">
            {trans(
              "Your email address will not be published. Required fields are marked *",
            )}
          </p>

          <Form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex w-full gap-6">
              <TextInput
                name="name"
                className="flex-1 rounded-lg focus:outline-none focus:border-priceNowColor h-16"
                placeholder={trans("First Name")}
              />
              <EmailInput
                name="email"
                className="flex-1 rounded-lg focus:outline-none focus:border-priceNowColor h-16"
                placeholder={trans("Email")}
              />
            </div>
            <div className="flex w-full gap-6">
              <PhoneInput
                name="phone"
                className="w-full rounded-lg focus:outline-none focus:border-priceNowColor h-16"
                placeholder={trans("Phone")}
              />
              <TextInput
                name="subject"
                className="w-full rounded-lg focus:outline-none focus:border-priceNowColor h-16"
                placeholder={trans("Subject")}
              />
            </div>
            <TextArea
              name="message"
              className="border-none focus:border-priceNowColor border h-[50px] shadow-none text-base w-full min-h-[200px] "
              placeholder={trans("Message")}
            />
            <Button className="text-xl bg-mainColor hover:bg-primary text-white !px-10 !py-5 !h-16 !mt-10">
              {trans("Send Message")}
            </Button>
          </Form>
        </div>
        <div className="hidden lg:block w-1/3 ml-10">
          <img
            className="h-full w-full object-cover !rounded-[15px] max-h-[60%]"
            src="/images/contact-us/contact-us.png"
            alt="Woman working on laptop"
          />
        </div>
      </div>
    </section>
  );
}
