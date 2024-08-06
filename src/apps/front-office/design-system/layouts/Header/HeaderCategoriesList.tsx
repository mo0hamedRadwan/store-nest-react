import { capitalize } from "@mongez/reinforcements";
import { SelectItem } from "../../components/ui/select";
import categoriesAtom from "../atoms/categoriesAtom";

export default function HeaderCategoriesList() {
  const catigories = categoriesAtom.use("categories");

  return (
    <>
      {catigories.length === 0 ? (
        <div>Categories Empty</div>
      ) : (
        catigories.map(category => (
          <SelectItem value={category.id.toString()} key={category.id}>
            {capitalize(category.name)}
          </SelectItem>
        ))
      )}
    </>
  );
}
