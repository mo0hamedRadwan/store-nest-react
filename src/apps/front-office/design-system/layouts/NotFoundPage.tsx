import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import { HomeIcon } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFoundPage() {
  return (
    <>
      <Helmet title={trans("notFoundPage")} />
      <div className="container mx-auto text-center py-20 flex flex-col justify-center space-y-12">
        <img
          src="https://nest-frontend-v6.netlify.app/assets/imgs/page/page-404.png"
          alt="notfound"
          className="max-w-80"
        />
        <h1 className="text-[72px] text-[#253D4E] font-bold leading-3	">
          Page Not Found
        </h1>
        <p className="text-gray-800 font-medium leading-6 text-[16px] max-w-[560px]">
          The link you clicked may be broken or the page may have been removed.
          visit the{" "}
          <Link to="/" className="text-primary-default">
            HomePage
          </Link>{" "}
          or{" "}
          <Link to="/contact" className="text-primary-default">
            {" "}
            Contact us
          </Link>{" "}
          about the problem
        </p>
        <Button
          variant="default"
          size="lg"
          className="px-6 flex items-center justify-center">
          <HomeIcon className="w-4 h-4 mr-1 " />
          Back to Home Page
        </Button>
      </div>
    </>
  );
}
