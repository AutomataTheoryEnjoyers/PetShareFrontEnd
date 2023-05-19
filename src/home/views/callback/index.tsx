import styled from "styled-components";
import { AnimatedPage } from "../../../components/animatedPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useContext, useEffect } from "react";
import { UserContextType } from "../../../types/userContextType";
import { UserContext } from "../../../components/userContext";
import jwt from "jwt-decode";

export const Callback = () => {
  const { isLoading, error, getAccessTokenSilently } = useAuth0();

  const { userData, setUserData } = useContext<UserContextType>(UserContext);

  useEffect(() => {
    const getUserMetadata = async () => {
      if (error || isLoading || userData !== null) return;

      try {
        await getAccessTokenSilently().then((accessToken) => {
          const accessTokenDecoded = jwt(accessToken) as any;
          console.log(accessTokenDecoded);
          setUserData({
            userIdAuth0: accessTokenDecoded["sub"],
            userIdDB: accessTokenDecoded["db_id"],
            role: accessTokenDecoded["role"],
            accessToken: accessToken,
          });
          //console.log(userData);
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
