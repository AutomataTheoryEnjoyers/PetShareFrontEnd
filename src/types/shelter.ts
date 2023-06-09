import { Address, dummyAddress } from "./address";

export type Shelter = {
  id: string;
  userName?: string;
  phoneNumber?: string;
  email?: string;
  addressId: string;
  fullShelterName?: string;
  isAuthorized: boolean;
  address: Address;
};

export const dummyShelter = {
  id: "",
  userName: "",
  phoneNumber: "",
  email: "",
  addressId: "",
  fullShelterName: "",
  isAuthorized: true,
  address: dummyAddress,
};
