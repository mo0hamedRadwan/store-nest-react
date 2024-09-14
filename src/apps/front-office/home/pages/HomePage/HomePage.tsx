import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Error from "design-system/components/Error";
import { useMemo } from "react";
import { useFetch } from "shared/hooks/use-fetch";
import Loader from "src/apps/front-office/design-system/Indicators/Loader";
import { getHome } from "../../services/home-service";
import { modulesMap } from "../../utils/flags";
import "./HomePage.css";

export default function HomePage() {
  const { data, error, isLoading } = useFetch(getHome);

  const rows = useMemo(() => {
    if (!data) return null;

    return data.map((row, index) => {
      const columnSize = row.columns.length; // 12 is the number of columns in a row

      return (
        <div key={index} className={`grid grid-cols-${columnSize} gap-4 mb-4`}>
          {/* Row is list of columns */}
          {row.columns.map((column, columnIndex) => {
            const Component = modulesMap[column.module.type];

            if (!Component) return null;

            return <Component key={columnIndex} module={column.module} />;
          })}
        </div>
      );
    });
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="container">
        {/* <Slider
          banners={rows[0].columns[0].module.slider!.banners}
          isLoading={false}
        /> */}

        {/* <FeaturedCategories moduleName={rows[1].columns[0].module.name} /> */}
        {/* <div className="App">
          <DailyBestSellsSection />
        </div> */}
        {/* <PopularProducts /> */}
      </div>

      {/* <DealsDayTwo columns={rows[3].columns} /> */}
      {/* <SectionWrapper>
        <Header title="Deals Of The Day" linkText="All Deals" linkHref="#" />
        <DealList deals={data1.slice(0, 4)} timeCards={deals} />
      </SectionWrapper> */}
      {rows}
    </>
  );
}
