import React from "react";
import { useState } from "react";
import { UserContextType } from "../types/userContextType";
import { UserData } from "../types/userData";

export const UserContext = React.createContext<UserContextType>({ userData: null, setUserData: () => { } });
