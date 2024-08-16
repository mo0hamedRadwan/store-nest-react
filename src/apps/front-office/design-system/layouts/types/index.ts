export type Category = {
  id: number;
  name: string;
  image?: {
    url: string;
  };
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  slug?: string;
};

// Define the type for contact
export interface ContactInfo {
  address: { localeCode: string; value: string }[];
  email: string;
  phoneNumber: string;
  workingDays: { localeCode: string; value: string }[];
}

// Define the type for the footerData state
export interface FooterData {
  contact: ContactInfo | null;
  logoUrl: string | null;
}
