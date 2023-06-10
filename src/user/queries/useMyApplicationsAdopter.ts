import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { BACKEND_URL } from "../../backendUrl";
import { ApplicationResponse } from "../../types/applicationsResponse";
import { useQuery } from "react-query";

export const useMyApplicationsAdopter = (
  pageNumber: number,
  pageCount: number
) => {
  const { userData } = useContext<UserContextType>(UserContext);

  const queryStringArray =
    [
      pageNumber &&
        `PageNumber=${encodeURIComponent(JSON.stringify(pageNumber))}`,
      pageCount && `PageCount=${encodeURIComponent(JSON.stringify(pageCount))}`,
    ].filter((s) => !!s) ?? [];

  const query = useQuery<ApplicationResponse>(
    `my-applications-per-announcement-page${pageNumber}`,
    () =>
      fetch(`${BACKEND_URL}applications?${queryStringArray.join("&")}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())
  );

  const response = query.isLoading
    ? null
    : ({
        applications: query.data?.applications.map(
          (applicationResponse: any) => ({
            ...applicationResponse,
            announcement: {
              ...applicationResponse.announcement,
              creationDate: new Date(
                applicationResponse.announcement.creationDate
              ),
              lastUpdateDate: new Date(
                applicationResponse.announcement.lastUpdateDate
              ),
              closingDate: new Date(
                applicationResponse.announcement.closingDate
              ),
              pet: {
                ...applicationResponse.announcement.pet,
                birthday: new Date(
                  applicationResponse.announcement.pet.birthday
                ),
              },
            },
          })
        ),
        pageNumber: query.data?.pageNumber,
        count: query.data?.count,
      } as ApplicationResponse);
  return { query, response };
};
