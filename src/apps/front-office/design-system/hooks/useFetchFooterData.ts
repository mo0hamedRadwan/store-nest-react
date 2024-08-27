import { useOnce } from "@mongez/react-hooks";
import { getFooterData } from "apps/front-office/home/services/home-service";
import { useState } from "react";
import { FooterData } from "../layouts/types/index";

export default function useFetchFooterData() {
  const [footerData, setFooterData] = useState<FooterData>({
    contact: null,
    logoUrl: null,
  });

  useOnce(() => {
    getFooterData()
      .then(response => {
        const { contact, general } = response.data.settings;
        console.log(response.data);

        const logoUrl = general?.logo?.url;
        setFooterData({ contact, logoUrl });
      })
      .catch(error => {
        console.log("Something went wrong", error);
      });
  });

  return { footerData };
}
