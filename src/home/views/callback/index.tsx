import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useContext, useEffect, useState } from "react";
import { UserContextType } from "../../../types/userContextType";
import { UserContext } from "../../../components/userContext";
import jwt from "jwt-decode";

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const namespace = process.env.REACT_APP_AUTH0_ACCESSTOKEN_NAMESPACE as string;

export const Callback = () => {
    const {
        user,
        isLoading,
        error,
        getAccessTokenSilently,
    } = useAuth0();

    const { userData, setUserData } = useContext<UserContextType>(UserContext);

    useEffect(() => {
        const getUserMetadata = async () => {

            if (user?.sub == null) return;

            try {
                const accessToken = await getAccessTokenSilently();
                const accessTokenDecoded = jwt(accessToken) as any;
                console.log(accessTokenDecoded);
                setUserData(
                    {
                        userIdAuth0: accessTokenDecoded["sub"],
                        userIdDB: accessTokenDecoded[`${namespace}/db_id`],
                        role: accessTokenDecoded[`${namespace}/role`],
                        accessToken: accessToken,
                    }
                )
            } catch (e) {
                console.log('Error:', e);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user]);

    return (
        <AnimatedPage>
            {/* <h1> Auth0 callback page</h1> */}
            {error && <Navigate to="/announcements" />}
            {!error && isLoading && <ClipLoader />}
            {!error && !isLoading && userData && userData.role === "unassigned" && <Navigate to="/register" />}
            {!error && !isLoading && userData && userData.role === "adopter" && <Navigate to="/user/announcements" />}
            {!error && !isLoading && userData && userData.role === "shelter" && <Navigate to="/shelter/my-announcements" />}
        </AnimatedPage>
    );
};