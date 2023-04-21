import { useQuery } from "react-query";
import { NewShelter } from "../../types/newShelter";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;

export const usePatchAuth0 = () => {
    const { userData } = useContext<UserContextType>(UserContext);

    const query = useQuery("patch-user-role-and-db_id", () =>
        fetch(`https://${domain}/api/v2/users/user_id`, {
            method: "PATCH",
            headers: {
                "authorization": `Bearer ${userData?.accessToken}`,
                "content-type": "application/json",
            },
            body: JSON.stringify({ "app_metadata": { "role": userData?.role, "db_id": userData?.userIdDB } }),
        }).then((res) => res.json())
    );
    return query;
};