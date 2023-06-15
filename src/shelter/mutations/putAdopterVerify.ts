import { useMutation } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

export const usePutAdopterVerify = () => {
    const { userData } = useContext<UserContextType>(UserContext);

    const { mutateAsync } = useMutation(
        (adopterId: string) =>
            fetch(BACKEND_URL + "adopter/" + adopterId + "/verify", {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${userData?.accessToken}`,
                    "Content-Type": "application/json",
                },
            }),
        {
            onSuccess: async () => {
                console.log("Adopter successfully verfied");
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    return mutateAsync;
};
