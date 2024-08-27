import { capitalize } from "@mongez/reinforcements";
import { useEffect, useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [categoryFilterInput, setCategoryFilterInput] = useState<string>("");
  const [categorySelected, setCategorySelected] = useState<string>("All");
  const [searchInput, setSearchInput] = useState<string>("");
  const filteredCategories = categoriesAtom.use("categories");

  const handleInputCategoryChange = e => {
    const value = e.target.value;
    setCategoryFilterInput(value);
    categoriesAtom.filter(value);
  };

  // Focus the input field when the category filter changes
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [categoryFilterInput]);

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
      className="hidden lg:flex items-center border border-primary rounded-lg p-2"
      onSubmit={handleSearchForm}>
      <Select onValueChange={(value: string) => setCategorySelected(value)}>
        <SelectTrigger className="hidden xl:block xl:w-[180px] font-bold border-none shadow-none focus:ring-0">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent className="hidden xl:block xl:w-[180px] max-h-[250px] bg-white">
          <Input
            className="my-1 mx-2 w-[90px] xl:w-[150px] outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={categoryFilterInput}
            onChange={handleInputCategoryChange}
            ref={inputRef}
          />
          <SelectItem value={"All"}>All Categories</SelectItem>
          {filteredCategories.length === 0 ? (
            <div>Categories Empty</div>
          ) : (
            filteredCategories.map(category => (
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
          className="2xl:w-[600px] w-[400px] text-lg placeholder:text-slate-500 border-none shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
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
