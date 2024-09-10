import TopSellingCard from "apps/front-office/design-system/components/TopSelling/TopSellingCard";
import TopSellingHead from "apps/front-office/design-system/components/TopSelling/TopSellingHead";
import { useEffect, useState } from "react";
import { Product } from "src/apps/front-office/utils/types";
import { getTopsellingHttpsList } from "./topselling-http-service";

export default function TopSelling({ moduleName }) {
  const [productData, setProductData] = useState<Product | any>([]);
  // const [productTitle, setProductTitle] = useState<string | any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTopsellingHttpsList();
        for (const row of res.rows) {
          for (const column of row.columns) {
            if (column.module.name === moduleName) {
              const data = column.module.products;
              // const title = column.module.title;
              setProductData(data);
              // setProductTitle(title);
              return;
            }
          }
        }
      } catch (error) {
        console.error("Error fetching ", error);
      }
    };
    fetchData();
  }, [moduleName]);

  return (
    <div>
      <div>
        <TopSellingHead productTitle={moduleName} />
      </div>
      <div>
        {productData.map(el => {
          return (
            <div key={el.id}>
              <TopSellingCard
                productImageTop={el.images[0].url}
                productDescription={el.shortDescription}
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
