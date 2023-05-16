import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { NewAdopter } from "../../types/NewAdopter";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const usePostNewAdopter = () => {
    const { userData } = useContext<UserContextType>(UserContext);

    const { mutateAsync } = useMutation(
        (adopter: NewAdopter) => fetch(BACKEND_URL + "adopter", {
            method: "POST",
            body: JSON.stringify(adopter),
            headers: {
                "authorization": `Bearer ${userData?.accessToken}`,
                "Content-Type": "application/json",
            },
        }),
        {
            onSuccess: async (data) => {
                console.log("Shelter successfully added: " + JSON.stringify(await data.json()));
            },
            onError: (error) => {
                console.log(error);
            },
        }
    )

    return mutateAsync;
};