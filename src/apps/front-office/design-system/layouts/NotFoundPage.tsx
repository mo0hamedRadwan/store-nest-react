import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import { HomeIcon } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFoundPage() {
  return (
    <>
      <Helmet title={trans("notFoundPage")} />
      <div className="container mx-auto text-center py-20 flex flex-col justify-center items-center space-y-12">
        <img
          src="https://nest-frontend-v6.netlify.app/assets/imgs/page/page-404.png"
          alt="notfound"
          className="max-w-80"
        />
        <h1 className="text-[36px] md:text-[48px] lg:text-[72px] text-[#253D4E] font-bold leading-tight">
          {trans("pageNotFound")}
        </h1>
        <p className="text-gray-800 font-medium leading-6 text-[16px] max-w-[560px]">
          {trans("errMsgNotFound")}{" "}
          <Link to="/" className="text-primary">
            {trans("homePage")}
          </Link>{" "}
          {trans("or")}{" "}
          <Link to="/contact" className="text-primary">
            {" "}
            {trans("contactUs")}
          </Link>{" "}
          {trans("aboutTheProblem")}
        </p>
        <Button
          variant="default"
          size="lg"
          className="px-6 flex items-center justify-center">
          <HomeIcon className="w-4 h-4 mr-1 " />
          {trans("goToHomePage")}
        </Button>
      </div>
    </>
  );
}
