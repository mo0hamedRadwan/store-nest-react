import { Link } from "@mongez/react-router";
import "./../input.css";
export default function HeadOfRegister() {
  return (
    <>
      <h1 className="text-5xl font-bold text-[#253D4E] mb-1">
        Create an Account
      </h1>
      <p className="mb-7 text-[#7E7E7E]">
        Already have an account?
        <Link
          to={`/account/login`}
          className="text-[#3BB77E] font-medium duration-300 hover:text-[#FDC040] cursor-pointer	">
          Login
        </Link>
      </p>
    </>
  );
}
