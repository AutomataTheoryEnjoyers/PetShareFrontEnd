import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { UpdateUser } from "../../types/updateUser";

export const usePutUser = () => {
    const { userData } = useContext<UserContextType>(UserContext);

    const { mutateAsync } = useMutation(
        (updateUser: UpdateUser) => {
            const { id, ...updateUserData } = updateUser;
            return fetch(BACKEND_URL + "adopter/" + id, {
                method: "PUT",
                body: JSON.stringify(updateUserData),
                headers: {
                    authorization: `Bearer ${userData?.accessToken}`,
                    "Content-Type": "application/json",
                },
            });
        },
        {
            onSuccess: async () => {
                console.log("Adopter successfully updated");
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    return mutateAsync;
};