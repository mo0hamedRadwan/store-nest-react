import { getCurrentLocaleCode } from "@mongez/localization";
import TopSellingCard from "apps/front-office/design-system/components/TopSelling/TopSellingCard";
import TopSellingHead from "apps/front-office/design-system/components/TopSelling/TopSellingHead";
import { useEffect, useState } from "react";
import { getTopsellingHttpsList } from "./topselling-http-service";
import { LocaleValue, Product } from "./types";

export default function TopSelling({ moduleName }) {
  const [productData, setProductData] = useState<Product | any>([]);
  const [productTitle, setProductTitle] = useState<LocaleValue | any>({});
  const currentLang = getCurrentLocaleCode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTopsellingHttpsList();
        for (const row of res.rows) {
          for (const column of row.columns) {
            if (column.module.name === moduleName) {
              const data = column.module.products;
              const title =
                currentLang === "en"
                  ? column.module.title[0]
                  : column.module.title[1];
              setProductData(data);
              setProductTitle(title);
              return;
            }
          }
        }
      } catch (error) {
        console.error("Error fetching ", error);
      }
    };
    fetchData();
  }, [moduleName, currentLang]);

  return (
    <div>
      <div>
        <TopSellingHead productTitle={productTitle.value} />
      </div>
      <div>
        {productData.map(el => {
          return (
            <div key={el.id}>
              <TopSellingCard
                productImageTop={el.images[0].url}
                productDescription={
                  currentLang === "en"
                    ? el.shortDescription[0].value
                    : el.shortDescription[1].value
                }
                salePrice={el.salePrice}
                priceOld={el.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
