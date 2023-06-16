import { useQuery } from "react-query";
import { ANNOUNCEMENT_URL } from "../backendUrl";
import { Announcement } from "../types/announcement";
import { useContext } from "react";
import { UserContextType } from "../types/userContextType";
import { UserContext } from "../components/userContext";

export const useGetAnnouncementSingle = (announcementId: string) => {
  const { userData } = useContext<UserContextType>(UserContext);

  const query = useQuery<Announcement>("get-announcement", () =>
    fetch(ANNOUNCEMENT_URL + "announcements/" + announcementId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: userData ? `Bearer ${userData?.accessToken}` : "",
      },
    })
      .then((res) => res.json())
      .then((res) => ({
        ...res,
        creationDate: new Date(res.creationDate),
        lastUpdateDate: new Date(res.lastUpdateDate),
        closingDate: new Date(res.closingDate),
        pet: {
          ...res.pet,
          birthday: new Date(res.pet.birthday),
        },
      }))
  );
  return query;
};
