import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Input } from "apps/front-office/design-system/components/ui/input";
import { Textarea } from "apps/front-office/design-system/components/ui/textarea";

// export type ProductReviewFormProps = {
//   // props go here
// };
export default function ProductReviewForm() {
  return (
    <>
      <h4 className="text-2xl font-bold text-gray-600 capitalize mb-4">
        {trans("addReview")}
      </h4>
      <form className="flex flex-col gap-5">
        <Input type="text" placeholder={trans("name")} />
        <Input type="email" placeholder={trans("email")} />
        <Textarea placeholder={trans("yourComment")} rows={5} />
        <Button className="w-fit">{trans("submitReview")}</Button>
      </form>
    </>
  );
}
