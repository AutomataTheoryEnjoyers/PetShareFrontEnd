import { useQuery } from "react-query";
import { ReportResponse } from "../../types/reportResponse";
import { REPORT_URL } from "../../backendUrl";
import { PaginationParameters } from "../../types/paginationParameters";
import { UserContextType } from "../../types/userContextType";
import { useContext } from "react";
import { UserContext } from "../../components/userContext";

export const useReports = (paginationParams: PaginationParameters | null) => {
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

  const { userData } = useContext<UserContextType>(UserContext);
  const query = useQuery<ReportResponse>(
    `my-announcements-page-${paginationParams?.PageNumber}`,
    () =>
      fetch(REPORT_URL + `reports/?${queryStringArray.join("&")}`, {
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
        reports: query.data?.reports.map((reportResponse: any) => ({
          ...reportResponse,
        })),
        pageNumber: query.data?.pageNumber,
        count: query.data?.count,
      } as ReportResponse);

  console.log(response);
  return { query, response };
};
