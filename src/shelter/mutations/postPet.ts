import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewPet } from "../../types/newPet";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { useContext } from "react";
import { usePostPetPhoto } from "./postPetPhoto";

export const usePostPet = () => {
  const { userData } = useContext<UserContextType>(UserContext);
  const postPetPhoto = usePostPetPhoto();

  const { mutateAsync } = useMutation(
    (pet: { petData: NewPet; petPhotoUrl: string }) =>
      fetch(BACKEND_URL + "pet", {
        method: "POST",
        body: JSON.stringify(pet.petData),
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async (
        response,
        pet: { petData: NewPet; petPhotoUrl: string }
      ) => {
        const responseData = await response.json();
        console.log("Pet successfully added: " + JSON.stringify(responseData));
        if (pet.petPhotoUrl !== "") {
          const petId = responseData["id"] as string;
          const petPhotoUrl = pet.petPhotoUrl;
          postPetPhoto({ petId, petPhotoUrl });
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
