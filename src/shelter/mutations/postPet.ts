import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewPet } from "../../types/newPet";

export const usePostPet = (pet: NewPet) => {
    const query = useMutation("new-pet", () =>
        fetch(BACKEND_URL + "pet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pet),
        }).then((res) => res.json())
    );
    return query;
};