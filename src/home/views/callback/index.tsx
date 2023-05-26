import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useContext, useEffect } from "react";
import { UserContextType } from "../../../types/userContextType";
import { UserContext } from "../../../components/userContext";
import jwt from "jwt-decode";
import fetchUserMetadata from "../../queries/fetchUserMetadata";
import { ConvertAuth0AccessToken } from "../../components/convertAuth0AccessToken";

export const Callback = () => {
  const { isLoading, error, getAccessTokenSilently } = useAuth0();

  const { userData, setUserData } = useContext<UserContextType>(UserContext);

  useEffect(() => {
    const getUserMetadata = async () => {
      if (error || isLoading || userData !== null) return;

      try {
        await getAccessTokenSilently().then(async (accessToken: string) => {
          console.log(accessToken);
          const accessTokenDecoded = jwt(accessToken) as any;
          console.log("Access Token");
          console.log(accessTokenDecoded);

          fetchUserMetadata(accessTokenDecoded["sub"], accessToken).then(
            async (userMetadata) => {
              console.log("User Metadata");
              console.log(userMetadata);
              const accessTokenDB = await ConvertAuth0AccessToken(
                accessToken,
                userMetadata["db_id"],
                userMetadata["role"]
              );
              setUserData({
                userIdAuth0: accessTokenDecoded["sub"],
                userIdDB: userMetadata["db_id"],
                role: userMetadata["role"],
                accessTokenDB: accessTokenDB,
                accessTokenAuth0: accessToken,
              });
            }
          );
        });
      } catch (e) {
        console.log("Error:", e);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, isLoading, error, setUserData, userData]);

  return (
    <AnimatedPage>
      {/* <h1> Auth0 callback page</h1> */}
      {!userData || isLoading ? (
        <CenteredBox>
          <ClipLoader />
        </CenteredBox>
      ) : error ? (
        <Navigate to="/announcements" />
      ) : userData.role === "adopter" ? (
        <Navigate to="/user/announcements" />
      ) : userData && userData.role === "shelter" ? (
        <Navigate to="/shelter/my-announcements" />
      ) : (
        <Navigate to="/register" />
      )}
    </AnimatedPage>
  );
};

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;
