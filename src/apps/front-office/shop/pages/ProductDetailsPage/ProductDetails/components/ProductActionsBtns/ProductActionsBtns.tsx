import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";

export default function ProductActionsBtns() {
  // const handleClick = () => {

  //   addToCart(id, amount)
  //     .then(() => {
  //       const mealData = meals.find(item => item.id === id);
  //       console.log(mealData);
  //       console.log(meals);
  //     })
  //     .catch(error => {
  //       if (error.response?.data.error) {
  //         console.log(error.response.data.error);
  //       } else {
  //         console.log(trans("somethingWentWrong"));
  //       }
  //     })
  //     .finally(() => {
  //       setIsLoading(false); // End loading state
  //     });
  // };
  return (
    <>
      <Button variant="default">
        <i className="bx bx-cart text-xl"></i>
        {trans("addToCart")}
      </Button>
      <Button variant="outline">
        <i className="bx bx-heart text-xl"></i>
      </Button>
      <Button variant="outline">
        <i className="bx bx-transfer-alt text-xl"></i>
      </Button>
    </>
  );
}
