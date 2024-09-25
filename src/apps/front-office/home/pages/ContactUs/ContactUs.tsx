import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import ContactForm from "./sections/ContactForm";
import EmailSection from "./sections/EmailSection";
import HelpOverview from "./sections/HelpOverview";
import Locations from "./sections/Locations";
import Map from "./sections/Map";
import ServicesSection from "./sections/ServicesSection";

export default function ContactUs() {
  return (
    <>
      <Helmet title={trans("contactUs")} />
      <HelpOverview />
      <Map />
      <Locations />
      <ContactForm />
      <EmailSection />
      <ServicesSection />
    </>
  );
}
