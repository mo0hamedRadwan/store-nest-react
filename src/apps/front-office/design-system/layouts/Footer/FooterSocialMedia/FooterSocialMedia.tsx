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
      <div className="flex justify-center lg:justify-start  mb-2">
        <h6 className="text-muted-foreground font-bold text-[16px] flex items-center whitespace-nowrap">
          Follow Us
        </h6>
        {socialIcons.map(({ iconClass, alt }) => (
          <i
            key={alt}
            className={`${iconClass} ml-2 w-[30px] h-[30px] bg-primary flex justify-center items-center rounded-full cursor-pointer text-white`}
            aria-label={alt}></i>
        ))}
      </div>
      <p className="text-muted-foreground text-[14px]">
        Up to 15% discount on your first subscribe
      </p>
    </div>
  );
}
