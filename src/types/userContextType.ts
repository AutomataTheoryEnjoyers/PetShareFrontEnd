import { Dispatch, SetStateAction } from "react";
import { UserData } from "./userData";

export type UserContextType = {
  userData: UserData | null;
  setUserData: Dispatch<SetStateAction<UserData | null>>;
};
