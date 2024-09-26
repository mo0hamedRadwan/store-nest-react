import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import user from "app/account/user";
import { URLS } from "shared/utils";

const companyLinks = [
  {
    route: URLS.pages.aboutUs,
    text: "aboutUs",
  },
  {
    route: URLS.pages.contactUs,
    text: "contactUs",
  },
  {
    route: URLS.pages.privacyPolicy,
    text: "privacyPolicy",
  },
  {
    route: URLS.pages.termsConditions,
    text: "termsAndConditions",
  },
];

const notLoggedInLinks = [
  {
    route: URLS.auth.login,
    text: "login",
  },
  {
    route: URLS.auth.register,
    text: "register",
  },
];

const loggedInLinks = [
  {
    route: URLS.orders,
    text: "orderHistory",
  },
  {
    route: URLS.cart,
    text: "cart",
  },
  {
    route: URLS.wishlist,
    text: "wishlist",
  },
  {
    route: URLS.settings,
    text: "settings",
  },
];

type FooterLinksSectionProps = {
  heading: string;
  links: {
    route: string;
    text: string;
  }[];
};

export function FooterLinksSection({
  heading,
  links,
}: FooterLinksSectionProps) {
  return (
    <div className="flex flex-col text-specialColor-secondary">
      <h4 className="font-bold leading-[1.2] text-2xl capitalize mt-[15px] mb-5 font-custom">
        {trans(heading)}
      </h4>
      <ul className="flex flex-col list-none cursor-pointer min-w-[170px] font-lato">
        {links.map((link, index) => (
          <li
            key={index}
            className="py-3 text-[15px] hover:translate-x-3 hover:text-priceNowColor hover:duration-300 ease-linear transition-all font-lato">
            <Link to={link.route} className="font-lato">
              {trans(link.text)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinks() {
  const accountLinks =
    user.isNotLoggedIn() || user.isGuest() ? notLoggedInLinks : loggedInLinks;

  return (
    <div className="flex flex-wrap justify-between text-left gap-20">
      <FooterLinksSection heading="company" links={companyLinks} />
      <FooterLinksSection heading="account" links={accountLinks} />
    </div>
  );
}
