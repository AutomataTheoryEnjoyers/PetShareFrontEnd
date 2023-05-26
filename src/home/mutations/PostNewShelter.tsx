import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewShelter } from "../../types/newShelter";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { usePatchAuth0 } from "./usePatchAuth0";
import { UserData } from "../../types/userData";
import { Navigate } from "react-router-dom";

export const usePostNewShelter = () => {
  const mutatePatchAuth0 = usePatchAuth0();
  const { userData, setUserData } = useContext<UserContextType>(UserContext);

  const { mutateAsync, isSuccess, isError } = useMutation(
    (shelter: NewShelter) =>
      fetch(BACKEND_URL + "shelter", {
        method: "POST",
        body: JSON.stringify(shelter),
        headers: {
          authorization: `Bearer ${userData?.accessTokenDB}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async (response) => {
        const responseDecoded = await response.json();
        console.log(
          "Shelter successfully added on backend: " +
            JSON.stringify(responseDecoded)
        );
        const updatedUserData = {
          userIdAuth0: userData?.userIdAuth0,
          accessTokenDB: userData?.accessTokenDB,
          accessTokenAuth0: userData?.accessTokenAuth0,
          userIdDB: responseDecoded.id,
          role: "shelter",
        } as UserData;
        setUserData(updatedUserData);
        mutatePatchAuth0(userData?.accessTokenAuth0 as string);

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
  const mutateNewShelter = mutateAsync;
  const isSuccessShelter = isSuccess;
  const isErrorShelter = isError;
  return { mutateNewShelter, isSuccessShelter, isErrorShelter };
};
