import { useMutation } from "react-query";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { MutationContextType } from "../../types/mutationContext";
import { MutationContext } from "../../components/mutationContext";

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;

export const usePatchAuth0 = () => {
  const { userData } = useContext<UserContextType>(UserContext);
  const { setMutationData } = useContext<MutationContextType>(MutationContext);

  const { mutateAsync } = useMutation(
    (accessToken: string) =>
      fetch(`https://${domain}/api/v2/users/${userData?.userIdAuth0}`, {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          app_metadata: { role: userData?.role, db_id: userData?.userIdDB },
        }),
      }),
    {
      onSuccess: async (data) => {
        setMutationData({ mutationSuccessful: true });
        console.log(
          "Auth0 patch successful " + JSON.stringify(await data.json())
        );
        console.log(userData);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
