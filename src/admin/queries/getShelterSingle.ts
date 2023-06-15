import { useContext } from "react";
import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { UserContext } from "../../components/userContext";
import { Shelter } from "../../types/shelter";
import { UserContextType } from "../../types/userContextType";

export const useGetShelterSingle = (shelterId: string) => {
    const { userData } = useContext<UserContextType>(UserContext);
    const query = useQuery<Shelter>("get-shelter", () =>
        fetch(BACKEND_URL + "shelter/" + shelterId, {
            method: "GET",
            headers: {
                authorization: `Bearer ${userData?.accessToken}`,
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
