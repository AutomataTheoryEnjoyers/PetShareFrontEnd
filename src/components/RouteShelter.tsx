// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the Unauthorized page.
//
// If someone tries to switch page through the browser's URL, the Context will null out, not allowing access to a page
import React, { FC, useContext } from "react";
import { UserContextType } from "../types/userContextType";
import { UserContext } from "./userContext";
import { PageUnauthorized } from "../views/pageUnauthorized";

const RouteShelter: FC<{ children: React.ReactElement }> = ({ children }) => {
  const { userData } = useContext<UserContextType>(UserContext);

  if (userData === null || userData?.role !== "shelter") {
    console.log("User is not shelter");
    return <PageUnauthorized />;
  }
  return children;
};

export default RouteShelter;
