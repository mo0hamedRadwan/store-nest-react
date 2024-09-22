import { trans } from "@mongez/localization";
import { Button } from "src/apps/front-office/design-system/components/ui/button";
import { MapPin } from 'lucide-react';

export default function Locations() {
  const locationItems = [
    {
      id: "01",
      title: "Office",
    },
    {
      id: "02",
      title: "Studio",
    },
    {
      id: "03",
      title: "Shop",
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {locationItems.map((item) => (
        <div key={item.id}>
          <h4 className="text-3xl text-priceNowColor font-black mb-10">{trans(item.title)}</h4>
          {trans("AddressLine_1")}<br />
          {trans("AddressLine_2")}<br />
          <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
          <abbr title="Email">Email: </abbr>contact@Evara.com<br />
          <Button className="bg-priceNowColor text-white hover:bg-[#FDC040] my-8">
            <MapPin size={16} />{trans("View Map")}
          </Button>
        </div>
      ))}
    </section>
  )
}
