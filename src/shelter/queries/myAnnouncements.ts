import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Announcement } from "../../types/announcement";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const useMyAnnouncements = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const query = useQuery<Announcement[]>("my-announcements", () =>
    fetch(BACKEND_URL + "shelter/announcements", {
      method: "GET",
      headers: {
        authorization: `Bearer ${userData?.accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        res.map((announcementResponse: any) => ({
          creationDate: new Date(announcementResponse.creationDate),
          lastUpdateDate: new Date(announcementResponse.lastUpdateDate),
          closingDate: new Date(announcementResponse.closingDate),
          pet: {
            ...announcementResponse.pet,
            birthday: new Date(announcementResponse.pet.birthday),
          },
        }))
      )
  );
  return query;
};
