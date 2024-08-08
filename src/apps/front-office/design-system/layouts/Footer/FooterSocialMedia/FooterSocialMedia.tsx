import {
  facebook,
  instagram,
  pinterest,
  twitter,
  youtube,
} from "assets/footerImages";

const socialIcons = [
  { src: facebook, alt: "facebook" },
  { src: twitter, alt: "twitter" },
  { src: instagram, alt: "instagram" },
  { src: pinterest, alt: "pinterest" },
  { src: youtube, alt: "youtube" },
];

export default function FooterSocialMedia() {
  return (
    <div className="text-center lg:text-left ml-4">
      <div className="flex justify-center lg:justify-start gap-2 mb-2">
        <h6 className="text-font-default font-bold leading-7 text-[13px] md:text-[18px]">
          Follow Us
        </h6>
        {socialIcons.map(({ src, alt }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="w-[25px] h-[25px] p-1 bg-primary-default rounded-full cursor-pointer"
          />
        ))}
      </div>
      <p className="text-[13px] md:text-[18px]">
        Up to 15% discount on your first subscribe
      </p>
    </div>
  );
}
