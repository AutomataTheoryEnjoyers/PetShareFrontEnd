import { useMutation } from "react-query";
import { ADOPTER_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const usePostApplication = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (announcementId: string) =>
      fetch(ADOPTER_URL + "applications", {
        method: "POST",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ announcementId: announcementId }),
      }),
    {
      onSuccess: async () => {
        console.log("Application successfully posted");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
