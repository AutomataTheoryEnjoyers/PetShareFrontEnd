import { Address } from "./address";

export type User = {
  id: string;
  userName: string;
  phoneNumber?: string;
  email?: string;
  status: string;
  isAuthorized: boolean;
  address: Address;
};
