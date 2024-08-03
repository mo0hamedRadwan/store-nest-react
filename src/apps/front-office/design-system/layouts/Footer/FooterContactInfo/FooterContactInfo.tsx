import { Link } from "@mongez/react-router";

import {
  iconClock,
  iconContact,
  iconEmail,
  iconLocation,
} from "assets/footerImages";

const contactInfo = [
  {
    icon: iconLocation,
    label: "Address",
    value: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
  },
  { icon: iconContact, label: "Call Us", value: "(+91) - 540-025-124553" },
  { icon: iconEmail, label: "Email", value: "sale@Nest.com" },
  { icon: iconClock, label: "Hours", value: "10:00 - 18:00, Mon - Sat" },
];

export default function FooterContactInfo() {
  return (
    <div className="flex flex-col w-full md:w-auto items-start mb-6 md:mb-0">
      <div className="flex flex-col items-start">
        <Link href="/">
          <img
            src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/logo.svg"
            alt="logo"
          />
        </Link>
        <p className="py-4">Awesome grocery store website template</p>
      </div>
      <ul className="flex flex-col list-none max-w-[400px]">
        {contactInfo.map(({ icon, label, value }) => (
          <li key={label} className="flex py-2 gap-2 items-start">
            <img src={icon} alt={label} />
            <strong>{label}:</strong>
            <span className="px-2">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
