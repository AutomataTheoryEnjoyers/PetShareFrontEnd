import { useQuery, UseQueryResult } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Report } from "../../types/report";
import { mockReports } from "../../mocks/mockData"

export const useReports = () => { //UseQueryResult<User[], unknown> => {
    const reports = {
        isLoading: false,
        data: mockReports, 
    }

    return reports;
    //const query = useQuery<User[]>("my-user", () =>
    //    fetch(BACKEND_URL + "shelter/user", {
    //        method: "GET",
    //        headers: {
    //            "Content-Type": "application/json",
    //            accept: "text/plain",
    //        },
    //    })
    //        .then((res) => res.json())
    //        .then((res) =>
    //            res.map((res: any) => ({
    //                ...res,
    //            }))
    //        )
    //);
    //return query;
};