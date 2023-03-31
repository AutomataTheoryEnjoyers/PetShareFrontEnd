// import { useQuery } from "react-query"
import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Announcement } from "../../types/announcement"

export const useMyAnnouncements = () => {
  const query = useQuery<Announcement[]>('my-announcements', () => fetch(
    BACKEND_URL + "announcements?shelterNames=MyShelterName",
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then(res => res.json()));
  return query
}
