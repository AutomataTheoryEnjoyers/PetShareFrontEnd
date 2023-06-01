import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewAnnouncement } from "../../types/newAnnouncement";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const usePostAnnouncement = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    (announcement: NewAnnouncement) =>
      fetch(BACKEND_URL + "announcements", {
        method: "POST",
        body: JSON.stringify(announcement),
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    {
      onSuccess: async (response) => {
        const responseData = await response.json();
        console.log(
          "Announcement successfully added: " + JSON.stringify(responseData)
        );
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
