import React from "react";
import { UserContextType } from "../types/userContextType";

export const UserContext = React.createContext<UserContextType>({
  userData: null,
  setUserData: () => {},
});
