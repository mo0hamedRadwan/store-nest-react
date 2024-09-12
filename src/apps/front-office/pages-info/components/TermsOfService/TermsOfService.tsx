export default function TermsOfService() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="text-mainColor">
      <h2 className="text-[40px] leading-[1.2] font-bold mb-2">
        Terms of Service
      </h2>

      <div className="text-gray-500 text-sm mb-6">
        <span>By</span>
        <span className="text-priceNowColor">John</span>
        <span className="mx-2">.</span>
        <span>{formattedDate}</span>
        <span className="mx-2">.</span>
        <span>8 mins read</span>
        <span className="mx-2">.</span>
        <span>29k Views</span>
      </div>

      <p className="text-[17px] mb-4 font-normal">
        Please read these Terms of Service (“Terms”, “Terms of Service”)
        carefully before using the https://Evara.com website (the “Service”)
        operated by Evara (“us”, “we”, or “our”).
      </p>
      <p className=" text-[17px] mb-4 font-normal">
        Your access to and use of the Service is conditioned on your acceptance
        of and compliance with these Terms. These Terms apply to all visitors,
        users and others who access or use the Service.
      </p>
      <p className=" text-[17px] mb-4 font-normal">
        By accessing or using the Service you agree to be bound by these Terms.
        If you disagree with any part of the terms then you may not access the
        Service.
      </p>
    </div>
  );
}
