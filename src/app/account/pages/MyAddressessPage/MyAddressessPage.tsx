import { trans } from "@mongez/localization";
import { accountItems } from "../../constants";
import MyAccountLayoutPage from "../MyAccountLayoutPage";

export default function MyAddressessPage() {
  return (
    <MyAccountLayoutPage name={accountItems[3].name}>
      <div className="flex flex-wrap md:flex-nowrap gap-5">
        <div className="flex-grow">
          <h2>{trans("billingAddress")}</h2>
          <ul>
            <li className="flex flex-col gap-y-1">
              <span>3522 Interstate</span>
              <span>75 Business Spur,</span>
              <span>Sault Ste.</span>
              <span>Marie, MI 49783</span>
              <span>New York</span>
              <span
                className="text-primary hover:text-amber-400 cursor-pointer"
                onClick={() => console.log("open popup to edit address")}>
                {trans("edit")}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-grow">
          <h2>{trans("shippingAddress")}</h2>
          <ul>
            <li className="flex flex-col gap-y-1">
              <span>4299 Express Lane</span>
              <span>Sarasota,</span>
              <span>FL 34249 USA</span>
              <span>Phone: 1.941.227.4444</span>
              <span>Sarasota</span>
              <span
                className="text-primary hover:text-amber-400 cursor-pointer"
                onClick={() => console.log("open popup to edit address")}>
                {trans("edit")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </MyAccountLayoutPage>
  );
}
