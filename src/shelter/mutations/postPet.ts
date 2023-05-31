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
    (pet: { petData: NewPet; petPhotoData: File | null }) =>
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
        pet: { petData: NewPet; petPhotoData: File | null }
      ) => {
        const responseData = await response.json();
        console.log("Pet successfully added: " + JSON.stringify(responseData));
        if (pet.petPhotoData !== null) {
          const petId = responseData["id"] as string;
          const formData = new FormData();
          formData.append("file", pet.petPhotoData);
          postPetPhoto({ petId, formData });
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};

// const ConvertImageToBinary = async (image: File) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();

//     // When the file is loaded
//     reader.onload = () => {
//       const buffer = reader.result as ArrayBuffer;
//       const binary = Array.from(new Uint8Array(buffer));

//       resolve(binary);
//     };

//     // If there is an error reading the file
//     reader.onerror = () => {
//       reject(reader.error);
//     };

//     // Read the file as an array buffer
//     reader.readAsArrayBuffer(image);
//   });
// };
