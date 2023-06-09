import { useQuery } from "react-query";
import { BACKEND_URL } from "../backendUrl";
import { Announcement } from "../types/announcement";

export const useGetAnnouncementSingle = (announcementId: string) => {
  const query = useQuery<Announcement>("get-announcement", () =>
    fetch(BACKEND_URL + "announcements/" + announcementId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
