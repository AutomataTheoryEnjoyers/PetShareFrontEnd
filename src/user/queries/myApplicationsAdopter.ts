import { useContext } from "react";
import { Application } from "../../types/application";
import { UserContextType } from "../../types/userContextType";
import { UserContext } from "../../components/userContext";
import { useQuery } from "react-query";
import { ADOPTER_URL, BACKEND_URL } from "../../backendUrl";

export const useMyApplicationsAdopter = () => {
  const { userData } = useContext<UserContextType>(UserContext);

  const query = useQuery<Application[]>("my-applications-adopter", () =>
    fetch(ADOPTER_URL + "applications", {
      method: "GET",
      headers: {
        authorization: `Bearer ${userData?.accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        res.map((res: any) => ({
          ...res,
        }))
      )
  );
  return query;
};
