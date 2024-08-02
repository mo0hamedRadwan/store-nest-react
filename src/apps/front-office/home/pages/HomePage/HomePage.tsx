import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Badge } from "apps/front-office/design-system/components/ui/badge";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <Button variant="default">
        <LuShoppingCart size={25} /> {trans("addToCart")}
      </Button>
      <br />
      <Button variant="cart" size="sm">
        <LuShoppingCart size={18} /> {trans("Add")}
      </Button>
      <br />
      <Button variant="outline">
        <CiHeart size={22} />
      </Button>
      <br />
      <Button variant="outline" className="px-8 rounded-3xl">
        description
      </Button>
      <br />
      <Badge variant="product" className="bg-primary-dark">
        Sale
      </Badge>
      <br />
      <Badge variant="icon" className="bg-primary-dark">
        0
      </Badge>
    </>
  );
}
