// import { useQuery } from "react-query"
import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Announcement } from "../../types/announcement"

export const useMyAnnouncements = () => {
  const query = useQuery<Announcement[]>('my-announcements', () => fetch(
    BACKEND_URL + "announcements",
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then(res => res.json())
    .then(res => res.map((announcementResponse: any) => (
      {
        ...announcementResponse,
        creationDate: new Date(announcementResponse.creationDate),
        closingDate: new Date(announcementResponse.closingDate),
        pet: {
          ...announcementResponse.pet,
          birthday: new Date(announcementResponse.pet.birthday)
        }
      })
    ))
  );
  return query
}
