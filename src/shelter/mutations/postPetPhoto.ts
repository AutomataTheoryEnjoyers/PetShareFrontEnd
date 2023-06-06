import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { useContext } from "react";

export const usePostPetPhoto = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (data: { petId: string; formData: FormData }) =>
      fetch(`${BACKEND_URL}pet/${data.petId}/photo`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          Accept: "*/*",
        },
        body: data.formData,
      }),
    {
      onSuccess: async (response) => {
        console.log(
          "Pet's photo successfully added"
        );
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
