import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewPet } from "../../types/newPet";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { useContext } from "react";

export const usePostPet = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (pet: NewPet) =>
      fetch(BACKEND_URL + "pet", {
        method: "POST",
        body: JSON.stringify(pet),
        headers: {
          authorization: `Bearer ${userData?.accessTokenDB}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async (data) => {
        console.log(
          "Pet successfully added: " + JSON.stringify(await data.json())
        );
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
