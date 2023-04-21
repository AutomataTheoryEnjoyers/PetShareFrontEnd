import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewAnouncement } from "../../types/newAnnouncement";

export const usePostAdopter = (announcement: NewAnouncement) => {
    // const query = useQuery("new-adopter", () =>
    //     fetch(BACKEND_URL + "announcements", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(announcement),
    //     }).then((res) => res.json())
    // );
    // return query;
};