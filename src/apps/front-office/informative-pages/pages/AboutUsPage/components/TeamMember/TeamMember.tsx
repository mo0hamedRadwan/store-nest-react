import React from "react";

export type TeamMemberProps = {
  name: string;
  position: string;
  image: string;
  socialLinks: React.ElementType[];
};
function _TeamMember({
  name,
  position,
  image = "https://nest-frontend-v6.vercel.app/assets/imgs/page/about-6.png",
  socialLinks,
}: TeamMemberProps) {
  return (
    <div className="team-member relative">
      <div className="member-image">
        <img className="w-full rounded-xl" src={image} />
      </div>

      <div className="member-info text-center rounded-xl py-8 bg-white -translate-y-1/2 w-5/6 mx-auto shadow-lg">
        <h6 className="member-name text-2xl font-bold">{name}</h6>
        <p className="member-position mb-8">{position}</p>
        <div className="social-links flex items-center w-fit mx-auto">
          {socialLinks.map((Icon, index) => (
            <a
              key={index}
              href="#"
              target="_blank"
              className="p-2 text-primary font-bold">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const TeamMember = React.memo(_TeamMember);
export default TeamMember;
