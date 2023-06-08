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
    "my-applications-per-announcement",
    () =>
      fetch(`${BACKEND_URL}applications?${queryStringArray.join("&")}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) =>
          res.applications.map((res: any) => ({
            ...res,
          }))
        )
  );
  return query;
};
