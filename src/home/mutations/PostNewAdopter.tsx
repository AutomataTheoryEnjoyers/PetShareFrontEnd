import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewAdopter } from "../../types/NewAdopter";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { UserData } from "../../types/userData";
import { usePatchAuth0 } from "./usePatchAuth0";

export const usePostNewAdopter = () => {
  const mutatePatchAuth0 = usePatchAuth0();
  const { userData, setUserData } = useContext<UserContextType>(UserContext);

  const { mutateAsync, isSuccess, isError } = useMutation(
    (adopter: NewAdopter) =>
      fetch(BACKEND_URL + "adopter", {
        method: "POST",
        body: JSON.stringify(adopter),
        headers: {
          authorization: `Bearer ${userData?.accessTokenDB}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async (response) => {
        const responseDecoded = await response.json();
        console.log(
          "Adopter successfully added on backend: " +
            JSON.stringify(responseDecoded)
        );
        const updatedUserData = {
          userIdAuth0: userData?.userIdAuth0,
          accessTokenDB: userData?.accessTokenDB,
          accessTokenAuth0: userData?.accessTokenAuth0,
          userIdDB: responseDecoded.id,
          role: "adopter",
        } as UserData;
        setUserData(updatedUserData);
        mutatePatchAuth0(userData?.accessTokenAuth0 as string);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const mutateNewAdopter = mutateAsync;
  const isSuccessAdopter = isSuccess;
  const isErrorAdopter = isError;
  return { mutateNewAdopter, isSuccessAdopter, isErrorAdopter };
};
