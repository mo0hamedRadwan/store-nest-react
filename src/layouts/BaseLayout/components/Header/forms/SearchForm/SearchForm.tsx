import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { navigateTo, queryString } from "@mongez/react-router";
import { searchHeaderAtom } from "layouts/BaseLayout/atoms/search-header.atom";
import CategoryMenu from "layouts/BaseLayout/components/Header/forms/SearchForm/CategoryMenu";
import { useHeaderSuggestProducts } from "layouts/BaseLayout/hooks";
import { useEffect, useState } from "react";
import { useClickOutside } from "shared/hooks";
import { isLTR, URLS } from "shared/utils";
import SuggestProductsMenu from "./SuggestProductsMenu";

export default function SearchForm() {
  const [showSuggestProductsMenu, setShowSuggestProductsMenu] = useState(false);
  const { products, isLoading, filter } = useHeaderSuggestProducts();

  const suggestProductsMenuRef = useClickOutside(() =>
    setShowSuggestProductsMenu(false),
  );

  const handleInputProductChange = e => {
    const value = e.target.value;
    searchHeaderAtom.change("q", value);
    filter();
  };

  useEffect(() => {
    if (isLoading || products.length > 0) {
      setShowSuggestProductsMenu(true);
    }
  }, [products, isLoading]);

  const handleSearch = () => {
    navigateTo(
      URLS.catalog.search +
        "?" +
        queryString.toQueryString(searchHeaderAtom.value),
    );
  };

  return (
    <Form
      className="hidden lg:flex items-center border border-primary-default rounded-lg p-2"
      onSubmit={handleSearch}>
      <CategoryMenu />
      <hr className="hidden xl:block w-[1px] h-5 mr-3 bg-slate-300" />
      <div className="relative flex items-center" ref={suggestProductsMenuRef}>
        <input
          type="text"
          placeholder={trans("searchForProducts")}
          className="2xl:w-[600px] w-[400px] text-lg placeholder:text-slate-500 outline-none"
          defaultValue={queryString.get("q")}
          onChange={handleInputProductChange}
        />
        <div
          className={`absolute ${isLTR() ? "right-4" : "left-4"} text-2xl text-slate-500`}>
          <i className="bx bx-search"></i>
        </div>
        {showSuggestProductsMenu && (
          <SuggestProductsMenu suggestProducts={products} />
        )}
      </div>
    </Form>
  );
}
