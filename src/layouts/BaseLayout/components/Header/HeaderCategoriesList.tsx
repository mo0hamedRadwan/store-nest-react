import { categoriesAtom } from "app/shop/atoms";
import { SelectItem } from "design-system/components/ui/select";

export default function HeaderCategoriesList() {
  const categories = categoriesAtom.use("categories");

  return (
    <>
      {categories.length === 0 ? (
        <div>Categories Empty</div>
      ) : (
        categories.map(category => (
          <SelectItem value={category.id.toString()} key={category.id}>
            {category.name}
          </SelectItem>
        ))
      )}
    </>
  );
}
