import { trans } from "@mongez/localization";

export default function ServicesSection() {
  const benefits = [
    {
      icon: "/images/contact-us/prices-icon.svg",
      title: "Best prices & offers",
      description: "Orders $50 or more",
    },
    {
      icon: "/images/contact-us/delivery-icon.svg",
      title: "Free delivery",
      description: "24/7 amazing services",
    },
    {
      icon: "/images/contact-us/deal-icon.svg",
      title: "Great daily deal",
      description: "When you sign up",
    },
    {
      icon: "/images/contact-us/assortment-icon.svg",
      title: "Wide assortment",
      description: "Mega Discounts",
    },
    {
      icon: "/images/contact-us/returns-icon.svg",
      title: "Easy returns",
      description: "Within 30 days",
    },
    {
      icon: "/images/contact-us/delivery-icon.svg",
      title: "Safe delivery",
      description: "24/7 amazing services",
    },
  ];

  return (
    <section className="my-10">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center bg-[#F4F6FA] p-6 rounded-lg shadow-md">
            <div className="max-w-[60px] duration-[0.3s] mr-5">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="max-w-full"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">
                {trans(benefit.title)}
              </h4>
              <p className="text-gray-500">{trans(benefit.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
