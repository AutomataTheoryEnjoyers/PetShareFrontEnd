// import { useQuery } from "react-query"
import { useContext } from "react";
import { Application } from "../../types/application";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { ApplicationResponse } from "../../types/applicationsResponse";

export const useMyApplicationsShelter = (
  announcementId: string,
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
    "my-applications-per-announcement",
    () =>
      fetch(
        `${BACKEND_URL}applications/${announcementId}?${queryStringArray.join(
          "&"
        )}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${userData?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) =>
          res.applications.map((res: any) => ({
            ...res,
          }))
        )
  );
  return query;
};
