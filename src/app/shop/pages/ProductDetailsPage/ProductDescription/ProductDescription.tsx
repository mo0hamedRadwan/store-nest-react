import { trans } from "@mongez/localization";
import { productAtom } from "app/shop/atoms/product.atom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "design-system/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "design-system/components/ui/tabs";
import ProductReviews from "../ProductReviews";
import ProductReviewForm from "../ProductReviews/components/ProductReviewForm";

export default function ProductDescription() {
  const product = productAtom.useValue();
  return (
    <Tabs
      defaultValue="description"
      className="w-full px-4 py-5 md:p-10 border border-gray-200 rounded-2xl">
      <TabsList>
        <TabsTrigger value="description">{trans("description")}</TabsTrigger>
        <TabsTrigger value="additionalInfo">
          {trans("additionalInfo")}
        </TabsTrigger>
        <TabsTrigger value="reviews">{trans("reviews")}</TabsTrigger>
      </TabsList>
      <TabsContent
        value="description"
        className="description text-sm text-gray-500 font-semibold leading-7">
        <div
          dangerouslySetInnerHTML={{
            __html: product?.description || "",
          }}
        />
      </TabsContent>
      <TabsContent value="additionalInfo">
        <Table className="border border-gray-200">
          <TableBody>
            {product?.type && (
              <TableRow>
                <TableHead>{trans("type")}</TableHead>
                <TableCell>{product?.type}</TableCell>
              </TableRow>
            )}
            {product?.category && (
              <TableRow>
                <TableHead>{trans("category")}</TableHead>
                <TableCell>{product?.category?.name}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="reviews">
        <ProductReviews />
        <ProductReviewForm />
      </TabsContent>
    </Tabs>
  );
}
