/* eslint-disable unused-imports/no-unused-vars */
import { trans } from "@mongez/localization";
import { useState } from "react";
import { Order } from "src/apps/front-office/utils/types";
import { accountItems } from "../../constants";
import MyAccountLayoutPage from "../MyAccountLayoutPage";

export default function AccountOrdersPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);

  // useEffect(() => {
  //   setLoading(true);
  //   getOrders()
  //     .then(response => {
  //       console.log(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching orders:", error);
  //       setError("Failed to fetch order data");
  //     });
  // }, []);

  return (
    <MyAccountLayoutPage name={accountItems[1].name}>
      <h1 className="mb-5 text-4xl font-extrabold text-specialColor-secondary">
        {trans("yourOrders")}
      </h1>
      <table className="w-full">
        <tr>
          <th>{trans("orders")}</th>
          <th>{trans("date")}</th>
          <th>{trans("states")}</th>
          <th>{trans("total")}</th>
          <th>{trans("actions")}</th>
        </tr>
        {/* {orders.map(order => (
          <tr key={order.id} className="">
            <td></td>
          </tr>
        ))} */}
        <tr>
          <td>Loading...</td>
        </tr>
      </table>
    </MyAccountLayoutPage>
  );
}
