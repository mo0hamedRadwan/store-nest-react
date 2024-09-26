// Import images
import { shopAtom } from "app/shop/atoms/shopAtom";
import CategoryItem from "./CategoryItem";

export default function CategorySidebar() {
  // const categoryImages = [image1, image2, image3, image4, image5];

  // const { categories, isLoading, error } = useFetchShopCategories();
  const categories = shopAtom.get("categories");
  const { loadingCategories: loading, error } = shopAtom.useValue();
  const categoriesItems = categories.slice(3, 8);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-w-[250px] p-7 rounded-lg flex flex-col relative border border-solid shadow-gray-300">
      <h5 className="mb-8 border-b font-bold border-[#ececec] text-[24px] pb-6 relative after:content-[''] after:bg-[#BCE3C9] after:h-0.5 after:w-20 after:absolute after:left-0 after:rtl:right-0 after:bottom-0">
        Category
      </h5>
      <ul className="group">
        {categoriesItems.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
}
