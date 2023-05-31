import { useQuery, UseQueryResult } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Pet } from "../../types/pet";

export const usePets = (): UseQueryResult<Pet[], unknown> => {
    const query = useQuery<Pet[]>("my-pets", () =>
        fetch(BACKEND_URL + "pet", {
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
                    birthday: new Date(res.birthday),
                }))
            )
    );
    
  return query;
};