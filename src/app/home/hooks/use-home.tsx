import { getHome } from "app/home/services/home-service";
import { modulesMap } from "app/home/utils/flags";
import { useMemo } from "react";
import { useFetch } from "shared/hooks/use-fetch";

export function useHome() {
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

  return {
    rows,
    isLoading,
    error,
  };
}
