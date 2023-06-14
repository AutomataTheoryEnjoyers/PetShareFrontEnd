import { UseMutateAsyncFunction, useMutation } from "react-query";
import { ADOPTER_URL, BACKEND_URL } from "../../backendUrl";
import { NewAdopter } from "../../types/NewAdopter";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { UserData } from "../../types/userData";
import fetchAuth0ManagementAccessToken from "../queries/fetchAuth0ManagementAccessToken";
import { usePatchAuth0 } from "./usePatchAuth0";

export const usePostNewAdopter = () => {
  const mutatePatchAuth0 = usePatchAuth0();
  const { userData, setUserData } = useContext<UserContextType>(UserContext);

  const { mutateAsync, isError } = useMutation(
    (adopter: NewAdopter) =>
      fetch(ADOPTER_URL + "adopter", {
        method: "POST",
        body: JSON.stringify(adopter),
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
          role: "adopter",
        } as UserData;
        setUserData(updatedUserData);
        fetchAuth0ManagementAccessToken().then((accessToken) => {
          mutatePatchAuth0(accessToken);
        });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const mutateNewAdopter = mutateAsync as UseMutateAsyncFunction<
    Response,
    unknown,
    NewAdopter,
    unknown
  >;
  const isErrorAdopter = isError as boolean;
  return { mutateNewAdopter, isErrorAdopter };
};
