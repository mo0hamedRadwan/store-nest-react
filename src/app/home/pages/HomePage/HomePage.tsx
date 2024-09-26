import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Error from "design-system/components/Error";
import Loader from "design-system/Indicators/Loader";
import { useMemo } from "react";
import { useFetch } from "shared/hooks/use-fetch";
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
      {rows}
    </>
  );
}
