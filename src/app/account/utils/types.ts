export type Order = {
  id: number;
  // other properties
};

export type UserData = {
  id: number;
  userType: "user";
  name: string;
  email: string;
};

export type GuestData = {
  id: number;
  userType: "guest";
};

export type RegisterData = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};
