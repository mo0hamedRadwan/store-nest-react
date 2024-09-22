import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "src/apps/front-office/utils/urls";
export default function HeadOfRegister() {
  return (
    <>
      <h1 className="text-5xl font-bold text-[#253D4E] mb-1">
        {trans("headRegister")}
      </h1>
      <p className="mb-7 text-[#7E7E7E]">
        {trans("alreadyHaveAccount")}
        <Link
          to={URLS.auth.login}
          className="text-[#3BB77E] font-medium duration-300 hover:text-[#FDC040] cursor-pointer	">
          {trans("login")}
        </Link>
      </p>
    </>
  );
}
