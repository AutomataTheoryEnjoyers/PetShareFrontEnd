import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Shelter } from "../../types/shelter";

export const useGetShelterSingle = (shelterId: string) => {
    const query = useQuery<Shelter>("get-shelter", () =>
        fetch(BACKEND_URL + "shelter/" + shelterId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => ({
                ...res,
                address:
                {
                    ...res.address,
                },
            }))
    );
    return query;
};
