export type ProductOptionsProps = {
  options: {
    id: number;
    name: string;
    values: string[];
  }[];
};
export default function ProductOptions() {
  return <div className="product-options mb-4">options</div>;
}
