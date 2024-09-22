import BaseLayout from "src/apps/front-office/design-system/layouts/BaseLayout";
import Helmet from "@mongez/react-helmet";
import { trans } from "@mongez/localization";
import HelpOverview from "./sections/HelpOverview";
import Map from "./sections/Map";
import Locations from "./sections/Locations";
import ContactForm from "./sections/ContactForm";
import EmailSection from "./sections/EmailSection";
import ServicesSection from "./sections/ServicesSection";


export default function ContactUs() {
  return (
    <BaseLayout>
      <Helmet title={trans("contactUs")} />
      <HelpOverview />
      <Map />
      <Locations />
      <ContactForm />
      <EmailSection />
      <ServicesSection />
    </BaseLayout>
  )
}
