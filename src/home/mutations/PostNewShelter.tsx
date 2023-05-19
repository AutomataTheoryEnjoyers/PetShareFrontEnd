import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewShelter } from "../../types/newShelter";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const usePostNewShelter = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
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
      onSuccess: async (data) => {
        console.log(
          "Shelter successfully added: " + JSON.stringify(await data.json())
        );
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
