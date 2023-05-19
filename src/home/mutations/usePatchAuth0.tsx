import { useMutation } from "react-query";
import { useContext } from "react";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;

export const usePatchAuth0 = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const { mutateAsync } = useMutation(
    () =>
      fetch(`https://${domain}/api/v2/users/user_id`, {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${userData?.accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          app_metadata: { role: userData?.role, db_id: userData?.userIdDB },
        }),
      }),
    {
      onSuccess: async (data) => {
        console.log(
          "Auth0 patch successful " + JSON.stringify(await data.json())
        );
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return mutateAsync;
};
