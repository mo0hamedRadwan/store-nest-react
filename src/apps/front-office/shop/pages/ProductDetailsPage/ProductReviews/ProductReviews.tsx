import ProductReviewItem from "./components/ProductReviewItem";

export type ProductReviewsProps = {
  // props go here
};
export default function ProductReviews() {
  return (
    <ul className="list-none flex flex-col gap-10 mb-10">
      <ProductReviewItem />
      <ProductReviewItem />
      <ProductReviewItem />
    </ul>
  );
}
