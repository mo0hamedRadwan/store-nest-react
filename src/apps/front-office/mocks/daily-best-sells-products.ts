import { IProduct } from "shared/contracts/IProduct";

export default [
  {
    images: {
      foreground: "public/images/daily-best-products/product-1-1.jpg",
      background: "public/images/daily-best-products/product-1-2.jpg",
    },

    status: "best",

    body: {
      name: "Blue Diamond Almonds Lightly Salted",
      rate: 4,
      price: 238.85,
      discount: 10,
      brandName: "Dairy Milk",
      sold: 100,
      total: 200,
    },
  },
  {
    images: {
      foreground: "public/images/daily-best-products/product-2-1.jpg",
      background: "public/images/daily-best-products/product-2-2.jpg",
    },

    status: "hot",

    body: {
      name: "Angie’s Boomchickapop Sweet and womnies",
      rate: 3,
      price: 338.85,
      discount: 20,
      brandName: "Juhayna",
      sold: 150,
      total: 200,
    },
  },
  {
    images: {
      foreground: "public/images/daily-best-products/product-3-1.jpg",
      background: "public/images/daily-best-products/product-3-2.jpg",
    },

    status: "new",

    body: {
      name: "Foster Farms Takeout Crispy Classic ",
      rate: 5,
      price: 300,
      discount: 30,
      brandName: "Alamarai",
      sold: 31,
      total: 50,
    },
  },
  {
    images: {
      foreground: "public/images/daily-best-products/product-4-1.jpg",
      background: "public/images/daily-best-products/product-4-2.jpg",
    },

    status: "sale",

    body: {
      name: "All Natural Italian-Style Chicken Meatballs",
      rate: 2,
      price: 400,
      discount: 40,
      brandName: "Egypt Foods",
      sold: 49,
      total: 50,
    },
  },
  {
    images: {
      foreground: "public/images/daily-best-products/product-5-1.jpg",
      background: "public/images/daily-best-products/product-5-2.jpg",
    },

    body: {
      name: "Seeds of Change Organic Quinoa, Brown",
      rate: 1,
      price: 500,
      discount: 50,
      brandName: "Hodo Foods",
      sold: 49,
      total: 50,
    },
  },
] as IProduct[];
