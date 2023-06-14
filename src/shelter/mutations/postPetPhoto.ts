import { useMutation } from "react-query";
import { ANNOUNCEMENT_URL } from "../../backendUrl";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { useContext } from "react";

export const usePostPetPhoto = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (data: { petId: string; formData: FormData }) =>
      fetch(`${ANNOUNCEMENT_URL}pet/${data.petId}/photo`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          Accept: "*/*",
          //"Content-Type": "multipart/form-data",
          //"Content-Length": `${data.petPhotoData.length}`,
        },
        body: data.formData,
      }),
    {
      onSuccess: async (response) => {
        console.log(
          "Pet's photo successfully added: " +
          JSON.stringify(await response.json())
        );
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
