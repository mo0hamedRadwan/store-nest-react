import { trans } from "@mongez/localization";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Youtube } from "lucide-react";
import React from "react";
import TeamMember from "../../components/TeamMember";
function _AboutTeamsSection() {
  return (
    <section className="flex flex-col lg:flex-row py-10">
      <div className="section-info basis-4/12 mb-8">
        <h4 className="text-2xl capitalize text-primary my-4">
          {trans("about-us.ourTeams")}
        </h4>
        <h2 className="text-5xl font-bold my-4">
          {trans("about-us.meetOurExpertTeam")}
        </h2>

        <div className="section-content p-4">
          <p className="text-muted-foreground my-4">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>

          <p className="text-muted-foreground my-4">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
        </div>

        <button className="capitalize w-fit px-6 py-3 bg-primary text-primary-foreground font-semibold border-none hover:bg-secondary transition-colors">
          {trans("about-us.viewAllMemebers")}
        </button>
      </div>

      <div className="teams grid grid-cols-1 md:grid-cols-2 gap-7 grow basis-8/12">
        <TeamMember
          name="H. Merinda"
          image="/images/about-us/about-8.png"
          position="CEO & Co-Founder"
          socialLinks={[TwitterLogoIcon, InstagramLogoIcon, Youtube]}
        />
        <TeamMember
          name="Diego Maradona"
          image="/images/about-us/about-6.png"
          position="CEO & Co-Founder"
          socialLinks={[TwitterLogoIcon, InstagramLogoIcon, Youtube]}
        />
      </div>
    </section>
  );
}

const AboutTeamsSection = React.memo(_AboutTeamsSection);
export default AboutTeamsSection;
