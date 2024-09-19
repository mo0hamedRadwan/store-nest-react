export enum StackStatus {
  InStock = "In Stock",
  OutStock = "Out Of Stock",
}

const compareProductsMock = [
  {
    image: "/images/compare/compare-1.jpg",
    name: "J.Crew Mercantile Women's Short",
    price: (100).toFixed(2),
    rating: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    stackStatus: StackStatus.InStock,
    weight: 1,
    dimensions: "10x10x10",
  },
  {
    image: "/images/compare/compare-2.jpg",
    name: "Amazon Essentials Women's Tanks",
    price: (200).toFixed(2),
    rating: 3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    stackStatus: StackStatus.InStock,
    weight: 2,
    dimensions: "20x20x20",
  },
  {
    image: "/images/compare/compare-3.jpg",
    name: "Amazon Brand - Daily Ritual Wom",
    price: (300).toFixed(2),
    rating: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    stackStatus: StackStatus.OutStock,
    weight: 3,
    dimensions: "30x30x30",
  },
] as {
  image: string;
  name: string;
  price: string;
  rating: number;
  description: string;
  stackStatus: StackStatus;
  weight: number;
  dimensions: string;
}[];

export default compareProductsMock;
