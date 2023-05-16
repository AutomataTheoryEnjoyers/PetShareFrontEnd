import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewPet } from "../../types/newPet";

export const usePostPet = () => {

    const { mutateAsync } = useMutation(
        (pet: NewPet) => fetch(BACKEND_URL + "pet", {
            method: "POST",
            body: JSON.stringify(pet),
            headers: {
                //"authorization": `Bearer ${userData?.accessToken}`, DO DODANIA PO MERGE'U AUTORYZACJI
                "Content-Type": "application/json",
            },
        }),
        {
            onSuccess: async (data) => {
                console.log("Pet successfully added: " + JSON.stringify(await data.json()));
            },
            onError: (error) => {
                console.log(error);
            },
        }
    )

    return mutateAsync;
};