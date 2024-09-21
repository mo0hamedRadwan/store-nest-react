import { trans } from "@mongez/localization";
import URLS from "src/apps/front-office/utils/urls";

import Breadcrumb from "src/apps/front-office/design-system/layouts/Breadcrumb";
import HeaderPage from "./components/HeaderPage";

import Helmet from "@mongez/react-helmet";
import AboutOurServiceSection from "./sections/AboutOurServiceSection"; // 3#
import AboutProvideSection from "./sections/AboutProvideSection"; // 2#
import AboutStatsSection from "./sections/AboutStatsSection"; // 5#
import AboutTeamsSection from "./sections/AboutTeamsSection"; // 6#
import AboutUsSection from "./sections/AboutUsSection"; //4#
import AboutWelcomeSection from "./sections/AboutWelcomeSection"; // 1#

export default function AboutUsPage() {
  return (
    <>
      <Helmet title={trans("about-us.title")} />
      <section className="w-full text-secondary">
        <div className="breadcrump relative">
          <div className="absolute w-full border-b-2 border-b-gray-200 top-full"></div>
          <div className="nav-links w-full">
            <Breadcrumb
              navItems={[
                { name: trans("page") },
                { name: trans("about-us.title"), url: URLS.pages.aboutUs },
              ]}
              attributes={{
                className: "justify-end items-end py-4 my-0",
              }}
            />
          </div>
        </div>

        <div className="my-10">
          <main className="about-body">
            <div className="body-t-1 px-10 py-4">
              <AboutWelcomeSection />
            </div>

            <div className="body-t-2">
              <HeaderPage title={trans("about-us.provideSectionTitle")} />

              <AboutProvideSection />
            </div>

            <div className="body-t-3">
              <AboutOurServiceSection />
            </div>

            <div className="body-t-4 my-4">
              <AboutUsSection />
            </div>

            <AboutStatsSection />

            <div className="body-t-6">
              <div className="container">
                <HeaderPage title={trans("about-us.ourTeams")} />

                <AboutTeamsSection />
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
