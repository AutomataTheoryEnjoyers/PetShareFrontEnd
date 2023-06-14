import { useQuery } from "react-query";
import { ReportResponse } from "../../types/reportResponse";
import { BACKEND_URL } from "../../backendUrl";
import { PaginationParameters } from "../../types/paginationParameters";

export const useReports = (
    paginationParams: PaginationParameters | null
) => {
    

    const query = useQuery<ReportResponse>(
        `my-announcements-page-${paginationParams?.PageNumber}`,
        () =>
            fetch(BACKEND_URL + `reports`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json())
    );

    const response = query.isLoading
        ? null
        : ({
            reports: query.data?.reports.map(
                (reportResponse: any) => ({
                   ...reportResponse
                })
            ),
            pageNumber: query.data?.pageNumber,
            count: query.data?.count,
        } as ReportResponse);

    console.log(response);
    return { query, response };
};