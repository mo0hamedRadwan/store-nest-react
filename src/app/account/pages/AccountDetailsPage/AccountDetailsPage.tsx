import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import PasswordInput from "design-system/components/form/PasswordInput";
import TextInput from "design-system/components/form/TextInput";
import { accountItems } from "../../constants";
import MyAccountLayoutPage from "../MyAccountLayoutPage";

export default function AccountDetailsPage() {
  const handleEditAccount = ({ values }) => {
    console.log(values);
  };

  return (
    <MyAccountLayoutPage name={accountItems[4].name}>
      <h1 className="my-5 text-2xl sm:text-4xl font-extrabold text-specialColor-secondary">
        {trans("accountDetails")}
      </h1>
      <Form
        onSubmit={handleEditAccount}
        className="w-full flex flex-col items-start gap-y-5">
        <div className="w-full flex items-center flex-wrap md:flex-nowrap gap-5">
          <TextInput
            name="firstName"
            labelText="firstName"
            placeholder="firstName"
            value="firstName"
          />
          <TextInput
            name="lastName"
            labelText="lastName"
            placeholder="lastName"
            value="lastName"
          />
        </div>
        <div className="w-full">
          <TextInput
            name="displayName"
            labelText="displayName"
            placeholder="displayName"
            value="displayName"
          />
        </div>
        <div className="w-full flex items-center flex-wrap md:flex-nowrap gap-5">
          <TextInput
            name="email"
            labelText="email"
            placeholder="email"
            type="email"
            value="email"
          />
          <TextInput
            name="phoneNumber"
            labelText="phoneNumber"
            placeholder="phoneNumber"
            value="phoneNumber"
          />
        </div>
        <div className="w-full">
          <PasswordInput
            name="currentPassword"
            labelText="currentPassword"
            placeholder="currentPassword"
          />
        </div>
        <div className="w-full">
          <PasswordInput
            name="newPassword"
            labelText="newPassword"
            placeholder="newPassword"
          />
        </div>
        <div className="w-full">
          <PasswordInput
            name="confirmPassword"
            labelText="confirmPassword"
            placeholder="confirmPassword"
          />
        </div>

        <button className="px-8 py-3 rounded-lg bg-primary text-white text-lg">
          {trans("saveChanges")}
        </button>
      </Form>
    </MyAccountLayoutPage>
  );
}
