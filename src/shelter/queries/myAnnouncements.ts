import { useQuery } from "react-query";
import { PaginationParameters } from "../../types/paginationParameters";
import { AnnouncementResponse } from "../../types/announcementResponse";
import { BACKEND_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const useMyAnnouncements = (
  paginationParams: PaginationParameters | null
) => {
  const { userData } = useContext<UserContextType>(UserContext);

  const queryStringArray =
    [
      paginationParams?.PageNumber &&
        `PageNumber=${encodeURIComponent(
          JSON.stringify(paginationParams.PageNumber)
        )}`,
      paginationParams?.PageCount &&
        `PageCount=${encodeURIComponent(
          JSON.stringify(paginationParams.PageCount)
        )}`,
    ].filter((s) => !!s) ?? [];

  console.log(`announcements?${queryStringArray.join("&")}`);

  const query = useQuery<AnnouncementResponse>(
    `my-announcements-shelter-page-${paginationParams?.PageNumber}`,
    () =>
      fetch(
        BACKEND_URL + `shelter/announcements?${queryStringArray.join("&")}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${userData?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json())
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

  return { query, response };
};
