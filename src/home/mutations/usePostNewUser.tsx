import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";

export const usePostNewUser = (user: any, role: string) => {
    const query = useQuery("new-" + role, () =>
        fetch(BACKEND_URL + role, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((res) => res.json())
    );
    return query;
};