import { Link } from "@mongez/react-router";

const links = {
  company: [
    "About Us",
    "FAQ",
    "Contact Us",
    "Privacy Policy",
    "Terms & Conditions",
  ],
  account: ["Login", "Register", "Order History", "Wishlist", "Settings"],
};

export default function FooterLinks() {
  return (
    <div className="flex flex-wrap justify-between text-left gap-20">
      {Object.entries(links).map(([category, linksArray]) => (
        <div key={category} className="flex flex-col flex-1">
          <h4 className="font-bold text-2xl capitalize">{category}</h4>
          <ul className="flex flex-col list-none cursor-pointer">
            {linksArray.map(link => (
              <li
                key={link}
                className="py-3 hover:translate-x-3 hover:text-primary hover:duration-300 transition-all">
                <Link>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
