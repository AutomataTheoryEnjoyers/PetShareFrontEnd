import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { useContext } from "react";
import { MutationContext } from "../../components/mutationContext";
import { MutationContextType } from "../../types/mutationContext";

export const usePostPetPhoto = () => {
  const { userData } = useContext<UserContextType>(UserContext);
  const { setMutationData } = useContext<MutationContextType>(MutationContext);

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
        console.log("Pet's photo successfully added");
        setMutationData({ mutationSuccessful: true });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
