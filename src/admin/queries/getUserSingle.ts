import { useContext } from "react";
import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { UserContext } from "../../components/userContext";
import { User } from "../../types/user";
import { UserContextType } from "../../types/userContextType";

export const useGetUserSingle = (userId: string) => {
    const { userData } = useContext<UserContextType>(UserContext);
    const query = useQuery<User>("get-adopter", () =>
        fetch(BACKEND_URL + "adopter/" + userId, {
            method: "GET",
            headers: {
                authorization: `Bearer ${userData?.accessToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => ({
                ...res,
                address: {
                    ...res.address,
                },
            }))
    );
    return query;
};
