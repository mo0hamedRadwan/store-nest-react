import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { URLS } from "shared/utils";
import { accountItems } from "../../constants";
import user from "../../user";
import MyAccountLayoutPage from "../MyAccountLayoutPage";

export default function AccountDashboardPage() {
  return (
    <MyAccountLayoutPage name={accountItems[0].name}>
      <h1 className="mb-5 text-4xl font-extrabold text-specialColor-secondary">
        {`${trans("hello")} ${user.get("name") || trans("user")}!`}
      </h1>
      <div className="text-specialColor-primary">
        <p>
          <span>{`${trans("from")} ${trans("yourAccountDashboard")}. ${trans("youCan")} ${trans("easily")} ${trans("check")} & ${trans("view")} `}</span>
          <Link to={URLS.account.orders} className="text-primary">
            {trans("yourRecentOrders")}
          </Link>
          ,
        </p>
        <p>
          <Link
            to={URLS.account.trackOrder}
            className="text-primary">{`${trans("manage")} ${trans("yourShipping")} `}</Link>
          <span>{`${trans("and")} `}</span>
          <Link
            to={URLS.account.addresses}
            className="text-primary">{`${trans("billingAddresses")} `}</Link>
          <span>{`${trans("and")} `}</span>
          <Link
            to={URLS.account.details}
            className="text-primary">{`${trans("edit")} ${trans("yourPassword")} ${trans("and")} ${trans("accountDetails")}.`}</Link>
        </p>
      </div>
    </MyAccountLayoutPage>
  );
}
