import { Address } from "./address";
import { UserStatus } from "./userStatus";

export type User = {
  userName?: string;
  phoneNumber?: string;
  email?: string;
  status: UserStatus;
  address: Address;
};