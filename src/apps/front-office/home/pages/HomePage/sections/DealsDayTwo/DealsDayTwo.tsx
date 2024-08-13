import { useEffect, useState } from "react";
import TopSelling from "./TopSelling";

export default function DealsDayTwo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="container my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <TopSelling moduleName={"top selling"} />
      <TopSelling moduleName={"trending products"} />
      {windowWidth > 1022 && <TopSelling moduleName={"recently added"} />}
      {windowWidth > 1024 && <TopSelling moduleName={"top rated"} />}
    </section>
  );
}
