import { IProductContent } from "shared/contracts/IProductContent";

export default [
  {
    image: "public/images/daily-best-products/product-1-1.jpg",
    content: {
      name: "Blue Diamond Almonds Lightly Salted",
      rate: 4,
      price: 238.85,
      discount: 10,
      brandName: "Dairy Milk",
    },
  },
  {
    image: "public/images/daily-best-products/product-2-1.jpg",
    content: {
      name: "Angie’s Boomchickapop Sweet and womnies",
      rate: 3,
      price: 338.85,
      discount: 20,
      brandName: "Juhayna",
    },
  },
  {
    image: "public/images/daily-best-products/product-3-1.jpg",
    content: {
      name: "Foster Farms Takeout Crispy Classic ",
      rate: 5,
      price: 300,
      discount: 30,
      brandName: "Alamarai",
    },
  },
  {
    image: "public/images/daily-best-products/product-4-1.jpg",
    content: {
      name: "All Natural Italian-Style Chicken Meatballs",
      rate: 2,
      price: 400,
      discount: 40,
      brandName: "Egypt Foods",
    },
  },
  {
    image: "public/images/daily-best-products/product-5-1.jpg",
    content: {
      name: "Seeds of Change Organic Quinoa, Brown",
      rate: 1,
      price: 500,
      discount: 50,
      brandName: "Hodo Foods",
    },
  },
] as { image: string; content: IProductContent }[];
