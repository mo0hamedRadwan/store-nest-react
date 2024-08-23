import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "src/apps/front-office/home/pages/HomePage/components/PopularProducts/ProductCard";
import { shopDataAtom } from "src/apps/front-office/shop/atoms/shop-data.atom";
import { Product } from "src/apps/front-office/utils/types";

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
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<Product[] | null>(null);

  const { pages: pageCount } = shopDataAtom.use("paginationInfo");

  const fetch = shopDataAtom.get("fetch");

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    fetch("page=" + (event.selected + 1));
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        forcePage={shopDataAtom.use("paginationInfo").page - 1}
        activeLinkClassName="text-white font-bold"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="flex justify-start space-x-2 mt-4"
        pageClassName="inline-block"
        pageLinkClassName="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
        previousClassName="inline-block"
        previousLinkClassName="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
        nextClassName="inline-block"
        nextLinkClassName="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
        breakClassName="inline-block"
        breakLinkClassName="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
        activeClassName="bg-primary text-white"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
