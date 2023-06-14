import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { User } from "../../types/user";

export const useGetUserSingle = (userId: string) => {
    const query = useQuery<User>("get-user", () =>
        fetch(BACKEND_URL + "adopter/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => ({
                ...res,
                address: {
                    ...res.adress,
                },
            }))
    );
    return query;
};
