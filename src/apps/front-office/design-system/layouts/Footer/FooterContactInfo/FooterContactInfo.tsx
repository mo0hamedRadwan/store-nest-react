import { Link } from "@mongez/react-router";
import useFetchFooterData from "../../../hooks/useFetchFooterData";

export default function FooterContactInfo() {
  const { footerData } = useFetchFooterData();
  const { contact, logoUrl } = footerData;

  const contactInfo = contact
    ? [
        {
          iconClass: "bx bx-map",
          label: "Address",
          value: contact.address,
        },
        {
          iconClass: "bx bx-phone",
          label: "Call Us",
          value: contact.phoneNumber,
        },
        {
          iconClass: "bx bx-envelope",
          label: "Email",
          value: contact.email,
        },
        {
          iconClass: "bx bx-time",
          label: "Hours",
          value: contact.workingDays,
        },
      ]
    : [];

  return (
    <div className="flex flex-col text-specialColor-secondary w-full md:w-auto items-start mb-6 md:mb-0">
      <div className="flex flex-col items-start mb-[30px] ">
        <Link href="/">
          <img src={logoUrl || ""} alt="logo" />
        </Link>
        <p className="py-4 text-[17px] font-normal leading-6">
          Awesome grocery store website template
        </p>
      </div>
      <ul className="flex flex-col list-none max-w-[400px]">
        {contactInfo.map(({ iconClass, label, value }) => (
          <li
            key={label}
            className="flex mb-[10px] gap-2 text-[15px] items-start">
            <i
              className={`${iconClass} text-xl mr-2 text-priceNowColor`}
              aria-label={label}></i>
            <h4 className="font-semibold">{label}:</h4>
            <span className="px-2">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
