import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { useContext } from "react";

export const usePostPetPhoto = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (data: { petId: string; petPhotoUrl: string }) =>
      fetch(`${BACKEND_URL}pet/${data.petId}/photo`, {
        method: "POST",
        body: JSON.stringify(data.petPhotoUrl),
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async (data) => {
        console.log(
          "Pet's photo successfully added: " + JSON.stringify(await data.json())
        );
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
