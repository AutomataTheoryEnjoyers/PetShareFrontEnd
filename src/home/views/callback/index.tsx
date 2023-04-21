import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useContext, useEffect, useState } from "react";
import { UserContextType } from "../../../types/userContextType";
import { UserContext } from "../../../components/userContext";

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

export const Callback = () => {
    const {
        isAuthenticated,
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

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

                console.log(userDetailsByIdUrl);

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (metadataResponse.status === 200) {
                    setUserData(await metadataResponse.json().then(
                        response => (
                            {
                                // It just works
                                ...response,
                                userIdAuth0: response.user_id,
                                userIdDB: response.app_metadata.db_id,
                                role: response.app_metadata.role,
                                email: response.email,
                                userName: response.username,
                                phoneNumber: response.phone_number,
                                accessToken: accessToken,
                            }
                        )))
                }
            } catch (e) {
                console.log('Error:', e);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);

    return (
        <AnimatedPage>
            <h1> Auth0 callback page</h1>
            {error && <Navigate to="/announcements" />}
            {!isLoading && userData && <Navigate to="/register" />}
            {!error && isLoading && <ClipLoader />}
            {!error && !isLoading && (
                <>
                    Congrats! Successfully logged in!
                </>
            )}
            {!error && !isLoading && isAuthenticated
                && user && (
                    <ul>
                        {Object.keys(user).map(
                            (objKey, i) => <li key={i}> {objKey}: {user[objKey]} </li>
                        )}

                    </ul>
                )}
            {!isLoading && userData && (
                <>
                    {userData ? userData.role : "Context is null"}
                </>
            )}
        </AnimatedPage>
    );
};

const Container = styled.div`
            text-align: center;
            `;