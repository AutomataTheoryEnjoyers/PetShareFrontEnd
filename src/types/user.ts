import { Address } from "./address";

export type User = {
  id: string;
  userName: string;
  phoneNumber?: string;
  email?: string;
  status: number;
  isAuthorized: boolean;
  address: Address;
};
