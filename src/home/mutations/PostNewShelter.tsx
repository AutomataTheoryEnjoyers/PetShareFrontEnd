import { UseMutateAsyncFunction, useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewShelter } from "../../types/newShelter";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { usePatchAuth0 } from "./usePatchAuth0";
import { UserData } from "../../types/userData";
import fetchAuth0ManagementAccessToken from "../queries/fetchAuth0ManagementAccessToken";
import { Navigate } from "react-router-dom";

export const usePostNewShelter = () => {
  const mutatePatchAuth0 = usePatchAuth0();
  const { userData, setUserData } = useContext<UserContextType>(UserContext);

  const { mutateAsync, isError } = useMutation(
    (shelter: NewShelter) =>
      fetch(BACKEND_URL + "shelter", {
        method: "POST",
        body: JSON.stringify(shelter),
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async (response) => {
        const responseDecoded = await response.json();
        const updatedUserData = {
          userIdAuth0: userData?.userIdAuth0,
          accessToken: userData?.accessToken,
          userIdDB: responseDecoded.id,
          role: "shelter",
        } as UserData;
        setUserData(updatedUserData);
        fetchAuth0ManagementAccessToken().then((accessToken) => {
          console.log(`Auth0 token: ${accessToken}`);
          mutatePatchAuth0(accessToken);
        });

        return (
          <>
            <Navigate to="/shelter/my-announcements" />
          </>
        );
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  const mutateNewShelter = mutateAsync as UseMutateAsyncFunction<
    Response,
    unknown,
    NewShelter,
    unknown
  >;
  const isErrorShelter = isError as boolean;
  return { mutateNewShelter, isErrorShelter };
};
