export type Address = {
  id: string;
  street: string;
  city?: string;
  province?: string;
  postalCode?: string;
  country?: string;
};

export const dummyAddress = {
  id: "",
  street: "",
  city: "",
  province: "",
  postalCode: "",
  country: "",
} as Address;
