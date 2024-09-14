export type Meta = {
  appendAppName: boolean;
};

export type Image = {
  extension: string;
  hash: string;
  height: number;
  id: string;
  mimeType: string;
  name: string;
  path: string;
  size: number;
  url: string;
  width: number;
};

export type CreatedBy = {
  id: number;
  name: string;
};

export type ContactInfo = {
  address: string;
  email: string;
  phoneNumber: string;
  workingDays: string;
};

// Define the type for the footerData state

export type FooterData = {
  contact?: ContactInfo;
  logoUrl?: string;
};

export type DealsData = {
  images: Image;
  price: number;
  salePrice: number;
  name: string;
  rating: number;
  timeCards?: {
    time: number;
    type: string;
  }[];
};

export type Banner = {
  id: string;
  name: string;
  isActive: boolean;
  title: string;
  image: Image;
  type: string;
};
