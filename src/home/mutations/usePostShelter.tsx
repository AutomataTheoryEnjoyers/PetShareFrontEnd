import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewShelter } from "../../types/newShelter";

export const usePostShelter = (shelter: NewShelter) => {
    const query = useQuery("new-adopter", () =>
        fetch(BACKEND_URL + "shelter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(shelter),
        }).then((res) => res.json())
    );
    return query;
};