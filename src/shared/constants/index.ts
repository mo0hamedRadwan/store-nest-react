import { Eye, Heart, Share } from "lucide-react";

// ============================== STATUS ==============================
export enum PRODUCT_STATUS {
  SALE = "top-selling",
  RATED = "top-rated",
  NEW = "recently-added",
}

export const PRODUCT_STATUS_CLASSES = {
  [PRODUCT_STATUS.SALE]: "bg-red-500",
  [PRODUCT_STATUS.NEW]: "bg-blue-500",
  [PRODUCT_STATUS.RATED]: "bg-yellow-500",
};

// ============================== IMAGES ==============================
export const DEFAULT_IMAGE = "https://via.placeholder.com/150";

// ============================== ICONS ===============================
export const PRODUCT_ACTIONS = [
  {
    icon: Eye,
    tooltip: "quickView",
  },
  {
    icon: Share,
    tooltip: "share",
  },

  {
    tooltip: "wishlist",
    icon: Heart,
  },
];
