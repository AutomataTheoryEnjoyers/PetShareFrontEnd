import { useMutation } from "react-query";
import { ANNOUNCEMENT_URL } from "../../backendUrl";
import { NewAnnouncement } from "../../types/newAnnouncement";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { MutationContextType } from "../../types/mutationContext";
import { MutationContext } from "../../components/mutationContext";

export const usePostAnnouncement = () => {
  const { userData } = useContext<UserContextType>(UserContext);
  const { setMutationData } = useContext<MutationContextType>(MutationContext);

  const { mutateAsync } = useMutation(
    (announcement: NewAnnouncement) =>
      fetch(ANNOUNCEMENT_URL + "announcements", {
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
        setMutationData({ mutationSuccessful: true });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
