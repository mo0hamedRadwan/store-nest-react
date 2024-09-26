import { Link } from "@mongez/react-router";

export default function FooterContactInfo() {
  const footerData = {
    contact: {
      address: "1234 North Luke Lane, South Bend, IN 360001",
      phoneNumber: "+123 456 7890",
      email: "my-email@gmail.com",
      workingDays: "Mon - Fri / 9:00AM - 6:00PM",
    },
    logoUrl: "/assets/images/logo.png",
  };

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
    <div className="flex flex-col text-specialColor-secondary w-full md:w-auto items-start mb-6 md:mb-0 ">
      <div className="flex flex-col items-start mb-[30px] ">
        <Link href="/">
          <img src={logoUrl || ""} alt="logo" />
        </Link>
        <p className="py-4 text-[17px] font-normal leading-6 font-lato">
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
            <h4 className="font-semibold font-lato">{label}:</h4>
            <span className="px-2 font-lato">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
