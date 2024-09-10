import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { getFooterData } from "../../home/services/home-service";
import { FooterData } from "../../utils/types";
import URLS from "../../utils/urls";

export default function useFetchFooterData() {
  const [footerData, setFooterData] = useState<FooterData>({
    contact: undefined,
    logoUrl: URLS.home,
  });

  useOnce(() => {
    getFooterData()
      .then(response => {
        const { contact, general } = response.data.settings;
        console.log(response.data);

        const logoUrl = general?.logo?.url || URLS.home;
        setFooterData({ contact, logoUrl });
      })
      .catch(error => {
        console.log("Something went wrong", error);
      });
  });

  return { footerData };
}
