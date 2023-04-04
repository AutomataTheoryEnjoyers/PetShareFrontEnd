import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Announcement } from "../../types/announcement"

export const useAnnouncements = () => {
  const query = useQuery<Announcement[]>('my-announcements', () => fetch(
    BACKEND_URL + "announcements",
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then(res => res.json()));
  return query;
}
