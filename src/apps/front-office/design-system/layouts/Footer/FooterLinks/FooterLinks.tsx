import { Link } from "@mongez/react-router";

const companyLinks = [
  "About Us",
  "FAQ",
  "Contact Us",
  "Privacy Policy",
  "Terms & Conditions",
];

export default function FooterLinks() {
  return (
    <div className="flex flex-col flex-wrap p-6 md:pt-2 text-left">
      <h4 className="font-bold text-2xl">Company</h4>
      <ul className="flex flex-col list-none cursor-pointer">
        {companyLinks.map(link => (
          <li
            key={link}
            className="py-3 hover:translate-x-3 hover:text-primary-default hover:duration-300 transition-all">
            <Link>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
