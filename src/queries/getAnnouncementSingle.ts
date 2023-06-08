import { useQuery } from "react-query";
import { BACKEND_URL } from "../backendUrl";
import { Announcement } from "../types/announcement";

export const useGetAnnouncementSingle = (announcementId: string) => {
  const query = useQuery<Announcement>("get-announcement", () =>
    fetch(BACKEND_URL + "announcement/" + announcementId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
  );
  return query;
};
