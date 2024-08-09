export type Category = {
  id: number;
  name: string;
  img: string;
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
