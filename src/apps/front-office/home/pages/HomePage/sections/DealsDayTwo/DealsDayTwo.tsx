<<<<<<< Updated upstream
=======
import { useEffect, useState } from "react";
>>>>>>> Stashed changes
import { Column } from "src/apps/front-office/utils/types";
import TopSelling from "./TopSelling";

type DealsDayTwoPropsType = {
  columns: Column[];
};
<<<<<<< Updated upstream
=======

export default function DealsDayTwo({ columns }: DealsDayTwoPropsType) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
>>>>>>> Stashed changes

export default function DealsDayTwo({ columns }: DealsDayTwoPropsType) {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
<<<<<<< Updated upstream
    <ul className="container my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {columns.map((column, index) => (
        <li
          key={column.id}
          className={`${index === 3 ? "hidden xl:block" : ""} ${
            index === 2 ? "hidden lg:block" : ""
          }`}>
          <TopSelling moduleName={column.module.name} />
        </li>
=======
    <section className="container my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {columns.map(column => (
        <TopSelling key={column.id} moduleName={column.module.name} />
>>>>>>> Stashed changes
      ))}
      {/* <TopSelling moduleName={"top selling"} />
      <TopSelling moduleName={"trending products"} />
      {windowWidth > 1022 && <TopSelling moduleName={"recently added"} />}
      {windowWidth > 1024 && <TopSelling moduleName={"top rated"} />} */}
<<<<<<< Updated upstream
    </ul>
=======
    </section>
>>>>>>> Stashed changes
  );
}
