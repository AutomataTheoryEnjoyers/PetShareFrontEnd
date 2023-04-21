import { Dispatch, SetStateAction } from "react";
import { UserData } from "./userData";

export type UserContextType = {
    userData: UserData | null;
    setUserData: Dispatch<SetStateAction<UserData | null>>;
};

// Naming convention from
// https://auth0.com/docs/secure/tokens/access-tokens/get-access-tokens#example-post-to-token-url