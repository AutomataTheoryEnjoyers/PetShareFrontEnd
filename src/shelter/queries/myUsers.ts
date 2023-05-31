import { useQuery, UseQueryResult } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { User } from "../../types/user";

export const useMyUsers = (): UseQueryResult<User[], unknown> => {
    const query = useQuery<User[]>("my-user", () =>
        fetch(BACKEND_URL + "shelter/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                accept: "text/plain",
            },
        })
            .then((res) => res.json())
            .then((res) =>
                res.map((res: any) => ({
                    ...res,
                }))
            )
    );
    return query;
};