import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import TextInput from "src/apps/front-office/design-system/components/form/TextInput";
import { accountItems } from "../../constants";
import MyAccountLayoutPage from "../MyAccountLayoutPage";

export default function TrackOrderPage() {
  const handleTrackOrderSubmit = ({ values }) => {
    console.log(values);
  };
  return (
    <MyAccountLayoutPage name={accountItems[2].name}>
      <h1 className="mb-5 text-4xl font-extrabold text-specialColor-secondary">
        {trans("ordersTracking")}
      </h1>
      <div className="text-specialColor-primary">
        <p className="my-10">{`${trans("toTrack")} ${trans("yourOrder")}, ${trans("please")} ${trans("enter")} ${trans("your")} ${trans("orderID")} ${trans("in")} ${trans("below")} ${trans("theBox")} ${trans("and")} ${trans("press")} "${trans("track")}" ${trans("button")}. ${trans("this")} ${trans("wasGivenToYou")} ${trans("onYourReceipt")} ${trans("and")} ${trans("in")} ${trans("theConfirmationEmail")} ${trans("youShould")} ${trans("have")} ${trans("received")}.`}</p>
        <Form
          className="flex flex-col items-start gap-y-5"
          onSubmit={handleTrackOrderSubmit}>
          <TextInput
            name="orderID"
            labelText="orderID"
            placeholder="orderID"
            className="w-[570px]"
            inputClassName=""
          />
          <TextInput
            name="billingEmail"
            labelText="billingEmail"
            placeholder="billingEmail"
            className="w-[570px]"
            inputClassName="text-lg p-5 rounded-lg"
          />
          <button className="px-8 py-3 rounded-lg bg-specialColor-secondary text-white text-lg">
            {trans("track")}
          </button>
        </Form>
      </div>
    </MyAccountLayoutPage>
  );
}
