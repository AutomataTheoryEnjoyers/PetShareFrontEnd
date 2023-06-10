import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { Report } from "../../types/report";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const useReports = () => {
    const { userData } = useContext<UserContextType>(UserContext);

    const query = useQuery<Report[]>("reports", () =>
        fetch(BACKEND_URL + "reports", {
            method: "GET",
            headers: {
                authorization: `Bearer ${userData?.accessToken}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) =>
                res.map((res: any) => ({
                    ...res
                }))
            )
    );
    return query;
};