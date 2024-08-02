import { capitalize } from "@mongez/reinforcements";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import categoriesAtom from "../atoms/categoriesAtom";

export default function SearchFormInMiddleHeader() {
  const [categoryFilterInput, setCategoryFilterInput] = useState<string>("");
  const [categorySelected, setCategorySelected] = useState<string>("0");
  const [searchInput, setSearchInput] = useState<string>("");

  const categories = categoriesAtom.getCategories();

  /**
   * to handle search form
   */
  const handleSearchForm = e => {
    e.preventDefault();
    const categoryId = parseInt(categorySelected);
    const productName = searchInput;

    console.log(categoryId, productName);
    setSearchInput("");
  };
  return (
    <form
      className="hidden lg:flex items-center border border-primary-default rounded-lg p-2"
      onSubmit={handleSearchForm}>
      <Select onValueChange={(value: string) => setCategorySelected(value)}>
        <SelectTrigger className="hidden xl:block xl:w-[180px] font-bold border-none shadow-none focus:ring-0">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent className="hidden xl:block xl:w-[180px] max-h-[250px] bg-white">
          <Input
            className="my-1 mx-2 w-[90px] xl:w-[150px] focus-visible:ring-0"
            value={categoryFilterInput}
            onChange={e => setCategoryFilterInput(e.target.value)}
          />
          <SelectItem value={"All"}>All Categories</SelectItem>
          {categories.length === 0 ? (
            <p>loading...</p>
          ) : (
            categories.map(category => (
              <SelectItem value={category.id.toString()} key={category.id}>
                {capitalize(category.name)}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="h-5" />
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Search for item..."
          className="2xl:w-[600px] w-[400px] text-lg placeholder:text-slate-500 border-none shadow-none focus-visible:ring-0"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
        <div className="absolute right-4 text-2xl text-slate-500">
          <i className="bx bx-search"></i>
        </div>
      </div>
    </form>
  );
}
