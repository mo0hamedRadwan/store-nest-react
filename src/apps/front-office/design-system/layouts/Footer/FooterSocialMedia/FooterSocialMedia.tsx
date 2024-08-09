const socialIcons = [
  { iconClass: "bx bxl-facebook", alt: "facebook" },
  { iconClass: "bx bxl-twitter", alt: "twitter" },
  { iconClass: "bx bxl-instagram", alt: "instagram" },
  { iconClass: "bx bxl-pinterest", alt: "pinterest" },
  { iconClass: "bx bxl-youtube", alt: "youtube" },
];

export default function FooterSocialMedia() {
  return (
    <div className="text-center lg:text-left ml-4">
      <div className="flex justify-center lg:justify-start gap-2 mb-2">
        <h6 className="text-font-default font-bold leading-7 text-[13px] md:text-[18px]">
          Follow Us
        </h6>
        {socialIcons.map(({ iconClass, alt }) => (
          <i
            key={alt}
            className={`${iconClass} w-[24px] h-[24px] p-1 bg-primary-default rounded-full cursor-pointer text-white`}
            aria-label={alt}></i>
        ))}
      </div>
      <p className="text-[13px] md:text-[18px]">
        Up to 15% discount on your first subscribe
      </p>
    </div>
  );
}
