import { trans } from "@mongez/localization";
export default function HelpOverview() {
  const helpItems = [
    {
      id: "01",
      title: "Visit Feedback",
      color: "text-mainColor"
    },
    {
      id: "02",
      title: "Employer Services",
      color: "text-mainColor"
    },
    {
      id: "03",
      title: "Billing Inquiries",
      color: "text-priceNowColor"
    },
    {
      id: "04",
      title: "General Inquiries",
      color: "text-mainColor"
    }
  ];

  return (
    <section className="flex flex-row items-end md:flex-row gap-6 py-12">
      {/* Description and Option 1 */}
      <div className="flex-1">
        {/* Heading */}
        <h4 className="text-3xl text-priceNowColor font-black mb-10">{trans("How can help you ?")}</h4>
        <h1 className="inline-block text-5xl font-bold leading-[1.2] text-mainColor  mb-10">
          {trans("Let us know how we can help you")}
        </h1>
        <p className="text-specialColor-primary text-base font-medium leading-6 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <p className="text-specialColor-primary text-base font-medium leading-6 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      
      {/* Option 2 and 3 */}
      <div className="flex-1">
        {helpItems.slice(0, 2).map((item) => (
          <div key={item.id} className="mb-10">
            <h3 className={`text-lg font-bold stroke-primary ${item.color} mb-5`}>
              {item.id}.{trans(item.title)}
            </h3>
            <p className="text-specialColor-primary text-base font-medium leading-6 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        ))}
      </div>

      {/* Option 4 */}
      <div className="flex-1">
        {helpItems.slice(2).map((item) => (
          <div key={item.id} className="mb-10">
            <h3 className={`text-lg font-bold stroke-primary ${item.color} mb-5`}>
              {item.id}. {trans(item.title)}
            </h3>
            <p className="text-specialColor-primary text-base font-medium leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

