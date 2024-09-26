const socialIcons = [
  { iconClass: "bx bxl-facebook", alt: "facebook" },
  { iconClass: "bx bxl-twitter", alt: "twitter" },
  { iconClass: "bx bxl-instagram", alt: "instagram" },
  { iconClass: "bx bxl-pinterest", alt: "pinterest" },
  { iconClass: "bx bxl-youtube", alt: "youtube" },
];

export default function FooterSocialMedia() {
  return (
    <div className="hidden md:block text-center lg:text-left">
      <div className="flex justify-center lg:justify-start">
        <h6 className="text-specialColor-secondary font-custom mr-[15px] font-bold text-[16px] flex items-center leading-[1.2] whitespace-nowrap">
          Follow Us
        </h6>
        {socialIcons.map(({ iconClass, alt }) => (
          <i
            key={alt}
            className={`${iconClass} mr-2 w-[30px] h-[30px] bg-priceNowColor flex justify-center items-center rounded-full cursor-pointer text-white`}
            aria-label={alt}></i>
        ))}
      </div>
      <p className="text-specialColor-primary leading-6 font-normal text-[14px] font-lato">
        Up to 15% discount on your first subscribe
      </p>
    </div>
  );
}
