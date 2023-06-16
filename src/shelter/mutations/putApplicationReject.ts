import { useMutation } from "react-query";
import { ADOPTER_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const usePutApplicationReject = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (applicationId: string) =>
      fetch(ADOPTER_URL + "applications/" + applicationId + "/reject", {
        method: "PUT",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async () => {
        console.log("Application successfully rejected");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
