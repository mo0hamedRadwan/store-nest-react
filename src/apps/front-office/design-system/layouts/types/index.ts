export type Category = {
  id: number;
  name: string;
  img: string;
};

export interface ContactInfo {
  address: { localeCode: string; value: string }[];
  email: string;
  phoneNumber: string;
  workingDays: { localeCode: string; value: string }[];
}

export interface FooterData {
  contact: ContactInfo | null;
  logoUrl: string | null;
}
