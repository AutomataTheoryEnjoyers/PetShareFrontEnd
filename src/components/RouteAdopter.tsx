// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the Unauthorized page.
import React, { FC, useContext } from "react";
import { UserContextType } from "../types/userContextType";
import { UserContext } from "./userContext";
import { PageUnauthorized } from "../views/pageUnauthorized";

const RouteAdopter: FC<{ children: React.ReactElement }> = ({ children }) => {
  const { userData } = useContext<UserContextType>(UserContext);

  if (userData === null || userData?.role !== "adopter") {
    console.log("User is not adopter");
    return <PageUnauthorized />;
  }
  return children;
};

export default RouteAdopter;
