import { useQuery } from "react-query";
import { BACKEND_URL } from "../backendUrl";
import { AnnouncementFilters } from "../types/announcementFilter";
import { AnnouncementResponse } from "../types/announcementResponse";
import { PaginationParameters } from "../types/paginationParameters";

export const useAnnouncements = (
  filters: AnnouncementFilters | null,
  liked: boolean,
  paginationParams: PaginationParameters | null
) => {
  const queryStringArray =
    [
      filters?.maxAge && `maxAge=${filters.maxAge}`,
      filters?.minAge && `minAge=${filters.minAge}`,
      filters?.breed.length &&
        `breed=${encodeURIComponent(JSON.stringify(filters.breed))}`,
      filters?.shelter.length &&
        `shelter=${encodeURIComponent(JSON.stringify(filters.shelter))}`,
      filters?.species.length &&
        `species=${encodeURIComponent(JSON.stringify(filters.species))}`,
      filters?.location.length &&
        `location=${encodeURIComponent(JSON.stringify(filters.location))}`,
      liked && `isLiked=${encodeURIComponent(JSON.stringify(liked))}`,
      paginationParams?.PageNumber &&
        `PageNumber=${encodeURIComponent(
          JSON.stringify(paginationParams.PageNumber)
        )}`,
      paginationParams?.PageCount &&
        `PageCount=${encodeURIComponent(
          JSON.stringify(paginationParams.PageCount)
        )}`,
    ].filter((s) => !!s) ?? [];

    console.log(filters);
    console.log(`announcements?${queryStringArray.join("&")}`);

  const query = useQuery<AnnouncementResponse>(
    `my-announcements-page-${paginationParams?.PageNumber}`,
    () =>
      fetch(BACKEND_URL + `announcements?${queryStringArray.join("&")}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())
  );

  const response = query.isLoading
    ? null
    : ({
        announcements: query.data?.announcements.map(
          (announcementResponse: any) => ({
            ...announcementResponse,
            creationDate: new Date(announcementResponse.creationDate),
            lastUpdateDate: new Date(announcementResponse.lastUpdateDate),
            closingDate: new Date(announcementResponse.closingDate),
            pet: {
              ...announcementResponse.pet,
              birthday: new Date(announcementResponse.pet.birthday),
            },
          })
        ),
        pageNumber: query.data?.pageNumber,
        count: query.data?.count,
      } as AnnouncementResponse);

  console.log(response);
  return { query, response };
};
