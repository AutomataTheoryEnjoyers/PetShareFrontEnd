import { Address } from "./address";

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
