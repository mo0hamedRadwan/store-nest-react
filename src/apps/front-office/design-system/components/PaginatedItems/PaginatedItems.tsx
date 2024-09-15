import { useEffect, useState } from "react";
import ProductCard from "src/apps/front-office/home/pages/HomePage/components/PopularProducts/ProductCard";
import Paginator from "src/apps/front-office/shop/pages/ShopPage/components/Paginator";
import { Product } from "src/apps/front-office/shop/utils/types";

function Items({ currentItems }) {
  return (
    <div className="grid grid-cols-1 flex-wrap sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 pt-6 pb-20 justify-items-center">
      {currentItems &&
        currentItems.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}

function PaginatedItems({ items }) {
  const [currentItems, setCurrentItems] = useState<Product[] | null>(null);
  // const { pages: pageCount } = shopDataAtom.use("paginationInfo");
  // const fetch = shopDataAtom.get("fetch");
  // const pageInfo = shopDataAtom.use("paginationInfo").page - 1;
  useEffect(() => {
    setCurrentItems(items);
  }, [items]);
  // const handlePageClick = event => {
  //   fetch("page=" + (event.selected + 1));
  // };

  return (
    <>
      <Items currentItems={currentItems} />
      {/* <ReactPaginate
        forcePage={shopDataAtom.use("paginationInfo").page - 1}
        activeLinkClassName="!bg-primary !text-white !font-bold rounded-full"
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName="flex justify-start items-center space-x-2 mt-4"
        pageClassName="inline-block rounded-full"
        pageLinkClassName="flex justify-center items-center  w-10 h-10 font-bold text-[#7E7E7E] bg-[#F2F3F4] rounded-full hover:bg-primary hover:text-white transition duration-300"
        previousClassName="inline-block"
        previousLinkClassName="flex justify-center items-center w-10 h-10  bg-[#F2F3F4] rounded-full hover:bg-primary transition duration-300"
        nextClassName="inline-block"
        nextLinkClassName="flex justify-center items-center w-10 h-10  bg-[#F2F3F4] rounded-full hover:bg-primary transition duration-300"
        breakClassName="inline-block"
        breakLinkClassName="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
        activeClassName="bg-primary text-white"
        renderOnZeroPageCount={null}
      /> */}
      <Paginator />
    </>
  );
}

export default PaginatedItems;
