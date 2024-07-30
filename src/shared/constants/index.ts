import { Eye, Heart, Share } from "lucide-react";

// ============================== STATUS ==============================
export enum PRODUCT_STATUS {
  SALE = "sale",
  NEW = "new",
  HOT = "hot",
  BEST = "best",
  DEFAULT = "default",
}

export const PRODUCT_STATUS_CLASSES = {
  [PRODUCT_STATUS.SALE]: "bg-red-500",
  [PRODUCT_STATUS.NEW]: "bg-blue-500",
  [PRODUCT_STATUS.HOT]: "bg-yellow-500",
  [PRODUCT_STATUS.BEST]: "bg-green-500",
  [PRODUCT_STATUS.DEFAULT]: "bg-gray-500",
};

// ============================== IMAGES ==============================
export const DEFAULT_IMAGE = "https://via.placeholder.com/150";

// ============================== ICONS ===============================
export const PRODUCT_ACTIONS = [
  {
    icon: Eye,
    tooltip: "Quick view",
  },
  {
    icon: Share,
    tooltip: "Share",
  },

  {
    tooltip: "Add to wishlist",
    icon: Heart,
  },
];

// ============================== URLS =============================
export const URLS = {
  PRODUCT_DETAILs: "/product/:id",
  BRAND_DETAILS: "/brand/:id",
};
