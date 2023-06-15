import { useQuery } from "react-query";
import { BACKEND_URL } from "../../backendUrl";
import { UserContextType } from "../../types/userContextType";
import { useContext } from "react";
import { UserContext } from "../../components/userContext";
import { VerificationResult } from "../../types/verificationResult";

export const useAdopterVerification = (adopterId: string, adopterName: string) => {
    const { userData } = useContext<UserContextType>(UserContext);
    const query = useQuery<VerificationResult>(`isVerified${adopterId}`, () =>
        fetch(BACKEND_URL + "adopter/" + adopterId + "/isVerified", {
            method: "GET",
            headers: {
                authorization: `Bearer ${userData?.accessToken}`,
                "Content-Type": "application/json",
            },
        })

            .then((res) => res.json())
            .then((res) => ({
                
                isVerified: res,
            }))
    );
    const response = query.isLoading
        ? null
        : ({
            isVerified: query.data?.isVerified,
        } as VerificationResult);
    console.log(response);
    console.log(adopterName);
    return { query, response };
};
