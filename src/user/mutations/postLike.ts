import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const usePostLike = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (announcementId: string) =>
      fetch(BACKEND_URL + "announcements/" + announcementId + "/like", {
        method: "PUT",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async () => {
        console.log("Announcement liked!");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
