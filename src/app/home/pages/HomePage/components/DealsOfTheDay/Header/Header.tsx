import { FaAngleRight } from "react-icons/fa";

const Header = ({ title, linkText, linkHref }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h3 className="font-quicksand text-slate-600 leading-tight mr-8 text-2xl font-bold mb-4">
        {title}
      </h3>
      <a
        className="flex items-center justify-center text-base text-gray-500 transition duration-300 hover:text-teal-500"
        href={linkHref}>
        {linkText}
        <FaAngleRight className="ml-2 w-5" />
      </a>
    </div>
  );
};

export default Header;
