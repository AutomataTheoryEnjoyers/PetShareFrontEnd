import { useQuery } from "react-query";
import { BACKEND_URL } from "../backendUrl";
import { mockAnnouncements } from "../mocks/mockData";
import { Announcement } from "../types/announcement";
import { AnnouncementFilters } from "../types/announcementFilter";

export const useAnnouncements = (filters: AnnouncementFilters | null) => {

  return { data: mockAnnouncements };
  // const queryStringArray =
  //   [
  //     filters?.maxAge && `maxAge=${filters.maxAge}`,
  //     filters?.minAge && `minAge=${filters.minAge}`,
  //     filters?.breed.length && `breed=${encodeURIComponent(JSON.stringify(filters.breed))}`,
  //     filters?.shelter.length && `shelter=${encodeURIComponent(JSON.stringify(filters.shelter))}`,
  //     filters?.species.length && `species=${encodeURIComponent(JSON.stringify(filters.species))}`,
  //     filters?.location.length && `location=${encodeURIComponent(JSON.stringify(filters.location))}`
  //   ].filter(s => !!s) ?? [];
  //
  // console.log(filters);
  // console.log(`announcements?${queryStringArray.join("&")}`);
  //
  // const query = useQuery<Announcement[]>("my-announcements", () =>
  //   fetch(BACKEND_URL + `announcements?${queryStringArray.join("&")}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) =>
  //       res.map((announcementResponse: any) => ({
  //         ...announcementResponse,
  //         creationDate: new Date(announcementResponse.creationDate),
  //         lastUpdateDate: new Date(announcementResponse.lastUpdateDate),
  //         closingDate: new Date(announcementResponse.closingDate),
  //         pet: {
  //           ...announcementResponse.pet,
  //           birthday: new Date(announcementResponse.pet.birthday),
  //         },
  //       }))
  //     )
  // );
  // return query;
};
