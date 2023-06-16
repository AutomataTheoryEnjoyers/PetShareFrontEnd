import { useMutation } from "react-query";
import { ANNOUNCEMENT_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export type LikeQueryParams = {
  announcementId: string,
  isLiked: boolean
}
export const usePostLike = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    ({ announcementId, isLiked }: LikeQueryParams) =>
      fetch(ANNOUNCEMENT_URL + "announcements/" + announcementId + `/like?isLiked=${isLiked.toString()}`, {
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
