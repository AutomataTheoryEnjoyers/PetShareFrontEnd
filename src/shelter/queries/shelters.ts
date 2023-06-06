import { useQuery, UseQueryResult } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Shelter } from "../../types/shelter";
import { mockShelters } from "../../mocks/mockData"

export const useShelters = () => { //UseQueryResult<User[], unknown> => {
    const shelters = {
        isLoading: false,
        data: mockShelters,
    }

    return shelters;
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