import React, { FC, useContext } from "react";
import { UserContextType } from "../types/userContextType";
import { UserContext } from "./userContext";
import { PageUnauthorized } from "../views/pageUnauthorized";

const RouteAdmin: FC<{ children: React.ReactElement }> = ({ children }) => {
    const { userData } = useContext<UserContextType>(UserContext);

    if (userData === null || userData?.role !== "admin") {
        console.log("User is not an admin");
        return <PageUnauthorized />;
    }
    return children;
};

export default RouteAdmin;