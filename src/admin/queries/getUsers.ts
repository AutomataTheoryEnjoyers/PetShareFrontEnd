import { useQuery } from "react-query";
import { UserResponse } from "../../types/userResponse";
import { BACKEND_URL } from "../../backendUrl";
import { PaginationParameters } from "../../types/paginationParameters";
import { UserContextType } from "../../types/userContextType";
import { useContext } from "react";
import { UserContext } from "../../components/userContext";

export const useUsers = (
    paginationParams: PaginationParameters | null
) => {

    const { userData } = useContext<UserContextType>(UserContext);
    const query = useQuery<UserResponse>(
        `users-page-${paginationParams?.PageNumber}`,
        () =>
            fetch(BACKEND_URL + `adopter`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${userData?.accessToken}`,
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json())
    );

    const response = query.isLoading
        ? null
        : {
            adopters: query.data?.adopters.map((userResponse: any) => ({
                ...userResponse,
                isAuthorized: false,
                address: {
                    ...userResponse.address,
                },
            })),
            pageNumber: query.data?.pageNumber,
            count: query.data?.count,
        } as UserResponse;

    console.log(response);
    return { query, response };
};