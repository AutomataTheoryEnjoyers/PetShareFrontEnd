import { Address } from "./address";

export type User = {
  userName?: string;
  phoneNumber?: string;
  email?: string;
  status: string;
  address: Address;
};
